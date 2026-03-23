<template>
  <div class="quiz-item judgment-item">
    <div class="item-title">
      <span class="item-index">{{ index }}.</span>
      <span class="item-content">{{ question.title }}</span>
    </div>

    <div class="judgment-options">
      <div v-for="option in [
        { label: '正确', value: true },
        { label: '错误', value: false }
      ]" :key="String(option.value)" class="judgment-option"
        :class="{ 'is-selected': modelValue === option.value }" @click="$emit('update:modelValue', option.value)">
        <div class="radio-circle">
          <div v-if="modelValue === option.value" class="inner-dot"></div>
        </div>
        <span class="option-label">{{ option.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  index: number
  question: {
    id: string
    title: string
  }
  modelValue?: boolean | null
}

withDefaults(defineProps<Props>(), {
  modelValue: null
})
defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
@use "../assets/style.scss" as *;

.judgment-options {
  display: flex;
  gap: 60px;
  padding-left: 28px;
}

.judgment-option {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  .radio-circle {
    width: 22px;
    height: 22px;
    border: 2px solid #5A85BE;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .inner-dot {
      width: 10px;
      height: 10px;
      background: #00f6ff;
      border-radius: 50%;
      box-shadow: 0 0 8px rgba(0, 246, 255, 0.5);
    }
  }

  .option-label {
    font-size: 18px;
    color: #D5D5D5;
  }

  &:hover {
    .radio-circle {
      border-color: #00f6ff;
    }
  }

  &.is-selected {
    .radio-circle {
      border-color: #00f6ff;
    }

    .option-label {
      color: #00f6ff;
    }
  }
}
</style>