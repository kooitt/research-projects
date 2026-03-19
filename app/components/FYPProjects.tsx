"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, GraduationCap, Building2 } from "lucide-react";

type FYPProject = {
  id: number;
  title: string;
  partner: string;
  summary: string;
  description: string;
  objectives: string[];
  tags: string[];
  tagColor: string;
  accentColor: string;
};

const fypProjects: FYPProject[] = [
  {
    id: 1,
    title: "Interactive Reactor Design Tool for Chemical Engineering Applications",
    partner: "UNM Chemical Engineering Dept (Dr Senthil Kumar)",
    summary:
      "Develop an interactive software tool for reactor design and analysis, integrating mathematical models with visualization to support chemical engineering education and practice.",
    description:
      "This project aims to develop an interactive software tool to support reactor design and analysis in chemical engineering applications. In collaboration with the Chemical Engineering department, the student will design and implement a simulation interface that enables users to explore key reactor parameters such as temperature, pressure, and reaction kinetics. The system will integrate mathematical models of common reactor types with visualization features to facilitate intuitive understanding and design optimization.",
    objectives: [
      "To design and implement a user-friendly interface for reactor simulation",
      "To integrate fundamental reactor models into a computational framework",
      "To enable parameter tuning and visualization of reactor performance",
      "To evaluate the tool's usability and accuracy against standard benchmarks",
    ],
    tags: ["Engineering", "Simulation", "Software"],
    tagColor: "bg-orange-100 text-orange-700",
    accentColor: "bg-orange-600",
  },
  {
    id: 2,
    title: "Enhancing Quantum Convolutional Neural Networks (QCNN) for Image Processing",
    partner: "Continuation from previous FYP work",
    summary:
      "Extend prior QCNN work by exploring advanced quantum circuit designs, increasing qubit usage, and evaluating model performance on complex datasets including RGB images.",
    description:
      "This project extends prior FYP work on Quantum Convolutional Neural Networks (QCNN) by exploring methods to improve model expressiveness and scalability. The student will investigate advanced quantum circuit designs, including increasing qubit usage and optimizing quantum feature encoding techniques. The study will also evaluate QCNN performance on more complex datasets, including RGB images, to assess its applicability in real-world image processing tasks.",
    objectives: [
      "To design enhanced QCNN models with improved expressiveness",
      "To experiment with different quantum encoding strategies",
      "To evaluate model performance on higher-dimensional datasets",
    ],
    tags: ["Quantum", "Deep Learning", "Image AI"],
    tagColor: "bg-violet-100 text-violet-700",
    accentColor: "bg-violet-600",
  },
  {
    id: 3,
    title: "Physics-Informed Neural Networks (PINNs) for Machine Predictive Maintenance",
    partner: "Continuation from previous FYP work",
    summary:
      "Apply PINNs for machine predictive maintenance by embedding physical knowledge of equipment degradation into data-driven models, validated against benchmark or real-world datasets.",
    description:
      "This project explores the application of Physics-Informed Neural Networks (PINNs) for machine predictive maintenance by integrating physical knowledge of equipment degradation (such as wear, fatigue, or thermal effects) into data-driven models. The student will implement and evaluate a baseline PINN model, analyse its performance under limited or noisy sensor data, and apply improvements such as enhanced loss functions, training strategies, or hybrid approaches. The proposed model will be validated using benchmark or real-world datasets, with the aim of improving prediction accuracy and reliability compared to conventional machine learning methods.",
    objectives: [
      "To implement and evaluate a baseline PINN model for machine condition monitoring or failure prediction",
      "To design and implement improvements (e.g., enhanced loss functions, hybrid models, or training strategies)",
      "To validate and compare the proposed model against baseline PINN model using appropriate performance metrics",
    ],
    tags: ["Physics AI", "Predictive Maintenance", "Engineering"],
    tagColor: "bg-blue-100 text-blue-700",
    accentColor: "bg-blue-600",
  },
  {
    id: 4,
    title: "Graph Neural Networks (GNN) for Portfolio Optimization",
    partner: "UNM Business School (Dr Tang Kin Boon)",
    summary:
      "Construct graph representations of financial asset relationships and apply GNN architectures to learn and improve portfolio optimization strategies.",
    description:
      "This project explores the use of Graph Neural Networks (GNN) to improve portfolio optimization by modeling relationships between financial assets. The student will construct graph representations based on correlations, sector connections, or other financial dependencies, and apply GNN architectures to learn these relationships. The effectiveness of GNN-based strategies will be evaluated against traditional portfolio optimization approaches.",
    objectives: [
      "To construct financial asset graphs using market data",
      "To design and implement enhanced GNN-based portfolio models",
      "To evaluate portfolio performance with other GNN-based optimization methods",
    ],
    tags: ["Finance", "Graph AI", "Quant"],
    tagColor: "bg-emerald-100 text-emerald-700",
    accentColor: "bg-emerald-600",
  },
  {
    id: 5,
    title: "Modeling Industry Spillover Effects Using Graph-Based Methods",
    partner: "UNM Business School (Dr Tang Kin Boon)",
    summary:
      "Study how movements in one industry propagate to others using network representations, with implications for risk management and investment decision-making.",
    description:
      "This project investigates industry spillover effects in financial markets using graph-based approaches. The project will study how movements in one industry propagate to others, and how these relationships can be modeled using network representations. The project includes constructing industry-level graphs, analyzing interdependencies, and applying machine learning or statistical methods to quantify spillover effects. The outcome aims to provide insights into cross-industry dynamics and their implications for risk management and investment decision-making.",
    objectives: [
      "To model inter-industry relationships as network structures",
      "To apply graph-based or statistical methods to quantify spillovers",
      "To validate findings using historical market data",
    ],
    tags: ["Finance", "Network Analysis", "Risk"],
    tagColor: "bg-teal-100 text-teal-700",
    accentColor: "bg-teal-600",
  },
  {
    id: 6,
    title: "Automated Structuring of Knowledge Bases from Unstructured Enterprise Documents",
    partner: "Daythree Business Services Sdn Bhd (TÜBITAK-MSE MIGHT Grant)",
    summary:
      "Develop a pipeline combining text extraction, segmentation, and schema mapping to transform enterprise documents into structured, machine-readable formats using LLM-assisted approaches.",
    description:
      "This project focuses on developing a system to transform unstructured enterprise documents (e.g., SOPs, manuals, FAQs) into structured, machine-readable formats. The student will design a pipeline combining text extraction, segmentation, and schema mapping, using rule-based and/or large language model (LLM)-assisted approaches. The research will address challenges in maintaining consistency, accuracy, and scalability in automated structuring.",
    objectives: [
      "To design a pipeline for converting unstructured text into structured formats",
      "To implement and compare rule-based and AI-assisted methods",
      "To evaluate structuring accuracy and consistency",
    ],
    tags: ["NLP", "LLM", "Enterprise"],
    tagColor: "bg-indigo-100 text-indigo-700",
    accentColor: "bg-indigo-600",
  },
  {
    id: 7,
    title: "Automated Metadata Tagging for Knowledge Base Systems",
    partner: "Daythree Business Services Sdn Bhd (TÜBITAK-MSE MIGHT Grant)",
    summary:
      "Build an AI system for automatic metadata tagging of knowledge base content using transformer-based and zero-shot learning approaches, evaluated with standard NLP metrics.",
    description:
      "This project develops an AI-based system for automatic metadata tagging of knowledge base content. The student will explore transformer-based and zero-shot learning approaches to assign tags such as intent, category, and product type. The performance of different models will be evaluated using labeled datasets and standard NLP metrics.",
    objectives: [
      "To implement transformer-based and/or zero-shot models",
      "To train and evaluate models on labeled datasets",
      "To compare tagging performance using precision, recall, and error metrics",
    ],
    tags: ["NLP", "Transformers", "Classification"],
    tagColor: "bg-pink-100 text-pink-700",
    accentColor: "bg-pink-600",
  },
  {
    id: 8,
    title: "Knowledge Base Lifecycle and Version Control Management System",
    partner: "Daythree Business Services Sdn Bhd (TÜBITAK-MSE MIGHT Grant)",
    summary:
      "Design and develop a lifecycle and version control system for knowledge base content, supporting structured workflows, version tracking, audit logging, and rollback mechanisms.",
    description:
      "This project aims to design and develop a lifecycle and version control system for managing knowledge base content. The system will support structured workflows (e.g., draft, review, publish), version tracking, and rollback mechanisms. The research will address gaps in maintaining consistency, traceability, and data integrity in dynamic knowledge systems.",
    objectives: [
      "To design a workflow-based lifecycle management system",
      "To implement version control, audit logging and rollback mechanisms for traceability",
      "To evaluate system effectiveness in maintaining data integrity",
    ],
    tags: ["Systems", "Enterprise", "Software"],
    tagColor: "bg-rose-100 text-rose-700",
    accentColor: "bg-rose-600",
  },
];

function FYPCard({ project, index }: { project: FYPProject; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="bg-slate-900 rounded-2xl border border-slate-800 shadow-sm hover:border-indigo-500/40 hover:shadow-indigo-500/10 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Card header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start gap-4 group"
        aria-expanded={open}
      >
        {/* Number badge */}
        <div
          className={`flex-shrink-0 w-9 h-9 ${project.accentColor} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md`}
        >
          {project.id}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 text-xs font-semibold rounded-full ${project.tagColor}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-indigo-300 transition-colors pr-6">
            {project.title}
          </h3>
          {/* Partner */}
          <div className="flex items-center gap-1.5 mt-1.5 mb-1">
            <Building2 className="w-3 h-3 text-slate-500 flex-shrink-0" />
            <span className="text-slate-500 text-xs truncate">
              {project.partner}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-slate-500 transition-transform duration-300 mt-0.5 ${
            open ? "rotate-180 text-indigo-400" : ""
          }`}
        />
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-slate-800">
              {/* Partner highlighted */}
              <div className="mt-4 mb-4 flex items-start gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-4 py-3">
                <Building2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-indigo-300 font-semibold uppercase tracking-wider">
                    Project Partner
                  </p>
                  <p className="text-white text-sm font-medium mt-0.5">
                    {project.partner}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Project Objectives
              </p>
              <ul className="space-y-2">
                {project.objectives.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-500 transition-colors active:scale-95"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                Express Interest in This FYP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FYPProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fyp-projects" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            <GraduationCap className="w-3 h-3" />
            Industry-Partnered Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Final Year Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              (FYP) Topics
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {fypProjects.length} topics available, each with confirmed industry
            or research partners. Click any card to explore full objectives.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-4">
          {fypProjects.map((project, index) => (
            <FYPCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all hover:shadow-xl hover:shadow-indigo-500/25 active:scale-95"
          >
            Apply for FYP
          </a>
        </motion.div>
      </div>
    </section>
  );
}
