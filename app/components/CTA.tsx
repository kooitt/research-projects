"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Mail, Clock } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%),
            radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/25 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-sm animate-pulse-glow"
        >
          <AlertCircle className="w-4 h-4 text-yellow-300" />
          Limited Slots Available — Act Fast
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
        >
          Apply Now Before Slots Fill Up
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-indigo-100 text-lg mb-4"
        >
          Limited slots available for both internship and FYP positions.
        </motion.p>

        {/* Deadline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-5 py-3 mb-10 backdrop-blur-sm"
        >
          <Clock className="w-5 h-5 text-yellow-300 flex-shrink-0" />
          <span className="text-white font-bold">
            Application Deadline:{" "}
            <span className="text-yellow-300">27 March (Friday)</span>
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:kcztcc@nottingham.edu.my?subject=Interest in AI Research Project / Internship&body=Dear Dr. Tan,%0A%0AI am interested in applying for [Internship / FYP]. Please find my details below:%0A%0AName:%0AStudent ID:%0AYear of Study:%0AProject Interest:%0A%0AThank you."
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl text-base hover:bg-indigo-50 transition-all duration-200 hover:shadow-2xl active:scale-95"
          >
            <Mail className="w-5 h-5" />
            Contact via Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
