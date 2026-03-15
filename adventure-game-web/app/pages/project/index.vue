<template>
  <div class="project-page">
    <ProjectSubHeader />
    <ProjectFilter @change="handleFilterUpdate" />
    
    <ProjectList 
      ref="listRef"
      :all-projects="allProjectData" 
      :page-size="5"
      @start="onProjectStart"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectList from '@/components/modules/project/ProjectList.vue'
import ProjectFilter from '@/components/modules/project/Filter.vue'
import ProjectSubHeader from '@/components/modules/project/ProjectSubHeader.vue'
import testImg from '@/assets/img/test/test.png'

const allProjectData = ref<any[]>([])
const listRef = ref()

// 模拟生成 20 条总数据
const initData = () => {
  const data = []
  for (let i = 1; i <= 20; i++) {
    data.push({
      id: i,
      title: `实训项目 - ${i}`,
      description: '项目描述内容...',
      duration: '120',
      score: '4.5',
      cover: testImg,
      tags: ['物流', '实操'],
      startTime: '2026-01-01',
      endTime: '2026-12-31'
    })
  }
  allProjectData.value = data
}

onMounted(initData)

const handleFilterUpdate = (filters: any) => {
  console.log('筛选条件:', filters)
  // 筛选时通常需要把列表页码重置回第 1 页
  listRef.value?.resetPage()
}

const onProjectStart = (id: string | number) => {
  console.log(`启动项目: ${id}`)
}
</script>

<style scoped lang="scss">
.project-page {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px 30px 30px;
}
</style>