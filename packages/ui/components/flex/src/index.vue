<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import type { FlexProps } from '../type'

const props = withDefaults(defineProps<FlexProps>(), {
  vertical: false,
  wrap: 'nowrap',
  justify: 'normal',
  align: 'normal',
  gap: 'middle',
})

const gap = computed(() => {
  let gapValue = undefined
  switch (props.gap) {
    case 'small':
      gapValue = '8px'
      break
    case 'middle':
      gapValue = '16px'
      break
    case 'large':
      gapValue = '24px'
      break
    default:
      if (typeof props.gap === 'number') {
        gapValue = props.gap + 'px'
      } else if (Array.isArray(props.gap)) {
        gapValue = props.gap
          .map((item) => {
            return item + 'px'
          })
          .join(' ')
      }
  }
  return gapValue
})
</script>

<template>
  <div
    class="ver-flex"
    :class="{ 'ver-flex--vertical': vertical }"
    :style="{
      '--ver-flex-gap': gap,
      '--ver-flex-justify': justify,
      '--ver-flex-align': align,
      '--ver-flex-wrap': wrap,
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" src="../style/index.scss"></style>
