<template>
  <div class="latest-updates">
    <SectionTitleBar 
      :style="{ '--title-bg-size': 'auto 100%' }"
      :title="t('home_page.latest_updates')">
      <template #right>
        <span class="view-all-link">{{ t('home_page.view_all') }}&nbsp;&nbsp;→</span>
      </template>
    </SectionTitleBar>

    <div class="updates-outer">
      <div
        v-for="(update, index) in updates"
        :key="update.id"
        class="update-card"
        :class="{ 'first-card': index === 0 }"
      >
        <div class="card-header">
          <span class="dot" :style="{ backgroundColor: update.color, color: update.color }"></span>
          <div class="text-block">
            <span class="update-title">{{ update.title }}</span>
            <span class="update-desc">{{ update.description }}</span>
          </div>
        </div>
        <span class="update-time">{{ update.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitleBar from '@/components/base/SectionTitleBar.vue'

const { t } = useI18n()

const updates = [
  {
    id: 1,
    title: t('home_page.updates[0].title'),
    description: t('home_page.updates[0].description'),
    time: t('home_page.updates[0].time'),
    color: '#ba00ff'
  },
  {
    id: 2,
    title: t('home_page.updates[1].title'),
    description: t('home_page.updates[1].description'),
    time: t('home_page.updates[1].time'),
    color: '#00ff0c'
  },
  {
    id: 3,
    title: t('home_page.updates[2].title'),
    description: t('home_page.updates[2].description'),
    time: t('home_page.updates[2].time'),
    color: '#ffde00'
  }
]
</script>

<style scoped lang="scss">
.latest-updates {
  padding-bottom: 60px;
  width: auto;
}

.view-all-link {
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-right: 20px;
  font-family: 'SourceHanSansCN-Medium', sans-serif;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { opacity: 0.75; }
}

.updates-outer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  padding: 30px;
  border: 1px solid #07548c;
  border-radius: 4px;
  box-sizing: border-box;
  background: rgba(1, 32, 67, 0.2);
}

.update-card {
  background: rgba(4, 56, 113, 0.34);
  border-radius: 14px;
  border: 1px solid rgba(0, 160, 233, 0.5); /* 降低默认边框亮度 */
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(4, 56, 113, 0.55);
    border-color: #17a0fc;
    transform: translateX(4px); /* 悬停微动效果 */
  }

  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;

    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 6px;
      /* 使用 currentColor 配合内联 style 里的 color 实现发光 */
      box-shadow: 0 0 10px currentColor; 
    }

    .text-block {
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow: hidden;

      .update-title {
        color: #ffffff;
        font-size: 22px; /* 稍微缩小以防长标题溢出 */
        font-weight: 500;
        font-family: 'SourceHanSansCN-Medium', sans-serif;
        white-space: nowrap;
        line-height: 1.2;
      }

      .update-desc {
        text-shadow: 0 0 8px rgba(0, 210, 255, 0.88);
        color: #cccccc;
        font-size: 16px;
        font-weight: 500;
        font-family: 'SourceHanSansCN-Medium', sans-serif;
        line-height: 1.4;
        /* 描述文字如果太长可以允许换行或省略 */
        white-space: normal; 
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }

  .update-time {
    display: block;
    text-shadow: 0 0 8px rgba(0, 210, 255, 0.88);
    color: #888888;
    font-size: 14px;
    font-weight: 500;
    font-family: 'SourceHanSansCN-Medium', sans-serif;
    white-space: nowrap;
    line-height: 1;
    margin: 15px 0 20px 32px; /* 缩减左间距以适应小屏 */
  }
}

</style>