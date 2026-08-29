import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, ExternalLink, Download, FileText, CheckCircle, Mail, Phone, Printer } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F172A] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B0F19]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                Abhinandan Kumar — Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Full Stack Data Engineer &bull; Latest Verified Edition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Google Drive Direct Button */}
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-300 transition-all text-xs font-mono font-semibold flex items-center gap-1.5 shadow-sm"
              title="Open Resume in Google Drive"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Google Drive</span>
            </a>

            {/* Print / Save Button */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all text-xs"
              title="Print or Save PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/20 hover:text-red-400 text-slate-400 border border-slate-700 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#0B0F19]/50 text-slate-200 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="text-center space-y-2 border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <div className="text-cyan-400 font-mono text-sm font-semibold">
              {PORTFOLIO_DATA.personal.title}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-mono pt-2">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-cyan-400 text-slate-300 underline underline-offset-2"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                linkedin.com/in/abhinandankumar
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-cyan-400 text-slate-300 underline underline-offset-2"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                github.com/abhinandankumar
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PORTFOLIO_DATA.personal.summary}
            </p>
          </div>

          {/* Skills & Technologies */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Skills & Technologies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-mono">Backend: </span>
                <span className="text-slate-200">Python, Node.js, Express.js, FastAPI, GraphQL, SQL</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-mono">Frontend: </span>
                <span className="text-slate-200">JavaScript (ES6+), React, TypeScript, HTML, Bootstrap, Tailwind</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-mono">Data Engineering: </span>
                <span className="text-slate-200">PySpark, ETL/ELT Pipelines, Apache Kafka, RabbitMQ, Databricks, Delta Lake, DLT</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 font-mono">Cloud & DBs: </span>
                <span className="text-slate-200">AWS (Lambda, S3), Azure, Databricks Unity Catalog, PostgreSQL, MongoDB, PL/SQL</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
              Work Experience
            </h4>

            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white text-sm">{exp.company}</span>
                    <span className="text-slate-400"> | {exp.role}</span>
                  </div>
                  <span className="font-mono text-cyan-400 text-[11px]">{exp.period}</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  Project: <span className="text-slate-300 font-semibold">{exp.projectGroup}</span>
                </div>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-300 leading-relaxed marker:text-cyan-400">
                  {exp.highlights.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                Certifications
              </h4>
              <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-300 marker:text-emerald-400">
                {PORTFOLIO_DATA.certifications.map((c, cIdx) => (
                  <li key={cIdx}>
                    <span className="font-semibold text-white">{c.name}</span> ({c.issuer})
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1">
                Education
              </h4>
              <div className="text-xs space-y-0.5">
                <div className="font-bold text-white">{PORTFOLIO_DATA.education.degree}</div>
                <div className="text-slate-400 font-mono">{PORTFOLIO_DATA.education.institution} ({PORTFOLIO_DATA.education.duration})</div>
                <div className="text-cyan-400 font-mono">GPA: {PORTFOLIO_DATA.education.gpa}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0B0F19] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Synced with Google Drive</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Open in Google Drive</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
