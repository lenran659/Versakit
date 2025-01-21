<template>
  <ver-row :gutter="20">
    <ver-col :span="6" v-for="n in 4" :key="n">
      <div class="col-box"></div>
    </ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from '@versakit/ui'
</script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}
</style>
