import React, { useState } from "react"

const MatchingPairs = ({ pairs, onComplete }) => {
  const [selectedPair, setSelectedPair] = useState(null)
  const [matchedPairs, setMatchedPairs] = useState([])
  const [attempts, setAttempts] = useState(0)

  const handleSelect = (word, type) => {
    if (!selectedPair) {
      setSelectedPair({ word, type })
    } else {
      if (selectedPair.type !== type) {
        const match = pairs.find(
          (pair) =>
            (pair.french === selectedPair.word && pair.english === word) ||
            (pair.english === selectedPair.word && pair.french === word),
        )

        if (match) {
          setMatchedPairs([...matchedPairs, match])
          if (matchedPairs.length + 1 === pairs.length) {
            onComplete(attempts + 1)
          }
        }
        setAttempts(attempts + 1)
      }
      setSelectedPair(null)
    }
  }

  const isMatched = (word) => {
    return matchedPairs.some((pair) => pair.french === word || pair.english === word)
  }

  const isSelected = (word) => {
    return selectedPair?.word === word
  }

  return (
    <div className="grid grid-cols-2 gap-8 w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        {pairs.map((pair) => (
          <button
            key={pair.french}
            onClick={() => !isMatched(pair.french) && handleSelect(pair.french, "french")}
            className={`w-full h-[54px] flex items-center justify-center p-4 rounded-[55px] circle-shadow hover:shadow-none text-left transition-all ${
              isMatched(pair.french)
                ? "bg-green-100 text-green-800"
                : isSelected(pair.french)
                  ? "bg-[#00BFB3] text-white"
                  : "bg-white border border-[#A0A3BD] text-[#00BFB3] hover:bg-[#00BFB3] hover:text-white"
            }`}
            disabled={isMatched(pair.french)}
          >
            {pair.french}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {pairs.map((pair) => (
          <button
            key={pair.english}
            onClick={() => !isMatched(pair.english) && handleSelect(pair.english, "english")}
            className={`w-full h-[54px] flex items-center justify-center p-4 rounded-[55px] circle-shadow hover:shadow-none text-left transition-all ${
              isMatched(pair.english)
                ? "bg-green-100 text-green-800"
                : isSelected(pair.english)
                  ? "bg-[#00BFB3] text-white"
                  : "bg-white border border-[#A0A3BD] text-[#00BFB3] hover:bg-[#00BFB3] hover:text-white"
            }`}
            disabled={isMatched(pair.english)}
          >
            {pair.english}
          </button>
        ))}
      </div>
    </div>
  )
}

export default MatchingPairs

