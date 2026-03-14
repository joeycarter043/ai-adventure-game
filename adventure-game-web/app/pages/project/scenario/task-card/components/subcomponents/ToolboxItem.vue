<template>
  <div 
    class="toolbox-item" 
    :class="{ 'toolbox-item--active': active }"
  >
    <img class="toolbox-icon" :src="icon" :alt="label" />
    <span 
      class="toolbox-label" 
      :class="{ 'toolbox-label--glow': active }"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  active?: boolean
}>()
</script>

<style scoped lang="scss">
.toolbox-item {
  background: rgba(4, 56, 113, 0.3);
  width: 100%;
  height: 40px;
  border: 1px solid rgba(4, 56, 113, 1);
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &--active {
    border-color: #00a0e9;
    background: rgba(0, 160, 233, 0.15);
    box-shadow: inset 0 0 10px rgba(0, 160, 233, 0.2);
  }

  &:hover {
    border-color: rgba(0, 160, 233, 0.6);
    background: rgba(4, 56, 113, 0.5);
  }
}

.toolbox-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.toolbox-label {
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
  
  &--glow {
    text-shadow: 0 0 8px rgba(0, 210, 255, 0.8);
    font-weight: 500;
  }
}
</style>