import React, { useState } from 'react';
import { Database, Server, Cpu, ArrowRight, Zap, CheckCircle2, Layers, ShieldCheck, ArrowDown, Activity, Clock, BarChart3, TrendingDown } from 'lucide-react';

export const ArchitectureShowcase: React.FC = () => {
  const [activeArch, setActiveArch] = useState<'caching' | 'telemetry' | 'aggregation'>('caching');

  return (
    <section id="architectures" className="py-20 relative bg-dot-grid border-y border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            System Design &amp; Case Studies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering Architecture Deep Dives
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl">
            Visual breakdowns of production solutions engineered at scale — from cutting API latency by 99% to high-throughput streaming lakehouses.
          </p>
        </div>

        {/* Architecture Navigation Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveArch('caching')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
              activeArch === 'caching'
                ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                : 'bg-black/30 border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2]'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Low-Latency Cache (7s → 40ms)</span>
          </button>

          <button
            onClick={() => setActiveArch('telemetry')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
              activeArch === 'telemetry'
                ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                : 'bg-black/30 border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2]'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>IoT Streaming Lakehouse (10k+ Events)</span>
          </button>

          <button
            onClick={() => setActiveArch('aggregation')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
              activeArch === 'aggregation'
                ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                : 'bg-black/30 border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2]'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>15-Min Sensor Aggregation Engine</span>
          </button>
        </div>

        {/* Dynamic Architecture Display */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-8">
          
          {/* ARCHITECTURE 1: CACHING MIGRATION */}
          {activeArch === 'caching' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    VANTIVA INDIA &bull; HOMESIGHT CARE
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5">
                    Kafka &amp; In-Memory Cache Migration (7s → 40–50ms)
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Decoupling heavy relational database queries during peak traffic via server-start preloaded caching and automatic DB fallback.
                  </p>
                </div>

                {/* Benchmark Comparison Badge */}
                <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06] flex items-center gap-4 shrink-0">
                  <div>
                    <div className="text-[9px] font-mono text-neutral-500">BEFORE (DIRECT DB)</div>
                    <div className="text-sm font-bold font-mono text-red-400 line-through">~7,000 ms</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-[9px] font-mono text-emerald-400 font-semibold">AFTER (CACHED)</div>
                    <div className="text-lg font-bold font-mono text-emerald-400">40–50 ms</div>
                  </div>
                </div>
              </div>

              {/* Visual Node Diagram */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  Data &amp; Request Flow Architecture
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {/* Step 1 */}
                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 font-bold">01. INGESTION</span>
                      <Server className="w-3.5 h-3.5 text-neutral-400" />
                    </div>
                    <h4 className="text-xs font-semibold text-white">Client API Request</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Encrypted user/hub request arrives at the Node.js API gateway.
                    </p>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      RBAC / ABAC Guard
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-black/30 border border-emerald-500/30 rounded-xl p-4 space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 font-bold">02. CACHE HIT</span>
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <h4 className="text-xs font-semibold text-white">In-Memory Preloaded Index</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Lookups resolve directly against indexed in-memory data preloaded at startup.
                    </p>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold w-fit">
                      Response: 40–50ms
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-400 font-bold">03. ASYNC SYNC</span>
                      <Activity className="w-3.5 h-3.5 text-neutral-400" />
                    </div>
                    <h4 className="text-xs font-semibold text-white">Apache Kafka Event Bus</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Mutations &amp; sensor updates broadcast across Kafka topics to invalidate and sync caches.
                    </p>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Non-blocking Pub/Sub
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-400 font-bold">04. RESILIENCE</span>
                      <Database className="w-3.5 h-3.5 text-neutral-400" />
                    </div>
                    <h4 className="text-xs font-semibold text-white">Database Fallback</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      If index miss occurs, request falls back safely to PostgreSQL, returning &amp; rehydrating cache.
                    </p>
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 w-fit">
                      Zero Data Loss
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Technical Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">Server-Start Preload</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Loads critical user-hub topologies at boot for immediate zero-lag lookups.</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">RBAC/ABAC Integrated</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Enforces role &amp; attribute security checks directly at the cached routing layer.</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs">
                  <div className="font-semibold text-white">99% Latency Reduction</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Successfully reviewed and approved with senior architects prior to production rollout.</div>
                </div>
              </div>
            </div>
          )}

          {/* ARCHITECTURE 2: STREAMING LAKEHOUSE */}
          {activeArch === 'telemetry' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    VANTIVA INDIA &bull; SMART SPACES
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5">
                    IoT Telemetry Lakehouse &amp; Automated Wi-Fi SLA Engine
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Processing 10,000+ daily telemetry data points across 50+ facility sites with automated uptime calculations.
                  </p>
                </div>

                <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06] flex items-center gap-4 shrink-0 font-mono text-xs">
                  <div>
                    <div className="text-[9px] text-neutral-500">DAILY EVENTS</div>
                    <div className="text-white font-bold">10,000+</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-neutral-500">FACILITY SITES</div>
                    <div className="text-white font-bold">50+</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-emerald-400 font-semibold">UPTIME SLA</div>
                    <div className="text-emerald-400 font-bold">~99%</div>
                  </div>
                </div>
              </div>

              {/* Visual Lakehouse Flow */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  Medallion Ingestion &amp; Analytics Pipeline
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-3.5 space-y-1.5">
                    <span className="text-[10px] font-mono text-neutral-400 font-bold">01. EDGE</span>
                    <h4 className="text-xs font-semibold text-white">50+ Facility Sites</h4>
                    <p className="text-[11px] text-neutral-400 leading-snug">
                      LoRa, Zigbee sensors &amp; Wi-Fi mesh routers transmitting telemetry.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-3.5 space-y-1.5">
                    <span className="text-[10px] font-mono text-neutral-400 font-bold">02. STREAM</span>
                    <h4 className="text-xs font-semibold text-white">Kafka Event Bus</h4>
                    <p className="text-[11px] text-neutral-400 leading-snug">
                      High-throughput distributed stream partitioning and message queuing.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-emerald-500/30 rounded-xl p-3.5 space-y-1.5">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">03. LAKEHOUSE</span>
                    <h4 className="text-xs font-semibold text-white">PySpark &amp; Databricks</h4>
                    <p className="text-[11px] text-neutral-400 leading-snug">
                      Medallion (Bronze/Silver/Gold) cleaning, schema validation, and aggregation.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-3.5 space-y-1.5">
                    <span className="text-[10px] font-mono text-neutral-400 font-bold">04. SLA ENGINE</span>
                    <h4 className="text-xs font-semibold text-white">Automated Wi-Fi Uptime</h4>
                    <p className="text-[11px] text-neutral-400 leading-snug">
                      Replaced manual router checks with automated site uptime metrics.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-3.5 space-y-1.5">
                    <span className="text-[10px] font-mono text-neutral-400 font-bold">05. DELIVERY</span>
                    <h4 className="text-xs font-semibold text-white">Power BI &amp; Lambda</h4>
                    <p className="text-[11px] text-neutral-400 leading-snug">
                      Executive dashboards and on-demand Excel debugging reports.
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-semibold text-white">Automated SLA Monitoring</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Continuously calculated Wi-Fi mesh uptime, diagnosing missing packets and offline anomalies to maintain ~99% uptime.</div>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-semibold text-white">AWS Lambda On-Demand Reporting</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Enabled facility managers to generate 24-hour and custom date-range performance reports on demand.</div>
                </div>
              </div>
            </div>
          )}

          {/* ARCHITECTURE 3: SENSOR AGGREGATION */}
          {activeArch === 'aggregation' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    VANTIVA INDIA &bull; HOMESIGHT CARE
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5">
                    15-Minute Interval Sensor Aggregation Engine
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Mathematical aggregation of sparse binary IoT triggers into continuous 15-minute intensity interval scores for elderly care.
                  </p>
                </div>

                <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06] text-xs font-mono shrink-0">
                  <div className="text-[9px] text-neutral-500 uppercase">INTERVAL RESOLUTION</div>
                  <div className="text-emerald-400 font-bold">15-Min Buckets (96/day)</div>
                </div>
              </div>

              {/* Visual Calculation Workflow */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  Transformation &amp; Intensity Scoring Pipeline
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-4 space-y-2">
                    <span className="text-xs font-mono text-neutral-400 font-bold">STEP 1: RAW INGESTION</span>
                    <h4 className="text-xs font-semibold text-white">Sparse Binary Triggers</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Door, window, and PIR motion sensors emit asynchronous binary timestamps (0/1 events).
                    </p>
                  </div>

                  <div className="bg-black/30 border border-emerald-500/30 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-mono text-emerald-400 font-bold">STEP 2: WINDOWED BUCKETING</span>
                    <h4 className="text-xs font-semibold text-white">Aggregation Engine</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Backend logic partitions 24-hour cycles into 96 15-minute sliding windows, computing count, sum, average, mode, and median.
                    </p>
                  </div>

                  <div className="bg-black/30 border border-white/[0.06] rounded-xl p-4 space-y-2">
                    <span className="text-xs font-mono text-neutral-400 font-bold">STEP 3: CARE DELIVERY</span>
                    <h4 className="text-xs font-semibold text-white">Heatmap &amp; Anomaly Alerts</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Front-end matrix maps activity density over time, instantly alerting caregivers to routine anomalies (e.g. low morning mobility).
                    </p>
                  </div>
                </div>
              </div>

              {/* Generalized Engine Features */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2 text-xs">
                <div className="font-semibold text-white">Reusable Engine Design</div>
                <p className="text-neutral-300 text-xs leading-relaxed">
                  Engineered with generalized mathematical functions allowing the same backend module to process multiple sensor types (PIR motion, magnetic reed door/window contacts, and smart plugs) across diverse customer floor plans.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
