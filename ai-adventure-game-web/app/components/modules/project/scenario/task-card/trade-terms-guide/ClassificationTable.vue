<template>
  <div class="classification-table">
    <div class="table-container">
      <!-- 表头 -->
      <div class="table-row header-row">
        <div class="table-cell header-cell">{{ $t('trade_terms.table.term') }}</div>
        <div class="table-cell header-cell">{{ $t('trade_terms.table.transport') }}</div>
        <div class="table-cell header-cell">{{ $t('trade_terms.table.risk_point') }}</div>
        <div class="table-cell header-cell">{{ $t('trade_terms.table.export_clearance') }}</div>
        <div class="table-cell header-cell">{{ $t('trade_terms.table.import_clearance') }}</div>
        <div class="table-cell header-cell">{{ $t('trade_terms.table.freight_payment') }}</div>
        <div class="table-cell header-cell">{{ $t('trade_terms.table.insurance') }}</div>
      </div>

      <!-- 表体 -->
      <div 
        v-for="term in terms" 
        :key="term.code"
        class="table-row data-row"
      >
        <div class="table-cell term-code">{{ term.code }}</div>
        <div class="table-cell">{{ $t(`trade_terms.transport.${term.transport}`) }}</div>
        <div class="table-cell">{{ $t(`trade_terms.risk_points.${term.riskPoint}`) }}</div>
        <div class="table-cell">{{ $t(`trade_terms.clearance.${term.exportClearance}`) }}</div>
        <div class="table-cell">{{ $t(`trade_terms.clearance.${term.importClearance}`) }}</div>
        <div class="table-cell">{{ $t(`trade_terms.freight.${term.freightPayment}`) }}</div>
        <div class="table-cell">{{ $t(`trade_terms.insurance.${term.insurance}`) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 术语数据接口
interface TradeTerm {
  code: string
  name: string
  nameEn: string
  transport: string
  category: string
  riskPoint: string
  exportClearance: string
  importClearance: string
  freightPayment: string
  insurance: string
}

defineProps<{
  terms: TradeTerm[]
}>()
</script>

<style scoped lang="scss">
.classification-table {
  width: 100%;
  margin-top: 24px;
}

.table-container {
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  border-left: none;
  border-right: none;
  overflow: hidden;
}

.table-row {
  display: flex;
  width: 100%;
  
  &.header-row {
    background: linear-gradient(
      rgba(40, 72, 122, 0.5) 0%,
      rgba(40, 72, 122, 0.5) 0%,
      rgba(22, 50, 84, 0.5) 100%,
      rgba(22, 50, 84, 0.5) 100%
    );
  }

  &.data-row {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    background-color: transparent;
  }
}

.table-cell {
  padding: 12px 16px;
  font-size: 18px;
  color: #fff;
  line-height: 30px;
  display: flex;
  align-items: center;

  &:nth-child(1) {
    width: 10%;
    justify-content: center;
  }
  &:nth-child(2) {
    width: 25%;
    justify-content: center;
  }
  &:nth-child(3) {
    width: 14%;
    justify-content: center;
  }
  &:nth-child(4) {
    width: 12%;
    justify-content: center;
  }
  &:nth-child(5) {
    width: 12%;
    justify-content: center;
  }
  &:nth-child(6) {
    width: 12%;
    justify-content: center;
  }
  &:nth-child(7) {
    width: 12%;
    justify-content: center;
  }
}

.header-cell {
  font-weight: 700;
  font-size: 20px;
}

.term-code {
  font-weight: 700;
  color: rgba(0, 255, 252, 0.9);
}
</style>
