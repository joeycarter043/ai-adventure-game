<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="home-page">
    <!-- 背景层 -->
    <div class="background-layer"></div>

    <!-- 内容层 -->
    <div class="content-layer">
      <!-- 欢迎区域 -->
      <div class="welcome-section">
        <span class="welcome-text">{{ t('home_page.welcome_back') }}</span>
        <div class="header-icons">
          <div class="icon icon-notification"></div>
          <div class="icon icon-settings"></div>
        </div>
      </div>

      <!-- 学习概览区域 -->
      <div class="learning-overview-section">
        <div class="section-title">
          <div class="title-bar"></div>
          <span class="title-text">{{ t('home_page.learning_overview') }}</span>
        </div>

        <!-- 统计数据 -->
        <div class="stats-container">
          <div class="stat-card">
            <span class="stat-label">{{ t('home_page.total_knowledge_points') }}</span>
            <span class="stat-value">345</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">{{ t('home_page.total_skill_points') }}</span>
            <span class="stat-value">128</span>
          </div>
          <div class="stat-card">
            <span class="stat-label">{{ t('home_page.total_scenarios') }}</span>
            <span class="stat-value">100</span>
          </div>
          <div class="stat-card skill-level-card">
            <span class="stat-label">{{ t('home_page.skill_level') }}</span>
            <span class="stat-value skill-level-text">{{ t('home_page.senior_technician') }}</span>
          </div>
        </div>
      </div>

      <!-- 推荐剧本区域 -->
      <HomeRecommendedScenarios />

      <!-- 知识学习区域 -->
      <HomeKnowledgeLearning />

      <!-- 最新动态区域 -->
      <HomeLatestUpdates />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  position: relative;
  width: 1920px;
  height: 1880px;
  overflow: hidden;
  min-width: 1440px;
  margin: 0 auto;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a1a2f;
}

.content-layer {
  position: relative;
  z-index: 1;
}

.welcome-section {
  display: flex;
  align-items: center;
  width: 100%;
  height: 41px;
  padding: 127px 42px;
  box-sizing: border-box;

  .welcome-text {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    font-family: 'SourceHanSansCN-Bold', sans-serif;
    white-space: nowrap;
  }

  .header-icons {
    display: flex;
    margin-left: auto;
    gap: 8px;
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);

    &.icon-notification {
      background: linear-gradient(135deg, #17a0fc, #07548c);
    }

    &.icon-settings {
      background: linear-gradient(135deg, #17a0fc, #07548c);
    }
  }
}

.learning-overview-section {
  padding: 0 42px;

  .section-title {
    display: flex;
    align-items: center;
    width: 421px;
    height: 35px;
    margin-bottom: 25px;

    .title-bar {
      background-color: #17a0fc;
      width: 9px;
      height: 35px;
      border-radius: 2px;
    }

    .title-text {
      background: linear-gradient(180deg, #ffffff 0%, #ffffff 0%, #acdbff 98.535156%, #acdbff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      width: 92px;
      height: 22px;
      color: #000000;
      font-size: 22px;
      white-space: nowrap;
      line-height: 25px;
      margin-left: 11px;
    }
  }

  .stats-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;

    .stat-card {
      position: relative;
      flex: 1;
      height: 146px;
      border-radius: 8px;
      border: 1px solid #07548c;
      background: linear-gradient(180deg, rgba(7, 84, 140, 0.47) 0%, rgba(4, 56, 113, 0.2) 100%);
      box-shadow: 0px -12px 39px 3px rgba(5, 158, 222, 0.22);

      .stat-label {
        position: absolute;
        top: 18px;
        left: 50%;
        transform: translateX(-50%);
        color: #ffffff;
        font-size: 22px;
        font-weight: 500;
        font-family: 'SourceHanSansCN-Medium', sans-serif;
        white-space: nowrap;
      }

      .stat-value {
        position: absolute;
        top: 55px;
        left: 50%;
        transform: translateX(-50%);
        color: #00ff12;
        font-size: 48px;
        font-weight: 700;
        white-space: nowrap;
      }
    }

    .skill-level-card {
      .stat-value {
        color: #fead00;
      }
    }
  }
}
</style>
