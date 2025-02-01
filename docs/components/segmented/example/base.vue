<script setup lang="ts">
import { ref } from 'vue'
import { VerSegmented } from '@versakit/ui'

const selectedValue = ref('苹果')
const options = [
  { label: '苹果', value: '苹果' },
  { label: '芒果', value: '芒果' },
  { label: '西瓜', value: '西瓜' },
]

const selectedValue2 = ref('苹果1')
const options2 = [
  { label: '苹果1', value: '苹果1' },
  { label: '芒果1', value: '芒果1' },
  { label: '西瓜1', value: '西瓜1' },
]
</script>

<template>
  <div>
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>

    <p class="selected-value">选择值: {{ selectedValue }}</p>

    <VerSegmented v-model="selectedValue2" :options="options2"></VerSegmented>

    <p class="selected-value">选择值: {{ selectedValue2 }}</p>
  </div>
</template>
