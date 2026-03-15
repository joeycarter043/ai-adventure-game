<template>
  <div 
    class="role-card" 
    :class="{ 'role-card--active': active, 'role-card--inactive': !active }"
    @click="$emit('select')"
  >
    <img class="role-avatar" :src="avatar" :alt="title" />
    <div class="role-info">
      <span class="role-name" :class="{ 'role-name--muted': !active }">{{ title }}</span>
      <span class="role-desc" :class="{ 'role-desc--muted': !active }">{{ desc }}</span>
    </div>
    <img class="role-indicator" :src="indicator" alt="" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatar: string
  title: string
  desc: string
  indicator: string
  active: boolean
}>()

defineEmits(['select'])
</script>

<style scoped lang="scss">
.role-card {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px 0 4px;
  background: rgba(25, 158, 251, 0.2);
  border: 1px solid rgba(25, 158, 251, 0.6);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &--active {
    background: rgba(251, 115, 25, 0.25);
    border: 1px solid #fb7319;
    box-shadow: inset 0 0 10px rgba(251, 115, 25, 0.3);
  }

  &:hover:not(.role-card--active) {
    background: rgba(25, 158, 251, 0.4);
    border-color: rgba(25, 158, 251, 1);
  }
}

.role-avatar { width: 30px; height: 30px; border-radius: 2px; flex-shrink: 0; }

.role-info { 
  flex: 1; 
  margin-left: 12px; 
  display: flex; 
  flex-direction: column;
  overflow: hidden;
}

.role-name { 
  color: #fff; 
  font-size: 14px; 
  font-weight: bold;
  white-space: nowrap;
  &--muted { color: #889bb3; }
}

.role-desc { 
  color: rgba(255, 255, 255, 0.7); 
  font-size: 11px; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &--muted { color: #5c6e85; }
}

.role-indicator { width: 14px; flex-shrink: 0; }
</style>