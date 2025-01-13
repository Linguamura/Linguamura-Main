export interface Lesson {
    id: string
    title: string
    description: string
    icon: string
    isCompleted?: boolean
  }
  
  export interface Chapter {
    id: string
    title: string
    progress: number
    lessons: Lesson[]
  }
  
  export interface UserStats {
    days: number
    lessons: number
    quizzes: number
    minutes: number
    coins: number
    streak: number
  }
  
  