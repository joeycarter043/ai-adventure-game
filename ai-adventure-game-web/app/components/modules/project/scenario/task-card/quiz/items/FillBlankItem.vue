<template>
  <div class="quiz-item fill-blank-item">
    <div class="item-title">
      <span class="item-index">{{ index }}.</span>
      <span class="item-tag">[填空题]</span>
      <div class="fill-content-wrapper">
        <template v-for="(part, idx) in textSegments" :key="idx">
          <span class="text-part">{{ part }}</span>
          <input v-if="idx < textSegments.length - 1" v-model="answers[idx]" type="text" class="blank-input"
            @input="handleInput" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  index: number
  question: {
    id: string
    title: string
  }
  modelValue: string[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => []
})

const emit = defineEmits(['update:modelValue'])

// 将文本按 "[ ]" 拆分
const textSegments = computed(() => props.question.title.split('[ ]'))

// 内部响应式数组，用于双向绑定输入框
const answers = ref<string[]>([...props.modelValue])

const handleInput = () => {
  emit('update:modelValue', [...answers.value])
}

// 深度监听外部 props 变化，确保同步
watch(() => props.modelValue, (newVal) => {
  answers.value = [...newVal]
}, { deep: true })
</script>

<style scoped lang="scss">
@use "../assets/style.scss" as *;

.fill-content-wrapper {
  display: inline;

  .text-part {
    font-size: 18px;
    color: #fff;
    vertical-align: middle;
  }

  .blank-input {
    min-width: 100px;
    max-width: 200px;
    margin: 0 10px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #5A85BE;
    color: #00f6ff;
    font-size: 18px;
    text-align: center;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
      border-color: #00f6ff;
      background: rgba(0, 246, 255, 0.05);
      box-shadow: 0 4px 6px -4px rgba(0, 246, 255, 0.4);
    }
  }
}
</style>