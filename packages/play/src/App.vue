<script setup lang="ts">
import { VKButton } from '@versakit/ui'
</script>

<template>
  <div>
    <VKButton>按钮</VKButton>

    <VKButton unstyled>按钮</VKButton>

    <VKButton type="success">按钮</VKButton>
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
