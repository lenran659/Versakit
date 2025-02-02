<template>
  <div :class="['ver-gradient-text', props.type]" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { GradientTextProps } from '../type/index'
import { computed } from 'vue'

const props = withDefaults(defineProps<GradientTextProps>(), {
  type: 'error',
  size: 'md',
  gradient: () => ({
    rotate: 0,
    start: '',
    end: '',
  }),
})

const textSize = computed(() => {
  if (typeof props.size === 'number') {
    return `${props.size}px`
  }
  switch (props.size) {
    case 'xs':
      return '12px'
    case 'sm':
      return '14px'
    case 'lg':
      return '18px'
    default:
      return '16px'
  }
})

const style = computed(() => ({
  fontSize: textSize.value, // 使用 textSize 的计算值
  backgroundImage: `linear-gradient(
    ${props.gradient.rotate}deg,
    ${props.gradient.start},
    ${props.gradient.end}
  )`,
}))
</script>

<style src="../style/index.css"></style>
