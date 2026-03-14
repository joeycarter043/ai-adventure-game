<template>
  <div class="scenario-card">
    <div class="card-title-tag">
      <span>{{ props.title }}</span>
    </div>

    <div class="star-rating-indicator">
      <img
        v-for="i in 5"
        :key="i"
        :src="i <= filledStars ? iconStarFull : iconStarEmpty"
        class="rating-star-icon"
        alt="star"
      />
    </div>

    <div class="card-body">
      <div class="top-divider"></div>

      <div class="meta-row">
        <div class="meta-item">
          <img class="meta-icon" :src="iconClock" alt="" />
          <span>{{ props.duration }}{{ $t('home_page.minutes') }}</span>
        </div>
        <div class="meta-item rating-item">
          <img class="meta-icon" :src="iconStarEmpty" alt="" />
          <span>{{ props.score }}{{ $t('home_page.score') }}</span>
        </div>
        <button class="start-btn">{{ $t('home_page.start') }}</button>
      </div>

      <div class="desc-container">
        <div 
          class="desc-box" 
          :style="{ backgroundImage: `url(${props.cover})` }"
        >
          <div class="text-overlay">
            <p>{{ props.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import iconClock from '@/assets/img/icon_clock.png'
import iconStarFull from '@/assets/img/icon_star_full.png'
import iconStarEmpty from '@/assets/img/icon_star_empty.png'

const props = defineProps<{
  title: string
  description: string
  duration: string
  score: string
  cover: string
}>()

// 根据分值计算星星数量（例如 4.9 -> 5颗实心；3.2 -> 3颗实心）
const filledStars = computed(() => {
  const n = parseFloat(props.score)
  return isNaN(n) ? 0 : Math.round(n)
})
</script>

<style scoped lang="scss">
.scenario-card {
  position: relative;
  width: 100%;
  max-width: 543px;
  height: 345px;
  background: url('@/pages/home/assets/slices/bg_script_card.png') no-repeat;
  background-size: 100% 100%;
}

.card-title-tag {
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  span {
    color: #cbdcf0;
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  }
}

/* 修改后的星级样式 */
.star-rating-indicator {
  position: absolute;
  top: 22px; 
  right: 12px;
  display: flex;
  gap: 2px;
  z-index: 3;

  .rating-star-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
}

.card-body {
  position: absolute;
  top: 44px;      
  left: 7px;
  right: 7px;
  height: 280px;  
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 2;
}

.top-divider {
  width: 90%;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #17a0fc 50%, transparent 100%);
  margin: 0 auto;
}

.meta-row {
  display: flex;
  align-items: center;
  padding: 15px 30px;
  
  .meta-item {
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 12px;
    
    .meta-icon {
      width: 14px;
      height: 14px;
      margin-right: 4px;
    }

    &.rating-item {
      margin-left: 15px;
    }
  }

  .start-btn {
    margin-left: auto;
    width: 56px;
    height: 24px;
    background: linear-gradient(180deg, #28487a 0%, #163254 100%);
    border: 1px solid #17a0fc;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    &:hover { filter: brightness(1.2); }
  }
}

/* ─── 描述文字区域重构 ─── */
.desc-container {
  flex: 1;
  margin: 0 30px;
  overflow: hidden;
  border-radius: 4px;
}

.desc-box {
  width: 100%;
  height: 100%;
  background-size: cover; /* 确保图片覆盖整个区域 */
  background-position: center;
  position: relative;

  .text-overlay {
    position: absolute;
    inset: 0;
    padding: 20px; /* 这就是你要求的边距 */
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
  }

  p {
    color: #ffffff;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

/* 顶部装饰线微调 */
.top-divider {
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #17a0fc 50%, transparent 100%);
  margin: 0 auto;
  opacity: 0.6;
}
</style>