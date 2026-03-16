<template>
  <div class="clue-item">
    <div class="clue-icon-wrapper">
      <img
        v-if="iconType === 'primary'"
        class="clue-icon"
        :src="iconClue"
        alt=""
      />
      <template v-else>
        <div class="clue-icon-circle">
          <img class="clue-icon-circle-bg" :src="circleBgMap[iconType]" alt="" />
          <img class="clue-icon-inner" :src="circleInnerMap[iconType]" alt="" />
        </div>
      </template>
    </div>
    <span class="clue-text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import iconClue from '../assets/icon_clue.png'
import iconClueBgBlue from '../assets/icon_clue_bg_blue.png'
import iconClueBgTeal from '../assets/icon_clue_bg_teal.png'
import iconClueBgPurple from '../assets/icon_clue_bg_purple.png'
import iconClueInnerBlue from '../assets/icon_clue_inner_blue.png'
import iconClueInnerTeal from '../assets/icon_clue_inner_teal.png'
import iconClueInnerPurple from '../assets/icon_clue_inner_purple.png'

defineProps<{
  text: string
  iconType: 'primary' | 'blue' | 'teal' | 'purple'
}>()

const circleBgMap: Record<string, string> = {
  blue: iconClueBgBlue,
  teal: iconClueBgTeal,
  purple: iconClueBgPurple,
}

const circleInnerMap: Record<string, string> = {
  blue: iconClueInnerBlue,
  teal: iconClueInnerTeal,
  purple: iconClueInnerPurple,
}
</script>

<style scoped lang="scss">
.clue-item {
  background-color: rgba(4, 56, 113, 0.34);
  border: 1px solid rgba(4, 56, 113, 1);
  display: flex;
  align-items: center;
  min-height: 48px;
  width: 100%;
}

.clue-icon-wrapper {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clue-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.clue-icon-circle {
  width: 62px;
  height: 62px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clue-icon-circle-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.clue-icon-inner {
  width: 20px;
  height: 24px;
  object-fit: contain;
  position: relative;
  z-index: 1;
}

.clue-text {
  color: #fff;
  font-size: 12px;
  font-family: 'Source Han Sans CN', sans-serif;
  line-height: 18px;
  padding: 4px;
  flex: 1;
  min-width: 0;
}
</style>
