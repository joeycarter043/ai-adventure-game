<template>
  <SubHeader>
    <template #right>
      <div class="header-action-group">
        <BaseButtonMiniBtn 
          :icon="iconBack" 
          ghost
          @click="handleBack"
        >
          {{ $t('scenario_task.actions.back') }}
        </BaseButtonMiniBtn>
      </div>
    </template>
  </SubHeader>
</template>

<script setup lang="ts">
import iconBack from '@/assets/img/icon_clock.png'

const router = useRouter()

const handleBack = () => {
  router.back()
}
</script>

<style scoped lang="scss">
.header-action-group {
  display: flex;
  gap: 10px;
}
/* 原有的 .action-mini-btn 相关样式已全部移除 */
</style>