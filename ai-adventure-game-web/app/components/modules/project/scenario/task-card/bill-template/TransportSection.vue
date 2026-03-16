<template>
  <div class="transport-section">
    <div class="divider" />

    <div class="transport-header-row">
      <div class="header-left">
        <span class="section-label">{{ $t('bill_template.transport_section') }}</span>
        <span class="sub-label mt-12">{{ $t('bill_template.vessel_label') }}</span>
      </div>
      <span class="sub-label mt-38">{{ $t('bill_template.discharge_port_label') }}</span>
    </div>

    <div class="field-row mt-8">
      <input v-model="form.vessel" class="input-field" :placeholder="$t('bill_template.vessel_placeholder')" />
      <input v-model="form.dischargePort" class="input-field" :placeholder="$t('bill_template.discharge_port_placeholder')" />
    </div>

    <div class="field-row label-row mt-20">
      <span class="sub-label">{{ $t('bill_template.voyage_label') }}</span>
      <span class="sub-label">{{ $t('bill_template.delivery_place_label') }}</span>
    </div>
    <div class="field-row mt-8">
      <input v-model="form.voyage" class="input-field" :placeholder="$t('bill_template.voyage_placeholder')" />
      <input v-model="form.deliveryPlace" class="input-field" :placeholder="$t('bill_template.delivery_place_placeholder')" />
    </div>

    <div class="field-row label-row mt-20">
      <span class="sub-label">{{ $t('bill_template.loading_port_label') }}</span>
      <span class="sub-label">{{ $t('bill_template.final_dest_label') }}</span>
    </div>
    <div class="field-row mt-8">
      <input v-model="form.loadingPort" class="input-field" :placeholder="$t('bill_template.loading_port_placeholder')" />
      <input v-model="form.finalDest" class="input-field" :placeholder="$t('bill_template.final_dest_placeholder')" />
    </div>

    <div class="divider mt-16" />
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  vessel: '',
  dischargePort: '',
  voyage: '',
  deliveryPlace: '',
  loadingPort: '',
  finalDest: '',
})
</script>

<style scoped lang="scss">
.transport-section {
  padding: 0 44px;
  margin-top: 32px;
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 174, 255, 0.6) 0%, rgba(0, 174, 255, 0.1) 100%);
  &.mt-16 { margin-top: 16px; }
}

.transport-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 28px;
  gap: 20px;
}

.header-left {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.section-label {
  font-size: 24px;
  font-weight: 500;
  color: #d4d4d4;
  line-height: 24px;
}

.sub-label {
  font-size: 16px;
  color: #b5b5b5;
  line-height: 24px;
  &.mt-12 { margin-top: 14px; }
  &.mt-38 { margin-top: 38px; }
}

.field-row {
  display: flex;
  gap: 20px;
  > * { flex: 1; }
}

.label-row > * { flex: 1; }

.mt-8  { margin-top: 8px; }
.mt-20 { margin-top: 20px; }

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
