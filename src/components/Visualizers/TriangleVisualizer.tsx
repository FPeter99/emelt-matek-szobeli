import React, { useMemo, useState } from 'react';

type Mode = 'centers' | 'right' | 'laws';

const MODES: { id: Mode; label: string }[] = [
  { id: 'centers', label: 'Nevezetes pontok' },
  { id: 'right', label: 'Derékszögű' },
  { id: 'laws', label: 'Szög–oldal' },
];

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

type Pt = { x: number; y: number };

export const TriangleVisualizer: React.FC = () => {
  const [mode, setMode] = useState<Mode>('centers');
  const [a, setA] = useState(6);
  const [b, setB] = useState(7);
  const [c, setC] = useState(8);

  const geometry = useMemo(() => {
    const xA = (b * b + c * c - a * a) / (2 * c);
    const yA = Math.sqrt(Math.max(0, b * b - xA * xA));
    const A: Pt = { x: xA, y: yA };
    const B: Pt = { x: c, y: 0 };
    const C: Pt = { x: 0, y: 0 };

    const mid = (P: Pt, Q: Pt): Pt => ({ x: (P.x + Q.x) / 2, y: (P.y + Q.y) / 2 });
    const Fa = mid(B, C);
    const Fb = mid(A, C);
    const Fc = mid(A, B);

    const G: Pt = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };

    const D = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
    const O: Pt =
      Math.abs(D) < 1e-9
        ? G
        : {
            x:
              ((A.x * A.x + A.y * A.y) * (B.y - C.y) +
                (B.x * B.x + B.y * B.y) * (C.y - A.y) +
                (C.x * C.x + C.y * C.y) * (A.y - B.y)) /
              D,
            y:
              ((A.x * A.x + A.y * A.y) * (C.x - B.x) +
                (B.x * B.x + B.y * B.y) * (A.x - C.x) +
                (C.x * C.x + C.y * C.y) * (B.x - A.x)) /
              D,
          };

    const peri = a + b + c;
    const I: Pt = {
      x: (a * A.x + b * B.x + c * C.x) / peri,
      y: (a * A.y + b * B.y + c * C.y) / peri,
    };

    // Orthocenter: altitude from A to BC (horizontal) is x = A.x;
    // altitude from B to AC: AC = (A.x, A.y), perp = (-A.y, A.x)
    const acy = A.y;
    const H: Pt =
      Math.abs(acy) < 1e-9
        ? { x: A.x, y: A.y }
        : (() => {
            const t = (A.x - B.x) / -acy;
            return { x: A.x, y: B.y + t * A.x };
          })();

    const area = Math.abs((B.x * (A.y - C.y) + A.x * (C.y - B.y) + C.x * (B.y - A.y)) / 2);
    const s = peri / 2;
    const angleA = Math.acos(clamp((b * b + c * c - a * a) / (2 * b * c), -1, 1)) * (180 / Math.PI);
    const angleB = Math.acos(clamp((a * a + c * c - b * b) / (2 * a * c), -1, 1)) * (180 / Math.PI);
    const angleC = 180 - angleA - angleB;
    const R = Math.hypot(O.x - A.x, O.y - A.y);
    const r = s > 0 ? area / s : 0;

    return { A, B, C, Fa, Fb, Fc, G, O, I, H, area, angleA, angleB, angleC, R, r };
  }, [a, b, c]);

  const pad = 1.2;
  const xs = [geometry.A.x, geometry.B.x, geometry.C.x, geometry.O.x, geometry.H.x, geometry.I.x];
  const ys = [geometry.A.y, geometry.B.y, geometry.C.y, geometry.O.y, geometry.H.y, geometry.I.y];
  const minX = Math.min(...xs) - pad;
  const maxX = Math.max(...xs) + pad;
  const minY = Math.min(...ys) - pad;
  const maxY = Math.max(...ys) + pad;
  const W = maxX - minX;
  const Hgt = maxY - minY;
  const map = (p: Pt): Pt => ({ x: p.x, y: maxY + minY - p.y });

  const A = map(geometry.A);
  const B = map(geometry.B);
  const C = map(geometry.C);
  const G = map(geometry.G);
  const O = map(geometry.O);
  const I = map(geometry.I);
  const Hc = map(geometry.H);
  const Fa = map(geometry.Fa);
  const Fb = map(geometry.Fb);
  const Fc = map(geometry.Fc);
  const footA = map({ x: geometry.A.x, y: 0 });

  return (
    <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 my-2 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h4 className="font-mono text-sm text-cyan-400 font-semibold uppercase tracking-wider">
            Interaktív háromszög
          </h4>
          <p className="text-xs text-zinc-400 mt-1">
            Oldalak: a={a}, b={b}, c={c} · α≈{geometry.angleA.toFixed(1)}° · β≈{geometry.angleB.toFixed(1)}° · γ≈
            {geometry.angleC.toFixed(1)}°
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-mono ${
                mode === m.id
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4 text-xs font-mono">
        <label className="flex flex-col gap-1 text-zinc-400">
          a (BC)
          <input
            type="range"
            min={3}
            max={12}
            value={a}
            onChange={(e) => setA(+e.target.value)}
            className="accent-emerald-400"
          />
          <span className="text-white">{a}</span>
        </label>
        <label className="flex flex-col gap-1 text-zinc-400">
          b (AC)
          <input
            type="range"
            min={3}
            max={12}
            value={b}
            onChange={(e) => setB(+e.target.value)}
            className="accent-emerald-400"
          />
          <span className="text-white">{b}</span>
        </label>
        <label className="flex flex-col gap-1 text-zinc-400">
          c (AB)
          <input
            type="range"
            min={3}
            max={12}
            value={c}
            onChange={(e) => setC(+e.target.value)}
            className="accent-emerald-400"
          />
          <span className="text-white">{c}</span>
        </label>
      </div>

      <div className="relative w-full h-[300px] bg-zinc-900/80 rounded-lg border border-zinc-800 overflow-hidden">
        <svg viewBox={`${minX} ${minY} ${W} ${Hgt}`} className="w-full h-full">
          <polygon
            points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
            fill="#22d3ee15"
            stroke="#67e8f9"
            strokeWidth={0.08}
          />
          <text x={A.x} y={A.y - 0.25} fill="#e4e4e7" fontSize={0.45} textAnchor="middle">
            A
          </text>
          <text x={B.x + 0.2} y={B.y + 0.45} fill="#e4e4e7" fontSize={0.45}>
            B
          </text>
          <text x={C.x - 0.35} y={C.y + 0.45} fill="#e4e4e7" fontSize={0.45}>
            C
          </text>

          {mode === 'centers' && (
            <>
              <line x1={A.x} y1={A.y} x2={Fa.x} y2={Fa.y} stroke="#a78bfa" strokeWidth={0.05} strokeDasharray="0.15 0.1" />
              <line x1={B.x} y1={B.y} x2={Fb.x} y2={Fb.y} stroke="#a78bfa" strokeWidth={0.05} strokeDasharray="0.15 0.1" />
              <line x1={C.x} y1={C.y} x2={Fc.x} y2={Fc.y} stroke="#a78bfa" strokeWidth={0.05} strokeDasharray="0.15 0.1" />
              <circle cx={G.x} cy={G.y} r={0.12} fill="#c4b5fd" />
              <circle cx={O.x} cy={O.y} r={0.12} fill="#34d399" />
              <circle cx={I.x} cy={I.y} r={0.12} fill="#fbbf24" />
              <circle cx={Hc.x} cy={Hc.y} r={0.12} fill="#f472b6" />
              {geometry.R > 0 && (
                <circle cx={O.x} cy={O.y} r={geometry.R} fill="none" stroke="#34d39955" strokeWidth={0.06} />
              )}
            </>
          )}

          {mode === 'right' && (
            <>
              <line x1={A.x} y1={A.y} x2={footA.x} y2={footA.y} stroke="#fbbf24" strokeWidth={0.07} />
              <text x={(A.x + B.x) / 2} y={(A.y + B.y) / 2 - 0.2} fill="#67e8f9" fontSize={0.35}>
                c
              </text>
              <text x={(A.x + C.x) / 2 - 0.3} y={(A.y + C.y) / 2} fill="#67e8f9" fontSize={0.35}>
                b
              </text>
              <text x={(B.x + C.x) / 2} y={B.y + 0.4} fill="#67e8f9" fontSize={0.35}>
                a
              </text>
            </>
          )}

          {mode === 'laws' && (
            <>
              <text x={C.x + 0.85} y={C.y - 0.35} fill="#f9a8d4" fontSize={0.35}>
                γ≈{geometry.angleC.toFixed(0)}°
              </text>
              <text x={A.x + 0.2} y={A.y + 0.5} fill="#f9a8d4" fontSize={0.35}>
                α≈{geometry.angleA.toFixed(0)}°
              </text>
              <text x={B.x - 1.2} y={B.y - 0.25} fill="#f9a8d4" fontSize={0.35}>
                β≈{geometry.angleB.toFixed(0)}°
              </text>
            </>
          )}
        </svg>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-xs font-mono">
        {mode === 'centers' && (
          <>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">
              Súlypont <span className="text-violet-300">G</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">
              Köréírt <span className="text-emerald-300">O</span> R≈{geometry.R.toFixed(2)}
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">
              Beírt <span className="text-amber-300">I</span> r≈{geometry.r.toFixed(2)}
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">
              Magasságpont <span className="text-pink-300">H</span>
            </div>
          </>
        )}
        {mode === 'right' && (
          <>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2 col-span-2">
              Pitagorasz-check: a²+b² ? c² → {(a * a + b * b).toFixed(1)} vs {(c * c).toFixed(1)}
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2 col-span-2">
              T ≈ {geometry.area.toFixed(2)}
            </div>
          </>
        )}
        {mode === 'laws' && (
          <>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2 col-span-2">
              Szinusz: a/sin α ≈ {(a / Math.sin((geometry.angleA * Math.PI) / 180)).toFixed(2)}
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2 col-span-2">
              Koszinusz: cos γ ≈ {Math.cos((geometry.angleC * Math.PI) / 180).toFixed(3)}
            </div>
          </>
        )}
      </div>
      <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
        Feleletben: nevezetes pontok (G, O, I, H), derékszögű tételek (Pitagorasz, magasság/befogó), általános háromszög:
        szinusz- és koszinusztétel.
      </p>
    </div>
  );
};
