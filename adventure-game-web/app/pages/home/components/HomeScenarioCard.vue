<script setup lang="ts">
import iconDuration from '../assets/slices/icon_duration.png'
import iconScore from '../assets/slices/icon_score.png'

const props = defineProps<{
  title: string
  description: string
  duration: string
  score: string
}>()
</script>

<template>
  <div class="scenario-card">
    <!-- 卡片标题标签 -->
    <div class="card-title">
      <span>{{ props.title }}</span>
    </div>

    <!-- 卡片主体 -->
    <div class="card-body">
      <!-- 缩略图指示器 -->
      <div class="thumbnail-indicator">
        <span class="thumb-dot active"></span>
        <span class="thumb-dot"></span>
        <span class="thumb-dot"></span>
        <span class="thumb-dot"></span>
        <span class="thumb-dot"></span>
      </div>

      <div class="card-content">
        <!-- 时长和评分 -->
        <div class="meta-info">
          <div class="meta-item">
            <img class="meta-icon duration-icon" :src="iconDuration" alt="" />
            <span>{{ props.duration }} {{ $t('home_page.minutes') }}</span>
          </div>
          <div class="meta-item">
            <img class="meta-icon score-icon" :src="iconScore" alt="" />
            <span class="meta-icon duration-icon"></span>
            <span>{{ props.duration }} {{ $t('home_page.minutes') }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon score-icon"></span>
            <span>{{ props.score }} {{ $t('home_page.score') }}</span>
          </div>
          <button class="start-button">{{ $t('home_page.start') }}</button>
        </div>

        <!-- 描述文本 -->
        <div class="description-box">
          <p>{{ props.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scenario-card {
  position: relative;
  width: 543px;
  height: 395px;
  margin-top: 4px;
}

.card-title {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 208px;
  height: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #e0e0e0 100%);
  border-radius: 4px 4px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #163254;
    font-size: 16px;
    font-weight: 500;
    font-family: 'SourceHanSansCN-Medium', sans-serif;
    white-space: nowrap;
    line-height: 16px;
  }
}

.card-body {
  position: absolute;
  top: 28px;
  left: 0;
  width: 100%;
  height: calc(100% - 28px);
}

.thumbnail-indicator {
  display: flex;
  justify-content: center;
  gap: 3px;
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);

  .thumb-dot {
    width: 15px;
    height: 13px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;

    &.active {
      background: #17a0fc;
    }
  }
}

.card-content {
  position: relative;
  width: 529px;
  height: 346px;
  margin: 16px auto 0;
  background: rgba(1, 32, 67, 0.62);
  border: 3px solid #16568b;
  border-radius: 4px;
}

.meta-info {
  display: flex;
  align-items: center;
  width: 450px;
  height: 26px;
  margin: 25px auto 0;
  padding: 0 37px;

  .meta-item {
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 14px;
    font-family: 'SourceHanSansCN-Regular', sans-serif;

    .meta-icon {
      width: 18px;
      height: 18px;
      margin-right: 5px;

      &.duration-icon {
        width: 18px;
        height: 18px;
      }

      &.score-icon {
        width: 18px;
        height: 18px;

      border-radius: 50%;

      &.duration-icon {
        background: linear-gradient(135deg, #17a0fc, #07548c);
      }

      &.score-icon {
        background: linear-gradient(135deg, #fead00, #ff6b00);

      }
    }

    &:not(:first-child) {
      margin-left: 28px;
    }
  }

  .start-button {
    background: linear-gradient(180deg, #28487a 0%, #163254 100%);
    border: 1px solid #000000;
    border-radius: 8px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    font-family: 'SourceHanSansCN-Medium', sans-serif;
    padding: 6px 20px;
    margin-left: auto;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(180deg, #3a5f8a 0%, #1e4264 100%);
      border-color: #17a0fc;
    }
  }
}

.description-box {
  background: linear-gradient(180deg, #08386e 0%, rgba(8, 56, 110, 0.18) 100%);
  height: 200px;
  width: 452px;
  margin: 15px auto 0;
  padding: 27px 28px;
  box-sizing: border-box;

  p {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    font-family: 'SourceHanSansCN-Medium', sans-serif;
    line-height: 28px;
    margin: 0;
  }
}
</style>
