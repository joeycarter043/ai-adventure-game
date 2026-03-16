<template>
  <div class="project-container">
    <div class="project-list">
      <ProjectCard
        v-for="item in currentPageData"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :duration="item.duration"
        :score="item.score"
        :cover="item.cover"
        :tags="item.tags"
        :start-time="item.startTime"
        :end-time="item.endTime"
        @start="handleStartProject"
      />
    </div>

    <div class="pagination-wrapper">
      <BasePagination
        v-model:currentPage="currentPage"
        :total="allProjects.length"
        :page-size="pageSize"
        @change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import BasePagination from '@/components/base/BasePagination.vue'

interface ProjectItem {
  id: number | string
  title: string
  description: string
  duration: string
  score: string
  cover: string
  tags: string[]
  startTime: string
  endTime: string
}

const props = defineProps<{
  allProjects: ProjectItem[] // 接收全部数据
  pageSize?: number          // 每页显示数量，默认 5
}>()

const emit = defineEmits(['start', 'page-change'])

const currentPage = ref(1)
const pageSize = computed(() => props.pageSize || 5)

// 【核心逻辑】根据当前页码对数据进行切片
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return props.allProjects.slice(start, end)
})

const handlePageChange = (page: number) => {
  currentPage.value = page
  emit('page-change', page)
}

const handleStartProject = (id: number | string) => {
  emit('start', id)
}

// 暴露一个方法给父组件，用于重置页码（比如搜索过滤时）
defineExpose({
  resetPage: () => (currentPage.value = 1)
})
</script>

<style scoped lang="scss">
.project-container {
  display: flex;
  flex-direction: column; // 强制子元素纵向排列
  gap: 20px;              // 列表和分页之间的间距
  width: 100%;
}

.project-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  /* 移除 overflow-y: auto，由页面整体滚动 */
}

.pagination-wrapper {
  width: 100%;
  padding: 0 30px;
  margin-bottom: 30px;
}

/* 滚动条样式可选（如果外层容器有固定高度则生效） */
.project-list::-webkit-scrollbar {
  width: 6px;
}
.project-list::-webkit-scrollbar-track {
  background: rgba(19, 34, 57, 0.5);
}
.project-list::-webkit-scrollbar-thumb {
  background: #17a0fc;
  border-radius: 3px;
}
</style>