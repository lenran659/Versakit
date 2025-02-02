<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import type { Props } from '../type/index'

defineOptions({ name: 'VerTooltip' })

const props = withDefaults(defineProps<Props>(), {
  position: 'top',
  color: '#fff',
  backgroundColor: '#333',
})

const tooltipRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const showTooltip = ref(false)

const updatePosition = () => {
  if (!tooltipRef.value || !contentRef.value) return

  const tooltip = tooltipRef.value.getBoundingClientRect()
  const content = contentRef.value

  const positions = {
    top: {
      top: -content.offsetHeight - 8,
      left: (tooltip.width - content.offsetWidth) / 2,
    },
    'top-left': {
      top: -content.offsetHeight - 8,
      left: 0,
    },
    'top-right': {
      top: -content.offsetHeight - 8,
      left: tooltip.width - content.offsetWidth,
    },
    bottom: {
      top: tooltip.height + 8,
      left: (tooltip.width - content.offsetWidth) / 2,
    },
    'bottom-left': {
      top: tooltip.height + 8,
      left: 0,
    },
    'bottom-right': {
      top: tooltip.height + 8,
      left: tooltip.width - content.offsetWidth,
    },
    left: {
      top: (tooltip.height - content.offsetHeight) / 2,
      left: -content.offsetWidth - 8,
    },
    'left-top': {
      top: 0,
      left: -content.offsetWidth - 8,
    },
    'left-bottom': {
      top: tooltip.height - content.offsetHeight,
      left: -content.offsetWidth - 8,
    },
    right: {
      top: (tooltip.height - content.offsetHeight) / 2,
      left: tooltip.width + 8,
    },
    'right-top': {
      top: 0,
      left: tooltip.width + 8,
    },
    'right-bottom': {
      top: tooltip.height - content.offsetHeight,
      left: tooltip.width + 8,
    },
  }

  const pos = positions[props.position]
  content.style.top = `${pos.top}px`
  content.style.left = `${pos.left}px`
}

onMounted(() => {
  window.addEventListener('resize', updatePosition)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updatePosition)
})
</script>

<template>
  <div
    ref="tooltipRef"
    class="tooltip"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <slot></slot>
    <transition name="tooltip" @enter="updatePosition">
      <div
        v-show="showTooltip"
        ref="contentRef"
        class="tooltip-content"
        :class="position"
        :style="{
          color,
          backgroundColor,
          '--bg-color': backgroundColor,
        }"
      >
        {{ content }}
      </div>
    </transition>
  </div>
</template>

<style scoped src="../style/index.css"></style>
