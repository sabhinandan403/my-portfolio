import React, { useState, useEffect } from 'react';
import { Database, Server, Cpu, ArrowRight, Zap, CheckCircle2, Activity, Wifi, BarChart3, Layers, ChevronRight } from 'lucide-react';

interface StepNode {
  step: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  badgeType: 'emerald' | 'neutral';
  icon: React.ElementType;
}

export const ArchitectureShowcase: React.FC = () => {
  const [activeArch, setActiveArch] = useState<'caching' | 'telemetry' | 'aggregation'>('caching');
  const [activePulseStep, setActivePulseStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Synchronized step progression timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActivePulseStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeArch, isAutoPlaying]);

  // Tab 1: Caching Migration steps
  const cachingSteps: StepNode[] = [
    {
      step: '01. INGESTION',
      tag: 'CLIENT REQ',
      title: 'Client API Request',
      description: 'Encrypted request hits the Node.js API gateway layer.',
      badge: 'RBAC / ABAC Guard',
      badgeType: 'neutral',
      icon: Server
    },
    {
      step: '02. CACHE HIT',
      tag: 'FAST LOOKUP',
      title: 'In-Memory Index',
      description: 'Lookups resolve instantly from preloaded RAM index at boot.',
      badge: 'Response: 40–50ms',
      badgeType: 'emerald',
      icon: Zap
    },
    {
      step: '03. ASYNC SYNC',
      tag: 'EVENT BUS',
      title: 'Kafka Event Bus',
      description: 'Mutations broadcast across topics to sync and invalidate caches.',
      badge: 'Non-blocking Pub/Sub',
      badgeType: 'neutral',
      icon: Activity
    },
    {
      step: '04. RESILIENCE',
      tag: 'DB SAFEGUARD',
      title: 'Database Fallback',
      description: 'On rare cache miss, request falls back safely to PostgreSQL.',
      badge: 'Zero Data Loss',
      badgeType: 'neutral',
      icon: Database
    }
  ];

  // Tab 2: IoT Telemetry Lakehouse steps
  const telemetrySteps: StepNode[] = [
    {
      step: '01. EDGE EMISSION',
      tag: '50+ SITES',
      title: 'Facility Sensors',
      description: 'LoRa, Zigbee & Wi-Fi mesh routers transmitting telemetry.',
      badge: 'Multi-site Ingestion',
      badgeType: 'neutral',
      icon: Wifi
    },
    {
      step: '02. STREAM BUS',
      tag: 'HIGH VELOCITY',
      title: 'Kafka Message Bus',
      description: 'Real-time event partitioning & distributed queue ingestion.',
      badge: '10,000+ Daily Events',
      badgeType: 'emerald',
      icon: Activity
    },
    {
      step: '03. LAKEHOUSE',
      tag: 'MEDALLION',
      title: 'PySpark & Databricks',
      description: 'Delta Lake pipeline calculating automated uptime SLAs.',
      badge: 'Automated Uptime Engine',
      badgeType: 'neutral',
      icon: Cpu
    },
    {
      step: '04. INSIGHTS',
      tag: 'EXECUTIVE BI',
      title: 'Power BI & Lambda',
      description: 'On-demand debugging reports & real-time operational views.',
      badge: '~99% SLA Maintained',
      badgeType: 'neutral',
      icon: BarChart3
    }
  ];

  // Tab 3: 15-Min Sensor Aggregation steps
  const aggregationSteps: StepNode[] = [
    {
      step: '01. RAW TICKS',
      tag: 'BINARY EVENTS',
      title: 'Sensor Triggers',
      description: 'PIR motion, door & window sensors emit timestamped pulses.',
      badge: 'Asynchronous Stream',
      badgeType: 'neutral',
      icon: Activity
    },
    {
      step: '02. BUCKETING',
      tag: 'TIME SLICING',
      title: '15-Min Windows',
      description: 'Partitions 24-hour cycles into 96 discrete interval buckets.',
      badge: '96 Daily Buckets',
      badgeType: 'emerald',
      icon: Layers
    },
    {
      step: '03. MATH ENGINE',
      tag: 'INTENSITY',
      title: 'Aggregation Engine',
      description: 'Computes count, sum, average, mode, and median metrics.',
      badge: 'Multi-formula Math',
      badgeType: 'neutral',
      icon: Cpu
    },
    {
      step: '04. CARE ALERT',
      tag: 'DELIVERY',
      title: 'Heatmap & Alerts',
      description: 'Flags unusual mobility drops to caregivers in real time.',
      badge: 'Caregiver Visibility',
      badgeType: 'neutral',
      icon: BarChart3
    }
  ];

  const currentSteps = activeArch === 'caching' 
    ? cachingSteps 
    : activeArch === 'telemetry' 
      ? telemetrySteps 
      : aggregationSteps;

  const getStepProgressPct = () => {
    switch (activePulseStep) {
      case 0: return 12.5;
      case 1: return 37.5;
      case 2: return 62.5;
      case 3: return 87.5;
      default: return 12.5;
    }
  };

  return (
    <section id="architectures" className="py-20 relative bg-dot-grid border-y border-slate-200 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            System Design &amp; Flow
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F1F5F9] tracking-tight">
            System Architecture Deep Dives
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-2xl">
            Visual workflows showing how data flows continuously through each stage from input ingestion to delivered insights.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveArch('caching');
              setActivePulseStep(0);
            }}
            className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeArch === 'caching'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-neutral-950 font-semibold shadow-sm'
                : 'bg-white dark:bg-black/30 border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/[0.2]'
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
            className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeArch === 'telemetry'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-neutral-950 font-semibold shadow-sm'
                : 'bg-white dark:bg-black/30 border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/[0.2]'
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
            className={`px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeArch === 'aggregation'
                ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-neutral-950 font-semibold shadow-sm'
                : 'bg-white dark:bg-black/30 border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/[0.2]'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>15-Min Sensor Aggregation Engine</span>
          </button>
        </div>

        {/* Fixed Min-Height Architecture Panel */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 min-h-[590px] flex flex-col justify-between transition-all duration-200">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                {activeArch === 'caching' && 'VANTIVA INDIA • HOMESIGHT CARE'}
                {activeArch === 'telemetry' && 'VANTIVA INDIA • SMART SPACES'}
                {activeArch === 'aggregation' && 'VANTIVA INDIA • HOMESIGHT CARE'}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1.5">
                {activeArch === 'caching' && 'Kafka & In-Memory Cache Migration (7s → 40–50ms)'}
                {activeArch === 'telemetry' && 'IoT Telemetry Lakehouse & Automated Wi-Fi SLA Engine'}
                {activeArch === 'aggregation' && '15-Minute Interval Sensor Aggregation Engine'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-neutral-400 mt-0.5">
                {activeArch === 'caching' && 'Decoupled heavy database reads by preloading memory indexes and syncing mutations via Kafka.'}
                {activeArch === 'telemetry' && 'Processing 10,000+ daily IoT telemetry events with automated uptime SLA calculations.'}
                {activeArch === 'aggregation' && 'Mathematical aggregation of sparse binary pulses into continuous 15-min intensity intervals.'}
              </p>
            </div>

            {/* Performance KPI Badge */}
            {activeArch === 'caching' && (
              <div className="bg-slate-100 dark:bg-black/40 rounded-xl p-3 border border-slate-200 dark:border-white/[0.06] flex items-center gap-4 shrink-0 font-mono">
                <div>
                  <div className="text-[9px] text-slate-500 dark:text-neutral-500">BEFORE (DIRECT DB)</div>
                  <div className="text-sm font-bold text-red-500 dark:text-red-400 line-through">~7,000 ms</div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <div className="text-[9px] text-emerald-700 dark:text-emerald-400 font-semibold">AFTER (CACHED)</div>
                  <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400">40–50 ms</div>
                </div>
              </div>
            )}

            {activeArch === 'telemetry' && (
              <div className="bg-slate-100 dark:bg-black/40 rounded-xl p-3 border border-slate-200 dark:border-white/[0.06] flex items-center gap-4 shrink-0 font-mono text-xs">
                <div>
                  <div className="text-[9px] text-slate-500 dark:text-neutral-500">DAILY EVENTS</div>
                  <div className="text-slate-900 dark:text-white font-bold">10,000+</div>
                </div>
                <div>
                  <div className="text-[9px] text-slate-500 dark:text-neutral-500">FACILITIES</div>
                  <div className="text-slate-900 dark:text-white font-bold">50+</div>
                </div>
                <div>
                  <div className="text-[9px] text-emerald-700 dark:text-emerald-400 font-semibold">UPTIME SLA</div>
                  <div className="text-emerald-700 dark:text-emerald-400 font-bold">~99%</div>
                </div>
              </div>
            )}

            {activeArch === 'aggregation' && (
              <div className="bg-slate-100 dark:bg-black/40 rounded-xl p-3 border border-slate-200 dark:border-white/[0.06] text-xs font-mono shrink-0">
                <div className="text-[9px] text-slate-500 dark:text-neutral-500 uppercase">INTERVAL RESOLUTION</div>
                <div className="text-emerald-700 dark:text-emerald-400 font-bold">15-Min Buckets (96/day)</div>
              </div>
            )}
          </div>

          {/* Synchronized 4-Step Cards Flow */}
          <div className="space-y-4 my-2">
            
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-wider">
              <span>Data Movement &amp; Pipeline Execution (Click any node to inspect)</span>
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                Active Node: Step 0{activePulseStep + 1}
              </span>
            </div>

            {/* The 4 Cards in Horizontal Alignment */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
              {currentSteps.map((s, idx) => {
                const Icon = s.icon;
                const isCurrent = activePulseStep === idx;
                const isPast = activePulseStep > idx;
                return (
                  <div
                    key={s.step}
                    onClick={() => {
                      setActivePulseStep(idx);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 8000);
                    }}
                    className={`border rounded-xl p-4 min-h-[160px] flex flex-col justify-between transition-all duration-300 cursor-pointer relative ${
                      isCurrent
                        ? 'border-emerald-500 dark:border-emerald-400 bg-emerald-50/60 dark:bg-emerald-500/[0.06] shadow-md shadow-emerald-500/10 scale-[1.02] ring-1 ring-emerald-500/40 dark:ring-emerald-400/50'
                        : isPast
                          ? 'border-slate-200 dark:border-white/[0.12] bg-slate-50 dark:bg-white/[0.02]'
                          : 'border-slate-200 dark:border-white/[0.06] bg-white dark:bg-black/30 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-600 dark:text-neutral-400'}`}>
                          {s.step}
                        </span>
                        <div className={`p-1 rounded ${isCurrent ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300' : 'bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-neutral-400'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">{s.title}</h4>
                      <p className="text-[11px] text-slate-600 dark:text-neutral-400 mt-1 leading-relaxed">
                        {s.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        s.badgeType === 'emerald' || isCurrent
                          ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-500/30'
                          : 'bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-neutral-400 border border-slate-200 dark:border-white/[0.06]'
                      }`}>
                        {s.badge}
                      </span>
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SYNCHRONIZED FLOW PROGRESS BEAM & LABELS */}
            <div className="pt-2 space-y-2">
              
              {/* Connected Track Line with 4 Stage Dots */}
              <div className="relative h-2 bg-slate-200 dark:bg-black/40 rounded-full border border-slate-200 dark:border-white/[0.06] overflow-hidden flex items-center">
                
                {/* Flowing Progress Fill Beam */}
                <div
                  className="h-full bg-gradient-to-r from-emerald-500/50 via-emerald-500 dark:via-emerald-400 to-emerald-400 dark:to-emerald-300 rounded-full transition-all duration-300 relative shadow-sm shadow-emerald-500/50"
                  style={{ width: `${getStepProgressPct() + 12.5}%` }}
                >
                  {/* Leading edge pulsing particle */}
                  <div className="absolute right-0 top-0 bottom-0 w-3 bg-white animate-pulse" />
                </div>
              </div>

              {/* Synchronized Step Markers */}
              <div className="grid grid-cols-4 text-center font-mono text-[10px]">
                {currentSteps.map((s, idx) => {
                  const isCurrent = activePulseStep === idx;
                  const isPast = activePulseStep >= idx;
                  return (
                    <div
                      key={idx}
                      className={`transition-colors flex items-center justify-center gap-1 ${
                        isCurrent
                          ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                          : isPast
                            ? 'text-slate-700 dark:text-neutral-300'
                            : 'text-slate-400 dark:text-neutral-600'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-emerald-500 dark:bg-emerald-400 animate-ping' : isPast ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-slate-300 dark:bg-neutral-700'}`} />
                      <span>{s.tag}</span>
                    </div>
                  );
                })}
              </div>

              {/* Flow Direction Text Indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-neutral-400 pt-1 px-1">
                <span className="flex items-center gap-1.5 text-slate-700 dark:text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  {activeArch === 'caching' && 'Client Request Ingestion'}
                  {activeArch === 'telemetry' && '50+ Sites Stream In'}
                  {activeArch === 'aggregation' && 'Binary Sensor Emissions'}
                </span>

                <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 text-xs">
                  <span>Continuous Data Pipeline</span>
                  <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-2 text-emerald-500" />
                </div>

                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                  {activeArch === 'caching' && 'Sub-50ms Response Delivered'}
                  {activeArch === 'telemetry' && 'Automated SLA & Dashboards'}
                  {activeArch === 'aggregation' && 'Elderly Anomaly Alerts'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>

          </div>

          {/* Bottom Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-white/[0.06]">
            {activeArch === 'caching' && (
              <>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">Server-Start Preload</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Preloads high-frequency topology into RAM at boot for zero-lag index hits.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">RBAC / ABAC Integrated</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Role &amp; attribute security enforced directly at the cached routing layer.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">99% Latency Cut</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Validated and verified with senior architecture team before production release.</div>
                </div>
              </>
            )}

            {activeArch === 'telemetry' && (
              <>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">Automated SLA Monitoring</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Replaced manual router checks with automated calculations across 50+ facilities.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">AWS Lambda On-Demand</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Instant 24-hour and custom date-range performance reporting for engineering debugging.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">Real-Time Power BI</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Custom visual metrics monitoring mesh health, packet drops, and device latency.</div>
                </div>
              </>
            )}

            {activeArch === 'aggregation' && (
              <>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">Reusable Engine Design</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Generalized module handles PIR motion, magnetic door contacts, and smart plugs.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">15-Min Granularity</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Provides ideal balance between statistical precision and caregiver clarity.</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">Anomaly Detection</div>
                  <div className="text-slate-600 dark:text-neutral-400 text-[11px] mt-0.5">Flags unexpected gaps during habitual morning and evening active hours.</div>
                </div>
              </>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
