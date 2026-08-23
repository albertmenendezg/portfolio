"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Certifications() {
  const { t } = useTranslation()

  const grouped = certifications.reduce<Record<string, typeof certifications>>(
    (acc, cert) => {
      ;(acc[cert.issuer] ??= []).push(cert)
      return acc
    },
    {},
  )

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          {t("certifications.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg max-w-2xl mx-auto"
        >
          {t("certifications.description")}
        </motion.p>

        {Object.entries(grouped).map(([issuer, certs]) => (
          <div key={issuer} className="mb-12 last:mb-0 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {issuer}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {certs.map((cert, index) => (
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
                  className="bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 transition-colors flex items-start space-x-4"
                >
                  <div className="shrink-0 flex items-center justify-center size-16">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                    <span className="text-emerald-600 dark:text-emerald-400 text-sm">
                      {cert.year}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
