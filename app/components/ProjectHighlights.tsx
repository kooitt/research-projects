"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Atom, TrendingUp, Cpu, Zap } from "lucide-react";

const projects = [
  {
    title: "Physics-Informed Neural Networks for Predictive Maintenance",
    description:
      "Integrate physical laws directly into neural network training to predict equipment failures with higher accuracy and less data than pure ML approaches.",
    tag: "AI / Engineering",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    accent: "from-indigo-500 to-blue-600",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Graph Neural Networks for Portfolio Optimization",
    description:
      "Model financial asset relationships as graphs and leverage GNNs to uncover hidden correlations for more robust portfolio construction strategies.",
    tag: "AI / Finance",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    accent: "from-emerald-500 to-teal-600",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Quantum CNN for Medical Image Processing",
    description:
      "Explore quantum-classical hybrid convolutional networks for enhanced feature extraction in medical imaging, pushing the frontier of quantum machine learning.",
    tag: "Quantum / Healthcare",
    icon: Atom,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    accent: "from-violet-500 to-purple-600",
    tagColor: "bg-violet-100 text-violet-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function ProjectHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            <Zap className="w-3 h-3" />
            Project Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Sample Projects You Could Work On
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Each project is carefully designed to be publication-worthy and
            industry-relevant.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50`}
                  />
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {/* Tag */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-2.5 py-1 ${project.tagColor} text-xs font-bold rounded-full`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-3 group-hover:text-indigo-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:text-indigo-800 transition-colors group/link"
                  >
                    Express Interest
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
