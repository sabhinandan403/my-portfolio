import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, ExternalLink, FileText } from 'lucide-react';
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
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interested in building high-scale data pipelines, low-latency API caching, or autonomous AI agents? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct info & Google Drive card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Contact Details Card */}
            <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-5">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email with copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono text-slate-400">EMAIL</div>
                      <div className="text-white font-medium truncate">{PORTFOLIO_DATA.personal.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all shrink-0 ml-2"
                    title="Copy email to clipboard"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">PHONE</div>
                    <div className="text-white font-medium">{PORTFOLIO_DATA.personal.phone}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">LOCATION</div>
                    <div className="text-white font-medium">India &bull; Open to Global Roles</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-slate-800 flex gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-500 hover:text-blue-400 text-slate-300 text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" /> LinkedIn
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-white hover:text-white text-slate-300 text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>

            {/* Google Drive Direct Access Card */}
            <div className="glass-card rounded-2xl border border-cyan-500/30 p-6 space-y-3 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-indigo-950/40 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-white text-sm">Resume on Google Drive</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  LATEST
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct access to the complete verified resume with full project breakdowns and credentials.
              </p>
              <div className="pt-2 flex gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Drive Link</span>
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono"
                >
                  Preview Modal
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 relative">
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Direct transmission to Abhinandan's inbox.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. Abhinandan will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@techcorp.com"
                        className="w-full bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Subject / Topic</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Data Engineering / AI Opportunity"
                      className="w-full bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Abhinandan, let's discuss your experience with Databricks and building AI agent pipelines..."
                      className="w-full bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500 resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
