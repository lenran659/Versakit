<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button disabled color="red-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="red-1">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled color="blue-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="blue-1">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled color="green-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="green-1">
      按 钮
    </ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled color="zinc-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="zinc-1">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled color="violet-5">按 钮</ver-button>
    <ver-button disabled variant="plain round" color="violet-1">
      按 钮
    </ver-button>
  </ver-row>
</template>

<style scoped>
.mb-4 {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 10px;
}
</style>
