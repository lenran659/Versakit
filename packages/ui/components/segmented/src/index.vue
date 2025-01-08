<script setup lang="ts">
import { computed, onMounted } from 'vue'
import type { SegmentedProps } from '../type'

defineOptions({ name: 'VerSegmented' })

const props = withDefaults(defineProps<SegmentedProps>(), {
  options: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const updateValue = (value: string | number) => {
  emit('update:modelValue', value)
}

const activeIndex = computed(() =>
  props.options.findIndex((option: any) => option.value === props.modelValue),
)

onMounted(() => {
  const container: any = document.querySelector('.segmented-control-container')
  if (container) {
    container.style.setProperty(
      '--segment-count',
      props.options.length.toString(),
    )
  }
})
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
        class="segmented-control-item"
        v-for="(option, index) in props.options"
        :key="index"
      >
        <input
          type="radio"
          :id="index.toString()"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="updateValue(option.value)"
        />
        <label :for="`${index}`">
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="../style/index.scss"></style>
