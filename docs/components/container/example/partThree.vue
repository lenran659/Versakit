<template>
  <div class="common-layout">
    <ver-container>
      <ver-aside width="200px">Aside</ver-aside>
      <ver-main>Main</ver-main>
      <ver-aside width="200px">Aside</ver-aside>
    </ver-container>
  </div>
</template>

<script setup lang="ts">
import { VerContainer, VerAside, VerMain } from '@versakit/ui'
</script>

<style scoped>
.common-layout {
  .is-vertical {
    flex-direction: column;
  }

  .ver-aside {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c1deff;
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
