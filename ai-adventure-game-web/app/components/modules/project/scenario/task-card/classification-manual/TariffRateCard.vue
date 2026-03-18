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
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  width: 100%;
  min-height: 256px;
  padding: 19px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 38px;
  flex-wrap: wrap;
  gap: 12px;
}

.country-info {
  display: flex;
  align-items: center;
  gap: 17px;
}

.country-flag {
  width: 60px;
  height: 38px;
  border-radius: 4px;
  flex-shrink: 0;
}

.country-name {
  font-size: 24px;
  font-weight: 500;
  color: rgba(212, 212, 212, 1);
  line-height: 24px;
}

.preferential-tag {
  font-size: 14px;
  color: rgba(0, 255, 24, 1);
  line-height: 36px;
  padding: 0 12px;
  border-radius: 13px;
  border: 1px solid rgba(0, 255, 30, 1);
}

.preferential-icon {
  width: 69px;
  height: 28px;
  border-radius: 13px;
  border: 1px solid rgba(0, 255, 30, 1);
}

.tax-rates {
  margin-top: 18px;
  flex: 1;
}

.tax-item {
  font-size: 18px;
  color: rgba(181, 181, 181, 1);
  line-height: 36px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.tax-label {
  flex-shrink: 0;
}

.tax-value {
  color: #fff;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
  margin: 18px 0;
}

.preferential-policy {
  font-size: 16px;
  color: rgba(153, 153, 153, 1);
  line-height: 24px;
  margin: 0;
}
</style>
