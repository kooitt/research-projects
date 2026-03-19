"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Copy, CheckCheck, Clock } from "lucide-react";

// ─── EDIT THIS ──────────────────────────────────────────────────────────────
const CONTACT_EMAIL = "kcztcc@nottingham.edu.my";
const DEADLINE = "27 March (Friday)";
// ────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-slate-500 text-lg">
            Send your interest via email before{" "}
            <span className="font-semibold text-indigo-600">{DEADLINE}</span>.
            Include your name, student ID, year of study, and preferred project
            topic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-slate-50 rounded-2xl border border-slate-100 p-8 text-center"
        >
          {/* Mail icon */}
          <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-indigo-600" />
          </div>

          {/* Email display */}
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">
            Send your application to
          </p>
          <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
            <span className="text-xl sm:text-2xl font-bold text-slate-900 break-all">
              {CONTACT_EMAIL}
            </span>
            <button
              onClick={handleCopy}
              title="Copy email"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                copied
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-200 text-slate-600 hover:bg-indigo-100 hover:text-indigo-700"
              }`}
            >
              {copied ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Deadline reminder */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>
              Deadline:{" "}
              <span className="font-semibold text-slate-700">{DEADLINE}</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
