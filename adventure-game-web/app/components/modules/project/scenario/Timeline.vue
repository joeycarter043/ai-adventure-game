<template>
  <div class="scenario-timeline-container">
    <div class="timeline-wrapper">
      <ArcTimeline
        v-model:active-index="localActiveIndex"
        :items="timelineData"
        :arrow-icon="arrowIcon"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
// --- 统一引入图标资源 ---
import storyNode1 from './assets/icon_story_node_1.png'
import storyNode3 from './assets/icon_story_node_3.png'
import storyNode2Active from './assets/icon_story_node_2_inner.png'
import storyNodeLocked from './assets/icon_story_node_4_outer.png'
import arrowIcon from './assets/icon_story_arrow_left.png'

import ArcTimeline from '@/components/base/ArcTimeline.vue'

const props = defineProps<{
  activeIndex: number
}>()

const emit = defineEmits(['update:activeIndex', 'change'])

// 1. 数据逻辑完全收拢
const timelineData = computed(() => [
  { label: '剧情1', normalIcon: storyNode1, activeIcon: storyNode2Active, lockedIcon: storyNodeLocked, locked: false },
  { label: '剧情2', normalIcon: storyNode3, activeIcon: storyNode2Active, lockedIcon: storyNodeLocked, locked: false },
  { label: '剧情3', normalIcon: storyNode3, activeIcon: storyNode2Active, lockedIcon: storyNodeLocked, locked: false },
  { label: '剧情4', normalIcon: storyNode3, activeIcon: storyNode2Active, lockedIcon: storyNodeLocked, locked: false },
  { label: '剧情5', normalIcon: storyNode3, activeIcon: storyNode2Active, lockedIcon: storyNodeLocked, locked: false }
])

// 2. 双向绑定逻辑
const localActiveIndex = computed({
  get: () => props.activeIndex,
  set: (val) => emit('update:activeIndex', val)
})

const handleChange = (index: number) => {
  emit('change', index)
}
</script>

<style scoped lang="scss">
/* 样式与之前保持一致 */
.scenario-timeline-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
}
.timeline-wrapper {
  z-index: 15;
}

</style>