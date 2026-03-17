<template>
  <div class="base-editable-table">
    <div class="table-header-row">
      <div 
        v-for="(col, index) in columns" 
        :key="index" 
        class="header-col"
        :style="{ flex: col.width || 1 }"
      >
        <slot name="header" :column="col">
          <span class="default-label">{{ col.label }}</span>
        </slot>
      </div>
      
      <div v-if="showAction" class="header-col action-column-width no-border-right">
        <slot name="action-header" />
      </div>
    </div>

    <div class="table-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface TableColumn {
  label: string
  width?: number | string
  [key: string]: any // 支持透传 enLabel 等业务属性
}

interface Props {
  columns: TableColumn[]
  showAction?: boolean
}

withDefaults(defineProps<Props>(), {
  showAction: false
})
</script>

<style scoped lang="scss">
.base-editable-table {
  width: 100%;
  border: 1px solid rgba(0, 174, 255, 0.15);
  border-radius: 4px;
  overflow: hidden;
}

.table-header-row {
  display: flex;
  background: rgba(40, 72, 122, 0.1);
  border-bottom: 1px solid rgba(0, 174, 255, 0.2);
}

.header-col {
  flex: 1;
  padding: 12px 16px;
  border-right: 1px solid rgba(0, 174, 255, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.no-border-right {
    border-right: none;
  }
}

/* 这里的宽度必须与下面 table-cell 的 action-cell 严格一致，解决错位问题 */
.action-column-width {
  flex: 0 0 54px !important;
  width: 54px;
  padding: 0;
}

.default-label {
  font-size: 14px;
  color: #b5b5b5;
}

/* 这里的全局样式利用 :deep 穿透，确保插槽内的行和格子样式统一 */
:deep(.table-row) {
  display: flex;
  border-bottom: 1px solid rgba(0, 174, 255, 0.1);
  &:last-child { border-bottom: none; }
}

:deep(.table-cell) {
  flex: 1;
  padding: 10px 16px;
  border-right: 1px solid rgba(0, 174, 255, 0.15);
  display: flex;
  align-items: center;
  
  &:last-child {
    border-right: none;
  }

  &.action-cell {
    flex: 0 0 54px !important;
    width: 54px;
    padding: 0;
    justify-content: center;
    border-right: none;
  }
}
</style>