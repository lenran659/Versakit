<template>
  <span class="ver-breadcrumb">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import type { BreadcrumbProps } from '../type/index'
</script>

<style src="../style/index.scss" lang="scss" scoped></style>
