<template>
  <div class="corner-box">
    <img v-if="config.tl" class="inner-corner corner-tl" src="@/assets/img/icon_corner_top_left.png" />
    <img v-if="config.tr" class="inner-corner corner-tr" src="@/assets/img/icon_corner_top_right.png" />
    <img v-if="config.bl" class="inner-corner corner-bl" src="@/assets/img/icon_corner_bottom_left.png" />
    <img v-if="config.br" class="inner-corner corner-br" src="@/assets/img/icon_corner_bottom_right.png" />

    <div class="corner-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface CornerConfig {
  tl?: boolean; // top-left
  tr?: boolean; // top-right
  bl?: boolean; // bottom-left
  br?: boolean; // bottom-right
}

const props = defineProps<{
  // 允许传入一个对象来控制显示的角
  corners?: CornerConfig
}>();

// 默认四个角全部显示
const config = computed(() => ({
  tl: props.corners?.tl ?? true,
  tr: props.corners?.tr ?? true,
  bl: props.corners?.bl ?? true,
  br: props.corners?.br ?? true,
}));
</script>

<style scoped lang="scss">
/* CSS 部分保持不变 */
.corner-box {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.inner-corner {
  position: absolute;
  z-index: 5;
  pointer-events: none;
  
  &.corner-tl { width: 37px; height: 37px; top: 0; left: 0; }
  &.corner-tr { width: 38px; height: 36px; top: 0; right: 0; }
  &.corner-bl { width: 37px; height: 36px; bottom: 0; left: 0; }
  &.corner-br { width: 37px; height: 36px; bottom: 0; right: 0; }
}

.corner-content {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  z-index: 2;
}
</style>