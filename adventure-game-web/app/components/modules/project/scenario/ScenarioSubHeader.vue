<template>
  <SubHeader>
    <template #left>
      <AppBreadcrumb />
    </template>
    <template #right>
      <div class="header-action-group">
        <button class="action-mini-btn back-style" @click="handleBack">
          <img src="../assets/img/icon_back.png" class="btn-icon" alt="" />
          <span>{{ $t('scenario_task.actions.back') }}</span>
        </button>
      </div>
    </template>
  </SubHeader>
</template>

<script setup lang="ts">
const router = useRouter()

const handleBack = () => {
  // 智能回退
  router.back()
}
</script>

<style scoped lang="scss">
.header-action-group {
  display: flex;
  gap: 10px;
}

.action-mini-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 4px 14px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  .btn-icon {
    width: 14px;
    height: 14px;
    object-fit: contain;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(0, 246, 255, 0.6);
    box-shadow: 0 0 8px rgba(0, 246, 255, 0.2);
  }

  &.back-style {
    background: rgba(255, 255, 255, 0.02);
  }
}
</style>