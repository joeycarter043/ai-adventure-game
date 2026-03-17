<template>
  <div class="cargo-section">
    <h2 class="section-title">货物信息 / CARGO DETAILS</h2>

    <BaseEditableTable :columns="tableColumns" show-action>
      <template #header="{ column }">
        <div class="cargo-header-cell">
          <div class="label-zh">{{ column.label }}</div>
          <div class="label-en">{{ column.enLabel }}</div>
        </div>
      </template>

      <template #action-header>
        <div class="cargo-header-cell centered">
          <div class="label-zh">{{ actionColumn.label }}</div>
          <div class="label-en">{{ actionColumn.enLabel }}</div>
        </div>
      </template>

      <div v-for="(row, index) in rows" :key="row.id" class="table-row">
        <div class="table-cell">
          <BaseInput v-model="row.marks" :placeholder="$t('bill_template.cargo_marks_placeholder')" />
        </div>
        <div class="table-cell">
          <BaseInput v-model="row.packages" :placeholder="$t('bill_template.cargo_packages_placeholder')" />
        </div>
        <div class="table-cell">
          <BaseInput v-model="row.description" :placeholder="$t('bill_template.cargo_description_placeholder')" />
        </div>
        <div class="table-cell">
          <BaseInput v-model="row.weight" :placeholder="$t('bill_template.cargo_weight_placeholder')" />
        </div>
        <div class="table-cell">
          <BaseInput v-model="row.measurement" :placeholder="$t('bill_template.cargo_measurement_placeholder')" />
        </div>

        <div class="table-cell action-cell">
          <button class="remove-btn" @click="removeRow(index)" :title="$t('common.delete_row')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </BaseEditableTable>

    <BaseButtonMiniBtn :icon="iconAdd" class="mt-20" @click="addRow">
      {{ $t('common.add_row') }}
    </BaseButtonMiniBtn>

    <div class="bottom-divider" />
  </div>
</template>

<script setup lang="ts">
import iconAdd from '@/assets/img/icon_clock.png'

// 定义业务列头数据
const tableColumns = [
  { label: '唛头和号码', enLabel: 'MARKS & NUMBERS' },
  { label: '件数和包装类型', enLabel: 'NUMBER & KIND OF PACKAGES' },
  { label: '货物描述', enLabel: 'DESCRIPTION OF GOODS' },
  { label: '毛重', enLabel: 'GROSS WEIGHT' },
  { label: '体积', enLabel: 'MEASUREMENT' }
]

const actionColumn = { label: '操作', enLabel: 'ACTION' }

const rows = ref([
  { id: 1, marks: '', packages: '', description: '', weight: '', measurement: '' },
  { id: 2, marks: '', packages: '', description: '', weight: '', measurement: '' },
])

const addRow = () => {
  rows.value.push({ 
    id: Date.now(), 
    marks: '', 
    packages: '', 
    description: '', 
    weight: '', 
    measurement: '' 
  })
}

const removeRow = (index: number) => {
  if (rows.value.length <= 1) return
  rows.value.splice(index, 1)
}
</script>

<style scoped lang="scss">
.cargo-section {
  padding: 0 44px;
}

.section-title {
  font-size: 24px;
  color: #d4d4d4;
  margin: 32px 0 20px;
}

/* 中英文双行表头样式 */
.cargo-header-cell {
  &.centered {
    text-align: center;
    width: 100%;
  }
  
  .label-zh {
    font-size: 14px;
    color: #b5b5b5;
    line-height: 1.4;
  }
  
  .label-en {
    font-size: 11px;
    color: #888;
    text-transform: uppercase;
    margin-top: 2px;
  }
}

/* 业务微调：格子内的 Input 样式 */
:deep(.table-cell) {
  .base-input-wrapper {
    background: rgba(40, 72, 122, 0.15);
    border: 1px solid rgba(0, 174, 255, 0.2);
    height: 38px;
  }
}

.mt-20 { margin-top: 20px; }

.bottom-divider {
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 174, 255, 0.6) 0%, rgba(0, 174, 255, 0.1) 100%);
  margin-top: 24px;
}

/* 删除按钮样式 */
.remove-btn {
  background: transparent;
  border: none;
  color: #ff4d4f;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
  opacity: 0.6;

  &:hover {
    background: rgba(255, 77, 79, 0.1);
    opacity: 1;
    transform: scale(1.1);
  }
}
</style>