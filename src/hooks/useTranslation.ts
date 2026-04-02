import { useLanguage } from "./useLanguage";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

const translations = {
  pt,
  en,
};

export function useTranslation() {
  const { language } = useLanguage();

  function t(path: string) {
    const keys = path.split(".");
    let value: any = translations[language.code as "pt" | "en"];

    for (const key of keys) {
      value = value?.[key];
    }

    return value || path;
  }

  return { t };
}