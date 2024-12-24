<!--
 * @Author: 2171204141@qq.com
 * @Date: 2024-12-24 15:14:54
 * @LastEditors: Dream
 * @Description: 
-->
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
      <VerCollapseItem title="Consistency 1" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency 2" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
      </VerCollapseItem>
      <VerCollapseItem title="Consistency 3" name="3">
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page;
        </div>
      </VerCollapseItem>
    </VerCollapse>
  </div>
</template>
