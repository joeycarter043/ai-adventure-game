<template>
  <div class="scenario-task-page-wrapper">
    <TaskDetailSubHeader />
    <div class="scenario-task-page-inner">
      <LeftSidebar />
      <TaskDetailContent />
      <RightSidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskDetailSubHeader from '@/components/modules/project/scenario/task-card/detail/TaskDetailSubHeader.vue'
import LeftSidebar from '@/components/modules/project/scenario/task-card/LeftSidebar.vue'
import RightSidebar from '@/components/modules/project/scenario/task-card/RightSidebar.vue'
import TaskDetailContent from '@/components/modules/project/scenario/task-card/detail/Content.vue'

const { t } = useI18n()

const taskTitle = ref(t('scenario_task.breadcrumb.current'))
provide('dynamicBreadcrumbTitle', taskTitle)
</script>

<style scoped lang="scss">
.scenario-task-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1920px;
  min-width: 1440px;
  margin: 0 auto;
}

.scenario-task-page-inner {
  flex: 1;
  display: flex;
  width: 100%;
  padding: 0 10px 20px 10px;
  gap: 5px;
  box-sizing: border-box;
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