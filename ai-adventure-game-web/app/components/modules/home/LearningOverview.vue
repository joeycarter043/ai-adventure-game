<template>
  <div class="learning-overview-section">
    <div class="section-header">
      <SectionTitleBar 
        class="home-title-custom" 
        :style="{ '--title-bg-size': 'auto 100%' }"
        :title="t('home_page.learning_overview')" 
      />
    </div>

    <div class="stats-container">
      <div class="stat-card">
        <span class="stat-label">{{ t('home_page.total_knowledge_points') }}</span>
        <span class="stat-value green">345</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">{{ t('home_page.total_skill_points') }}</span>
        <span class="stat-value green">128</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">{{ t('home_page.total_scenarios') }}</span>
        <span class="stat-value green">100</span>
      </div>
      <div class="stat-card skill-card">
        <span class="stat-label">{{ t('home_page.skill_level') }}</span>
        <span class="stat-value gold">{{ t('home_page.senior_technician') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitleBar from '@/components/base/SectionTitleBar.vue'

const { t } = useI18n()
</script>

<style scoped lang="scss">
.learning-overview-section {
  width: 100%;
  box-sizing: border-box;
}

.home-header-wrapper {
  display: flex;
  align-items: stretch;
  height: 35px;
  margin-bottom: 24px;

  .title-bar {
    background-color: #17a0fc;
    width: 9px;
    height: 35px;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .home-title-custom {
    :deep(.section-title-text) {
      font-size: 22px;
      font-family: 'SourceHanSansCN-Medium', sans-serif;
    }
  }
}

/* 优化后的统计容器：去掉固定宽度，改为 flex 自适应 */
.stats-container {
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 20px 20px 0 20px;
}

.stat-card {
  position: relative;
  flex: 1; /* 每个卡片平分空间 */
  min-width: 0; /* 防止内容撑破 flex 容器 */
  height: 146px;
  background: url('./assets/bg_stat_card.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 3px;
    right: 3px;
    height: 49px;
    background: rgba(7, 84, 140, 0.47);
    box-shadow: 0px -12px 39px 3px rgba(5, 158, 222, 0.22);
    border-radius: 3px 3px 0 0;
  }

  .stat-label {
    position: relative;
    z-index: 1;
    height: 49px; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    font-family: 'SourceHanSansCN-Medium', sans-serif;
    white-space: nowrap;
  }

  .stat-value {
    position: relative;
    z-index: 1;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 32px;
    font-weight: 700;
    white-space: nowrap;
    line-height: 1;

    &.green {
      color: #00ff12;
      font-family: 'ADZYJT', 'Impact', sans-serif;
    }

    &.gold {
      color: #fead00;
      font-size: 32px;
      font-family: 'SourceHanSansCN-Bold', sans-serif;
    }
  }
}

/* 屏幕太窄时的处理 */
@media (max-width: 1200px) {
  .stat-value {
    font-size: 36px !important;
  }
  .stat-label {
    font-size: 16px !important;
  }
}
</style>