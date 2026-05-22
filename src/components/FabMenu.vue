<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // [{ key, icon, label, onClick, highlight? }]
  },
})

const open = ref(false)
const rootEl = ref(null)

const toggle = () => (open.value = !open.value)

const handleClickOutside = (e) => {
  if (rootEl.value && !rootEl.value.contains(e.target)) open.value = false
}

const handleItem = (item) => {
  open.value = false
  item.onClick?.()
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <div class="fab-root" ref="rootEl">
    <transition-group name="fab-item" tag="div" class="fab-items">
      <button
        v-for="(item, idx) in (open ? items : [])"
        :key="item.key"
        class="fab-item"
        :class="{ highlight: item.highlight }"
        :style="{ bottom: idx * 46 + 'px' }"
        @click="handleItem(item)"
      >
        <span class="material-icons-outlined">{{ item.icon }}</span>
        <span class="fab-item-label">{{ item.label }}</span>
      </button>
    </transition-group>
    <button
      class="fab-main"
      :class="{ active: open }"
      @click.stop="toggle"
      :aria-label="open ? '收合選單' : '展開選單'"
      :aria-expanded="open"
    >
      <span class="material-icons-outlined">{{ open ? 'close' : 'apps' }}</span>
    </button>
  </div>
</template>

<style scoped>
/* 右下角 FAB，連續項往上展開；避開底部 Mapbox attribution */
.fab-root {
  position: fixed;
  bottom: 30px;
  right: 14px;
  z-index: 999;
}
.fab-main {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  background: var(--primary);
  color: var(--primary-contrast);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: transform 0.2s ease, background 0.2s ease;
}
.fab-main:hover {
  transform: translateY(-1px);
}
.fab-main.active {
  background: var(--danger);
  color: #fff;
}
.fab-items {
  position: absolute;
  right: 0;
  bottom: 58px; /* 主按鈕高度 48 + 10 間距 */
  pointer-events: none;
}
.fab-item {
  position: absolute;
  right: 0;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: background 0.15s, color 0.15s, transform 0.15s;
  white-space: nowrap;
}
.fab-item:hover {
  background: var(--surface-2);
  color: var(--primary);
}
.fab-item.highlight {
  animation: fab-pulse 1.6s infinite;
}
.fab-item .material-icons-outlined {
  font-size: 18px;
  color: var(--primary);
}

@keyframes fab-pulse {
  0%, 100% {
    box-shadow: var(--shadow-md);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(46, 231, 214, 0.25), var(--shadow-md);
  }
}

.fab-item-enter-from,
.fab-item-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.95);
}
.fab-item-enter-active,
.fab-item-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
</style>
