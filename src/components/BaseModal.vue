<script setup>
import { onMounted, onBeforeUnmount, watch, ref, nextTick } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: { type: String, default: '' },
  closeText: { type: String, default: '關閉' },
  size: { type: String, default: 'md' }, // sm/md/lg
})
const emit = defineEmits(['update:modelValue', 'close'])

const overlayEl = ref(null)

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const onKeydown = (e) => {
  if (e.key === 'Escape' && props.modelValue) close()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))

// 鎖背景捲動，並在打開時把內部捲軽重置到頂部
watch(
  () => props.modelValue,
  async (v) => {
    document.body.classList.toggle('modal-open', v)
    if (v) {
      await nextTick()
      overlayEl.value?.scrollTo({ top: 0, behavior: 'auto' })
    }
  }
)
</script>

<template>
  <Teleport to="body">
    <div
      class="modal-overlay"
      :class="{ active: modelValue }"
      @click.self="close"
      role="dialog"
      aria-modal="true"
      ref="overlayEl"
    >
      <div class="modal-card" :class="[`size-${size}`, { active: modelValue }]">
        <header v-if="title || $slots.header" class="modal-header">
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
          <button class="modal-close" @click="close" aria-label="關閉">
            <span class="material-icons-outlined">close</span>
          </button>
        </header>
        <div class="modal-body">
          <slot />
        </div>
        <footer v-if="$slots.footer || closeText" class="modal-footer">
          <slot name="footer">
            <button class="btn btn-primary" @click="close">{{ closeText }}</button>
          </slot>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--overlay);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 16px;
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.modal-overlay.active {
  visibility: visible;
  opacity: 1;
}
.modal-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  color: var(--text);
  padding: 20px;
  margin-top: 5vh;
  transform: translateY(-16px) scale(0.98);
  opacity: 0;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-card.active {
  transform: translateY(0) scale(1);
  opacity: 1;
}
.modal-card.size-sm {
  max-width: 320px;
}
.modal-card.size-lg {
  max-width: 560px;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  gap: 8px;
}
.modal-header h3 {
  color: var(--primary);
  font-size: 1.15rem;
  margin: 0;
}
.modal-close {
  background: transparent;
  border: 0;
  color: var(--muted);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--radius-sm);
  transition: background 0.15s, color 0.15s;
  display: inline-flex;
}
.modal-close:hover {
  background: var(--surface-2);
  color: var(--text);
}
.modal-body {
  font-size: 0.95rem;
  line-height: 1.6;
}
.modal-footer {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
