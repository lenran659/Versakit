<template>
  <ver-row>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <ver-image
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            />
          </div>
          <div class="block">
            <ver-image>user</ver-image>
          </div>
          <div class="block">
            <ver-image>
              <VerIcon name="card-image" />
            </ver-image>
          </div>
        </div>
      </div>
    </ver-col>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">square</div>
        <div class="demo-basic--square">
          <div class="block">
            <ver-image
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              shape="square"
            />
          </div>
          <div class="block">
            <ver-image shape="square">user</ver-image>
          </div>
          <div class="block">
            <ver-image shape="square">
              <VerIcon name="card-image" />
            </ver-image>
          </div>
        </div>
      </div>
    </ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerImage, VerIcon, VerRow, VerCol } from '@versakit/ui'
</script>

<style scoped>
.demo-basic {
  text-align: center;
}

.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #909399;
}

.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-basic .block:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}

.demo-basic .block {
  flex: 1;
}

.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
</style>
