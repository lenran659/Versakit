<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { ButtonProps, BtnPassThroughOptions } from '../type/index'

defineOptions({ name: 'VKButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  circle: false,
  size: 'md',
  icon: '',
  variant: '',
  type: 'primary',
  unstyled: false,
  pt: () => ({}) as BtnPassThroughOptions,
})

const attrs = useAttrs()

// 计算样式类
const baseClass = computed(() => {
  if (props.unstyled) return []

  const variantClasses = props.variant
    .split(' ')
    .filter(Boolean)
    .map((v) => `is-${v}`)

  return [
    'vk-btn',
    props.type === 'primary' ? 'vk-btn-primary' : `vk-btn-${props.type}`,
    ...variantClasses,
    props.circle && 'is-circle',
    props.disabled && 'is-disabled',
    props.size !== 'md' && `is-${props.size}`,
  ].filter(Boolean)
})

// 合并根元素属性
const rootAttrs = computed(() => ({
  ...attrs,
  class: [baseClass.value.join(' '), attrs.class, props.pt.root]
    .filter(Boolean)
    .join(' '),
  disabled: props.disabled || undefined,
}))
</script>

<template>
  <button v-bind="rootAttrs">
    <!-- Icon slot -->
    <span v-if="$slots.icon" v-bind="props.pt.icon">
      <slot name="icon" />
    </span>

    <!-- Icon prop -->
    <i v-else-if="props.icon" :class="props.icon" v-bind="props.pt.icon" />

    <!-- Label -->
    <span v-bind="props.pt.label">
      <slot></slot>
    </span>
  </button>
</template>

<style src="../style/index.css" lang="css" scoped></style>
