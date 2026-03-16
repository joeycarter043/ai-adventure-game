<template>
  <SelectRoot v-model="value">
    <SelectTrigger class="inline-flex items-center justify-between outline-none w-full">
      <SelectValue :placeholder="placeholder" />
      <SelectIcon>
        <slot name="icon" />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent class="z-[110] bg-white rounded shadow-lg overflow-hidden">
        <SelectViewport class="p-1">
          <SelectItem 
            v-for="opt in options" 
            :key="opt.value" 
            :value="opt.value"
            class="outline-none cursor-pointer hover:bg-gray-100 px-4 py-2"
          >
            <SelectItemText>{{ opt.label }}</SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup>
import { SelectRoot, SelectTrigger, SelectValue, SelectIcon, SelectPortal, SelectContent, SelectViewport, SelectItem, SelectItemText } from 'radix-vue'

defineProps({
  options: Array,
  placeholder: String
})

const value = defineModel()
</script>