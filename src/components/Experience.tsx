"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { useTranslation } from "react-i18next";

const formatDate = (date: Date, locale: string) => {
  const formatted = new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

const formatPeriod = (start: Date, end: Date | null, locale: string, presentLabel: string) => {
  const s = formatDate(start, locale);
  const e = end ? formatDate(end, locale) : presentLabel;
  return `${s} - ${e}`;
};

export default function Experience() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

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
          {t("experience.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-400 text-center text-justify mb-12 max-w-4xl mx-auto"
        >
          {t("experience.description")}
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

            {experience.map((job, index) => (
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
                    <span className="text-white text-xs font-mono">{job.startDate.getFullYear()}</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-950 p-5 rounded-lg border border-gray-200 dark:border-gray-800"
                  >
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {t(job.positionKey)}
                      </h3>
                      <span className="text-gray-500 font-mono text-sm whitespace-nowrap">
                        {formatPeriod(job.startDate, job.endDate, locale, t("present"))}
                      </span>
                    </div>
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-4">{job.company}</p>

                    {job.projects.map((project, pIdx) => {
                      const tasks = t(project.tasksKey, { returnObjects: true }) as string[];

                      return (
                        <div key={pIdx} className={pIdx > 0 ? "mt-4 pt-4 border-t border-gray-200 dark:border-gray-800" : ""}>
                          <div className="flex items-center justify-between flex-wrap gap-1">
                            <h4 className="font-medium text-gray-800 dark:text-gray-200">
                              {t(project.nameKey)}
                            </h4>
                            <span className="text-gray-500 font-mono text-xs whitespace-nowrap">
                              {formatPeriod(project.startDate, project.endDate, locale, t("present"))}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 mt-1">
                            {t(project.descriptionKey)}
                          </p>
                          <ul className="space-y-1 mb-3">
                            {Array.isArray(tasks) && tasks.map((task: string, idx: number) => (
                              <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-baseline">
                                <span className="text-emerald-600 dark:text-emerald-400 mr-2">▹</span>
                                <span className="text-gray-700 dark:text-gray-300">{task}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech?.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-emerald-700 dark:text-emerald-400 text-xs rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
