<template>
  <div class="common-layout">
    <ver-container direction="column">
      <ver-header>Header</ver-header>
      <ver-container>
        <ver-aside width="200px">Aside</ver-aside>
        <ver-main>Main</ver-main>
      </ver-container>
    </ver-container>
  </div>
</template>

<script setup lang="ts">
import { VerContainer, VerHeader, VerMain, VerAside } from '@versakit/ui'
</script>

<style scoped>
.common-layout {
  .ver-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }

  .ver-aside {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #303133;
    background-color: rgb(216.8, 235.6, 255);
  }

  .ver-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }
}
</style>
