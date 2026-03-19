"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket,
  Brain,
  Building2,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    text: "Start early as a Research Intern during summer",
  },
  {
    icon: Brain,
    text: "Advanced AI topics: PINNs, GNN, QCNN & more",
  },
  {
    icon: Building2,
    text: "All projects have confirmed industry or research partners",
  },
  {
    icon: BookOpen,
    text: "Opportunity for publication or advanced research",
  },
];

const topics = [
  "Physics-Informed Neural Networks",
  "Graph Neural Networks",
  "Quantum Computing & ML",
  "Predictive Maintenance AI",
  "Portfolio Optimization",
  "Biomedical Image Analysis",
];

export default function FYP() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fyp" className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            ref={ref}
          >
            <span className="inline-block px-3 py-1 bg-violet-500/20 text-violet-300 text-xs font-semibold rounded-full uppercase tracking-wider border border-violet-500/30 mb-4">
              Final Year Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Final Year Projects{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                (FYP)
              </span>
            </h2>
            <p className="text-slate-400 text-base mb-8 leading-relaxed">
              Your FYP is one of the most important milestones in your degree.
              Work on projects with depth, real stakeholders, and the potential
              to publish — setting yourself apart from the crowd.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-500/20 border border-indigo-500/30 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed pt-1">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#fyp-projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95"
            >
              View FYP Topics
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: topic tags + image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
                alt="AI and data science research"
                className="w-full h-72 lg:h-80 object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 to-slate-900/80" />

              {/* Topic tags overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
                <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
                  Available Research Topics
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-xs font-medium backdrop-blur-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
