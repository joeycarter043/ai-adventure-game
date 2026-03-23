<template>
  <div class="quiz-item choice-item">
    <div class="item-title">
      <span class="item-index">{{ index }}.</span>
      <span class="item-tag">[{{ isMultiple ? '多选题' : '单选题' }}]</span>
      <span class="item-content">{{ question.title }}</span>
    </div>

    <div class="options-container">
      <div v-for="opt in question.options" :key="opt.id" class="option-row" :class="{ 'is-active': isSelected(opt.id) }"
        @click="handleSelect(opt.id)">
        <div class="check-box" :class="{ 'is-round': !isMultiple }">
          <div v-if="isSelected(opt.id)" class="check-inner"></div>
        </div>
        <span class="option-text">{{ opt.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  index: number
  question: {
    id: string
    type: 'single' | 'multiple'
    title: string
    options: Array<{ id: string, text: string }>
  }
  modelValue: string[] // 统一使用数组存储，单选则只存一个元素
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => []
})

const emit = defineEmits(['update:modelValue'])

const isMultiple = computed(() => props.question.type === 'multiple')

const isSelected = (id: string) => props.modelValue.includes(id)

const handleSelect = (id: string) => {
  let newValue: string[] = []
  if (isMultiple.value) {
    // 多选逻辑
    newValue = isSelected(id)
      ? props.modelValue.filter(item => item !== id)
      : [...props.modelValue, id]
  } else {
    // 单选逻辑
    newValue = [id]
  }
  emit('update:modelValue', newValue)
}
</script>

<style scoped lang="scss">
@use "../assets/style.scss" as *;

.options-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 28px;
}

.option-row {
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .check-box {
    width: 20px;
    height: 20px;
    border: 2px solid #5A85BE;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    transition: all 0.2s;

    &.is-round {
      border-radius: 50%;
    }

    .check-inner {
      width: 10px;
      height: 10px;
      background: #00f6ff;
      border-radius: inherit;
      box-shadow: 0 0 6px rgba(0, 246, 255, 0.8);
    }
  }

  .option-text {
    font-size: 16px;
    color: #D5D5D5;
    line-height: 1.4;
  }

  &.is-active {
    .check-box {
      border-color: #00f6ff;
      background: rgba(0, 246, 255, 0.1);

      /* 针对多选框(非 round)的打勾效果重写 */
      &:not(.is-round) {
        .check-inner {
          background: transparent;
          box-shadow: none;
          width: 10px;
          height: 6px;
          border-left: 2px solid #00f6ff;
          border-bottom: 2px solid #00f6ff;
          transform: rotate(-45deg);
          margin-top: -2px;
          border-radius: 0;

          /* 给勾也加上发光效果 */
          filter: drop-shadow(0 0 3px rgba(0, 246, 255, 0.8));
        }
      }
    }

    .option-text {
      color: #00f6ff;
    }
  }
}
</style>