<template>
  <div>
    <VerProgress :percent />
    <VerProgress :percent status="success" />
    <VerProgress :percent status="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerProgress } from '@versakit/ui'

const percent = ref(75)
</script>

<style scoped>
.progress {
  margin: 20px;
}
</style>
