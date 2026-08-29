import React, { useState, useEffect } from 'react';
import { Bot, Send, X, CheckCircle2, Zap, Minimize2, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  thoughtProcess?: string[];
}

export const LisaChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showTeaser, setShowTeaser] = useState<boolean>(false);
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'agent',
      text: `Hi! I'm Lisa, Abhinandan's AI assistant. Ask me anything about his Cassandra & Databricks Lakehouse pipelines, 40ms in-memory caching & Modular Monolith architecture, or his Gen AI agent systems!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  // Auto-open upon landing after 1.2 seconds to immediately engage visitors
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const samplePrompts = [
    "How did he cut API response times from 7s to 40ms?",
    "What is his experience with Cassandra & Databricks Lakehouse?",
    "How does the timezone-aware 15-min sensor heatmap engine work?",
    "What is his background with Gen AI and AI Agents?"
  ];

  const handleAsk = (query: string) => {
    if (!query.trim()) return;
    setHasUserInteracted(true);

    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsThinking(true);

    setTimeout(() => {
      let matchedAnswer = "";
      const lower = query.toLowerCase();

      if (lower.includes('cassandra') || lower.includes('databricks') || lower.includes('telemetry') || lower.includes('lakehouse') || lower.includes('medallion')) {
        matchedAnswer = "At Vantiva India (Smart Spaces), Abhinandan engineered automated PySpark & Databricks ETL pipelines using Medallion Architecture (Bronze → Silver → Gold) to ingest 10,000+ daily IoT telemetry data points from Cassandra DB across 50+ facilities. He curated daily Gold tables powering executive Power BI dashboards for Senior Architects & Clients, and built on-demand Excel reports via AWS Lambda.";
      } else if (lower.includes('latency') || lower.includes('40ms') || lower.includes('cache') || lower.includes('7s') || lower.includes('monolith')) {
        matchedAnswer = "In the HomeSight Care project at Vantiva, Abhinandan migrated legacy multi-query database endpoints to a Vertical Modular Monolith architecture, preloading Users, HC200 gateway hubs, and Accounts into server RAM at boot. This eliminated chained database lookups, slashing response time from ~7s down to 40–50ms (99% reduction). He led the Users & AppRegistry backend modules + AppRegistry frontend UI.";
      } else if (lower.includes('elderly') || lower.includes('homesight') || lower.includes('heatmap') || lower.includes('sensor') || lower.includes('timezone') || lower.includes('15-min')) {
        matchedAnswer = "For HomeSight Care, Abhinandan built a generalized dynamic sensor aggregation backend engine. It pulls raw Cassandra motion and door/window contact events, normalizes UTC timestamps to the local physical timezone of the user's HC200 hub, and computes 96 discrete 15-minute buckets (count, sum, avg, mode, median) powering an interactive 24-hour caregiver activity heatmap on React.";
      } else if (lower.includes('gen ai') || lower.includes('agent') || lower.includes('llm') || lower.includes('rag')) {
        matchedAnswer = "Abhinandan designs and builds autonomous AI agents using Gemini API, LangGraph, tool calling, and RAG architectures — including self-correcting Text-to-SQL data analyst agents with sandboxed Python execution and structured guardrails.";
      } else {
        matchedAnswer = `Abhinandan Kumar is a Full Stack Data Engineer & AI Developer experienced in Cassandra DB, Databricks Medallion Lakehouses, in-memory caching & Vertical Modular Monoliths (7s → 40ms), and Gen AI agent architectures.`;
      }

      const agentMsg: ChatMessage = {
        id: 'agt-' + Date.now(),
        sender: 'agent',
        text: matchedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        thoughtProcess: [
          "Retrieved verified engineering architecture context",
          "Mapped technical decisions: Vertical Modular Monolith, HC200 timezone normalization, Cassandra Lakehouse",
          "Synthesized external-facing response"
        ]
      };

      setMessages(prev => [...prev, agentMsg]);
      setIsThinking(false);
    }, 600);
  };

  const handleMinimize = () => {
    setIsOpen(false);
    if (!hasUserInteracted) {
      setShowTeaser(true);
      setTimeout(() => setShowTeaser(false), 6000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Window */}
      {isOpen ? (
        <div className="w-[90vw] sm:w-[380px] h-[520px] bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.12] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn transition-all">
          
          {/* Header */}
          <div className="px-4 py-3 bg-[#FAF7F2] dark:bg-[#08090A] border-b border-[#E8E2D5] dark:border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#5E6AD2]/10 dark:bg-[#5E6AD2]/20 border border-[#5E6AD2]/30 dark:border-[#5E6AD2]/40 flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#5E6AD2]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-stone-900 dark:text-[#EDEDEF] text-xs">Lisa</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#4EBA6F] animate-pulse" />
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-600/10 dark:bg-[#4EBA6F]/10 text-emerald-800 dark:text-[#4EBA6F] border border-emerald-600/20 dark:border-[#4EBA6F]/20 font-semibold">
                    Online
                  </span>
                </div>
                <div className="text-[10px] text-stone-500 dark:text-[#8A8F98] font-mono">Abhinandan's AI Assistant</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleMinimize}
                className="p-1.5 rounded-lg text-stone-400 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] hover:bg-stone-200/60 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                title="Minimize chat"
                aria-label="Minimize"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleMinimize}
                className="p-1.5 rounded-lg text-stone-400 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] hover:bg-stone-200/60 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                title="Close chat"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Questions Pill Carousel */}
          <div className="px-3 py-2 bg-[#FAF7F2]/80 dark:bg-[#08090A]/60 border-b border-[#E8E2D5]/70 dark:border-white/[0.04] overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(prompt)}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white dark:bg-white/[0.04] border border-[#E8E2D5] dark:border-white/[0.08] text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] hover:border-[#5E6AD2]/40 transition-colors shrink-0 cursor-pointer shadow-2xs"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#FAF7F2]/40 dark:bg-[#08090A]/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="w-5 h-5 rounded-full bg-[#5E6AD2]/10 border border-[#5E6AD2]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3 h-3 text-[#5E6AD2]" />
                  </div>
                )}

                <div className="max-w-[85%] space-y-1">
                  <div
                    className={`p-2.5 rounded-xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#5E6AD2] text-white dark:text-[#EDEDEF] font-medium shadow-xs'
                        : 'bg-white dark:bg-[#16181D] border border-[#E8E2D5] dark:border-white/[0.08] text-stone-800 dark:text-[#EDEDEF] shadow-xs dark:shadow-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.thoughtProcess && (
                    <div className="p-1.5 rounded bg-white dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.04] text-[9px] font-mono text-stone-500 dark:text-[#62666D] space-y-0.5">
                      <div className="text-[#5E6AD2] font-semibold flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5 text-[#5E6AD2]" /> Grounded Verification:
                      </div>
                      {msg.thoughtProcess.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1 text-stone-600 dark:text-[#8A8F98]">
                          <CheckCircle2 className="w-2 h-2 text-emerald-700 dark:text-[#4EBA6F]" />
                          {step}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={`text-[9px] text-stone-400 dark:text-[#62666D] font-mono ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#5E6AD2] p-2 bg-[#5E6AD2]/[0.06] rounded-lg w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-pulse"></span>
                Lisa is thinking...
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(inputText);
            }}
            className="p-2.5 bg-[#FAF7F2] dark:bg-[#08090A] border-t border-[#E8E2D5] dark:border-white/[0.08] flex items-center gap-1.5"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Lisa anything about Abhinandan..."
              className="flex-1 bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] text-xs text-stone-900 dark:text-[#EDEDEF] rounded-lg px-3 py-2 focus:outline-none focus:border-[#5E6AD2] placeholder:text-stone-400 dark:placeholder:text-[#62666D] font-sans shadow-2xs"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isThinking}
              className="p-2 bg-[#5E6AD2] hover:bg-[#6875E3] disabled:opacity-40 text-white dark:text-[#EDEDEF] font-semibold rounded-lg transition-colors cursor-pointer"
              title="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      ) : (
        /* Floating Trigger Launcher Button with optional teaser */
        <div className="flex flex-col items-end gap-2">
          {showTeaser && (
            <div className="bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.12] p-3 rounded-xl shadow-xl text-xs text-stone-700 dark:text-[#EDEDEF] max-w-[260px] animate-fadeIn flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#5E6AD2] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="leading-snug">Click anytime to chat with <strong>Lisa</strong> about Abhinandan's work!</p>
                <button
                  onClick={() => setShowTeaser(false)}
                  className="text-[10px] text-stone-400 hover:text-stone-600 dark:hover:text-white underline cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              setIsOpen(true);
              setShowTeaser(false);
            }}
            className="group px-4 py-2.5 rounded-full bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.12] hover:border-[#5E6AD2]/50 text-stone-900 dark:text-[#EDEDEF] font-semibold font-mono text-xs shadow-xl shadow-stone-900/10 dark:shadow-black/80 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-[#5E6AD2]/20 hover:ring-[#5E6AD2]/40"
          >
            <div className="relative">
              <Bot className="w-4 h-4 text-[#5E6AD2]" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#4EBA6F] animate-pulse"></span>
            </div>
            <span>Chat with Lisa</span>
          </button>
        </div>
      )}

    </div>
  );
};
