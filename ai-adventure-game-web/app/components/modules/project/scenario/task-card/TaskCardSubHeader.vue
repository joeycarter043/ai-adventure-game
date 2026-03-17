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
import iconContinue from '@/assets/img/icon_clock.png'
import iconExit from '@/assets/img/icon_clock.png'
import iconBack from '@/assets/img/icon_clock.png'

const router = useRouter()
const localePath = useLocalePath()

const handleContinue = () => {
  // 继续逻辑
}

const handleExit = () => {
  // 退出逻辑，通常跳转回项目选择页
  router.push(localePath('/project'))
}

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
</style>