import React, { useMemo, useState } from 'react';
import { MathRenderer } from '../MathRenderer';

type Mode = 'roots' | 'inequality' | 'viete';

const WIDTH = 520;
const HEIGHT = 320;
const PAD = 36;
const XMIN = -6;
const XMAX = 6;
const YMIN = -4;
const YMAX = 8;

const toX = (x: number) => PAD + ((x - XMIN) / (XMAX - XMIN)) * (WIDTH - 2 * PAD);
const toY = (y: number) => HEIGHT - PAD - ((y - YMIN) / (YMAX - YMIN)) * (HEIGHT - 2 * PAD);

export const QuadraticVisualizer: React.FC = () => {
  const [mode, setMode] = useState<Mode>('roots');
  const [a, setA] = useState(1);
  const [b, setB] = useState(-5);
  const [c, setC] = useState(6);
  const [sense, setSense] = useState<'<' | '>' | '<=' | '>='>('<');

  const info = useMemo(() => {
    const D = b * b - 4 * a * c;
    const roots: number[] = [];
    if (Math.abs(a) > 1e-12) {
      if (D > 1e-10) {
        const s = Math.sqrt(D);
        roots.push((-b - s) / (2 * a), (-b + s) / (2 * a));
        roots.sort((x, y) => x - y);
      } else if (Math.abs(D) <= 1e-10) {
        roots.push(-b / (2 * a));
      }
    }
    const sum = Math.abs(a) > 1e-12 ? -b / a : NaN;
    const prod = Math.abs(a) > 1e-12 ? c / a : NaN;
    const vertexX = Math.abs(a) > 1e-12 ? -b / (2 * a) : 0;
    const vertexY = a * vertexX * vertexX + b * vertexX + c;
    const f = (x: number) => a * x * x + b * x + c;
    const holds = (x: number) => {
      const v = f(x);
      if (sense === '<') return v < -1e-9;
      if (sense === '>') return v > 1e-9;
      if (sense === '<=') return v <= 1e-9;
      return v >= -1e-9;
    };

    let rootStatus = '';
    if (Math.abs(a) < 1e-12) rootStatus = 'a = 0 → nem másodfokú';
    else if (D > 1e-10) rootStatus = 'D > 0 → két különböző valós gyök';
    else if (Math.abs(D) <= 1e-10) rootStatus = 'D = 0 → kétszeres (egybeeső) gyök';
    else rootStatus = 'D < 0 → nincs valós gyök';

    let solution = '';
    if (Math.abs(a) < 1e-12) {
      solution = '\\text{nem másodfokú}';
    } else if (roots.length === 2) {
      const [r1, r2] = roots;
      const open = sense.includes('=');
      if (sense === '<' || sense === '<=') {
        if (a > 0) {
          solution = open
            ? `x \\in [${r1.toFixed(2)};\\,${r2.toFixed(2)}]`
            : `x \\in (${r1.toFixed(2)};\\,${r2.toFixed(2)})`;
        } else {
          solution = open
            ? `x \\in (-\\infty;\\,${r1.toFixed(2)}] \\cup [${r2.toFixed(2)};\\,+\\infty)`
            : `x \\in (-\\infty;\\,${r1.toFixed(2)}) \\cup (${r2.toFixed(2)};\\,+\\infty)`;
        }
      } else if (a > 0) {
        solution = open
          ? `x \\in (-\\infty;\\,${r1.toFixed(2)}] \\cup [${r2.toFixed(2)};\\,+\\infty)`
          : `x \\in (-\\infty;\\,${r1.toFixed(2)}) \\cup (${r2.toFixed(2)};\\,+\\infty)`;
      } else {
        solution = open
          ? `x \\in [${r1.toFixed(2)};\\,${r2.toFixed(2)}]`
          : `x \\in (${r1.toFixed(2)};\\,${r2.toFixed(2)})`;
      }
    } else if (roots.length === 1) {
      const r0 = roots[0];
      if (sense === '<' || sense === '>') solution = '\\emptyset';
      else if ((sense === '<=' && a > 0) || (sense === '>=' && a < 0)) solution = `x = ${r0.toFixed(2)}`;
      else if ((sense === '>=' && a > 0) || (sense === '<=' && a < 0)) solution = 'x \\in \\mathbb{R}';
      else solution = '\\emptyset';
    } else {
      // D < 0: sign of a
      const alwaysPos = a > 0;
      if (sense === '>' || sense === '>=') solution = alwaysPos ? 'x \\in \\mathbb{R}' : '\\emptyset';
      else solution = alwaysPos ? '\\emptyset' : 'x \\in \\mathbb{R}';
    }

    return { D, roots, sum, prod, vertexX, vertexY, f, holds, rootStatus, solution };
  }, [a, b, c, sense]);

  const curvePath = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 140; i++) {
      const x = XMIN + ((XMAX - XMIN) * i) / 140;
      const y = a * x * x + b * x + c;
      if (y < YMIN - 3 || y > YMAX + 3) {
        if (pts.length) pts.push(''); // break
        continue;
      }
      const cmd = pts.length === 0 || pts[pts.length - 1] === '' ? 'M' : 'L';
      if (pts[pts.length - 1] === '') pts.pop();
      pts.push(`${cmd} ${toX(x).toFixed(1)} ${toY(y).toFixed(1)}`);
    }
    return pts.filter(Boolean).join(' ');
  }, [a, b, c]);

  const modes: { id: Mode; label: string }[] = [
    { id: 'roots', label: 'Diszkrimináns & gyökök' },
    { id: 'inequality', label: 'Egyenlőtlenség' },
    { id: 'viete', label: 'Viète-formulák' },
  ];

  const latexEq = (() => {
    const aa = a.toFixed(1);
    const bb = `${b >= 0 ? '+' : ''}${b.toFixed(1)}`;
    const cc = `${c >= 0 ? '+' : ''}${c.toFixed(1)}`;
    return `${aa}x^2 ${bb}x ${cc} = 0`;
  })();

  return (
    <div className="bg-omp-card border border-omp-border rounded-xl p-5 text-white">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-omp-accent flex items-center gap-2">
            <span>📐</span> Másodfokú egyenlet &amp; egyenlőtlenség
          </h3>
          <p className="text-xs text-omp-muted">
            Diszkrimináns, gyökök, Viète-formulák és grafikus egyenlőtlenség — algebrai fókusszal.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {modes.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMode(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                mode === item.id
                  ? 'bg-omp-accent text-black font-semibold shadow-lg shadow-emerald-500/20'
                  : 'bg-omp-dark border border-omp-border text-zinc-300 hover:border-zinc-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-omp-dark border border-omp-border rounded-lg p-2 flex justify-center items-center overflow-hidden">
          <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-auto max-h-[340px]">
            <line x1={PAD} y1={toY(0)} x2={WIDTH - PAD} y2={toY(0)} stroke="#3f3f46" strokeWidth="1.5" />
            <line x1={toX(0)} y1={PAD} x2={toX(0)} y2={HEIGHT - PAD} stroke="#3f3f46" strokeWidth="1.5" />
            {[-4, -2, 2, 4].map((t) => (
              <g key={t}>
                <line x1={toX(t)} y1={toY(-0.12)} x2={toX(t)} y2={toY(0.12)} stroke="#71717a" strokeWidth="1" />
                <text x={toX(t)} y={toY(0) + 14} fill="#71717a" fontSize="10" textAnchor="middle" className="font-mono">
                  {t}
                </text>
              </g>
            ))}

            {mode === 'inequality' &&
              (() => {
                const bands: { x1: number; x2: number }[] = [];
                const samples = 220;
                let runStart: number | null = null;
                for (let i = 0; i <= samples; i++) {
                  const x = XMIN + ((XMAX - XMIN) * i) / samples;
                  const ok = info.holds(x);
                  if (ok && runStart === null) runStart = x;
                  if ((!ok || i === samples) && runStart !== null) {
                    const x2 = ok && i === samples ? x : XMIN + ((XMAX - XMIN) * (i - 1)) / samples;
                    bands.push({ x1: runStart, x2 });
                    runStart = null;
                  }
                }
                return bands.map((band, idx) => (
                  <rect
                    key={idx}
                    x={toX(band.x1)}
                    y={toY(0) - 10}
                    width={Math.max(2, toX(band.x2) - toX(band.x1))}
                    height={20}
                    fill="rgba(16,185,129,0.35)"
                    rx="4"
                  />
                ));
              })()}

            <path d={curvePath} fill="none" stroke="#10b981" strokeWidth="2.5" />

            <circle cx={toX(info.vertexX)} cy={toY(info.vertexY)} r="4" fill="#fbbf24" />
            <text x={toX(info.vertexX) + 8} y={toY(info.vertexY) - 6} fill="#fbbf24" fontSize="11" className="font-mono">
              csúcs
            </text>

            {info.roots.map((r) => (
              <circle key={r} cx={toX(r)} cy={toY(0)} r="5" fill="#ec4899" />
            ))}
          </svg>
        </div>

        <div className="bg-omp-dark border border-omp-border rounded-lg p-4 flex flex-col gap-3">
          <div className="text-center text-sm">
            <MathRenderer math={mode === 'inequality' ? latexEq.replace('= 0', `${sense} 0`) : latexEq} block />
          </div>

          <div className="space-y-1 text-sm font-mono">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-400">D = b² − 4ac</span>
              <span className="text-pink-400">{info.D.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-400">gyökök</span>
              <span className="text-amber-300">
                {info.roots.length ? info.roots.map((r) => r.toFixed(2)).join('; ') : '—'}
              </span>
            </div>
          </div>

          <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-xs text-center text-emerald-300">
            {mode === 'roots' && info.rootStatus}
            {mode === 'inequality' && <MathRenderer math={info.solution} />}
            {mode === 'viete' && (
              <div className="space-y-1">
                <div>
                  <MathRenderer math={`x_1+x_2=-\\frac{b}{a}=${Number.isFinite(info.sum) ? info.sum.toFixed(2) : '?'}`} />
                </div>
                <div>
                  <MathRenderer math={`x_1\\cdot x_2=\\frac{c}{a}=${Number.isFinite(info.prod) ? info.prod.toFixed(2) : '?'}`} />
                </div>
                {info.roots.length === 2 && (
                  <div className="text-zinc-400 mt-1">
                    ellenőrzés: {(info.roots[0] + info.roots[1]).toFixed(2)} /{' '}
                    {(info.roots[0] * info.roots[1]).toFixed(2)}
                  </div>
                )}
              </div>
            )}
          </div>

          {mode === 'inequality' && (
            <div className="flex flex-wrap gap-1">
              {(['<', '<=', '>', '>='] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSense(s)}
                  className={`px-2 py-1 rounded text-xs font-mono ${
                    sense === s ? 'bg-emerald-500 text-black' : 'bg-zinc-800 text-zinc-300'
                  }`}
                >
                  {s} 0
                </button>
              ))}
            </div>
          )}

          <label className="text-xs text-zinc-400 font-mono">a (főegyüttható)</label>
          <input type="range" min={-2} max={2} step={0.1} value={a} onChange={(e) => setA(+e.target.value)} className="w-full accent-emerald-500" />
          <label className="text-xs text-zinc-400 font-mono">b</label>
          <input type="range" min={-8} max={8} step={0.1} value={b} onChange={(e) => setB(+e.target.value)} className="w-full accent-pink-500" />
          <label className="text-xs text-zinc-400 font-mono">c</label>
          <input type="range" min={-8} max={12} step={0.1} value={c} onChange={(e) => setC(+e.target.value)} className="w-full accent-cyan-500" />
        </div>
      </div>
    </div>
  );
};
