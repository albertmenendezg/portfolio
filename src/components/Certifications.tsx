"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Award } from "lucide-react";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          <span className="text-emerald-400">04.</span> {t.certifications.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-center mb-12 text-lg max-w-2xl mx-auto"
        >
          {t.certifications.description}
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-950 p-6 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors flex items-start space-x-4"
            >
              <div className="bg-emerald-500/10 p-3 rounded-lg shrink-0">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-gray-400">{cert.issuer}</p>
                <span className="text-emerald-400 text-sm">{cert.year}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
