<template>
  <div class="section-title-bar">
    <span class="section-title-text">
      <slot>{{ title }}</slot>
    </span>

    <div v-if="$slots.right" class="section-title-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped lang="scss">
.section-title-bar {
  height: 35px;
  background: url('@/assets/img/bg_title.png') no-repeat;
  background-size: var(--title-bg-size, 100% 100%);
  display: flex;
  align-items: center;
  /* 关键修改：让左右两端对齐 */
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 10px; /* 给右侧按钮预留一点呼吸空间 */
  flex-shrink: 0;

  .section-title-text {
    background: linear-gradient(180deg, #fff 0%, #acdbff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: bold;
    font-size: 16px;
    text-shadow: 0 0 10px rgba(0, 160, 255, 0.5);
    white-space: nowrap;
  }

  .section-title-right {
    display: flex;
    align-items: center;
    /* 可以在这里统一处理右侧内容的样式，比如按钮的缩放或间距 */
  }
}
</style>