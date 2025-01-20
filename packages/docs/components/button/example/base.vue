<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button type="primary">按 钮</ver-button>
    <ver-button variant="round" type="primary">按 钮</ver-button>
    <ver-button variant="plain" type="primary">按 钮</ver-button>
    <ver-button variant="plain round" type="primary">按 钮</ver-button>
    <ver-button variant="ghost" type="primary">按 钮</ver-button>
    <ver-button variant="ghost round" type="primary">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="success">按 钮</ver-button>
    <ver-button variant="round" type="success">按 钮</ver-button>
    <ver-button variant="plain " type="success">按 钮</ver-button>
    <ver-button variant="plain round" type="success">按 钮</ver-button>
    <ver-button variant="ghost" type="success">按 钮</ver-button>
    <ver-button variant="ghost round" type="success">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="info">按 钮</ver-button>
    <ver-button variant="round" type="info">按 钮</ver-button>
    <ver-button variant="plain" type="info">按 钮</ver-button>
    <ver-button variant="plain round" type="info">按 钮</ver-button>
    <ver-button variant="ghost" type="info">按 钮</ver-button>
    <ver-button variant="ghost round" type="info">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="warning">按 钮</ver-button>
    <ver-button variant="round" type="warning">按 钮</ver-button>
    <ver-button variant="plain" type="warning">按 钮</ver-button>
    <ver-button variant="plain round" type="warning">按 钮</ver-button>
    <ver-button variant="ghost" type="warning">按 钮</ver-button>
    <ver-button variant="ghost round" type="warning">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="error">按 钮</ver-button>
    <ver-button variant="round" type="error">按 钮</ver-button>
    <ver-button variant="plain" type="error">按 钮</ver-button>
    <ver-button variant="plain round" type="error">按 钮</ver-button>
    <ver-button variant="ghost" type="error">按 钮</ver-button>
    <ver-button variant="ghost round" type="error">按 钮</ver-button>
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
