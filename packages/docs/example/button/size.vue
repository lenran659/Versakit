<script setup lang="ts">
import { ref } from 'vue'
import { VerButton, VerSegmented } from '@versakit/ui'

const options = [
  { label: 'XS', value: 'xs' },
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
const selectedOption = ref(options[0])
</script>

<template>
  <div>
    <VerSegmented :options></VerSegmented>

    <ver-button class="mx-2" type="primary" :size="selectedOption.value">
      主要按钮
    </ver-button>
  </div>
</template>

<style scoped>
.ver-btn {
  margin: 10px 0px;
}
</style>
