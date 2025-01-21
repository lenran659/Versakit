<script setup lang="ts">
import { ref } from 'vue'
import { VerSegmented, VerFlex } from '@versakit/ui'
import { AlignProps, JustifyProps } from '@versakit/ui/components/flex/type'

const justify = ref<JustifyProps>('flex-start')
const justifyOptions = [
  { label: 'flex-start', value: 'flex-start' },
  { label: 'center', value: 'center' },
  { label: 'flex-end', value: 'flex-end' },
  { label: 'space-between', value: 'space-between' },
  { label: 'space-around', value: 'space-around' },
  { label: 'space-evenly', value: 'space-evenly' },
]

const align = ref<AlignProps>('flex-start')
const alignOptions = [
  { label: 'flex-start', value: 'flex-start' },
  { label: 'center', value: 'center' },
  { label: 'flex-end', value: 'flex-end' },
]
</script>
<template>
  <div style="line-height: 36px">justify-content:</div>
  <VerSegmented v-model="justify" :options="justifyOptions"></VerSegmented>
  <div style="line-height: 36px">align-items:</div>
  <VerSegmented v-model="align" :options="alignOptions"></VerSegmented>
  <VerFlex class="flex-container" :align="align" :justify="justify">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VerFlex>
</template>
<style scoped>
.flex-container {
  height: 150px;
  border-radius: 5px;
  border: 1px solid #c4b5fd;
  margin-top: 15px;
}

.flex-item {
  width: 80px;
  height: 40px;
  background-color: #c4b5fd;
}
</style>
