<template>
  <div>
    <VerSegmented v-model="typeValue" :options="typeOptions"></VerSegmented>
    <VerSegmented
      v-model="variantValue"
      :options="variantOptions"
    ></VerSegmented>
    <ver-button :color="typeValue" :variant="variantValue">按 钮</ver-button>
  </div>
</template>
<script setup lang="ts">
import { VerButton, VerSegmented } from '@versakit/ui'
import { ref } from 'vue'
let typeValue = ref('primary')
let variantValue = ref('plain')
let typeOptions = [
  { label: 'blue', value: 'blue-5' },
  { label: 'red', value: 'red-5' },
  { label: 'violet', value: 'violet-5' },
  { label: 'orange', value: 'orange-5' },
  { label: 'zinc', value: 'zinc-5' },
]
let variantOptions = [
  { label: 'ghost', value: 'ghost' },
  { label: 'round', value: 'round' },
  { label: 'plain', value: 'plain' },
  { label: 'text', value: 'text' },
  { label: 'shade', value: 'shade' },
  { label: 'full', value: 'full' },
]
</script>
<style scoped></style>
