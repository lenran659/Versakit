<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button v-ripple color="blue-1">按 钮</ver-button>
    <ver-button v-ripple color="blue-2">按 钮</ver-button>
    <ver-button v-ripple color="blue-3">按 钮</ver-button>
    <ver-button v-ripple color="blue-4">按 钮</ver-button>
    <ver-button v-ripple color="blue-5">按 钮</ver-button>
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
