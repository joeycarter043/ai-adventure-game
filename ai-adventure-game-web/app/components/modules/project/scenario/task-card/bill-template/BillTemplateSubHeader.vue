<template>
  <SubHeader>
    <template #left>
      <BaseBreadcrumb />
    </template>
    <template #right>
      <div class="header-action-group">
        <BaseButtonMiniBtn @click="$emit('save-draft')">
          {{ $t('bill_template.btn_save_draft') }}
        </BaseButtonMiniBtn>

        <BaseButtonMiniBtn @click="$emit('submit')">
          {{ $t('bill_template.btn_submit') }}
        </BaseButtonMiniBtn>

        <BaseButtonMiniBtn @click="$emit('export')">
          {{ $t('bill_template.btn_export') }}
        </BaseButtonMiniBtn>
      </div>
    </template>
  </SubHeader>
</template>

<script setup lang="ts">
defineEmits<{
  'save-draft': []
  'submit': []
  'export': []
}>()
</script>

<style scoped lang="scss">
.header-action-group {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>