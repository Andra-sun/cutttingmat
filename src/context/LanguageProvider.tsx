import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { languages } from "../data/languages";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("lang");
    const found = languages.find((l) => l.code === saved);
    return found || languages[0];
  });

  const changeLanguage = (lang: (typeof languages)[0]) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang.code);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}