"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { useTranslation } from "react-i18next";
import { GraduationCap } from "lucide-react";

const formatDate = (date: Date, locale: string) => {
  const formatted = new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const formatPeriod = (start: Date, end: Date | null, locale: string, presentLabel: string) => {
  const s = formatDate(start, locale);
  const e = end ? formatDate(end, locale) : presentLabel;
  return `${s} - ${e}`;
};

export default function Education() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          {t("education.title")}
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start mb-8 pl-16"
              >
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center z-10">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t(item.degreeKey)}
                      </h3>
                      <span className="text-gray-500 font-mono text-sm whitespace-nowrap">
                        {formatPeriod(item.startDate, item.endDate, locale, t("present"))}
                      </span>
                    </div>
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm">{item.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
