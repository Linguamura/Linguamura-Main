import React from "react";
import LanguageCard from "./LanguageCard";

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
  return (
    <div className="text-center">
        <h2 className="text-lg font-semibold m-8">I want to learn...</h2>
         <div className="grid grid-cols-5 gap-4">
      {languages.map((language) => (
        <LanguageCard
          key={language.name}
          name={language.name}
          flag={language.flag}
        />
      ))}
    </div>
    </div>
   
  );
};

export default LanguageGrid;
