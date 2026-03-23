<template>
  <div class="base-input-wrapper" :class="{ 'is-focused': isFocused }">
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      class="base-input-inner"
      @input="onInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number
  type?: string
  placeholder?: string
  min?: number | string
  max?: number | string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  height: '48px'
})

const emit = defineEmits(['update:modelValue'])

const isFocused = ref(false)

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  // 如果是数字类型，尝试转为数字，否则保持字符串
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}
</script>

<style scoped lang="scss">
.base-input-wrapper {
  height: v-bind(height);
  border-radius: 8px;
  border: 1px solid #5A85BE;
  background: linear-gradient(rgba(40, 72, 122, 0.22), rgba(22, 50, 84, 0.22));
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  &.is-focused {
    border-color: rgba(0, 174, 255, 0.5);
    box-shadow: 0 0 8px rgba(0, 174, 255, 0.1);
  }
}

.base-input-inner {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  padding: 0 13px;

  &::placeholder {
    color: #999;
  }

  /* 隐藏数字输入的箭头 */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
}
</style>