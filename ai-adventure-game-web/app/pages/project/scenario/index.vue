<template>
  <div class="scenario-page">
    <div class="page-content">
      <ScenarioSubHeader />
      <ProjectFilter @change="handleFilterUpdate" />
      <ScenarioList 
        ref="listRef"
        :all-scenarios="allScenarios" 
        :page-size="12" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProjectFilter from '@/components/modules/project/Filter.vue'
import ScenarioSubHeader from '@/components/modules/project/scenario/ScenarioSubHeader.vue'
import ScenarioList from '@/components/modules/project/scenario/ScenarioList.vue'

import testImg from '@/assets/img/test/test.png'

const route = useRoute()
const projectId = route.query.projectId
const listRef = ref()

// 模拟数据
const allScenarios = ref(Array.from({ length: 43 }, (_, i) => ({
  id: i + 1,
  title: `剧情任务 ${i + 1}`,
  description: '这不仅是一场技术的博弈，更是一次智慧的较量。在复杂的报关流程中，你将面临各种突发状况，体验最真实的行业挑战。',
  duration: '120',
  score: (4 + Math.random()).toFixed(1),
  cover: testImg
})))

const handleFilterUpdate = (filters: any) => {
  console.log('筛选条件变更:', filters)
  // 筛选时重置到第一页
  listRef.value?.resetPage()
}

onMounted(() => {
  if (projectId) {
    console.log('加载属于项目 ID 为', projectId, '的所有剧情任务')
    // 这里调用接口：fetchScenariosByProjectId(projectId)
  }
})
</script>

<style scoped lang="scss">
.scenario-page {
  min-height: 100vh;
  padding: 0 30px 30px 30px;
  box-sizing: border-box;
}

.page-content {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

</style>