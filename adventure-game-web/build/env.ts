import { loadEnv } from 'vite'

export function useEnv() {
  const mode = process.env.NODE_ENV || 'development'

  const viteEnv = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), '')
  }

  return {
    mode,
    viteEnv
  }
}