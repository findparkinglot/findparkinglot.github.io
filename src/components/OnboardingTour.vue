<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  // 是否啟用 (由父層控制)
  active: { type: Boolean, default: false },
  // 步驟清單：[{ selector, title, description, placement? ('auto'|'top'|'bottom'|'left'|'right') }]
  steps: { type: Array, required: true },
})

const emit = defineEmits(['update:active', 'finish'])

const currentIndex = ref(0)
const targetRect = ref(null) // { top, left, width, height }
const ready = ref(false)

const currentStep = computed(() => props.steps[currentIndex.value] || null)
const isLast = computed(() => currentIndex.value >= props.steps.length - 1)

// 取得 target 元素位置；找不到時 rect=null (顯示置中卡片)
const measure = async () => {
  await nextTick()
  const step = currentStep.value
  if (!step) {
    targetRect.value = null
    return
  }
  const el = step.selector ? document.querySelector(step.selector) : null
  if (!el) {
    targetRect.value = null
    return
  }
  const r = el.getBoundingClientRect()
  // 排除被隱藏的元素
  if (r.width === 0 && r.height === 0) {
    targetRect.value = null
    return
  }
  targetRect.value = {
    top: r.top,
    left: r.left,
    width: r.width,
    height: r.height,
  }
}

// 嘗試多次測量 (元素可能延後 mount，如 mapbox control)
const measureWithRetry = async () => {
  for (let i = 0; i < 8; i++) {
    await measure()
    if (targetRect.value) return
    await new Promise((r) => setTimeout(r, 150))
  }
}

watch(
  () => [props.active, currentIndex.value],
  async ([act]) => {
    if (!act) {
      ready.value = false
      return
    }
    ready.value = false
    await measureWithRetry()
    ready.value = true
  },
  { immediate: true }
)

const onResize = () => measure()
onMounted(() => {
  window.addEventListener('resize', onResize)
  window.addEventListener('scroll', onResize, true)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  window.removeEventListener('scroll', onResize, true)
})

const PAD = 8
const SPOT_RADIUS = 12

// 高亮框 (含 padding) 樣式
const spotlightStyle = computed(() => {
  const r = targetRect.value
  if (!r) return { display: 'none' }
  return {
    top: r.top - PAD + 'px',
    left: r.left - PAD + 'px',
    width: r.width + PAD * 2 + 'px',
    height: r.height + PAD * 2 + 'px',
    borderRadius: SPOT_RADIUS + 'px',
  }
})

// 卡片位置：放在 target 旁邊；若無 target → 置中
const CARD_W = 300
const CARD_GAP = 16

const cardStyle = computed(() => {
  const r = targetRect.value
  const vw = window.innerWidth
  const vh = window.innerHeight
  if (!r) {
    return {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: Math.min(CARD_W, vw - 32) + 'px',
    }
  }
  const placement = currentStep.value?.placement || 'auto'
  // 自動：上下空間大者
  let final = placement
  if (placement === 'auto') {
    const spaceBelow = vh - (r.top + r.height)
    const spaceAbove = r.top
    final = spaceBelow >= spaceAbove ? 'bottom' : 'top'
  }
  const w = Math.min(CARD_W, vw - 32)
  let top, left, transform = ''
  if (final === 'bottom') {
    top = r.top + r.height + CARD_GAP + PAD
    left = Math.max(16, Math.min(vw - w - 16, r.left + r.width / 2 - w / 2))
  } else if (final === 'top') {
    // 不能準確算高 (內容動態) → 用 transform 從底部上推
    top = r.top - CARD_GAP - PAD
    left = Math.max(16, Math.min(vw - w - 16, r.left + r.width / 2 - w / 2))
    transform = 'translateY(-100%)'
  } else if (final === 'right') {
    top = Math.max(16, r.top + r.height / 2)
    left = r.left + r.width + CARD_GAP + PAD
    transform = 'translateY(-50%)'
  } else {
    top = Math.max(16, r.top + r.height / 2)
    left = r.left - CARD_GAP - PAD
    transform = 'translate(-100%, -50%)'
  }
  return {
    top: top + 'px',
    left: left + 'px',
    width: w + 'px',
    transform,
  }
})

const next = () => {
  if (isLast.value) {
    finish()
  } else {
    currentIndex.value += 1
  }
}
const skip = () => finish()
const finish = () => {
  emit('update:active', false)
  emit('finish')
  currentIndex.value = 0
}

// active 切換時重置 index
watch(
  () => props.active,
  (v) => {
    if (v) currentIndex.value = 0
  }
)
</script>

<template>
  <div v-if="active && currentStep" class="tour-root" :class="{ 'is-ready': ready }">
    <!-- 半透明遮罩 + 透明開孔 (用 box-shadow 製造 spotlight) -->
    <div class="tour-spotlight" :style="spotlightStyle"></div>
    <!-- 透明 backdrop 攔截點擊 (避免使用者操作底下元素) -->
    <div class="tour-backdrop" @click.self="next"></div>

    <!-- 步驟卡片 -->
    <div class="tour-card" :style="cardStyle" role="dialog" aria-modal="true">
      <div class="tour-card-head">
        <span class="tour-step-index">
          {{ currentIndex + 1 }} / {{ steps.length }}
        </span>
        <button class="tour-skip" @click="skip" aria-label="略過導覽">略過</button>
      </div>
      <h3 class="tour-title">
        <span v-if="currentStep.icon" class="material-icons-outlined">{{ currentStep.icon }}</span>
        {{ currentStep.title }}
      </h3>
      <p class="tour-desc">{{ currentStep.description }}</p>
      <div class="tour-actions">
        <button class="btn btn-primary tour-next" @click="next">
          {{ isLast ? '完成' : '下一步' }}
          <span v-if="!isLast" class="material-icons-outlined">arrow_forward</span>
          <span v-else class="material-icons-outlined">check</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tour-root {
  position: fixed;
  inset: 0;
  z-index: 2000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
}
.tour-root.is-ready {
  opacity: 1;
}

/* spotlight：用超大 box-shadow 在四周染色 */
.tour-spotlight {
  position: absolute;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.65);
  border: 2px solid var(--primary, #2ee7d6);
  border-radius: 12px;
  pointer-events: none;
  transition: top 0.25s, left 0.25s, width 0.25s, height 0.25s;
  animation: tour-pulse 1.8s ease-in-out infinite;
}
@keyframes tour-pulse {
  0%, 100% { box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.65), 0 0 0 0 rgba(46, 231, 214, 0.5); }
  50% { box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.65), 0 0 0 8px rgba(46, 231, 214, 0); }
}

/* 透明 backdrop 攔截點擊 */
.tour-backdrop {
  position: absolute;
  inset: 0;
  pointer-events: auto;
  background: transparent;
}

.tour-card {
  position: absolute;
  pointer-events: auto;
  background: var(--surface, #fff);
  color: var(--text, #222);
  border: 1px solid var(--border, #ddd);
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  padding: 14px 16px 12px;
  max-width: calc(100vw - 32px);
  transition: top 0.25s, left 0.25s;
}
.tour-card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}
.tour-step-index {
  font-size: 0.75rem;
  color: var(--muted, #888);
  font-weight: 600;
  letter-spacing: 0.5px;
}
.tour-skip {
  background: transparent;
  border: 0;
  color: var(--muted, #888);
  font-size: 0.8rem;
  cursor: pointer;
  padding: 2px 6px;
  border-radius: 6px;
}
.tour-skip:hover {
  background: var(--surface-2, #f0f0f0);
  color: var(--text, #222);
}
.tour-title {
  margin: 0 0 6px;
  font-size: 1.02rem;
  font-weight: 700;
  color: var(--primary, #2ee7d6);
  display: flex;
  align-items: center;
  gap: 6px;
}
.tour-title .material-icons-outlined {
  font-size: 20px;
}
.tour-desc {
  margin: 0 0 12px;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text, #222);
}
.tour-actions {
  display: flex;
  justify-content: flex-end;
}
.tour-next {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 7px 14px;
  font-size: 0.88rem;
  border-radius: 999px;
}
.tour-next .material-icons-outlined {
  font-size: 18px;
}
</style>
