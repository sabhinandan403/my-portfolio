import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, ExternalLink, FileText, CheckCircle, Mail, Phone, Printer } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0E131F] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#090D16]">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm sm:text-base">
                Abhinandan Kumar — Resume
              </h3>
              <p className="text-[11px] text-neutral-400 font-mono">
                Full Stack Data Engineer &bull; Verified 2026 Edition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-colors text-xs font-mono font-semibold flex items-center gap-1.5 shadow-sm"
              title="Open in Google Drive"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Google Drive</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white border border-white/[0.08] transition-colors"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/20 hover:text-red-400 text-neutral-400 border border-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-200">
          
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-white/[0.08] pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <div className="text-emerald-400 font-mono text-xs font-semibold">
              {PORTFOLIO_DATA.personal.title}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400 font-mono pt-1">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" />
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-emerald-400" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-emerald-400 text-neutral-300 underline underline-offset-2"
              >
                <LinkedinIcon className="w-3 h-3 text-blue-400" />
                LinkedIn
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-emerald-400 text-neutral-300 underline underline-offset-2"
              >
                <GithubIcon className="w-3 h-3 text-neutral-300" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-white/[0.06] pb-1">
              Professional Summary
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              {PORTFOLIO_DATA.personal.summary}
            </p>
          </div>

          {/* Skills & Technologies */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-white/[0.06] pb-1">
              Skills &amp; Technologies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/[0.06]">
                <span className="text-neutral-400 font-mono">Backend: </span>
                <span className="text-neutral-200">Python, Node.js, Express.js, FastAPI, GraphQL, SQL</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/[0.06]">
                <span className="text-neutral-400 font-mono">Frontend: </span>
                <span className="text-neutral-200">JavaScript (ES6+), React, TypeScript, HTML, Tailwind</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/[0.06]">
                <span className="text-neutral-400 font-mono">Data Eng: </span>
                <span className="text-neutral-200">PySpark, ETL/ELT, Kafka, RabbitMQ, Databricks, Delta Lake, DLT</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 border border-white/[0.06]">
                <span className="text-neutral-400 font-mono">Cloud &amp; DB: </span>
                <span className="text-neutral-200">AWS (Lambda, S3), Azure, Databricks Unity Catalog, PostgreSQL, MongoDB</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-white/[0.06] pb-1">
              Work Experience
            </h4>

            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white">{exp.company}</span>
                    <span className="text-neutral-400"> | {exp.role}</span>
                  </div>
                  <span className="font-mono text-emerald-400 text-[10px]">{exp.period}</span>
                </div>
                <div className="text-[10px] font-mono text-neutral-500">
                  Project: <span className="text-neutral-300 font-medium">{exp.projectGroup}</span>
                </div>
                <ul className="space-y-1 pl-4 list-disc text-xs text-neutral-300 leading-relaxed marker:text-emerald-400">
                  {exp.highlights.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="space-y-1.5">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-white/[0.06] pb-1">
                Certifications
              </h4>
              <ul className="space-y-1 pl-4 list-disc text-xs text-neutral-300 marker:text-emerald-400">
                {PORTFOLIO_DATA.certifications.map((c, cIdx) => (
                  <li key={cIdx}>
                    <span className="font-medium text-white">{c.name}</span> ({c.issuer})
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold border-b border-white/[0.06] pb-1">
                Education
              </h4>
              <div className="text-xs space-y-0.5">
                <div className="font-medium text-white">{PORTFOLIO_DATA.education.degree}</div>
                <div className="text-neutral-400 font-mono">{PORTFOLIO_DATA.education.institution} ({PORTFOLIO_DATA.education.duration})</div>
                <div className="text-emerald-400 font-mono text-[11px]">GPA: {PORTFOLIO_DATA.education.gpa}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-[#090D16] flex items-center justify-between">
          <div className="text-xs text-neutral-500 font-mono flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Synced with Google Drive</span>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs font-mono transition-colors shadow-sm"
          >
            Open in Google Drive
          </a>
        </div>

      </div>
    </div>
  );
};
