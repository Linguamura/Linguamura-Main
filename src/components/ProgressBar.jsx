import type React from "react"

interface ProgressBarProps {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-1.5 bg-gray-200 rounded-full">
      <div className="h-full bg-[#00BFB3] rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ProgressBar

