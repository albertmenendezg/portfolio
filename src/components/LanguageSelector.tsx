"use client";

import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

type Language = {
  code: string,
  label: string
}

const languages:Language[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang: Language) => {
    localStorage.setItem("lang", lang.code);
    i18n.changeLanguage(lang.code);
  };

  return (
    <div className="relative flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400 ml-1" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChangeLanguage(lang)}
          className={`px-2 py-1 text-xs font-medium rounded cursor-pointer transition-colors ${
            i18n.language === lang.code
              ? "bg-emerald-500 text-gray-900"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
