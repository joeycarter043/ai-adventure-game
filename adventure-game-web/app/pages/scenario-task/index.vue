<template>
  <div class="scenario-task-page">
    <div class="page-background" :style="{ backgroundImage: `url(${bgPageBackground})` }" />
    <div class="page-content">
      <TopHeader />
      <div class="main-area">
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
