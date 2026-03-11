"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { t } = useLanguage();
  // const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  //
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors }
  // } = useForm<FormData>();
  //
  // const onSubmit = async (data: FormData) => {
  //   setStatus("loading");
  //
  //   try {
  //     const response = await fetch(process.env.NEXT_PUBLIC_EMAIL_URL!, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(data)
  //     });
  //
  //     if (response.ok) {
  //       setStatus("success");
  //       reset();
  //     } else {
  //       setStatus("error");
  //     }
  //   } catch {
  //     setStatus("error");
  //   }
  // };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          <span className="text-emerald-400">05.</span> {t.contact.title}
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-gray-400 text-center mb-12 text-lg">
            {t.contact.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors text-center"
            >
              <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">{t.contact.email}</p>
              <p className="text-white text-sm break-all">{personalInfo.email}</p>
            </motion.a>
            
            <motion.a
              href={`tel:${personalInfo.phone}`}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors text-center"
            >
              <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">{t.contact.phone}</p>
              <p className="text-white">{personalInfo.phone}</p>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors text-center"
            >
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">{t.contact.location}</p>
              <p className="text-white">{t.hero.location}</p>
            </motion.div>
          </div>
          
        {/*  <motion.form */}
        {/*    onSubmit={handleSubmit(onSubmit)} */}
        {/*    className="space-y-4"*/}
        {/*    initial={{ opacity: 0, y: 20 }}*/}
        {/*    whileInView={{ opacity: 1, y: 0 }}*/}
        {/*    viewport={{ once: true }}*/}
        {/*    transition={{ duration: 0.5, delay: 0.2 }}*/}
        {/*  >*/}
        {/*    <div className="grid md:grid-cols-2 gap-4">*/}
        {/*      <div>*/}
        {/*        <input*/}
        {/*          {...register("name", { */}
        {/*            required: "Name is required",*/}
        {/*            pattern: {*/}
        {/*              value: /^[a-zA-Z\s]+$/,*/}
        {/*              message: "Name can only include alphabetic characters"*/}
        {/*            }*/}
        {/*          })}*/}
        {/*          type="text"*/}
        {/*          placeholder="Name"*/}
        {/*          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"*/}
        {/*        />*/}
        {/*        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}*/}
        {/*      </div>*/}
        {/*      <div>*/}
        {/*        <input*/}
        {/*          {...register("email", { */}
        {/*            required: "Email is required",*/}
        {/*            pattern: {*/}
        {/*              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,*/}
        {/*              message: "Invalid email address"*/}
        {/*            }*/}
        {/*          })}*/}
        {/*          type="email"*/}
        {/*          placeholder="Email"*/}
        {/*          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"*/}
        {/*        />*/}
        {/*        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <input*/}
        {/*        {...register("subject", { required: "Subject is required" })}*/}
        {/*        type="text"*/}
        {/*        placeholder="Subject"*/}
        {/*        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"*/}
        {/*      />*/}
        {/*      {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <textarea*/}
        {/*        {...register("message", { required: "Message is required" })}*/}
        {/*        placeholder="Message"*/}
        {/*        rows={5}*/}
        {/*        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 resize-none"*/}
        {/*      />*/}
        {/*      {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}*/}
        {/*    </div>*/}
        {/*    <motion.button*/}
        {/*      type="submit"*/}
        {/*      disabled={status === "loading" || status === "success"}*/}
        {/*      whileHover={{ scale: 1.01 }}*/}
        {/*      whileTap={{ scale: 0.99 }}*/}
        {/*      className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-600/50 disabled:cursor-not-allowed text-gray-900 font-semibold rounded-lg transition-colors flex items-center justify-center"*/}
        {/*    >*/}
        {/*      {status === "loading" ? (*/}
        {/*        <>*/}
        {/*          <Loader2 className="ml-2 w-4 h-4 animate-spin" />*/}
        {/*          Sending...*/}
        {/*        </>*/}
        {/*      ) : status === "success" ? (*/}
        {/*        <>*/}
        {/*          <CheckCircle className="ml-2 w-4 h-4" />*/}
        {/*          Sent!*/}
        {/*        </>*/}
        {/*      ) : (*/}
        {/*        <>*/}
        {/*          Send Message*/}
        {/*          <Send className="ml-2 w-4 h-4" />*/}
        {/*        </>*/}
        {/*      )}*/}
        {/*    </motion.button>*/}
        {/*    {status === "error" && (*/}
        {/*      <p className="text-red-400 text-center text-sm">*/}
        {/*        Failed to send message. Please try again.*/}
        {/*      </p>*/}
        {/*    )}*/}
        {/*  </motion.form>*/}
        </motion.div>
      </div>
    </section>
  );
}
