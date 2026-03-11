"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_LAMBDA_EMAIL_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          <span className="text-emerald-400">05.</span> Get In Touch
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-gray-400 text-center mb-12 text-lg">
            I am currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I will try my best to get back to you!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors text-center"
            >
              <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white text-sm break-all">{personalInfo.email}</p>
            </motion.a>
            
            <motion.a
              href={`tel:${personalInfo.phone}`}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors text-center"
            >
              <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="text-white">{personalInfo.phone}</p>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-400/50 transition-colors text-center"
            >
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Location</p>
              <p className="text-white">{personalInfo.location}</p>
            </motion.div>
          </div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 resize-none"
            />
            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-600/50 disabled:cursor-not-allowed text-gray-900 font-semibold rounded-lg transition-colors flex items-center justify-center"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle className="ml-2 w-4 h-4" />
                  Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </motion.button>
            {status === "error" && (
              <p className="text-red-400 text-center text-sm">
                Failed to send message. Please try again.
              </p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
