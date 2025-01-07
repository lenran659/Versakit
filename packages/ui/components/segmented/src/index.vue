<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { SegmentedProps } from '../type/index'

const props = withDefaults(defineProps<SegmentedProps>(), {
  options: () => [],
  index: 0,
  size: 'md',
})

const emit = defineEmits(['hanldeSelect'])

const nextStyle: any = ref(null)
const firstWidth = ref('66px')
const itemRefs: any = ref([])
const skey = ref(props.options[0]?.value)

const hanldeSelect = (value: any, index: string | number) => {
  skey.value = value
  const next = itemRefs?.value[index]
  nextStyle.value = calcThumbStyle(next)
  emit('hanldeSelect', value)
}
const calcThumbStyle = (targetElement: {
  offsetLeft: any
  offsetWidth: any
}) => {
  return {
    left: targetElement.offsetLeft,
    width: targetElement.offsetWidth,
  }
}

onMounted(() => {
  firstWidth.value = `${itemRefs.value[0].offsetWidth}px`
})
</script>

<template>
  <div class="select">
    <div
      class="sigment"
      :style="{
        transform: `translateX(${nextStyle?.left}px)`,
        width: nextStyle ? `${nextStyle?.width}px` : firstWidth,
      }"
    ></div>
    <div class="selecWrap">
      <div
        ref="itemRefs"
        v-for="(item, index) in props.options"
        @click="hanldeSelect(item.value, index)"
        :class="[{ selectActive: item.value === skey }, 'selecItem']"
        :key="item.value"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="../style/index.scss" scoped></style>
