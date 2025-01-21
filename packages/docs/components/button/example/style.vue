<template>
  <div>
    <VerSegmented v-model="typeValue" :options="typeOptions"></VerSegmented>
    <VerSegmented
      v-model="variantValue"
      :options="variantOptions"
    ></VerSegmented>
    <ver-button :type="typeValue" :variant="variantValue" :size="selectedValue">
      按 钮
    </ver-button>
  </div>
</template>
<script setup lang="ts">
import { VerButton, VerSegmented } from '@versakit/ui'
import { ref } from 'vue'
let typeValue = ref('primary')
let variantValue = ref('plain')
let typeOptions = [
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'info', value: 'info' },
  { label: 'warning', value: 'warning' },
  { label: 'error', value: 'error' },
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
