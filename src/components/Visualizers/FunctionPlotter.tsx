import React, { useState } from 'react';
import { MathRenderer } from '../MathRenderer';

interface Preset {
  id: string;
  name: string;
  latex: string;
  fn: (x: number) => number;
  dfn: (x: number) => number;
  domain: [number, number];
}

const PRESETS: Preset[] = [
  {
    id: 'quadratic',
    name: 'Másodfokú: f(x) = x²',
    latex: 'f(x) = x^2',
    fn: (x) => x * x,
    dfn: (x) => 2 * x,
    domain: [-3, 3],
  },
  {
    id: 'cubic',
    name: 'Harmadfokú: f(x) = x³ - 3x',
    latex: 'f(x) = x^3 - 3x',
    fn: (x) => x * x * x - 3 * x,
    dfn: (x) => 3 * x * x - 3,
    domain: [-2.5, 2.5],
  },
  {
    id: 'sin',
    name: 'Szinusz: f(x) = sin(x)',
    latex: 'f(x) = \\sin(x)',
    fn: (x) => Math.sin(x),
    dfn: (x) => Math.cos(x),
    domain: [-Math.PI * 1.5, Math.PI * 1.5],
  },
  {
    id: 'exp',
    name: 'Exponenciális: f(x) = 2ˣ',
    latex: 'f(x) = 2^x',
    fn: (x) => Math.pow(2, x),
    dfn: (x) => Math.pow(2, x) * Math.LN2,
    domain: [-3, 3],
  },
  {
    id: 'log',
    name: 'Logaritmus: f(x) = ln(x)',
    latex: 'f(x) = \\ln(x)',
    fn: (x) => Math.log(x),
    dfn: (x) => 1 / x,
    domain: [0.2, 5],
  },
];

export const FunctionPlotter: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<Preset>(PRESETS[0]);
  const [xVal, setXVal] = useState<number>(1);
  const [showTangent, setShowTangent] = useState(false);

  const width = 500;
  const height = 300;
  const padding = 40;

  const minX = selectedPreset.domain[0];
  const maxX = selectedPreset.domain[1];

  let minY = -5;
  let maxY = 5;
  const samplePoints: { x: number; y: number }[] = [];
  const steps = 100;

  for (let i = 0; i <= steps; i++) {
    const x = minX + ((maxX - minX) * i) / steps;
    const y = selectedPreset.fn(x);
    samplePoints.push({ x, y });
  }

  const validY = samplePoints.map((p) => p.y).filter((y) => !isNaN(y) && isFinite(y));
  if (validY.length > 0) {
    minY = Math.min(...validY) - 1;
    maxY = Math.max(...validY) + 1;
  }

  const toSvgX = (x: number) => padding + ((x - minX) / (maxX - minX)) * (width - 2 * padding);
  const toSvgY = (y: number) => height - padding - ((y - minY) / (maxY - minY)) * (height - 2 * padding);

  const originX = toSvgX(0);
  const originY = toSvgY(0);

  const svgPath = samplePoints
    .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${toSvgX(p.x).toFixed(1)} ${toSvgY(p.y).toFixed(1)}`)
    .join(' ');

  const yVal = selectedPreset.fn(xVal);
  const slope = selectedPreset.dfn(xVal);

  const tangentX1 = minX;
  const tangentY1 = yVal + slope * (tangentX1 - xVal);
  const tangentX2 = maxX;
  const tangentY2 = yVal + slope * (tangentX2 - xVal);

  return (
    <div className="bg-omp-card border border-omp-border rounded-xl p-5 text-white">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-omp-accent flex items-center gap-2">
            <span>📈</span> Interaktív függvényábrázoló
          </h3>
          <p className="text-xs text-omp-muted">
            Függvénygörbe és pontvizsgálat
            {showTangent ? ' — opcionális érintő (derivált) megjelenítéssel.' : '.'}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer px-2 py-1 rounded-lg bg-omp-dark border border-omp-border">
            <input
              type="checkbox"
              checked={showTangent}
              onChange={(e) => setShowTangent(e.target.checked)}
              className="accent-pink-500"
            />
            Érintő / derivált
          </label>
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setSelectedPreset(p);
                setXVal(Math.min(Math.max(0.5, p.domain[0] + 0.3), p.domain[1] - 0.3));
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                selectedPreset.id === p.id
                  ? 'bg-omp-accent text-black font-semibold shadow-lg shadow-emerald-500/20'
                  : 'bg-omp-dark border border-omp-border text-zinc-300 hover:border-zinc-500'
              }`}
            >
              {p.name.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="md:col-span-2 bg-omp-dark border border-omp-border rounded-lg p-2 flex justify-center items-center relative overflow-hidden">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto max-h-[320px]">
            <line x1={padding} y1={originY} x2={width - padding} y2={originY} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1={originX} y1={padding} x2={originX} y2={height - padding} stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d={svgPath} fill="none" stroke="#10b981" strokeWidth="3" />
            {showTangent && (
              <line
                x1={toSvgX(tangentX1)}
                y1={toSvgY(tangentY1)}
                x2={toSvgX(tangentX2)}
                y2={toSvgY(tangentY2)}
                stroke="#ec4899"
                strokeWidth="2"
                strokeDasharray="6 3"
              />
            )}
            <circle cx={toSvgX(xVal)} cy={toSvgY(yVal)} r="6" fill="#ec4899" className="animate-pulse" />
          </svg>
        </div>

        <div className="bg-omp-dark border border-omp-border rounded-lg p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-omp-muted mb-1 font-mono">Kiválasztott függvény</div>
            <div className="mb-4 text-center p-2 bg-zinc-900 border border-zinc-800 rounded">
              <MathRenderer math={selectedPreset.latex} block />
            </div>

            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-400">Pont (x₀):</span>
                <span className="text-emerald-400 font-bold">{xVal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-1">
                <span className="text-zinc-400">Érték f(x₀):</span>
                <span className="text-cyan-400 font-bold">{yVal.toFixed(2)}</span>
              </div>
              {showTangent && (
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="text-zinc-400">Derivált f′(x₀):</span>
                  <span className="text-pink-400 font-bold">{slope.toFixed(2)}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800">
            <label className="text-xs text-zinc-400 block mb-1 font-mono flex justify-between">
              <span>x₀ hely beállítása:</span>
              <span className="text-pink-400">{xVal.toFixed(2)}</span>
            </label>
            <input
              type="range"
              min={minX}
              max={maxX}
              step="0.05"
              value={xVal}
              onChange={(e) => setXVal(parseFloat(e.target.value))}
              className="w-full accent-pink-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
