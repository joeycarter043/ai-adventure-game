<template>
  <div class="task-card-page" ref="pageRef">
    <!-- 背景层 -->
    <div class="page-background"></div>
    
    <!-- 顶部导航区 -->
    <TopHeader />
    
    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 左侧面板 -->
      <LeftSidebar />
      
      <!-- 中间主内容区 -->
      <MainContent />
      
      <!-- 右侧面板 -->
      <RightSidebar />
    </div>
    
    <!-- 底部装饰线 -->
    <img class="bottom-decoration" src="/images/task-card/img_28.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import TopHeader from './components/TopHeader.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import MainContent from './components/MainContent.vue'
import RightSidebar from './components/RightSidebar.vue'

const { width } = useWindowSize()

// 计算缩放比例
const pageRef = ref<HTMLElement | null>(null)
const baseWidth = 1920
const minScaleWidth = 1440

// 监听窗口宽度变化，动态调整缩放
watchEffect(() => {
  if (pageRef.value) {
    if (width.value >= minScaleWidth) {
      // 1440px 以上按比例缩放
      const scale = Math.min(width.value / baseWidth, 1)
      pageRef.value.style.transform = `scale(${scale})`
      pageRef.value.style.width = `${baseWidth}px`
    } else {
      // 1440px 以下允许滚动
      pageRef.value.style.transform = 'scale(1)'
      pageRef.value.style.width = `${baseWidth}px`
    }
  }
})

</script>

<style scoped>
.task-card-page {
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  margin: 0 auto;
  transform-origin: top center;
  background: #132239;
}

.page-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  background: 
    url('/images/task-card/img_34.png') 0px -9px no-repeat,
    url('/images/task-card/img_35.png') 17px 10px no-repeat,
    url('/images/task-card/img_36.png') 0px 0px no-repeat;
  background-size: 
    1921px 1107px,
    1887px 1069px,
    2147px 1232px;
  z-index: 0;
}

.main-content {
  position: relative;
  z-index: 1;
  display: flex;
  padding: 132px 20px 0 39px;
  gap: 20px;
  height: calc(1080px - 132px);
}

.bottom-decoration {
  position: absolute;
  left: 525px;
  top: 974px;
  width: 842px;
  height: 45px;
  z-index: 2;
}
</style>
