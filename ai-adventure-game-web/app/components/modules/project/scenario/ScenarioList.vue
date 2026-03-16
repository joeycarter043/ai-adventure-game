<template>
  <div class="scenario-container">
    <div class="scenario-list-content">
      <div class="scenario-grid">
        <ScenarioCard
          v-for="item in currentPageData"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :duration="item.duration"
          :score="item.score"
          :cover="item.cover"
          class="scenario-item"
          @click-start="handleStart"
        />
      </div>
    </div>

    <footer class="pagination-section">
      <BasePagination
        v-model:currentPage="currentPage"
        :total="allScenarios.length"
        :page-size="pageSize"
        @change="handlePageChange"
      />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ScenarioCard from './ScenarioCard.vue'
import BasePagination from '@/components/base/BasePagination.vue'
import { useRouter } from 'vue-router'

interface ScenarioItem {
  id: number | string
  title: string
  description: string
  duration: string
  score: string
  cover: string
}

const props = withDefaults(defineProps<{
  allScenarios: ScenarioItem[]
  pageSize?: number
}>(), {
  pageSize: 12
})

const router = useRouter()
const currentPage = ref(1)

// 【核心逻辑】根据当前页码对数据进行切片
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * props.pageSize
  const end = start + props.pageSize
  return props.allScenarios.slice(start, end)
})

const handlePageChange = (page: number) => {
  currentPage.value = page
  // 切换页码时滚动到容器顶部，优化体验
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleStart = (item: ScenarioItem) => {
  router.push('/project/scenario/task-card')
}

// 暴露方法给外部（比如筛选时重置页码）
defineExpose({
  resetPage: () => (currentPage.value = 1)
})
</script>

<style scoped lang="scss">
.scenario-container {
  display: flex;
  flex-direction: column;
  min-height: 800px; // 保证容器有基础高度
  width: 100%;
}

.scenario-list-content {
  flex: 1;
  padding: 0 20px 30px;
}

.scenario-grid {
  display: grid;
  gap: 20px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  max-width: 1920px;
  margin: 0 auto;
}

.scenario-item {
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.pagination-section {
  padding: 10px 30px 40px;
}
</style>