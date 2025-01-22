import React from "react";

const ChapterList = () => {
  const chapters = [
    {
      title: "Bonjour!",
      description: "Start with greetings and introductions.",
      icon: "🌍", // Placeholder for an actual image
    },
    {
      title: "Say Hello!",
      description: "Learn basic greetings and farewells.",
      icon: "👋", // Placeholder for an actual image
    },
    {
      title: "What's Your Name?",
      description: "Introduce yourself and ask for names.",
      icon: "🧑", // Placeholder for an actual image
    },
    {
      title: "Nice to Meet You",
      description: "Common phrases for initial conversations.",
      icon: "🤝", // Placeholder for an actual image
    },
    {
      title: "Chapter Review",
      description: "Test your knowledge to unlock the next chapter.",
      icon: "⭐", // Placeholder for an actual image
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Beginner</h1>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 text-blue-500">
              <span>🇫🇷</span>
              <span>French</span>
            </button>
          </div>
        </header>

        {/* Chapter Section */}
        <section className="mt-8">
          <div className="bg-teal-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-teal-600">
              Chapter 1: Foundations
            </h2>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-teal-500 h-full w-[1%] rounded-full"></div>
            </div>
          </div>

          <ul className="mt-4 space-y-4">
            {chapters.map((chapter, index) => (
              <li
                key={index}
                className="flex items-center bg-white shadow-md p-4 rounded-lg"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-xl">
                  {chapter.icon}
                </div>

                {/* Content */}
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-gray-600">{chapter.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-[20%] h-[20%] bg-[#ffc000] p-6">
      <h3 className="text-lg font-semibold">Start learning with a tutor</h3>
      <div className="sticky top-4 flex">
          <p className="text-sm text-gray-600 mt-2">
            Learn with certified tutors that fit your budget.
          </p>
          <button className=" bg-[#ffffff] text-[#ffc000] p-1 w-[40px] h-[35px] shadow-lg  border-b-4 border-black rounded-lg">
          →
          </button>
        </div>
      </aside>
    </div>
  );
};

export default ChapterList;
