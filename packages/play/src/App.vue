<script setup lang="ts">
import { VerButton } from '@versakit/ui'
</script>

<template>
  <div>
    <VerButton>按钮</VerButton>

    <VerButton type="success" unstyled>按钮</VerButton>

    <VerButton type="error">按钮</VerButton>
  </div>
</template>

<style>
.btn {
  margin: 0px 12px;
  padding: 1rem;
  color: white;
  background-color: black;
  border: none;
}
</style>
