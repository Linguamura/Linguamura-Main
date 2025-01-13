"use client"

import { ArrowLeft } from 'lucide-react'
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export function BackButton() {
  const router = useRouter()
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="absolute left-4 top-4"
      onClick={() => router.back()}
    >
      <ArrowLeft className="h-6 w-6" />
      <span className="sr-only">Go back</span>
    </Button>
  )
}

