<template>
    <div class="base-table">
      <div class="table-container">
        <div class="table-row header-row">
          <div 
            v-for="(col, index) in columns" 
            :key="index"
            class="table-cell header-cell"
            :style="{ width: col.width || 'auto', justifyContent: col.align || 'center' }"
          >
            {{ col.label }}
          </div>
        </div>
  
        <div 
          v-for="(row, rowIndex) in data" 
          :key="rowIndex"
          class="table-row data-row"
        >
          <div 
            v-for="(col, colIndex) in columns" 
            :key="colIndex"
            class="table-cell"
            :class="col.cellClass"
            :style="{ width: col.width || 'auto', justifyContent: col.align || 'center' }"
          >
            <slot :name="col.key" :row="row" :value="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface TableColumn {
    label: string;      // 列标题
    key: string;        // 对应数据中的 key
    width?: string;     // 宽度 (例如: '10%')
    align?: string;     // 对齐方式
    cellClass?: string; // 额外的类名
  }
  
  defineProps<{
    columns: TableColumn[];
    data: any[];
  }>();
  </script>
  
  <style scoped lang="scss">
  .base-table {
    width: 100%;
    margin-top: 24px;
  }
  
  .table-container {
    width: 100%;
    border-top: 1px solid #ffffff26;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }
  
  .table-row {
    display: flex;
    width: 100%;
    
    &.header-row {
      background: rgba(196,196,196,0.1);
    }
  
    &.data-row {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }
  }
  
  .table-cell {
    padding: 12px 16px;
    font-size: 18px;
    color: #fff;
    line-height: 30px;
    display: flex;
    align-items: center;
  }
  
  .header-cell {
    font-weight: 700;
    font-size: 20px;
  }
  </style>