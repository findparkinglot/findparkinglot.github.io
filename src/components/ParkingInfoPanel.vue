<script setup>
const props = defineProps({
  info: Object,
  active: Boolean,
  isMobile: Boolean,
  isApple: Boolean,
  isAndroid: Boolean,
  hasRoute: Boolean,
  isFavorite: Boolean,
  isCommunity: { type: Boolean, default: false },
  communityMeta: { type: Object, default: null },
  isOverridden: { type: Boolean, default: false },
  overrideMeta: { type: Object, default: null },
})
const emit = defineEmits([
  'close',
  'route',
  'openMap',
  'toggleFavorite',
  'editCommunity',
  'editOverride',
  'share',
])
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
      <button
        class="fav-btn"
        :class="{ active: isFavorite }"
        @click="emit('toggleFavorite')"
        :aria-label="isFavorite ? '從我的最愛移除' : '加入我的最愛'"
        :title="isFavorite ? '從我的最愛移除' : '加入我的最愛'"
      >
        <span class="material-icons-outlined">
          {{ isFavorite ? 'star' : 'star_border' }}
        </span>
      </button>
    </header>

    <div
      v-if="info.parkingNameDes"
      class="info-desc"
      v-html="info.parkingNameDes"
    />

    <div v-if="info.address" class="info-address">{{ info.address }}</div>

    <div v-if="isCommunity" class="community-tag">
      <span class="material-icons-outlined">push_pin</span>
      <span>
        共筆停車點
        <template v-if="communityMeta?.updatedBy?.nickname || communityMeta?.updatedBy?.id">
          · 由
          {{ communityMeta.updatedBy.nickname || `匿名#${communityMeta.updatedBy.id}` }}
          更新
        </template>
      </span>
    </div>

    <div v-else-if="isOverridden" class="override-tag">
      <span class="material-icons-outlined">edit_note</span>
      <span>
        車友修改資訊
        <template v-if="overrideMeta?.updatedBy?.nickname || overrideMeta?.updatedBy?.id">
          · 由
          {{ overrideMeta.updatedBy.nickname || `匿名#${overrideMeta.updatedBy.id}` }}
          更新
        </template>
      </span>
    </div>

    <div class="info-meta">
      <span class="badge">{{ info.parkingType }}</span>
      <span class="coord">
        {{ Number(info.geometry[0]).toFixed(5) }},
        {{ Number(info.geometry[1]).toFixed(5) }}
      </span>
    </div>
    <div class="info-actions">
      <button
        v-if="isCommunity"
          class="btn btn-outline btn-sm"
          @click="emit('editCommunity')"
      >
        <span class="material-icons-outlined">edit</span>
        編輯
      </button>
      <button
        v-else
        class="btn btn-outline btn-sm"
        @click="emit('editOverride')"
        :title="isOverridden ? '修改車友提供的資訊 (不會變動官方資料)' : '異議 / 補充官方資料 (不會變動官方資料)'"
      >
        <span class="material-icons-outlined">edit_note</span>
        {{ isOverridden ? '修改車友資訊' : '異議 / 補充' }}
      </button>
      <button
        class="btn btn-outline btn-sm"
        @click="emit('share')"
        title="分享這個停車點"
      >
        <span class="material-icons-outlined">share</span>
        分享
      </button>
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
  flex: 1;
  min-width: 0;
}
.fav-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background: var(--surface-2);
  color: var(--muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: color 0.15s, background 0.15s, transform 0.15s;
}
.fav-btn:hover {
  background: var(--surface-3, var(--surface-2));
  color: #ffc107;
  transform: scale(1.08);
}
.fav-btn.active {
  color: #ffc107;
}
.fav-btn .material-icons-outlined {
  font-size: 20px;
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
.community-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin: 6px 0 4px;
  padding: 4px 10px;
  background: #b39ddb;
  color: #000;
  border: 1px solid #7e57c2;
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
  font-weight: 700;
}
.community-tag .material-icons-outlined {
  font-size: 14px;
}
.override-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin: 6px 0 4px;
  padding: 4px 10px;
  background: #ffe082;
  color: #5b3a00;
  border: 1px solid #ffb300;
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
  font-weight: 700;
}
.override-tag .material-icons-outlined {
  font-size: 14px;
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
  /* flex-wrap: wrap; */
  /* gap: 6px; */

  margin-top: 8px; 
  display: flex; 
  justify-content: space-between;
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
