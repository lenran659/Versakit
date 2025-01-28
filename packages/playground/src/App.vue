<script setup lang="ts">
import { VerButton } from '@versakit/ui'
import { ref } from 'vue'

const pt = ref({
  root: 'bg-black p-2 rounded-md active:scale-[0.9]',
  label: 'text-white',
})
</script>

<template>
  <div>
    <VerButton color="green-6" variant="round shade">Button</VerButton>

    <VerButton unstyled :pt>Button</VerButton>
  </div>
</template>
