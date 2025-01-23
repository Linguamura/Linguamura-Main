import React, { useState } from "react"
import { X, PlayCircle } from "lucide-react"
import AudioPlayer from "./AudioPlayer"
import Toast from "./Toast"
import MatchingPairs from "./MatchingPairs"
import WordSelection from "./WordSelection"
import LessonComplete from "./LessonComplete"
import StreakModal from "./StreakModal"
import { useNavigate } from "react-router-dom"

const LessonCard = ({ lesson, onClose, onComplete, progress }) => {
  const [toast, setToast] = useState({
    isVisible: false,
    isSuccess: false,
    message: "",
  })
  const [currentStage, setCurrentStage] = useState("lesson") // 'lesson', 'words', 'complete', 'streak'
  const [showComplete, setShowComplete] = useState(false)
  const [showStreak, setShowStreak] = useState(false)
  const navigate = useNavigate()

  const handleAnswer = (answer) => {
    const isCorrect = answer === lesson.correctAnswer
    setToast({
      isVisible: true,
      isSuccess: isCorrect,
      message: isCorrect ? "Brava!" : "Not quite right",
    })

    if (isCorrect) {
      setTimeout(() => {
        setCurrentStage("words")
      }, 1500)
    }
  }

  const handleMatchingComplete = (attempts) => {
    setToast({
      isVisible: true,
      isSuccess: true,
      message: `Brava! Completed in ${attempts} attempts`,
    })
    setTimeout(() => {
      setCurrentStage("words")
    }, 1500)
  }

  const handleWordSelectionComplete = (isCorrect) => {
    setToast({
      isVisible: true,
      isSuccess: isCorrect,
      message: isCorrect ? "Brava!" : "Not quite right",
    })
    if (isCorrect) {
      setTimeout(() => {
        setShowComplete(true)
      }, 1500)
    }
  }

  const handleContinue = () => {
    setShowComplete(false)
    setShowStreak(true)
  }

  const handleStreakClose = () => {
    setShowStreak(false)
    onComplete()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <X className="w-6 h-6" />
      </button>

      {/* Progress Bar */}
      <div className="w-full max-w-[832px] h-[30px] flex items-center justify-center border-[0.56px] border-[#D9DBE9] p-2">
        <div className="w-full h-[12px] bg-[#D9DBE9] rounded-[20.29px]">
          <div
            className="h-full gradient rounded-[20.29px] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h1 className="text-[36px] font-bold text-[#14142A] mt-6">{lesson.title}</h1>
      <p className="text-[#4E4B66] text-[18px] mt-1">{lesson.subtitle}</p>

      {currentStage === "lesson" && lesson.type !== "match" && (
        <>
          <div className="mt-6 w-[226px] rounded-[20px] h-[226px] relative">
            <img
              src={lesson.image || "/placeholder.svg"}
              alt="Lesson"
              className="rounded-[20px] h-full w-full object-cover"
            />
            {lesson.audio && (
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-[#00BFB3] transition-colors">
                <img src="/images/basil_play-solid.svg" alt="" className="" />
              </button>
            )}
          </div>

          {lesson.audio && (
            <div className="mt-4">
              <AudioPlayer src={lesson.audio} />
            </div>
          )}

          <div className="mt-6 text-center">
            <h2 className="text-[14px] font-normal text-[#4E4B66]">FRENCH</h2>
            <p className="text-[24px] text-[#14142A] font-bold">{lesson.french}</p>
            <h2 className="text-[14px] font-normal text-[#4E4B66]">ENGLISH</h2>
            <p className="text-[18px] text-[#14142A] font-medium">{lesson.english}</p>
          </div>

          {lesson.sentence && (
            <div className="mt-6 w-full max-w-[891px] h-[108px] bg-[#F7F7FC] p-4 rounded-lg">
              <p className="text-[#4E4B66] text-sm">Sentence Usage</p>
              <p className="text-[#14142A] text-[24px]">{lesson.sentence}</p>
            </div>
          )}

          {lesson.options && (
            <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-lg">
              {lesson.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="px-6 py-3 border-2 circle-shadow hover:shadow-none border-[#A0A3BD] text-[#00BFB3] rounded-full hover:bg-[#00BFB3] hover:text-white transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {!lesson.options && (
            <button
              onClick={() => onComplete()}
              className="mt-6 max-w-[354px] w-full h-[54px] px-6 py-3 gradient custom-shadow hover:shadow-none text-white font-medium rounded-full shadow hover:bg-[#00BFB3]/90 transition-colors"
            >
              Continue
            </button>
          )}
        </>
      )}

      {lesson.type === "match" && (
        <div className="mt-8 w-full">
          <MatchingPairs pairs={lesson.pairs} onComplete={handleMatchingComplete} />
        </div>
      )}

      {currentStage === "words" && (
        <WordSelection
          question="Do you have a cat?"
          words={["Tu", "as", "un", "chat", "?"]}
          correctOrder={["Tu", "as", "un", "chat", "?"]}
          onComplete={handleWordSelectionComplete}
        />
      )}

      {showComplete && <LessonComplete points={100} coins={10} onContinue={handleContinue} />}

      {showStreak && <StreakModal streak={1} activeDays={["Mon"]} onClose={handleStreakClose} />}

      <Toast
        isVisible={toast.isVisible}
        isSuccess={toast.isSuccess}
        message={toast.message}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </div>
  )
}

export default LessonCard

