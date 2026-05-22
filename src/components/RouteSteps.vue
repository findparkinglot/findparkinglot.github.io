<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  routeData: Object,
  active: Boolean,
  profile: { type: String, default: 'driving' },
})
const emit = defineEmits(['cancel', 'update:profile'])

const expanded = ref(true)
const toggle = () => (expanded.value = !expanded.value)

const profileOptions = [
  { value: 'driving', label: '汽機車', icon: 'directions_car' },
  { value: 'cycling', label: '單車', icon: 'directions_bike' },
  { value: 'walking', label: '步行', icon: 'directions_walk' },
]

const distanceText = computed(() => {
  const d = props.routeData?.distance
  if (typeof d !== 'number') return ''
  return d >= 1000 ? `${(d / 1000).toFixed(1)} km` : `${Math.round(d)} m`
})

const durationText = computed(() => {
  const s = props.routeData?.duration
  if (typeof s !== 'number') return ''
  const min = Math.round(s / 60)
  if (min < 60) return `${min} 分`
  const h = Math.floor(min / 60)
  const m = min % 60
  return m ? `${h} 時 ${m} 分` : `${h} 時`
})

const changeProfile = (v) => emit('update:profile', v)
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

    <div v-if="routeData" class="route-summary">
      <div class="route-summary-item">
        <span class="material-icons-outlined">schedule</span>
        <strong>{{ durationText }}</strong>
      </div>
      <div class="route-summary-item">
        <span class="material-icons-outlined">straighten</span>
        <strong>{{ distanceText }}</strong>
      </div>
    </div>

    <div class="route-profile" role="tablist" aria-label="交通方式">
      <button
        v-for="opt in profileOptions"
        :key="opt.value"
        :class="['profile-btn', { active: profile === opt.value }]"
        @click="changeProfile(opt.value)"
        :aria-pressed="profile === opt.value"
      >
        <span class="material-icons-outlined">{{ opt.icon }}</span>
        <span class="profile-label">{{ opt.label }}</span>
      </button>
    </div>

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
.route-summary {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}
.route-summary-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--surface-2);
  border-radius: var(--radius-md);
  padding: 8px 10px;
  font-size: 0.85rem;
  color: var(--text);
}
.route-summary-item .material-icons-outlined {
  font-size: 16px;
  color: var(--primary);
}
.route-summary-item strong {
  color: var(--text);
  font-weight: 700;
}
.route-profile {
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  background: var(--surface-2);
  border-radius: var(--radius-md);
  padding: 3px;
}
.profile-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 8px;
  border: 0;
  background: transparent;
  color: var(--muted);
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.78rem;
  transition: background 0.15s, color 0.15s;
}
.profile-btn:hover {
  color: var(--text);
}
.profile-btn.active {
  background: var(--primary);
  color: var(--primary-contrast);
}
.profile-btn .material-icons-outlined {
  font-size: 16px;
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
  .profile-label {
    display: none;
  }
}
</style>
