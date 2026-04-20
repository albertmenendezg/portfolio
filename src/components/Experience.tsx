"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { translations } from "@/data/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t, language } = useLanguage();
  const trans = translations[language];

  const getTranslation = (key: string): string => {
    const keys = key.split(".");
    let result: any = trans;
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  };

  const getDescription = (key: string): string[] => {
    const result = getTranslation(key);
    return Array.isArray(result) ? result : [];
  };

  const extractYears = (period: string) => {
    const match = period.match(/(\d{4})/g);
    return match ? match[0] : "";
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          {t.experience.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-400 text-center text-justify mb-12 max-w-2xl mx-auto"
        >
          {t.experience.description}
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

            {experience.map((job, index) => {
              const year = extractYears(job.period);
              const position = getTranslation(job.positionKey);

              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start mb-8 pl-16"
                >
                  <div className="absolute left-0 top-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center z-10">
                      <span className="text-white text-xs font-mono">{year}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-950 p-5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-colors">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {position}
                        </h3>
                        <span className="text-gray-500 font-mono text-sm whitespace-nowrap">{job.period}</span>
                      </div>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-3">{job.company}</p>
                      <ul className="space-y-1 mb-3">
                        {getDescription(job.descriptionKey).map((desc: string, idx: number) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                            <span className="text-emerald-600 dark:text-emerald-400 mr-2 mt-1">▹</span>
                            <span className="text-gray-700 dark:text-gray-300">{desc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech?.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-emerald-700 dark:text-emerald-400 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
