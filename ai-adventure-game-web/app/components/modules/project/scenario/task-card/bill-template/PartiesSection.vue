<template>
  <!-- 承运人 / 托运人 section -->
  <div class="parties-section">
    <div class="field-row label-row">
      <span class="section-label">{{ $t('bill_template.carrier_section') }}</span>
      <span class="section-label">{{ $t('bill_template.shipper_section') }}</span>
    </div>
    <div class="field-row">
      <input v-model="form.carrierName" class="input-field" :placeholder="$t('bill_template.carrier_name_placeholder')" />
      <input v-model="form.shipperName" class="input-field" :placeholder="$t('bill_template.shipper_name_placeholder')" />
    </div>
    <div class="field-row mt-gap">
      <input v-model="form.carrierAddr" class="input-field" :placeholder="$t('bill_template.carrier_addr_placeholder')" />
      <input v-model="form.shipperAddr" class="input-field" :placeholder="$t('bill_template.shipper_addr_placeholder')" />
    </div>

    <div class="field-row label-row mt-section">
      <span class="section-label">{{ $t('bill_template.consignee_section') }}</span>
      <span class="section-label">{{ $t('bill_template.notify_section') }}</span>
    </div>
    <div class="field-row">
      <input v-model="form.consigneeName" class="input-field" :placeholder="$t('bill_template.consignee_name_placeholder')" />
      <input v-model="form.notifyName" class="input-field" :placeholder="$t('bill_template.notify_name_placeholder')" />
    </div>
    <div class="field-row mt-gap">
      <input v-model="form.consigneeAddr" class="input-field" :placeholder="$t('bill_template.consignee_addr_placeholder')" />
      <input v-model="form.notifyAddr" class="input-field" :placeholder="$t('bill_template.notify_addr_placeholder')" />
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

.input-field {
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(40, 72, 122, 0.22), rgba(22, 50, 84, 0.22));
  color: #fff;
  font-size: 14px;
  padding: 0 13px;
  outline: none;
  transition: border-color 0.15s;

  &::placeholder { color: #999; }
  &:focus { border-color: rgba(0, 174, 255, 0.5); }
}
</style>
