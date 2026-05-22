<script setup>
import { ref, watch, computed } from 'vue'
import BaseModal from './BaseModal.vue'
import {
  parkingTypeList,
  degreeOfFriendlinessList,
} from '@/constants/parking.js'

const props = defineProps({
  open: Boolean,
  mode: { type: String, default: 'add' }, // 'add' | 'edit'
  initial: { type: Object, default: null },
  defaultCoord: { type: Array, default: () => [121.5173399, 25.0475613] },
  nickname: { type: String, default: '' },
  isOwner: { type: Boolean, default: false },
  submitting: { type: Boolean, default: false },
})
const emit = defineEmits([
  'update:open',
  'update:nickname',
  'submit',
  'delete',
])

// 表單欄位
const name = ref('')
const description = ref('')
const category = ref('motorcycle')
const friendliness = ref('friendly')
const priceType = ref('free') // 'free' | 'h' | 'd' | 'custom'
const priceAmount = ref('')
const priceCustom = ref('')
const coords = ref([null, null])

const categoryOptions = computed(() =>
  parkingTypeList.filter((o) => o.value)
)
const friendlinessOptions = computed(() =>
  degreeOfFriendlinessList.filter((o) => o.value)
)

// 特殊類別固定圖示（不受友善程度影響）
const SPECIAL_ICON = {
  greenP: 'icon-15.png',
  yellowP: 'icon-16.png',
  purpleP: 'icon-17.png',
  redX: 'icon-12.png',
  fix: 'icon-14.png',
}

const computedIcon = computed(() => {
  if (SPECIAL_ICON[category.value]) return SPECIAL_ICON[category.value]
  const cat = parkingTypeList.find((p) => p.value === category.value)
  const fri = degreeOfFriendlinessList.find((p) => p.value === friendliness.value)
  if (!cat) return 'icon-3.png'
  if (!fri) return cat.key[0]
  const intersect = cat.key.find((k) => fri.key.includes(k))
  return intersect || cat.key[0]
})

const friendlinessLocked = computed(() => Boolean(SPECIAL_ICON[category.value]))

function parsePrice(s) {
  if (!s) return { type: 'free', amount: '', custom: '' }
  const trimmed = s.trim()
  if (/^free$/i.test(trimmed)) return { type: 'free', amount: '', custom: '' }
  const m = trimmed.match(/^(\d+(?:\.\d+)?)\s*\/\s*([hd])$/i)
  if (m) return { type: m[2].toLowerCase(), amount: m[1], custom: '' }
  return { type: 'custom', amount: '', custom: trimmed }
}
function formatPrice() {
  if (priceType.value === 'free') return 'Free'
  if (priceType.value === 'custom') return priceCustom.value.trim()
  if (!priceAmount.value) return ''
  return `${priceAmount.value}/${priceType.value}`
}

const reset = () => {
  if (props.mode === 'edit' && props.initial) {
    name.value = props.initial.name || ''
    description.value = props.initial.description || ''
    category.value = props.initial.category || 'motorcycle'
    friendliness.value = props.initial.friendliness || 'friendly'
    const p = parsePrice(props.initial.priceInfo || '')
    priceType.value = p.type
    priceAmount.value = p.amount
    priceCustom.value = p.custom
    coords.value = props.initial.coordinates
      ? [...props.initial.coordinates]
      : [...props.defaultCoord]
  } else {
    name.value = ''
    description.value = ''
    category.value = 'motorcycle'
    friendliness.value = 'friendly'
    priceType.value = 'free'
    priceAmount.value = ''
    priceCustom.value = ''
    coords.value = [...props.defaultCoord]
  }
}

watch(
  () => props.open,
  (v) => {
    if (v) reset()
  }
)

const errorMsg = ref('')

const onSubmit = () => {
  errorMsg.value = ''
  if (!name.value.trim()) {
    errorMsg.value = '請輸入名稱'
    return
  }
  if (
    coords.value[0] == null ||
    coords.value[1] == null ||
    Number.isNaN(Number(coords.value[0])) ||
    Number.isNaN(Number(coords.value[1]))
  ) {
    errorMsg.value = '座標無效'
    return
  }
  emit('submit', {
    name: name.value,
    description: description.value,
    iconKey: computedIcon.value,
    category: category.value,
    friendliness: friendlinessLocked.value ? '' : friendliness.value,
    priceInfo: formatPrice(),
    coordinates: [Number(coords.value[0]), Number(coords.value[1])],
  })
}

const onDelete = () => {
  if (!props.initial?.id) return
  if (window.confirm(`確定要刪除「${name.value}」?此動作無法復原。`)) {
    emit('delete', props.initial.id)
  }
}

const isOpen = computed({
  get: () => props.open,
  set: (v) => emit('update:open', v),
})

const PRICE_OPTIONS = [
  { value: 'free', label: '免費' },
  { value: 'h', label: '計時 / 小時' },
  { value: 'd', label: '計次 / 天' },
  { value: 'custom', label: '其他' },
]
</script>

<template>
  <BaseModal
    v-model="isOpen"
    :title="mode === 'edit' ? '編輯停車場' : '新增停車場'"
    size="md"
  >
    <div class="editor-body">
      <p class="editor-note">
        <span class="material-icons-outlined">push_pin</span>
        共筆停車點:任何人都可以新增或修改。請確認資訊正確、避免不雅內容。
      </p>

      <section class="form-group">
        <label class="form-label">名稱 *</label>
        <input
          v-model="name"
          class="form-control"
          type="text"
          placeholder="例:三張里地下停車場"
          maxlength="60"
        />
      </section>

      <section class="form-group">
        <label class="form-label">類別</label>
        <select v-model="category" class="form-control">
          <option v-for="o in categoryOptions" :key="o.value" :value="o.value">
            {{ o.name }}
          </option>
        </select>
      </section>

      <section class="form-group">
        <label class="form-label">
          友善程度
          <span v-if="friendlinessLocked" class="hint-inline">(此類別不適用)</span>
        </label>
        <select
          v-model="friendliness"
          class="form-control"
          :disabled="friendlinessLocked"
        >
          <option v-for="o in friendlinessOptions" :key="o.value" :value="o.value">
            {{ o.name }}
          </option>
        </select>
      </section>

      <section class="form-group">
        <label class="form-label">收費</label>
        <div class="chip-row">
          <button
            v-for="o in PRICE_OPTIONS"
            :key="o.value"
            type="button"
            :class="['chip', { active: priceType === o.value }]"
            @click="priceType = o.value"
          >
            {{ o.label }}
          </button>
        </div>
        <div v-if="priceType === 'h' || priceType === 'd'" class="price-amount">
          <input
            v-model="priceAmount"
            type="number"
            min="0"
            step="1"
            class="form-control compact"
            placeholder="金額"
          />
          <span class="unit">元 / {{ priceType === 'h' ? '小時' : '次' }}</span>
        </div>
        <div v-else-if="priceType === 'custom'" class="price-amount">
          <input
            v-model="priceCustom"
            type="text"
            class="form-control"
            placeholder="如:平日 30/h、假日 50/d"
            maxlength="40"
          />
        </div>
      </section>

      <section class="form-group">
        <label class="form-label">說明(選填)</label>
        <textarea
          v-model="description"
          class="form-control"
          rows="3"
          placeholder="後牌辨析、24h、注意事項..."
          maxlength="500"
        />
      </section>

      <section class="form-group">
        <label class="form-label">暱稱(選填)</label>
        <input
          :value="nickname"
          @input="emit('update:nickname', $event.target.value)"
          class="form-control"
          type="text"
          placeholder="留空將顯示「匿名#xxx-xxx」"
          maxlength="20"
        />
      </section>

      <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
    </div>

    <template #footer>
      <button
        v-if="mode === 'edit' && isOwner"
        class="btn btn-danger btn-sm"
        :disabled="submitting"
        @click="onDelete"
      >
        刪除
      </button>
      <button class="btn btn-outline" :disabled="submitting" @click="isOpen = false">
        取消
      </button>
      <button class="btn btn-primary" :disabled="submitting" @click="onSubmit">
        {{ submitting ? '送出中…' : mode === 'edit' ? '儲存修改' : '新增' }}
      </button>
    </template>
  </BaseModal>
</template>

<style scoped>
.editor-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.editor-note {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 4px;
  padding: 8px 10px;
  background: var(--primary-soft);
  border-radius: var(--radius-md);
  font-size: 0.78rem;
  color: var(--text);
}
.editor-note .material-icons-outlined {
  font-size: 16px;
  color: var(--primary);
}
.form-group {
  margin: 0;
}
.form-label {
  display: block;
  font-size: 0.82rem;
  color: var(--muted);
  margin-bottom: 6px;
  font-weight: 600;
}
.hint-inline {
  color: var(--muted);
  font-weight: 400;
  font-size: 0.72rem;
  margin-left: 4px;
}
.form-control {
  width: 100%;
  padding: 9px 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text);
  font-size: 0.92rem;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.form-control:focus {
  outline: 0;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-soft);
}
.form-control:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
textarea.form-control {
  resize: vertical;
  font-family: inherit;
}
.icon-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 0.78rem;
  color: var(--muted);
}
.icon-preview img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  object-fit: cover;
}
.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
  font-size: 0.82rem;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.chip:hover {
  border-color: var(--primary);
}
.chip.active {
  background: var(--primary);
  color: var(--primary-contrast);
  border-color: var(--primary);
}
.price-amount {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}
.price-amount .compact {
  flex: 0 0 120px;
}
.price-amount .unit {
  color: var(--muted);
  font-size: 0.85rem;
}
.error-msg {
  margin: 0;
  color: var(--danger);
  font-size: 0.85rem;
  background: var(--danger-soft);
  padding: 8px 10px;
  border-radius: var(--radius-md);
}
</style>
