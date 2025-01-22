<template>
  <button
    :class="Verclass"
    :disabled="props.disabled"
    :size="props.size"
    :color="props.color"
    :variant="props.variant"
    :style="computedStyles"
  >
    <!-- icon -->
    <ver-icon v-if="icon" :name="icon"></ver-icon>
    <!-- common -->
    <span v-else>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import VerIcon from '../../icon/index'
import type { ButtonProps } from '../type/index'
import colors from '../../../utils/colors/colorMap'

defineOptions({ name: 'VerButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  circle: false,
  size: 'md',
  icon: '',
  variant: '',
  color: 'violet',
})

//ghost,round,plain,text,shade,circle,full
const Verclass = computed(() => {
  const variantList = props.variant.split(' ')
  return [
    'ver-btn',
    props.color == '' ? '' : `ver-btn-${props.color}`,
    ...variantList.map((val) => `is-${val}`),
    props.circle == true ? 'is-circle' : '',
    props.disabled == false ? '' : 'is-disabled',
    props.size == 'md' ? '' : `is-${props.size}`,
    `is-${props.color}`.toLowerCase(),
  ]
})

const computedStyles = computed(() => {
  const colorPrefix = `${props.color}-`
  console.log(1, colorPrefix + '0')
  console.log(2, colors)
  console.log(3, 'violet-0' in colors)
  console.log(4, colors[`${colorPrefix}0`])
  console.log(4, colors[`${colorPrefix}1`])
  console.log(4, colors[`${colorPrefix}6`])
  return {
    '--color0': colors[`${colorPrefix}0`],
    '--color1': colors[`${colorPrefix}1`],
    '--color2': colors[`${colorPrefix}2`],
    '--color3': colors[`${colorPrefix}3`],
    '--color4': colors[`${colorPrefix}4`],
    '--color5': colors[`${colorPrefix}5`],
    '--color6': colors[`${colorPrefix}6`],
    '--color7': colors[`${colorPrefix}7`],
    '--color8': colors[`${colorPrefix}8`],
    '--color9': colors[`${colorPrefix}9`],
    '--color10': colors[`${colorPrefix}10`],
  }
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
