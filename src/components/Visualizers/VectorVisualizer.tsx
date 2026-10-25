import React, { useState } from 'react';

export const VectorVisualizer: React.FC = () => {
  const [v1, setV1] = useState<{ x: number; y: number }>({ x: 3, y: 2 });
  const [v2, setV2] = useState<{ x: number; y: number }>({ x: -1, y: 3 });

  const dotProduct = v1.x * v2.x + v1.y * v2.y;
  const len1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
  const len2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
  const cosAngle = len1 && len2 ? dotProduct / (len1 * len2) : 0;
  const angleDeg = Math.acos(Math.max(-1, Math.min(1, cosAngle))) * (180 / Math.PI);

  const scale = 20;
  const originX = 150;
  const originY = 130;

  return (
    <div className="bg-omp-card border border-omp-border rounded-xl p-4 my-4 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h4 className="font-mono text-sm text-omp-cyan font-semibold uppercase tracking-wider">
            Interaktív Vektoralgebra & Skaláris Szorzat
          </h4>
          <p className="text-xs text-omp-muted">
            a · b = |a||b|cos(φ) = aₓbₓ + a_y b_y
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-[260px] bg-omp-dark rounded-lg border border-omp-border flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full">
            {/* Grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#27272a" strokeWidth="0.8" />
              </pattern>
              <marker id="arrow-a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
              </marker>
              <marker id="arrow-b" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#06b6d4" />
              </marker>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Axes */}
            <line x1="0" y1={originY} x2="300" y2={originY} stroke="#52525b" strokeWidth="1.5" />
            <line x1={originX} y1="0" x2={originX} y2="260" stroke="#52525b" strokeWidth="1.5" />

            {/* Vector A */}
            <line
              x1={originX}
              y1={originY}
              x2={originX + v1.x * scale}
              y2={originY - v1.y * scale}
              stroke="#10b981"
              strokeWidth="3"
              markerEnd="url(#arrow-a)"
            />
            <text x={originX + v1.x * scale + 8} y={originY - v1.y * scale} fill="#10b981" fontWeight="bold" fontSize="12" className="font-mono">
              a ({v1.x}, {v1.y})
            </text>

            {/* Vector B */}
            <line
              x1={originX}
              y1={originY}
              x2={originX + v2.x * scale}
              y2={originY - v2.y * scale}
              stroke="#06b6d4"
              strokeWidth="3"
              markerEnd="url(#arrow-b)"
            />
            <text x={originX + v2.x * scale + 8} y={originY - v2.y * scale} fill="#06b6d4" fontWeight="bold" fontSize="12" className="font-mono">
              b ({v2.x}, {v2.y})
            </text>
          </svg>
        </div>

        {/* Controls and Calculations */}
        <div className="flex flex-col justify-between gap-3 bg-omp-dark/50 p-3 rounded-lg border border-omp-border font-mono text-xs">
          <div>
            <div className="text-omp-accent font-semibold mb-2">Vektor Változtatása:</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-omp-accent">a_x: {v1.x}</span>
                <input type="range" min="-5" max="5" value={v1.x} onChange={(e) => setV1({ ...v1, x: parseInt(e.target.value) })} className="accent-omp-accent w-28" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-omp-accent">a_y: {v1.y}</span>
                <input type="range" min="-5" max="5" value={v1.y} onChange={(e) => setV1({ ...v1, y: parseInt(e.target.value) })} className="accent-omp-accent w-28" />
              </div>
              <div className="flex items-center justify-between text-omp-cyan">
                <span>b_x: {v2.x}</span>
                <input type="range" min="-5" max="5" value={v2.x} onChange={(e) => setV2({ ...v2, x: parseInt(e.target.value) })} className="accent-omp-cyan w-28" />
              </div>
              <div className="flex items-center justify-between text-omp-cyan">
                <span>b_y: {v2.y}</span>
                <input type="range" min="-5" max="5" value={v2.y} onChange={(e) => setV2({ ...v2, y: parseInt(e.target.value) })} className="accent-omp-cyan w-28" />
              </div>
            </div>
          </div>

          <div className="border-t border-omp-border pt-3 space-y-1">
            <div className="flex justify-between">
              <span className="text-omp-muted">Skaláris szorzat (a · b):</span>
              <span className="font-bold text-white">{dotProduct}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-omp-muted">Hajlásszög (φ):</span>
              <span className="font-bold text-omp-yellow">{angleDeg.toFixed(1)}°</span>
            </div>
            <div className="flex justify-between">
              <span className="text-omp-muted">Merőlegesek?</span>
              <span className={`font-bold ${dotProduct === 0 ? 'text-omp-accent' : 'text-omp-pink'}`}>
                {dotProduct === 0 ? 'IGEN (a · b = 0)' : 'NEM'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
