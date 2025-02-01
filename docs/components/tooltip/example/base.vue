<script setup lang="ts">
import { VerTooltip, VerButton } from '@versakit/ui'
</script>

<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Top Left"
        position="top-left"
      >
        <ver-button ghost>top-left</ver-button>
      </ver-tooltip>

      <ver-tooltip class="box-item" effect="dark" content="Top " position="top">
        <ver-button ghost>top</ver-button>
      </ver-tooltip>

      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        position="top-right"
      >
        <ver-button ghost>top-right</ver-button>
      </ver-tooltip>
    </div>

    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        position="left-top"
      >
        <ver-button ghost>left-top</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        position="right-top"
      >
        <ver-button ghost>right-top</ver-button>
      </ver-tooltip>
    </div>
    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Left"
        position="left"
      >
        <ver-button ghost class="mt-3 mb-3">left</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right"
        position="right"
      >
        <ver-button ghost>right</ver-button>
      </ver-tooltip>
    </div>
    <div class="row">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="left-bottom"
        position="left-bottom"
      >
        <ver-button ghost>left-bottom</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        position="right-bottom"
      >
        <ver-button ghost>right-bottom</ver-button>
      </ver-tooltip>
    </div>
    <div class="row center">
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        position="bottom-left"
      >
        <ver-button ghost>bottom-left</ver-button>
      </ver-tooltip>

      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom "
        position="bottom"
      >
        <ver-button ghost>bottom</ver-button>
      </ver-tooltip>
      <ver-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        position="bottom-right"
      >
        <ver-button ghost>bottom-right</ver-button>
      </ver-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin: 10px 10px;
}
</style>
