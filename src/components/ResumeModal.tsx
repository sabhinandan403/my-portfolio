import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, ExternalLink, FileText, CheckCircle, Mail, Phone, Printer, Download } from 'lucide-react';
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
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.12] rounded-xl shadow-2xl flex flex-col z-10 overflow-hidden text-stone-800 dark:text-[#EDEDEF]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D5] dark:border-white/[0.08] bg-[#FAF7F2] dark:bg-[#08090A]">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-[#5E6AD2]/10 border border-[#5E6AD2]/25 text-[#5E6AD2]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-stone-900 dark:text-[#EDEDEF] text-sm sm:text-base">
                Abhinandan Kumar — Resume
              </h3>
              <p className="text-[11px] text-stone-500 dark:text-[#8A8F98] font-mono">
                {PORTFOLIO_DATA.personal.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              download="Abhinandan_Kumar_Resume.pdf"
              className="px-3 py-1.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6875E3] text-white dark:text-[#EDEDEF] transition-colors text-xs font-mono font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer"
              title="Download PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white dark:bg-white/[0.04] hover:bg-stone-200 dark:hover:bg-white/[0.08] text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] border border-[#E8E2D5] dark:border-white/[0.08] transition-colors cursor-pointer shadow-xs dark:shadow-none"
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white dark:bg-white/[0.04] hover:bg-red-50 dark:hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-400 text-stone-600 dark:text-[#8A8F98] border border-[#E8E2D5] dark:border-white/[0.08] transition-colors cursor-pointer shadow-xs dark:shadow-none"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-1.5 border-b border-[#E8E2D5] dark:border-white/[0.08] pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#EDEDEF] tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <div className="text-[#5E6AD2] font-mono text-xs font-semibold">
              {PORTFOLIO_DATA.personal.title}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500 dark:text-[#8A8F98] font-mono pt-1">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#5E6AD2]" />
                {PORTFOLIO_DATA.personal.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#5E6AD2]" />
                {PORTFOLIO_DATA.personal.email}
              </span>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-[#5E6AD2] text-stone-700 dark:text-[#8A8F98] underline underline-offset-2"
              >
                <LinkedinIcon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                LinkedIn
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-[#5E6AD2] text-stone-700 dark:text-[#8A8F98] underline underline-offset-2"
              >
                <GithubIcon className="w-3 h-3 text-stone-700 dark:text-[#8A8F98]" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#5E6AD2] font-semibold border-b border-[#E8E2D5] dark:border-white/[0.06] pb-1">
              Professional Summary
            </h4>
            <p className="text-xs text-stone-600 dark:text-[#8A8F98] leading-relaxed">
              {PORTFOLIO_DATA.personal.summary}
            </p>
          </div>

          {/* Skills & Technologies */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#5E6AD2] font-semibold border-b border-[#E8E2D5] dark:border-white/[0.06] pb-1">
              Skills &amp; Technologies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06]">
                <span className="text-stone-500 dark:text-[#62666D] font-mono">Data Platforms: </span>
                <span className="text-stone-800 dark:text-[#EDEDEF]">Snowflake, MS SQL Server, PostgreSQL, Databricks, Delta Lake</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06]">
                <span className="text-stone-500 dark:text-[#62666D] font-mono">Snowflake &amp; SQL: </span>
                <span className="text-stone-800 dark:text-[#EDEDEF]">Stages, COPY INTO, Streams, Tasks, Query Profiling, T-SQL, Stored Procs</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06]">
                <span className="text-stone-500 dark:text-[#62666D] font-mono">Data Engineering: </span>
                <span className="text-stone-800 dark:text-[#EDEDEF]">dbt, PySpark, Incremental Processing, Dimensional Modeling, Fact &amp; Dimension Tables</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06]">
                <span className="text-stone-500 dark:text-[#62666D] font-mono">Cloud &amp; Analytics: </span>
                <span className="text-stone-800 dark:text-[#EDEDEF]">AWS S3, AWS Lambda, Kafka, RabbitMQ, Power BI, Databricks Unity Catalog</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#5E6AD2] font-semibold border-b border-[#E8E2D5] dark:border-white/[0.06] pb-1">
              Work Experience
            </h4>

            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-stone-900 dark:text-[#EDEDEF]">{exp.company}</span>
                    <span className="text-stone-500 dark:text-[#8A8F98]"> | {exp.role}</span>
                  </div>
                  <span className="font-mono text-[#5E6AD2] text-[10px]">{exp.period}</span>
                </div>
                <div className="text-[10px] font-mono text-stone-500 dark:text-[#62666D]">
                  Focus: <span className="text-stone-800 dark:text-[#EDEDEF] font-medium">{exp.projectGroup}</span>
                </div>
                <ul className="space-y-1 pl-4 list-disc text-xs text-stone-600 dark:text-[#8A8F98] leading-relaxed marker:text-[#5E6AD2]">
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
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#5E6AD2] font-semibold border-b border-[#E8E2D5] dark:border-white/[0.06] pb-1">
                Certifications
              </h4>
              <ul className="space-y-1 pl-4 list-disc text-xs text-stone-600 dark:text-[#8A8F98] marker:text-[#5E6AD2]">
                {PORTFOLIO_DATA.certifications.map((c, cIdx) => (
                  <li key={cIdx}>
                    <span className="font-medium text-stone-900 dark:text-[#EDEDEF]">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#5E6AD2] font-semibold border-b border-[#E8E2D5] dark:border-white/[0.06] pb-1">
                Education
              </h4>
              <div className="text-xs space-y-0.5">
                <div className="font-medium text-stone-900 dark:text-[#EDEDEF]">{PORTFOLIO_DATA.education.degree}</div>
                <div className="text-stone-500 dark:text-[#8A8F98] font-mono">{PORTFOLIO_DATA.education.institution} ({PORTFOLIO_DATA.education.duration})</div>
                <div className="text-[#5E6AD2] font-mono text-[11px]">GPA: {PORTFOLIO_DATA.education.gpa}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#E8E2D5] dark:border-white/[0.08] bg-[#FAF7F2] dark:bg-[#08090A] flex items-center justify-between">
          <div className="text-xs text-stone-500 dark:text-[#62666D] font-mono flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-700 dark:text-[#4EBA6F]" />
            <span>Verified Official Resume</span>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6875E3] text-white dark:text-[#EDEDEF] font-semibold text-xs font-mono transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open PDF Document</span>
          </a>
        </div>

      </div>
    </div>
  );
};
