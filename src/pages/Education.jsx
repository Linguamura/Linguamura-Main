import React from "react";
import Ecards from "./Ecards";
import ScholarshipBanner from "./ScholarshipBanner";

const Education = () => {
  return (
    <div className="w-full min-h-screen bg-white p-6">
      {/* Header Section */}
      <header className="bg-[#fff9e5] w-full rounded-2xl py-8 mb-8">
        <h1 className="text-[#4e4b66] text-lg font-semibold text-center">
          No Ads yet...
        </h1>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Ecards
          title="Languages"
          image="/images/homepage/Mask group.png"
          description="Plan your next trip or commute with our transportation features"
          link="/dashboard/language-grid"
        />
        <Ecards
          title="Courses"
          image="/images/homepage/Course.png"
          description="Plan your next trip or commute with our transportation features"
          link="#"
        />
        <Ecards
          title="Music & Arts"
          image="/images/homepage/Music&Art.png"
          description="Plan your next trip or commute with our transportation features"
          link="#"
        />
      </div>

      {/* Scholarship Banner Section */}
      <div className="bg-[#f7deac] rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <ScholarshipBanner />
      </div>
    </div>
  );
};

export default Education;