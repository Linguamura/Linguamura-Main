"use client"

import { BackButton } from "@/components/back-button"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { Target } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function WelcomePage() {
  const router = useRouter()

  return (
    <PageContainer className="flex flex-col items-center justify-center space-y-8 text-center">
      <BackButton />
      <h1 className="text-2xl font-bold text-white">
        You&apos;re off to a great start!
      </h1>
      <div className="rounded-full bg-white p-8">
        <Target className="h-24 w-24 text-[#04E2E2]" />
      </div>
      <p className="text-lg text-white">
        Learning French 30 min/day will make you a great speaker in no time.
      </p>
      <div className="w-full space-y-4">
        <Button
          className="w-full bg-white py-6 text-lg text-[#04E2E2] hover:bg-white/90"
          onClick={() => router.push("/education/study-plan")}
        >
          Start a Study Plan
        </Button>
        <Button
          variant="outline"
          className="w-full border-white py-6 text-lg text-white hover:bg-white/10"
          onClick={() => router.push("/education")}
        >
          Not now
        </Button>
      </div>
    </PageContainer>
  )
}

