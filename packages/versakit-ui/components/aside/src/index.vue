<script setup lang="ts">
import type { AsideProps } from '../type/index'

defineOptions({
  name: 'VerAside',
})

const props = withDefaults(defineProps<AsideProps>(), {
  width: '300px',
})
</script>

<template>
  <aside class="ver-aside" :style="{ width: props.width }">
    <slot />
  </aside>
</template>

<style scoped src="../style/index.css"></style>
