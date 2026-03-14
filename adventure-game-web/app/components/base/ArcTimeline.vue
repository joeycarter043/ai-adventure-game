<template>
  <div class="arc-timeline">
    <img 
      class="nav-arrow left" 
      :src="arrowIcon" 
      :class="{ disabled: activeIndex === 0 }"
      @click="handleNav(-1)"
    />

    <div class="nodes-viewport">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="node-wrapper"
        :class="{ 
          'active': activeIndex === index,
          'locked': item.locked 
        }"
        :style="getNodeStyle(index)"
        @click="handleClick(index)"
      >
        <div class="visual-container">
          <div v-if="activeIndex === index" class="glow-ring">
            <div class="inner-ball">
              <img :src="item.activeIcon" class="icon-core" />
            </div>
          </div>
          <img v-else :src="item.locked ? item.lockedIcon : item.normalIcon" class="static-icon" />
        </div>
        <span class="label">{{ item.label }}</span>
      </div>
    </div>

    <img 
      class="nav-arrow right" 
      :src="arrowIcon" 
      :class="{ disabled: activeIndex === items.length - 1 }"
      @click="handleNav(1)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface TimelineItem {
  label: string
  normalIcon: string
  activeIcon: string
  lockedIcon: string
  locked?: boolean
}

const props = defineProps<{
  items: TimelineItem[]
  activeIndex: number
  arrowIcon: string
}>()

const emit = defineEmits(['update:activeIndex', 'change'])

const getNodeStyle = (index: number) => {
  const diff = index - props.activeIndex
  const absDiff = Math.abs(diff)
  
  // 1. 水平间距
  const translateX = diff * 110 
  
  // 2. 弧度计算
  const translateY = Math.pow(absDiff, 2) * 4
  
  // 3. 缩放
  const scale = props.activeIndex === index ? 1.1 : 0.85
  
  // 4. 层级
  const zIndex = 10 - absDiff

  return {
    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
    zIndex,
    // 同时也建议微调非激活节点的透明度，让视觉更聚焦中心
    opacity: absDiff > 2 ? 0 : (1 - absDiff * 0.20) 
  }
}

const handleClick = (index: number) => {
  if (props.items[index].locked) return
  emit('update:activeIndex', index)
  emit('change', index)
}

const handleNav = (direction: number) => {
  const next = props.activeIndex + direction
  if (next >= 0 && next < props.items.length) {
    if (!props.items[next].locked) {
      handleClick(next)
    }
  }
}
</script>

<style scoped lang="scss">
.arc-timeline {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 74px;
  position: relative;
  user-select: none;
}

.nodes-viewport {
  position: relative;
  width: 600px; /* 限制可视区域 */
  height: 100%;
  display: flex;
  justify-content: center;
}

.node-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); /* 弹性过渡 */
  cursor: pointer;

  &.locked { cursor: not-allowed; }
  
  .label {
    color: #fff;
    font-size: 14px;
    font-family: 'SourceHanSansCN-Regular', sans-serif;
    transition: all 0.3s;
  }
  
  &.active .label {
    color: #acdbff;
    font-weight: bold;
    transform: translateY(2px);
  }
}

/* 复刻设计稿中的发光圆环样式 */
.glow-ring {
  width: 40px; height: 40px;
  background-color: rgba(4, 67, 124, 0.48);
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 0.8);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 15px rgba(43, 159, 252, 0.5);

  .inner-ball {
    width: 32px; height: 32px;
    background: linear-gradient(180deg, #2b9ffc 0%, rgba(43, 159, 252, 0.2) 63%, #012f57 85%);
    border-radius: 50%;
    border: 1.5px solid #000;
    display: flex; align-items: center; justify-content: center;
  }
  .icon-core { width: 28px; height: 28px; object-fit: contain; }
}

.static-icon {
  width: 40px; height: 40px;
  filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
}

.nav-arrow {
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 20;
  margin-bottom: -50px;
  transition: all 0.2s;
  
  &:hover:not(.disabled) { filter: brightness(1.5); scale: 1.1; }
  &.disabled { opacity: 0.3; cursor: not-allowed; }
  &.right { transform: rotate(180deg); } /* 如果左右箭头用的是同一张图 */
}
</style>