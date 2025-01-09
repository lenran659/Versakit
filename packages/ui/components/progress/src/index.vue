<script setup lang="ts">
import type { Props } from '../type/index'

withDefaults(defineProps<Props>(), {
  type: 'line',
  animation: false,
  isShowText: true,
  status: 'normal',
})

const statusColor = {
  normal: '#1890ff',
  success: '#52c41a',
  error: '#ff4d4f',
}
</script>

<template>
  <div class="progress">
    <div v-if="type === 'line'" class="progress-line">
      <div class="progress-line-outer" :class="{ 'with-animation': animation }">
        <div
          class="progress-line-inner"
          :style="{
            width: `${percent}%`,
            backgroundColor: statusColor[status],
          }"
        />
      </div>
      <span
        v-if="isShowText"
        class="progress-text"
        :style="{ color: statusColor[status] }"
        :class="{ 'with-animation': animation }"
      >
        {{ percent }}%
      </span>
    </div>

    <div
      v-else
      class="progress-circle"
      :class="{ 'with-animation': animation }"
    >
      <svg viewBox="0 0 100 100">
        <circle
          class="progress-circle-background"
          cx="50"
          cy="50"
          r="45"
          fill="none"
        />
        <circle
          class="progress-circle-bar"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          :stroke="statusColor[status]"
          :stroke-dasharray="`${percent * 2.83}, 283`"
        />
      </svg>
      <span
        v-if="isShowText"
        class="progress-circle-text"
        :style="{ color: statusColor[status] }"
        :class="{ 'with-animation': animation }"
      >
        {{ percent }}%
      </span>
    </div>
  </div>
</template>

<style lang="scss" src="../style/index.scss" scoped></style>
