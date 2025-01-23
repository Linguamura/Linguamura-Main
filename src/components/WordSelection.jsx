import React, { useState } from "react"

const WordSelection = ({ question, words, correctOrder, onComplete }) => {
  const [selectedWords, setSelectedWords] = useState([])
  const [availableWords, setAvailableWords] = useState(words)

  const handleWordSelect = (word) => {
    setSelectedWords([...selectedWords, word])
    setAvailableWords(availableWords.filter((w) => w !== word))

    // Check if complete and correct
    if (selectedWords.length + 1 === correctOrder.length) {
      const isCorrect = [...selectedWords, word].join(" ") === correctOrder.join(" ")
      onComplete(isCorrect)
    }
  }

  const handleWordRemove = (word, index) => {
    const newSelected = selectedWords.filter((_, i) => i !== index)
    setSelectedWords(newSelected)
    setAvailableWords([...availableWords, word])
  }

  return (
    <div className="w-full max-w-[891px] mx-auto">
      <h2 className="text-[36px] font-bold text-[#14142A] text-center mb-6">Select the right words</h2>
      <p className="text-[18px] text-[#4E4B66] text-center mb-8">{question}</p>

      {/* Selected Words */}
      <div className="flex flex-wrap gap-2 min-h-[54px] mb-8 justify-center">
        {selectedWords.map((word, index) => (
          <button
            key={`selected-${index}`}
            onClick={() => handleWordRemove(word, index)}
            className="h-[54px] px-6 rounded-[55px] border border-[#A0A3BD] text-[#00BFB3] hover:bg-[#F7F7FC] transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Available Words */}
      <div className="flex flex-wrap gap-2 justify-center">
        {availableWords.map((word, index) => (
          <button
            key={`available-${index}`}
            onClick={() => handleWordSelect(word)}
            className="h-[54px] px-6 rounded-[55px] border border-[#A0A3BD] text-[#00BFB3] hover:bg-[#00BFB3] hover:text-white transition-colors circle-shadow hover:shadow-none"
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  )
}

export default WordSelection

