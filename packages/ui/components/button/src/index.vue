<template>
  <button
    :class="Verclass"
    :disabled="props.disabled"
    :size="props.size"
    :color="props.color"
    :variant="props.variant"
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

defineOptions({ name: 'VerButton' })

const props = withDefaults(defineProps<ButtonProps>(), {
  type: '',
  disabled: false,
  circle: false,
  size: 'md',
  icon: '',
  variant: '',
})

//ghost,round,plain,text,shade,circle,full
const Verclass = computed(() => {
  const variantList = props.variant.split(' ')
  return [
    'ver-btn',
    props.type == '' ? '' : `ver-btn-${props.type}`,
    ...variantList.map((val) => `is-${val}`),
    props.circle == true ? 'is-circle' : '',
    props.disabled == false ? '' : 'is-disabled',
    props.size == 'md' ? '' : `is-${props.size}`,
  ]
})
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
