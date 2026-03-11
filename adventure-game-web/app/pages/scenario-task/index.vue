<template>
  <div class="scenario-task-page">
    <div class="page-background" :style="{ backgroundImage: `url(${bgPageBackground})` }" />
    <div class="page scenario-task-container">
      <TopHeader />
      <div class="main-container">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <img
        class="bottom-bar"
        :src="bgBottomBar"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopHeader from './components/TopHeader.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import MainContent from './components/MainContent.vue'
import RightSidebar from './components/RightSidebar.vue'
import bgBottomBar from './assets/img/bg_bottom_bar.png'
import bgPageBackground from './assets/img/bg_page_background.png'
</script>

<style scoped lang="scss">
.scenario-task-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  /* 这里的路径请根据你实际存放 边框@3x.png 的位置微调 */
  border: 40px solid transparent; /* 边框宽度根据设计稿调整 */
  border-image-source: url('./assets/img/frame.png'); 
  border-image-slice: 120; /* 这个数值通常是图片原尺寸边角的像素值，需根据图片微调 */
  border-image-repeat: stretch;
  
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #001529; /* 兜底背景色 */
}

/* 确保内部容器能够填满 */
.main-container {
  flex: 1;
  display: flex;
  overflow: hidden;
}
.scenario-task-page {
  position: relative;
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  overflow: hidden;
}

.page-background {
  position: absolute;
  inset: 0;
  background: center center no-repeat;
  background-size: cover;
  z-index: 0;
}

.page-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-area {
  flex: 1;
  display: flex;
  gap: 0;
  padding: 6px 39px 0;
  min-height: 0;
}

.bottom-bar {
  width: 44%;
  height: 45px;
  object-fit: contain;
  align-self: center;
  margin-top: -20px;
  flex-shrink: 0;
}
</style>
