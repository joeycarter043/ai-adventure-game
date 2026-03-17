<template>
  <div class="base-cargo-table">
    <div class="table-header-row">
      <div 
        v-for="(col, index) in columns" 
        :key="col.label" 
        class="col-container"
      >
        <div class="header-content">
          <div class="label-zh">{{ col.label }}</div>
          <div class="label-en">{{ col.enLabel }}</div>
        </div>
      </div>
    </div>

    <div class="table-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Column {
  label: string
  enLabel: string
}

defineProps<{
  columns: Column[]
}>()
</script>

<style scoped lang="scss">
.base-cargo-table {
  width: 100%;
  /* 整体左边框（如果设计稿最左侧也有线）*/
  border: 1px solid rgba(0, 174, 255, 0.15);
}

.table-header-row {
  display: flex;
  border-bottom: 1px solid rgba(0, 174, 255, 0.2);
  background: rgba(40, 72, 122, 0.1);
}

.col-container {
  flex: 1;
  padding: 12px 16px;
  border-right: 1px solid rgba(0, 174, 255, 0.15); /* 关键：右边框 */
  
  &:last-child {
    /* 最后一列根据设计稿决定是否保留边框 */
    border-right: 1px solid rgba(0, 174, 255, 0.15); 
  }
}

.label-zh {
  font-size: 14px;
  color: #b5b5b5;
}

.label-en {
  font-size: 11px;
  color: #888;
  text-transform: uppercase;
  margin-top: 2px;
}

.table-body {
  display: flex;
  flex-direction: column;
}
</style>