// 游戏相关类型定义

export interface Role {
  id: string
  name: string
  description: string
  icon: string
  selectedIcon: string
}

export interface Clue {
  id: string
  content: string
  icon?: string
  acquiredAt?: Date
}

export interface Tool {
  id: string
  name: string
  icon: string
  description?: string
}

export interface StoryNode {
  id: number
  title: string
  completed: boolean
  active: boolean
}

export interface Task {
  id: string
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'completed'
}

export interface GameProgress {
  completedTasks: number
  totalTasks: number
  percentage: number
}

export interface GameTime {
  usedMinutes: number
  remainingMinutes: number
  totalMinutes: number
}
