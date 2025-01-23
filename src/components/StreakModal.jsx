"use client"

import { CheckIcon, Flame } from "lucide-react"
import React, { useState } from "react"

const StreakModal = ({ onClose }) => {
  const [selectedDays, setSelectedDays] = useState(["Mon", "Tue", "Wed", "Thur", "Fri"])

  // Toggle selected days
  const toggleDay = (day) => {
    setSelectedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] p-8 w-full max-w-md text-center">
        {/* Streak Icon */}
        <div className="mb-6 inline-flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-2 border-[#00BFB3] relative mb-2">
            <Flame className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-[#FFB800]" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-3xl font-semibold">1</span>
          </div>
          <h2 className="text-2xl font-semibold text-[#14142A] mb-1">Day Streak</h2>
          <p className="text-[#4E4B66]">You're doing great, Darlington!</p>
        </div>

        {/* Streak Calendar */}
        <div className="flex justify-between mb-12 max-w-sm mx-auto">
          {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <button
                onClick={() => toggleDay(day)}
                className={`w-8 h-8 flex items-center justify-center rounded-full mb-2 ${
                  selectedDays.includes(day) ? "bg-[#00BFB3] text-white" : "bg-[#EFF0F6] text-[#4E4B66]"
                }`}
              >
                {selectedDays.includes(day) && <CheckIcon className="w-4 h-4" />}
              </button>
              <span className="text-xs text-[#4E4B66]">{day}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#14142A] mb-4 text-left">Your Stats</h3>
          <div className="flex justify-between items-center border-b border-[#EFF0F6] py-4">
            <div className="text-center flex-1">
              <p className="text-sm text-[#4E4B66] mb-1">Days</p>
              <p className="text-xl font-semibold text-[#14142A]">1</p>
            </div>
            <div className="text-center flex-1 border-x border-[#EFF0F6]">
              <p className="text-sm text-[#4E4B66] mb-1">Lessons</p>
              <p className="text-xl font-semibold text-[#14142A]">1</p>
            </div>
            <div className="text-center flex-1 border-r border-[#EFF0F6]">
              <p className="text-sm text-[#4E4B66] mb-1">Quizzes</p>
              <p className="text-xl font-semibold text-[#14142A]">3</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-sm text-[#4E4B66] mb-1">Minutes</p>
              <p className="text-xl font-semibold text-[#14142A]">36</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-4 bg-[#00BFB3] text-white rounded-full text-lg font-medium hover:bg-[#00BFB3]/90 transition-colors">
          Take lesson
        </button>
      </div>
    </div>
  )
}

export default StreakModal

