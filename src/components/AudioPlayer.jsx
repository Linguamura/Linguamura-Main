import React, { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <div className="flex items-center space-x-2">
      <button onClick={togglePlay} className="text-[#00BFB3] hover:text-[#00BFB3]/80 transition-colors">
        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
      </button>
      <div className="relative w-32 h-1 bg-gray-200 rounded-full">
        <div className="absolute top-0 left-0 h-full bg-[#00BFB3] rounded-full" style={{ width: `${progress}%` }} />
      </div>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
    </div>
  )
}

export default AudioPlayer

