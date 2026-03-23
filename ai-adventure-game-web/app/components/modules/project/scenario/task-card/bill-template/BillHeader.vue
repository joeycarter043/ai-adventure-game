<template>
  <div class="bill-header">
    <h1 class="bill-title">海运提单</h1>
    <p class="bill-title-en">MARITIME BILL OF LADING</p>

    <div class="field-row two-col">
      <span class="field-label">提单编号</span>
      <span class="field-label">签发日期</span>
    </div>

    <div class="field-row two-col">
      <BaseInput
        v-model="form.blNo"
        placeholder="请输入提单编号"
      />
      
      <BaseDatePicker
        v-model="form.issueDate"
        placeholder="年 / 月 / 日"
      />
    </div>

    <div class="divider" />
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  blNo: '',
  issueDate: '',
})
</script>

<style scoped lang="scss">
.bill-header {
  padding: 32px 44px 0;
}

.bill-title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  line-height: 1;
  margin: 0 0 14px;
}

.bill-title-en {
  font-size: 24px;
  font-weight: 500;
  color: #d6d6d6;
  text-align: center;
  line-height: 1;
  margin: 0 0 20px;
}

.field-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  &.two-col > * {
    flex: 1;
  }
}

.field-label {
  display: block;
  font-size: 18px;
  color: #d4d4d4;
  line-height: 24px;
  margin-bottom: 10px;
}

/* 原本的 .input-field 样式已全部移动到 BaseInput 和 BaseDatePicker 组件内部
   这里只需要保留布局相关的 CSS 即可
*/

.divider {
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 174, 255, 0.6) 0%, rgba(0, 174, 255, 0.1) 100%);
  margin: 18px 0 0;
}
</style>