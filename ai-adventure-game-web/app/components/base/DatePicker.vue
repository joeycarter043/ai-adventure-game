<template>
  <div class="base-date-picker" @click="handlePickerClick">
    <input
      ref="inputRef"
      :value="modelValue"
      type="date"
      class="date-input-hidden"
      @input="onInput"
    />
    
    <div class="display-container" :class="{ 'is-empty': !modelValue }">
      <span class="date-text">
        {{ modelValue || placeholder }}
      </span>
      
      <div class="calendar-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const inputRef = ref<HTMLInputElement | null>(null)

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handlePickerClick = () => {
  if (inputRef.value) {
    // 现代浏览器调用原生选择器
    if (typeof inputRef.value.showPicker === 'function') {
      inputRef.value.showPicker()
    } else {
      inputRef.value.focus()
    }
  }
}
</script>

<style scoped lang="scss">
.base-date-picker {
  position: relative;
  width: 100%;
  cursor: pointer;
}

.date-input-hidden {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;

  /* 解决某些浏览器下原生图标遮挡点击的问题 */
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
}

.display-container {
  height: 48px;
  border-radius: 8px;
  border: 1px solid #5A85BE;
  background: linear-gradient(rgba(40, 72, 122, 0.22), rgba(22, 50, 84, 0.22));
  color: #fff;
  font-size: 14px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.15s, box-shadow 0.15s;

  &.is-empty .date-text {
    color: #999;
  }

  .calendar-icon {
    color: #d4d4d4;
    display: flex;
    align-items: center;
    pointer-events: none;
  }
}

.base-date-picker:hover .display-container {
  border-color: rgba(0, 174, 255, 0.5);
  box-shadow: 0 0 8px rgba(0, 246, 255, 0.1);
}

/* 强制让 date input 的深色模式生效 */
:deep(.date-input-hidden) {
  color-scheme: dark;
}
</style>