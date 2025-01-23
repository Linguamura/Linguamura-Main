import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProficiencyPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedLanguage = searchParams.get("language");
  const [selectedLevel, setSelectedLevel] = useState(null);

  const proficiencyLevels = ["Beginner", "Intermediate", "Advanced"];

  // Handle proficiency level selection
  const handleLevelSelect = (level) => {
    setSelectedLevel(level);

    // Redirect to /dashboard/daily-target after 1 second
    setTimeout(() => {
      navigate("/dashboard/daily-target");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-900 relative">
      {/* Back Button (Aligned to the Left) */}
      <button
        onClick={() => navigate(-1)} // Go back to the previous page
        className="absolute left-6 top-6 text-gray-400 flex items-center space-x-2 hover:text-blue-600"
      >
        <span>&larr;</span> <span>Back</span>
      </button>

      {/* Centered Content */}
      <div className="w-full max-w-md mx-auto mt-16">
        {/* Title */}
        <h1 className="text-[24px] text-[#14142A] font-bold text-center mb-8">
          What's your proficiency level in {selectedLanguage}?
        </h1>

        {/* Proficiency Levels */}
        <div className="space-y-4 w-full">
          {proficiencyLevels.map((level) => (
            <motion.div
              key={level}
              whileHover={{ scale: 1.05 }} // Hover effect
              whileTap={{ scale: 0.95 }} // Tap effect
            >
              <motion.button
                key={level}
                onClick={() => handleLevelSelect(level)}
                className={`w-full py-3 px-6 bg-white border border-gray-200 rounded-full text-[#14142A] font-medium focus:outline-none focus:ring-2 focus:ring-[#1AF0F0] transition-all ${
                  selectedLevel === level ? "bg-green-100 border-[#1AF0F0]" : ""
                }`}
                animate={{
                  x: selectedLevel === level ? [0, -10, 10, -10, 10, 0] : 0, // Shaky animation
                }}
                transition={{
                  duration: 0.5, // Animation duration
                }}
              >
                {level}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProficiencyPage;