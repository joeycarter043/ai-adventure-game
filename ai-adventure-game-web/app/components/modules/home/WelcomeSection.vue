<template>
  <div class="welcome-section">
    <span class="welcome-text">{{ t('home_page.welcome_back') }}</span>
    <div class="welcome-actions">
      <button class="action-btn" @click="handleStartGame">
        <img :src="btnStartGame" alt="开始游戏" class="btn-img" />
      </button>
      <button class="action-btn" @click="handleMyStudies">
        <img :src="btnMyStudies" alt="我的学习" class="btn-img" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// 资源引入
import btnStartGame from './assets/btn_start_game.png'
import btnMyStudies from './assets/btn_my_studies.png'

const { t } = useI18n()

// 定义事件发射，方便父组件处理逻辑
const emit = defineEmits(['start-game', 'my-studies'])

const handleStartGame = () => {
  emit('start-game')
}

const handleMyStudies = () => {
  emit('my-studies')
}
</script>

<style scoped lang="scss">
.welcome-section {
  display: flex;
  align-items: center;
  padding: 0 42px;
  margin-top: 30px;
  box-sizing: border-box;
  width: 100%;

  .welcome-text {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    font-family: 'SourceHanSansCN-Bold', sans-serif;
    white-space: nowrap;
  }

  .welcome-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;

    .action-btn {
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.15s;
      display: flex;
      align-items: center;

      &:hover {
        opacity: 0.85;
        transform: translateY(-1px);
      }

      .btn-img {
        height: 41px;
        width: auto;
        display: block;
        object-fit: contain;
      }
    }
  }
}
</style>