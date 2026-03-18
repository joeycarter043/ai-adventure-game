<template>
  <div class="trade-terms-guide">
    <!-- 贸易术语概述 -->
    <section class="overview-section">
      <h2 class="section-title">{{ $t('trade_terms.overview.title') }}</h2>
      <p class="section-description">
        {{ $t('trade_terms.overview.description') }}
      </p>
    </section>

    <!-- 术语分类标题 -->
    <section class="classification-title-section">
      <h2 class="section-title">{{ $t('trade_terms.classification_title') }}</h2>
    </section>

    <!-- 术语分类 Tab -->
    <div class="tabs-container">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="['tab-item', { active: activeTab === tab.key }]"
        @click="activeTab = tab.key"
      >
        {{ $t(`trade_terms.tabs.${tab.key}`) }}
      </button>
    </div>

    <!-- 术语卡片列表 -->
    <div class="terms-list">
      <template v-for="(term, index) in filteredTerms" :key="term.code">
        <!-- TermCard：只在不是第一个元素时添加上边距 -->
        <div :class="['term-item', { 'has-top-gap': index > 0 }]">
          <TermCard
            :term="term"
            :is-expanded="expandedTerm === term.code"
            @toggle="toggleTerm(term.code)"
          />
          
          <!-- 展开的术语详情 -->
          <TermDetail
            v-if="expandedTerm === term.code"
            :term="getTermByCode(expandedTerm)"
          />
        </div>
      </template>
    </div>

    <!-- 分类表格标题 -->
    <section class="classification-table-section">
      <h2 class="section-title">{{ $t('trade_terms.classification_table_title') }}</h2>
    </section>

    <!-- 分类对比表格 -->
    <ClassificationTable :terms="terms" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 术语数据接口
interface TradeTerm {
  code: string
  name: string
  nameEn: string
  transport: string
  category: 'all' | 'maritime' | 'land' | 'multimodal'
  definition: string
  sellerResponsibility: string[]
  buyerResponsibility: string[]
  notes: string
  riskPoint: string
  exportClearance: string
  importClearance: string
  freightPayment: string
  insurance: string
}

// Tab 配置
const tabs = [
  { key: 'all' },
  { key: 'maritime' },
  { key: 'land' },
  { key: 'multimodal' }
]

// 当前激活的 Tab
const activeTab = ref('all')

// 展开的术语
const expandedTerm = ref<string | null>(null)

// 术语完整数据
const terms: TradeTerm[] = [
  {
    code: 'EXW',
    name: '工厂交货',
    nameEn: 'Ex Works',
    transport: 'any',
    category: 'all',
    definition: '卖方在其所在地或其他指定地点（如工厂、仓库等）将货物交给买方处置时，即完成交货。',
    sellerResponsibility: [
      '在指定地点（如工厂、仓库）将货物置于买方处置之下',
      '承担货物交给买方处置之前的一切费用和风险',
      '提供商业发票或电子数据，以及合同可能要求的其他与货物相关的凭证'
    ],
    buyerResponsibility: [
      '自行办理出口清关手续',
      '承担货物交给其处置之后的一切费用和风险',
      '安排运输工具到指定地点接运货物'
    ],
    notes: '这是卖方责任最小的术语，适合于买方有较强的国际物流能力的情况。',
    riskPoint: '卖方工厂',
    exportClearance: '买方',
    importClearance: '买方',
    freightPayment: '买方',
    insurance: '无'
  },
  {
    code: 'FCA',
    name: '货交承运人',
    nameEn: 'Free Carrier',
    transport: 'any',
    category: 'all',
    definition: '卖方在指定地点将货物交给买方指定的承运人时，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续并承担相关费用',
      '将货物交给承运人',
      '承担货物交给承运人之前的一切费用和风险'
    ],
    buyerResponsibility: [
      '办理运输手续并承担运费',
      '承担货物交给承运人之后的一切费用和风险',
      '办理进口清关手续'
    ],
    notes: '适用于任何运输方式，包括多式联运。',
    riskPoint: '交给承运人',
    exportClearance: '卖方',
    importClearance: '买方',
    freightPayment: '买方',
    insurance: '无'
  },
  {
    code: 'FOB',
    name: '船上交货',
    nameEn: 'Free On Board',
    transport: 'sea',
    category: 'maritime',
    definition: '卖方在装运港将货物装上船舶时，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续',
      '在装运港将货物装上船舶',
      '承担货物装上船之前的一切费用和风险'
    ],
    buyerResponsibility: [
      '办理运输手续并承担运费',
      '承担货物装上船之后的一切费用和风险',
      '办理进口清关手续'
    ],
    notes: '仅适用于海运或内河运输。',
    riskPoint: '货物装上船',
    exportClearance: '卖方',
    importClearance: '买方',
    freightPayment: '买方',
    insurance: '无'
  },
  {
    code: 'CFR',
    name: '成本加运费',
    nameEn: 'Cost and Freight',
    transport: 'sea',
    category: 'maritime',
    definition: '卖方在装运港将货物装上船舶，并支付运费至目的港，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续',
      '在装运港将货物装上船舶',
      '支付运费至目的港',
      '承担货物装上船之前的一切费用和风险'
    ],
    buyerResponsibility: [
      '承担运费以外的费用和风险',
      '办理进口清关手续'
    ],
    notes: '仅适用于海运或内河运输。',
    riskPoint: '货物装上船',
    exportClearance: '卖方',
    importClearance: '买方',
    freightPayment: '卖方',
    insurance: '无'
  },
  {
    code: 'CIF',
    name: '成本、保险费加运费',
    nameEn: 'Cost, Insurance and Freight',
    transport: 'sea',
    category: 'maritime',
    definition: '卖方在装运港将货物装上船舶，支付运费和保险费至目的港，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续',
      '在装运港将货物装上船舶',
      '支付运费和保险费至目的港',
      '承担货物装上船之前的一切费用和风险'
    ],
    buyerResponsibility: [
      '承担运费和保险费以外的费用和风险',
      '办理进口清关手续'
    ],
    notes: '仅适用于海运或内河运输。卖方只需投保最低险别。',
    riskPoint: '货物装上船',
    exportClearance: '卖方',
    importClearance: '买方',
    freightPayment: '卖方',
    insurance: '最低险别'
  },
  {
    code: 'CPT',
    name: '运费付至',
    nameEn: 'Carriage Paid To',
    transport: 'any',
    category: 'all',
    definition: '卖方支付运费将货物交给承运人，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续',
      '将货物交给承运人',
      '支付运费至目的地',
      '承担货物交给承运人之前的一切费用和风险'
    ],
    buyerResponsibility: [
      '承担运费以外的费用和风险',
      '办理进口清关手续'
    ],
    notes: '适用于任何运输方式。',
    riskPoint: '交给承运人',
    exportClearance: '卖方',
    importClearance: '买方',
    freightPayment: '卖方',
    insurance: '无'
  },
  {
    code: 'CIP',
    name: '运费和保险费付至',
    nameEn: 'Carriage and Insurance Paid To',
    transport: 'any',
    category: 'all',
    definition: '卖方支付运费和保险费将货物交给承运人，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续',
      '将货物交给承运人',
      '支付运费和保险费至目的地',
      '承担货物交给承运人之前的一切费用和风险'
    ],
    buyerResponsibility: [
      '承担运费和保险费以外的费用和风险',
      '办理进口清关手续'
    ],
    notes: '适用于任何运输方式。卖方只需投保最低险别。',
    riskPoint: '交给承运人',
    exportClearance: '卖方',
    importClearance: '买方',
    freightPayment: '卖方',
    insurance: '最低险别'
  },
  {
    code: 'DAP',
    name: '目的地交货',
    nameEn: 'Delivered At Place',
    transport: 'any',
    category: 'all',
    definition: '卖方在指定目的地将货物交给买方处置时，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续',
      '承担运输至目的地的费用和风险',
      '在指定目的地将货物交给买方处置'
    ],
    buyerResponsibility: [
      '办理进口清关手续',
      '承担卸货费用'
    ],
    notes: '适用于任何运输方式。',
    riskPoint: '目的地',
    exportClearance: '卖方',
    importClearance: '买方',
    freightPayment: '卖方',
    insurance: '无'
  },
  {
    code: 'DPU',
    name: '目的地卸货后交货',
    nameEn: 'Delivered at Place Unloaded',
    transport: 'any',
    category: 'all',
    definition: '卖方在指定目的地将货物从运输工具上卸下并交给买方处置时，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续',
      '承担运输至目的地的费用和风险',
      '在指定目的地将货物从运输工具上卸下'
    ],
    buyerResponsibility: [
      '办理进口清关手续',
      '承担卸货后的费用'
    ],
    notes: '适用于任何运输方式。这是Incoterms 2020新增的术语。',
    riskPoint: '目的地卸货后',
    exportClearance: '卖方',
    importClearance: '买方',
    freightPayment: '卖方',
    insurance: '无'
  },
  {
    code: 'DDP',
    name: '完税后交货',
    nameEn: 'Delivered Duty Paid',
    transport: 'any',
    category: 'all',
    definition: '卖方在指定目的地将货物交给买方，并办理完进口清关手续，即完成交货。',
    sellerResponsibility: [
      '办理出口清关手续',
      '办理进口清关手续并承担税费',
      '承担运输至目的地的所有费用和风险',
      '在指定目的地将货物交给买方处置'
    ],
    buyerResponsibility: [
      '协助卖方办理进口清关手续',
      '承担卸货费用'
    ],
    notes: '这是卖方责任最大的术语。',
    riskPoint: '目的地',
    exportClearance: '卖方',
    importClearance: '卖方',
    freightPayment: '卖方',
    insurance: '无'
  }
]

// 根据 Tab 筛选术语
const filteredTerms = computed(() => {
  if (activeTab.value === 'all') {
    return terms
  }
  return terms.filter(term => term.category === activeTab.value)
})

// 切换术语展开状态
const toggleTerm = (code: string) => {
  expandedTerm.value = expandedTerm.value === code ? null : code
}

// 根据编码获取术语
const getTermByCode = (code: string) => {
  return terms.find(term => term.code === code)
}
</script>

<style scoped lang="scss">
.trade-terms-guide {
  width: 100%;
  min-height: 100%;
  padding: 20px 68px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.overview-section,
.classification-title-section {
  margin-bottom: 24px;
}

.classification-table-section {
  margin-top: 56px;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  line-height: 24px;
  margin-bottom: 23px;
}

.section-description {
  font-size: 24px;
  font-weight: 500;
  color: #d6d6d6;
  line-height: 40px;
  max-width: 1516px;
}

.tabs-container {
  display: flex;
  gap: 15px;
  margin-bottom: 32px;
}

.tab-item {
  min-width: 104px;
  height: 36px;
  padding: 0 20px;
  border-radius: 11px;
  border: 1px solid transparent;
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 255, 252, 0.5);
  }

  &.active {
    background-color: rgba(4, 160, 201, 1);
    border-color: rgba(0, 255, 252, 1);
  }
}

.terms-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.term-item {
  display: flex;
  flex-direction: column;

  &.has-top-gap {
    margin-top: 0;
  }
}
</style>
