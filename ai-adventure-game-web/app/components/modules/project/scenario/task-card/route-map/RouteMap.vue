<template>
  <section class="route-map-container">
    <div class="map-header">
      <h3 class="map-title">航线地图</h3>
      <div class="map-controls">
        <button class="control-btn" title="放大">
          <img :src="iconZoomIn" alt="zoom-in" />
        </button>
        <button class="control-btn" title="缩小">
          <img :src="iconZoomOut" alt="zoom-out" />
        </button>
        <button class="control-btn" title="重置">
          <img :src="iconRefresh" alt="reset" />
        </button>
      </div>
    </div>

    <div class="map-canvas">
      <img :src="bgRouteMap" class="map-background" alt="World Route Map" />

      <!-- <div class="map-overlay">
        <div v-for="(tag, index) in tags" :key="index" :class="{
          'route-tag': tag.type === 'route',
          'geo-label': tag.type === 'geo',
          'legacy-tag': tag.type === 'legacy'
        }" :style="{ left: tag.x, top: tag.y }">
          {{ tag.text }}
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import bgRouteMap from './assets/bg_route_map.png'
import iconZoomIn from './assets/icon_zoom_in.png'
import iconZoomOut from './assets/icon_zoom_out.png'
import iconRefresh from './assets/icon_refresh.png'

// 定义接口，确保标签数据的类型安全
interface MapTag {
  type: 'route' | 'geo' | 'legacy'
  text: string
  x: string
  y: string
}

// 接收来自 index.vue 的标签配置
defineProps<{
  tags: MapTag[]
}>()
</script>

<style scoped lang="scss">
.route-map-container {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #5A85BE;
  padding: 32px 40px 45px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .map-title {
    margin: 0;
    font-size: 30px;
    color: #ffffff;
  }

  .map-controls {
    display: flex;
    gap: 16px;

    .control-btn {
      width: 71px;
      height: 48px;
      background: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.8;
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}

.map-canvas {
  position: relative;
  width: 100%;
  aspect-ratio: 1600 / 948;
  overflow: hidden;
  border-radius: 4px;

  .map-background {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  .route-tag {
    position: absolute;
    padding: 6px 20px;
    background: #E84C64;
    color: #ffffff;
    font-size: 18px;
    font-family: SourceHanSansCN-Medium, sans-serif;
    border-radius: 20px;
    white-space: nowrap;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%);
  }

  .geo-label {
    position: absolute;
    padding: 4px 12px;
    background: #FFEF00;
    color: #000000;
    font-size: 14px;
    font-weight: bold;
    font-family: SourceHanSansCN-Bold, sans-serif;
    border-radius: 4px;
    transform: translate(-50%, -50%);
  }

  .legacy-tag {
    position: absolute;
    padding: 6px 24px;
    background: #FF7D91;
    color: #ffffff;
    font-size: 18px;
    font-family: SourceHanSansCN-Medium, sans-serif;
    border-radius: 20px;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-width: 1440px) {
  .map-header .map-title {
    font-size: 24px;
  }

  .map-overlay {

    .route-tag,
    .legacy-tag {
      font-size: 14px;
    }

    .geo-label {
      font-size: 12px;
    }
  }
}
</style>