<script setup>
import { ref } from 'vue'

const props = defineProps({
  routeData: Object,
  active: Boolean,
})
const emit = defineEmits(['cancel'])

const expanded = ref(true)
const toggle = () => (expanded.value = !expanded.value)
</script>

<template>
  <aside class="route-panel" :class="{ active }">
    <header class="route-header">
      <h3>
        <span class="material-icons-outlined">alt_route</span>
        路線
      </h3>
      <button class="route-toggle" @click="toggle" :aria-expanded="expanded">
        <span class="material-icons-outlined">
          {{ expanded ? 'expand_less' : 'expand_more' }}
        </span>
      </button>
    </header>

    <ol v-if="routeData && expanded" class="route-steps">
      <li
        v-for="(step, index) in routeData.legs[0].steps"
        :key="index"
        class="route-step"
      >
        {{ step.maneuver.instruction }}
      </li>
    </ol>

    <button class="btn btn-danger btn-sm route-cancel" @click="emit('cancel')">
      取消路線規劃
    </button>
  </aside>
</template>

<style scoped>
.route-panel {
  position: fixed;
  z-index: 1000;
  top: 14px;
  right: 80px;
  width: calc(100% - 100px);
  max-width: 380px;
  max-height: calc(100dvh - 28px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  color: var(--text);
  padding: 16px;
  transform: translateX(calc(100% + 100px));
  opacity: 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.route-panel.active {
  transform: translateX(0);
  opacity: 1;
}
.route-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.route-header h3 {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  color: var(--primary);
  font-size: 1.05rem;
}
.route-toggle {
  background: transparent;
  border: 0;
  color: var(--muted);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--radius-sm);
}
.route-toggle:hover {
  background: var(--surface-2);
  color: var(--text);
}
.route-steps {
  list-style: decimal;
  padding-left: 20px;
  margin: 0 0 12px;
  max-height: 30vh;
  overflow-y: auto;
  background: var(--surface-2);
  border-radius: var(--radius-md);
  padding: 8px 8px 8px 28px;
}
.route-step {
  color: var(--text);
  font-size: 0.85rem;
  padding: 3px 0;
  line-height: 1.5;
}
.route-cancel {
  align-self: flex-end;
}

@media (max-width: 768px) {
  .route-panel {
    top: auto;
    right: 12px;
    left: 12px;
    bottom: 12px;
    max-width: none;
    width: auto;
    transform: translateY(calc(100% + 24px));
  }
  .route-panel.active {
    transform: translateY(0);
  }
}
</style>
