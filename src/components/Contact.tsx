import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, ExternalLink, Send, Check, Copy, FileText, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Initiate Conversation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F1F5F9] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-xl">
            Whether you want to discuss low-latency architectures, data engineering pipelines, or Gen AI agent systems — I'd love to connect.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Google Drive Card */}
          <div className="md:col-span-5 space-y-4">
            
            {/* 1-Click Email Copy Card */}
            <div className="editorial-card rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono uppercase text-slate-500 dark:text-neutral-400">Direct Email</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white font-mono break-all">
                {PORTFOLIO_DATA.personal.email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-neutral-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Google Drive Latest Resume Card */}
            <div className="editorial-card rounded-2xl p-6 space-y-3 border-emerald-500/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Latest Resume
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                  Drive Synced
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Access the verified PDF copy directly from Google Drive or open the interactive reader.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-lg bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-neutral-950 font-semibold text-xs font-mono transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Drive</span>
                </a>
                <button
                  onClick={onOpenResume}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.08] text-slate-600 dark:text-neutral-300 text-xs font-mono transition-colors cursor-pointer"
                  title="Quick View"
                >
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl editorial-card flex items-center justify-center gap-2 text-xs font-mono text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl editorial-card flex items-center justify-center gap-2 text-xs font-mono text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="md:col-span-7 editorial-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-[#F1F5F9] mb-4">
              Send a Direct Message
            </h3>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
                  Thank you for reaching out. I'll get back to you promptly at {formData.email || 'your email'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500 dark:text-neutral-400">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 placeholder:text-slate-400 dark:placeholder:text-neutral-600 font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500 dark:text-neutral-400">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 placeholder:text-slate-400 dark:placeholder:text-neutral-600 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-500 dark:text-neutral-400">Message / Inquiries</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, data architecture, or role requirements..."
                    className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-neutral-200 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 placeholder:text-slate-400 dark:placeholder:text-neutral-600 font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-neutral-950 font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
