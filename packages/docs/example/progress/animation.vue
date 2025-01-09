<template>
  <div>
    <VerProgress :animation="true" :percent />

    <div>
      <VerProgress :animation="true" type="circle" :percent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerProgress } from '@versakit/ui'

const percent = ref(0)

setInterval(() => {
  percent.value = percent.value >= 100 ? 0 : percent.value + 10
}, 1000)
</script>
