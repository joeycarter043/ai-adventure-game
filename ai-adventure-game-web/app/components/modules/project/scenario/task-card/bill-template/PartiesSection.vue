<template>
  <div class="parties-section">
    <div class="field-row label-row">
      <span class="section-label">{{ $t('bill_template.carrier_section') }}</span>
      <span class="section-label">{{ $t('bill_template.shipper_section') }}</span>
    </div>
    <div class="field-row">
      <BaseInput v-model="form.carrierName" :placeholder="$t('bill_template.carrier_name_placeholder')" />
      <BaseInput v-model="form.shipperName" :placeholder="$t('bill_template.shipper_name_placeholder')" />
    </div>
    <div class="field-row mt-gap">
      <BaseInput v-model="form.carrierAddr" :placeholder="$t('bill_template.carrier_addr_placeholder')" />
      <BaseInput v-model="form.shipperAddr" :placeholder="$t('bill_template.shipper_addr_placeholder')" />
    </div>

    <div class="field-row label-row mt-section">
      <span class="section-label">{{ $t('bill_template.consignee_section') }}</span>
      <span class="section-label">{{ $t('bill_template.notify_section') }}</span>
    </div>
    <div class="field-row">
      <BaseInput v-model="form.consigneeName" :placeholder="$t('bill_template.consignee_name_placeholder')" />
      <BaseInput v-model="form.notifyName" :placeholder="$t('bill_template.notify_name_placeholder')" />
    </div>
    <div class="field-row mt-gap">
      <BaseInput v-model="form.consigneeAddr" :placeholder="$t('bill_template.consignee_addr_placeholder')" />
      <BaseInput v-model="form.notifyAddr" :placeholder="$t('bill_template.notify_addr_placeholder')" />
    </div>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  carrierName: '',
  carrierAddr: '',
  shipperName: '',
  shipperAddr: '',
  consigneeName: '',
  consigneeAddr: '',
  notifyName: '',
  notifyAddr: '',
})
</script>

<style scoped lang="scss">
.parties-section {
  padding: 0 44px;
  margin-top: 28px;
}

.field-row {
  display: flex;
  gap: 20px;
  /* 确保 BaseInput 在 flex 容器中平分宽度 */
  > * { flex: 1; }
}

.label-row {
  margin-bottom: 12px;
}

.mt-gap { margin-top: 10px; }
.mt-section { margin-top: 28px; }

.section-label {
  font-size: 24px;
  font-weight: 500;
  color: #d4d4d4;
  line-height: 24px;
}

</style>