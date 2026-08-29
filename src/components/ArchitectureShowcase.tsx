import React, { useState, useEffect } from 'react';
import { Database, Server, Cpu, ArrowRight, Zap, Activity, Wifi, BarChart3, Layers, ChevronRight, Clock, ShieldCheck } from 'lucide-react';

interface StepNode {
  step: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  badgeType: 'indigo' | 'green' | 'neutral';
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
    }, 2200);
    return () => clearInterval(interval);
  }, [activeArch, isAutoPlaying]);

  // Tab 1: API Optimization & Modular Monolith
  const cachingSteps: StepNode[] = [
    {
      step: '01. LEGACY BOTTLENECK',
      tag: 'CHAINED DB CALLS',
      title: 'Legacy Multi-DB Calls',
      description: 'Account page triggered multiple serial API calls & heavy direct DB queries.',
      badge: 'Legacy Latency: ~7,000ms',
      badgeType: 'neutral',
      icon: Server
    },
    {
      step: '02. STARTUP PRELOAD',
      tag: 'IN-MEMORY RAM',
      title: 'Server-Startup Cache',
      description: 'Preloads high-frequency Users, HC200 gateway hubs & Accounts metadata into RAM.',
      badge: 'RAM Preload at Boot',
      badgeType: 'indigo',
      icon: Zap
    },
    {
      step: '03. MODULAR ISOLATION',
      tag: 'MODULAR MONOLITH',
      title: 'Vertical Modular Routing',
      description: 'Users and AppRegistry modules resolve domain logic in-memory without DB roundtrips.',
      badge: 'Users & AppRegistry Modules',
      badgeType: 'neutral',
      icon: Layers
    },
    {
      step: '04. SUB-50ms SERVING',
      tag: 'INSTANT RESPONSE',
      title: 'Sub-50ms Delivery',
      description: 'Delivers cached payloads to frontend in 40–50ms with live AppRegistry UI updates.',
      badge: 'Response: 40–50ms (99% cut)',
      badgeType: 'green',
      icon: ShieldCheck
    }
  ];

  // Tab 2: IoT Telemetry & Databricks Pipeline
  const telemetrySteps: StepNode[] = [
    {
      step: '01. CASSANDRA INGEST',
      tag: '50+ SITES',
      title: 'Cassandra Ingestion',
      description: 'Ingesting high-velocity Wi-Fi mesh and sensor telemetry from Cassandra DB into Databricks.',
      badge: '10,000+ Daily Events',
      badgeType: 'neutral',
      icon: Database
    },
    {
      step: '02. MEDALLION PIPELINE',
      tag: 'BRONZE → SILVER',
      title: 'PySpark Medallion Cleaning',
      description: 'Deduplicates, validates schemas, and standardizes semi-structured telemetry data.',
      badge: 'PySpark & Delta Lake',
      badgeType: 'indigo',
      icon: Cpu
    },
    {
      step: '03. GOLD AGGREGATIONS',
      tag: 'GOLD LAYER',
      title: 'Daily Automated Pipeline',
      description: 'Runs daily scheduled pipelines computing automated uptime SLAs and facility health.',
      badge: '~99% SLA Calculated',
      badgeType: 'green',
      icon: Activity
    },
    {
      step: '04. SERVING & LAMBDA',
      tag: 'BI & LAMBDA',
      title: 'Power BI & AWS Lambda',
      description: 'Powers live dashboards for Architects & Clients + on-demand Excel reports via AWS Lambda.',
      badge: 'Power BI & Serverless Reports',
      badgeType: 'neutral',
      icon: BarChart3
    }
  ];

  // Tab 3: Multi-Sensor Analytics & Heatmap Engine
  const aggregationSteps: StepNode[] = [
    {
      step: '01. CASSANDRA LOGS',
      tag: 'RAW PULSES',
      title: 'Multi-Sensor Ingestion',
      description: 'Pulls raw timestamped event logs for PIR motion, door, and window sensors from Cassandra.',
      badge: 'Cassandra Sensor Streams',
      badgeType: 'neutral',
      icon: Wifi
    },
    {
      step: '02. TIMEZONE NORMALIZATION',
      tag: 'HC200 LOCATION',
      title: 'HC200 Timezone Sync',
      description: 'Dynamically shifts UTC sensor timestamps to match the local physical timezone of the HC200 hub.',
      badge: 'Principal User Timezone',
      badgeType: 'indigo',
      icon: Clock
    },
    {
      step: '03. GENERALIZED ENGINE',
      tag: 'DYNAMIC MATH',
      title: 'Generalized Aggregator',
      description: 'Slices the 24-hour cycle into 96 discrete 15-min buckets, executing requested math dynamically.',
      badge: 'Count, Sum, Avg, Mode, Median',
      badgeType: 'neutral',
      icon: Cpu
    },
    {
      step: '04. HEATMAP DELIVERY',
      tag: 'CAREGIVER UI',
      title: 'Caregiver Heatmap UI',
      description: 'Renders 24-hour visual intensity grid on React, flagging unusual mobility drops to caregivers.',
      badge: 'Elderly Activity Monitoring',
      badgeType: 'green',
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
    <section id="architectures" className="py-16 md:py-20 relative border-y border-[#E8E2D5] dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Concise Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono text-[#5E6AD2] uppercase tracking-wider">
            System Design &amp; Case Studies
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-[#EDEDEF] tracking-tight">
            Architectural Case Studies
          </h2>
          <p className="text-stone-600 dark:text-[#8A8F98] text-xs sm:text-sm max-w-xl">
            Interactive workflows demonstrating low-latency caching, streaming lakehouses, and real-time analytics engines.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => {
              setActiveArch('caching');
              setActivePulseStep(0);
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeArch === 'caching'
                ? 'bg-[#5E6AD2] text-white dark:text-[#EDEDEF] font-semibold shadow-md shadow-[#5E6AD2]/20 border border-white/[0.1]'
                : 'bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/[0.18] text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] shadow-xs dark:shadow-none'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>API Optimization &amp; Modular Monolith</span>
          </button>

          <button
            onClick={() => {
              setActiveArch('telemetry');
              setActivePulseStep(0);
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeArch === 'telemetry'
                ? 'bg-[#5E6AD2] text-white dark:text-[#EDEDEF] font-semibold shadow-md shadow-[#5E6AD2]/20 border border-white/[0.1]'
                : 'bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/[0.18] text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] shadow-xs dark:shadow-none'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>IoT Telemetry &amp; Databricks Pipeline</span>
          </button>

          <button
            onClick={() => {
              setActiveArch('aggregation');
              setActivePulseStep(0);
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeArch === 'aggregation'
                ? 'bg-[#5E6AD2] text-white dark:text-[#EDEDEF] font-semibold shadow-md shadow-[#5E6AD2]/20 border border-white/[0.1]'
                : 'bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/[0.18] text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] shadow-xs dark:shadow-none'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Multi-Sensor Analytics &amp; Heatmap Engine</span>
          </button>
        </div>

        {/* Fixed Min-Height Architecture Panel */}
        <div className="editorial-card rounded-xl p-5 sm:p-7 min-h-[570px] flex flex-col justify-between transition-all duration-200">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E2D5] dark:border-white/[0.08]">
            <div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/25 font-semibold">
                {activeArch === 'caching' && 'VANTIVA INDIA • HOMESIGHT CARE'}
                {activeArch === 'telemetry' && 'VANTIVA INDIA • SMART SPACES'}
                {activeArch === 'aggregation' && 'VANTIVA INDIA • HOMESIGHT CARE'}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-[#EDEDEF] mt-1">
                {activeArch === 'caching' && 'API Optimization & Modular Monolith'}
                {activeArch === 'telemetry' && 'IoT Telemetry & Databricks Pipeline'}
                {activeArch === 'aggregation' && 'Multi-Sensor Analytics & Heatmap Engine'}
              </h3>
              <p className="text-xs text-stone-600 dark:text-[#8A8F98] mt-0.5">
                {activeArch === 'caching' && 'Preloaded Users, HC200 gateway hubs, and Accounts into server RAM at boot, architecting a Vertical Modular Monolith.'}
                {activeArch === 'telemetry' && 'Ingesting Cassandra device telemetry across 50+ facilities into Databricks Delta Lake to curate daily Gold reporting tables.'}
                {activeArch === 'aggregation' && 'Normalizing UTC sensor timestamps to local HC200 device timezones and computing 15-minute multi-sensor activity heatmaps.'}
              </p>
            </div>

            {/* Performance KPI Badge */}
            {activeArch === 'caching' && (
              <div className="bg-[#FAF7F2] dark:bg-[#08090A] rounded-lg p-2.5 border border-[#E8E2D5] dark:border-white/[0.08] flex items-center gap-3 shrink-0 font-mono">
                <div>
                  <div className="text-[9px] text-stone-500 dark:text-[#62666D]">BEFORE (DB)</div>
                  <div className="text-xs font-bold text-red-500 dark:text-red-400 line-through">~7,000 ms</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#5E6AD2]" />
                <div>
                  <div className="text-[9px] text-[#5E6AD2] font-semibold">AFTER (CACHE)</div>
                  <div className="text-base font-bold text-[#5E6AD2]">40–50 ms</div>
                </div>
              </div>
            )}

            {activeArch === 'telemetry' && (
              <div className="bg-[#FAF7F2] dark:bg-[#08090A] rounded-lg p-2.5 border border-[#E8E2D5] dark:border-white/[0.08] flex items-center gap-3 shrink-0 font-mono text-xs">
                <div>
                  <div className="text-[9px] text-stone-500 dark:text-[#62666D]">DAILY EVENTS</div>
                  <div className="text-stone-900 dark:text-[#EDEDEF] font-bold text-xs">10,000+</div>
                </div>
                <div>
                  <div className="text-[9px] text-stone-500 dark:text-[#62666D]">FACILITIES</div>
                  <div className="text-stone-900 dark:text-[#EDEDEF] font-bold text-xs">50+</div>
                </div>
                <div>
                  <div className="text-[9px] text-emerald-700 dark:text-[#4EBA6F] font-semibold">UPTIME</div>
                  <div className="text-emerald-700 dark:text-[#4EBA6F] font-bold text-xs">~99%</div>
                </div>
              </div>
            )}

            {activeArch === 'aggregation' && (
              <div className="bg-[#FAF7F2] dark:bg-[#08090A] rounded-lg p-2.5 border border-[#E8E2D5] dark:border-white/[0.08] text-xs font-mono shrink-0">
                <div className="text-[9px] text-stone-500 dark:text-[#62666D] uppercase">INTERVAL</div>
                <div className="text-[#5E6AD2] font-bold text-xs">96 Buckets (15-Min)</div>
              </div>
            )}
          </div>

          {/* Synchronized 4-Step Cards Flow */}
          <div className="space-y-3.5 my-2">
            
            <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 dark:text-[#62666D] uppercase tracking-wider">
              <span>Execution Pipeline Flow</span>
              <span className="text-[#5E6AD2] flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-ping" />
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
                    className={`border rounded-lg p-3.5 min-h-[155px] flex flex-col justify-between transition-all duration-300 cursor-pointer relative ${
                      isCurrent
                        ? 'border-[#5E6AD2] bg-indigo-50/70 dark:bg-[#16181D] shadow-md shadow-[#5E6AD2]/15 scale-[1.02] ring-1 ring-[#5E6AD2]/50'
                        : isPast
                          ? 'border-[#E8E2D5] dark:border-white/[0.12] bg-[#FAF7F2] dark:bg-[#101114]'
                          : 'border-[#E8E2D5] dark:border-white/[0.06] bg-white dark:bg-[#08090A]/60 opacity-80 hover:opacity-100 hover:bg-[#FAF7F2] dark:hover:bg-[#101114]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[11px] font-mono font-bold ${isCurrent ? 'text-[#5E6AD2]' : 'text-stone-600 dark:text-[#8A8F98]'}`}>
                          {s.step}
                        </span>
                        <div className={`p-1 rounded ${isCurrent ? 'bg-[#5E6AD2]/20 text-[#5E6AD2]' : 'bg-stone-100 dark:bg-white/[0.04] text-stone-500 dark:text-[#62666D]'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h4 className="text-xs font-semibold text-stone-900 dark:text-[#EDEDEF]">{s.title}</h4>
                      <p className="text-[11px] text-stone-600 dark:text-[#8A8F98] mt-1 leading-relaxed">
                        {s.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        s.badgeType === 'green'
                          ? 'bg-emerald-600/15 text-emerald-800 dark:text-[#4EBA6F] font-semibold border border-emerald-600/30'
                          : s.badgeType === 'indigo' || isCurrent
                            ? 'bg-[#5E6AD2]/15 text-[#5E6AD2] font-semibold border border-[#5E6AD2]/30'
                            : 'bg-stone-100 dark:bg-white/[0.04] text-stone-600 dark:text-[#8A8F98] border border-[#E8E2D5] dark:border-white/[0.06]'
                      }`}>
                        {s.badge}
                      </span>
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SYNCHRONIZED FLOW PROGRESS BEAM & LABELS */}
            <div className="pt-1.5 space-y-2">
              
              {/* Connected Track Line with 4 Stage Dots */}
              <div className="relative h-2 bg-[#E8E2D5] dark:bg-[#08090A] rounded-full border border-[#E8E2D5] dark:border-white/[0.08] overflow-hidden flex items-center">
                
                {/* Flowing Progress Fill Beam */}
                <div
                  className="h-full bg-gradient-to-r from-[#5E6AD2]/40 via-[#5E6AD2] to-[#6875E3] rounded-full transition-all duration-300 relative shadow-sm shadow-[#5E6AD2]/50"
                  style={{ width: `${getStepProgressPct() + 12.5}%` }}
                >
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
                          ? 'text-[#5E6AD2] font-bold'
                          : isPast
                            ? 'text-stone-800 dark:text-[#EDEDEF]'
                            : 'text-stone-400 dark:text-[#62666D]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-[#5E6AD2] animate-ping' : isPast ? 'bg-[#5E6AD2]' : 'bg-stone-300 dark:bg-[#16181D]'}`} />
                      <span>{s.tag}</span>
                    </div>
                  );
                })}
              </div>

              {/* Flow Direction Text Indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-[#8A8F98] pt-1 px-1">
                <span className="flex items-center gap-1.5 text-stone-800 dark:text-[#EDEDEF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-pulse" />
                  {activeArch === 'caching' && 'Legacy Multi-DB Calls'}
                  {activeArch === 'telemetry' && 'Cassandra DB Ingestion'}
                  {activeArch === 'aggregation' && 'Raw Sensor Ticks (Cassandra)'}
                </span>

                <div className="flex items-center gap-1 text-[#5E6AD2] text-xs">
                  <span>Continuous Pipeline</span>
                  <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
                  <ChevronRight className="w-3.5 h-3.5 -ml-2 text-[#6875E3]" />
                </div>

                <span className="flex items-center gap-1.5 text-[#5E6AD2] font-semibold">
                  {activeArch === 'caching' && 'Sub-50ms Cached Delivery'}
                  {activeArch === 'telemetry' && 'Gold Power BI & Lambda Reports'}
                  {activeArch === 'aggregation' && 'Caregiver 24h Heatmap Rendered'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>

          </div>

          {/* Bottom Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#E8E2D5] dark:border-white/[0.08]">
            {activeArch === 'caching' && (
              <>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">Server-Startup In-Memory Cache</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Preloads Users, HC200 hub metadata, and Accounts into server RAM at boot for zero-lag resolution.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">Vertical Modular Monolith</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Led Users &amp; AppRegistry backend modules + AppRegistry UI, solving tight coupling cleanly.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">99% Latency Reduction</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Response times plummeted from ~7,000ms down to 40–50ms on critical high-traffic endpoints.</div>
                </div>
              </>
            )}

            {activeArch === 'telemetry' && (
              <>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">Cassandra IoT Extraction</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Extracts and cleans high-velocity mesh Wi-Fi &amp; sensor telemetry across 50+ facilities into Databricks.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">Automated Daily Gold Layer</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Daily scheduled pipeline computes device health and ~99% uptime SLA tables automatically.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">Power BI &amp; AWS Lambda Reports</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Live executive Power BI dashboards for Architects &amp; Clients + on-demand custom Excel reports via Lambda.</div>
                </div>
              </>
            )}

            {activeArch === 'aggregation' && (
              <>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">HC200 Timezone Normalizer</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Converts UTC Cassandra sensor timestamps to the physical local timezone of the user's HC200 hub.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">Generalized Dynamic Aggregation</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Slices 24 hours into 96 buckets, dynamically computing count, sum, avg, mode, or median on-the-fly.</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-xs">
                  <div className="font-semibold text-stone-900 dark:text-[#EDEDEF]">24-Hour Caregiver Heatmap</div>
                  <div className="text-stone-600 dark:text-[#8A8F98] text-[11px] mt-0.5">Interactive React grid visualizing daily mobility intensity and flagging elderly inactivity anomalies.</div>
                </div>
              </>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
