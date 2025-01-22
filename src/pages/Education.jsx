import React from "react";
import Ecards from "./Ecards";
import ScholarshipBanner from "./ScholarshipBanner";
import Ecard from "./Ecards";

const App = () => {
  return (
    <div className="">
      <header className="bg-[#fff9e5] text-center mb-10 rounded-lg mx-4 md:mx-8 lg:mx-16 h-24 -mt-4">
        <h1 className="text-[#4e4b66] text-lg">No Ads yet...</h1>
      </header>
      <main className="flex-1">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <Ecards
              title="Languages"
              image="/images/homepage/Mask group.png"
              description="Plan your next trip or commute with our transportation features"
            />
            <Ecards
              title="Courses"
              image="/images/homepage/Course.png"
              description="Plan your next trip or commute with our transportation features"
            />
            <Ecard
              title="Music & Arts"
              image="/images/homepage/Music&Art.png"
              description="Plan your next trip or commute with our transportation features"
            />
          </div>
          <ScholarshipBanner />
        </div>
      </main>
    </div>
  );
};

export default App;
