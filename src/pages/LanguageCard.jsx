import React, { useState } from "react";
import { Check } from "lucide-react"; // Import the check icon

// eslint-disable-next-line react/prop-types
const LanguageCard = ({ name, flag, isSelected, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div
      className={`relative flex flex-col items-center cursor-pointer p-4 bg-white rounded-[16px] max-w-[137px] max-h-[126px] ${
        isPressed ? "custom-shadow-pressed" : "custom-shadow-normal"
      } transition-shadow`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Reset state if mouse leaves while pressed
      onClick={onClick} // Handle click to select the language
    >
      {/* Check Icon (Visible when selected) */}
      {isSelected && (
        <div className="absolute top-2 right-2 rounded-full p-1">
          <Check className="w-[24px] h-[24px] text-[#3D8C41]" />
        </div>
      )}

      {/* Flag Image */}
      <img src={flag} alt={name} className="w-12 h-12 mb-2 rounded-full" />

      {/* Language Name */}
      <p className="text-sm font-medium text-[#14142a]">{name}</p>
    </div>
  );
};

export default LanguageCard;