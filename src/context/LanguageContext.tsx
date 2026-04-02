import { createContext } from "react";
import { languages } from "../data/languages";

type Language = (typeof languages)[0];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const LanguageContext = createContext({} as LanguageContextType);