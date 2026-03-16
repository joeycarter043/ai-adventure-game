<template>
  <div class="lang-switch">
    <button 
      class="lang-btn" 
      :class="{ active: mounted && locale === 'zh' }" 
      @click="handleSwitch('zh')"
    >
      中
    </button>
    <span class="lang-divider">|</span>
    <button 
      class="lang-btn" 
      :class="{ active: mounted && locale === 'en' }" 
      @click="handleSwitch('en')"
    >
      En
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const mounted = ref(false)

// 挂载完成后才允许点亮高亮，避开 SSR 冲突
onMounted(() => {
  mounted.value = true
})

const handleSwitch = async (lang: string) => {
  if (locale.value === lang) return
  await setLocale(lang)
}
</script>

<style scoped lang="scss">
.lang-switch {
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 2px 8px;
  height: 28px;

  .lang-btn {
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    cursor: pointer;
    padding: 0 2px;
    transition: all 0.2s;

    &:hover { color: #fff; }

    &.active {
      color: #00f6ff;
      font-weight: bold;
      text-shadow: 0 0 8px rgba(0, 246, 255, 0.5);
    }
  }

  .lang-divider {
    color: rgba(255, 255, 255, 0.3);
    font-size: 12px;
  }
}
</style>