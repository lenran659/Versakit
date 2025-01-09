<script setup lang="ts">
import type { GradientTextProps } from '../type/index'

const props = withDefaults(defineProps<GradientTextProps>(), {
  type: 'error',
  size: undefined,
})

const style = {
  fontSize: props.size,
}
</script>

<template>
  <div :class="['ver-gradient-text', props.type]" :style="style">
    <slot></slot>
  </div>
</template>

<style src="../style/index.scss"></style>
