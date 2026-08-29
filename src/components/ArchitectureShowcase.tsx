import React, { useState, useEffect } from 'react';
import { Database, Server, Cpu, ArrowRight, Zap, CheckCircle2, Activity, Wifi, BarChart3, Layers, ArrowDown } from 'lucide-react';

export const ArchitectureShowcase: React.FC = () => {
  const [activeArch, setActiveArch] = useState<'caching' | 'telemetry' | 'aggregation'>('caching');
  const [activePulseStep, setActivePulseStep] = useState<number>(0);

  // Cycle through pipeline steps to animate live data flow
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePulseStep(prev => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(interval);
  }, [activeArch]);

  return (
    <section id="architectures" className="py-20 relative bg-dot-grid border-y border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            System Design &amp; Flow
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            System Architecture Deep Dives
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl">
            Visual workflows showing how raw data flows from edge devices to low-latency caching and automated intelligence.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveArch('caching');
              setActivePulseStep(0);
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
              activeArch === 'caching'
                ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                : 'bg-black/30 border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Low-Latency Cache (7s → 40ms)</span>
          </button>

          <button
            onClick={() => {
              setActiveArch('telemetry');
              setActivePulseStep(0);
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
              activeArch === 'telemetry'
                ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                : 'bg-black/30 border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2]'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>IoT Streaming Lakehouse (10k+ Events)</span>
          </button>

          <button
            onClick={() => {
              setActiveArch('aggregation');
              setActivePulseStep(0);
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
              activeArch === 'aggregation'
                ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                : 'bg-black/30 border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2]'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>15-Min Sensor Aggregation Engine</span>
          </button>
        </div>

        {/* Fixed Min-Height Container: Eliminates Jitter & Box Size Shifting */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 min-h-[580px] flex flex-col justify-between transition-all duration-200">
          
          {/* TAB 1: CACHING MIGRATION */}
          {activeArch === 'caching' && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    VANTIVA INDIA &bull; HOMESIGHT CARE
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5">
                    Kafka &amp; In-Memory Cache Migration (7s → 40–50ms)
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Decoupled heavy database reads by serving requests from a preloaded in-memory cache with async Kafka sync.
                  </p>
                </div>

                {/* Benchmark Pill */}
                <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06] flex items-center gap-4 shrink-0 font-mono">
                  <div>
                    <div className="text-[9px] text-neutral-500">BEFORE (DIRECT DB)</div>
                    <div className="text-sm font-bold text-red-400 line-through">~7,000 ms</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-[9px] text-emerald-400 font-semibold">AFTER (CACHED)</div>
                    <div className="text-lg font-bold text-emerald-400">40–50 ms</div>
                  </div>
                </div>
              </div>

              {/* Animated 4-Step Flow with Flowing Arrows */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  <span>Data &amp; Request Flow (Live Flowing Architecture)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Step 0{activePulseStep + 1} Processing
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                  
                  {/* Step 1 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 relative ${
                    activePulseStep === 0 
                      ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' 
                      : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-emerald-400 font-bold">01. INGESTION</span>
                        <Server className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">Client API Request</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Encrypted user request hits Node.js API layer.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      RBAC / ABAC Guard
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 relative ${
                    activePulseStep === 1 
                      ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' 
                      : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-emerald-400 font-bold">02. CACHE HIT</span>
                        <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">In-Memory Index</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Instant lookup from preloaded startup memory index.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold w-fit">
                      Response: 40–50ms
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 relative ${
                    activePulseStep === 2 
                      ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' 
                      : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-neutral-400 font-bold">03. ASYNC SYNC</span>
                        <Activity className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">Kafka Event Bus</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Mutations broadcast to invalidate &amp; sync caches.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Non-blocking Pub/Sub
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 relative ${
                    activePulseStep === 3 
                      ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' 
                      : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-neutral-400 font-bold">04. RESILIENCE</span>
                        <Database className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">Database Fallback</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Automatic DB query fallback on cache miss.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Zero Data Loss
                    </div>
                  </div>

                </div>

                {/* Animated Data Flow Direction Beam */}
                <div className="hidden md:flex items-center justify-between px-8 pt-1 text-emerald-400 text-xs font-mono">
                  <span className="flex items-center gap-1 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Incoming Request
                  </span>
                  <div className="flex-1 mx-4 h-[1.5px] bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-emerald-500/20 relative overflow-hidden">
                    <div className="w-12 h-full bg-white animate-pulse" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px]">
                    Sub-50ms Response Delivered
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                </div>
              </div>

              {/* Bottom Highlights (Standardized Height) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">Server-Start Preload</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Preloads high-frequency topology into RAM at boot for zero-lag index hits.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">RBAC / ABAC Integrated</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Role &amp; attribute security enforced directly at the cached routing layer.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">99% Latency Cut</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Validated and verified with senior architecture team before production release.</div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: STREAMING LAKEHOUSE */}
          {activeArch === 'telemetry' && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    VANTIVA INDIA &bull; SMART SPACES
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5">
                    IoT Telemetry Lakehouse &amp; Automated Wi-Fi SLA Engine
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Processing 10,000+ daily IoT telemetry data points across 50+ facility sites with automated uptime calculation.
                  </p>
                </div>

                <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06] flex items-center gap-4 shrink-0 font-mono text-xs">
                  <div>
                    <div className="text-[9px] text-neutral-500">DAILY EVENTS</div>
                    <div className="text-white font-bold">10,000+</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-neutral-500">FACILITIES</div>
                    <div className="text-white font-bold">50+</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-emerald-400 font-semibold">UPTIME SLA</div>
                    <div className="text-emerald-400 font-bold">~99%</div>
                  </div>
                </div>
              </div>

              {/* Animated 4-Step Lakehouse Flow */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  <span>Pipeline Architecture (Flowing Sensor Stream)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Step 0{activePulseStep + 1} Processing
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                  
                  {/* Step 1 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 ${
                    activePulseStep === 0 ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-emerald-400 font-bold">01. EDGE EMISSION</span>
                        <Wifi className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">50+ Facility Sites</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        LoRa, Zigbee &amp; Wi-Fi mesh routers transmitting uptime packets.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Multi-site Ingestion
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 ${
                    activePulseStep === 1 ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-emerald-400 font-bold">02. STREAM BUS</span>
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">Kafka Message Bus</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        High-frequency event partitioning &amp; real-time queue ingestion.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold w-fit">
                      10,000+ Daily Events
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 ${
                    activePulseStep === 2 ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-neutral-400 font-bold">03. LAKEHOUSE</span>
                        <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">PySpark &amp; Databricks</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Medallion Delta Lake processing with automated SLA calculations.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Automated Uptime
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 ${
                    activePulseStep === 3 ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-neutral-400 font-bold">04. REPORTING</span>
                        <BarChart3 className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">Power BI &amp; Lambda</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Real-time dashboards &amp; on-demand Excel reports for site managers.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      99% SLA Maintained
                    </div>
                  </div>

                </div>

                {/* Animated Flow Beam */}
                <div className="hidden md:flex items-center justify-between px-8 pt-1 text-emerald-400 text-xs font-mono">
                  <span className="flex items-center gap-1 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    50+ Sites Stream In
                  </span>
                  <div className="flex-1 mx-4 h-[1.5px] bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-emerald-500/20 relative overflow-hidden">
                    <div className="w-12 h-full bg-white animate-pulse" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px]">
                    Executive Insights Delivered
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                </div>
              </div>

              {/* Bottom Highlights (Standardized Height) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">Automated SLA Uptime</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Replaced manual router checks with automated calculations across 50+ facilities.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">On-Demand AWS Lambda</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Instant 24-hour and custom date-range performance reporting for engineering debugging.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">Real-Time Power BI</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Custom visual metrics monitoring mesh health, packet drops, and device latency.</div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: SENSOR AGGREGATION */}
          {activeArch === 'aggregation' && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    VANTIVA INDIA &bull; HOMESIGHT CARE
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5">
                    15-Minute Sensor Aggregation Engine
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Aggregating sparse binary sensor events into continuous 15-minute intensity interval scores for elderly care.
                  </p>
                </div>

                <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06] text-xs font-mono shrink-0">
                  <div className="text-[9px] text-neutral-500 uppercase">INTERVAL RESOLUTION</div>
                  <div className="text-emerald-400 font-bold">15-Min Intervals (96/day)</div>
                </div>
              </div>

              {/* Animated 4-Step Workflow */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  <span>Transformation Workflow (Sparse to Continuous)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Step 0{activePulseStep + 1} Processing
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                  
                  {/* Step 1 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 ${
                    activePulseStep === 0 ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-emerald-400 font-bold">01. RAW TICKS</span>
                        <Activity className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">Binary Triggers</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        PIR motion, door &amp; window sensors emit timestamped 0/1 pulses.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Asynchronous Stream
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 ${
                    activePulseStep === 1 ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-emerald-400 font-bold">02. BUCKETING</span>
                        <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">15-Min Windows</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Partitions 24 hours into 96 discrete 15-minute sliding intervals.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold w-fit">
                      96 Daily Windows
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 ${
                    activePulseStep === 2 ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-neutral-400 font-bold">03. AGGREGATION</span>
                        <Cpu className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">Intensity Engine</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Calculates count, sum, average, mode, and median metrics.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Multi-formula Math
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className={`bg-black/30 border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 ${
                    activePulseStep === 3 ? 'border-emerald-400 shadow-md shadow-emerald-500/10 bg-white/[0.04]' : 'border-white/[0.06]'
                  }`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-neutral-400 font-bold">04. ALERTING</span>
                        <BarChart3 className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                      <h4 className="text-xs font-semibold text-white">Heatmap &amp; Alerts</h4>
                      <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                        Caregivers receive alerts when routine mobility drops significantly.
                      </p>
                    </div>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Caregiver Visibility
                    </div>
                  </div>

                </div>

                {/* Animated Flow Beam */}
                <div className="hidden md:flex items-center justify-between px-8 pt-1 text-emerald-400 text-xs font-mono">
                  <span className="flex items-center gap-1 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Binary Sensors Emit
                  </span>
                  <div className="flex-1 mx-4 h-[1.5px] bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-emerald-500/20 relative overflow-hidden">
                    <div className="w-12 h-full bg-white animate-pulse" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px]">
                    Elderly Care Alerts Triggered
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </span>
                </div>
              </div>

              {/* Bottom Highlights (Standardized Height) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">Reusable Engine Design</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Generalized module handles PIR motion, magnetic door contacts, and smart plugs.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">15-Min Granularity</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Provides ideal balance between statistical precision and caregiver clarity.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">Anomaly Detection</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Flags unexpected gaps during habitual morning and evening active hours.</div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
