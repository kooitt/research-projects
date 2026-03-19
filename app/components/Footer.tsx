import { Cpu, Mail, ExternalLink } from "lucide-react";

// ─── EDIT THESE ─────────────────────────────────────────────────────────────
const LECTURER_NAME = "Dr. Tan Chye Cheah";
const LECTURER_TITLE = "Assistant Professor, School of Computer and Mathematical Sciences";
const UNIVERSITY_NAME = "University of Nottingham Malaysia";
const CONTACT_EMAIL = "kcztcc@nottingham.edu.my";
const CURRENT_YEAR = new Date().getFullYear();
// ────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white font-bold text-sm">
                AI Projects Lab
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs">
              Connecting students with industry-relevant AI and research
              projects for meaningful career outcomes.
            </p>
          </div>

          {/* Lecturer info */}
          <div className="text-center md:text-right">
            <p className="text-white font-semibold text-sm">{LECTURER_NAME}</p>
            <p className="text-xs mt-0.5">{LECTURER_TITLE}</p>
            <p className="text-xs mt-0.5 text-slate-500">{UNIVERSITY_NAME}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-1.5 mt-2 text-indigo-400 text-xs hover:text-indigo-300 transition-colors"
            >
              <Mail className="w-3 h-3" />
              {CONTACT_EMAIL}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>
            © {CURRENT_YEAR} {LECTURER_NAME} · {UNIVERSITY_NAME}
          </p>
          <p className="text-slate-600">
            Application Deadline:{" "}
            <span className="text-amber-500 font-medium">27 March</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
