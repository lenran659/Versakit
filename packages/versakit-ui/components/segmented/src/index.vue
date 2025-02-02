<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'
import type { SegmentedProps } from '../type/index.ts'

const props = defineProps<SegmentedProps>()
const componentId = `segmented-${Math.random().toString(36).slice(2, 11)}`
const labelRefs = ref<HTMLElement[]>([])

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const updateValue = (value: string | number) => {
  emit('update:modelValue', value)
}

const activeIndex = computed(() =>
  props.options.findIndex((option: any) => option.value === props.modelValue),
)

const highlightStyle = computed(() => {
  if (labelRefs.value.length === 0) return {}

  const activeLabel = labelRefs.value[activeIndex.value]
  if (!activeLabel) return {}

  let leftOffset = 0
  for (let i = 0; i < activeIndex.value; i++) {
    const label = labelRefs.value[i]
    if (label) {
      leftOffset += label.offsetWidth
    }
  }

  return {
    transform: `translateX(${leftOffset}px)`,
    width: `${activeLabel.offsetWidth}px`,
  }
})

onMounted(async () => {
  await nextTick()
  labelRefs.value = Array.from(
    document.querySelectorAll(`[data-segmented-id="${componentId}"]`),
  )
})
</script>

<template>
  <div class="segmented-control">
    <div class="segmented-control-container" role="radiogroup">
      <div class="segmented-control-highlight" :style="highlightStyle" />
      <div
        v-for="(option, index) in options"
        :key="option.value"
        class="segmented-control-item"
      >
        <input
          type="radio"
          :id="`${componentId}-${index}`"
          :name="componentId"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="updateValue(option.value)"
        />
        <label
          :for="`${componentId}-${index}`"
          :data-segmented-id="componentId"
          ref="labelRefs"
        >
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped src="../style/index.css"></style>
