"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CalendarDays,
  FlaskConical,
  UserCheck,
  Award,
  ArrowRight,
} from "lucide-react";

const details = [
  {
    icon: CalendarDays,
    label: "Duration",
    value: "June – August (3 months)",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    icon: FlaskConical,
    label: "Experience",
    value: "Hands-on project work from day one",
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    icon: UserCheck,
    label: "Support",
    value: "Guidance and mentorship provided",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    icon: Award,
    label: "Recognition",
    value: "Certificate of Completion awarded",
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

export default function Internship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="internship" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            ref={ref}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                alt="Students collaborating on research"
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs text-slate-500 font-medium">Program</p>
                <p className="text-slate-900 font-bold text-sm">
                  3-Month Summer Internship
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-indigo-100 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-violet-100 rounded-full -z-10" />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Summer Internship
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              3-Month Internship Program
            </h2>
            <p className="text-slate-500 text-base mb-8 leading-relaxed">
              A structured summer program designed for students who want to go
              beyond coursework. You'll tackle real AI and data science problems,
              guided by experienced mentors and connected to industry partners.
            </p>

            {/* Detail items */}
            <div className="space-y-4 mb-8">
              {details.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-9 h-9 ${item.bg} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-slate-800 font-semibold text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              Apply for Internship
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
