"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { MapPin } from "lucide-react";

export default function About() {
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
          <span className="text-emerald-400">01.</span> About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Passionate about building robust and scalable systems. I enjoy solving complex problems 
              and working with modern technologies to deliver high-quality solutions.
            </p>
            <div className="flex items-center text-gray-400 pt-4">
              <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
              <span>{personalInfo.location}</span>
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
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center"
              >
                <p className="text-3xl font-bold text-white">4+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center"
              >
                <p className="text-3xl font-bold text-white">3</p>
                <p className="text-gray-400 text-sm">Projects involved</p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-4">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">Backend Development with Java, Go & Node.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">Cloud Architecture on AWS & GCP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">Containerization & Orchestration (Docker, K8s)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">CI/CD Pipeline Design & Implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">▹</span>
                  <span className="text-gray-400">Infrastructure as Code with Terraform</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
