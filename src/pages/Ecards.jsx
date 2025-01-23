import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Ecard = ({ title, image, description, link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#14142A] mb-2">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#4E4B66]">{description}</p>
          {/* Arrow Button */}
          <button onClick={handleClick} className="flex items-center justify-center w-[54px] h-[44px] bg-gradient-to-r from-[#04e2e2] to-[#00bbbb] text-white rounded-[10px] font-medium hover:opacity-90 transition-opacity custom-shadow hover:shadow-none">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ecard;