"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Code2, Box, Database, Cloud, Wrench, TestTube2, 
  Puzzle, Terminal
} from "lucide-react";

const skillCategoriesKeys = [
  { key: "languages", items: skills.languages, color: "text-emerald-400", bg: "bg-emerald-500/10", icon: Code2 },
  { key: "frameworks", items: skills.frameworks, color: "text-blue-400", bg: "bg-blue-500/10", icon: Box },
  { key: "databases", items: skills.databases, color: "text-purple-400", bg: "bg-purple-500/10", icon: Database },
  { key: "devops", items: skills.devops, color: "text-orange-400", bg: "bg-orange-500/10", icon: Cloud },
  { key: "tools", items: skills.tools, color: "text-pink-400", bg: "bg-pink-500/10", icon: Wrench },
  { key: "testing", items: skills.testing, color: "text-yellow-400", bg: "bg-yellow-500/10", icon: TestTube2 },
  { key: "architectures", items: skills.architectures, color: "text-cyan-400", bg: "bg-cyan-500/10", icon: Puzzle },
  { key: "other", items: skills.other, color: "text-red-400", bg: "bg-red-500/10", icon: Terminal },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t.skills.title}
        </motion.h2>
        
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
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 p-5 rounded-lg border border-gray-800"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Icon className={`w-5 h-5 ${category.color} mr-2`} />
                  {t.skills[category.key as keyof typeof t.skills]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
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
