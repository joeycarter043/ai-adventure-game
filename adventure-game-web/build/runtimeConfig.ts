// build/runtimeConfig.ts
import type { NuxtConfig } from '@nuxt/schema'
import { useEnv } from './env'

export function createRuntimeConfig(): NuxtConfig['runtimeConfig'] {
  const { viteEnv, mode } = useEnv();

  return {
    // 这里的 Key 会被 NUXT_PUBLIC_ 开头的环境变量自动覆盖（如果存在）
    public: {
      apiBase: viteEnv.NUXT_PUBLIC_API_BASE,
      apiUpload: viteEnv.NUXT_PUBLIC_API_UPLOAD,
      fileBase: viteEnv.VITE_FILE_BASE_URL || '',
      appTitle: viteEnv.VITE_APP_TITLE || '',
      mode: mode
    }
  };
}