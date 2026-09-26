import React, { useState } from 'react';
import { Bot, Send, X, CheckCircle2, Zap, Minimize2, Key, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  isGenAI?: boolean;
  thoughtProcess?: string[];
  actionLink?: {
    label: string;
    url: string;
  };
}

export const LisaChatWidget: React.FC = () => {
  // Open by default on page load so visitors can directly ask or minimize to explore
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [proxyUrl, setProxyUrl] = useState<string>(() => {
    return (import.meta.env.VITE_LISA_PROXY_URL as string) || localStorage.getItem('ak_portfolio_lisa_proxy') || '';
  });
  const [apiKey, setApiKey] = useState<string>(() => {
    return (import.meta.env.VITE_GEMINI_API_KEY as string) || localStorage.getItem('ak_portfolio_gemini_key') || '';
  });
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);
  const [tempKeyInput, setTempKeyInput] = useState<string>('');
  const [tempProxyInput, setTempProxyInput] = useState<string>('');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'agent',
      text: `Hi! I'm Lisa, Abhinandan's AI assistant. Ask me anything about his work with Snowflake & dbt, PySpark & Databricks IoT pipelines, 40ms in-memory caching, or SQL Server architecture!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const samplePrompts = [
    "Tell me about his Snowflake & dbt experience",
    "How did he cut API latency from 7s to 40–50ms?",
    "What did he build with PySpark & Databricks?",
    "What are his core skills and certifications?"
  ];

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedKey = tempKeyInput.trim();
    const trimmedProxy = tempProxyInput.trim();

    if (trimmedProxy) {
      setProxyUrl(trimmedProxy);
      localStorage.setItem('ak_portfolio_lisa_proxy', trimmedProxy);
    }
    if (trimmedKey) {
      setApiKey(trimmedKey);
      localStorage.setItem('ak_portfolio_gemini_key', trimmedKey);
    }

    if (trimmedKey || trimmedProxy) {
      setShowKeyInput(false);
      setTempKeyInput('');
      setTempProxyInput('');
      setMessages(prev => [
        ...prev,
        {
          id: 'key-set-' + Date.now(),
          sender: 'agent',
          text: trimmedProxy 
            ? `Connected to your Cloudflare/Vercel serverless proxy! Lisa is now powered by live GenAI intelligence.`
            : `Gemini API key connected successfully! Lisa is now powered by Google Gemini 2.0 Flash. Ask me anything!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isGenAI: true
        }
      ]);
    }
  };

  const generateSystemPrompt = () => {
    return `You are Lisa, the personal AI portfolio assistant for Abhinandan Kumar, a Full Stack Data Engineer with 3 years of experience.
Your goal is to answer recruiters, founders, and engineering managers accurately, warmly, and concisely based strictly on his verified resume.

GROUND TRUTH RESUME DATA:
- Name: ${PORTFOLIO_DATA.personal.name}
- Title: ${PORTFOLIO_DATA.personal.title}
- Phone: ${PORTFOLIO_DATA.personal.phone}
- Email: ${PORTFOLIO_DATA.personal.email}
- LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}
- GitHub: ${PORTFOLIO_DATA.personal.github}
- Resume PDF: ${PORTFOLIO_DATA.personal.googleDriveResumeUrl}

PROFESSIONAL SUMMARY:
${PORTFOLIO_DATA.personal.summary}

EXPERIENCE:
1. Vantiva India (Software Engineer | Data Engineer, Jun 2024 - Present):
   - Smart Spaces: Built Snowflake ELT ingestion using stages, COPY INTO, Streams, and Tasks; developed dbt SQL models across staging, intermediate, and mart layers with incremental processing and surrogate-key joins; designed analytical data models with source granularity and business keys; debugged failed Snowflake loads and tuned tasks using query profiling and warehouse metrics; developed SQL Server stored procedures, triggers, views, and complex T-SQL for multi-table joins and archival; built PySpark/Databricks ETL pipelines processing 10,000+ daily IoT telemetry data points calculating automated Wi-Fi mesh uptime; built AWS Lambda on-demand Excel reports across 50+ facility sites; debugged LoRa/Zigbee devices maintaining ~99% uptime SLA; developed real-time Power BI dashboards.
   - HomeSight Care: Migrated core APIs from direct database reads to Kafka-backed in-memory caching layer with indexed lookups and database fallback, cutting latency from ~7 seconds to 40–50 ms; integrated RBAC/ABAC permission models covering all user-module endpoints; resolved 30+ bugs and delivered 10+ frontend features.

2. Wow Labz (Backend Engineer Intern, Apr 2024 - Jun 2024):
   - Cab Booking App: Built FastAPI reporting service used daily by admins and 10-12 fleet drivers.
   - Video Pipeline: Built 7-phase distributed video processing pipeline on AWS S3 and Kafka for chunking and multi-language dubbing.

3. Yamaha Motor Solutions India (Graduate Engineer Trainee | Full Stack Developer, Jul 2023 - Apr 2024):
   - Peer Review App: Full-stack review app for 30 engineers with automated tracking, Hasura GraphQL on PostgreSQL, and RabbitMQ notifications.

CERTIFICATIONS:
- Databricks Data Engineering Professional & Databricks Fundamentals Accreditation
- McKinsey Forward Learning Program - Problem Solving, Leadership & Communication

EDUCATION:
- B.Tech in Computer Science Engineering (2019 - 2023), Kurukshetra University, GPA: 8.02 / 10

CORE RULES:
- Keep answers concise (2 to 4 sentences) unless a detailed explanation is explicitly requested.
- If asked about his resume, offer to open the PDF resume directly.
- Speak in a professional, polite, and enthusiastic first-person voice as Lisa ("Abhinandan has...", "In his work at Vantiva...").
- Never make up skills or experiences outside this ground truth.`;
  };

  const callGeminiLLM = async (userPrompt: string, history: ChatMessage[]): Promise<string> => {
    const activeProxy = proxyUrl || (import.meta.env.VITE_LISA_PROXY_URL as string);
    const activeKey = apiKey || (import.meta.env.VITE_GEMINI_API_KEY as string);

    if (!activeProxy && !activeKey) {
      throw new Error("NO_API_KEY_OR_PROXY");
    }

    // Format conversation history for Gemini API
    const formattedContents = history
      .filter(m => m.id !== 'msg-1' && !m.id.startsWith('key-set'))
      .slice(-6)
      .map(m => ({
        role: m.sender === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

    formattedContents.push({
      role: 'user',
      parts: [{ text: userPrompt }]
    });

    const payload = {
      systemInstruction: {
        parts: [{ text: generateSystemPrompt() }]
      },
      contents: formattedContents,
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 500,
      }
    };

    const targetUrl = activeProxy
      ? activeProxy
      : `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${activeKey}`;

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData?.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText) {
      throw new Error("No response generated");
    }
    return candidateText;
  };

  const generateGroundedFallback = (query: string): string => {
    const lower = query.toLowerCase();

    if (lower.includes('snowflake') || lower.includes('dbt')) {
      return "At Vantiva India, Abhinandan built end-to-end Snowflake ELT pipelines using stages, COPY INTO, Streams, and Tasks for scheduled incremental loads. He developed dbt SQL models across staging, intermediate, and mart layers using surrogate-key joins, and tuned workloads using query profiling and warehouse metrics.";
    } else if (lower.includes('pyspark') || lower.includes('databricks') || lower.includes('telemetry') || lower.includes('lakehouse')) {
      return "At Vantiva, Abhinandan engineered automated PySpark & Databricks pipelines processing 10,000+ daily IoT telemetry events to calculate Wi-Fi mesh uptime automatically. He also built AWS Lambda on-demand Excel reporting across 50+ facility sites maintaining a ~99% uptime SLA.";
    } else if (lower.includes('latency') || lower.includes('40ms') || lower.includes('cache') || lower.includes('7s') || lower.includes('homesight')) {
      return "For Vantiva's HomeSight Care ecosystem, Abhinandan migrated core APIs from direct database reads to a Kafka-backed in-memory caching layer with indexed lookups and database fallback. This slashed response times by 99% from ~7 seconds down to 40–50 ms, while enforcing strict RBAC/ABAC role-based security.";
    } else if (lower.includes('sql') || lower.includes('stored proc') || lower.includes('database')) {
      return "Abhinandan has strong SQL expertise across Snowflake, MS SQL Server, and PostgreSQL. He has written stored procedures, triggers, views, CTE-based transformations, and complex multi-table joins supporting analytics and historical-data archival.";
    } else if (lower.includes('certification') || lower.includes('degree') || lower.includes('education')) {
      return "Abhinandan holds the Databricks Certified Data Engineer Professional & Fundamentals accreditations, completed the McKinsey Forward Learning Program, and graduated with a B.Tech in Computer Science Engineering (GPA: 8.02 / 10).";
    } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach')) {
      return `You can reach Abhinandan directly at ${PORTFOLIO_DATA.personal.email} or on LinkedIn at linkedin.com/in/abhinandankumar. He is currently open to high-impact data engineering opportunities!`;
    } else if (lower.includes('resume') || lower.includes('cv') || lower.includes('pdf')) {
      return "You can view or download Abhinandan's complete official resume PDF right now using the button below or from the top navigation bar.";
    }

    return "Abhinandan Kumar is a Data Engineer with 3 years of experience specializing in Snowflake, dbt, SQL Server, Databricks, PySpark, and low-latency API caching. What specific area of his work would you like to explore?";
  };

  const handleAsk = async (query: string) => {
    if (!query.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputText('');
    setIsThinking(true);

    try {
      // Attempt live Gemini 2.0 Flash LLM call
      const genAIResponse = await callGeminiLLM(query, newHistory);

      const agentMsg: ChatMessage = {
        id: 'agt-' + Date.now(),
        sender: 'agent',
        text: genAIResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isGenAI: true,
        thoughtProcess: [
          "Grounded via Google Gemini 2.0 Flash",
          "Synthesized from official resume knowledge base"
        ],
        actionLink: query.toLowerCase().includes('resume') ? {
          label: "Open Official PDF Resume",
          url: PORTFOLIO_DATA.personal.googleDriveResumeUrl
        } : undefined
      };

      setMessages(prev => [...prev, agentMsg]);
    } catch {
      // Graceful fallback to verified resume data if API key is not yet set or hits network issues
      setTimeout(() => {
        const fallbackText = generateGroundedFallback(query);

        const agentMsg: ChatMessage = {
          id: 'agt-' + Date.now(),
          sender: 'agent',
          text: fallbackText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isGenAI: false,
          thoughtProcess: [
            "Verified from official resume database",
            !apiKey ? "Connect a free Gemini API key via the key icon above for dynamic GenAI responses" : "Synthesized answer"
          ],
          actionLink: (query.toLowerCase().includes('resume') || query.toLowerCase().includes('cv')) ? {
            label: "Open Official PDF Resume",
            url: PORTFOLIO_DATA.personal.googleDriveResumeUrl
          } : undefined
        };

        setMessages(prev => [...prev, agentMsg]);
      }, 500);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Window */}
      {isOpen ? (
        <div className="w-[90vw] sm:w-[390px] h-[530px] bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.12] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn transition-all">
          
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
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-600/10 dark:bg-[#4EBA6F]/10 text-emerald-800 dark:text-[#4EBA6F] border border-emerald-600/20 dark:border-[#4EBA6F]/20 font-semibold flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-600 dark:text-[#4EBA6F]" />
                    {apiKey ? 'GenAI Active' : 'Online'}
                  </span>
                </div>
                <div className="text-[10px] text-stone-500 dark:text-[#8A8F98] font-mono">Abhinandan's AI Assistant</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowKeyInput(!showKeyInput)}
                className={`p-1.5 rounded-lg text-stone-400 dark:text-[#8A8F98] hover:text-[#5E6AD2] hover:bg-stone-200/60 dark:hover:bg-white/[0.06] transition-colors cursor-pointer ${
                  apiKey ? 'text-[#5E6AD2]' : ''
                }`}
                title={apiKey ? "Gemini API Key Connected" : "Connect Gemini API Key"}
                aria-label="API Settings"
              >
                <Key className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] hover:bg-stone-200/60 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                title="Minimize chat"
                aria-label="Minimize"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] hover:bg-stone-200/60 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                title="Close chat"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Gemini API Key & Cloudflare Proxy Configuration Drawer */}
          {showKeyInput && (
            <div className="p-3 bg-[#FAF7F2] dark:bg-[#08090A] border-b border-[#E8E2D5] dark:border-white/[0.08] animate-fadeIn text-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-stone-900 dark:text-[#EDEDEF] font-mono text-[11px] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#5E6AD2]" /> GenAI Backend Settings
                </span>
                <span className="text-[10px] text-stone-500 dark:text-[#8A8F98] font-mono">
                  {proxyUrl ? 'Proxy Active' : apiKey ? 'Key Connected' : 'Free Mode'}
                </span>
              </div>

              <form onSubmit={handleSaveKey} className="space-y-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-stone-500 dark:text-[#8A8F98]">
                    Option 1: Cloudflare/Vercel Proxy URL (Key hidden)
                  </label>
                  <input
                    type="url"
                    value={tempProxyInput}
                    onChange={(e) => setTempProxyInput(e.target.value)}
                    placeholder={proxyUrl || "https://lisa-proxy.yourname.workers.dev"}
                    className="w-full bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] text-xs text-stone-900 dark:text-[#EDEDEF] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#5E6AD2] font-mono text-[11px]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-stone-500 dark:text-[#8A8F98]">
                    Option 2: Direct Google Gemini API Key
                  </label>
                  <input
                    type="password"
                    value={tempKeyInput}
                    onChange={(e) => setTempKeyInput(e.target.value)}
                    placeholder={apiKey ? "••••••••••••••••••••" : "Paste AI Studio API Key"}
                    className="w-full bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] text-xs text-stone-900 dark:text-[#EDEDEF] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#5E6AD2] font-mono text-[11px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-1.5 bg-[#5E6AD2] hover:bg-[#6875E3] text-white dark:text-[#EDEDEF] font-semibold rounded-md font-mono text-[11px] cursor-pointer shadow-xs"
                >
                  Save Settings
                </button>
              </form>
            </div>
          )}

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

                    {msg.actionLink && (
                      <div className="pt-2 mt-2 border-t border-stone-200 dark:border-white/[0.08]">
                        <a
                          href={msg.actionLink.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#5E6AD2] hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>{msg.actionLink.label}</span>
                        </a>
                      </div>
                    )}
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
                Lisa is reasoning with Gemini...
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
              placeholder="Ask anything about Abhinandan's engineering work..."
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
        /* Floating Trigger Launcher Button (Clean & Minimized) */
        <button
          onClick={() => setIsOpen(true)}
          className="group px-4 py-2.5 rounded-full bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.12] hover:border-[#5E6AD2]/50 text-stone-900 dark:text-[#EDEDEF] font-semibold font-mono text-xs shadow-xl shadow-stone-900/10 dark:shadow-black/80 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-[#5E6AD2]/20 hover:ring-[#5E6AD2]/40"
        >
          <div className="relative">
            <Bot className="w-4 h-4 text-[#5E6AD2]" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#4EBA6F] animate-pulse"></span>
          </div>
          <span>Chat with Lisa</span>
        </button>
      )}

    </div>
  );
};
