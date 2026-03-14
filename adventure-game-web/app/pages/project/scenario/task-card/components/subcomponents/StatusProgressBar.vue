<template>
  <div class="status-progress-bar" :class="[type === 'timer' ? 'is-timer' : '']">
    <span class="value-highlight">{{ value }}</span>
    <div class="info-slot">
      <span class="info-text">{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// --- 核心：定义组件接收的属性 ---
defineProps<{
  type?: 'default' | 'timer'
  value: string
  label: string
}>()
</script>

<style scoped lang="scss">
.status-progress-bar {
  position: relative;
  height: 40px;
  margin: 0 15px;
  /* 路径必须正确，否则背景图会消失 */
  background: url('../../assets/img/bg_progress_bar.png') no-repeat;
  background-size: 100% 100%;
  flex-shrink: 0;

  /* 
  &.is-timer {
    background-image: url('../../assets/img/bg_timer_bar.png');
  }
  */
}

.value-highlight {
  position: absolute;
  left: -4px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  text-align: center;
  color: #96e0ff;
  font-size: 10px;
  font-family: 'Source Han Sans CN', sans-serif;
  font-weight: bold;
}

.info-slot {
  position: absolute;
  left: 40px;
  top: 25%; 
  transform: translateY(-50%);
  display: flex;
}

.info-text {
  color: #96e0ff;
  font-size: 10px;
  letter-spacing: -1px;
  text-shadow: 0 0 5px rgba(150, 224, 255, 0.5);
}
</style>