<template>
  <div class="test-container">
    <h1>API 实战测试 (Strapi v5)</h1>
    
    <div class="test-section">
      <h2>1. 文章列表 (GET /articles)</h2>
      <button @click="fetchArticles" :disabled="loading.articles">
        {{ loading.articles ? '加载中...' : '获取真实数据' }}
      </button>
      
      <div v-if="results.articles" class="results-box">
        <p>状态: <span class="status">Success: {{ results.articles.success }}</span></p>
        <ul v-if="results.articles.data">
          <li v-for="item in results.articles.data" :key="item.id">
            【ID: {{ item.id }}】{{ item.title }}
          </li>
        </ul>
      </div>
      <pre v-if="errors.articles" class="error">{{ errors.articles }}</pre>
    </div>

    <div class="test-section">
      <h2>2. 上传图片 (POST /upload)</h2>
      <div class="form">
        <input type="file" @change="handleFileChange" accept="image/*" />
        <button @click="handleUpload" :disabled="loading.upload || !selectedFile">
          {{ loading.upload ? '上传中...' : '上传到 Strapi' }}
        </button>
      </div>
      <div v-if="results.upload" class="results-box">
        <p>上传成功！文件地址：</p>
        <code>{{ results.upload[0]?.url }}</code>
      </div>
      <pre v-if="errors.upload" class="error">{{ errors.upload }}</pre>
    </div>

    <div class="config-info">
      <h3>当前连接配置</h3>
      <p>Base URL: <code>{{ config.public.apiBase }}</code></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ARTICLE_API } from '~/../api'

const { get, upload } = useApi()
const config = useRuntimeConfig()

// 状态管理
const loading = reactive({ articles: false, upload: false })
const results = reactive({ articles: null as any, upload: null as any })
const errors = reactive({ articles: '', upload: '' })

// 1. 获取文章列表逻辑
const fetchArticles = async () => {
  loading.articles = true
  errors.articles = ''
  try {
    // Strapi v5 需要 ?populate=* 来显示完整字段，通过 query 参数传入
    results.articles = await get(ARTICLE_API.LIST, { populate: '*' })
  } catch (e: any) {
    errors.articles = e.data?.error?.message || e.message || '请求失败'
  } finally {
    loading.articles = false
  }
}

// 2. 上传文件逻辑
const selectedFile = ref<File | null>(null)
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0]
  }
}

const handleUpload = async () => {
  if (!selectedFile.value) return
  loading.upload = true
  errors.upload = ''
  try {
    const formData = new FormData()
    // 注意：Strapi 的上传字段名必须叫 'files'
    formData.append('files', selectedFile.value)
    
    // 调用封装好的 upload 方法
    // Strapi 默认上传路径是 /upload (不带 /api，或者根据你的配置来)
    results.upload = await upload('/upload', formData)
    alert('上传成功！')
  } catch (e: any) {
    errors.upload = e.data?.error?.message || e.message || '上传失败'
  } finally {
    loading.upload = false
  }
}
</script>

<style scoped>
.test-container { max-width: 800px; margin: 0 auto; padding: 20px; font-family: sans-serif; }
.test-section { margin-bottom: 20px; padding: 15px; border: 1px solid #eee; border-radius: 10px; }
.results-box { margin-top: 15px; background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: left; }
.status { color: #2ecc71; font-weight: bold; }
.error { color: #e74c3c; background: #fdf2f2; padding: 10px; margin-top: 10px; font-size: 12px; }
button { cursor: pointer; padding: 8px 16px; background: #4a90e2; color: white; border: none; border-radius: 4px; }
button:disabled { background: #ccc; }
pre { white-space: pre-wrap; word-wrap: break-word; }
</style>