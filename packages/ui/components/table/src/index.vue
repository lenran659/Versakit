<template>
  <div class="ver-table">
    <div class="ver-table-wrapper">
      <div class="ver-table-header">
        <div :class="['ver-table-header-row', props.stripe ? 'is-stripe' : '']">
          <div
            :class="['ver-table-header-cell', props.border ? 'is-border' : '']"
            v-for="column in props.columns"
            :key="column.key"
          >
            {{ column.title }}
          </div>
        </div>
      </div>

      <div class="ver-table-body">
        <div
          :class="['ver-table-row', props.stripe ? 'is-stripe' : '']"
          v-for="row in props.data"
          :key="row.key"
        >
          <div
            v-for="column in props.columns"
            :key="column.key"
            :class="['ver-table-row-cell', props.border ? 'is-border' : '']"
          >
            {{ row[column.dataIndex] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TableProps } from '../type/index'

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  border: false,
  stripe: false,
})

defineOptions({ name: 'VerTable' })
</script>

<style scoped src="../style/index.css"></style>
