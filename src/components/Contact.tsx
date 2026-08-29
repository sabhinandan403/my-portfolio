import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Initiate Contact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl">
            Available for full-time roles, engineering consultations, and AI agent collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Direct Details & Google Drive (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            
            <div className="editorial-card rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-white">
                Contact Details
              </h3>

              <div className="space-y-2.5 text-xs">
                {/* Email with 1-click copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-white/[0.06]">
                  <div className="truncate mr-2">
                    <div className="text-[10px] font-mono text-neutral-500">EMAIL</div>
                    <div className="text-white font-medium truncate font-mono text-[11px]">{PORTFOLIO_DATA.personal.email}</div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-neutral-300 hover:text-emerald-400 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-neutral-500">PHONE</div>
                  <div className="text-white font-medium font-mono text-[11px]">{PORTFOLIO_DATA.personal.phone}</div>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-black/30 border border-white/[0.06]">
                  <div className="text-[10px] font-mono text-neutral-500">LOCATION &amp; AVAILABILITY</div>
                  <div className="text-neutral-200 text-xs">India &bull; Open to Global Roles</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-white/[0.06] flex gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] text-neutral-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] text-neutral-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
            </div>

            {/* Google Drive Card */}
            <div className="editorial-card rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-white text-xs">Resume (Google Drive)</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/20">
                  LATEST
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Direct access to the latest verified resume with detailed production metrics and credentials.
              </p>
              <div className="pt-1 flex gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs font-mono flex items-center justify-center gap-1 transition-colors shadow-sm"
                >
                  <span>Open Drive Link</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white"
                >
                  Modal View
                </button>
              </div>
            </div>

          </div>

          {/* Message Form (7 cols) */}
          <div className="md:col-span-7">
            <div className="editorial-card rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-semibold text-white">
                Send Direct Message
              </h3>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/25 text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Message Transmitted</h4>
                  <p className="text-xs text-neutral-300">
                    Thank you. Abhinandan will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-neutral-400">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full bg-black/40 border border-white/[0.08] text-xs text-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono text-neutral-400">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@techcorp.com"
                        className="w-full bg-black/40 border border-white/[0.08] text-xs text-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-neutral-400">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Data Engineering / AI Opportunity"
                      className="w-full bg-black/40 border border-white/[0.08] text-xs text-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-mono text-neutral-400">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abhinandan, let's discuss your experience with Databricks and AI agent architectures..."
                      className="w-full bg-black/40 border border-white/[0.08] text-xs text-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs font-mono flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
