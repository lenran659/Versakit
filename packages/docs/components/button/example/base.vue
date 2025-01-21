<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button color="red-5">按 钮</ver-button>
    <ver-button variant="round" color="red-5">按 钮</ver-button>
    <ver-button variant="plain" color="red-1">按 钮</ver-button>
    <ver-button variant="plain round" color="red-1">按 钮</ver-button>
    <ver-button variant="ghost" color="red-5">按 钮</ver-button>
    <ver-button variant="ghost round" color="red-5">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button color="blue-5">按 钮</ver-button>
    <ver-button variant="round" color="blue-5">按 钮</ver-button>
    <ver-button variant="plain " color="blue-1">按 钮</ver-button>
    <ver-button variant="plain round" color="blue-1">按 钮</ver-button>
    <ver-button variant="ghost" color="blue-5">按 钮</ver-button>
    <ver-button variant="ghost round" color="blue-5">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button color="green-5">按 钮</ver-button>
    <ver-button variant="round" color="green-5">按 钮</ver-button>
    <ver-button variant="plain" color="green-1">按 钮</ver-button>
    <ver-button variant="plain round" color="green-1">按 钮</ver-button>
    <ver-button variant="ghost" color="green-5">按 钮</ver-button>
    <ver-button variant="ghost round" color="green-5">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button color="zinc-5">按 钮</ver-button>
    <ver-button variant="round" color="zinc-5">按 钮</ver-button>
    <ver-button variant="plain" color="zinc-1">按 钮</ver-button>
    <ver-button variant="plain round" color="zinc-1">按 钮</ver-button>
    <ver-button variant="ghost" color="zinc-5">按 钮</ver-button>
    <ver-button variant="ghost round" color="zinc-5">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button color="orange-5">按 钮</ver-button>
    <ver-button variant="round" color="orange-5">按 钮</ver-button>
    <ver-button variant="plain" color="orange-1">按 钮</ver-button>
    <ver-button variant="plain round" color="orange-1">按 钮</ver-button>
    <ver-button variant="ghost" color="orange-5">按 钮</ver-button>
    <ver-button variant="ghost round" color="orange-5">按 钮</ver-button>
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
