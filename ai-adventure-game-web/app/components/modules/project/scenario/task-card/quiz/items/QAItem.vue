<template>
  <div class="quiz-item qa-item">
    <div class="item-title">
      <span class="item-index">{{ index }}.</span>
      <span class="item-tag">[简答题]</span>
      <span class="item-content">{{ question.title }}</span>
    </div>

    <div class="qa-container">
      <textarea v-model="internalValue" class="qa-textarea" :placeholder="question.placeholder || '请输入您的回答...'"
        @input="handleInput"></textarea>
      <div class="qa-footer">
        <span class="word-count">当前字数: {{ internalValue.length }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  index: number
  question: {
    id: string
    title: string
    placeholder?: string
  }
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
})
const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue || '')

const handleInput = () => {
  emit('update:modelValue', internalValue.value)
}

watch(() => props.modelValue, (newVal) => {
  internalValue.value = newVal || ''
})
</script>

<style scoped lang="scss">
@use "../assets/style.scss" as *;

.qa-container {
  padding-left: 28px;
  width: 100%;
  box-sizing: border-box;

  .qa-textarea {
    width: 100%;
    min-height: 150px;
    background: rgba(13, 60, 117, 0.3);
    border: 1px solid #5A85BE;
    border-radius: 4px;
    padding: 16px;
    color: #fff;
    font-size: 16px;
    line-height: 1.6;
    outline: none;
    resize: vertical;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
      border-color: #00f6ff;
      background: rgba(13, 60, 117, 0.5);
      box-shadow: 0 0 12px rgba(0, 246, 255, 0.2);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.3);
    }
  }

  .qa-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;

    .word-count {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>