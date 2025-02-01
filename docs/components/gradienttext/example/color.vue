<template>
  <VerGradientText
    :gradient="{ rotate: 244, start: '#de344f 0%', end: '#68dada 100%' }"
  >
    自定义颜色
  </VerGradientText>
  <VerGradientText
    :gradient="{ rotate: 244, start: '#4774cf99 0%', end: '#68dada 100%' }"
  >
    Hello World
  </VerGradientText>
  <VerGradientText
    :gradient="{ rotate: 244, start: '#a299ff 0%', end: '#11fdd 100%' }"
  >
    你好，世界
  </VerGradientText>
</template>

<script setup>
import { VerGradientText } from '@versakit/ui'
</script>

<style scoped lang="scss"></style>
