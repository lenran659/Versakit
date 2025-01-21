<script setup lang="ts">
import { ref, computed } from 'vue'
import { VerRadio, VerSlider, VerFlex } from '@versakit/ui'

const gapSize = ref<'small' | 'middle' | 'large' | 'custom'>('small')
const customGapSize = ref(16)

const computedGap = computed<number | 'small' | 'middle' | 'large'>(() => {
  if (gapSize.value === 'custom') {
    return customGapSize.value
  }
  return gapSize.value
})
</script>
<template>
  <div>
    <VerRadio label="small" v-model="gapSize">small</VerRadio>
    <VerRadio label="middle" v-model="gapSize">middle</VerRadio>
    <VerRadio label="large" v-model="gapSize">large</VerRadio>
    <VerRadio label="custom" v-model="gapSize">custom</VerRadio>
    <VerSlider
      v-model="customGapSize"
      v-show="gapSize === 'custom'"
    ></VerSlider>
  </div>
  <VerFlex :gap="computedGap" style="margin-top: 10px">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VerFlex>
</template>

<style scoped>
.flex-item {
  width: 80px;
  height: 40px;
  background-color: #c4b5fd;
}
</style>
