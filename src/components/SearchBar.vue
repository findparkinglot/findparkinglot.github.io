<script setup>
import { ref, computed, watch } from 'vue'
import { searchParkings } from '@/composables/useParkingSearch.js'
import { resolveIconUrl } from '@/utils/parseKml.js'

const props = defineProps({
  mapDataList: Array,
  communityParkings: { type: Array, default: () => [] },
})
const emit = defineEmits(['select'])

const open = ref(false)
const query = ref('')
const activeIndex = ref(-1)

const results = computed(() => {
  if (!query.value) return []
  return searchParkings(props.mapDataList, query.value, 15, props.communityParkings)
})

watch(query, () => {
  activeIndex.value = -1
})

const toggle = () => {
  open.value = !open.value
  if (!open.value) query.value = ''
}

const close = () => {
  open.value = false
  query.value = ''
}

const onSelect = (item) => {
  emit('select', item)
  close()
}

const onKey = (e) => {
  if (!results.value.length) return
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % results.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value =
      (activeIndex.value - 1 + results.value.length) % results.value.length
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const i = activeIndex.value >= 0 ? activeIndex.value : 0
    onSelect(results.value[i])
  } else if (e.key === 'Escape') {
    close()
  }
}
</script>

<template>
  <div class="search-wrap" :class="{ open }">
    <ul v-if="open && results.length" class="search-results" role="listbox">
      <li
        v-for="(r, i) in results"
        :key="i"
        :class="['search-item', { active: i === activeIndex }]"
        role="option"
        :aria-selected="i === activeIndex"
        @mouseenter="activeIndex = i"
        @click="onSelect(r)"
      >
        <img
          v-if="r.icon"
          :src="resolveIconUrl(r.icon)"
          class="search-item-icon"
          alt=""
        />
        <div class="search-item-text">
          <div class="search-item-name">{{ r.name }}</div>
          <div class="search-item-group">{{ r.groupName }}</div>
        </div>
      </li>
    </ul>

    <div v-else-if="open && query && !results.length" class="search-empty">
      找不到「{{ query }}」相關停車場
    </div>

    <div v-show="open" class="search-box" role="combobox" aria-expanded="true">
      <span class="material-icons-outlined search-icon">search</span>
      <input
        v-model="query"
        class="search-input"
        type="text"
        placeholder="搜尋停車場名稱…"
        autofocus
        @keydown="onKey"
      />
      <button
        v-if="query"
        class="search-clear"
        @click="query = ''"
        aria-label="清除"
      >
        <span class="material-icons-outlined">close</span>
      </button>
    </div>

    <button
      class="search-toggle"
      :class="{ active: open }"
      @click="toggle"
      :aria-label="open ? '關閉搜尋' : '開啟搜尋'"
      :aria-expanded="open"
    >
      <span class="material-icons-outlined">
        {{ open ? 'close' : 'search' }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.search-wrap {
  position: fixed;
  z-index: 999;
  bottom: 30px;
  right: 76px;
  left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  pointer-events: none;
  width: auto;
}
.search-wrap.open {
  width: min(500px, calc(100% - 100px));
}
.search-toggle,
.search-box,
.search-results,
.search-empty {
  pointer-events: auto;
}
.search-toggle {
  align-self: flex-end;
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
.search-toggle:hover {
  transform: translateY(-1px);
  background: var(--primary-hover);
}
.search-toggle.active {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}
.search-toggle .material-icons-outlined {
  font-size: 24px;
}
.search-box {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 8px 14px;
  box-shadow: var(--shadow-md);
  min-height: 44px;
  width: 100%;
}
.search-icon {
  color: var(--muted);
  font-size: 18px;
}
.search-input {
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text);
  font-size: 0.95rem;
  padding: 4px 0;
  min-width: 0;
}
.search-input::placeholder {
  color: var(--muted);
}
.search-clear {
  background: transparent;
  border: 0;
  color: var(--muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 50%;
  flex-shrink: 0;
}
.search-clear:hover {
  background: var(--surface-2);
  color: var(--text);
}
.search-clear .material-icons-outlined {
  font-size: 16px;
}
.search-results {
  list-style: none;
  margin: 0;
  padding: 6px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);
  max-height: 50dvh;
  overflow-y: auto;
  width: 100%;
}
.search-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: var(--radius-sm);
  cursor: pointer;
}
.search-item.active,
.search-item:hover {
  background: var(--surface-2);
}
.search-item-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
.search-item-text {
  min-width: 0;
  flex: 1;
}
.search-item-name {
  color: var(--text);
  font-size: 0.88rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-item-group {
  color: var(--muted);
  font-size: 0.72rem;
  margin-top: 2px;
}
.search-empty {
  padding: 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--muted);
  font-size: 0.85rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  width: 100%;
}

@media (max-width: 768px) {
  .search-wrap.open {
    width: auto;
    left: 14px;
  }
}
</style>
