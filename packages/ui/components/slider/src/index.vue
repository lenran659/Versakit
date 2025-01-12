<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { SliderProps } from '../type/index'

const props = withDefaults(defineProps<SliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  showValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

const isDragging = ref(false)
const sliderRef = ref<HTMLElement | null>(null)

const normalizeValue = (value: number) => {
  const steppedValue =
    Math.round((value - props.min) / props.step) * props.step + props.min
  return Math.max(props.min, Math.min(props.max, steppedValue))
}

watch(
  () => props.modelValue,
  (newValue) => {
    const normalizedValue = normalizeValue(newValue)
    if (normalizedValue !== newValue) {
      emit('update:modelValue', normalizedValue)
    }
  },
  { immediate: true },
)

const percentage = computed(() => {
  const normalizedValue = normalizeValue(props.modelValue)
  return ((normalizedValue - props.min) / (props.max - props.min)) * 100
})

const updateValue = (event: MouseEvent | TouchEvent) => {
  if (props.disabled || !sliderRef.value) return

  const slider = sliderRef.value
  const rect = slider.getBoundingClientRect()
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX

  let percentage = (clientX - rect.left) / rect.width
  percentage = Math.max(0, Math.min(1, percentage))

  const rawValue = props.min + percentage * (props.max - props.min)
  const normalizedValue = normalizeValue(rawValue)

  if (normalizedValue !== props.modelValue) {
    emit('update:modelValue', normalizedValue)
    emit('change', normalizedValue)
  }
}

const handleMouseDown = (event: MouseEvent) => {
  if (props.disabled) return
  event.preventDefault()
  isDragging.value = true
  updateValue(event)
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
}

const handleMouseMove = (event: MouseEvent) => {
  if (isDragging.value) {
    event.preventDefault()
    updateValue(event)
  }
}

const handleMouseUp = () => {
  if (isDragging.value) {
    isDragging.value = false
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }
}

const handleTouchStart = (event: TouchEvent) => {
  if (props.disabled) return
  event.preventDefault()
  isDragging.value = true
  updateValue(event)
  window.addEventListener('touchmove', handleTouchMove, { passive: false })
  window.addEventListener('touchend', handleTouchEnd)
  window.addEventListener('touchcancel', handleTouchEnd)
}

const handleTouchMove = (event: TouchEvent) => {
  if (isDragging.value) {
    event.preventDefault()
    updateValue(event)
  }
}

const handleTouchEnd = () => {
  if (isDragging.value) {
    isDragging.value = false
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('touchcancel', handleTouchEnd)
  }
}
</script>

<template>
  <div
    class="slider"
    :class="{ 'is-disabled': disabled, 'is-dragging': isDragging }"
  >
    <div
      ref="sliderRef"
      class="slider-rail"
      @mousedown="handleMouseDown"
      @touchstart="handleTouchStart"
    >
      <div class="slider-track" :style="{ width: `${percentage}%` }" />
      <div class="slider-handle" :style="{ left: `${percentage}%` }">
        <div v-if="isDragging || showValue" class="slider-tooltip">
          {{ normalizeValue(modelValue) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="../style/index.scss"></style>
