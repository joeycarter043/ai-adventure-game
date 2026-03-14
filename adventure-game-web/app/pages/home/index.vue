<template>
  <div class="home-page">
    <div class="welcome-section">
      <span class="welcome-text">{{ t('home_page.welcome_back') }}</span>
      <div class="welcome-actions">
        <button class="action-btn" @click="() => {}">
          <img :src="btnStartGame" alt="开始游戏" class="btn-img" />
        </button>
        <button class="action-btn" @click="() => {}">
          <img :src="btnMyStudies" alt="我的学习" class="btn-img" />
        </button>
      </div>
    </div>

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
import HomeLearningOverview from './components/HomeLearningOverview.vue'
import HomeRecommendedScenarios from './components/HomeRecommendedScenarios.vue'
import HomeKnowledgeLearning from './components/HomeKnowledgeLearning.vue'
import HomeLatestUpdates from './components/HomeLatestUpdates.vue'

// 资源引入
import btnStartGame from './assets/slices/btn_start_game.png'
import btnMyStudies from './assets/slices/btn_my_studies.png'

const { t } = useI18n()
</script>

<style scoped lang="scss">
.home-page {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 60px;
}

/* 欢迎区域样式保持不变 */
.welcome-section {
  display: flex;
  align-items: center;
  padding: 0 42px;
  margin-top: 30px;
  box-sizing: border-box;
  width: 100%;

  .welcome-text {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    font-family: 'SourceHanSansCN-Bold', sans-serif;
  }

  .welcome-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;

    .action-btn {
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      .btn-img { height: 41px; width: auto; display: block; }
    }
  }
}

/* ─── 整体内容包装层 ────────────────────────────────── */
.main-content-wrapper {
  padding: 0 42px;
  margin-top: 25px;
}

.whole-page-corner-box {
  /* 这里的背景可以根据 UI 需求调整，或者保持透明 */
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