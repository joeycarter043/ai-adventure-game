<template>
  <SubHeader>
    <template #left>
      <BaseBreadcrumb />
    </template>
    <template #right>
      <div class="header-action-group">
        <BaseButtonMiniBtn 
          :icon="iconContinue" 
          @click="handleContinue"
        >
          {{ $t('scenario_task.actions.continue') }}
        </BaseButtonMiniBtn>
        
        <BaseButtonMiniBtn 
          :icon="iconExit" 
          @click="handleExit"
        >
          {{ $t('scenario_task.actions.exit') }}
        </BaseButtonMiniBtn>

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
// 使用 @ 别名引入图片资源，路径更清晰
import iconContinue from '@/assets/img/icon_clock.png'
import iconExit from '@/assets/img/icon_clock.png'
import iconBack from '@/assets/img/icon_clock.png'

const router = useRouter()
const localePath = useLocalePath()

const handleContinue = () => {
  // 继续逻辑
}

const handleExit = () => {
  router.push(localePath('/project'))
}

const handleBack = () => {
  router.back()
}
</script>

<style scoped lang="scss">
.header-action-group {
  display: flex;
  gap: 10px;
}
/* 这里原有的 .action-mini-btn 相关 CSS 全部删除了 */
</style>