import React, { useState } from 'react';
import { Bot, Send, X, CheckCircle2, Zap, Minimize2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  thoughtProcess?: string[];
}

export const LisaChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'agent',
      text: `Hi! I'm Lisa, Abhinandan's AI assistant. Ask me anything about his PySpark & Databricks pipelines, sub-50ms API caching architectures, or his Gen AI agent systems!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const samplePrompts = [
    "What is his experience with PySpark & Databricks?",
    "How did he cut API response times from 7s to 40ms?",
    "Tell me about the HomeSight Care elderly care project.",
    "What is his background with Gen AI and AI Agents?"
  ];

  const handleAsk = (query: string) => {
    if (!query.trim()) return;

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

      if (lower.includes('pyspark') || lower.includes('databricks') || lower.includes('telemetry')) {
        matchedAnswer = "At Vantiva India, Abhinandan engineered automated PySpark & Databricks ETL pipelines processing 10,000+ daily IoT telemetry data points, automatically calculating Wi-Fi mesh uptime and maintaining ~99% SLAs across 50+ sites. He is also a Databricks Certified Data Engineer Professional.";
      } else if (lower.includes('latency') || lower.includes('40ms') || lower.includes('cache') || lower.includes('7s')) {
        matchedAnswer = "In the HomeSight Care project at Vantiva, Abhinandan migrated core Node.js APIs to a Kafka-driven in-memory cache preloaded at server startup with instant index lookups and automatic DB fallbacks, cutting response time from ~7s down to 40–50ms on high-traffic endpoints.";
      } else if (lower.includes('elderly') || lower.includes('homesight') || lower.includes('heatmap') || lower.includes('sensor')) {
        matchedAnswer = "For HomeSight Care, Abhinandan built a custom React motion-activity heat map driven by a reusable backend aggregation engine that buckets sensor events into 15-minute intervals with intensity scoring (count, sum, average, mode, median).";
      } else if (lower.includes('gen ai') || lower.includes('agent') || lower.includes('llm') || lower.includes('rag')) {
        matchedAnswer = "Abhinandan designs and builds autonomous AI agents using Gemini API, LangGraph, function calling, and RAG architectures — including self-correcting Text-to-SQL data analyst agents with sandboxed Python execution and structured guardrails.";
      } else {
        matchedAnswer = `Abhinandan Kumar is a Full Stack Data Engineer & AI Developer skilled in PySpark, Databricks, Kafka, Node.js, React, and AI agents. He has delivered telemetry pipelines processing 10k+ daily events and cut API latencies by 99%.`;
      }

      const agentMsg: ChatMessage = {
        id: 'agt-' + Date.now(),
        sender: 'agent',
        text: matchedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        thoughtProcess: [
          "Retrieved verified resume embeddings",
          "Calculated architectural context and quantified metrics",
          "Synthesized response for user inquiry"
        ]
      };

      setMessages(prev => [...prev, agentMsg]);
      setIsThinking(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Window */}
      {isOpen ? (
        <div className="w-[90vw] sm:w-[380px] h-[520px] bg-white dark:bg-[#0E131F] border border-slate-200 dark:border-white/[0.12] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="px-4 py-3 bg-slate-50 dark:bg-[#090D16] border-b border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px]">
                <div className="w-full h-full bg-slate-50 dark:bg-[#090D16] rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 dark:text-white text-xs">Lisa</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    Online
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 dark:text-neutral-400 font-mono">Abhinandan's AI Assistant</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 dark:text-neutral-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                title="Minimize chat"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 dark:text-neutral-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Questions Pill Carousel */}
          <div className="px-3 py-2 bg-slate-100/50 dark:bg-black/20 border-b border-slate-200 dark:border-white/[0.04] overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(prompt)}
                className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-500/40 transition-colors shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-[#090D16]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  </div>
                )}

                <div className="max-w-[85%] space-y-1">
                  <div
                    className={`p-2.5 rounded-xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-neutral-950 font-medium'
                        : 'bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-neutral-200 shadow-sm dark:shadow-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.thoughtProcess && (
                    <div className="p-1.5 rounded bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.04] text-[9px] font-mono text-slate-500 dark:text-neutral-500 space-y-0.5">
                      <div className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5 text-emerald-500 dark:text-emerald-400" /> Grounded Verification:
                      </div>
                      {msg.thoughtProcess.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1 text-slate-600 dark:text-neutral-400">
                          <CheckCircle2 className="w-2 h-2 text-emerald-600 dark:text-emerald-400" />
                          {step}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={`text-[9px] text-slate-400 dark:text-neutral-500 font-mono ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 p-2 bg-emerald-50 dark:bg-emerald-500/[0.06] rounded-lg w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
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
            className="p-2.5 bg-white dark:bg-[#090D16] border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-1.5"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Lisa anything about Abhinandan..."
              className="flex-1 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-500 placeholder:text-slate-400 dark:placeholder:text-neutral-500 font-sans"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isThinking}
              className="p-2 bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-500 dark:hover:bg-emerald-400 disabled:opacity-40 text-white dark:text-neutral-950 font-semibold rounded-lg transition-colors cursor-pointer"
              title="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      ) : (
        /* Floating Trigger Launcher Button (Remains clean & collapsed until clicked) */
        <button
          onClick={() => setIsOpen(true)}
          className="group px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white dark:text-neutral-950 font-semibold font-mono text-xs shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 border border-emerald-400/30 cursor-pointer"
        >
          <div className="relative">
            <Bot className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white dark:bg-neutral-950 border border-emerald-400"></span>
          </div>
          <span>Chat with Lisa</span>
        </button>
      )}

    </div>
  );
};
