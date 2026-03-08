<template>
  <aside class="right-sidebar">
    <!-- 已获得线索 -->
    <div class="clues-section">
      <div class="section-header">
        <div class="header-bar"></div>
        <div class="header-bg">
          <span class="section-title">已获得线索</span>
        </div>
      </div>
      
      <!-- 线索列表 -->
      <div class="clue-list">
        <ClueItem
          v-for="(clue, index) in clues"
          :key="index"
          :clue="clue"
          :icon="clueIcons[index]"
          @click="$emit('select-clue', index)"
        />
      </div>
    </div>
    
    <!-- 工具箱 -->
    <div class="toolbox-section">
      <div class="section-header">
        <div class="header-bar"></div>
        <div class="header-bg">
          <span class="section-title">工具箱</span>
        </div>
      </div>
      
      <!-- 工具列表 -->
      <div class="tool-list">
        <button
          v-for="(tool, index) in tools"
          :key="index"
          class="tool-item"
          :class="{ active: index === 0 }"
          @click="$emit('use-tool', index)"
        >
          <img :src="`/images/task-card/${tool.icon}`" :alt="tool.name" />
          <span>{{ tool.name }}</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import ClueItem from './ClueItem.vue'

interface Clue {
  content: string
}

interface Tool {
  name: string
  icon: string
}

defineEmits<{
  'select-clue': [index: number]
  'use-tool': [index: number]
}>()

// 线索数据
const clues: Clue[] = [
  { content: '海运提单是货物所有权的重要凭证，必须仔细核对所有信息。' },
  { content: '电子元器件属于敏感货物，需要特别注意包装和运输要求。' },
  { content: '从上海到洛杉矶的海运时间大约为12-14天，需要合理安排时间。' },
  { content: '从上海到洛杉矶的海运时间大约为12-14天，需要合理安排时间。' },
]

// 线索图标
const clueIcons = ['img_29.png', 'img_53.png', 'img_55.png', 'img_57.png']

// 工具数据
const tools: Tool[] = [
  { name: '提单模板', icon: 'img_30.png' },
  { name: '术语词典', icon: 'img_31.png' },
  { name: '归类手册', icon: 'img_32.png' },
  { name: '航线地图', icon: 'img_33.png' },
]

</script>

<style scoped>
.right-sidebar {
  position: absolute;
  right: 0;
  top: 176px;
  width: 492px;
  height: 865px;
  background: url('/images/task-card/img_52.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  padding: 22px 38px;
  flex-shrink: 0;
}

/* 区块头部 */
.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 28px;
}

.header-bar {
  width: 9px;
  height: 35px;
  background: rgba(23, 160, 252, 1);
}

.header-bg {
  flex: 1;
  height: 35px;
  background: rgba(23, 160, 252, 0.66);
  display: flex;
  align-items: center;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(180deg, #ffffff 0%, #acdbff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 13px;
}

/* 线索区域 */
.clues-section {
  margin-bottom: 15px;
}

.clue-list {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

/* 工具箱区域 */
.toolbox-section {
  flex: 1;
}

.tool-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tool-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 370px;
  height: 60px;
  padding: 0 23px;
  background: rgba(4, 56, 113, 0.34);
  border: 1px solid rgba(4, 56, 113, 1);
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.tool-item:hover {
  background: rgba(4, 56, 113, 0.5);
  border-color: rgba(0, 210, 255, 0.5);
}

.tool-item.active {
  border-color: rgba(0, 160, 233, 1);
}

.tool-item img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.tool-item span {
  font-size: 18px;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(0, 210, 255, 0.88);
}
</style>
