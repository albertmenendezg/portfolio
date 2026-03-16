"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {experience, personalInfo} from "@/data/portfolio";

export default function About() {
  const { t } = useLanguage();

  const experienceFrom = new Date(personalInfo.startWorking);
  const currentYear = new Date();
  const months = (currentYear.getFullYear() - experienceFrom.getFullYear()) * 12 + (currentYear.getMonth() - experienceFrom.getMonth());
  const yearsExperience = Math.floor((months / 12) * 2) / 2;

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          {t.about.title}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-gray-400 text-lg leading-relaxed text-justify">
              {t.about.summary}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t.about.summary2}
            </p>
            <div className="flex items-center text-gray-400 pt-4">
              <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
              <span>{t.hero.location}</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center"
              >
                <p className="text-3xl font-bold text-white">{yearsExperience}+</p>
                <p className="text-gray-400 text-sm">{t.about.yearsExperience}</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center"
              >
                <p className="text-3xl font-bold text-white">{experience.length}</p>
                <p className="text-gray-400 text-sm">{t.about.workExperience}</p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{t.about.whatIDo}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">{t.about.backend}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">{t.about.cloud}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">{t.about.containers}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">{t.about.cicd}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">{t.about.iac}</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
