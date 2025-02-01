<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <VerButton color="pink" circle icon="search" />
    <VerButton color="green" circle icon="check" />
    <VerButton circle icon="trash" />
  </ver-row>
</template>
<style scoped>
.ver-btn {
  margin: 0.5rem;
}
</style>
