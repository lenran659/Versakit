<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue'
import type { CarouselProps } from '../type/index.ts'

defineOptions({ name: 'VerCarousel' })

const props = withDefaults(defineProps<CarouselProps>(), {
  autoplay: true,
  interval: 3000,
  showArrows: true,
  showIndicators: true,
  trigger: 'hover',
  direction: 'horizontal',
})

const items = ref<any[]>([])
const currentIndex = ref(0)
const isHovering = ref(false)
let autoplayTimer: number | null = null

const registerItem = (item: any) => {
  items.value.push(item)
}

const unregisterItem = (uid: number) => {
  const index = items.value.findIndex((item) => item.uid === uid)
  if (index > -1) {
    items.value.splice(index, 1)
  }
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + items.value.length) % items.value.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}

const startAutoplay = () => {
  if (props.autoplay && !isHovering.value && items.value.length > 1) {
    autoplayTimer = window.setInterval(() => {
      nextSlide()
    }, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    isHovering.value = true
    stopAutoplay()
  }
}

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    isHovering.value = false
    startAutoplay()
  }
}

provide('carousel', {
  currentIndex,
  items, // 提供 items 数组
  registerItem,
  unregisterItem,
  direction: props.direction,
})

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div
    class="carousel"
    :class="direction"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-container">
      <slot></slot>
    </div>

    <template v-if="showArrows && items.length > 1">
      <button class="carousel-arrow carousel-arrow-prev" @click="prevSlide">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="currentColor"
            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
          />
        </svg>
      </button>
      <button class="carousel-arrow carousel-arrow-next" @click="nextSlide">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            fill="currentColor"
            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
          />
        </svg>
      </button>
    </template>

    <div v-if="showIndicators && items.length > 1" class="carousel-indicators">
      <button
        v-for="(_, index) in items"
        :key="index"
        class="carousel-indicator"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<style lang="scss" src="../style/index.scss" scoped></style>
