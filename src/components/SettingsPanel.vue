<script setup>
import { ref } from 'vue'
import {
  parkingTypeList,
  degreeOfFriendlinessList,
  mapStyleList,
} from '@/constants/parking.js'

const props = defineProps({
  parkingType: String,
  degreeOfFriendliness: String,
  parkingPriceType: String,
  priceRangeMin: Number,
  priceRangeMax: Number,
  mapStyle: String,
  active: Boolean,
})
const emit = defineEmits([
  'update:parkingType',
  'update:degreeOfFriendliness',
  'update:parkingPriceType',
  'update:priceRangeMin',
  'update:priceRangeMax',
  'update:mapStyle',
  'update:active',
])

const close = () => emit('update:active', false)
</script>

<template>
  <aside class="side-panel" :class="{ active }" aria-label="設定面板">
    <button class="side-panel-close" @click="close" aria-label="收合設定">
      <span class="material-icons-outlined">chevron_left</span>
    </button>

    <header class="side-panel-header">
      <img class="side-panel-logo" src="/logo.png" alt="重機能停哪" />
      <div class="side-panel-titles">
        <h3>重機能停哪?</h3>
        <span class="side-panel-subtitle">
          <span class="material-icons-outlined">tune</span>設定
        </span>
      </div>
    </header>

    <div class="side-panel-body">
      <section class="form-group">
        <label class="form-label">甚麼格位</label>
        <select
          class="form-control"
          :value="parkingType"
          @change="emit('update:parkingType', $event.target.value)"
        >
          <option :value="k.value" v-for="k in parkingTypeList" :key="k.value">
            {{ k.name }}
          </option>
        </select>
      </section>

      <section class="form-group">
        <label class="form-label">友善程度</label>
        <select
          class="form-control"
          :value="degreeOfFriendliness"
          @change="emit('update:degreeOfFriendliness', $event.target.value)"
        >
          <option
            :value="k.value"
            v-for="k in degreeOfFriendlinessList"
            :key="k.value"
          >
            {{ k.name }}
          </option>
        </select>
      </section>

      <section class="form-group">
        <label class="form-label">收費範圍</label>
        <div class="price-row">
          <template v-if="/d|h/.test(parkingPriceType)">
            <select
              class="form-control compact"
              :value="priceRangeMin"
              @change="emit('update:priceRangeMin', Number($event.target.value))"
            >
              <option
                :value="(k - 1) * 10"
                v-for="k in priceRangeMax / 10 + 1"
                :key="k"
              >
                {{ (k - 1) * 10 }}
              </option>
            </select>
            <span class="sep">~</span>
            <select
              class="form-control compact"
              :value="priceRangeMax"
              @change="emit('update:priceRangeMax', Number($event.target.value))"
            >
              <option
                :value="(k - 1) * 10 + priceRangeMin"
                v-for="k in 31 - priceRangeMin / 10"
                :key="k"
              >
                {{ (k - 1) * 10 + priceRangeMin }}
              </option>
            </select>
            <span class="sep">/</span>
          </template>
          <select
            class="form-control compact"
            :value="parkingPriceType"
            @change="emit('update:parkingPriceType', $event.target.value)"
          >
            <option value="">全部</option>
            <option value="free">免費</option>
            <option value="h">小時</option>
            <option value="d">每日</option>
          </select>
        </div>
      </section>

      <section class="form-group">
        <label class="form-label">主題顏色</label>
        <select
          class="form-control"
          :value="mapStyle"
          @change="emit('update:mapStyle', $event.target.value)"
        >
          <option :value="k.value" v-for="k in mapStyleList" :key="k.value">
            {{ k.name }}
          </option>
        </select>
      </section>

      <section class="form-group">
        <label class="form-label">停車場資料來源</label>
        <div class="link-list">
          <a
            href="https://linktr.ee/hueythegentry"
            target="_blank"
            rel="noopener"
            class="btn btn-outline btn-sm"
          >
            大重停車記事[更新至241231]
          </a>
          <a
            href="https://docs.google.com/document/d/16mq-fcaaaLaFSMcwFLrrbliBCsVjtYZZds90rWy7CVk/edit"
            target="_blank"
            rel="noopener"
            class="btn btn-outline btn-sm"
          >
            大重停車記事公告[240607]
          </a>
        </div>
      </section>

      <section class="form-group">
        <label class="form-label">問題回報</label>
        <p class="muted-text">
          1. 停車場資訊相關（新場地、收費錯誤）：
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnEyoJJlxGxKhf1UmZ_6pfMrjOiidD2SkvV5ZKFDFrQ6AvdA/viewform"
          target="_blank"
          rel="noopener"
          class="btn btn-outline btn-sm"
        >
          大重停車記事 回報表單
        </a>
        <p class="muted-text mt-8">2. 網頁 BUG、畫面跑版：</p>
        <a
          href="https://forms.gle/iJCyfqVtpL35WtZM7"
          target="_blank"
          rel="noopener"
          class="btn btn-outline btn-sm"
        >
          重機能停哪? 回報表單
        </a>
        <a
          href="https://buymeacoffee.com/jamestim923"
          target="_blank"
          rel="noopener"
          class="btn btn-coffee btn-sm mt-8"
        >
          ☕️ 請我喝杯咖啡，讓我有動力繼續更新
        </a>
      </section>

      <section class="form-group">
        <label class="form-label">資訊</label>
        <ul class="info-list">
          <li>版本：v1.1.0</li>
          <li>地圖資料更新：260522</li>
          <li>Web 製作：爽爽</li>
          <li>資料參考：大重停車記事 Google My Map</li>
          <li>地圖：Mapbox GL JS API</li>
          <li>© 2026 爽爽 版權所有。本網頁未經准許，禁止任何商業行為</li>
        </ul>
      </section>
    </div>
  </aside>
</template>

<style scoped>
.side-panel {
  position: fixed;
  z-index: 999;
  top: 14px;
  left: 14px;
  width: calc(100% - 28px);
  max-width: 380px;
  max-height: calc(100dvh - 28px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  color: var(--text);
  transform: translateX(calc(-100% - 20px));
  opacity: 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.side-panel.active {
  transform: translateX(0);
  opacity: 1;
}
.side-panel-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background: var(--surface-2);
  color: var(--text);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.side-panel-close:hover {
  background: var(--primary);
  color: var(--primary-contrast);
}
.side-panel-header {
  padding: 16px 48px 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
}
.side-panel-logo {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary);
  flex-shrink: 0;
}
.side-panel-titles {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.side-panel-titles h3 {
  margin: 0;
  color: var(--primary);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.side-panel-subtitle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.78rem;
  color: var(--muted);
}
.side-panel-subtitle .material-icons-outlined {
  font-size: 14px;
}
.side-panel-body {
  padding: 8px 16px 20px;
  overflow-y: auto;
  flex: 1;
}
.form-group {
  margin-bottom: 16px;
}
.form-label {
  display: block;
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 6px;
  font-weight: 600;
}
.form-control {
  width: 100%;
  padding: 10px 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text);
  font-size: 0.95rem;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.form-control:focus {
  outline: 0;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-soft);
}
.price-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.price-row .compact {
  flex: 1;
  text-align: center;
}
.price-row .sep {
  color: var(--muted);
  font-size: 0.9rem;
}
.link-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.muted-text {
  color: var(--muted);
  font-size: 0.8rem;
  margin: 0 0 6px;
}
.mt-8 {
  margin-top: 8px;
}
.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.7;
}
</style>
