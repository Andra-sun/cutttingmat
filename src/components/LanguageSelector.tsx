import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { languages } from "../data/languages";
import { useLanguage } from "../hooks/useLanguage";

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="absolute top-0 left-0 mt-20 ml-4 inline-block z-50" ref={dropdownRef}>
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 px-4 py-2.5 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
      >
        <img 
          src={language.flag} 
          className="w-5 rotate-90" 
          alt={language.label}
        />
        <span className="text-sm font-medium text-gray-700">
          {language.code.toUpperCase()}
        </span>
        <motion.svg 
          className="w-4 h-4 text-gray-500"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="py-1">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => {
                    setLanguage(lang);
                    setOpen(false);
                  }}
                  whileHover={{ x: 4, backgroundColor: "rgba(0,0,0,0.02)" }}
                  className={`
                    flex items-center gap-3 w-full px-4 py-2.5 
                    transition-colors duration-150
                    ${language.code === lang.code 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-700'
                    }
                  `}
                >
                  <img 
                    src={lang.flag} 
                    className="w-6 rotate-90" 
                    alt={lang.label}
                  />
                  <span className="text-sm font-medium flex-1 text-left">{lang.label}</span>
                  {language.code === lang.code && (
                    <motion.svg 
                      className="w-4 h-4 text-blue-600"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 10 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}