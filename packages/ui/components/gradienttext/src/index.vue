<template>
  <div
    :class="['ver-gradient-text', props.type]"
    :style="{ '--size': (props.size ?? '16') + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { GradientTextProps } from '../type/index'

const props = withDefaults(defineProps<GradientTextProps>(), {
  type: 'error',
  size: undefined,
})
</script>

<style src="../style/index.scss"></style>
