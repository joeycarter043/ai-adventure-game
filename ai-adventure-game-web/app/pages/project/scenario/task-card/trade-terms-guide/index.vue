<template>
  <div class="trade-terms-guide-page">
    <!-- 副导航 - 使用 TaskCardSubHeader -->
    <TaskCardSubHeader />

    <!-- 贸易术语指南内容区域 -->
    <div class="trade-terms-scroll">
      <div class="trade-terms-inner">
        <!-- 带边框的容器 -->
        <div class="trade-terms-container">
          <TradeTermsGuide />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TradeTermsGuide from '@/components/modules/project/scenario/task-card/trade-terms-guide/TradeTermsGuide.vue'
import TaskCardSubHeader from '@/components/modules/project/scenario/task-card/TaskCardSubHeader.vue'

const { t } = useI18n()

// 动态面包屑标题 - 使用 computed 确保响应式更新
const taskTitle = ref(t('scenario_task.breadcrumb.current'))
provide('dynamicBreadcrumbTitle', taskTitle)
</script>

<style scoped lang="scss">
.trade-terms-guide-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  min-width: 1440px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  background-color: rgba(19, 34, 57, 1);
}

.trade-terms-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 174, 255, 0.3);
    border-radius: 3px;
  }
}

.trade-terms-inner {
  padding: 20px 68px 40px;
}

.trade-terms-container {
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
