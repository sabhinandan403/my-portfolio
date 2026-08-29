import React, { useState, useEffect } from 'react';
import { Play, Pause, Activity, Cpu, Database, BarChart3, Wifi, Zap, CheckCircle2 } from 'lucide-react';

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
  const [streamSpeed, setStreamSpeed] = useState<number>(1000);
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
    setPackets([generatePacket(), generatePacket(), generatePacket(), generatePacket()]);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const newPacket = generatePacket();
      setPackets(prev => [newPacket, ...prev.slice(0, 4)]);
      setProcessedCount(prev => prev + 1);
      setCurrentLatency(newPacket.latencyMs);
      setActiveStage(prev => (prev + 1) % 5);
      setSlaUptime(99.2 + Math.random() * 0.5);
    }, streamSpeed);

    return () => clearInterval(interval);
  }, [isRunning, streamSpeed]);

  const stages = [
    {
      id: 0,
      name: "1. Edge IoT Sensors",
      tech: "LoRa / Zigbee / Mesh",
      desc: "50+ facility sites transmitting telemetry",
      icon: Wifi,
    },
    {
      id: 1,
      name: "2. Kafka Ingestion",
      tech: "Apache Kafka",
      desc: "Distributed event bus partitioning",
      icon: Activity,
    },
    {
      id: 2,
      name: "3. PySpark & Delta Lake",
      tech: "Databricks Engine",
      desc: "Automated Wi-Fi mesh uptime SLAs",
      icon: Cpu,
    },
    {
      id: 3,
      name: "4. Low-Latency Cache",
      tech: "In-Memory Preloaded Cache",
      desc: "Sub-50ms indexed lookups with DB fallback",
      icon: Database,
    },
    {
      id: 4,
      name: "5. Operational UIs",
      tech: "Power BI & React",
      desc: "Executive reports and site alarms",
      icon: BarChart3,
    }
  ];

  return (
    <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <h3 className="text-base font-semibold text-white tracking-tight font-mono">
              REAL-TIME TELEMETRY PIPELINE SIMULATOR
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Simulating Vantiva's 10k+ daily event stream with Kafka, PySpark, and sub-50ms caching.
          </p>
        </div>

        {/* Speed & Pause Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/[0.08]">
            <button
              onClick={() => setStreamSpeed(1200)}
              className={`px-2.5 py-1 text-xs font-mono rounded ${streamSpeed === 1200 ? 'bg-white/[0.12] text-white font-semibold' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              1x
            </button>
            <button
              onClick={() => setStreamSpeed(600)}
              className={`px-2.5 py-1 text-xs font-mono rounded ${streamSpeed === 600 ? 'bg-white/[0.12] text-white font-semibold' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              2x
            </button>
            <button
              onClick={() => setStreamSpeed(300)}
              className={`px-2.5 py-1 text-xs font-mono rounded ${streamSpeed === 300 ? 'bg-white/[0.12] text-white font-semibold' : 'text-neutral-500 hover:text-neutral-300'}`}
            >
              5x
            </button>
          </div>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors border ${
              isRunning 
                ? 'bg-white/[0.04] text-neutral-300 border-white/[0.1] hover:bg-white/[0.08]' 
                : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
            }`}
          >
            {isRunning ? <><Pause className="w-3 h-3" /> Pause</> : <><Play className="w-3 h-3" /> Resume</>}
          </button>
        </div>
      </div>

      {/* Live Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-black/30 rounded-xl p-3.5 border border-white/[0.06]">
          <div className="text-[10px] font-mono text-neutral-500 uppercase">PROCESSED EVENTS</div>
          <div className="text-lg font-bold font-mono text-white mt-0.5 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            {processedCount.toLocaleString()}
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-3.5 border border-white/[0.06]">
          <div className="text-[10px] font-mono text-neutral-500 uppercase">CACHE LATENCY</div>
          <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5">
            {currentLatency} ms <span className="text-[10px] text-neutral-500 font-normal">(&lt;50ms SLA)</span>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-3.5 border border-white/[0.06]">
          <div className="text-[10px] font-mono text-neutral-500 uppercase">UPTIME SLA</div>
          <div className="text-lg font-bold font-mono text-white mt-0.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {slaUptime.toFixed(2)}%
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-3.5 border border-white/[0.06]">
          <div className="text-[10px] font-mono text-neutral-500 uppercase">STREAM HEALTH</div>
          <div className="text-lg font-bold font-mono text-emerald-400 mt-0.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE
          </div>
        </div>
      </div>

      {/* Stage Flow Nodes */}
      <div className="space-y-2">
        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
          Architecture Flow
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <div
                key={stage.id}
                className={`p-3 rounded-xl border transition-all ${
                  isActive 
                    ? 'bg-white/[0.06] border-emerald-500/50 shadow-sm' 
                    : 'bg-black/20 border-white/[0.05] opacity-75'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1.5 rounded-md bg-white/[0.05] text-neutral-300">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {isActive && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
                      PROCESSING
                    </span>
                  )}
                </div>
                <div className="font-semibold text-xs text-white">{stage.name}</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{stage.tech}</div>
                <div className="text-[10px] text-neutral-400 mt-1 leading-snug">{stage.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Stream Feed */}
      <div className="space-y-1.5 pt-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>LIVE TELEMETRY STREAM LOG</span>
          <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Syncing
          </span>
        </div>

        <div className="bg-black/50 border border-white/[0.06] rounded-xl p-3 font-mono text-xs space-y-1.5 overflow-x-auto">
          {packets.map((pkt, idx) => (
            <div
              key={pkt.id + idx}
              className={`p-2 rounded-lg border flex flex-wrap items-center justify-between gap-2 text-xs transition-colors ${
                idx === 0 
                  ? 'bg-white/[0.04] border-white/[0.12] text-neutral-200' 
                  : 'bg-transparent border-transparent text-neutral-500'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-neutral-400">[{pkt.timestamp}]</span>
                <span className="text-white font-medium">{pkt.deviceId}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-400">
                  {pkt.deviceType}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <span className={pkt.rssi < -85 ? 'text-amber-400' : 'text-emerald-400'}>
                  {pkt.rssi} dBm
                </span>
                <span>Bat: {pkt.batteryPct}%</span>
                <span className="text-neutral-400">{pkt.latencyMs}ms</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400">
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
