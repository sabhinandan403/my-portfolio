import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Bot, Send, Sparkles, User, Terminal, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

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
      text: `Hello! I'm Abhinandan's AI Portfolio Agent. You can ask me anything about his 2+ years of experience with PySpark/Databricks, sub-50ms API caching architectures, or his latest Gen AI agent builds!`,
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

    // Simulate Agent ReAct retrieval and response
    setTimeout(() => {
      let matchedAnswer = "";
      const lower = query.toLowerCase();

      if (lower.includes('pyspark') || lower.includes('databricks') || lower.includes('telemetry')) {
        matchedAnswer = "At Vantiva India, Abhinandan built automated PySpark and Databricks ETL pipelines to process 10,000+ daily IoT telemetry data points, automatically calculating Wi-Fi mesh uptime and maintaining ~99% uptime SLAs across 50+ facility sites. He is also a Databricks Certified Data Engineer Professional.";
      } else if (lower.includes('latency') || lower.includes('40ms') || lower.includes('cache') || lower.includes('7s')) {
        matchedAnswer = "During the HomeSight Care project at Vantiva, Abhinandan migrated core Node.js APIs off direct database queries to an asynchronous caching system using Kafka and in-memory indexes preloaded at startup, reducing high-traffic response times from ~7 seconds down to 40–50ms with automatic DB fallbacks.";
      } else if (lower.includes('elderly') || lower.includes('homesight') || lower.includes('heatmap') || lower.includes('sensor')) {
        matchedAnswer = "For HomeSight Care, Abhinandan engineered a custom React motion-activity heat map with a backend engine that aggregates sensor data into 15-minute interval buckets with intensity scoring across multiple sensor types (motion, doors, windows).";
      } else if (lower.includes('gen ai') || lower.includes('agent') || lower.includes('llm') || lower.includes('rag')) {
        matchedAnswer = "Abhinandan designs and implements AI agents using Gemini API, LangGraph, tool calling, and RAG architectures — including autonomous Text-to-SQL data analyst agents with self-correcting execution loops and structured guardrails.";
      } else {
        matchedAnswer = `Abhinandan Kumar is a Full Stack Data Engineer & AI Developer skilled in PySpark, Databricks, Kafka, Node.js, React, and Gen AI agents. He has delivered telemetry pipelines processing 10k+ daily events, cut API latencies by 99%, and engineered full-stack applications.`;
      }

      const agentMsg: ChatMessage = {
        id: 'agt-' + Date.now(),
        sender: 'agent',
        text: matchedAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        thoughtProcess: [
          "Retrieved relevant chunks from Abhinandan's verified resume",
          "Executed schema introspection & metric verification",
          "Generated synthesized response with quantified impact"
        ]
      };

      setMessages(prev => [...prev, agentMsg]);
      setIsThinking(false);
    }, 650);
  };

  return (
    <div className="glass-card rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              Interactive AI Resume Assistant
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">
                RAG Agent
              </span>
            </h3>
            <p className="text-xs text-slate-400">Ask questions directly about Abhinandan's projects, experience, or skills.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Vector Index Ready</span>
        </div>
      </div>

      {/* Suggested Quick Questions */}
      <div className="my-4">
        <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-400" /> Quick Inquiries
        </div>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(prompt)}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-slate-800 transition-all text-left flex items-center gap-1.5"
            >
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat History Messages */}
      <div className="h-64 sm:h-72 overflow-y-auto space-y-4 p-4 rounded-xl bg-[#070A12] border border-slate-800/90 mb-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'agent' && (
              <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-indigo-300" />
              </div>
            )}

            <div className={`max-w-[85%] sm:max-w-[75%] space-y-1.5`}>
              <div
                className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>

              {msg.thoughtProcess && (
                <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[10px] font-mono text-slate-400 space-y-0.5">
                  <div className="text-cyan-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3 text-cyan-400" /> Agent Chain of Thought:
                  </div>
                  {msg.thoughtProcess.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-slate-400">
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                      {step}
                    </div>
                  ))}
                </div>
              )}

              <div className={`text-[10px] text-slate-400 font-mono ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-cyan-300" />
              </div>
            )}
          </div>
        ))}

        {isThinking && (
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 p-2 bg-slate-900/50 rounded-lg w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Agent retrieving resume vectors & synthesizing...
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
          placeholder="Ask a question (e.g. How does he design Kafka pipelines?)..."
          className="flex-1 bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 placeholder:text-slate-500 font-sans"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isThinking}
          className="px-4 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
        >
          <span>Send</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
