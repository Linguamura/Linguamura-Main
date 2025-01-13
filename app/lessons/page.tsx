"use client"

import { ChapterProgress } from "@/components/chapter-progress"
import { CoinsCard } from "@/components/coins-card"
import { LanguageCard } from "@/components/language-card"
import { PremiumModal } from "@/components/premium-modal"
import { StatsCard } from "@/components/stats-card"
import { Button } from "@/components/ui/button"
import { Chapter, UserStats } from "@/types/lesson"
import { useState } from "react"

const mockUserStats: UserStats = {
  days: 1,
  lessons: 1,
  quizzes: 3,
  minutes: 36,
  coins: 250,
  streak: 1,
}

const mockChapters: Chapter[] = [
  {
    id: "1",
    title: "Chapter 1: Foundations",
    progress: 75,
    lessons: [
      {
        id: "1-1",
        title: "Bonjour!",
        description: "Start with greetings and introductions.",
        icon: "👋",
        isCompleted: true,
      },
      {
        id: "1-2",
        title: "Say Hello!",
        description: "Learn basic greetings and farewells.",
        icon: "🗣️",
        isCompleted: true,
      },
      {
        id: "1-3",
        title: "What's Your Name?",
        description: "Introduce yourself and ask for names.",
        icon: "🤝",
      },
      {
        id: "1-4",
        title: "Nice to Meet You",
        description: "Common phrases for polite conversations.",
        icon: "😊",
      },
    ],
  },
  {
    id: "2",
    title: "Chapter 2: Interactions",
    progress: 0,
    lessons: [
      // Add more lessons here
    ],
  },
]

export default function LessonsPage() {
  const [showPremium, setShowPremium] = useState(false)
  const [currentStats, setCurrentStats] = useState(mockUserStats)

  const handleTakeLesson = (lessonId: string) => {
    // In a real app, this would navigate to the lesson
    console.log("Starting lesson:", lessonId)
  }

  const handleBuyCoins = () => {
    setShowPremium(true)
  }

  const handleUpgradePremium = () => {
    setShowPremium(false)
    // In a real app, this would handle the premium upgrade
  }

  return (
    <div className="container mx-auto grid gap-8 p-6 lg:grid-cols-[1fr_300px]">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">French - Beginner</h1>
          <Button
            variant="outline"
            className="border-[#04E2E2] bg-amber-50 font-medium text-gray-700"
          >
            Start learning with a professional tutor
            <span className="ml-2">📚</span>
          </Button>
        </div>

        {mockChapters.map((chapter) => (
          <ChapterProgress
            key={chapter.id}
            chapter={chapter}
            onClick={handleTakeLesson}
          />
        ))}
      </div>

      <div className="space-y-6">
        <StatsCard stats={currentStats} onTakeLesson={() => handleTakeLesson("next")} />
        <CoinsCard coins={currentStats.coins} onBuyMore={handleBuyCoins} />
        <LanguageCard
          language="French"
          flag="/flags/fr.svg"
          onAddLanguage={() => setShowPremium(true)}
        />
      </div>

      <PremiumModal
        isOpen={showPremium}
        onClose={() => setShowPremium(false)}
        onUpgrade={handleUpgradePremium}
      />
    </div>
  )
}

