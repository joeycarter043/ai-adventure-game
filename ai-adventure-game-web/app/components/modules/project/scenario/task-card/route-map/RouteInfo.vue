<template>
  <div class="route-info-container">
    <div class="component-header">
      <h2 class="main-title">航线信息</h2>
    </div>

    <div class="info-metrics-grid">
      <div v-for="metric in metrics" :key="metric.label" class="metric-card">
        <span class="metric-label">{{ metric.label }}</span>
        <span class="metric-value">{{ metric.value }}</span>
      </div>
    </div>

    <div class="cost-detail-section">
      <div class="section-header">
        <img :src="iconPortFeeDetail" class="header-icon" alt="cost icon" />
        <span class="header-title">港口费用明细</span>
      </div>

      <BaseTable :columns="tableColumns" :data="tableData">
        <template #amount="{ value, row }">
          <span :class="['amount-text', { 'is-total': row.isTotal }]">
            {{ value }}
          </span>
        </template>
      </BaseTable>
    </div>

    <div class="route-flow-section">
      <div class="section-header">
        <img :src="iconRouteDetail" class="header-icon" alt="route icon" />
        <span class="header-title">详细航线</span>
      </div>

      <RouteFlow :origin-port="props.data.originPort" :destination-port="props.data.destinationPort"
        :port-icon="iconPort" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import RouteFlow from './subcompoents/RouteFlow.vue'
import iconPortFeeDetail from './assets/icon_port_fee_detail.png'
import iconRouteDetail from './assets/icon_route_detail.png'
import iconPort from './assets/icon_port.png'

// 定义 Props 接收父组件传递的模拟数据或 API 数据
const props = defineProps<{
  data: any
}>()

// 核心指标计算属性
const metrics = computed(() => props.data.metrics || [])

// 表格列配置
const tableColumns = [
  { label: '费用项目', key: 'name', width: '20%', align: 'flex-start' },
  { label: '费用说明', key: 'description', width: '60%', align: 'flex-start' },
  { label: '金额', key: 'amount', width: '20%', align: 'flex-end' }
]

// 处理表格数据：将费用项与总计行合并
const tableData = computed(() => {
  if (!props.data.costItems) return []
  return [
    ...props.data.costItems,
    {
      name: '总计',
      description: '',
      amount: props.data.totalAmount,
      isTotal: true
    }
  ]
})
</script>

<style scoped lang="scss">
.route-info-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  padding: 32px 40px 45px 40px;
  border-radius: 8px;
  border: 1px solid #5A85BE;
  box-sizing: border-box;
}

.component-header {
  margin-bottom: -10px;

  .main-title {
    margin: 0;
    font-size: 30px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1;
  }
}

.info-metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 17px;

  .metric-card {
    background: rgba(13, 60, 117, 0.5);
    border: 1px solid #5A85BE;
    border-radius: 30px;
    padding: 35px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    box-sizing: border-box;

    .metric-label {
      color: #D5D5D5;
      font-size: 22px;
    }

    .metric-value {
      color: #FFC600;
      font-size: 30px;
      align-self: center;
      font-weight: 700;
    }
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  .header-icon {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .header-title {
    color: #FFFFFF;
    font-size: 24px;
  }
}

:deep(.base-table) {
  margin-top: 0;

  .table-cell,
  .header-cell {
    font-size: 22px;
  }

  .data-row:last-child {
    background: rgba(196, 196, 196, 0.1);
  }

  .amount-text {
    &.is-total {
      color: #00FFDE;
    }
  }
}

@media screen and (max-width: 1600px) {
  .info-metrics-grid .metric-card {
    padding: 25px 20px;

    .metric-label {
      font-size: 18px;
    }

    .metric-value {
      font-size: 24px;
    }
  }
}
</style>