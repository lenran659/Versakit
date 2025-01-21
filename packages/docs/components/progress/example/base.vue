<template>
  <div>
    <VerProgress :percent />
    <VerProgress :percent status="success" />
    <VerProgress :percent status="error" />

    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      "
    >
      <VerProgress :percent="value" />
      <div style="display: flex; justify-content: space-around">
        <VerButton @click="value++" type="success">+</VerButton>
        <VerButton @click="value--" type="error">-</VerButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerProgress, VerButton } from '@versakit/ui'

const percent = ref(75)
const value = ref(0)
</script>

<style scoped>
.progress {
  margin: 20px;
}
</style>
