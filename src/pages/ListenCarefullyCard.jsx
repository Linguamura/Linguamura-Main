import React, { useState } from "react"
import { lessons } from "../data/lesson"
import LessonCard from "../components/LessonCard"

const ListenCarefullyCard = () => {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [progress, setProgress] = useState(0)

  const handleClose = () => {
    // Handle closing the lesson
    console.log("Closing lesson")
  }

  const handleComplete = () => {
    const nextProgress = ((currentLesson + 1) / lessons.length) * 100
    setProgress(nextProgress)

    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
    } else {
      // Handle course completion
      console.log("Course completed!")
    }
  }

  return (
    <main>
      <LessonCard
        lesson={lessons[currentLesson]}
        onClose={handleClose}
        onComplete={handleComplete}
        progress={progress}
      />
    </main>
  )
}

export default ListenCarefullyCard

