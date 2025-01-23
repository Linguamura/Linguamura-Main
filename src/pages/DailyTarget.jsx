import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DailyTarget = () => {
  const navigate = useNavigate();
  const [selectedTarget, setSelectedTarget] = useState(null);

  const targets = ["5 mins", "10 mins", "30 mins", "50 mins", "60 mins"];

  // Handle target selection
  const handleTargetSelect = (target) => {
    setSelectedTarget(target);

    // Redirect to /dashboard/great-start after 1 second
    setTimeout(() => {
      navigate("/dashboard/great-start");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="text-gray-600 flex items-center space-x-2 hover:text-blue-600"
        >
          <span>&larr;</span> <span>Back</span>
        </button>
      </div>

      {/* Title */}
      <h1 className="text-[24px] font-semibold text-[#14142A] mb-6">
        Set a daily target to smash your learning goals
      </h1>

      {/* Target Buttons */}
      <div className="w-full max-w-md mx-auto grid gap-4">
        {targets.map((target, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }} // Hover effect
            whileTap={{ scale: 0.95 }} // Tap effect
          >
            <motion.button
              key={index}
              onClick={() => handleTargetSelect(target)}
              className={`w-full py-3 border border-[#D9DBE9] rounded-[55px] text-gray-700 text-lg focus:outline-none ${
                selectedTarget === target
                  ? "gradient text-white"
                  : "hover:bg-green-100 hover:text-green-600"
              }`}
              animate={{
                scale: selectedTarget === target ? [1, 1.1, 1] : 1, // Bounce animation
              }}
              transition={{
                duration: 0.5, // Animation duration
              }}
            >
              {target}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DailyTarget;