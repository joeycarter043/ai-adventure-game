<template>
  <aside class="left-sidebar">
    <!-- 重要提示区域 -->
    <div class="notice-section">
      <div class="notice-header">
        <img src="/images/task-card/img_39.png" alt="" class="notice-bg" />
        <span class="notice-title">重要提示</span>
      </div>
    </div>
    
    <!-- 我的角色 -->
    <div class="role-section">
      <h3 class="section-title">我的角色</h3>
      
      <!-- 角色列表 -->
      <div class="role-list">
        <RoleCard
          v-for="role in roles"
          :key="role.id"
          :role="role"
          :selected="selectedRoleId === role.id"
          @select="selectedRoleId = role.id"
        />
      </div>
    </div>
    
    <!-- 剧本进度 -->
    <div class="progress-section">
      <h3 class="section-title">剧本进度</h3>
      <div class="progress-bar">
        <div class="progress-header">
          <span class="progress-text">已完成{{ completedTasks }}个任务</span>
          <span class="progress-percent">{{ progressPercent }}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: `${progressPercent}%` }"></div>
        </div>
      </div>
    </div>
    
    <!-- 剩余时间 -->
    <div class="time-section">
      <h3 class="section-title">剩余时间</h3>
      <div class="time-display">
        <img src="/images/task-card/img_11.png" alt="时间显示" class="time-image" />
      </div>
    </div>
    
    <!-- 底部工具栏 -->
    <div class="bottom-toolbar">
      <button class="tool-btn" @click="$emit('ai-assistant')">
        <img src="/images/task-card/img_12.png" alt="" />
        <span>AI小智助手</span>
      </button>
      <button class="tool-btn" @click="$emit('team-chat')">
        <img src="/images/task-card/img_13.png" alt="" />
        <span>队内沟通</span>
      </button>
      <button class="tool-btn" @click="$emit('use-props')">
        <img src="/images/task-card/img_14.png" alt="" />
        <span>使用道具</span>
      </button>
    </div>
    
    <!-- 已用时间 -->
    <div class="used-time">
      <span class="time-label">已用时{{ usedMinutes }}分</span>
      <span class="time-remaining">{{ remainingMinutes }}分</span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Role } from '~/types/game'
import RoleCard from './RoleCard.vue'

defineEmits<{
  'ai-assistant': []
  'team-chat': []
  'use-props': []
}>()

// 角色数据
const roles: Role[] = [
  { id: 'manager', name: '货代经理', description: '负责整体协调和决策', icon: 'img_5.png', selectedIcon: 'img_6.png' },
  { id: 'operator', name: '操作员', description: '处理具体操作流程', icon: 'img_7.png', selectedIcon: 'img_8.png' },
  { id: 'service', name: '客服', description: '处理具体操作流程', icon: 'img_9.png', selectedIcon: 'img_10.png' },
]

const selectedRoleId = ref('manager')
const completedTasks = ref(1)
const progressPercent = ref(75)
const usedMinutes = ref(51)
const remainingMinutes = ref(29)

</script>

<style scoped>
.left-sidebar {
  width: 479px;
  height: 865px;
  background: url('/images/task-card/img_38.png') center top no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  padding: 22px 15px;
  flex-shrink: 0;
}

/* 重要提示 */
.notice-section {
  margin-bottom: 10px;
}

.notice-header {
  position: relative;
  height: 35px;
  width: 422px;
}

.notice-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.notice-title {
  position: relative;
  z-index: 1;
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(180deg, #ffffff 0%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 8px 0 0 25px;
}

/* 区块标题 */
.section-title {
  font-size: 21px;
  font-weight: bold;
  background: linear-gradient(180deg, #ffffff 0%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 29px 0 20px 34px;
}

/* 角色区域 */
.role-section {
  margin-top: 10px;
}

.role-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 35px;
}

/* 进度区域 */
.progress-section {
  margin-top: 10px;
}

.progress-bar {
  margin-left: 37px;
  width: 368px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.progress-text,
.progress-percent {
  font-size: 12px;
  color: #96e0ff;
}

.progress-track {
  height: 20px;
  background: url('/images/task-card/img_40.png') center no-repeat;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}

.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, rgba(23, 160, 252, 0.6) 0%, rgba(23, 160, 252, 1) 100%);
  transition: width 0.3s ease;
}

/* 时间区域 */
.time-section {
  margin-top: 21px;
}

.time-display {
  margin-left: 79px;
}

.time-image {
  width: 325px;
  height: 39px;
  object-fit: contain;
}

/* 底部工具栏 */
.bottom-toolbar {
  display: flex;
  gap: 7px;
  margin-top: auto;
  padding: 0 10px 20px;
}

.tool-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 10px;
  height: 41px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(40, 72, 122, 1) 0%, rgba(22, 50, 84, 1) 100%);
  cursor: pointer;
  transition: all 0.2s;
  color: #fff;
  font-size: 14px;
}

.tool-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.tool-btn:active {
  transform: translateY(0);
}

.tool-btn img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.tool-btn:first-child {
  width: 135px;
}

.tool-btn:nth-child(2) {
  width: 123px;
}

.tool-btn:last-child {
  width: 115px;
}

/* 已用时间 */
.used-time {
  position: absolute;
  bottom: 100px;
  left: 37px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.time-label,
.time-remaining {
  font-size: 12px;
  color: #96e0ff;
}
</style>
