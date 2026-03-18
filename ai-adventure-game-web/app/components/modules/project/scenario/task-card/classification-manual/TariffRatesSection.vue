<template>
  <section class="tariff-rates-section">
    <div class="section-container">
      <div class="section-title-wrapper">
        <h2 class="section-title">{{ $t('classification_manual.tariff_rates.title') }}</h2>
      </div>

      <div class="rates-grid">
        <TariffRateCard
          v-for="(country, index) in visibleCountries"
          :key="country.code || index"
          :country-name="country.name"
          :country-code="country.code"
          :import-duty="country.importDuty"
          :vat="country.vat"
          :consumption-tax="country.consumptionTax"
          :has-preferential="country.hasPreferential"
          :preferential-tag="country.preferentialTag"
        />
      </div>

      <div class="view-more-container">
        <div v-if="hasMore" class="view-more-btn" @click="loadMore">
          <span class="view-more-text">{{ $t('classification_manual.tariff_rates.view_more') }}</span>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" class="view-more-icon">
            <path d="M1 1L9.5 9L18 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TariffRateCard from './TariffRateCard.vue'

// 国家税率数据接口
interface CountryTariff {
  code: string
  name: string
  importDuty: number | string
  vat: number | string
  consumptionTax: number | string
  hasPreferential: boolean
  preferentialTag?: string
}

// 完整的国家税率数据（示例数据，可从API获取）
const allCountries: CountryTariff[] = [
  {
    code: 'kr',
    name: '韩国',
    importDuty: 10,
    vat: 13,
    consumptionTax: 0,
    hasPreferential: false
  },
  {
    code: 'eu',
    name: '欧盟',
    importDuty: 14,
    vat: 20,
    consumptionTax: 0,
    hasPreferential: true,
    preferentialTag: '最惠国'
  },
  {
    code: 'us',
    name: '美国',
    importDuty: 25,
    vat: 'varies by state',
    consumptionTax: 0,
    hasPreferential: true,
    preferentialTag: '最惠国'
  },
  // 更多国家数据...
  {
    code: 'jp',
    name: '日本',
    importDuty: 0,
    vat: 10,
    consumptionTax: 0,
    hasPreferential: true,
    preferentialTag: '最惠国'
  },
  {
    code: 'au',
    name: '澳大利亚',
    importDuty: 5,
    vat: 10,
    consumptionTax: 0,
    hasPreferential: true,
    preferentialTag: '最惠国'
  },
  {
    code: 'ca',
    name: '加拿大',
    importDuty: 0,
    vat: 5,
    consumptionTax: 0,
    hasPreferential: true,
    preferentialTag: '最惠国'
  }
]

// 每次显示的国家数量
const BATCH_SIZE = 3

// 当前显示的国家数量
const visibleCount = ref(BATCH_SIZE)

// 可见的国家列表
const visibleCountries = computed(() => {
  return allCountries.slice(0, visibleCount.value)
})

// 是否还有更多
const hasMore = computed(() => {
  return visibleCount.value < allCountries.length
})

// 加载更多
const loadMore = () => {
  visibleCount.value = Math.min(visibleCount.value + BATCH_SIZE, allCountries.length)
}
</script>

<style scoped lang="scss">
.tariff-rates-section {
  width: 100%;
  margin-top: 40px;
}

.section-container {
  /* 还原设计稿外边框 */
  background: rgba(40, 72, 122, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 32px 3.5% 45px 3.5%;
  position: relative;
}

.section-title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 32px 0;
}

.rates-grid {
  display: grid;
  /* 响应式：默认4列，1600px以下3列 */
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.view-more-container {
  display: flex;
  justify-content: center; /* 按钮水平居中 */
  margin-top: 40px;
  width: 100%;
}

.view-more-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  padding: 10px 40px;
  border-radius: 4px;
  background: transparent;
  transition: all 0.3s ease;
  
  &:hover {
    .view-more-text { color: rgba(0, 255, 252, 1); }
    .view-more-icon path { stroke: rgba(0, 255, 252, 1); }
  }
}

.view-more-text {
  font-size: 18px;
  color: #fff;
}

.view-more-icon {
  transition: transform 0.3s ease;
}
</style>
