import React, { useState, useMemo } from 'react';
import { Activity } from 'lucide-react';

type AggregationMethod = 'sum' | 'count' | 'avg' | 'median';

interface SensorRow {
  sensorId: string;
  name: string;
  location: string;
  data: number[];
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

  const sensors: SensorRow[] = useMemo(() => {
    const generateBuckets = (pattern: 'bedroom' | 'kitchen' | 'living' | 'door') => {
      const buckets: number[] = [];
      for (let i = 0; i < 96; i++) {
        const hour = i / 4;
        let base = 0;
        if (pattern === 'bedroom') {
          if (hour >= 0 && hour < 7) base = Math.random() < 0.15 ? 1 : 0;
          else if (hour >= 7 && hour < 9) base = Math.floor(3 + Math.random() * 5);
          else if (hour >= 21 && hour <= 24) base = Math.floor(4 + Math.random() * 6);
          else base = Math.random() < 0.2 ? 1 : 0;
        } else if (pattern === 'kitchen') {
          if ((hour >= 7 && hour <= 9) || (hour >= 12 && hour <= 14) || (hour >= 18 && hour <= 20)) {
            base = Math.floor(4 + Math.random() * 8);
          } else {
            base = Math.random() < 0.1 ? 1 : 0;
          }
        } else if (pattern === 'living') {
          if (hour >= 9 && hour <= 22) base = Math.floor(2 + Math.random() * 7);
          else base = 0;
        } else if (pattern === 'door') {
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

  const timeLabels = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '23:45'];

  const formatTime = (index: number) => {
    const totalMinutes = index * 15;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const getIntensityColor = (val: number) => {
    if (val === 0) return 'bg-white/[0.02] border-white/[0.04]';
    if (val <= 2) return 'bg-emerald-950/60 border-emerald-900/40 text-emerald-400';
    if (val <= 4) return 'bg-emerald-800/80 border-emerald-700/50 text-emerald-200';
    if (val <= 6) return 'bg-emerald-600 border-emerald-500 text-white';
    if (val <= 8) return 'bg-emerald-500 border-emerald-400 text-neutral-950 font-bold';
    return 'bg-emerald-400 border-emerald-300 text-neutral-950 font-bold';
  };

  const filteredSensors = selectedSensor === 'all' 
    ? sensors 
    : sensors.filter(s => s.sensorId === selectedSensor);

  return (
    <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <h3 className="text-base font-semibold text-white tracking-tight font-mono">
              HOMESIGHT CARE: 15-MIN SENSOR AGGREGATION ENGINE
            </h3>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Elderly care telemetry interface turning sparse binary sensors into 15-minute intensity intervals.
          </p>
        </div>

        {/* Aggregation Mode Selector */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/[0.08]">
            {(['sum', 'count', 'avg', 'median'] as AggregationMethod[]).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`px-2.5 py-1 text-xs font-mono rounded uppercase transition-colors ${
                  method === m 
                    ? 'bg-white/[0.12] text-white font-semibold' 
                    : 'text-neutral-500 hover:text-neutral-300'
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
            className="bg-black/40 border border-white/[0.08] text-xs font-mono text-neutral-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
          >
            <option value="all">All Zones</option>
            {sensors.map(s => (
              <option key={s.sensorId} value={s.sensorId}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="space-y-4">
        {filteredSensors.map((sensor) => (
          <div key={sensor.sensorId} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-neutral-300">{sensor.name}</span>
              <span className="text-[10px] font-mono text-neutral-500">{sensor.sensorId}</span>
            </div>

            <div className="grid grid-cols-48 sm:grid-cols-96 gap-[2px] bg-black/40 p-2 rounded-xl border border-white/[0.06]">
              {sensor.data.map((val, bIdx) => (
                <div
                  key={bIdx}
                  onMouseEnter={() => setHoveredBucket({
                    sensorName: sensor.name,
                    time: formatTime(bIdx),
                    value: val,
                    intensity: Math.min(100, val * 12)
                  })}
                  className={`h-6 rounded-[1px] border transition-transform cursor-pointer hover:scale-125 hover:z-20 ${getIntensityColor(val)}`}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Time Labels */}
        <div className="flex justify-between text-[10px] font-mono text-neutral-500 px-1 pt-1">
          {timeLabels.map((lbl, idx) => (
            <span key={idx}>{lbl}</span>
          ))}
        </div>
      </div>

      {/* Inspection Footer */}
      <div className="bg-black/30 border border-white/[0.06] rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        {hoveredBucket ? (
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-neutral-400">Zone: <strong className="text-white">{hoveredBucket.sensorName}</strong></span>
            <span className="text-neutral-400">Time (15m): <strong className="text-emerald-400">{hoveredBucket.time}</strong></span>
            <span className="text-neutral-400">Calculated ({method.toUpperCase()}): <strong className="text-white">{hoveredBucket.value} ({hoveredBucket.intensity}%)</strong></span>
          </div>
        ) : (
          <div className="text-neutral-500 flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Hover across 96 time-interval cells to inspect 15-minute intensity scores.</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-[10px] text-neutral-500">
          <span>Scale:</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-white/[0.02] border border-white/[0.04]"></span>0</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-800"></span>Med</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-400"></span>High</span>
        </div>
      </div>

    </div>
  );
};
