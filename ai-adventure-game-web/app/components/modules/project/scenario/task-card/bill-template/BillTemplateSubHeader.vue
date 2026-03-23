<template>
  <SubHeader>
    <template #left>
      <BaseBreadcrumb />
    </template>
    <template #right>
      <div class="header-action-group">
        <BaseButtonMiniBtn @click="$emit('save-draft')">
          保存草稿
        </BaseButtonMiniBtn>

        <BaseButtonMiniBtn @click="$emit('submit')">
          提交
        </BaseButtonMiniBtn>

        <BaseButtonMiniBtn @click="$emit('export')">
          导出
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