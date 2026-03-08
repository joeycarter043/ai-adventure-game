<template>
  <button class="clue-item" @click="$emit('click')">
    <div class="clue-icon">
      <img v-if="isFirst" :src="`/images/task-card/${icon}`" :alt="''" />
      <div v-else class="icon-placeholder">
        <div class="icon-inner"></div>
      </div>
    </div>
    <span class="clue-content">{{ clue.content }}</span>
  </button>
</template>

<script setup lang="ts">
interface Clue {
  content: string
}

defineProps<{
  clue: Clue
  icon: string
  isFirst?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.clue-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 371px;
  height: 65px;
  padding: 10px;
  background: rgba(4, 56, 113, 0.34);
  border: 1px solid rgba(4, 56, 113, 1);
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.clue-item:hover {
  background: rgba(4, 56, 113, 0.5);
  border-color: rgba(0, 210, 255, 0.5);
}

.clue-icon {
  width: 62px;
  height: 62px;
  flex-shrink: 0;
}

.clue-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.icon-placeholder {
  width: 62px;
  height: 62px;
  background: url('/images/task-card/img_53.png') center no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-inner {
  width: 20px;
  height: 24px;
  background: url('/images/task-card/img_54.png') center no-repeat;
  background-size: 100% 100%;
}

.clue-content {
  flex: 1;
  font-size: 16px;
  color: #ffffff;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
