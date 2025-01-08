<script setup lang="ts">
import { ref } from 'vue'
import { VerSegmented } from '@versakit/ui'

const selectedValue = ref('苹果')
const options = [
  { label: '苹果', value: '苹果' },
  { label: '芒果', value: '芒果' },
  { label: '西瓜', value: '西瓜' },
]
</script>

<template>
  <div>
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>

    <p class="selected-value">选择值: {{ selectedValue }}</p>
  </div>
</template>
