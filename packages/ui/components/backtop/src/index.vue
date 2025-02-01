<template>
  <div
    v-if="visible"
    :class="Verclass"
    :style="backTopStyle"
    @click.stop="handleClick"
  >
    <ver-icon
      v-if="icon != ''"
      :name="icon"
      :color="iconColor"
      size="26"
    ></ver-icon>
    <span v-else>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { VerIcon } from '../../icon/index'
import { computed, ref, onMounted, shallowRef } from 'vue'
import type { BackTopProps } from '../type/index'

// 设置属性默认值
const props = withDefaults(defineProps<BackTopProps>(), {
  right: '60',
  bottom: '40',
  icon: '',
  iconColor: '#8b5cf6',
  visibilityHeight: '150',
})

const iconColor = computed(() => props.iconColor || '#8b5cf6')

const Verclass = computed(() => {
  return [
    'ver-backTop',
    props.visibleHeight ? `is-visibleHeight-${props.visibleHeight}` : '',
  ]
})

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))

const el = shallowRef<HTMLElement | null>(null)
const container = shallowRef<Document | HTMLElement>()
const visible = ref(true)

const handleClick = () => {
  el.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  if (el.value) {
    visible.value = el.value.scrollTop >= parseInt(props.visibilityHeight)
  }
}

const throttle = (func: () => void, delay: number) => {
  let timer: number | null = null
  if (!timer) {
    func()
    timer = window.setTimeout(() => {
      timer = null
    }, delay)
  }
}

onMounted(() => {
  container.value = document
  el.value = document.documentElement
  handleScroll()
  container.value.addEventListener('scroll', () => {
    throttle(handleScroll, 300)
  })
})
</script>

<style src="../style/index.css" lang="scss" scoped></style>
