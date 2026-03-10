<template>
  <div class="main-content">
    <div class="story-section">
      <!-- Corner decorations -->
      <img class="corner corner--tl" :src="cornerTL" alt="" />
      <img class="corner corner--tr" :src="cornerTR" alt="" />

      <!-- Scene Image Area -->
      <div class="scene-area">
        <div class="scene-frame">
          <img class="scene-image" :src="imgTaskScene" :alt="$t('scenario_task.stories.task_1')" />
          <div class="scene-overlay">
            <img class="scene-overlay-img" :src="bgStoryOverlay" alt="" />
          </div>
        </div>
      </div>

      <!-- Story Timeline -->
      <div class="story-timeline">
        <img class="timeline-arrow timeline-arrow--left" :src="arrowLeft" alt="" />

        <div class="timeline-node">
          <img class="node-icon" :src="storyNode1" alt="" />
          <span class="node-label">{{ $t('scenario_task.stories.nodes.story_1') }}</span>
        </div>

        <div class="timeline-node timeline-node--current">
          <div class="node-circle">
            <div class="node-circle-inner">
              <div class="node-circle-icon" />
            </div>
          </div>
          <span class="node-label">{{ $t('scenario_task.stories.nodes.story_2') }}</span>
        </div>

        <div class="timeline-node">
          <img class="node-icon" :src="storyNode3" alt="" />
          <span class="node-label">{{ $t('scenario_task.stories.nodes.story_3') }}</span>
        </div>

        <div class="timeline-node">
          <div class="node-circle-locked">
            <div class="node-circle-locked-inner">
              <div class="node-circle-locked-icon" />
            </div>
          </div>
          <span class="node-label">{{ $t('scenario_task.stories.nodes.story_4') }}</span>
        </div>

        <img class="timeline-arrow timeline-arrow--right" :src="arrowRight" alt="" />
      </div>

      <!-- Corner bottom decorations -->
      <img class="corner corner--bl" :src="cornerBL" alt="" />

      <!-- Task Info Overlay -->
      <div class="task-info-overlay">
        <img class="task-info-bg" :src="bgStoryOverlay" alt="" />
        <div class="task-info-content">
          <h2 class="task-title">{{ $t('scenario_task.stories.task_1') }}</h2>
          <button class="btn-enter-task">
            <span>{{ $t('scenario_task.stories.enter_task') }}</span>
          </button>
        </div>
      </div>

      <!-- Current Act Title Bar -->
      <div class="act-title-bar">
        <span class="act-title-text">{{ $t('scenario_task.stories.current') }}</span>
      </div>

      <img class="corner corner--br" :src="cornerBR" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import cornerTL from '../assets/img/icon_corner_top_left.png'
import cornerTR from '../assets/img/icon_corner_top_right.png'
import cornerBL from '../assets/img/icon_corner_bottom_left.png'
import cornerBR from '../assets/img/icon_corner_bottom_right.png'
import imgTaskScene from '../assets/img/img_task_scene_alt.png'
import bgStoryOverlay from '../assets/img/bg_story_overlay.png'
import arrowLeft from '../assets/img/icon_story_arrow_left.png'
import arrowRight from '../assets/img/icon_story_arrow_right.png'
import storyNode1 from '../assets/img/icon_story_node_1.png'
import storyNode3 from '../assets/img/icon_story_node_3.png'
</script>

<style scoped lang="scss">
.main-content {
  flex: 1;
  min-width: 0;
  height: 100%;
  margin-left: -10px;
  display: flex;
  flex-direction: column;
}

.story-section {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/img/bg_story_section.png') -14px -20px no-repeat;
  background-size: 105% 106%;
  display: flex;
  flex-direction: column;
}

// Corner decorations
.corner {
  position: absolute;
  width: 37px;
  height: 37px;
  z-index: 5;

  &--tl { top: 0; left: 0; }
  &--tr { top: 0; right: 0; width: 38px; height: 36px; }
  &--bl { bottom: 47px; left: 0; width: 37px; height: 36px; }
  &--br { bottom: 47px; right: 0; width: 37px; height: 36px; }
}

// Scene Area
.scene-area {
  position: relative;
  margin: 60px 26px 0;
  flex: 1;
  min-height: 0;
}

.scene-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/img/bg_story_content.png') 100% no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.scene-image {
  position: absolute;
  top: 35px;
  left: 13px;
  width: calc(100% - 26px);
  height: calc(100% - 70px);
  object-fit: cover;
}

.scene-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .scene-overlay-img {
    width: calc(100% - 26px);
    height: calc(100% - 70px);
    margin-top: 35px;
    object-fit: cover;
  }
}

// Task Info Overlay
.task-info-overlay {
  position: absolute;
  left: 28px;
  top: 97px;
  width: calc(100% - 56px);
  height: calc(100% - 200px);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.task-info-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
}

.task-info-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.task-title {
  background-image: linear-gradient(180deg, #fff 0%, #fff 0%, #acdbff 98.5%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 33px;
  font-family: 'ADZYJT--GB1-0', 'Source Han Sans CN', sans-serif;
  font-weight: bold;
  line-height: 41px;
  white-space: nowrap;
}

.btn-enter-task {
  width: 158px;
  height: 46px;
  background: linear-gradient(180deg, rgba(30, 90, 170, 1) 0%, rgba(15, 50, 100, 1) 100%);
  border: 1px solid rgba(50, 130, 220, 0.6);
  border-radius: 24px;
  color: #fff;
  font-size: 18px;
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.85;
  }
}

// Story Timeline
.story-timeline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 20px 26px 0;
  flex-shrink: 0;
  height: 103px;
}

.timeline-arrow {
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: opacity 0.2s;
  flex-shrink: 0;

  &:hover {
    opacity: 0.7;
  }

  &--left {
    margin-right: 20px;
    margin-top: 20px;
  }

  &--right {
    margin-left: 20px;
    margin-top: 20px;
  }
}

.timeline-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  margin: 0 35px;
}

.node-icon {
  width: 60px;
  height: 60px;
}

.node-label {
  color: #fff;
  font-size: 18px;
  font-family: 'Adobe Heiti Std', 'Source Han Sans CN', sans-serif;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
}

// Current story node (blue glowing circle)
.node-circle {
  width: 63px;
  height: 63px;
  background-color: rgba(4, 67, 124, 0.48);
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.node-circle-inner {
  width: 53px;
  height: 53px;
  background: linear-gradient(180deg, rgba(43, 159, 252, 1) 0%, rgba(43, 159, 252, 0.2) 63%, rgba(1, 47, 87, 1) 85%);
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.node-circle-icon {
  width: 28px;
  height: 28px;
  background: url('../assets/img/icon_story_node_2_inner.png') center center no-repeat;
  background-size: contain;
}

// Locked story node
.node-circle-locked {
  width: 60px;
  height: 60px;
  background: url('../assets/img/icon_story_node_4_outer.png') center center no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
}

.node-circle-locked-inner {
  width: 53px;
  height: 53px;
  background: linear-gradient(180deg, rgba(43, 159, 252, 1) 0%, rgba(43, 159, 252, 0.2) 63%, rgba(1, 47, 87, 1) 85%);
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.node-circle-locked-icon {
  width: 28px;
  height: 28px;
  background: url('../assets/img/icon_story_node_4_inner.png') center center no-repeat;
  background-size: contain;
}

// Act Title Bar
.act-title-bar {
  height: 35px;
  background: url('../assets/img/icon_story_decoration.png') 100% no-repeat;
  background-size: 100% 100%;
  width: calc(100% - 6px);
  margin: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 5;
}

.act-title-text {
  background-image: linear-gradient(180deg, #fff 0%, #fff 0%, #acdbff 98.5%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 22px;
  font-family: 'ADZYJT--GB1-0', 'Source Han Sans CN', sans-serif;
  font-weight: bold;
  line-height: 25px;
  white-space: nowrap;
}
</style>
