<script setup lang="ts">
import { VerSegmented } from '@versakit/ui'

const options = [
  { label: '年度', value: 'Y' },
  { label: '月度', value: 'M' },
  { label: '你好', value: '1' },
  { label: '世界', value: '2' },
]
</script>

<template>
  <div>
    <VerSegmented :options></VerSegmented>
  </div>
</template>
