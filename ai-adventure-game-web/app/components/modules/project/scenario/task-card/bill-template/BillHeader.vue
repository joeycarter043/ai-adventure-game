<template>
  <div class="bill-header">
    <h1 class="bill-title">{{ $t('bill_template.title') }}</h1>
    <p class="bill-title-en">{{ $t('bill_template.title_en') }}</p>

    <div class="field-row two-col">
      <span class="field-label">{{ $t('bill_template.bl_no_label') }}</span>
      <span class="field-label">{{ $t('bill_template.issue_date_label') }}</span>
    </div>
    <div class="field-row two-col">
      <input
        v-model="form.blNo"
        class="input-field"
        :placeholder="$t('bill_template.bl_no_placeholder')"
      />
      <input
        v-model="form.issueDate"
        class="input-field"
        :placeholder="$t('bill_template.issue_date_placeholder')"
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

.input-field {
  flex: 1;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 1);
  background: linear-gradient(rgba(40, 72, 122, 0.22), rgba(22, 50, 84, 0.22));
  color: #fff;
  font-size: 14px;
  padding: 0 13px;
  outline: none;
  transition: border-color 0.15s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: rgba(0, 174, 255, 0.5);
  }
}

.divider {
  height: 2px;
  background: linear-gradient(90deg, rgba(0, 174, 255, 0.6) 0%, rgba(0, 174, 255, 0.1) 100%);
  margin: 18px 0 0;
}
</style>
