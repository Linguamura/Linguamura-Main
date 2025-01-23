import React from "react"
import Confetti from "react-confetti"
import useWindowSize from "react-use/lib/useWindowSize"

const LessonComplete = ({ points, coins, onContinue }) => {
  const { width, height } = useWindowSize()

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={200}
        colors={["#00BFB3", "#FFB800", "#4E4B66"]}
      />

      <div className="text-center">
        <div className="mb-8">
          <img src="/gif.gif" alt="Trophy" className="w-32 h-32 mx-auto" />
        </div>

        <h2 className="text-[36px] font-bold text-[#14142A] mb-2">Lesson Completed!</h2>
        <p className="text-[18px] text-[#4E4B66] mb-8">
          You have earned +{coins} Muracoins for completing this lesson!
        </p>

        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <p className="text-[14px] text-[#4E4B66]">Muracoins</p>
            <p className="text-[24px] font-bold text-[#14142A]">+{coins} 🪙</p>
          </div>
          <div className="text-center">
            <p className="text-[14px] text-[#4E4B66]">Score</p>
            <p className="text-[24px] font-bold text-[#14142A]">100% 🎯</p>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="max-w-[354px] w-full h-[54px] gradient custom-shadow hover:shadow-none text-white font-medium rounded-full transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default LessonComplete

