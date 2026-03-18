<template>
  <div class="base-select-dropdown" ref="dropdownRef">
    <!-- 触发按钮 -->
    <div 
      class="dropdown-trigger"
      :class="{ 'is-open': isOpen }"
      @click="toggleDropdown"
    >
      <span class="trigger-text">{{ selectedText || placeholder }}</span>
      <svg 
        class="arrow-icon" 
        :class="{ 'is-open': isOpen }"
        width="19" 
        height="10" 
        viewBox="0 0 19 10" 
        fill="none"
      >
        <path 
          d="M1 1L9.5 9L18 1" 
          stroke="white" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <!-- 下拉菜单 -->
    <Transition name="dropdown">
      <div v-if="isOpen" class="dropdown-menu">
        <div
          v-for="(option, index) in options"
          :key="getOptionValue(option, index)"
          class="dropdown-item"
          :class="{ 'is-selected': isSelected(option, index) }"
          @click="selectOption(option, index)"
        >
          <span class="item-text">{{ getOptionLabel(option) }}</span>
          <svg 
            v-if="isSelected(option, index)" 
            class="check-icon" 
            width="16" 
            height="12" 
            viewBox="0 0 16 12" 
            fill="none"
          >
            <path 
              d="M1 6L5.5 10.5L15 1" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// 选项接口
interface SelectOption {
  value: string | number
  label: string
  [key: string]: any
}

interface Props {
  // 下拉选项列表
  options?: SelectOption[]
  // 选中的值（单选模式）
  modelValue?: string | number | null
  // 选中的值（多选模式）
  multipleValues?: (string | number)[]
  // 是否多选
  multiple?: boolean
  // 占位文本
  placeholder?: string
  // 显示字段（当选项为对象时）
  labelKey?: string
  // 值字段（当选项为对象时）
  valueKey?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  modelValue: null,
  multipleValues: () => [],
  multiple: false,
  placeholder: '请选择',
  labelKey: 'label',
  valueKey: 'value',
  height: '48px'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null]
  'update:multipleValues': [value: (string | number)[]]
  'change': [value: any]
}>()

// 下拉框展开状态
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

// 获取选项显示文本
const getOptionLabel = (option: any): string => {
  if (typeof option === 'string') return option
  return option[props.labelKey] || option.label || String(option)
}

// 获取选项值
const getOptionValue = (option: any, index: number): string | number => {
  if (typeof option === 'string') return option
  if (typeof option === 'number') return option
  return (option[props.valueKey] || option.value) ?? index
}

// 判断选项是否选中
const isSelected = (option: any, index: number): boolean => {
  const value = getOptionValue(option, index)
  if (props.multiple) {
    return props.multipleValues.includes(value)
  }
  return props.modelValue === value
}

// 获取选中的文本
const selectedText = computed(() => {
  if (props.multiple) {
    if (props.multipleValues.length === 0) return ''
    const selectedOptions = props.options.filter((opt, idx) => 
      props.multipleValues.includes(getOptionValue(opt, idx))
    )
    return selectedOptions.map(opt => getOptionLabel(opt)).join(', ')
  }
  if (!props.modelValue) return ''
  const selectedOption = props.options.find((opt, idx) => 
    getOptionValue(opt, idx) === props.modelValue
  )
  return selectedOption ? getOptionLabel(selectedOption) : ''
})

// 切换下拉框
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// 选择选项
const selectOption = (option: any, index: number) => {
  const value = getOptionValue(option, index)
  
  if (props.multiple) {
    const newValues = props.multipleValues.includes(value)
      ? props.multipleValues.filter(v => v !== value)
      : [...props.multipleValues, value]
    emit('update:multipleValues', newValues)
    emit('change', newValues)
  } else {
    emit('update:modelValue', value)
    emit('change', value)
    isOpen.value = false
  }
}

// 点击外部关闭
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="scss">
.base-select-dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: linear-gradient(
    rgba(40, 72, 122, 0.4) 0%,
    rgba(40, 72, 122, 0.4) 0%,
    rgba(22, 50, 84, 0.4) 100%,
    rgba(22, 50, 84, 0.4) 100%
  );
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0 16px;
  height: v-bind(height);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 255, 252, 0.5);
  }

  &.is-open {
    border-color: rgba(0, 255, 252, 1);
  }
}

.trigger-text {
  font-size: 16px;
  color: rgba(153, 153, 153, 1);
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.arrow-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;

  &.is-open {
    transform: rotate(180deg);
  }
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: linear-gradient(
    rgba(40, 72, 122, 0.95) 0%,
    rgba(22, 50, 84, 0.95) 100%
  );
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 8px 0;
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 174, 255, 0.3);
    border-radius: 2px;
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.is-selected {
    color: rgba(0, 255, 252, 1);
  }
}

.item-text {
  font-size: 16px;
  color: #fff;
}

.check-icon {
  color: rgba(0, 255, 252, 1);
  flex-shrink: 0;
}

// 下拉动画
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
