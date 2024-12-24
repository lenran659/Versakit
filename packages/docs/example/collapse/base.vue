<script setup lang="ts">
import { VerCollapse, VerCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div>
    <VerCollapse v-model="activeNames" @change="handleChange">
      <VerCollapseItem title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
