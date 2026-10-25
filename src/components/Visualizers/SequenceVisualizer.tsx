import React, { useMemo, useState } from 'react';

type Kind = 'arithmetic' | 'geometric';

export const SequenceVisualizer: React.FC = () => {
  const [kind, setKind] = useState<Kind>('arithmetic');
  const [a1, setA1] = useState(3);
  const [param, setParam] = useState(2); // d or q
  const [n, setN] = useState(8);

  const terms = useMemo(() => {
    return Array.from({ length: n }, (_, i) => {
      const k = i + 1;
      if (kind === 'arithmetic') return a1 + (k - 1) * param;
      return a1 * param ** (k - 1);
    });
  }, [kind, a1, param, n]);

  const sum = useMemo(() => {
    if (kind === 'arithmetic') return (n * (terms[0] + terms[n - 1])) / 2;
    if (param === 1) return n * a1;
    return (a1 * (param ** n - 1)) / (param - 1);
  }, [kind, terms, n, a1, param]);

  const infiniteSum = useMemo(() => {
    if (kind !== 'geometric' || Math.abs(param) >= 1 || a1 === 0) return null;
    return a1 / (1 - param);
  }, [kind, a1, param]);

  const maxAbs = Math.max(...terms.map(Math.abs), 1);

  return (
    <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 my-2 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div>
          <h4 className="font-mono text-sm text-cyan-400 font-semibold uppercase tracking-wider">
            Sorozat szemléltető
          </h4>
          <p className="text-xs text-zinc-400 mt-1">
            {kind === 'arithmetic'
              ? `a_n = ${a1} + (n-1)·${param} · S_n = ${sum}`
              : `a_n = ${a1}·${param}^(n-1) · S_n = ${Number.isFinite(sum) ? Number(sum.toFixed(4)) : '—'}${infiniteSum !== null ? ` · S_∞ = ${Number(infiniteSum.toFixed(4))} (|q|<1)` : Math.abs(param) >= 1 ? ' · S_∞ divergens (|q|≥1)' : ''}`}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setKind('arithmetic')}
            className={`text-xs px-3 py-1.5 rounded-lg border font-mono ${
              kind === 'arithmetic' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' : 'border-zinc-700 text-zinc-400'
            }`}
          >
            Számtani
          </button>
          <button
            type="button"
            onClick={() => setKind('geometric')}
            className={`text-xs px-3 py-1.5 rounded-lg border font-mono ${
              kind === 'geometric' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300' : 'border-zinc-700 text-zinc-400'
            }`}
          >
            Mértani
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4 text-xs font-mono">
        <label className="flex flex-col gap-1 text-zinc-400">
          a₁
          <input type="range" min={-5} max={10} value={a1} onChange={(e) => setA1(+e.target.value)} className="accent-emerald-400" />
          <span className="text-white">{a1}</span>
        </label>
        <label className="flex flex-col gap-1 text-zinc-400">
          {kind === 'arithmetic' ? 'd' : 'q'}
          <input type="range" min={kind === 'geometric' ? -3 : -5} max={5} step={kind === 'geometric' ? 0.5 : 1} value={param} onChange={(e) => setParam(+e.target.value)} className="accent-emerald-400" />
          <span className="text-white">{param}</span>
        </label>
        <label className="flex flex-col gap-1 text-zinc-400">
          n
          <input type="range" min={3} max={12} value={n} onChange={(e) => setN(+e.target.value)} className="accent-emerald-400" />
          <span className="text-white">{n}</span>
        </label>
      </div>
      <div className="flex items-end gap-1 h-40">
        {terms.map((t, i) => (
          <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1 h-full">
            <span className="text-[10px] font-mono text-zinc-400">{Number.isInteger(t) ? t : t.toFixed(1)}</span>
            <div
              className={`w-full rounded-t ${t >= 0 ? 'bg-cyan-500/70' : 'bg-rose-500/70'}`}
              style={{ height: `${(Math.abs(t) / maxAbs) * 85}%`, minHeight: 3 }}
            />
            <span className="text-[10px] font-mono text-zinc-600">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
