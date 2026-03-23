<template>
  <div class="transport-section">
    <div class="divider" />

    <div class="transport-header-row">
      <div class="header-left">
        <span class="section-label">运输信息 / TRANSPORT DETAILS</span>
        <span class="sub-label mt-12">船名 / VESSEL</span>
      </div>
      <span class="sub-label mt-38">卸货港 / PORT OF DISCHARGE</span>
    </div>

    <div class="field-row mt-8">
      <BaseInput v-model="form.vessel" placeholder="请输入船名" />
      <BaseInput v-model="form.dischargePort" placeholder="请输入卸货港" />
    </div>

    <div class="field-row label-row mt-20">
      <span class="sub-label">航次 / VOYAGE NO.</span>
      <span class="sub-label">交货地点 / PLACE OF DELIVERY</span>
    </div>
    <div class="field-row mt-8">
      <BaseInput v-model="form.voyage" placeholder="请输入航次" />
      <BaseInput v-model="form.deliveryPlace" placeholder="请输入交货地点" />
    </div>

    <div class="field-row label-row mt-20">
      <span class="sub-label">装货港 / PORT OF LOADING</span>
      <span class="sub-label">最终目的地 / FINAL DESTINATION</span>
    </div>
    <div class="field-row mt-8">
      <BaseInput v-model="form.loadingPort" placeholder="请输入装货港" />
      <BaseInput v-model="form.finalDest" placeholder="请输入最终目的地" />
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

</style>