<template>
  <div
    :class="['ver-col', classOptions]"
    class="ver-col"
    :style="{
      width: width,
      marginLeft: offset,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ColProps } from '../type/index'

defineOptions({ name: 'VerCol' })

const props = withDefaults(defineProps<ColProps>(), {
  span: 24,
  offset: 0,
})

function generateClass(props: ColProps, prefix: string) {
  const size: Array<keyof ColProps> = ['xs', 'sm', 'md', 'lg', 'xl']
  return size.reduce(
    (acc, cur) => {
      if (props[cur]) {
        acc[`${prefix}-${cur}-${props[cur]}`] = true
      }
      return acc
    },
    {} as Record<string, boolean>,
  )
}

const classOptions = computed(() => {
  const prefix = 'ver-col'
  return generateClass(props, prefix)
})

const width = computed(() => {
  if (Object.keys(classOptions.value).length !== 0) {
    return ''
  }
  return props.span <= 24
    ? props.span % 1 == 0
      ? (100 / 24) * props.span + '%'
      : ''
    : ''
})

const offset = computed(() => {
  return props.offset <= 24
    ? props.offset % 1 == 0
      ? (100 / 24) * props.offset + '%'
      : ''
    : ''
})
</script>

<style scoped src="../stye/index.css" lang="css"></style>
