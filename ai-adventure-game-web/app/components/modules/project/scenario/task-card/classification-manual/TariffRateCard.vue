<template>
  <div class="tariff-rate-card">
    <!-- 国家头部信息 -->
    <div class="card-header">
      <div class="country-info">
        <div class="country-flag" :style="flagStyle"></div>
        <span class="country-name">{{ countryName }}</span>
      </div>
      <div v-if="preferentialTag" class="preferential-tag">
        {{ preferentialTag }}
      </div>
      <div v-else class="preferential-icon"></div>
    </div>

    <!-- 税率信息 -->
    <div class="tax-rates">
      <p class="tax-item">
        <span class="tax-label">{{ $t('classification_manual.tariff_rates.import_duty') }}:</span>
        <span class="tax-value">{{ importDuty }}%</span>
      </p>
      <p class="tax-item">
        <span class="tax-label">{{ $t('classification_manual.tariff_rates.vat') }}:</span>
        <span class="tax-value">{{ vat }}%</span>
      </p>
      <p class="tax-item">
        <span class="tax-label">{{ $t('classification_manual.tariff_rates.consumption_tax') }}:</span>
        <span class="tax-value">{{ consumptionTax }}%</span>
      </p>
    </div>

    <!-- 分隔线 -->
    <div class="divider"></div>

    <!-- 优惠政策 -->
    <p class="preferential-policy">
      {{ $t(`classification_manual.tariff_rates.${hasPreferential ? 'preferential_policy' : 'no_preferential'}`) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  // 国家名称
  countryName: string
  // 国家代码（用于国旗样式）
  countryCode?: string
  // 进口关税
  importDuty: number | string
  // 增值税
  vat: number | string
  // 消费税
  consumptionTax: number | string
  // 是否有优惠政策
  hasPreferential?: boolean
  // 优惠标签（如"最惠国"）
  preferentialTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  countryCode: '',
  importDuty: 0,
  vat: 0,
  consumptionTax: 0,
  hasPreferential: false
})

// 国旗样式
const flagStyle = computed(() => {
  // 根据国家代码设置不同的国旗样式
  switch (props.countryCode?.toLowerCase()) {
    case 'eu':
      return { background: 'linear-gradient(90deg, #003399 33%, #fff 33%, #fff 66%, #ffcc00 66%)' }
    case 'us':
    case 'usa':
      return { background: '#B22234', position: 'relative' }
    default:
      return { background: '#fff' }
  }
})
</script>

<style scoped lang="scss">
.tariff-rate-card {
  /* 科技感背景渐变 */
  background: linear-gradient(
    180deg, 
    rgba(40, 72, 122, 0.4) 0%, 
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 20px; /* 稍微减小圆角，更符合一般设计规范，若需还原30px可改回 */
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    border-color: rgba(0, 255, 252, 0.4);
    background: linear-gradient(
      180deg, 
      rgba(40, 72, 122, 0.6) 0%, 
      rgba(22, 50, 84, 0.6) 100%
    );
  }
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.country-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.country-flag {
  width: 48px; /* 调整尺寸 */
  height: 32px;
  border-radius: 4px;
  object-fit: cover;
  background-size: cover !important;
  background-position: center !important;
}

.country-name {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
}

.preferential-tag {
  font-size: 12px;
  color: rgba(0, 255, 24, 1);
  padding: 2px 10px;
  border-radius: 4px;
  background: rgba(0, 255, 24, 0.1);
  border: 1px solid rgba(0, 255, 24, 0.5);
}

.tax-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 16px;
  
  .tax-label {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .tax-value {
    color: #fff;
    font-weight: 500;
  }
}

.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 16px 0;
}

.preferential-policy {
  font-size: 14px;
  color: rgba(153, 153, 153, 1);
  /* 确保文字不会太长破坏布局 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
