import React, { useState, useEffect } from 'react';
import { Database, Server, Cpu, ArrowRight, Zap, Activity, BarChart3, Layers, CheckCircle2, AlertTriangle, Wrench, Rocket } from 'lucide-react';

interface StageNode {
  phase: string;
  tag: string;
  title: string;
  description: string;
  highlight: string;
  icon: React.ElementType;
}

interface Deliverable {
  id: 'caching' | 'snowflake' | 'telemetry';
  tabLabel: string;
  tabIcon: React.ElementType;
  companyTag: string;
  title: string;
  summary: string;
  kpiLabel: string;
  kpiValue: string;
  kpiBefore?: string;
  technologies: string[];
  stages: StageNode[];
}

export const ArchitectureShowcase: React.FC = () => {
  const [activeDeliverableId, setActiveDeliverableId] = useState<'caching' | 'snowflake' | 'telemetry'>('snowflake');
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const deliverables: Deliverable[] = [
    {
      id: 'snowflake',
      tabLabel: 'Snowflake & dbt Data Platform',
      tabIcon: Layers,
      companyTag: 'VANTIVA INDIA • SMART SPACES',
      title: 'Snowflake ELT & dbt Analytical Data Marts',
      summary: 'Built automated staged-to-mart ELT pipelines in Snowflake using Stages, Streams, Tasks, and dbt dimensional models.',
      kpiLabel: 'PIPELINE RUNTIME',
      kpiValue: 'Sub-Minute Tasks',
      technologies: ['Snowflake', 'dbt', 'Snowflake SQL', 'Streams & Tasks', 'Dimensional Modeling', 'Query Profiling'],
      stages: [
        {
          phase: '01. THE CHALLENGE',
          tag: 'UNSTRUCTURED RAW DATA',
          title: 'Manual Loads & Recurring Failures',
          description: 'Disjointed data sources required recurring manual loads, lacking automated incremental materializations and unified business keys.',
          highlight: 'Disparate Staging & Schema Bottlenecks',
          icon: AlertTriangle
        },
        {
          phase: '02. HOW I BUILT IT',
          tag: 'ELT & DIMENSIONAL MODELING',
          title: 'Snowflake Streams & dbt Layers',
          description: 'Engineered Snowflake stages, COPY INTO, Streams, and Tasks with dbt models across staging, intermediate, and mart layers using surrogate-key joins.',
          highlight: 'Automated Streams, Tasks & dbt Marts',
          icon: Wrench
        },
        {
          phase: '03. SHIPPED RESULT',
          tag: 'PRODUCTION IMPACT',
          title: 'Curated Business Marts',
          description: 'Tuned workloads via query profiling and warehouse metrics, delivering automated incremental mart datasets for reliable downstream reporting.',
          highlight: '100% Automated Incremental Loads',
          icon: Rocket
        }
      ]
    },
    {
      id: 'telemetry',
      tabLabel: 'PySpark & Databricks IoT Lakehouse',
      tabIcon: Database,
      companyTag: 'VANTIVA INDIA • SMART SPACES',
      title: 'IoT Telemetry Pipeline & On-Demand Reporting',
      summary: 'Automated PySpark/Databricks ETL processing 10,000+ daily IoT telemetry data points with AWS Lambda and Power BI dashboards.',
      kpiLabel: 'UPTIME SLA',
      kpiValue: '~99% Uptime',
      technologies: ['PySpark', 'Databricks', 'AWS Lambda', 'Power BI', 'AWS S3', 'LoRa / Zigbee'],
      stages: [
        {
          phase: '01. THE CHALLENGE',
          tag: 'ROUTER-BY-ROUTER CHECKS',
          title: 'Manual Mesh Verification',
          description: 'Engineering teams had to manually inspect routers across 50+ facilities to determine Wi-Fi mesh uptime and detect packet dropouts.',
          highlight: '10,000+ Daily Unprocessed Telemetry Events',
          icon: AlertTriangle
        },
        {
          phase: '02. HOW I BUILT IT',
          tag: 'PYSPARK & SERVERLESS',
          title: 'Databricks Pipeline & Lambda Engine',
          description: 'Built PySpark pipelines in Databricks calculating automated mesh uptime and developed an AWS Lambda service generating custom Excel reports.',
          highlight: 'Automated Mesh SLA & Serverless Reports',
          icon: Wrench
        },
        {
          phase: '03. SHIPPED RESULT',
          tag: 'PRODUCTION IMPACT',
          title: 'Live Power BI & ~99% SLA',
          description: 'Enabled storage site managers and engineers across 50+ facility sites to debug LoRa/Zigbee devices rapidly, maintaining ~99% SLA.',
          highlight: '50+ Sites Monitored (~99% SLA)',
          icon: Rocket
        }
      ]
    },
    {
      id: 'caching',
      tabLabel: 'API Optimization & In-Memory Caching',
      tabIcon: Zap,
      companyTag: 'VANTIVA INDIA • HOMESIGHT CARE',
      title: 'Kafka-Backed In-Memory Caching (7s → 40–50ms)',
      summary: 'Migrated high-traffic Node.js endpoints to an in-memory caching layer with indexed lookups, DB fallback, and RBAC/ABAC security.',
      kpiBefore: '~7,000 ms',
      kpiLabel: 'RESPONSE TIME',
      kpiValue: '40–50 ms',
      technologies: ['Node.js', 'Kafka', 'In-Memory Caching', 'RBAC/ABAC', 'React', 'REST APIs'],
      stages: [
        {
          phase: '01. THE CHALLENGE',
          tag: 'DIRECT DB READ BOTTLENECK',
          title: 'Chained Multi-DB Calls',
          description: 'High-traffic account and device APIs performed direct database reads, incurring multi-table joins with ~7-second response times.',
          highlight: 'Direct DB Read Bottleneck (~7s)',
          icon: AlertTriangle
        },
        {
          phase: '02. HOW I BUILT IT',
          tag: 'ASYNC CACHE & SECURITY',
          title: 'Kafka-Backed Cache & RBAC/ABAC',
          description: 'Implemented an in-memory cache preloaded with indexed lookups, automatic database fallback, and strict RBAC/ABAC permissions.',
          highlight: 'Indexed Lookups & Role-Based Security',
          icon: Wrench
        },
        {
          phase: '03. SHIPPED RESULT',
          tag: 'PRODUCTION IMPACT',
          title: '40–50ms Latency & UI Delivery',
          description: 'Reduced high-traffic latency by 99% down to 40–50ms, resolved 30+ bugs, and shipped 10+ stable frontend features.',
          highlight: '99% Latency Cut (40–50ms)',
          icon: Rocket
        }
      ]
    }
  ];

  const currentDeliverable = deliverables.find(d => d.id === activeDeliverableId) || deliverables[0];

  // Gentle auto-advancing stepper (every 3 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIdx(prev => (prev + 1) % currentDeliverable.stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeDeliverableId, isAutoPlaying, currentDeliverable.stages.length]);

  return (
    <section id="architectures" className="py-14 sm:py-20 relative border-y border-[#E8E2D5] dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="space-y-1.5">
          <div className="text-xs font-mono text-[#5E6AD2] uppercase tracking-wider">
            Production Highlights
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-[#EDEDEF] tracking-tight">
            Key Engineering Deliverables
          </h2>
          <p className="text-stone-600 dark:text-[#8A8F98] text-xs sm:text-sm max-w-xl">
            A visual walkthrough of production data pipelines, analytical platforms, and low-latency systems engineered at Vantiva.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 pt-1">
          {deliverables.map((item) => {
            const TabIcon = item.tabIcon;
            const isActive = item.id === activeDeliverableId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveDeliverableId(item.id);
                  setActiveStageIdx(0);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#5E6AD2] text-white dark:text-[#EDEDEF] font-semibold shadow-md shadow-[#5E6AD2]/20 border border-white/[0.1]'
                    : 'bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/[0.18] text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] shadow-xs dark:shadow-none'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{item.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Main Deliverable Card (Clean, Single Card, Zero Bloat) */}
        <div className="editorial-card rounded-xl p-5 sm:p-7 space-y-6 transition-all duration-200">
          
          {/* Card Top Information */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E2D5] dark:border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/25 font-semibold">
                {currentDeliverable.companyTag}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-[#EDEDEF]">
                {currentDeliverable.title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-[#8A8F98]">
                {currentDeliverable.summary}
              </p>
            </div>

            {/* Metric KPI Box */}
            <div className="bg-[#FAF7F2] dark:bg-[#08090A] rounded-lg p-2.5 border border-[#E8E2D5] dark:border-white/[0.08] flex items-center gap-3 shrink-0 font-mono">
              {currentDeliverable.kpiBefore && (
                <>
                  <div>
                    <div className="text-[9px] text-stone-500 dark:text-[#62666D]">BEFORE</div>
                    <div className="text-xs font-bold text-red-500 dark:text-red-400 line-through">{currentDeliverable.kpiBefore}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5E6AD2]" />
                </>
              )}
              <div>
                <div className="text-[9px] text-[#5E6AD2] font-semibold">{currentDeliverable.kpiLabel}</div>
                <div className="text-sm sm:text-base font-bold text-[#5E6AD2]">{currentDeliverable.kpiValue}</div>
              </div>
            </div>
          </div>

          {/* "HOW THE WORK HAPPENED" INTERACTIVE JOURNEY RAIL */}
          <div className="space-y-4">
            
            {/* Header / Sub-label */}
            <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 dark:text-[#62666D] uppercase tracking-wider">
              <span>How It Was Built (Click stage to inspect)</span>
              <span className="text-[#5E6AD2] flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-ping" />
                Active Stage: {currentDeliverable.stages[activeStageIdx].phase}
              </span>
            </div>

            {/* The 3 Stage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative">
              {currentDeliverable.stages.map((stage, idx) => {
                const Icon = stage.icon;
                const isCurrent = activeStageIdx === idx;
                const isPast = activeStageIdx > idx;

                return (
                  <div
                    key={stage.phase}
                    onClick={() => {
                      setActiveStageIdx(idx);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 10000);
                    }}
                    className={`border rounded-lg p-4 flex flex-col justify-between min-h-[160px] transition-all duration-300 cursor-pointer relative ${
                      isCurrent
                        ? 'border-[#5E6AD2] bg-indigo-50/70 dark:bg-[#16181D] shadow-md shadow-[#5E6AD2]/15 ring-1 ring-[#5E6AD2]/50 scale-[1.01]'
                        : isPast
                          ? 'border-[#E8E2D5] dark:border-white/[0.12] bg-[#FAF7F2] dark:bg-[#101114]'
                          : 'border-[#E8E2D5] dark:border-white/[0.06] bg-white dark:bg-[#08090A]/60 opacity-80 hover:opacity-100 hover:bg-[#FAF7F2] dark:hover:bg-[#101114]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-mono font-bold ${isCurrent ? 'text-[#5E6AD2]' : 'text-stone-600 dark:text-[#8A8F98]'}`}>
                          {stage.phase}
                        </span>
                        <div className={`p-1 rounded ${isCurrent ? 'bg-[#5E6AD2]/20 text-[#5E6AD2]' : 'bg-stone-100 dark:bg-white/[0.04] text-stone-500 dark:text-[#62666D]'}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <h4 className="text-xs font-semibold text-stone-900 dark:text-[#EDEDEF]">
                        {stage.title}
                      </h4>

                      <p className="text-[11px] text-stone-600 dark:text-[#8A8F98] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-[#E8E2D5]/50 dark:border-white/[0.04] mt-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-[#5E6AD2]/15 text-[#5E6AD2] font-semibold border border-[#5E6AD2]/30'
                          : 'bg-stone-100 dark:bg-white/[0.04] text-stone-600 dark:text-[#8A8F98]'
                      }`}>
                        {stage.highlight}
                      </span>
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Smooth Connected Process Progress Rail */}
            <div className="pt-2 space-y-1.5">
              <div className="relative h-1.5 bg-[#E8E2D5] dark:bg-[#08090A] rounded-full border border-[#E8E2D5] dark:border-white/[0.08] overflow-hidden flex items-center">
                <div
                  className="h-full bg-gradient-to-r from-[#5E6AD2] to-[#6875E3] rounded-full transition-all duration-300 relative shadow-sm shadow-[#5E6AD2]/50"
                  style={{ width: `${((activeStageIdx + 1) / 3) * 100}%` }}
                />
              </div>

              {/* Step Flow Labels */}
              <div className="grid grid-cols-3 text-center font-mono text-[10px] pt-0.5">
                {currentDeliverable.stages.map((st, idx) => {
                  const isCurrent = activeStageIdx === idx;
                  const isPast = activeStageIdx >= idx;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-center gap-1 transition-colors ${
                        isCurrent
                          ? 'text-[#5E6AD2] font-bold'
                          : isPast
                            ? 'text-stone-800 dark:text-[#EDEDEF]'
                            : 'text-stone-400 dark:text-[#62666D]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-[#5E6AD2] animate-ping' : isPast ? 'bg-[#5E6AD2]' : 'bg-stone-300 dark:bg-[#16181D]'}`} />
                      <span>{st.tag}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom Technologies Stack Pill Strip */}
          <div className="pt-3 border-t border-[#E8E2D5] dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-stone-500 dark:text-[#62666D] mr-1">Stack:</span>
              {currentDeliverable.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.08] text-stone-700 dark:text-[#EDEDEF]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className="text-[10px] font-mono text-emerald-700 dark:text-[#4EBA6F] flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3 h-3 text-emerald-700 dark:text-[#4EBA6F]" />
              Verified in Production @ Vantiva
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
