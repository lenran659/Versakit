<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ContainerProps } from '../type/index.ts'

defineOptions({ name: 'VerContainer' })

const props = withDefaults(defineProps<ContainerProps>(), {
  direction: 'row',
})

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
