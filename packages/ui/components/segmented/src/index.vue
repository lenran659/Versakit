<script setup lang="ts">
import { computed } from 'vue'
import type { SegmentedProps } from '../type/index'

const props = defineProps<SegmentedProps>()

// 生成唯一的组件ID
const componentId = `segmented-${Math.random().toString(36).slice(2, 11)}`

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const updateValue = (value: string | number) => {
  emit('update:modelValue', value)
}

const activeIndex = computed(() =>
  props.options.findIndex((option: any) => option.value === props.modelValue),
)
</script>

<template>
  <div class="segmented-control">
    <div class="segmented-control-container" role="radiogroup">
      <div
        class="segmented-control-highlight"
        :style="{
          transform: `translateX(calc(${activeIndex * 100}% + 4px))`,
          width: `calc((100% - 8px) / ${options.length})`,
        }"
      />
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
        <label :for="`${componentId}-${index}`">
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="../style/index.scss"></style>
