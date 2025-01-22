import React from "react";

// eslint-disable-next-line react/prop-types
const LanguageCard = ({ name, flag }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow hover:shadow-lg">
      <img src={flag} alt={name} className="w-12 mb-2" />
      <p className="text-sm font-medium text-[#14142a]">{name}</p>
    </div>
  );
};

export default LanguageCard;
