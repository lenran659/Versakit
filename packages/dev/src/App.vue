<script setup lang="ts">
import { ref } from 'vue'

const flag = ref(true)
</script>

<template>
  <div>
    <div class="container">
      <p>style 模式</p>
      <VerButton type="primary">按钮</VerButton>
      <VerButton type="warn">按钮</VerButton>
      <VerButton type="success">按钮</VerButton>
      <VerButton type="error">按钮</VerButton>
      <VerButton type="info">按钮</VerButton>

      <p>unstyled 模式</p>
      <VerButton unstyled :pt="{ root: 'btn' }">按钮</VerButton>
    </div>

    <div class="container">
      <p>按需引入测试</p>

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
  margin: 10px 0px;
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
