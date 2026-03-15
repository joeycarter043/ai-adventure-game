<template>
  <div class="home-page">
    <HomeWelcomeSection 
      @start-game="onStartGame" 
      @my-studies="onMyStudies" 
    />

    <div class="main-content-wrapper">
      <CornerBox :corners="{ tl: false }" class="whole-page-corner-box">
        <div class="content-inner">
          <HomeLearningOverview />

          <HomeRecommendedScenarios />

          <HomeKnowledgeLearning />

          <HomeLatestUpdates />
        </div>
      </CornerBox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import CornerBox from '@/components/base/CornerBox.vue'
import HomeWelcomeSection from '@/components/modules/home/WelcomeSection.vue'
import HomeLearningOverview from '@/components/modules/home/LearningOverview.vue'
import HomeRecommendedScenarios from '@/components/modules/home/RecommendedScenarios.vue'
import HomeKnowledgeLearning from '@/components/modules/home/KnowledgeLearning.vue'
import HomeLatestUpdates from '@/components/modules/home/LatestUpdates.vue'

const { t } = useI18n()

// 处理子组件传来的点击事件
const onStartGame = () => {
  console.log('开始游戏')
}

const onMyStudies = () => {
  console.log('跳转至我的学习')
}
</script>

<style scoped lang="scss">
.home-page {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 60px;
}

.main-content-wrapper {
  padding: 0 42px;
  margin-top: 25px;
}

.whole-page-corner-box {
  background: rgba(4, 56, 113, 0.15); 
  border: 1px solid rgba(7, 84, 140, 0.3);
  border-radius: 4px;
}

.content-inner {
  display: flex;
  flex-direction: column;
  gap: 30px; 
}
</style>