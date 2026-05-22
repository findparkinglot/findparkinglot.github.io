<script setup>
const props = defineProps({
  info: Object,
  active: Boolean,
  isMobile: Boolean,
  isApple: Boolean,
  isAndroid: Boolean,
  hasRoute: Boolean,
})
const emit = defineEmits(['close', 'route', 'openMap'])
</script>

<template>
  <aside
    class="info-panel"
    :class="{ active }"
    aria-label="停車場資訊"
  >
    <button class="panel-close" @click="emit('close')" aria-label="關閉">
      <span class="material-icons-outlined">close</span>
    </button>

    <header class="info-header">
      <img
        v-if="info.parkingIcon"
        class="info-icon"
        :src="info.parkingIcon"
        alt=""
      />
      <h3 class="info-title">{{ info.parkingName }}</h3>
    </header>

    <div
      v-if="info.parkingNameDes"
      class="info-desc"
      v-html="info.parkingNameDes"
    />

    <div v-if="info.address" class="info-address">{{ info.address }}</div>

    <div class="info-meta">
      <span class="badge">{{ info.parkingType }}</span>
      <span class="coord">
        {{ Number(info.geometry[0]).toFixed(5) }},
        {{ Number(info.geometry[1]).toFixed(5) }}
      </span>
    </div>

    <div class="info-actions">
      <button
        v-if="!isAndroid"
        class="btn btn-primary btn-sm"
        @click="emit('openMap', 'apple')"
      >
        <span class="material-icons-outlined">map</span>
        Apple Map
      </button>
      <button
        :class="['btn', 'btn-sm', isAndroid ? 'btn-primary' : 'btn-outline']"
        @click="emit('openMap', 'google')"
      >
        <span class="material-icons-outlined">map</span>
        Google Map
      </button>
      <button
        v-if="!hasRoute"
        class="btn btn-outline btn-sm"
        @click="emit('route')"
      >
        <span class="material-icons-outlined">directions</span>
        路線規劃
      </button>
    </div>
  </aside>
</template>

<style scoped>
.info-panel {
  position: fixed;
  z-index: 998;
  left: auto;
  right: 14px;
  bottom: max(16px, env(safe-area-inset-bottom));
  width: calc(100% - 28px);
  max-width: 380px;
  max-height: 60dvh;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  color: var(--text);
  padding: 18px;
  transform: translateY(calc(100% + 40px));
  opacity: 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s;
  overflow-y: auto;
}
.info-panel.active {
  transform: translateY(0);
  opacity: 1;
}
.panel-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.panel-close:hover {
  background: var(--primary);
  color: var(--primary-contrast);
}
.info-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 32px;
  margin-bottom: 8px;
}
.info-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.info-title {
  margin: 0;
  color: var(--primary);
  font-size: 1.05rem;
}
.info-desc {
  font-size: 0.88rem;
  color: var(--text);
  line-height: 1.6;
  margin: 6px 0;
}
.info-address {
  font-size: 0.78rem;
  color: var(--muted);
  margin: 4px 0;
}
.info-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin: 8px 0 12px;
  font-size: 0.72rem;
  color: var(--muted);
}
.badge {
  background: var(--surface-2);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}
.coord {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}
.info-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.info-actions .btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.info-actions .material-icons-outlined {
  font-size: 16px;
}

@media (max-width: 768px) {
  .info-panel {
    right: 8px;
    bottom: max(12px, env(safe-area-inset-bottom));
    width: calc(100% - 16px);
    max-height: 55dvh;
    padding: 14px;
  }
}
</style>
