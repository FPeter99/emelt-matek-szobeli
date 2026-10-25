import React, { useMemo, useState } from 'react';

function mean(xs: number[]) {
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}
function median(xs: number[]) {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
function mode(xs: number[]) {
  const freq = new Map<number, number>();
  xs.forEach((x) => freq.set(x, (freq.get(x) || 0) + 1));
  let best = xs[0];
  let bestC = 0;
  freq.forEach((c, v) => {
    if (c > bestC) {
      best = v;
      bestC = c;
    }
  });
  return { value: best, count: bestC };
}
function variance(xs: number[]) {
  const m = mean(xs);
  return xs.reduce((a, x) => a + (x - m) ** 2, 0) / xs.length;
}

/** Nevezetes közepek pozitív számokra: H ≤ G ≤ A ≤ Q */
function classicMeans(xs: number[]) {
  const n = xs.length;
  const A = mean(xs);
  const G = Math.exp(xs.reduce((s, x) => s + Math.log(x), 0) / n);
  const H = n / xs.reduce((s, x) => s + 1 / x, 0);
  const Q = Math.sqrt(xs.reduce((s, x) => s + x * x, 0) / n);
  return { H, G, A, Q };
}

const PRESETS: { name: string; data: number[] }[] = [
  { name: 'Szimmetrikus', data: [2, 3, 4, 5, 6, 7, 8] },
  { name: 'Jobbra ferde', data: [1, 2, 2, 3, 3, 3, 10] },
  { name: 'Balra ferde', data: [1, 8, 8, 9, 9, 9, 10] },
  { name: 'Két móduszos', data: [1, 1, 1, 5, 9, 9, 9] },
  { name: 'AM–GM példa', data: [1, 4, 9] },
];

export const StatsVisualizer: React.FC = () => {
  const [preset, setPreset] = useState(0);
  const data = PRESETS[preset].data;
  const stats = useMemo(() => {
    const m = mean(data);
    const med = median(data);
    const mo = mode(data);
    const v = variance(data);
    const means = classicMeans(data);
    return { m, med, mo, v, sd: Math.sqrt(v), means };
  }, [data]);
  const max = Math.max(...data);

  return (
    <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 my-2 text-white">
      <div className="mb-3">
        <h4 className="font-mono text-sm text-cyan-400 font-semibold uppercase tracking-wider">
          Középértékek szemléltetése
        </h4>
        <p className="text-xs text-zinc-400 mt-1">Hasonlítsd össze az átlagot, mediánt és móduszt különböző eloszlásokon.</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {PRESETS.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setPreset(i)}
            className={`text-xs px-3 py-1.5 rounded-lg border font-mono ${
              preset === i
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-36 mb-4 px-2">
        {data.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t bg-cyan-500/70"
              style={{ height: `${(v / max) * 100}%`, minHeight: 4 }}
            />
            <span className="text-[10px] font-mono text-zinc-500">{v}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">Átlag: <span className="text-emerald-300">{stats.m.toFixed(2)}</span></div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">Medián: <span className="text-emerald-300">{stats.med.toFixed(2)}</span></div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">Módusz: <span className="text-emerald-300">{stats.mo.value}</span></div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2">Szórás: <span className="text-emerald-300">{stats.sd.toFixed(2)}</span></div>
      </div>
      <div className="mt-3 rounded-lg border border-zinc-800 bg-zinc-900/80 p-3">
        <p className="mb-2 text-[11px] font-mono uppercase tracking-wider text-cyan-400/90">
          Nevezetes közepek (H ≤ G ≤ A ≤ Q)
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs font-mono sm:grid-cols-4">
          <div>
            Harmonikus H:{' '}
            <span className="text-amber-300">{stats.means.H.toFixed(3)}</span>
          </div>
          <div>
            Mértani G:{' '}
            <span className="text-amber-300">{stats.means.G.toFixed(3)}</span>
          </div>
          <div>
            Számtani A:{' '}
            <span className="text-amber-300">{stats.means.A.toFixed(3)}</span>
          </div>
          <div>
            Négyzetes Q:{' '}
            <span className="text-amber-300">{stats.means.Q.toFixed(3)}</span>
          </div>
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-zinc-500">
          Egyenlőség pontosan akkor, ha minden adat egyenlő. (A jelenlegi presetek pozitív
          számok, ezért a négy közép értelmezhető.)
        </p>
      </div>
    </div>
  );
};
