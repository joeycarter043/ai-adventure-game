<template>
  <nav class="app-breadcrumb">
    <template v-for="(item, index) in breadcrumbs" :key="item.path">
      <span v-if="index === breadcrumbs.length - 1" class="current">
        {{ item.label }}
      </span>
      <template v-else>
        <NuxtLink :to="localePath(item.path)" class="breadcrumb-link">{{ item.label }}</NuxtLink>
        <span class="separator">/</span>
      </template>
    </template>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

// 关键：接收页面注入的动态标题
const dynamicBreadcrumbTitle = inject<Ref<string | null>>('dynamicBreadcrumbTitle', ref(null))

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(p => p && p !== 'en' && p !== 'zh')
  
  return pathArray.map((path, index) => {
    // 构造当前级及之前级联后的完整路径，如 "/project/scenario"
    const currentFullPath = '/' + pathArray.slice(0, index + 1).join('/')
    
    // 优先从映射表用全路径找
    const translationKey = BREADCRUMB_MAP[currentFullPath]
    
    let label = ''
    // ... 之后的逻辑：如果是 task-card 级且有 inject 就用注入，否则用 translationKey
    if (path === 'task-card' && dynamicBreadcrumbTitle?.value) {
      label = dynamicBreadcrumbTitle.value
    } else if (translationKey) {
      label = t(translationKey)
    } else {
      label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
    }

    return { path: currentFullPath, label }
  })
})
</script>

<style scoped lang="scss">
/* 样式保持不变 */
.app-breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);

  .breadcrumb-link {
    color: inherit;
    text-decoration: none;
    &:hover { color: #00f6ff; }
  }

  .current { color: #fff; font-weight: 500; }
  .separator { margin: 0 8px; opacity: 0.6; }
}
</style>