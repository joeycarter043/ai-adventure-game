<template>
  <div class="scenario-task-page-wrapper">
    <TaskCardSubHeader />
    <div class="scenario-task-page-inner">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCardSubHeader from './components/TaskCardSubHeader.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import MainContent from './components/MainContent.vue'
import RightSidebar from './components/RightSidebar.vue'

const { t } = useI18n()

// 定义并注入当前的动态名称（可以是 API 返回的，也可以是 i18n 的）
const currentScenarioTitle = ref(t('scenario_task.breadcrumb.current')) // "海运提单之谜"
provide('dynamicBreadcrumbTitle', currentScenarioTitle)

// 如果以后剧本名变了，只需：
// currentScenarioTitle.value = "空运紧急任务"
</script>

<style scoped lang="scss">
.scenario-task-page-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  min-width: 1440px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
}

.scenario-task-page-inner {
  flex: 1;
  display: flex;
  width: 100%;
  padding: 0 10px 20px;
  gap: 5px;
  box-sizing: border-box;
  overflow: hidden;
  min-height: 0;
}

:deep(.left-sidebar) { 
  width: 300px; 
  flex-shrink: 0; /* 宽度固定，不随屏幕变小而收缩 */
}

:deep(.main-content) { 
  flex: 1;        /* 关键：在 1440 到 1920 之间，只有中间会拉伸 */
  min-width: 0;   /* 保证中间区域可以正常计算宽度 */
}

:deep(.right-sidebar) { 
  width: 320px; 
  flex-shrink: 0; /* 宽度固定 */
}
</style>