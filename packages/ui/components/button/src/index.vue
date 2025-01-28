<template>
  <button
    :class="rootClasses"
    :style="mergedStyles"
    v-bind="otherAttrs"
    :disabled="props.disabled"
  >
    <ver-icon v-if="icon" :name="icon" :class="iconClasses"></ver-icon>

    <span :class="labelClasses">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { StyleValue } from 'vue'
import { VerIcon } from '../../icon/index'
import type { ButtonProps } from '../type/index'
import colors from '../../../utils/colors/colorMap'

defineOptions({
  name: 'VerButton',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  circle: false,
  size: 'md',
  icon: '',
  variant: '',
  color: 'violet',
  unstyled: false,
  pt: () => ({}),
})

const attrs = useAttrs()

// 属性解构与类型断言
const {
  class: userClass = '',
  style: userStyle = {} as StyleValue,
  ...otherAttrs
} = attrs as {
  class?: string | unknown[]
  style?: StyleValue
  [key: string]: unknown
}

// 根节点类名计算
const rootClasses = computed(() => {
  if (props.unstyled) return props.pt.root || ''

  const variantClasses = props.variant
    .split(' ')
    .filter(Boolean)
    .map((v) => `is-${v}`)

  return [
    props.pt.root || 'ver-btn',
    props.color && `ver-btn-${props.color}`,
    ...variantClasses,
    props.circle && 'is-circle',
    props.disabled && 'is-disabled',
    props.size !== 'md' && `is-${props.size}`,
    props.color && `is-${props.color.toLowerCase()}`,
    userClass,
  ].filter(Boolean) as string[]
})

// 图标类名计算
const iconClasses = computed(() => {
  if (props.unstyled) return props.pt.icon || ''
  return [
    props.pt.icon || 'ver-btn__icon',
    props.color && `ver-btn__icon--${props.color}`,
  ].filter(Boolean)
})

// 标签类名计算
const labelClasses = computed(() => {
  if (props.unstyled) return props.pt.label || ''
  return props.pt.label || 'ver-btn__label'
})

// 合并样式计算
const mergedStyles = computed<StyleValue>(() => {
  if (props.unstyled) return userStyle

  const colorStyles: Record<string, string> = {}
  if (props.color) {
    for (let i = 0; i <= 10; i++) {
      const colorKey = `${props.color}-${i}`
      if (colors[colorKey]) {
        colorStyles[`--color${i}`] = colors[colorKey]
      }
    }
  }

  return [colorStyles, userStyle] as StyleValue
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
