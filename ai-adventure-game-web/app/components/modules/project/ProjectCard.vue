<template>
  <div class="project-card">
    <div class="card-cover">
      <div 
        class="cover-image" 
        :style="{ backgroundImage: `url(${props.cover})` }"
      ></div>
      <div class="cover-border"></div>
    </div>

    <div class="card-main">
      <div class="main-header">
        <div class="title-section">
          <h3 class="title">{{ props.title }}</h3>
          <div class="star-rating">
            <img
              v-for="i in 5"
              :key="i"
              :src="i <= filledStars ? iconStarFull : iconStarEmpty"
              class="star-icon"
              alt="star"
            />
          </div>
        </div>
        <div class="tag-group">
          <span v-for="tag in props.tags" :key="tag" class="type-tag">{{ tag }}</span>
        </div>
      </div>

      <div class="description-section">
        <p>{{ props.description }}</p>
      </div>

      <div class="main-footer">
        <div class="meta-group">
          <div class="meta-item">
            <img class="meta-icon" :src="iconClock" alt="" />
            <span>{{ props.duration }}{{ $t('home_page.minutes') }}</span>
          </div>
          <div class="meta-item">
            <img class="meta-icon" :src="iconStarEmpty" alt="" />
            <span>{{ props.score }}{{ $t('home_page.score') }}</span>
          </div>
          <div class="meta-item">
            <img class="meta-icon" :src="iconPeople" alt="" />
            <span>{{ props.enrollCount || '1.2k' }}{{ $t('project.enroll_count') }}</span>
          </div>
          <div class="meta-item date-item">
            <img class="meta-icon" :src="iconCalendar" alt="" />
            <span>{{ props.startTime }} ~ {{ props.endTime }}</span>
          </div>
        </div>

        <button class="start-btn" @click="handleStart">
          {{ $t('home_page.start') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import iconClock from '@/assets/img/icon_clock.png'
import iconStarFull from '@/assets/img/icon_star_full.png'
import iconStarEmpty from '@/assets/img/icon_star_empty.png'
import iconCalendar from '@/assets/img/icon_calendar.png'
import iconPeople from '@/assets/img/icon_people.png' 

interface Props {
  id: number | string
  title: string
  description: string
  duration: string
  score: string
  cover: string
  enrollCount?: string
  tags?: string[]
  startTime?: string
  endTime?: string
}

const props = withDefaults(defineProps<Props>(), {
  tags: () => [],
  startTime: '',
  endTime: '',
  enrollCount: '1.2k'
})

const emit = defineEmits(['start'])

const filledStars = computed(() => {
  const n = parseFloat(props.score)
  return isNaN(n) ? 0 : Math.round(n)
})

const router = useRouter()
const localePath = useLocalePath()

// 修改点击逻辑：带 ID 跳转到剧情列表页
const handleStart = () => {
  emit('start') // 依然保留 emit 方便父组件监听
  const targetPath = localePath({
    path: '/project/scenario',
    query: { projectId: props.id }
  })
  
  router.push(targetPath)
}
</script>

<style scoped lang="scss">
.project-card {
  display: flex;
  position: relative;
  width: 100%;
  /* 注入背景图装饰 */
  background: url('./assets/bg_project_card.png') no-repeat;
  background-size: 100% 100%;
  padding: 40px 48px;
  box-sizing: border-box;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:hover {
    filter: drop-shadow(0 0 12px rgba(23, 160, 252, 0.4));
    // 稍微放大一点点击感
    transform: translateY(-2px);
  }
}

/* --- 左侧封面 --- */
.card-cover {
  position: relative;
  width: 316px;
  height: 184px;
  flex-shrink: 0;
  margin-right: 32px;
  border-radius: 4px;
  overflow: hidden;

  .cover-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
  }

  // 封面图上的装饰框
  .cover-border {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(23, 160, 252, 0.4);
    box-shadow: inset 0 0 15px rgba(23, 160, 252, 0.2);
    pointer-events: none;
  }
}

.project-card:hover .cover-image {
  transform: scale(1.05);
}

/* --- 右侧主内容 --- */
.card-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0; 
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center; // 标题行对齐

  .title-section {
    display: flex;
    align-items: center;
    gap: 16px;

    .title {
      margin: 0;
      color: #ffffff;
      font-size: 28px;
      font-weight: 500;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .star-rating {
      display: flex;
      gap: 4px;
      .star-icon {
        width: 14px;
        height: 14px;
        object-fit: contain;
      }
    }
  }

  .tag-group {
    display: flex;
    gap: 10px;
    .type-tag {
      padding: 3px 15px;
      background: rgba(133, 176, 255, 0.1);
      border: 1px solid rgba(133, 176, 255, 0.3);
      border-radius: 12px;
      font-size: 14px;
      color: #b0c9f0;
    }
  }
}

.description-section {
  p {
    margin: 15px 0;
    color: #cbdcf0;
    font-size: 18px;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: justify;
  }
}

.main-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .meta-group {
    display: flex;
    align-items: center;
    gap: 35px;

    .meta-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #ffffff;
      font-size: 18px;

      .meta-icon {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }

      &.date-item {
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
      }
    }
  }

  .start-btn {
    width: 90px;
    height: 36px;
    background: linear-gradient(180deg, #28487a 0%, #163254 100%);
    border: 1px solid #17a0fc;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(23, 160, 252, 0.3);
    transition: all 0.2s;

    &:hover {
      filter: brightness(1.2);
      box-shadow: 0 0 15px rgba(23, 160, 252, 0.6);
      transform: scale(1.05);
    }
  }
}
</style>