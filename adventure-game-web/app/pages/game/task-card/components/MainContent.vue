<template>
  <main class="main-content-area">
    <!-- 顶部导航箭头 -->
    <div class="nav-arrows">
      <button class="nav-arrow left" @click="$emit('prev')">
        <img src="/images/task-card/img_15.png" alt="上一个" />
      </button>
      <button class="nav-arrow right" @click="$emit('next')">
        <img src="/images/task-card/img_16.png" alt="下一个" />
      </button>
    </div>
    
    <!-- 任务内容区域 -->
    <div class="task-container">
      <div class="task-content">
        <img class="task-bg-1" src="/images/task-card/img_17.png" alt="" />
        <img class="task-bg-2" src="/images/task-card/img_18.png" alt="" />
      </div>
    </div>
    
    <!-- 剧情节点 -->
    <div class="story-nodes">
      <button class="story-node" @click="$emit('select-story', 0)">
        <img src="/images/task-card/img_20.png" alt="" />
        <span>剧情1</span>
      </button>
      <button class="story-node active" @click="$emit('select-story', 1)">
        <div class="node-circle">
          <div class="circle-inner">
            <div class="circle-icon"></div>
          </div>
        </div>
        <span>剧情2</span>
      </button>
      <button class="story-node" @click="$emit('select-story', 2)">
        <img src="/images/task-card/img_21.png" alt="" />
        <span>剧情3</span>
      </button>
      <button class="story-node" @click="$emit('select-story', 3)">
        <div class="node-circle">
          <div class="circle-inner">
            <div class="circle-icon"></div>
          </div>
        </div>
        <span>剧情4</span>
      </button>
    </div>
    
    <!-- 任务卡片 -->
    <div class="task-card">
      <img src="/images/task-card/img_25.png" alt="" class="task-card-bg" />
      <div class="task-card-content">
        <h2 class="task-title">任务一: 订舱与运输</h2>
        <button class="enter-task-btn" @click="$emit('enter-task')">
          <img src="/images/task-card/img_26.png" alt="进入任务" />
        </button>
      </div>
    </div>
    
    <!-- 场景标题 -->
    <div class="scene-title">
      <img src="/images/task-card/img_51.png" alt="" class="scene-title-bg" />
      <span class="scene-title-text">第一幕: 接收到新订单</span>
    </div>
  </main>
</template>

<script setup lang="ts">
defineEmits<{
  prev: []
  next: []
  'select-story': [index: number]
  'enter-task': []
}>()
</script>

<style scoped>
.main-content-area {
  flex: 1;
  position: relative;
  min-width: 0;
  height: 819px;
  margin-top: 20px;
  background: url('/images/task-card/img_42.png') -14px -20px no-repeat;
  background-size: 929px 865px;
}

/* 导航箭头 */
.nav-arrows {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 0;
  z-index: 10;
}

.nav-arrow {
  width: 37px;
  height: 37px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.2s;
}

.nav-arrow:hover {
  opacity: 0.8;
}

.nav-arrow img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.nav-arrow.right img {
  transform: rotate(180deg);
}

/* 任务内容区域 */
.task-container {
  margin: 27px 0 0 26px;
  width: 847px;
  height: 554px;
  background: url('/images/task-card/img_43.png') center no-repeat;
  background-size: 100% 100%;
}

.task-content {
  position: relative;
  width: 845px;
  height: 553px;
  background: url('/images/task-card/img_44.png') center no-repeat;
  background-size: 100% 100%;
}

.task-bg-1 {
  position: absolute;
  top: 35px;
  left: 13px;
  width: 811px;
  height: 492px;
  object-fit: contain;
}

.task-bg-2 {
  position: absolute;
  top: 34px;
  left: 11px;
  width: 815px;
  height: 495px;
  object-fit: contain;
}

/* 剧情节点 */
.story-nodes {
  display: flex;
  align-items: flex-end;
  gap: 40px;
  margin: 55px 0 0 180px;
  padding: 0 80px;
}

.story-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.story-node:hover {
  transform: translateY(-2px);
}

.story-node img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.story-node span {
  font-size: 18px;
  color: #ffffff;
  font-family: 'Adobe Heiti Std R', sans-serif;
}

.story-node.active .node-circle {
  box-shadow: 0 0 15px rgba(0, 210, 255, 0.8);
}

.node-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(4, 67, 124, 0.48);
  border: 1.5px solid rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-inner {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(43, 159, 252, 1) 0%, rgba(43, 159, 252, 0.2) 63.18%, rgba(1, 47, 87, 1) 84.84%);
  border: 1.5px solid rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-icon {
  width: 28px;
  height: 28px;
  background: url('/images/task-card/img_45.png') center no-repeat;
  background-size: 43px 43px;
}

/* 任务卡片 */
.task-card {
  position: absolute;
  top: 60px;
  left: 10px;
  width: 858px;
  height: 574px;
  background: url('/images/task-card/img_49.png') center no-repeat;
  background-size: 100% 100%;
}

.task-card-bg {
  position: absolute;
  top: 38px;
  left: 30px;
  width: 811px;
  height: 492px;
  object-fit: contain;
}

.task-card-content {
  position: absolute;
  top: 37px;
  left: 28px;
  width: 815px;
  height: 495px;
  background: url('/images/task-card/img_50.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.task-title {
  font-size: 33px;
  font-weight: bold;
  background: linear-gradient(180deg, #ffffff 0%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
}

.enter-task-btn {
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.enter-task-btn:hover {
  transform: scale(1.05);
}

.enter-task-btn:active {
  transform: scale(0.98);
}

.enter-task-btn img {
  width: 158px;
  height: 46px;
  object-fit: contain;
}

/* 场景标题 */
.scene-title {
  position: absolute;
  top: 2px;
  left: 3px;
  width: 879px;
  height: 35px;
}

.scene-title-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scene-title-text {
  position: relative;
  z-index: 1;
  display: block;
  text-align: center;
  line-height: 35px;
  font-size: 22px;
  background: linear-gradient(180deg, #ffffff 0%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
