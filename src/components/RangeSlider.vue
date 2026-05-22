<script setup>
import { computed } from 'vue'

const props = defineProps({
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 10 },
  modelMin: { type: Number, default: 0 },
  modelMax: { type: Number, default: 100 },
  suffix: { type: String, default: '' },
})
const emit = defineEmits(['update:modelMin', 'update:modelMax'])

const range = computed(() => props.max - props.min || 1)
const leftPct = computed(() => ((props.modelMin - props.min) / range.value) * 100)
const rightPct = computed(() => ((props.modelMax - props.min) / range.value) * 100)

const onMin = (e) => {
  let v = Number(e.target.value)
  if (v > props.modelMax) v = props.modelMax
  emit('update:modelMin', v)
}
const onMax = (e) => {
  let v = Number(e.target.value)
  if (v < props.modelMin) v = props.modelMin
  emit('update:modelMax', v)
}
</script>

<template>
  <div class="range-slider">
    <div class="range-track">
      <div
        class="range-fill"
        :style="{ left: leftPct + '%', right: 100 - rightPct + '%' }"
      ></div>
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelMin"
        @input="onMin"
        class="range-input range-input-min"
        aria-label="最低價格"
      />
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelMax"
        @input="onMax"
        class="range-input range-input-max"
        aria-label="最高價格"
      />
    </div>
    <div class="range-values">
      <span>{{ modelMin }}{{ suffix }}</span>
      <span class="range-sep">~</span>
      <span>{{ modelMax }}{{ suffix }}</span>
    </div>
  </div>
</template>

<style scoped>
.range-slider {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 4px 6px 0;
}
.range-track {
  position: relative;
  height: 28px;
}
.range-track::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--surface-3, var(--surface-2));
  border-radius: 999px;
  transform: translateY(-50%);
}
.range-fill {
  position: absolute;
  top: 50%;
  height: 4px;
  background: var(--primary);
  border-radius: 999px;
  transform: translateY(-50%);
  pointer-events: none;
}
.range-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  margin: 0;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
  pointer-events: none;
}
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--primary);
  border: 2px solid var(--surface);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  pointer-events: auto;
}
.range-input::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--primary);
  border: 2px solid var(--surface);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  pointer-events: auto;
}
.range-input::-webkit-slider-runnable-track {
  background: transparent;
}
.range-input::-moz-range-track {
  background: transparent;
}
.range-input-max {
  /* 讓 max 滑桿 thumb 在重疊時優先可被拖曳 */
  z-index: 2;
}
.range-input-min {
  z-index: 3;
}
.range-values {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  color: var(--muted);
}
.range-sep {
  color: var(--muted);
}
</style>
