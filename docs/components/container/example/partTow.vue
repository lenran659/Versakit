<template>
  <div class="common-layout">
    <ver-container direction="column">
      <ver-header>Header</ver-header>
      <ver-main>Main</ver-main>
      <ver-footer>Footer</ver-footer>
    </ver-container>
  </div>
</template>

<script setup lang="ts">
import { VerContainer, VerHeader, VerMain, VerFooter } from '@versakit/ui'
</script>

<style scoped>
.common-layout {
  .ver-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
  .ver-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }

  .ver-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
}
</style>
