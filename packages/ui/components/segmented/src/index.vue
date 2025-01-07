<script setup lang="ts">
import { ref } from 'vue'
import type { SegmentedProps } from '../type/index'

defineOptions({ name: 'VerSegmented' })

const props = withDefaults(defineProps<SegmentedProps>(), {
  options: undefined,
  index: 0,
})

const selectedIndex = ref(props.index)

const selectOption = (index: number) => {
  selectedIndex.value = index
}
</script>

<template>
  <div class="segmented-control">
    <button
      v-for="(option, index) in props.options"
      :key="index"
      :class="{ active: selectedIndex === index }"
      @click="selectOption(index)"
    >
      {{ option }}
    </button>
  </div>
</template>

<style lang="scss" src="../style/index.scss" scoped></style>
