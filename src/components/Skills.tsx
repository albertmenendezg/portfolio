"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/data/portfolio";
import { useTranslation } from "react-i18next";
import {
  Code2, Box, Database, Cloud, Wrench, TestTube2,
  Sparkles, Server, Shield, Puzzle,
  Network, Building2
} from "lucide-react";

const skillCategoriesKeys = [
  { key: "languages", items: skills.languages, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10", icon: Code2 },
  { key: "frameworks", items: skills.frameworks, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10", icon: Box },
  { key: "ai", items: skills.ai, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-500/10", icon: Sparkles },
  { key: "devops", items: skills.devops, color: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10", icon: Cloud },
  { key: "databases", items: skills.databases, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-500/10", icon: Database },
  { key: "testing", items: skills.testing, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-500/10", icon: TestTube2 },
  { key: "infrastructure", items: skills.infrastructure, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10", icon: Server },
  { key: "devTools", items: skills.devTools, color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-500/10", icon: Wrench },
  { key: "network", items: skills.network, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10", icon: Network },
  { key: "security", items: skills.security, color: "text-red-600 dark:text-red-400", bg: "bg-red-500/10", icon: Shield },
  { key: "designPatterns", items: skills.designPatterns, color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-500/10", icon: Puzzle },
  { key: "architecture", items: skills.architecture, color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-500/10", icon: Building2 },
];

export default function Skills() {
  const { t } = useTranslation();

  const experienceFrom = new Date(personalInfo.startWorking);
  const currentYear = new Date();
  const months = (currentYear.getFullYear() - experienceFrom.getFullYear()) * 12
    + (currentYear.getMonth() - experienceFrom.getMonth());
  const yearsExperience = Math.floor((months / 12) * 2) / 2;

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
                  {t("skills.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-400 text-justify text-lg mb-12 max-w-2xl mx-auto"
        >
          {t("skills.description", { years: yearsExperience })}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategoriesKeys.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.20 }}
                className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800 hover:cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Icon className={`w-5 h-5 ${category.color} mr-2`} />
                  {t(`skills.${category.key}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
