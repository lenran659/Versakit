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
    <ver-button disabled type="primary">按 钮</ver-button>
    <ver-button disabled variant="plain round" type="primary">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="success">按 钮</ver-button>
    <ver-button disabled variant="plain round" type="success">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="info">按 钮</ver-button>
    <ver-button disabled variant="plain round" type="info">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="warning">按 钮</ver-button>
    <ver-button disabled variant="plain round" type="warning">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="error">按 钮</ver-button>
    <ver-button disabled variant="plain round" type="error">按 钮</ver-button>
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
