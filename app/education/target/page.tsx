"use client"

import { BackButton } from "@/components/back-button"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const timeOptions = [
  { minutes: 5, label: "5 mins" },
  { minutes: 10, label: "10 mins" },
  { minutes: 30, label: "30 mins" },
  { minutes: 50, label: "50 mins" },
  { minutes: 60, label: "60 mins" },
]

export default function TargetPage() {
  const router = useRouter()

  const handleSelectTime = (minutes: number) => {
    // In a real app, save this to state/backend
    router.push("/education/welcome")
  }

  return (
    <PageContainer className="flex flex-col items-center justify-center space-y-8">
      <BackButton />
      <h1 className="text-2xl font-bold text-white">
        Set a daily target to smash your learning goals
      </h1>
      <div className="w-full space-y-4">
        {timeOptions.map((option) => (
          <Button
            key={option.minutes}
            variant="secondary"
            className="w-full bg-white/90 py-6 text-lg hover:bg-white"
            onClick={() => handleSelectTime(option.minutes)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </PageContainer>
  )
}

