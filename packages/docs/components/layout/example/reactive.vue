<template>
  <ver-row :gutter="4">
    <ver-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="col-box"></div>
    </ver-col>
    <ver-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="col-box col-box-1"></div>
    </ver-col>
    <ver-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="col-box"></div>
    </ver-col>
    <ver-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="col-box col-box-1"></div>
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
  background-color: #d3dce6;
}

.col-box-1 {
  background-color: #e5e9f2;
}
</style>
