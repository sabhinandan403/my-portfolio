import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  thoughtProcess?: string[];
}

export const AgentChatPreview: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'agent',
      text: `Hello! I'm Abhinandan's AI Portfolio Agent. You can ask me anything regarding his experience with PySpark/Databricks, sub-50ms API caching architectures, or his Gen AI agent pipelines.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const samplePrompts = [
    "What is his experience with PySpark & Databricks?",
    "How did he reduce API latency from 7s to 40ms?",
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
          "Synthesized precise editorial response"
        ]
      };

      setMessages(prev => [...prev, agentMsg]);
      setIsThinking(false);
    }, 600);
  };

  return (
    <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <Bot className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
              Interactive AI Resume Assistant
              <span className="px-2 py-0.2 rounded bg-white/[0.06] text-neutral-400 text-[10px] font-mono">
                RAG Agent
              </span>
            </h3>
            <p className="text-xs text-neutral-400">Ask natural language questions about Abhinandan's technical background.</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Vector Index Ready</span>
        </div>
      </div>

      {/* Suggested Inquiries */}
      <div className="space-y-2">
        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
          Suggested Inquiries
        </div>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(prompt)}
              className="text-xs px-3 py-1.5 rounded-lg bg-black/40 border border-white/[0.08] text-neutral-300 hover:text-white hover:border-white/[0.2] transition-colors text-left flex items-center gap-1.5"
            >
              <ChevronRight className="w-3 h-3 text-emerald-400" />
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Transcript Log */}
      <div className="h-64 sm:h-72 overflow-y-auto space-y-4 p-4 rounded-xl bg-black/40 border border-white/[0.06]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'agent' && (
              <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            )}

            <div className="max-w-[85%] sm:max-w-[78%] space-y-1.5">
              <div
                className={`p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-neutral-950 font-medium'
                    : 'bg-white/[0.04] border border-white/[0.08] text-neutral-200'
                }`}
              >
                {msg.text}
              </div>

              {msg.thoughtProcess && (
                <div className="p-2 rounded-lg bg-black/30 border border-white/[0.04] text-[10px] font-mono text-neutral-500 space-y-0.5">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3 text-emerald-400" /> Reasoning Trace:
                  </div>
                  {msg.thoughtProcess.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-neutral-400">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      {step}
                    </div>
                  ))}
                </div>
              )}

              <div className={`text-[10px] text-neutral-500 font-mono ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div className="w-6 h-6 rounded bg-white/[0.1] border border-white/[0.15] flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-3.5 h-3.5 text-neutral-300" />
              </div>
            )}
          </div>
        ))}

        {isThinking && (
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 p-2 bg-emerald-500/[0.06] rounded-lg w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Agent retrieving resume vectors &amp; synthesizing...
          </div>
        )}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk(inputText);
        }}
        className="flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask a question about Abhinandan's engineering accomplishments..."
          className="flex-1 bg-black/40 border border-white/[0.08] text-xs sm:text-sm text-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 placeholder:text-neutral-600 font-sans"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isThinking}
          className="px-4 py-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-neutral-950 font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
