"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            {t.footer.builtWith} {personalInfo.name}
            <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-1" />
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
