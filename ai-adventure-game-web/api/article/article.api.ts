export const ARTICLE_API = {
  LIST: '/articles',
  DETAIL: (id: string | number) => `/articles/${id}`,
} as const