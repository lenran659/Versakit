<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted, computed } from 'vue'
import type { CarouselItemProps } from '../type/item.ts'
defineOptions({ name: 'VerCarouselItem' })

const props = withDefaults(defineProps<CarouselItemProps>(), {
  alt: '',
  caption: '',
  fit: 'cover',
  width: '100%',
  height: '100%',
})

const uid = ref(Math.random())
const carousel = inject('carousel') as any

const isActive = computed(() => {
  const index = carousel.currentIndex.value
  const items = carousel.items.value
  return items.findIndex((item: any) => item.uid === uid.value) === index
})

const style = computed(() => {
  const index = carousel.items.value.findIndex(
    (item: any) => item.uid === uid.value,
  )
  const currentIndex = carousel.currentIndex.value
  const isHorizontal = carousel.direction === 'horizontal'
  const offset = (index - currentIndex) * 100

  if (isHorizontal) {
    return {
      transform: `translateX(${offset}%)`,
      transition: 'transform 0.5s ease-in-out',
      width: props.width,
      height: props.height,
    }
  } else {
    return {
      transform: `translateY(${offset}%)`,
      transition: 'transform 0.5s ease-in-out',
      width: props.width,
      height: props.height,
    }
  }
})

onMounted(() => {
  carousel.registerItem({ uid: uid.value })
})

onUnmounted(() => {
  carousel.unregisterItem(uid.value)
})
</script>

<template>
  <div class="carousel-item" :class="{ active: isActive }" :style="style">
    <template v-if="src">
      <div class="carousel-slide">
        <img :src="src" :alt="alt" :style="{ objectFit: fit }" />
        <div v-if="caption" class="carousel-caption">{{ caption }}</div>
      </div>
    </template>
    <slot v-else></slot>
  </div>
</template>

<style src="../style/item.scss" lang="scss" scoped></style>
