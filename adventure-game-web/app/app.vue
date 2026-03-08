<template>
  <div class="app-container">
    <!-- 顶部导航 -->
    <header class="app-header">
      <nav>
        <NuxtLink to="/">{{ $t('home') }}</NuxtLink>
        <NuxtLink to="/test-api">API 测试</NuxtLink>
      </nav>
    </header>

    <!-- 页面内容渲染区域 -->
    <main class="app-main">
      <NuxtPage />
    </main>

    <!-- 底部信息 -->
    <footer class="app-footer">
      <p>© 2024 货运剧本杀 - Powered by Nuxt 4</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-header nav {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.app-header nav a {
  text-decoration: none;
  color: white;
  padding: 10px 24px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s;
}

.app-header nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.app-header nav a.router-link-active {
  background: rgba(255, 255, 255, 0.3);
}

.app-main {
  flex: 1;
  padding: 24px;
  background: #f5f7fa;
}

.app-footer {
  padding: 16px;
  text-align: center;
  background: #333;
  color: #aaa;
  font-size: 14px;
}
</style>
