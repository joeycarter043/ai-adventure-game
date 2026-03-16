<template>
  <div class="story-section">
    <CornerBox>
      <div class="act-header-wrapper">
        <div class="act-header-content">
          <span class="act-header-text">
            <slot name="header">
              {{ $t('scenario_task.stories.current') }}
            </slot>
          </span>
        </div>
      </div>

      <div class="section-content-slot">
        <slot></slot>
      </div>

      <div class="footer-decorator-bar">
        <img class="bar-img" src="@/assets/img/bg_bottom_bar.png" />
      </div>
    </CornerBox>
  </div>
</template>

<script setup>
import CornerBox from '@/components/base/CornerBox.vue';
</script>

<style scoped lang="scss">
.story-section {
  position: relative;
  flex: 1;
  min-width: 0;
  background: url('./assets/bg_story_section.png') -14px -10px no-repeat;
  background-size: 106% 106%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.act-header-wrapper {
  height: 35px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2px;
  flex-shrink: 0;
  .act-header-content {
    width: 100%;
    height: 35px;
    background: url('@/assets/img/icon_story_decoration.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .act-header-text {
    background-image: linear-gradient(180deg, #fff 0%, #acdbff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 22px;
    font-family: 'SourceHanSansCN-Bold', sans-serif;
    font-weight: bold;
  }
}

.section-content-slot {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  z-index: 10;
}

.footer-decorator-bar {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-shrink: 0;
  .bar-img {
    width: 100%; 
    height: 45px;
    margin-bottom: -5px; 
  }
}
</style>