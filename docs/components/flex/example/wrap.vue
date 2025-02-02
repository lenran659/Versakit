<script setup lang="ts">
import { VerFlex } from '@versakit/ui'
</script>
<template>
  <VerFlex wrap="wrap">
    <div v-for="n in 20" :key="n" class="flex-item" />
  </VerFlex>
</template>

<style scoped>
.flex-item {
  width: 80px;
  height: 40px;
  background-color: var(--theme-primary-500, var(--ver-primary-500));
}
</style>
