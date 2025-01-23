import React from "react";

const ScholarshipBanner = () => {
  return (
    <div className="p-8 bg-[#f7deac] w-full rounded-2xl flex justify-between items-center">
      {/* Text Section */}
      <div className="">
      <h2 className="text-2xl font-bold text-[#14142A] max-w-xl">
        Discover schools that offer scholarships...
      </h2>
      </div>

      {/* Button Section */}
      <button className="px-8 py-3 bg-white text-[#4C3A00] border border-[#4C3A00] rounded-full font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
        Go to Schools
      </button>
    </div>
  );
};

export default ScholarshipBanner;