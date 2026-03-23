<template>
  <div class="parties-section">
    <div class="field-row label-row">
      <span class="section-label">承运人 / CARRIER</span>
      <span class="section-label">托运人 / SHIPPER</span>
    </div>
    <div class="field-row">
      <BaseInput v-model="form.carrierName" placeholder="请输入承运人名称" />
      <BaseInput v-model="form.shipperName" placeholder="请输入托运人名称" />
    </div>
    <div class="field-row mt-gap">
      <BaseInput v-model="form.carrierAddr" placeholder="请输入承运人地址" />
      <BaseInput v-model="form.shipperAddr" placeholder="请输入托运人地址" />
    </div>

    <div class="field-row label-row mt-section">
      <span class="section-label">收货人 / CONSIGNEE</span>
      <span class="section-label">通知方 / NOTIFY PARTY</span>
    </div>
    <div class="field-row">
      <BaseInput v-model="form.consigneeName" placeholder="请输入收货人名称" />
      <BaseInput v-model="form.notifyName" placeholder="请输入通知方名称" />
    </div>
    <div class="field-row mt-gap">
      <BaseInput v-model="form.consigneeAddr" placeholder="请输入收货人地址" />
      <BaseInput v-model="form.notifyAddr" placeholder="请输入通知方地址" />
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