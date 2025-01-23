import type React from "react"
import { CheckCircle2, XCircle } from "lucide-react"
import type { FeedbackState } from "../types"

interface FeedbackProps {
  feedback: FeedbackState
}

const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  if (!feedback.show) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-4 flex items-center justify-between ${
        feedback.isCorrect ? "bg-green-50" : "bg-red-50"
      }`}
    >
      <div className="flex items-center gap-3">
        {feedback.isCorrect ? (
          <CheckCircle2 className="w-6 h-6 text-green-600" />
        ) : (
          <XCircle className="w-6 h-6 text-red-600" />
        )}
        <div>
          <h3 className="font-medium">{feedback.isCorrect ? "Brava!" : "Not quite right"}</h3>
          <p className="text-sm text-gray-600">{feedback.message}</p>
        </div>
      </div>
      <button className="px-6 py-2 bg-[#00BFB3] text-white rounded-full">Continue</button>
    </div>
  )
}

export default Feedback

