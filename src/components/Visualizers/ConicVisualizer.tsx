import React, { useMemo, useState } from 'react';
import { MathRenderer } from '../MathRenderer';

type Mode = 'circle-line' | 'parabola-line' | 'inequality';

const WIDTH = 520;
const HEIGHT = 320;
const PAD = 36;
const XMIN = -5;
const XMAX = 5;
const YMIN = -4;
const YMAX = 6;

const toX = (x: number) => PAD + ((x - XMIN) / (XMAX - XMIN)) * (WIDTH - 2 * PAD);
const toY = (y: number) => HEIGHT - PAD - ((y - YMIN) / (YMAX - YMIN)) * (HEIGHT - 2 * PAD);

function axes() {
  return (
    <>
      <line x1={PAD} y1={toY(0)} x2={WIDTH - PAD} y2={toY(0)} stroke="#3f3f46" strokeWidth="1.5" />
      <line x1={toX(0)} y1={PAD} x2={toX(0)} y2={HEIGHT - PAD} stroke="#3f3f46" strokeWidth="1.5" />
      {[-4, -2, 2, 4].map((t) => (
        <g key={`gx${t}`}>
          <line x1={toX(t)} y1={toY(-0.12)} x2={toX(t)} y2={toY(0.12)} stroke="#71717a" strokeWidth="1" />
          <text x={toX(t)} y={toY(0) + 14} fill="#71717a" fontSize="10" textAnchor="middle" className="font-mono">
            {t}
          </text>
        </g>
      ))}
    </>
  );
}

export const ConicVisualizer: React.FC = () => {
  const [mode, setMode] = useState<Mode>('circle-line');

  // Circle center (0,0), radius r; horizontal line y = h
  const [r, setR] = useState(2.5);
  const [h, setH] = useState(1.2);

  // Parabola y = x^2 / (2p); line either y = mx+b or vertical x = v
  const [p, setP] = useState(2);
  const [m, setM] = useState(0.4);
  const [b, setB] = useState(1);
  const [vertical, setVertical] = useState(false);
  const [vx, setVx] = useState(1.5);

  // Inequality: x^2 + q x + c  (a=1)
  const [q, setQ] = useState(-5);
  const [c, setC] = useState(6);
  const [sense, setSense] = useState<'<' | '>' | '<=' | '>='>('<');

  const circleInfo = useMemo(() => {
    const dist = Math.abs(h);
    let status: 'szelő' | 'érintő' | 'kívül';
    if (Math.abs(dist - r) < 1e-6) status = 'érintő';
    else if (dist < r) status = 'szelő';
    else status = 'kívül';
    // Intersection of x^2 + y^2 = r^2 and y = h → x^2 = r^2 - h^2
    const disc = r * r - h * h;
    return { dist, status, disc };
  }, [r, h]);

  const parabolaInfo = useMemo(() => {
    if (vertical) {
      const y = (vx * vx) / (2 * p);
      return {
        count: 1 as const,
        points: [{ x: vx, y }],
        note: 'Egy közös pont, de ez NEM érintő: a függőleges egyenes a tengellyel párhuzamos szelő.',
        isTangent: false,
      };
    }
    // y = x^2/(2p) = m x + b  →  x^2 - 2p m x - 2p b = 0
    const A = 1;
    const B = -2 * p * m;
    const C = -2 * p * b;
    const D = B * B - 4 * A * C;
    const pts: { x: number; y: number }[] = [];
    if (D >= 0) {
      const s = Math.sqrt(D);
      const x1 = (-B - s) / 2;
      const x2 = (-B + s) / 2;
      pts.push({ x: x1, y: (x1 * x1) / (2 * p) });
      if (D > 1e-8) pts.push({ x: x2, y: (x2 * x2) / (2 * p) });
    }
    // Tangent iff exactly one solution AND slopes match: y' = x/p equals m at contact
    let isTangent = false;
    if (pts.length === 1) {
      const x0 = pts[0].x;
      isTangent = Math.abs(x0 / p - m) < 1e-5;
    }
    let note = '';
    if (pts.length === 0) note = 'Nincs közös pont.';
    else if (pts.length === 2) note = 'Két metszéspont (szelő).';
    else if (isTangent) note = 'Egy közös pont és érintő (meredekségek egyeznek).';
    else note = 'Egy közös pont, de nem érintő.';
    return { count: pts.length, points: pts, note, isTangent, D };
  }, [p, m, b, vertical, vx]);

  const ineqInfo = useMemo(() => {
    const D = q * q - 4 * c;
    let roots: number[] = [];
    if (D > 0) {
      const s = Math.sqrt(D);
      roots = [(-q - s) / 2, (-q + s) / 2].sort((a, b) => a - b);
    } else if (Math.abs(D) < 1e-10) {
      roots = [-q / 2];
    }
    const f = (x: number) => x * x + q * x + c;
    const holds = (x: number) => {
      const v = f(x);
      if (sense === '<') return v < 0;
      if (sense === '>') return v > 0;
      if (sense === '<=') return v <= 0;
      return v >= 0;
    };
    // Solution description for a=1 > 0 parabola opening up
    let solution = '';
    if (roots.length === 2) {
      const [r1, r2] = roots;
      if (sense === '<' || sense === '<=') {
        const openL = sense === '<' ? '(' : '[';
        const openR = sense === '<' ? ')' : ']';
        solution = `x \in ${openL}${r1.toFixed(2)};\,${r2.toFixed(2)}${openR}`;
      } else {
        const br = sense === '>' ? ')' : ']';
        const bl = sense === '>' ? '(' : '[';
        solution = `x \in (-\infty;\,${r1.toFixed(2)}${br} \cup ${bl}${r2.toFixed(2)};\,+\infty)`;
      }
    } else if (roots.length === 1) {
      const r0 = roots[0];
      if (sense === '<' || sense === '>') solution = '\\emptyset';
      else solution = `x = ${r0.toFixed(2)}`;
    } else {
      // D < 0, always positive
      if (sense === '>' || sense === '>=') solution = 'x \in \mathbb{R}';
      else solution = '\\emptyset';
    }
    return { D, roots, f, holds, solution };
  }, [q, c, sense]);

  const parabolaPath = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 120; i++) {
      const x = XMIN + ((XMAX - XMIN) * i) / 120;
      const y = (x * x) / (2 * p);
      if (y < YMIN - 1 || y > YMAX + 1) continue;
      pts.push(`${pts.length === 0 ? 'M' : 'L'} ${toX(x).toFixed(1)} ${toY(y).toFixed(1)}`);
    }
    return pts.join(' ');
  }, [p]);

  const quadraticPath = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 120; i++) {
      const x = XMIN + ((XMAX - XMIN) * i) / 120;
      const y = x * x + q * x + c;
      if (y < YMIN - 2 || y > YMAX + 2) continue;
      pts.push(`${pts.length === 0 ? 'M' : 'L'} ${toX(x).toFixed(1)} ${toY(y).toFixed(1)}`);
    }
    return pts.join(' ');
  }, [q, c]);

  const modes: { id: Mode; label: string }[] = [
    { id: 'circle-line', label: 'Kör + egyenes' },
    { id: 'parabola-line', label: 'Parabola + egyenes' },
    { id: 'inequality', label: 'Másodfokú egyenlőtlenség' },
  ];

  return (
    <div className="bg-omp-card border border-omp-border rounded-xl p-5 text-white">
      <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-omp-accent flex items-center gap-2">
            <span>◯</span> Kör, parabola és egyenes — kölcsönös helyzet
          </h3>
          <p className="text-xs text-omp-muted">
            Diszkrimináns / távolság vs. sugár, a parabola „egy pont ≠ érintő” csapdája, és grafikus egyenlőtlenség.
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
            {axes()}

            {mode === 'circle-line' && (
              <>
                <circle
                  cx={toX(0)}
                  cy={toY(0)}
                  r={((r / (XMAX - XMIN)) * (WIDTH - 2 * PAD))}
                  fill="rgba(16,185,129,0.08)"
                  stroke="#10b981"
                  strokeWidth="2.5"
                />
                <line
                  x1={PAD}
                  y1={toY(h)}
                  x2={WIDTH - PAD}
                  y2={toY(h)}
                  stroke="#ec4899"
                  strokeWidth="2.5"
                />
                {circleInfo.disc >= 0 &&
                  [Math.sqrt(Math.max(0, circleInfo.disc)), -Math.sqrt(Math.max(0, circleInfo.disc))]
                    .filter((x, i, arr) => i === 0 || Math.abs(arr[0]) > 1e-6)
                    .map((x) => (
                      <circle key={x} cx={toX(x)} cy={toY(h)} r="5" fill="#ec4899" />
                    ))}
                <circle cx={toX(0)} cy={toY(0)} r="3" fill="#fbbf24" />
              </>
            )}

            {mode === 'parabola-line' && (
              <>
                <path d={parabolaPath} fill="none" stroke="#10b981" strokeWidth="2.5" />
                {/* focus F(0, p/2) and directrix y = -p/2 */}
                <circle cx={toX(0)} cy={toY(p / 2)} r="4" fill="#fbbf24" />
                <text x={toX(0) + 8} y={toY(p / 2) - 6} fill="#fbbf24" fontSize="11" className="font-mono">
                  F
                </text>
                <line
                  x1={PAD}
                  y1={toY(-p / 2)}
                  x2={WIDTH - PAD}
                  y2={toY(-p / 2)}
                  stroke="#a78bfa"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                <text x={WIDTH - PAD - 4} y={toY(-p / 2) - 6} fill="#a78bfa" fontSize="10" textAnchor="end" className="font-mono">
                  vezéregyenes
                </text>
                {vertical ? (
                  <line x1={toX(vx)} y1={PAD} x2={toX(vx)} y2={HEIGHT - PAD} stroke="#ec4899" strokeWidth="2.5" />
                ) : (
                  <line
                    x1={toX(XMIN)}
                    y1={toY(m * XMIN + b)}
                    x2={toX(XMAX)}
                    y2={toY(m * XMAX + b)}
                    stroke="#ec4899"
                    strokeWidth="2.5"
                  />
                )}
                {parabolaInfo.points.map((pt) => (
                  <circle key={`${pt.x}-${pt.y}`} cx={toX(pt.x)} cy={toY(pt.y)} r="5" fill="#ec4899" />
                ))}
              </>
            )}

            {mode === 'inequality' && (
              <>
                {/* shade solution on x-axis */}
                {(() => {
                  const bands: { x1: number; x2: number }[] = [];
                  const samples = 200;
                  let runStart: number | null = null;
                  for (let i = 0; i <= samples; i++) {
                    const x = XMIN + ((XMAX - XMIN) * i) / samples;
                    const ok = ineqInfo.holds(x);
                    if (ok && runStart === null) runStart = x;
                    if ((!ok || i === samples) && runStart !== null) {
                      bands.push({ x1: runStart, x2: ok && i === samples ? x : XMIN + ((XMAX - XMIN) * (i - 1)) / samples });
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
                <path d={quadraticPath} fill="none" stroke="#10b981" strokeWidth="2.5" />
                {ineqInfo.roots.map((root) => (
                  <circle key={root} cx={toX(root)} cy={toY(0)} r="5" fill="#fbbf24" />
                ))}
              </>
            )}
          </svg>
        </div>

        <div className="bg-omp-dark border border-omp-border rounded-lg p-4 flex flex-col gap-3">
          {mode === 'circle-line' && (
            <>
              <div className="text-xs uppercase tracking-wider text-omp-muted font-mono">Kör: x² + y² = r², egyenes: y = h</div>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="text-zinc-400">r</span>
                  <span className="text-emerald-400">{r.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="text-zinc-400">|h| (távolság)</span>
                  <span className="text-cyan-400">{circleInfo.dist.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="text-zinc-400">D = r² − h²</span>
                  <span className="text-pink-400">{circleInfo.disc.toFixed(2)}</span>
                </div>
                <div className="mt-2 p-2 rounded bg-zinc-900 border border-zinc-800 text-center">
                  <span
                    className={
                      circleInfo.status === 'érintő'
                        ? 'text-amber-300'
                        : circleInfo.status === 'szelő'
                          ? 'text-emerald-300'
                          : 'text-zinc-300'
                    }
                  >
                    {circleInfo.status === 'szelő' && 'D > 0 → szelő (2 pont)'}
                    {circleInfo.status === 'érintő' && 'D = 0 → érintő (1 pont)'}
                    {circleInfo.status === 'kívül' && 'D < 0 → nincs közös pont'}
                  </span>
                </div>
              </div>
              <label className="text-xs text-zinc-400 font-mono">Sugár r</label>
              <input type="range" min={0.8} max={4} step={0.05} value={r} onChange={(e) => setR(+e.target.value)} className="w-full accent-emerald-500" />
              <label className="text-xs text-zinc-400 font-mono">Egyenes y = h</label>
              <input type="range" min={-3.5} max={3.5} step={0.05} value={h} onChange={(e) => setH(+e.target.value)} className="w-full accent-pink-500" />
            </>
          )}

          {mode === 'parabola-line' && (
            <>
              <div className="text-xs uppercase tracking-wider text-omp-muted font-mono">Parabola: x² = 2py</div>
              <div className="text-center mb-1">
                <MathRenderer math={vertical ? `x = ${vx.toFixed(2)}` : `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`} />
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-xs leading-relaxed text-zinc-200">
                {parabolaInfo.note}
              </div>
              <label className="flex items-center gap-2 text-xs font-mono text-zinc-300 cursor-pointer">
                <input type="checkbox" checked={vertical} onChange={(e) => setVertical(e.target.checked)} className="accent-pink-500" />
                Függőleges egyenes (csapda!)
              </label>
              <label className="text-xs text-zinc-400 font-mono">p paraméter</label>
              <input type="range" min={1} max={4} step={0.05} value={p} onChange={(e) => setP(+e.target.value)} className="w-full accent-emerald-500" />
              {vertical ? (
                <>
                  <label className="text-xs text-zinc-400 font-mono">x = v</label>
                  <input type="range" min={-4} max={4} step={0.05} value={vx} onChange={(e) => setVx(+e.target.value)} className="w-full accent-pink-500" />
                </>
              ) : (
                <>
                  <label className="text-xs text-zinc-400 font-mono">meredekség m</label>
                  <input type="range" min={-2} max={2} step={0.05} value={m} onChange={(e) => setM(+e.target.value)} className="w-full accent-pink-500" />
                  <label className="text-xs text-zinc-400 font-mono">tengelymetszet b</label>
                  <input type="range" min={-2} max={4} step={0.05} value={b} onChange={(e) => setB(+e.target.value)} className="w-full accent-cyan-500" />
                </>
              )}
            </>
          )}

          {mode === 'inequality' && (
            <>
              <div className="text-xs uppercase tracking-wider text-omp-muted font-mono">x² + qx + c {sense} 0</div>
              <div className="text-center">
                <MathRenderer math={`x^2 ${q >= 0 ? '+' : ''}${q.toFixed(1)}x ${c >= 0 ? '+' : ''}${c.toFixed(1)} ${sense} 0`} block />
              </div>
              <div className="space-y-1 text-sm font-mono">
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="text-zinc-400">D</span>
                  <span className="text-pink-400">{ineqInfo.D.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span className="text-zinc-400">zérushelyek</span>
                  <span className="text-amber-300">
                    {ineqInfo.roots.length ? ineqInfo.roots.map((r) => r.toFixed(2)).join('; ') : '—'}
                  </span>
                </div>
              </div>
              <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-center text-emerald-300 text-sm">
                <MathRenderer math={ineqInfo.solution} />
              </div>
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
              <label className="text-xs text-zinc-400 font-mono">q (lineáris együttható)</label>
              <input type="range" min={-8} max={8} step={0.1} value={q} onChange={(e) => setQ(+e.target.value)} className="w-full accent-emerald-500" />
              <label className="text-xs text-zinc-400 font-mono">c (konstans)</label>
              <input type="range" min={-8} max={12} step={0.1} value={c} onChange={(e) => setC(+e.target.value)} className="w-full accent-pink-500" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
