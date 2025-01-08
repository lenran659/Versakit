<script setup lang="ts">
import type { CSSProperties } from 'vue'

defineOptions({ name: 'VerContainer' })

const props = withDefaults(
  defineProps<{
    direction: 'row' | 'column'
  }>(),
  {
    direction: 'row',
  },
)

const style: CSSProperties = {
  'flex-direction': props.direction,
}
</script>

<template>
  <section class="ver-container" :style="style">
    <slot></slot>
  </section>
</template>

<style lang="scss" src="../style/index.scss" scoped></style>
