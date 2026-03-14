<template>
  <div class="app-layout">
    <div class="global-background" />

    <div class="game-frame-wrapper">
      <TopHeader />

      <main class="layout-main">
        <slot />
      </main>
      
      <div class="side-frame side-frame--left"></div>
      <div class="side-frame side-frame--right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import TopHeader from '@/components/TopHeader.vue'

</script>

<style scoped lang="scss">
.app-layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* 确保布局容器至少 1440px */
  min-width: 1440px; 
  display: flex;
  justify-content: center; /* 大于 1920px 时水平居中 */
  overflow: visible;
}

.global-background {
  position: fixed; /* 改为 fixed 确保无论窗口怎么滚，背景始终铺满 */
  inset: 0;
  background: url('@/assets/img/bg_page_background.png') center center no-repeat;
  background-size: cover;
  z-index: 0;
}

.game-frame-wrapper {
  position: relative;
  z-index: 1;
  /* 核心逻辑：1440px 及其以上 100% 宽度，但最高 1920px */
  width: 100%;
  max-width: 1920px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* 边框图片逻辑 */
  border: 1px solid transparent; 
  border-image-source: url('@/assets/img/frame.png');
  border-image-slice: 120;
  border-image-width: 40px; 
  
  box-sizing: border-box;
  /* 这里的背景色透明，以便透出底层的 global-background */
  background: transparent; 
  overflow: visible;
}

.side-frame {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30px;
  z-index: 5;
  pointer-events: none;
  &--left { 
    left: 0; 
    /* 确保图片靠左对齐 */
    background: url('@/assets/img/left_side_frame.png') left top no-repeat;
    background-size: 100% 100%;
  }
  
  &--right { 
    right: 0; 
    /* 确保图片靠右对齐 */
    background: url('@/assets/img/right_side_frame.png') right top no-repeat;
    background-size: 100% 100%;
  }
}

.layout-main {
  flex: 1;
  display: flex;
  flex-direction: column; /* 纵向排列 SubHeader 和 内容区 */
  position: relative;
  padding: 0 15px 30px; 
  /* 内部三列布局将在具体的 Page 组件中实现 flex-grow */
}

.layout-bottom-decorator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 44%;
  height: auto;
  max-height: 45px;
  z-index: 10;
  pointer-events: none;
}
</style>