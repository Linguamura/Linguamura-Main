import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

const languages = [
  { code: "cn", name: "Chinese", flag: "🇨🇳" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "jp", name: "Japanese", flag: "🇯🇵" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "se", name: "Swedish", flag: "🇸🇪" },
  { code: "kr", name: "Korean", flag: "🇰🇷" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "pl", name: "Polish", flag: "🇵🇱" },
]

export default function EducationPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">I want to learn...</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {languages.map((lang) => (
          <Card key={lang.code} className="cursor-pointer hover:bg-gray-50">
            <CardContent className="flex items-center gap-3 p-4">
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-amber-50 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Discover schools that offer scholarships...
          </h2>
          <Button variant="outline">Go to Schools</Button>
        </div>
      </div>
    </div>
  )
}

