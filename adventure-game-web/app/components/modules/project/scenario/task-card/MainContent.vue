<template>
  <div class="main-content">
    <ScenarioSectionLayout>
      <div class="scene-box-container">
        <div class="scene-main-frame">
          <img class="scene-image-layer" :src="imgTaskScene" />
          
          <div class="task-overlay-layer" :style="{ backgroundImage: `url(${bgStoryOverlay})` }">
            <div class="task-info-inner">
              <h2 class="task-title-text">
                任务{{ activeNodeIndex + 1 }}：订舱与运输
              </h2>
              <div class="enter-btn-wrapper">
                <button class="enter-task-btn" @click="handleEnterTask">
                  <span>{{ $t('scenario_task.stories.enter_task') }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-wrapper">
        <ScenarioTimeline
          v-model:active-index="activeNodeIndex"
          @change="handleTimelineChange"
        />
      </div>
    </ScenarioSectionLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ScenarioSectionLayout from '../SectionLayout.vue'
import ScenarioTimeline from '../Timeline.vue'

// 引入本页面特有资源
import imgTaskScene from './assets/img_task_scene_alt.png'
import bgStoryOverlay from './assets/bg_story_overlay.png'

// 路由与国际化工具
const localePath = useLocalePath()
const router = useRouter()

// 状态管理
const activeNodeIndex = ref(1) // 默认对应剧情2

/**
 * 跳转至任务详情页
 */
const handleEnterTask = () => {
  console.log('准备进入任务详情页...')
  router.push(localePath('/project/scenario/task-card/detail'))
}

/**
 * 时间轴切换回调
 */
const handleTimelineChange = (index: number) => {
  console.log('当前剧情节点切换至:', index + 1)
  // 此处可扩展：根据 index 加载不同的任务数据或背景图
}
</script>

<style scoped lang="scss">
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100%;
}

/* 场景内容容器 */
.scene-box-container {
  flex: 1;
  min-height: 0;
  padding: 15px 10px 0;
  
  .scene-main-frame {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

/* 场景图片层 */
.scene-image-layer {
  position: absolute;
  top: 38px;
  left: 30px;
  width: calc(100% - 60px);
  height: calc(100% - 76px);
  object-fit: cover;
}

/* 任务信息浮层 */
.task-overlay-layer {
  position: absolute;
  inset: 37px 28px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.task-info-inner {
  text-align: center;
  
  .task-title-text {
    background-image: linear-gradient(180deg, #fff 0%, #acdbff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 50px;
  }
}

/* 进入按钮样式 */
.enter-btn-wrapper {
  display: flex;
  justify-content: center;
  
  .enter-task-btn {
    background: rgba(30, 90, 170, 1);
    border: 1px solid rgba(50, 130, 220, 0.6);
    border-radius: 24px;
    color: #fff;
    padding: 8px 24px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
      background: rgba(50, 130, 220, 0.8);
    }
  }
}

/* 时间轴包装，微调负边距使视觉更贴合底边 */
.timeline-wrapper {
  margin-top: auto;
  z-index: 15;
}
</style>