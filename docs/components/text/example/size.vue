<script setup lang="ts">
import { ref } from 'vue'
import { VerText, VerSegmented } from '@versakit/ui'

const selectedValue = ref('md')
const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
</script>

<template>
  <div>
    <VerSegmented :options v-model="selectedValue" />

    <ver-text class="mx4" :size="selectedValue">我是文本</ver-text>
  </div>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
