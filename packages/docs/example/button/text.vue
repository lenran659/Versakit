<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <VerRow>
    <VerButton variant="text">none</VerButton>
    <VerButton variant="text" type="primary">primary</VerButton>
    <VerButton variant="text" type="success">success</VerButton>
    <VerButton variant="text" type="info">info</VerButton>
    <VerButton variant="text" type="warning">warning</VerButton>
    <VerButton variant="text" type="error">error</VerButton>
  </VerRow>
  <VerRow>
    <VerButton disabled variant="text">none</VerButton>
    <VerButton disabled variant="text" type="primary">primary</VerButton>
    <VerButton disabled variant="text" type="success">success</VerButton>
    <VerButton disabled variant="text" type="info">info</VerButton>
    <VerButton disabled variant="text" type="warning">warning</VerButton>
    <VerButton disabled variant="text" type="error">error</VerButton>
  </VerRow>
</template>
