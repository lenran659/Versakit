<template>
  <div>
    <VerSegmented v-model="selectedValue" :options="options"></VerSegmented>

    <VerSwitch :size="selectedValue" v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { VerSwitch, VerSegmented } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
const selectedValue = ref('md')

const options = [
  { label: 'SM', value: 'sm' },
  { label: 'MD', value: 'md' },
  { label: 'LG', value: 'lg' },
]
</script>

<style scoped>
.ver-switch {
  margin: 0px 10px;
}
</style>
