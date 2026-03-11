"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { translations } from "@/data/translations";
import { Briefcase } from "lucide-react";
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
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          <span className="text-emerald-400">02.</span> {t.experience.title}
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-700 transform md:-translate-x-1/2" />
            
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
                  className={`relative flex items-start mb-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center z-10">
                      <Briefcase className="w-4 h-4 text-gray-900" />
                    </div>
                    <span className="text-emerald-400 text-sm font-mono mt-2 bg-gray-900 px-2 py-0.5 rounded">
                      {year}
                    </span>
                  </div>
                  
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}>
                    <div className="bg-gray-950 p-5 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {position}
                        </h3>
                        <span className="text-gray-500 font-mono text-sm whitespace-nowrap">{job.period}</span>
                      </div>
                      <p className="text-emerald-400 text-sm mb-3">{job.company}</p>
                      <ul className="space-y-1 mb-3">
                        {getDescription(job.descriptionKey).map((desc: string, idx: number) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start">
                            <span className="text-emerald-400 mr-2 mt-1">▹</span>
                            <span className="text-gray-300">{desc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech?.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-gray-800 text-emerald-400 text-xs rounded"
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
