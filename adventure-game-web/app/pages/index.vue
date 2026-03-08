<template>
  <div class="home-page">
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('description') }}</p>
    
    <!-- 语言切换 -->
    <div class="locale-switcher">
      <span>语言 / Language: </span>
      <button 
        :class="{ active: locale === 'zh' }" 
        @click="setLocale('zh')"
      >中文</button>
      <button 
        :class="{ active: locale === 'en' }" 
        @click="setLocale('en')"
      >English</button>
    </div>
    
    <div class="features">
      <h2>项目功能</h2>
      <ul>
        <li>Nuxt 4 + Vue 3 + Vite</li>
        <li>国际化支持 (i18n)</li>
        <li>环境变量配置</li>
        <li>API 调用封装</li>
        <li>文件上传支持</li>
      </ul>
    </div>

    <div class="actions">
      <NuxtLink to="/test-api" class="btn">前往 API 测试页面</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n()
</script>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.home-page h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: #333;
}

.home-page p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 24px;
}

.locale-switcher {
  margin-bottom: 32px;
}

.locale-switcher span {
  margin-right: 12px;
  color: #666;
}

.locale-switcher button {
  padding: 8px 20px;
  margin: 0 4px;
  cursor: pointer;
  border: 2px solid #667eea;
  background: white;
  border-radius: 20px;
  color: #667eea;
  font-weight: 500;
  transition: all 0.2s;
}

.locale-switcher button:hover {
  background: #667eea;
  color: white;
}

.locale-switcher button.active {
  background: #667eea;
  color: white;
}

.features {
  background: white;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 32px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.features h2 {
  margin-bottom: 16px;
  color: #333;
}

.features ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.features li {
  padding: 12px;
  background: #f5f7fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.actions {
  margin-top: 24px;
}

.btn {
  display: inline-block;
  padding: 14px 36px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
</style>
