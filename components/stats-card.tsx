"use client"

import { Card } from "@/components/ui/card"
import { Flame } from 'lucide-react'
import { Button } from "./ui/button"
import { UserStats } from "@/types/lesson"

interface StatsCardProps {
  stats: UserStats
  onTakeLesson: () => void
}

export function StatsCard({ stats, onTakeLesson }: StatsCardProps) {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const activeDays = ['Mon', 'Tue', 'Wed'] // Example active days

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#04E2E2] text-white">
          <Flame className="h-8 w-8" />
          <span className="ml-1 text-2xl font-bold">{stats.streak}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Day Streak</h3>
          <p className="text-sm text-gray-600">You're doing great, Darlington!</p>
        </div>
      </div>

      <div className="mb-6 flex justify-between">
        {weekDays.map((day) => (
          <div
            key={day}
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              activeDays.includes(day)
                ? "bg-[#04E2E2] text-white"
                : "bg-gray-100"
            }`}
          >
            {activeDays.includes(day) ? "✓" : day[0]}
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h4 className="mb-2 text-sm font-medium">Your Stats</h4>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-semibold">{stats.days}</div>
            <div className="text-xs text-gray-600">Days</div>
          </div>
          <div>
            <div className="font-semibold">{stats.lessons}</div>
            <div className="text-xs text-gray-600">Lessons</div>
          </div>
          <div>
            <div className="font-semibold">{stats.quizzes}</div>
            <div className="text-xs text-gray-600">Quizzes</div>
          </div>
          <div>
            <div className="font-semibold">{stats.minutes}</div>
            <div className="text-xs text-gray-600">Minutes</div>
          </div>
        </div>
      </div>

      <Button 
        className="w-full bg-[#04E2E2] hover:bg-[#00BBBB]"
        onClick={onTakeLesson}
      >
        Take lesson
      </Button>
    </Card>
  )
}

