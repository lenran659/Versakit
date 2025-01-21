<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-17 19:14:39
 * @LastEditors: Dream
 * @Description: 
-->
<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row class="mb-4">
    <ver-button disabled>按 钮</ver-button>
    <ver-button disabled variant="plain round">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled>按 钮</ver-button>
    <ver-button disabled variant="plain round">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled>按 钮</ver-button>
    <ver-button disabled variant="plain round">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled>按 钮</ver-button>
    <ver-button disabled variant="plain round">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled>按 钮</ver-button>
    <ver-button disabled variant="plain round">按 钮</ver-button>
  </ver-row>
</template>

<style scoped>
.mb-4 {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 10px;
}
</style>
