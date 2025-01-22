import React from "react";

const ScholarshipBanner = () => {
  return (
    <div className="p-6 bg-[#f7deac]  flex gap-5">
      <h2 className="text-lg font-semibold">Discover schools that offer scholarships...</h2>
      <button className="px-11 py-2 mt-8 ml-48 bg-[#ffffff] text-black border-b-4 border-black rounded-full cursor-pointer shadow-lg font-medium hover:bg-gray-100">
        Go to Schools
      </button>
    </div>
  );
};

export default ScholarshipBanner;
