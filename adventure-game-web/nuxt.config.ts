// https://nuxt.com/docs/api/configuration/nuxt-config
import { createRuntimeConfig } from './build/runtimeConfig'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

// 1. 开启 Nuxt 4 特性
  future: {
    compatibilityVersion: 4,
  },

  // 指定源码目录（Nuxt 4 使用 app/ 作为源码根目录）
  srcDir: 'app/',
  future: {
    compatibilityVersion: 4,
  },

  // ===========================================
  // 服务器配置
  // ===========================================
  server: {
    // 端口配置 - 从环境变量读取，默认为 4000
    port: parseInt(process.env.PORT || '4000', 10),
  },

  modules: ['@nuxtjs/i18n'],

  // 配置组件自动导入路径
  components: [
    '~/pages/home/components',
  ],

  // ===========================================
  // 运行时配置
  // 环境变量通过 runtimeConfig 暴露给客户端
  // ===========================================
  runtimeConfig: createRuntimeConfig(),

  // 3. i18n v10 配置
  i18n: {
    strategy: 'prefix_except_default', // SEO 友好方案
    defaultLocale: 'zh',
    locales: [
      { code: 'zh', file: 'zh.json', name: '简体中文' },
      { code: 'en', file: 'en.json', name: 'English' }
    ],
    // 注意：这里的 langDir 是相对于根目录的
    langDir: 'locales/',
    lazy: true,
  },

  // ===========================================
  // Vite 开发服务器配置
  // ===========================================
  vite: {
    server: {
      // 开发服务器端口
      port: parseInt(process.env.PORT || '4000', 10),
      // 自动打开浏览器
      open: false,
    },
  },
})
