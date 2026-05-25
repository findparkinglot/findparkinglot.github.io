<script setup>
import { ref, watch, computed } from 'vue'
import BaseModal from './BaseModal.vue'
import {
  parkingTypeList,
  degreeOfFriendlinessList,
} from '@/constants/parking.js'

const props = defineProps({
  open: Boolean,
  // 'add' | 'edit' | 'override'
  //   override = 覆寫官方點：座標固定、無法刪除（只能「重設」回官方原值）
  mode: { type: String, default: 'add' },
  initial: { type: Object, default: null },
  defaultCoord: { type: Array, default: () => [121.5173399, 25.0475613] },
  nickname: { type: String, default: '' },
  isOwner: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  submitting: { type: Boolean, default: false },
  // override 模式專用：是否已存在覆寫資料 (決定是否顯示「重設為官方資料」按鈕)
  hasExistingOverride: { type: Boolean, default: false },
  // 歷史記錄陣列（最新在前）
  history: { type: Array, default: () => [] },
})
const emit = defineEmits([
  'update:open',
  'update:nickname',
  'submit',
  'delete',
  'reset',
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
// 檔名依 canonical KML (目前 = PackingMarkerList2) 的 icon-N.png
const SPECIAL_ICON = {
  greenP: 'icon-15.png',
  purpleP: 'icon-18.png',
  redX: 'icon-19.png',
  unknown: 'icon-20.png',
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
  if ((props.mode === 'edit' || props.mode === 'override') && props.initial) {
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

const onReset = () => {
  if (window.confirm(`確定要重設「${name.value}」回官方原始資料嗎?\n你和其他車友先前的修改將被移除。`)) {
    emit('reset')
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

// =================== 歷史紀錄 ===================
const historyExpanded = ref(false)
const displayHistory = computed(() => {
  if (!props.history || props.history.length === 0) return []
  return historyExpanded.value ? props.history : props.history.slice(0, 5)
})
const ACTION_LABEL = {
  create: '新增',
  update: '修改',
  delete: '刪除',
  override: '覆寫',
  reset: '重設',
}
function actionLabel(a) {
  return ACTION_LABEL[a] || a || '變更'
}
function byLabel(by) {
  if (!by) return '系統'
  return by.nickname || (by.id ? `匿名#${by.id}` : '匿名')
}
function formatTime(ms) {
  if (!ms || !isFinite(Number(ms))) return ''
  const d = new Date(Number(ms))
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}
const HIST_FIELD_LABEL = {
  name: '名稱',
  description: '說明',
  iconKey: '圖示',
  category: '類別',
  friendliness: '友善度',
  priceInfo: '收費',
  lng: '經度',
  lat: '緯度',
}
function displayValue(v) {
  if (v === undefined || v === null || v === '') return '(空)'
  if (typeof v === 'number') return String(v)
  const s = String(v)
  return s.length > 40 ? s.slice(0, 40) + '…' : s
}
/** 規範化值以判定「空 / 兩值相同」:字串會 trim,空白字串視為空 */
function normVal(v) {
  if (v === undefined || v === null) return ''
  if (typeof v === 'string') return v.trim()
  return String(v)
}
function isEmpty(v) {
  return normVal(v) === ''
}
/** 返回一個歷史条目要顯示的 diff 項目陣列:
 *  [{ label, before, after }, ...]
 *  優先使用新格式 { before, after }。
 *  舊格式只有 { snapshot } 時,會在「history 中該項目」找上一筆更舊的紀錄,
 *  並以兩者 snapshot 的差異作為 diff。
 *  注意:若 before 為空(代表原本就沒值,使用者只是第一次填上預設值/沒實際改),
 *       會直接濾掉這列,避免歷史看起來像「改了一堆東西」。
 */
function diffLines(h, idx) {
  if (!h || h.action === 'delete' || h.action === 'reset') return []
  // 新格式:before / after
  if (h.after && typeof h.after === 'object') {
    const keys = Object.keys(h.after)
    return keys
      .filter((k) => {
        const b = h.before?.[k]
        const a = h.after[k]
        if (isEmpty(b) && isEmpty(a)) return false // 都空就忽略
        if (normVal(b) === normVal(a)) return false // trim 後相同也忽略
        if (isEmpty(b)) return false // 舊值為空 → 視為「原本沒值」,不顯示
        return true
      })
      .map((k) => ({
        label: HIST_FIELD_LABEL[k] || k,
        before: displayValue(h.before?.[k]),
        after: displayValue(h.after[k]),
        hasBefore: true,
      }))
  }
  // 舊格式:snapshot → 跟上一筆更舊的 history 做 diff
  const snap = h.snapshot
  if (!snap || typeof snap !== 'object') return []
  const skip = new Set([
    'createdAt', 'createdBy', 'updatedAt', 'updatedBy',
    'origName', 'origLng', 'origLat', 'history',
  ])
  // props.history 是「最新在前」,所以「更舊一筆」= idx + 1
  // (但 displayHistory 可能被裁切,所以用 props.history 來定位)
  const fullIdx = props.history.findIndex((x) => x._key === h._key)
  const olderEntry = fullIdx >= 0 ? props.history[fullIdx + 1] : null
  // 取「更舊一筆」的 after 或 snapshot 作為基準
  const olderState = olderEntry
    ? (olderEntry.after && typeof olderEntry.after === 'object'
        ? { ...(olderEntry.before || {}), ...olderEntry.after }
        : (olderEntry.snapshot || null))
    : null
  const lines = []
  for (const k of Object.keys(snap)) {
    if (skip.has(k)) continue
    const newVal = snap[k]
    if (olderState && Object.prototype.hasOwnProperty.call(olderState, k)) {
      const oldVal = olderState[k]
      if (normVal(oldVal) === normVal(newVal)) continue
      if (isEmpty(oldVal)) continue // 原本沒值 → 視為「使用者未實際變更」,不顯示
      lines.push({
        label: HIST_FIELD_LABEL[k] || k,
        before: displayValue(oldVal),
        after: displayValue(newVal),
        hasBefore: true,
      })
    }
    // 沒有更舊的紀錄(第一筆),或舊值為空 → 不顯示
  }
  return lines
}
function actionSummary(h) {
  if (h?.action === 'delete') return '該項目被刪除'
  if (h?.action === 'reset') return '重設為官方資料'
  if (h?.action === 'create') return '新增此停車點'
  return ''
}
</script>

<template>
  <BaseModal
    v-model="isOpen"
    :title="mode === 'override' ? '修改官方停車點' : (mode === 'edit' ? '編輯停車場' : '新增停車場')"
    size="md"
  >
    <div class="editor-body">
      <p v-if="mode === 'override'" class="editor-note override-note">
        <span class="material-icons-outlined">edit_note</span>
        你正在「修改官方停車點」:這層修改只會疊加在官方資料之上,不會覆蓋原始資料。所有車友都會看到你的修改,也可以再被其他人修改或重設。
      </p>
      <p v-else class="editor-note">
        <span class="material-icons-outlined">push_pin</span>
        共筆停車點:任何人都可以新增或修改。請確認資訊正確、避免不雅內容。
      </p>

      <section class="form-group">
        <label class="form-label">
          名稱 <span v-if="mode !== 'override'">*</span>
          <span v-if="mode === 'override'" class="hint-inline">(官方名稱不可修改)</span>
        </label>
        <input
          v-model="name"
          class="form-control"
          type="text"
          placeholder="例:三張里地下停車場"
          maxlength="60"
          :readonly="mode === 'override'"
          :disabled="mode === 'override'"
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

      <section v-if="history.length" class="form-group history-section">
        <label class="form-label">
          <span class="material-icons-outlined" style="font-size:14px;vertical-align:-2px">history</span>
          修改紀錄 ({{ history.length }})
        </label>
        <ul class="history-list">
          <li v-for="(h, idx) in displayHistory" :key="h._key" class="history-item">
            <div class="h-row1">
              <span
                class="h-action"
                :class="`h-action-${h.action || 'other'}`"
              >{{ actionLabel(h.action) }}</span>
              <span class="h-by">{{ byLabel(h.by) }}</span>
              <span class="h-time">{{ formatTime(h.at) }}</span>
            </div>
            <div v-if="actionSummary(h)" class="h-diff h-diff-note">{{ actionSummary(h) }}</div>
            <ul v-else-if="diffLines(h, idx).length" class="h-diff-list">
              <li v-for="(d, i) in diffLines(h, idx)" :key="i" class="h-diff-item">
                <span class="h-diff-label">{{ d.label }}</span>
                <template v-if="d.hasBefore">
                  <span class="h-diff-old">{{ d.before }}</span>
                  <span class="h-diff-arrow">→</span>
                </template>
                <span class="h-diff-new">{{ d.after }}</span>
              </li>
            </ul>
            <div v-else class="h-diff h-diff-note">(與上一筆相同)</div>
          </li>
        </ul>
        <button
          v-if="history.length > 5"
          type="button"
          class="history-toggle"
          @click="historyExpanded = !historyExpanded"
        >
          {{ historyExpanded ? '收起' : `顯示全部 ${history.length} 筆` }}
        </button>
      </section>
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
      <button
        v-if="mode === 'override' && hasExistingOverride && isAdmin"
        class="btn btn-danger btn-sm"
        :disabled="submitting"
        @click="onReset"
        title="僅站方可使用"
      >
        重設為官方資料
      </button>
      <button class="btn btn-outline" :disabled="submitting" @click="isOpen = false">
        取消
      </button>
      <button class="btn btn-primary" :disabled="submitting" @click="onSubmit">
        {{
          submitting
            ? '送出中…'
            : mode === 'override'
              ? '儲存修改'
              : mode === 'edit'
                ? '儲存修改'
                : '新增'
        }}
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
.editor-note.override-note {
  background: #fff3cd;
  color: #5b3a00;
  border: 1px solid #ffe69c;
}
.editor-note.override-note .material-icons-outlined {
  color: #b9770e;
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

/* =================== 歷史紀錄區塊 =================== */
.history-section {
  border-top: 1px dashed var(--border);
  padding-top: 12px;
  margin-top: 4px;
}
.history-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 220px;
  overflow-y: auto;
}
.history-item {
  padding: 6px 10px;
  background: var(--surface-2);
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
}
.h-row1 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  color: var(--text);
}
.h-action {
  font-weight: 700;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
  background: var(--primary-soft, rgba(46, 231, 214, 0.18));
  color: var(--primary);
}
.h-action-create,
.h-action-override {
  background: rgba(46, 231, 214, 0.22);
  color: var(--primary);
}
.h-action-update {
  background: rgba(255, 193, 7, 0.22);
  color: #b9770e;
}
.h-action-delete,
.h-action-reset {
  background: rgba(244, 67, 54, 0.22);
  color: #c0392b;
}
.h-by {
  color: var(--text);
  font-weight: 600;
}
.h-time {
  margin-left: auto;
  color: var(--muted);
  font-size: 0.72rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.h-diff {
  margin-top: 2px;
  color: var(--muted);
  font-size: 0.74rem;
}
.h-diff-note {
  font-style: italic;
}
.h-diff-list {
  list-style: none;
  margin: 4px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.h-diff-item {
  font-size: 0.74rem;
  line-height: 1.45;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px;
}
.h-diff-label {
  color: var(--muted);
  flex-shrink: 0;
}
.h-diff-label::after {
  content: ':';
  margin-left: 1px;
}
.h-diff-old {
  color: #b14a4a;
  text-decoration: line-through;
  text-decoration-color: rgba(177, 74, 74, 0.55);
  word-break: break-all;
}
.h-diff-arrow {
  color: var(--muted);
}
.h-diff-new {
  color: var(--text);
  font-weight: 500;
  word-break: break-all;
}
.history-toggle {
  margin-top: 6px;
  background: transparent;
  border: 0;
  color: var(--primary);
  font-size: 0.78rem;
  cursor: pointer;
  padding: 4px 0;
}
.history-toggle:hover {
  text-decoration: underline;
}
</style>
