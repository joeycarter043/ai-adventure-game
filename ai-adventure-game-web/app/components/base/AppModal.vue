<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <Transition name="fade">
        <DialogOverlay class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
      </Transition>
      <Transition name="zoom">
        <DialogContent 
          class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] focus:outline-none"
          :style="{ width: width + 'px' }"
        >
          <slot />
        </DialogContent>
      </Transition>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import { DialogRoot, DialogPortal, DialogOverlay, DialogContent } from 'radix-vue'

const props = defineProps({
  width: { type: Number, default: 500 }
})

const open = defineModel('open', { type: Boolean, default: false })
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.zoom-enter-active, .zoom-leave-active { transition: transform 0.2s ease, opacity 0.2s ease; }
.zoom-enter-from, .zoom-leave-to { opacity: 0; transform: translate(-100%, -100%) scale(0.95); }
</style>