import React, { useState, useMemo } from 'react';
import { Activity, Clock, Sliders, Filter, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

type AggregationMethod = 'sum' | 'count' | 'avg' | 'mode' | 'median';

interface SensorRow {
  sensorId: string;
  name: string;
  location: string;
  data: number[]; // 24 hours in 15-min buckets = 96 data points
}

export const MotionHeatmapDemo: React.FC = () => {
  const [method, setMethod] = useState<AggregationMethod>('sum');
  const [selectedSensor, setSelectedSensor] = useState<string>('all');
  const [hoveredBucket, setHoveredBucket] = useState<{
    sensorName: string;
    time: string;
    value: number;
    intensity: number;
  } | null>(null);

  // Generate deterministic realistic 24-hour sensor activity (96 time buckets of 15-min each)
  const sensors: SensorRow[] = useMemo(() => {
    // 96 buckets = 0:00 to 23:45
    const generateBuckets = (pattern: 'bedroom' | 'kitchen' | 'living' | 'door') => {
      const buckets: number[] = [];
      for (let i = 0; i < 96; i++) {
        const hour = i / 4; // 0 to 24
        let base = 0;
        if (pattern === 'bedroom') {
          // night sleep (0-7): low, evening (21-24): medium-high
          if (hour >= 0 && hour < 7) base = Math.random() < 0.15 ? 1 : 0;
          else if (hour >= 7 && hour < 9) base = Math.floor(3 + Math.random() * 5);
          else if (hour >= 21 && hour <= 24) base = Math.floor(4 + Math.random() * 6);
          else base = Math.random() < 0.2 ? 1 : 0;
        } else if (pattern === 'kitchen') {
          // breakfast (7-9), lunch (12-14), dinner (18-20)
          if ((hour >= 7 && hour <= 9) || (hour >= 12 && hour <= 14) || (hour >= 18 && hour <= 20)) {
            base = Math.floor(4 + Math.random() * 8);
          } else {
            base = Math.random() < 0.1 ? 1 : 0;
          }
        } else if (pattern === 'living') {
          // active throughout day (9-22)
          if (hour >= 9 && hour <= 22) base = Math.floor(2 + Math.random() * 7);
          else base = 0;
        } else if (pattern === 'door') {
          // morning exit (8:30-9), evening return (17-18)
          if ((hour >= 8 && hour <= 9) || (hour >= 17 && hour <= 18)) {
            base = Math.floor(1 + Math.random() * 3);
          } else {
            base = Math.random() < 0.05 ? 1 : 0;
          }
        }
        buckets.push(base);
      }
      return buckets;
    };

    return [
      { sensorId: 'MOT-01', name: 'Master Bedroom Motion', location: 'Bedroom Zone', data: generateBuckets('bedroom') },
      { sensorId: 'MOT-02', name: 'Kitchen Activity Sensor', location: 'Kitchen Zone', data: generateBuckets('kitchen') },
      { sensorId: 'MOT-03', name: 'Living Room Motion Grid', location: 'Living Room Zone', data: generateBuckets('living') },
      { sensorId: 'DOR-01', name: 'Main Entry Door / Window', location: 'Front Entryway', data: generateBuckets('door') }
    ];
  }, []);

  const timeLabels = [
    '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '23:45'
  ];

  // Helper to format bucket index to HH:MM string
  const formatTime = (index: number) => {
    const totalMinutes = index * 15;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  // Color intensity mapping based on value
  const getIntensityColor = (val: number) => {
    if (val === 0) return 'bg-slate-900/60 border-slate-800/60';
    if (val <= 2) return 'bg-cyan-950 text-cyan-400 border-cyan-800/40';
    if (val <= 4) return 'bg-cyan-800 text-cyan-200 border-cyan-600/50';
    if (val <= 6) return 'bg-cyan-600 text-white border-cyan-400/60';
    if (val <= 8) return 'bg-cyan-400 text-slate-950 font-bold border-cyan-300';
    return 'bg-emerald-400 text-slate-950 font-bold border-emerald-300 shadow-sm shadow-emerald-400/50';
  };

  const filteredSensors = selectedSensor === 'all' 
    ? sensors 
    : sensors.filter(s => s.sensorId === selectedSensor);

  return (
    <div className="glass-card rounded-2xl border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute -top-10 -left-10 w-80 h-40 bg-emerald-500/10 blur-[80px] pointer-events-none" />

      {/* Title & Context */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h3 className="text-xl font-bold text-white tracking-tight font-mono">
              HOMESIGHT CARE: 15-MIN SENSOR AGGREGATION ENGINE
            </h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Interactive replica of the custom React & Node.js motion-activity heat map engineered for elderly care telemetry monitoring.
          </p>
        </div>

        {/* Aggregation Engine Selector */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {(['sum', 'count', 'avg', 'median'] as AggregationMethod[]).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`px-3 py-1 text-xs font-mono rounded-lg uppercase transition-all ${
                  method === m 
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <select
            value={selectedSensor}
            onChange={(e) => setSelectedSensor(e.target.value)}
            aria-label="Filter Sensor Zone"
            className="bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Sensor Zones (4)</option>
            {sensors.map(s => (
              <option key={s.sensorId} value={s.sensorId}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Heatmap Grid Visualizer */}
      <div className="my-6 space-y-4">
        {filteredSensors.map((sensor) => (
          <div key={sensor.sensorId} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-200">{sensor.name}</span>
                <span className="text-[11px] font-mono text-slate-400">({sensor.location})</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400">{sensor.sensorId}</span>
            </div>

            {/* 96 15-minute cell grid */}
            <div className="grid grid-cols-48 sm:grid-cols-96 gap-[2px] bg-slate-950/80 p-2 rounded-xl border border-slate-800">
              {sensor.data.map((val, bIdx) => (
                <div
                  key={bIdx}
                  onMouseEnter={() => setHoveredBucket({
                    sensorName: sensor.name,
                    time: formatTime(bIdx),
                    value: val,
                    intensity: Math.min(100, val * 12)
                  })}
                  className={`h-7 rounded-[2px] border transition-all cursor-pointer hover:scale-125 hover:z-20 ${getIntensityColor(val)}`}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Time Axis Labels */}
        <div className="flex justify-between text-[10px] font-mono text-slate-400 px-2 pt-1 border-t border-slate-800/80">
          {timeLabels.map((lbl, idx) => (
            <span key={idx}>{lbl}</span>
          ))}
        </div>
      </div>

      {/* Interactive Tooltip / Inspection Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {hoveredBucket ? (
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-400">Zone: </span>
              <span className="text-white font-semibold">{hoveredBucket.sensorName}</span>
            </div>
            <div>
              <span className="text-slate-400">Time Bucket (15-min): </span>
              <span className="text-cyan-300 font-bold">{hoveredBucket.time}</span>
            </div>
            <div>
              <span className="text-slate-400">Calculated Intensity ({method.toUpperCase()}): </span>
              <span className="text-emerald-400 font-bold">{hoveredBucket.value} events ({hoveredBucket.intensity}%)</span>
            </div>
          </div>
        ) : (
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Hover over any of the 96 time-interval cells above to inspect real-time sensor intensity scores.</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>Scale:</span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-slate-900 border border-slate-800"></span> 0
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-cyan-800"></span> Med
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-emerald-400"></span> High
          </span>
        </div>
      </div>

    </div>
  );
};
