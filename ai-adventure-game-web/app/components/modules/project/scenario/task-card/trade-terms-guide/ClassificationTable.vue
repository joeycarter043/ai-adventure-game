<template>
  <div class="classification-table">
    <BaseTable :columns="tableColumns" :data="terms">
      <template #code="{ value }">
        <span class="term-code">{{ value }}</span>
      </template>

      <template #transport="{ value }">
        {{ transportLabels[value] || value }}
      </template>

      <template #riskPoint="{ value }">
        {{ riskPointLabels[value] || value }}
      </template>
      
      </BaseTable>
  </div>
</template>

<script setup lang="ts">

interface TradeTerm {
  code: string
  transport: string
  riskPoint: string
  exportClearance: string
  importClearance: string
  freightPayment: string
  insurance: string
}

const props = defineProps<{
  terms: TradeTerm[]
}>()

// 列配置
const tableColumns = [
  { label: '术语', key: 'code', width: '10%' },
  { label: '运输方式', key: 'transport', width: '25%' },
  { label: '风险转移点', key: 'riskPoint', width: '14%' },
  { label: '出口清关', key: 'exportClearance', width: '12%' },
  { label: '进口清关', key: 'importClearance', width: '12%' },
  { label: '运费支付', key: 'freightPayment', width: '12%' },
  { label: '保险责任', key: 'insurance', width: '12%' },
]

// 映射表（保持不变）
const transportLabels: Record<string, string> = {
  any: '适用于任何运输方式',
  sea: '仅适用于海运或内河运输'
}

const riskPointLabels: Record<string, string> = {
  '卖方工厂': '卖方工厂',
  '交给承运人': '交给承运人',
  '货物装上船': '货物装上船',
  '目的地': '目的地',
  '目的地卸货后': '目的地卸货后'
}

// 提示：可以在这里利用 computed 预处理 terms 数据，
// 这样就不用在 template 里写一堆插槽来处理 Labels 了。
</script>

<style scoped lang="scss">
.term-code {
  font-weight: 700;
  color: rgba(0, 255, 252, 0.9);
}
</style>