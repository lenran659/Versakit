<script setup lang="ts">
import { ref } from 'vue'
import { VerFlex, VerRadio } from '@versakit/ui'

const direction = ref('horizontal')
</script>

<template>
  <div>
    <VerRadio label="horizontal" v-model="direction">horizontal</VerRadio>
    <VerRadio label="vertical" v-model="direction">vertical</VerRadio>
  </div>
  <VerFlex :vertical="direction === 'vertical'">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VerFlex>
</template>

<style scoped>
.flex-item {
  width: 25%;
  height: 80px;
  background-color: var(--theme-primary-500, var(--ver-primary-500));
}
</style>
