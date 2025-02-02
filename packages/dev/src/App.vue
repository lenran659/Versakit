<script setup lang="ts">
import { ref } from 'vue'

const flag = ref(true)
</script>

<template>
  <div>
    <div class="container">
      <VerButton>按钮</VerButton>

      <VerButton type="error">按钮</VerButton>

      <VerButton type="success" unstyled :pt="{ root: 'btn' }">按钮</VerButton>
    </div>

    <div class="container">
      <ver-card>卡片</ver-card>
    </div>

    <div class="container">
      <ver-input></ver-input>
    </div>

    <div class="container">
      <ver-switch size="lg" v-model="flag"></ver-switch>
    </div>
  </div>
</template>

<style>
.btn {
  margin: 0px 12px;
  padding: 1rem;
  color: white;
  background-color: black;
  border: none;
  transition: all 0.2s;
  border-radius: 0.25rem;

  &:active {
    transform: scale(0.9);
  }
}

.container {
  margin: 1rem;
  width: 400px;
}
</style>
