<script setup lang="ts">
import { VerCollapse, VerCollapseItem } from '@versakit/ui'

import { ref } from 'vue'

const activeNames = ref(['1'])
</script>

<template>
  <div>
    <VerCollapse v-model="activeNames" accordion>
      <VerCollapseItem title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency" name="2">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency" name="3">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
