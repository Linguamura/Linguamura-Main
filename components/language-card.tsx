import { Card } from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from "next/image"

interface LanguageCardProps {
  language: string
  flag: string
  onAddLanguage: () => void
}

export function LanguageCard({ language, flag, onAddLanguage }: LanguageCardProps) {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center gap-2">
        <Image
          src={flag}
          alt={language}
          width={24}
          height={24}
          className="rounded-sm"
        />
        <p className="text-lg">You are learning {language}</p>
      </div>
      <Button 
        variant="outline" 
        className="w-full border-[#04E2E2] text-[#04E2E2] hover:bg-[#04E2E2] hover:text-white"
        onClick={onAddLanguage}
      >
        + Add another language
      </Button>
    </Card>
  )
}

