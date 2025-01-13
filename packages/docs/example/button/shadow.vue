<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <VerRow>
    <VerButton variant="shade">none</VerButton>
    <VerButton variant="shade" type="primary">primary</VerButton>
    <VerButton variant="shade" type="success">success</VerButton>
    <VerButton variant="shade" type="info">info</VerButton>
    <VerButton variant="shade" type="warning">warning</VerButton>
    <VerButton variant="shade" type="error">danger</VerButton>
  </VerRow>

  <VerRow>
    <VerButton disabled variant="shade">none</VerButton>
    <VerButton disabled variant="shade" type="primary">primary</VerButton>
    <VerButton disabled variant="shade" type="success">success</VerButton>
    <VerButton disabled variant="shade" type="info">info</VerButton>
    <VerButton disabled variant="shade" type="warning">warning</VerButton>
    <VerButton disabled variant="shade" type="error">danger</VerButton>
  </VerRow>
</template>

<style scoped>
.ver-btn {
  margin: 0.5rem;
}
</style>
