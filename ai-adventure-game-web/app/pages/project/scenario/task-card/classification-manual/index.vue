<template>
  <div class="classification-manual-page">
    <!-- 副导航 -->
    <TaskCardSubHeader />

    <!-- 商品归类查询手册内容区域 -->
    <div class="classification-manual-scroll">
      <div class="classification-manual-inner">
        <!-- 带边框的容器 -->
        <div class="classification-manual-container">
          <ClassificationManual />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ClassificationManual from '@/components/modules/project/scenario/task-card/classification-manual/ClassificationManual.vue'
import TaskCardSubHeader from '@/components/modules/project/scenario/task-card/TaskCardSubHeader.vue'

const { t } = useI18n()

// 动态面包屑标题 - 使用 computed 确保响应式更新
const taskTitle = ref(t('scenario_task.breadcrumb.current'))
provide('dynamicBreadcrumbTitle', taskTitle)
</script>

<style scoped lang="scss">
.classification-manual-page {
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

.classification-manual-scroll {
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

.classification-manual-inner {
  padding: 20px 68px 40px;
}

.classification-manual-container {
  // 无边框、无背景
}
</style>
