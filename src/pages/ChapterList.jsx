"use client";

import {
  LockIcon,
  ArrowLeft,
  ChevronRight,
  Target,
  Flame,
  ArrowRight,
  CheckIcon,
} from "lucide-react";
import React, { useState } from "react";

// Data for chapters and lessons
const chapters = [
  {
    title: "Chapter 1: Foundations",
    progress: 1,
    lessons: [
      {
        title: "Bonjour!",
        description: "Start with greetings and introductions.",
        image: "/images/homepage/tower.jpeg",
        locked: false,
      },
      {
        title: "Say Hello!",
        description: "Learn basic greetings and farewells.",
        image: "/images/homepage/man4.jpeg",
        locked: false,
      },
      {
        title: "What's Your Name?",
        description: "Introduce yourself and ask for names.",
        image: "/images/homepage/man4.jpeg",
        locked: true,
      },
      {
        title: "Nice to Meet You",
        description: "Common phrases for initial conversations.",
        image: "/images/homepage/man4.jpeg",
        locked: true,
      },
      {
        title: "Chapter Review",
        description: "Test your knowledge to unlock the next chapter.",
        image: null, // No image for the review
        locked: false,
      },
    ],
  },
  {
    title: "Chapter 2: Interactions",
    progress: 0,
    lessons: [
      {
        title: "Locked Lesson",
        description: "Complete previous chapter to unlock.",
        image: null,
        locked: true,
      },
    ],
  },
  {
    title: "Chapter 3: Sweet Home",
    progress: 0,
    lessons: [
      {
        title: "Locked Lesson",
        description: "Complete previous chapter to unlock.",
        image: null,
        locked: true,
      },
    ],
  },
  {
    title: "Chapter 4: Getting Around",
    progress: 0,
    lessons: [
      {
        title: "Locked Lesson",
        description: "Complete previous chapter to unlock.",
        image: null,
        locked: true,
      },
    ],
  },
];

export default function ChapterList() {
  const [showStreakModal, setShowStreakModal] = useState(false);

  // Toggle streak modal
  const toggleStreakModal = () => {
    setShowStreakModal(!showStreakModal);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Back Button */}
        <button className="mb-6">
          <ArrowLeft className="h-6 w-6 text-gray-600" />
        </button>

        {/* Level Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-4 bg-[#00BFB3]"></div>
          <span className="text-gray-600">Beginner</span>
        </div>

        {/* Chapters */}
        <div className="space-y-8">
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="space-y-4">
              {/* Chapter Header */}
              <div className="bg-[#00BFB3] rounded-xl p-4">
                <div className="flex justify-between items-center text-white">
                  <h2 className="text-xl font-medium">{chapter.title}</h2>
                  <span className="text-sm">{chapter.progress}%</span>
                </div>
                <div className="mt-2 bg-white/30 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-white/90 to-white h-full rounded-full"
                    style={{ width: `${chapter.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Lessons */}
              <div className="space-y-4">
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className={`flex items-center gap-4 p-2 ${
                      lesson.locked ? "opacity-50" : ""
                    }`}
                  >
                    {/* Lesson Image */}
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-full overflow-hidden ring-4 ring-[#D9D9D9] ring-offset-2 ${
                          lesson.locked ? "grayscale" : ""
                        }`}
                      >
                        {lesson.image ? (
                          <img
                            src={lesson.image}
                            alt={lesson.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <span className="text-yellow-500 text-2xl">★</span>
                          </div>
                        )}
                      </div>
                      {lesson.locked && (
                        <div className="absolute inset-0 bg-gray-500/20 flex items-center justify-center">
                          <LockIcon className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Lesson Content */}
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-gray-500">{lesson.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-80 p-6 border-l border-[#D9DBE9]">
        {/* Header Icons */}
        <div className="flex justify-center items-center gap-6">
          <button className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w40/fr.png"
              alt="French"
              className="w-6 h-4 object-cover"
            />
            <ChevronRight className="w-4 h-4" />
          </button>
          <button>
            <Target className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={toggleStreakModal}
            className="flex items-center gap-1"
          >
            <Flame className="w-6 h-6 text-gray-700" />
            <span className="text-sm">0</span>
          </button>
        </div>

        {/* Tutor Section */}
        <div className="bg-[#FFB800] text-white p-4 rounded-xl mt-6">
          <h3 className="font-medium mb-2">
            Start learning with a professional tutor
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm mb-4 w-[190px]">
              Learn with certified tutors that fit your budget
            </p>
            <button className="flex custom-shadow-2 bg-white items-center justify-center w-full hover:shadow-none max-w-[40px] rounded-[9px] h-[40px] border border-[#997300]">
              <ArrowRight className="w-6 text-[#FFC000] h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Streak Modal */}
      {showStreakModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#14142A]">Day Streak</h2>
              <button onClick={toggleStreakModal} className="text-gray-600">
                ✕
              </button>
            </div>

            {/* Streak Message */}
            <p className="text-[#4E4B66] mb-6">
              You’re doing great, Darlington!
            </p>

            {/* Streak Calendar */}
            <div className="flex justify-between mb-6">
              {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map(
                (day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#00BFB3] rounded-full text-white">
                      <CheckIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-[#4E4B66] mt-2">{day}</span>
                  </div>
                )
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#EFF0F6] p-4 rounded-lg">
                <p className="text-sm text-[#4E4B66]">Days</p>
                <p className="text-xl font-semibold text-[#14142A]">1</p>
              </div>
              <div className="bg-[#EFF0F6] p-4 rounded-lg">
                <p className="text-sm text-[#4E4B66]">Lessons</p>
                <p className="text-xl font-semibold text-[#14142A]">1</p>
              </div>
              <div className="bg-[#EFF0F6] p-4 rounded-lg">
                <p className="text-sm text-[#4E4B66]">Quizzes</p>
                <p className="text-xl font-semibold text-[#14142A]">3</p>
              </div>
              <div className="bg-[#EFF0F6] p-4 rounded-lg">
                <p className="text-sm text-[#4E4B66]">Minutes</p>
                <p className="text-xl font-semibold text-[#14142A]">36</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <button className="py-2 px-4 bg-[#00BFB3] text-white rounded-lg">
                Take lesson
              </button>
              <button className="py-2 px-4 bg-white border border-[#00BFB3] text-[#00BFB3] rounded-lg">
                Ask to edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}