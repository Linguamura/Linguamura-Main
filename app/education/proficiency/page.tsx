"use client"

import { BackButton } from "@/components/back-button"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const levels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
]

export default function ProficiencyPage() {
  const router = useRouter()

  const handleSelectLevel = (level: string) => {
    // In a real app, save this to state/backend
    router.push("/education/target")
  }

  return (
    <PageContainer className="flex flex-col items-center justify-center space-y-8">
      <BackButton />
      <h1 className="text-2xl font-bold text-white">
        What&apos;s your proficiency level?
      </h1>
      <div className="w-full space-y-4">
        {levels.map((level) => (
          <Button
            key={level.id}
            variant="secondary"
            className="w-full bg-white/90 py-6 text-lg hover:bg-white"
            onClick={() => handleSelectLevel(level.id)}
          >
            {level.label}
          </Button>
        ))}
      </div>
    </PageContainer>
  )
}

