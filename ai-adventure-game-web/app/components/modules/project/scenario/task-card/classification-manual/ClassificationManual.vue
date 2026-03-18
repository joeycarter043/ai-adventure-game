<template>
  <div class="classification-manual">
    <!-- 商品编码查询区域 -->
    <ProductQuerySection />

    <!-- 各国税率及优惠政策区域 -->
    <TariffRatesSection />

    <!-- 检验检疫要求区域 -->
    <InspectionQuarantineSection />
  </div>
</template>

<script setup lang="ts">
import ProductQuerySection from './ProductQuerySection.vue'
import TariffRatesSection from './TariffRatesSection.vue'
import InspectionQuarantineSection from './InspectionQuarantineSection.vue'
</script>

<style scoped lang="scss">
.classification-manual {
  width: 100%;
  min-height: 100%;
  padding: 20px 0;
}
</style>
