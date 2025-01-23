import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LanguageCard from "./LanguageCard";
import { ArrowLeft } from "lucide-react";

const languages = [
  { name: "Chinese", flag: "https://flagcdn.com/w40/cn.png" },
  { name: "English", flag: "https://flagcdn.com/w40/us.png" },
  { name: "French", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Japanese", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "Italian", flag: "https://flagcdn.com/w40/it.png" },
  { name: "German", flag: "https://flagcdn.com/w40/de.png" },
  { name: "Spanish", flag: "https://flagcdn.com/w40/es.png" },
  { name: "Russian", flag: "https://flagcdn.com/w40/ru.png" },
  { name: "Swahili", flag: "https://flagcdn.com/w40/ke.png" },
  { name: "Latin", flag: "https://via.placeholder.com/40" },
  { name: "Hebrew", flag: "https://flagcdn.com/w40/il.png" },
  { name: "Portuguese", flag: "https://flagcdn.com/w40/pt.png" },
  { name: "Korean", flag: "https://flagcdn.com/w40/kr.png" },
  { name: "Polish", flag: "https://flagcdn.com/w40/pl.png" },
  { name: "Swedish", flag: "https://flagcdn.com/w40/se.png" },
  { name: "Haitian Creole", flag: "https://flagcdn.com/w40/ht.png" },
  { name: "Hungarian", flag: "https://flagcdn.com/w40/hu.png" },
  { name: "Irish", flag: "https://flagcdn.com/w40/ie.png" },
  { name: "Yiddish", flag: "https://via.placeholder.com/40" },
  { name: "Hindi", flag: "https://flagcdn.com/w40/in.png" },
];

const LanguageGrid = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger effect for each child
        delayChildren: 0.2, // Delay before animation starts
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);

    // Redirect to ProficiencyPage after 1.5 seconds
    setTimeout(() => {
      navigate(`/dashboard/proficiency?language=${encodeURIComponent(language)}`);
    }, 1500);
  };

  return (
    <div className="p-6">
      {/* Centered Container with Max Width */}
      <div className="max-w-[813px] mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)} // Go back to the previous page
          className="mb-6 px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-[24px] text-[#14142A] font-bold text-center mb-8">
          I want to learn...
        </h2>

        {/* Language Grid with Stagger Animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {languages.map((language) => (
            <motion.div key={language.name} variants={childVariants}>
              <LanguageCard
                name={language.name}
                flag={language.flag}
                isSelected={selectedLanguage === language.name}
                onClick={() => handleLanguageSelect(language.name)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LanguageGrid;