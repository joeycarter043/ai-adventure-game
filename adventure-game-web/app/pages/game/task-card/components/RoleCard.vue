<template>
  <div 
    class="role-card"
    :class="{ 
      selected: selected,
      'manager': role.id === 'manager'
    }"
    @click="$emit('select')"
  >
    <img 
      class="role-icon" 
      :src="`/images/task-card/${selected ? role.selectedIcon : role.icon}`" 
      :alt="role.name" 
    />
    <div class="role-info">
      <span class="role-name" :class="{ 'text-white': selected }">{{ role.name }}</span>
      <span class="role-desc" :class="{ 'text-white': selected }">{{ role.description }}</span>
    </div>
    <img 
      v-if="selected" 
      class="check-icon" 
      src="/images/task-card/img_6.png" 
      alt="已选中" 
    />
  </div>
</template>

<script setup lang="ts">
import type { Role } from '~/types/game'

defineProps<{
  role: Role
  selected: boolean
}>()

defineEmits<{
  select: []
}>()
</script>

<style scoped>
.role-card {
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 383px;
  height: 51px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.role-card:hover {
  opacity: 0.9;
}

/* 选中状态 - 橙色边框 */
.role-card.selected {
  background-color: rgba(251, 115, 25, 0.38);
  border: 1px solid rgba(251, 115, 25, 1);
  border-radius: 4px;
}

/* 未选中状态 - 蓝色边框 */
.role-card:not(.selected) {
  background-color: rgba(25, 158, 251, 0.38);
  border: 1px solid rgba(0, 127, 239, 1);
  border-radius: 4px;
}

.role-icon {
  width: 42px;
  height: 42px;
  margin-right: 11px;
  object-fit: contain;
}

.role-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.role-name {
  font-size: 20px;
  font-weight: 500;
  font-family: 'SourceHanSansCN-Medium', sans-serif;
  color: rgba(153, 153, 153, 1);
}

.role-name.text-white {
  color: rgba(255, 255, 255, 1);
}

.role-desc {
  font-size: 14px;
  font-family: 'Adobe Heiti Std R', sans-serif;
  color: rgba(153, 153, 153, 1);
}

.role-desc.text-white {
  color: rgba(255, 255, 255, 1);
}

.check-icon {
  width: 21px;
  height: 26px;
  margin-left: auto;
  margin-right: 20px;
  object-fit: contain;
}
</style>
