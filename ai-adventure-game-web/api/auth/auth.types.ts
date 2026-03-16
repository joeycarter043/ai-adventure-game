export interface User {
  id: number
  username: string
  nickname: string
  email?: string
  avatar?: string
}

export interface LoginResponse {
  token: string
  user: User
}