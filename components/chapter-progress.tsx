"use client"

import { Chapter } from "@/types/lesson"
import { Progress } from "./ui/progress"

interface ChapterProgressProps {
  chapter: Chapter
  onClick: (lessonId: string) => void
}

export function ChapterProgress({ chapter, onClick }: ChapterProgressProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{chapter.title}</h3>
        <span className="text-sm text-gray-600">{chapter.progress}%</span>
      </div>
      <Progress value={chapter.progress} className="mb-4 bg-gray-100" />
      <div className="space-y-4">
        {chapter.lessons.map((lesson) => (
          <button
            key={lesson.id}
            className="flex w-full items-center gap-4 rounded-lg border p-4 hover:border-[#04E2E2]"
            onClick={() => onClick(lesson.id)}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              {lesson.icon}
            </div>
            <div className="text-left">
              <h4 className="font-medium">{lesson.title}</h4>
              <p className="text-sm text-gray-600">{lesson.description}</p>
            </div>
            {lesson.isCompleted && (
              <div className="ml-auto rounded-full bg-[#04E2E2] p-2 text-white">
                ✓
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

