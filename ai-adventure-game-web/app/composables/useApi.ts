import type { ApiResponse } from '~/api'

export const useApi = () => {
  const config = useRuntimeConfig()
  
  // 建议：使用 useCookie 时指定 watch: true，确保 Token 变化时响应式更新
  const token = useCookie('auth_token', { watch: true })

  /**
   * 核心 Fetch 封装
   */
  const useApiFetch = async <T = any>(
    url: string,
    options: any = {}
  ): Promise<ApiResponse<T>> => {
    
    // 逻辑：根据 isUpload 标志位切换不同的 BaseURL
    const baseURL = options.isUpload ? config.public.apiUpload : config.public.apiBase

    // 打印一下，看看这里输出的是不是 http://你的IP:2080/api
    console.log('Fetching from:', baseURL + url)

    // 使用 Nuxt 3/4 推荐的 $fetch (支持全栈环境)
    return await $fetch<ApiResponse<T>>(url, {
      baseURL: baseURL,
      method: options.method || 'GET',
      
      // 注意：不要手动 JSON.stringify，由 $fetch 自动处理
      body: options.body,
      query: options.query,
      
      headers: {
        'Accept': 'application/json',
        // 动态注入 Header：不仅限于 Bearer，可以根据未来需求随时增减
        ...(token.value ? { 
          'Authorization': `Bearer ${token.value}`,
          // 这里可以预留未来正式后端需要的“奇怪”Header
          // 'X-Api-Version': '1.0.0' 
        } : {}),
        ...options.headers,
      },

      // 响应拦截器
      onResponse({ response }) {
        // 适配器：如果后端没有返回 success 字段（如 Strapi），根据状态码自动补齐
        if (response._data && typeof response._data === 'object') {
          if (response._data.success === undefined) {
            response._data.success = response.status >= 200 && response.status < 300
          }
        }
      },

      onResponseError({ response }) {
        // 生产级错误日志，方便在 Windows 浏览器控制台和 Debian 服务端日志中同时查看
        console.error(`[API Error] [${response.status}] URL: ${url}`, response._data)
      }
    })
  }

  return {
    useApiFetch,
    // 快捷方法封装
    get: <T = any>(url: string, query?: any, headers?: any) => 
      useApiFetch<T>(url, { method: 'GET', query, headers }),
      
    post: <T = any>(url: string, body?: any, headers?: any) => 
      useApiFetch<T>(url, { method: 'POST', body, headers }),
      
    put: <T = any>(url: string, body?: any, headers?: any) => 
      useApiFetch<T>(url, { method: 'PUT', body, headers }),
      
    del: <T = any>(url: string, headers?: any) => 
      useApiFetch<T>(url, { method: 'DELETE', headers }),
      
    // 上传方法：会自动处理 FormData，不需要手动设 Content-Type
    upload: <T = any>(url: string, formData: FormData, headers?: any) => 
      useApiFetch<T>(url, { method: 'POST', body: formData, headers, isUpload: true })
  }
}