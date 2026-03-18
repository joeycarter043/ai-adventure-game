<template>
  <div class="term-detail" v-if="term">
    <div class="detail-content">
      <!-- 定义 -->
      <div class="detail-section">
        <h4 class="detail-title">{{ $t('trade_terms.detail.definition') }}</h4>
        <p class="detail-text">{{ term.definition }}</p>
      </div>

      <!-- 卖方责任 -->
      <div class="detail-section">
        <h4 class="detail-title">{{ $t('trade_terms.detail.seller_responsibility') }}</h4>
        <ul class="detail-list">
          <li v-for="(item, index) in term.sellerResponsibility" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- 买方责任 -->
      <div class="detail-section">
        <h4 class="detail-title">{{ $t('trade_terms.detail.buyer_responsibility') }}</h4>
        <ul class="detail-list">
          <li v-for="(item, index) in term.buyerResponsibility" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- 注意事项 -->
      <div class="detail-section">
        <h4 class="detail-title">{{ $t('trade_terms.detail.notes') }}</h4>
        <p class="detail-text highlight">{{ term.notes }}</p>
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

defineProps<{
  term?: TradeTerm
}>()
</script>

<style scoped lang="scss">
.term-detail {
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 0 8px 8px 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-top: none;
  padding: 24px 32px;
  margin-top: 0;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 26px;
}

.detail-text {
  font-size: 18px;
  color: rgba(213, 213, 213, 1);
  margin: 0;
  line-height: 26px;

  &.highlight {
    color: rgba(0, 255, 252, 0.9);
  }
}

.detail-list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    font-size: 18px;
    color: rgba(213, 213, 213, 1);
    line-height: 26px;
  }
}
</style>
