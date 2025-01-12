<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <VerButton variant="circle" icon="search" />
    <VerButton variant="circle" type="success" icon="check" />
    <VerButton variant="circle" type="error" icon="trash" />
  </ver-row>
</template>
<style scoped>
.ver-btn {
  margin: 0.5rem;
}
</style>
