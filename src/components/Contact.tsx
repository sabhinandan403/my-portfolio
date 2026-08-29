import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ExternalLink, Send, Check, Copy, FileText } from 'lucide-react';
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
          <div className="text-xs font-mono text-[#5E6AD2] uppercase tracking-wider">
            Initiate Conversation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EDEDEF] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[#8A8F98] text-sm max-w-xl">
            Whether you want to discuss low-latency architectures, data engineering pipelines, or Gen AI agent systems — I'd love to connect.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Google Drive Card */}
          <div className="md:col-span-5 space-y-4">
            
            {/* 1-Click Email Copy Card */}
            <div className="editorial-card rounded-xl p-6 space-y-3">
              <div className="text-xs font-mono uppercase text-[#62666D]">Direct Email</div>
              <div className="text-sm font-semibold text-[#EDEDEF] font-mono break-all">
                {PORTFOLIO_DATA.personal.email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-lg bg-[#08090A] hover:bg-[#16181D] border border-white/[0.08] text-xs font-mono text-[#EDEDEF] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#4EBA6F]" />
                    <span>Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8A8F98]" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Google Drive Latest Resume Card */}
            <div className="editorial-card rounded-xl p-6 space-y-3 border-[#5E6AD2]/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#5E6AD2] font-semibold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Latest Resume
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#4EBA6F]/10 text-[#4EBA6F] border border-[#4EBA6F]/20">
                  Drive Synced
                </span>
              </div>
              <p className="text-xs text-[#8A8F98] leading-relaxed">
                Access the verified PDF copy directly from Google Drive or open the interactive reader.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6875E3] text-[#EDEDEF] font-semibold text-xs font-mono transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#5E6AD2]/25"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Drive</span>
                </a>
                <button
                  onClick={onOpenResume}
                  className="p-2.5 rounded-lg bg-[#08090A] border border-white/[0.08] hover:bg-[#16181D] text-[#EDEDEF] text-xs font-mono transition-colors cursor-pointer"
                  title="Quick View"
                >
                  <FileText className="w-4 h-4 text-[#5E6AD2]" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-lg editorial-card flex items-center justify-center gap-2 text-xs font-mono text-[#8A8F98] hover:text-[#EDEDEF]"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-lg editorial-card flex items-center justify-center gap-2 text-xs font-mono text-[#8A8F98] hover:text-[#EDEDEF]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="md:col-span-7 editorial-card rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#EDEDEF] mb-4">
              Send a Direct Message
            </h3>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#4EBA6F]/10 border border-[#4EBA6F]/30 text-center space-y-2">
                <Check className="w-8 h-8 text-[#4EBA6F] mx-auto" />
                <h4 className="text-sm font-semibold text-[#EDEDEF]">Message Sent Successfully!</h4>
                <p className="text-xs text-[#8A8F98]">
                  Thank you for reaching out. I'll get back to you promptly at {formData.email || 'your email'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#62666D]">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-[#08090A] border border-white/[0.08] text-xs text-[#EDEDEF] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#5E6AD2] placeholder:text-[#62666D] font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#62666D]">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#08090A] border border-white/[0.08] text-xs text-[#EDEDEF] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#5E6AD2] placeholder:text-[#62666D] font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#62666D]">Message / Inquiries</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, data architecture, or role requirements..."
                    className="w-full bg-[#08090A] border border-white/[0.08] text-xs text-[#EDEDEF] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-[#5E6AD2] placeholder:text-[#62666D] font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#5E6AD2] hover:bg-[#6875E3] text-[#EDEDEF] font-semibold text-xs font-mono transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#5E6AD2]/25 cursor-pointer"
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
