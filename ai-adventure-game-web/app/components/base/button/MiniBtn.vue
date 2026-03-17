<template>
  <button 
    class="mini-button" 
    :class="{ 'is-ghost': ghost }" 
    type="button"
    @click="$emit('click')"
  >
    <img v-if="icon" :src="icon" class="btn-icon" alt="" />
    <span class="btn-text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  icon?: string
  ghost?: boolean // 代替之前的 back-style，更通用的命名
}

defineProps<Props>()
defineEmits(['click'])
</script>

<style scoped lang="scss">
.mini-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 4px 14px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  .btn-icon {
    width: 14px;
    height: 14px;
    object-fit: contain;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(0, 246, 255, 0.6);
    box-shadow: 0 0 8px rgba(0, 246, 255, 0.2);
  }

  &.is-ghost {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.15);
  }
}
</style>