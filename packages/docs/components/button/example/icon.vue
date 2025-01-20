<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <VerButton circle icon="search" />
    <VerButton circle type="success" icon="check" />
    <VerButton circle type="error" icon="trash" />
  </ver-row>
</template>
<style scoped>
.ver-btn {
  margin: 0.5rem;
}
</style>
