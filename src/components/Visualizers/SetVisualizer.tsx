import React, { useMemo, useState } from 'react';

type Op = 'union' | 'intersection' | 'difference' | 'symdiff' | 'complementA' | 'complementB';

const OPS: { id: Op; label: string; latex: string }[] = [
  { id: 'union', label: 'Unió', latex: 'A ∪ B' },
  { id: 'intersection', label: 'Metszet', latex: 'A ∩ B' },
  { id: 'difference', label: 'Különbség', latex: 'A \\ B' },
  { id: 'symdiff', label: 'Szim. diff.', latex: 'A Δ B' },
  { id: 'complementA', label: 'Ā', latex: 'U \ A = Ā' },
  { id: 'complementB', label: 'B̄', latex: 'U \ B = B̄' },
];

function inA(x: number, y: number) {
  return (x + 55) ** 2 + y ** 2 <= 95 ** 2;
}
function inB(x: number, y: number) {
  return (x - 55) ** 2 + y ** 2 <= 95 ** 2;
}
function inU(x: number, y: number) {
  return Math.abs(x) <= 190 && Math.abs(y) <= 125;
}

function highlighted(op: Op, a: boolean, b: boolean, u: boolean): boolean {
  if (!u) return false;
  switch (op) {
    case 'union':
      return a || b;
    case 'intersection':
      return a && b;
    case 'difference':
      return a && !b;
    case 'symdiff':
      return (a || b) && !(a && b);
    case 'complementA':
      return !a;
    case 'complementB':
      return !b;
  }
}

export const SetVisualizer: React.FC = () => {
  const [op, setOp] = useState<Op>('union');
  const [showLabels, setShowLabels] = useState(true);

  const dots = useMemo(() => {
    const pts: { x: number; y: number; on: boolean }[] = [];
    for (let x = -185; x <= 185; x += 14) {
      for (let y = -120; y <= 120; y += 14) {
        const a = inA(x, y);
        const b = inB(x, y);
        const u = inU(x, y);
        pts.push({ x, y, on: highlighted(op, a, b, u) });
      }
    }
    return pts;
  }, [op]);

  const current = OPS.find((o) => o.id === op)!;

  return (
    <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 my-2 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h4 className="font-mono text-sm text-cyan-400 font-semibold uppercase tracking-wider">
            Interaktív Venn-diagram
          </h4>
          <p className="text-xs text-zinc-400 mt-1">
            Halmazművelet: <span className="text-emerald-300 font-mono">{current.latex}</span> — a kiemelt pontok a művelet eredménye az U alaphalmazon.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowLabels((v) => !v)}
          className="text-xs px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-500 font-mono"
        >
          {showLabels ? 'Címkék ki' : 'Címkék be'}
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {OPS.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => setOp(o.id)}
            className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-all ${
              op === o.id
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="relative w-full h-[300px] bg-zinc-900/80 rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden">
        <svg viewBox="-210 -145 420 290" className="w-full h-full max-w-[520px]">
          <rect x={-195} y={-130} width={390} height={260} rx={8} fill="#09090b" stroke="#3f3f46" strokeWidth={2} />
          {showLabels && (
            <text x={-180} y={-110} fill="#a1a1aa" fontSize={12} fontFamily="ui-monospace, monospace">
              U
            </text>
          )}
          {dots.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={p.on ? 3.2 : 1.6}
              fill={p.on ? '#34d399' : '#27272a'}
              opacity={p.on ? 0.95 : 0.45}
            />
          ))}
          <circle cx={-55} cy={0} r={95} fill="none" stroke="#22d3ee" strokeWidth={2.5} />
          <circle cx={55} cy={0} r={95} fill="none" stroke="#a78bfa" strokeWidth={2.5} />
          {showLabels && (
            <>
              <text x={-95} y={-8} fill="#67e8f9" fontSize={16} fontFamily="ui-monospace, monospace" fontWeight={700}>
                A
              </text>
              <text x={80} y={-8} fill="#c4b5fd" fontSize={16} fontFamily="ui-monospace, monospace" fontWeight={700}>
                B
              </text>
            </>
          )}
        </svg>
      </div>

      <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
        Tipikus felelet-mondat: „Az unió azon elemek halmaza, amelyek legalább az egyiknek elemei; a metszet mindkettőnek;
        a különbség csak A-nak; a komplementer az alaphalmaz A-n kívüli része.” De Morgan: a komplementer felcseréli az uniót és a metszetet.
      </p>
    </div>
  );
};
