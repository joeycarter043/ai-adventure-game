<template>
  <header class="top-header">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb">
      <span class="breadcrumb-item muted">项目选择&nbsp;/&nbsp;剧本选择&nbsp;/</span>
      <span class="breadcrumb-item active">海运提单之谜</span>
    </nav>
    
    <!-- 顶部工具按钮 -->
    <div class="top-buttons">
      <button class="top-btn" title="继续" @click="handleContinue">
        <img src="/images/task-card/img_2.png" alt="继续" />
      </button>
      <button class="top-btn" title="退出" @click="handleExit">
        <img src="/images/task-card/img_3.png" alt="退出" />
      </button>
      <button class="top-btn" title="帮助" @click="handleHelp">
        <img src="/images/task-card/img_4.png" alt="帮助" />
      </button>
    </div>
    
    <!-- Logo区域 -->
    <img class="logo" src="/images/task-card/img_1.png" alt="Logo" />
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  continue: []
  exit: []
  help: []
}>()

const handleContinue = () => emit('continue')
const handleExit = () => emit('exit')
const handleHelp = () => emit('help')
</script>

<style scoped>
.top-header {
  position: absolute;
  top: 10px;
  left: 17px;
  right: 17px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;
  z-index: 100;
}

.breadcrumb {
  display: flex;
  align-items: center;
  font-family: 'SourceHanSansCN-Regular', 'Microsoft YaHei', sans-serif;
}

.breadcrumb-item {
  font-size: 16px;
  white-space: nowrap;
}

.breadcrumb-item.muted {
  color: rgba(153, 153, 153, 1);
}

.breadcrumb-item.active {
  color: rgba(255, 255, 255, 1);
}

.top-buttons {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-left: auto;
  margin-right: 20px;
}

.top-btn {
  width: 85px;
  height: 38px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}

.top-btn:hover {
  opacity: 0.85;
  transform: scale(1.02);
}

.top-btn:active {
  opacity: 0.7;
  transform: scale(0.98);
}

.top-btn img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 1900px;
  height: 96px;
  object-fit: contain;
  opacity: 0.3;
  pointer-events: none;
}
</style>
