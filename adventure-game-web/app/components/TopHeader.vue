<template>
  <header class="top-header">
    <div class="header-left">
      <NuxtLink :to="localePath('/')">
        <img src="@/assets/img/logo.png" alt="Logo" class="logo-img" />
      </NuxtLink>
    </div>

    <nav class="header-center">
      <NuxtLink 
        :to="localePath('/')" 
        class="menu-item" 
        :class="{ 'active': isModuleActive('/') }"
      >
        <span>{{ $t('header.home') }}</span>
      </NuxtLink>

      <NuxtLink 
        :to="localePath('/project')" 
        class="menu-item" 
        :class="{ 'active': isModuleActive('/project') }"
      >
        <span>{{ $t('header.project_select') }}</span>
      </NuxtLink>

      <NuxtLink 
        :to="localePath('/learning')" 
        class="menu-item" 
        :class="{ 'active': isModuleActive('/learning') }"
      >
        <span>{{ $t('header.knowledge') }}</span>
      </NuxtLink>

      <NuxtLink 
        :to="localePath('/profile')" 
        class="menu-item" 
        :class="{ 'active': isModuleActive('/profile') }"
      >
        <span>{{ $t('header.profile') }}</span>
      </NuxtLink>
    </nav>

    <div class="header-right">
      <div class="search-container">
        <img class="search-icon" src="@/assets/img/search.png" alt="" /> 
        <input 
          type="text" 
          :placeholder="$t('header.search_placeholder')" 
          class="search-input" 
        />
      </div>

      <ClientOnly>
        <LangSwitcher />
      </ClientOnly>

      <div class="user-profile">
        <img src="@/assets/img/user.png" alt="User" class="avatar" />
      </div>

      <div v-if="showFunctionGroup" class="function-group">
        <button class="func-btn"><span>{{ $t('scenario_task.actions.continue') }}</span></button>
        <button class="func-btn"><span>{{ $t('scenario_task.actions.exit') }}</span></button>
        <button class="func-btn back"><span>{{ $t('scenario_task.actions.back') }}</span></button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  showFunctionGroup?: boolean
}>()

const route = useRoute()
const localePath = useLocalePath()

/**
 * 手动判断模块激活状态
 * @param path 模块路径，如 '/project'
 */
const isModuleActive = (path: string) => {
  // 获取当前路由路径 (例如: /en/project/scenario)
  const currentPath = route.path
  
  // 1. 处理首页逻辑
  if (path === '/') {
    // 首页必须是完全匹配 / 或 /en 或 /en/
    return currentPath === '/' || currentPath === '/en' || currentPath === '/en/'
  }

  // 2. 处理其他模块逻辑
  // 只要当前路径中包含该模块关键字 (如 'project')，就返回 true
  // 使用 includes 能够完美兼容 /project/xxx 以及 /en/project/xxx
  return currentPath.includes(path)
}
</script>

<style scoped lang="scss">
/* 样式部分保持不变，确保有 .menu-item.active 的样式定义即可 */
.top-header {
  background-image: url('@/assets/img/top_background.png');
  background-size: 100% 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  position: relative;
  z-index: 0;
  margin: 4px 16px 0 8px;
}

.header-left {
  display: flex;
  align-items: center;
  .logo-img { height: 35px; margin-bottom: 8px; }
}

.header-center {
  display: flex;
  gap: 4px;
  height: 100%;
  align-items: center;
  margin-left: 20px;
}

.menu-item {
  width: 124px;
  height: 38px;
  background: url('@/assets/img/btn_menu_normal.png') no-repeat center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  transition: all 0.2s;
  opacity: 0.8;
  text-decoration: none;

  &:hover { opacity: 1; }

  &.active {
    background-image: url('@/assets/img/btn_menu_selection.png');
    font-weight: bold;
    color: #00f6ff;
    opacity: 1;
    text-shadow: 0 0 8px rgba(0, 246, 255, 0.5);
  }
}

.header-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* ... 搜索框、头像、按钮组等样式保持不变 ... */
.search-container {
  display: flex;
  align-items: center;
  background: rgba(0, 21, 41, 0.6);
  border: 1px solid rgba(23, 160, 252, 0.4);
  border-radius: 18px;
  padding: 0 15px;
  height: 34px;
  width: 220px;

  .search-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    opacity: 0.6;
  }

  .search-input {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 13px;
    width: 100%;
    outline: none;
    &::placeholder { color: rgba(255, 255, 255, 0.4); }
  }
}

.user-profile {
  display: flex;
  align-items: center;
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1.5px solid #17a0fc;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(23, 160, 252, 0.4);
  }
}

.function-group {
  display: flex;
  gap: 6px;
  margin-left: 10px;
}

.func-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: #fff;
  padding: 4px 12px;
  font-size: 13px;
  cursor: pointer;
  &:hover { background: rgba(255, 255, 255, 0.15); }
}
</style>