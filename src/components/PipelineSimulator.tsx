import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RefreshCw, Activity, Cpu, Database, Server, BarChart3, Wifi, Zap, CheckCircle2, AlertTriangle } from 'lucide-react';

interface TelemetryPacket {
  id: string;
  deviceId: string;
  deviceType: 'Mesh-Router-V3' | 'LoRa-Gateway' | 'Zigbee-Sensor' | 'Smart-Plug';
  rssi: number;
  uptimeSeconds: number;
  batteryPct: number;
  status: 'ONLINE' | 'DEGRADED' | 'SYNCING';
  timestamp: string;
  latencyMs: number;
}

export const PipelineSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [processedCount, setProcessedCount] = useState(10480);
  const [currentLatency, setCurrentLatency] = useState(42);
  const [activeStage, setActiveStage] = useState(2);
  const [streamSpeed, setStreamSpeed] = useState<number>(1000); // ms per tick
  const [packets, setPackets] = useState<TelemetryPacket[]>([]);
  const [slaUptime, setSlaUptime] = useState(99.4);

  const deviceTypes: TelemetryPacket['deviceType'][] = ['Mesh-Router-V3', 'LoRa-Gateway', 'Zigbee-Sensor', 'Smart-Plug'];

  const generatePacket = (): TelemetryPacket => {
    const dType = deviceTypes[Math.floor(Math.random() * deviceTypes.length)];
    const isDegraded = Math.random() < 0.05;
    const rssiVal = isDegraded ? -88 - Math.floor(Math.random() * 10) : -45 - Math.floor(Math.random() * 25);
    const latency = 38 + Math.floor(Math.random() * 14);

    return {
      id: 'PKT-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
      deviceId: `${dType.substring(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
      deviceType: dType,
      rssi: rssiVal,
      uptimeSeconds: 86400 * (1 + Math.floor(Math.random() * 30)),
      batteryPct: Math.floor(75 + Math.random() * 25),
      status: isDegraded ? 'DEGRADED' : 'ONLINE',
      timestamp: new Date().toLocaleTimeString(),
      latencyMs: latency
    };
  };

  useEffect(() => {
    // initialize with 4 packets
    setPackets([generatePacket(), generatePacket(), generatePacket(), generatePacket()]);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const newPacket = generatePacket();
      setPackets(prev => [newPacket, ...prev.slice(0, 5)]);
      setProcessedCount(prev => prev + 1);
      setCurrentLatency(newPacket.latencyMs);
      setActiveStage(prev => (prev + 1) % 5);
      
      // small jitter on SLA
      setSlaUptime(99.2 + Math.random() * 0.5);
    }, streamSpeed);

    return () => clearInterval(interval);
  }, [isRunning, streamSpeed]);

  const stages = [
    {
      id: 0,
      name: "1. Edge IoT Sensors",
      tech: "LoRa / Zigbee / Mesh",
      desc: "50+ Facility sites publishing high-frequency telemetry",
      icon: Wifi,
      color: "text-cyan-400 border-cyan-500/30"
    },
    {
      id: 1,
      name: "2. Kafka Ingestion",
      tech: "Apache Kafka Cluster",
      desc: "Distributed event bus partitioning telemetry streams",
      icon: Activity,
      color: "text-emerald-400 border-emerald-500/30"
    },
    {
      id: 2,
      name: "3. Databricks & PySpark",
      tech: "Delta Lakehouse (DLT)",
      desc: "Calculates automated Wi-Fi mesh uptime & SLA bounds",
      icon: Cpu,
      color: "text-indigo-400 border-indigo-500/30"
    },
    {
      id: 3,
      name: "4. Low-Latency Cache",
      tech: "In-Memory Preloaded Cache",
      desc: "Sub-50ms indexed lookups with automatic DB fallback",
      icon: Database,
      color: "text-amber-400 border-amber-500/30"
    },
    {
      id: 4,
      name: "5. Power BI & Executive UIs",
      tech: "Real-time Dashboards",
      desc: "Automated Excel/PDF reports and operational alarms",
      icon: BarChart3,
      color: "text-violet-400 border-violet-500/30"
    }
  ];

  return (
    <div className="glass-card rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-2xl">
      {/* Glow background accent */}
      <div className="absolute top-0 right-1/4 w-96 h-40 bg-cyan-500/10 blur-[90px] pointer-events-none" />

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 font-mono">
              REAL-TIME TELEMETRY PIPELINE SIMULATOR
            </h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Simulating Vantiva's 10,000+ daily IoT event processing with Kafka, PySpark, and low-latency cache.
          </p>
        </div>

        {/* Live Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700">
            <span className="text-xs text-slate-400 font-mono">Speed:</span>
            <button
              onClick={() => setStreamSpeed(1500)}
              className={`px-2 py-0.5 text-xs rounded font-mono ${streamSpeed === 1500 ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              1x
            </button>
            <button
              onClick={() => setStreamSpeed(800)}
              className={`px-2 py-0.5 text-xs rounded font-mono ${streamSpeed === 800 ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              2x
            </button>
            <button
              onClick={() => setStreamSpeed(350)}
              className={`px-2 py-0.5 text-xs rounded font-mono ${streamSpeed === 350 ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              5x
            </button>
          </div>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all ${
              isRunning 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30' 
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            }`}
          >
            {isRunning ? <><Pause className="w-3.5 h-3.5" /> PAUSE STREAM</> : <><Play className="w-3.5 h-3.5" /> RESUME STREAM</>}
          </button>
        </div>
      </div>

      {/* Real-Time Live HUD Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
          <div className="text-[11px] font-mono text-slate-400">TOTAL PROCESSED</div>
          <div className="text-xl font-bold font-mono text-cyan-300 mt-0.5 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-cyan-400" />
            {processedCount.toLocaleString()}
          </div>
        </div>

        <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
          <div className="text-[11px] font-mono text-slate-400">API CACHE LATENCY</div>
          <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-emerald-400" />
            {currentLatency} ms
            <span className="text-[10px] text-slate-400 font-normal">(&lt;50ms SLA)</span>
          </div>
        </div>

        <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
          <div className="text-[11px] font-mono text-slate-400">UPTIME SLA CALCULATION</div>
          <div className="text-xl font-bold font-mono text-indigo-300 mt-0.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            {slaUptime.toFixed(2)}%
          </div>
        </div>

        <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
          <div className="text-[11px] font-mono text-slate-400">STREAM STATUS</div>
          <div className="text-xl font-bold font-mono text-emerald-300 mt-0.5 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            ACTIVE SYNC
          </div>
        </div>
      </div>

      {/* Pipeline Node Architecture Stages */}
      <div className="space-y-2 mb-8">
        <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
          Pipeline Flow Architecture (Live Active Stage)
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <div
                key={stage.id}
                className={`rounded-xl p-3.5 border transition-all duration-300 relative ${
                  isActive 
                    ? 'bg-slate-850 border-cyan-400 shadow-lg shadow-cyan-500/20 scale-102 ring-1 ring-cyan-400' 
                    : 'bg-slate-900/50 border-slate-800 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-slate-800 border ${stage.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      PROCESSING
                    </span>
                  )}
                </div>
                <div className="font-semibold text-xs text-white">{stage.name}</div>
                <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{stage.tech}</div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug">{stage.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Ingested Telemetry Feed (JSON Stream) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>LIVE TELEMETRY STREAM LOG (INCOMING IoT PACKETS)</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Streaming
          </span>
        </div>

        <div className="bg-[#070A12] border border-slate-800 rounded-xl p-3 font-mono text-xs overflow-x-auto space-y-2">
          {packets.map((pkt, idx) => (
            <div
              key={pkt.id + idx}
              className={`p-2.5 rounded-lg border flex flex-wrap items-center justify-between gap-2 transition-all ${
                idx === 0 
                  ? 'bg-slate-900/90 border-cyan-500/40 text-cyan-100 animate-fadeIn' 
                  : 'bg-slate-950/50 border-slate-800/80 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 font-bold">[{pkt.timestamp}]</span>
                <span className="text-white font-medium">{pkt.deviceId}</span>
                <span className="text-slate-400 text-[11px] px-1.5 py-0.5 rounded bg-slate-800">
                  {pkt.deviceType}
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <span className={pkt.rssi < -85 ? 'text-amber-400 font-semibold' : 'text-emerald-400'}>
                  RSSI: {pkt.rssi} dBm
                </span>
                <span>Battery: {pkt.batteryPct}%</span>
                <span className="text-indigo-300">Latency: {pkt.latencyMs}ms</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  pkt.status === 'ONLINE' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {pkt.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
