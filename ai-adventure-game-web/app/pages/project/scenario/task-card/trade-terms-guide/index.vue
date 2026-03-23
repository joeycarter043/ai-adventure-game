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

// 动态面包屑标题 - 使用 computed 确保响应式更新
const taskTitle = ref('海运提单之谜')
provide('dynamicBreadcrumbTitle', taskTitle)
</script>

<style scoped lang="scss">
.trade-terms-guide-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
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
  padding: 20px 20px 40px;
}

.trade-terms-container {
  background: rgba(40, 72, 122, 0.2);
  border-radius: 8px;
  border: 1px solid #5A85BE;
}
</style>
