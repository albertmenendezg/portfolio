"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
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
          <span className="text-emerald-400">02.</span> Experience
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-950 p-6 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-emerald-500/10 p-2 rounded-lg mr-4">
                    <Briefcase className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.position}
                    </h3>
                    <p className="text-emerald-400">{job.company}</p>
                  </div>
                </div>
                <span className="text-gray-500 font-mono text-sm">{job.period}</span>
              </div>
              <ul className="space-y-2 mb-4">
                {job.description.map((desc, idx) => (
                  <li key={idx} className="text-gray-400 flex items-start">
                    <span className="text-emerald-400 mr-2">▹</span>
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.tech?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-emerald-400 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
