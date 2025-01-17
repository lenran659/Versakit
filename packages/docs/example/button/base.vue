<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button>按 钮</ver-button>
    <ver-button variant="round">按 钮</ver-button>
    <ver-button variant="plain">按 钮</ver-button>
    <ver-button variant="plain round">按 钮</ver-button>
    <ver-button variant="ghost">按 钮</ver-button>
    <ver-button variant="ghost round">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button>按 钮</ver-button>
    <ver-button variant="round">按 钮</ver-button>
    <ver-button variant="plain">按 钮</ver-button>
    <ver-button variant="plain round">按 钮</ver-button>
    <ver-button variant="ghost">按 钮</ver-button>
    <ver-button variant="ghost round">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button>按 钮</ver-button>
    <ver-button variant="round">按 钮</ver-button>
    <ver-button variant="plain">按 钮</ver-button>
    <ver-button variant="plain round">按 钮</ver-button>
    <ver-button variant="ghost">按 钮</ver-button>
    <ver-button variant="ghost round">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button>按 钮</ver-button>
    <ver-button variant="round">按 钮</ver-button>
    <ver-button variant="plain">按 钮</ver-button>
    <ver-button variant="plain round">按 钮</ver-button>
    <ver-button variant="ghost">按 钮</ver-button>
    <ver-button variant="ghost round">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button>按 钮</ver-button>
    <ver-button variant="round">按 钮</ver-button>
    <ver-button variant="plain">按 钮</ver-button>
    <ver-button variant="plain round">按 钮</ver-button>
    <ver-button variant="ghost">按 钮</ver-button>
    <ver-button variant="ghost round">按 钮</ver-button>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
