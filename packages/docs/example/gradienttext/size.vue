<template>
  <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>
  <VerGradientText :size="selectedValue" type="success">
    哈哈哈哈
  </VerGradientText>

  <VerGradientText :size="24" type="error">哈哈哈哈</VerGradientText>
</template>
<script setup>
import { ref } from 'vue'
import { VerGradientText } from '@versakit/ui'
import { VerSegmented } from '@versakit/ui'

const selectedValue = ref('md')
const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
</script>
<style scoped lang="scss"></style>
