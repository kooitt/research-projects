"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Briefcase } from "lucide-react";

type Project = {
  id: number;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  tags: string[];
  tagColor: string;
  accentColor: string;
};

const internshipProjects: Project[] = [
  {
    id: 1,
    title: "Quantum Convolutional Neural Networks (QCNN): Image Encoding and Literature Analysis",
    summary:
      "Explore the integration of quantum computing with deep learning, focusing on quantum image encoding techniques for QCNN-based models.",
    description:
      "This project explores the integration of quantum computing with deep learning, focusing on Quantum Convolutional Neural Networks (QCNN). The intern will investigate different quantum image encoding techniques and assess their suitability for QCNN-based models. The work includes reviewing recent research and implementing small-scale simulations using available quantum frameworks (e.g., Qiskit or PennyLane).",
    deliverables: [
      "Structured literature review on QCNN and quantum image encoding techniques",
      "Comparative analysis of encoding methods (complexity, scalability, performance)",
      "Prototype implementation of a simple QCNN pipeline (optional)",
      "Final technical report with key insights and future directions",
    ],
    tags: ["Quantum", "Deep Learning"],
    tagColor: "bg-violet-100 text-violet-700",
    accentColor: "bg-violet-600",
  },
  {
    id: 2,
    title: "Physics-Informed Neural Networks (PINNs): Model Evaluation",
    summary:
      "Evaluate Physics-Informed Neural Networks for solving scientific problems, reviewing an existing FYP implementation and exploring modern improvements.",
    description:
      "This project focuses on evaluating Physics-Informed Neural Networks (PINNs) for solving scientific problems. The intern will review and assess an existing FYP implementation, including its methodology, assumptions, and performance. Additionally, the intern will study recent advancements in PINNs and explore potential improvements such as hybrid models or training optimizations.",
    deliverables: [
      "Evaluation of the existing final year student's project on PINN model",
      "Literature review of modern PINN variants and hybrid approaches",
      "Experimental comparison or small enhancement (optional)",
      "Final technical report with key insights and future directions",
    ],
    tags: ["Physics AI", "Neural Networks"],
    tagColor: "bg-blue-100 text-blue-700",
    accentColor: "bg-blue-600",
  },
  {
    id: 3,
    title: "Graph Neural Networks (GNN) for Portfolio Optimization",
    summary:
      "Investigate how asset relationships in financial markets can be modeled as graphs and leveraged by GNN architectures to improve portfolio allocation.",
    description:
      "This project investigates the use of Graph Neural Networks (GNN) in financial portfolio optimization. The intern will study how asset relationships (e.g., correlations, sector linkages, or market dependencies) can be modeled as graphs and leveraged by GNN architectures to improve portfolio allocation strategies. The project includes both literature study and hands-on experimentation with financial datasets.",
    deliverables: [
      "Literature review on GNN applications in quantitative finance",
      "Construction of asset relationship graphs from market data",
      "Implementation of a basic GNN model for portfolio optimization",
      "Performance comparison with traditional portfolio methods (optional)",
      "Final report summarizing findings and practical limitations",
    ],
    tags: ["Finance", "Graph AI"],
    tagColor: "bg-emerald-100 text-emerald-700",
    accentColor: "bg-emerald-600",
  },
  {
    id: 4,
    title: "Modeling Industry Spillover Effects Using Graph-Based Methods",
    summary:
      "Study how movements in one industry propagate to others in financial markets, using statistical or graph-based approaches to model these relationships.",
    description:
      "This project investigates industry spillover effects in financial markets using graph-based approaches. The intern will study how movements in one industry propagate to others, and how these relationships can be modeled using statistical or graph-based approaches.",
    deliverables: [
      "Dataset preparation and construction of industry relationship graphs",
      "Analysis of spillover effects using graph metrics or simple models",
      "Technical report with insights for risk management and investment strategies",
    ],
    tags: ["Finance", "Network Analysis"],
    tagColor: "bg-teal-100 text-teal-700",
    accentColor: "bg-teal-600",
  },
  {
    id: 5,
    title: "Automated Knowledge Base Structuring from Unstructured Enterprise Documents",
    summary:
      "Build a pipeline to transform unstructured enterprise documents (SOPs, manuals, FAQs) into structured formats using rule-based and LLM-assisted approaches.",
    description:
      "This project focuses on building a pipeline to transform unstructured enterprise documents (e.g., SOPs, manuals, FAQs) into structured formats such as JSON or database schemas. The intern will implement text extraction, segmentation, and schema design using rule-based and/or LLM-assisted approaches.",
    deliverables: [
      "Data processing pipeline for document parsing and structuring",
      "Defined schema for structured knowledge representation",
      "Implementation of rule-based and/or LLM-assisted extraction methods",
      "Final report summarizing findings and practical limitations",
    ],
    tags: ["NLP", "LLM", "Enterprise"],
    tagColor: "bg-indigo-100 text-indigo-700",
    accentColor: "bg-indigo-600",
  },
  {
    id: 6,
    title: "Automated Metadata Tagging for Knowledge Base Systems",
    summary:
      "Develop an AI-based system to automatically assign metadata tags (intent, category, product type) to knowledge base entries using NLP and transformer models.",
    description:
      "This project develops an AI-based system to automatically assign metadata tags (e.g., intent, category, product type) to knowledge base entries. The intern will experiment with NLP models such as transformer-based classifiers or zero-shot approaches and evaluate their effectiveness.",
    deliverables: [
      "Dataset preparation and definition of tagging taxonomy",
      "Implementation of tagging models (fine-tuned or zero-shot)",
      "Prototype tagging system with sample outputs",
      "Final report summarizing findings and practical limitations",
    ],
    tags: ["NLP", "Transformers"],
    tagColor: "bg-pink-100 text-pink-700",
    accentColor: "bg-pink-600",
  },
  {
    id: 7,
    title: "Knowledge Base Lifecycle and Version Control Management System",
    summary:
      "Design a system to manage knowledge base content lifecycle, including version control, workflow management, and audit tracking with rollback functionality.",
    description:
      "This project focuses on designing a system to manage the lifecycle of knowledge base content, including version control, workflow management, and audit tracking. The intern will develop a lightweight system that supports content updates, review processes, and rollback functionality.",
    deliverables: [
      "System design for versioning and lifecycle workflow (draft → review → publish)",
      "Simple UI for managing content versions and rollback features",
      "Final report summarizing findings and practical limitations",
    ],
    tags: ["Systems", "Enterprise"],
    tagColor: "bg-orange-100 text-orange-700",
    accentColor: "bg-orange-600",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      {/* Card header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start gap-4 group"
        aria-expanded={open}
      >
        {/* Number badge */}
        <div
          className={`flex-shrink-0 w-9 h-9 ${project.accentColor} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm`}
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
          <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-indigo-700 transition-colors pr-6">
            {project.title}
          </h3>
          <p className="text-slate-500 text-sm mt-1.5 leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 mt-0.5 ${
            open ? "rotate-180 text-indigo-500" : ""
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
            <div className="px-6 pb-6 border-t border-slate-50">
              <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-4">
                {project.description}
              </p>

              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Expected Outcomes / Deliverables
              </p>
              <ul className="space-y-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-colors active:scale-95"
              >
                <Briefcase className="w-3.5 h-3.5" />
                Apply for This Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function InternshipProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="internship-projects" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            <Briefcase className="w-3 h-3" />
            June – August · 3 Months
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Internship Project List
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {internshipProjects.length} projects available. Click any card to
            see full details and deliverables.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-4">
          {internshipProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
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
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
          >
            Apply for Internship
          </a>
        </motion.div>
      </div>
    </section>
  );
}
