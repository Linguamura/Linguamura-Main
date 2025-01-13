"use client"

import { BackButton } from "@/components/back-button"
import { PageContainer } from "@/components/page-container"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Check } from 'lucide-react'
import { useRouter } from "next/navigation"
import { useState } from "react"

const days = [
  { id: "mon", label: "Mon" },
  { id: "tue", label: "Tue" },
  { id: "wed", label: "Wed" },
  { id: "thu", label: "Thu" },
  { id: "fri", label: "Fri" },
  { id: "sat", label: "Sat" },
  { id: "sun", label: "Sun" },
]

const hours = Array.from({ length: 24 }, (_, i) => ({
  value: i.toString().padStart(2, "0"),
  label: i.toString().padStart(2, "0"),
}))

const minutes = Array.from({ length: 60 }, (_, i) => ({
  value: i.toString().padStart(2, "0"),
  label: i.toString().padStart(2, "0"),
}))

export default function StudyPlanPage() {
  const router = useRouter()
  const [selectedDays, setSelectedDays] = useState<string[]>(["mon", "tue", "wed"])
  const [reminders, setReminders] = useState(true)

  return (
    <PageContainer className="space-y-8">
      <BackButton />
      <div className="rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-8 text-2xl font-bold">Start Study Plan</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-sm font-medium text-gray-600">
              Select the days of the week you want to learn
            </h2>
            <div className="flex justify-between">
              {days.map((day) => (
                <button
                  key={day.id}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                    selectedDays.includes(day.id)
                      ? "border-[#04E2E2] bg-[#04E2E2] text-white"
                      : "border-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedDays((prev) =>
                      prev.includes(day.id)
                        ? prev.filter((d) => d !== day.id)
                        : [...prev, day.id]
                    )
                  }}
                >
                  {selectedDays.includes(day.id) ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    day.label
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-medium text-gray-600">
              Select time you want to learn
            </h2>
            <div className="flex gap-4">
              <Select defaultValue="10">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour.value} value={hour.value}>
                      {hour.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="00">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {minutes.map((minute) => (
                    <SelectItem key={minute.value} value={minute.value}>
                      {minute.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-medium">Set a reminder</h2>
              <p className="text-sm text-gray-600">
                Let&apos;s notify you when it&apos;s time to study.
              </p>
            </div>
            <Switch
              checked={reminders}
              onCheckedChange={setReminders}
              className="data-[state=checked]:bg-[#04E2E2]"
            />
          </div>
        </div>
      </div>

      <Button
        className="w-full bg-[#04E2E2] py-6 text-lg hover:bg-[#00BBBB]"
        onClick={() => router.push("/education/lessons")}
      >
        Continue
      </Button>
    </PageContainer>
  )
}

