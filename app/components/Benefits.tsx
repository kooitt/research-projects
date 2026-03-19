"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Handshake,
  BarChart3,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Real-World AI & Research Problems",
    description:
      "Work on cutting-edge challenges in machine learning, neural networks, and data science — not toy datasets, but industry-grade problems.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Handshake,
    title: "Industry Collaboration",
    description:
      "Every project is co-developed with confirmed industry or research partners, giving you real exposure to professional environments.",
    color: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    icon: BarChart3,
    title: "Strong Portfolio & Career Edge",
    description:
      "Build a compelling portfolio that stands out for job applications, postgraduate admissions, or research opportunities worldwide.",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Structured Guidance",
    description:
      "You won't be working alone. Get weekly check-ins, structured milestones, academic mentorship, and feedback throughout the project.",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-join" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Why Join
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Why Students Choose These Projects
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            More than a credit — these are experiences that define your
            trajectory.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                className={`group relative rounded-2xl border ${benefit.border} ${benefit.bg} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
