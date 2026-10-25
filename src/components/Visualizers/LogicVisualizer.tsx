import React, { useMemo, useState } from 'react';

type FormulaId = 'and' | 'or' | 'implies' | 'iff' | 'xor' | 'nand' | 'demorgan_or' | 'demorgan_and';

const FORMULAS: { id: FormulaId; label: string; latex: string; fn: (p: boolean, q: boolean) => boolean }[] = [
  { id: 'and', label: 'Konjunkció', latex: 'p ∧ q', fn: (p, q) => p && q },
  { id: 'or', label: 'Diszjunkció', latex: 'p ∨ q', fn: (p, q) => p || q },
  { id: 'implies', label: 'Implikáció', latex: 'p ⇒ q', fn: (p, q) => !p || q },
  { id: 'iff', label: 'Ekvivalencia', latex: 'p ⇔ q', fn: (p, q) => p === q },
  { id: 'xor', label: 'XOR', latex: 'p ⊻ q', fn: (p, q) => p !== q },
  { id: 'nand', label: 'NAND', latex: '¬(p ∧ q)', fn: (p, q) => !(p && q) },
  { id: 'demorgan_or', label: 'De Morgan ¬∨', latex: '¬(p ∨ q) ≡ ¬p ∧ ¬q', fn: (p, q) => !(p || q) },
  { id: 'demorgan_and', label: 'De Morgan ¬∧', latex: '¬(p ∧ q) ≡ ¬p ∨ ¬q', fn: (p, q) => !(p && q) },
];

const ROWS: [boolean, boolean][] = [
  [true, true],
  [true, false],
  [false, true],
  [false, false],
];

export const LogicVisualizer: React.FC = () => {
  const [formula, setFormula] = useState<FormulaId>('implies');
  const current = FORMULAS.find((f) => f.id === formula)!;
  const rows = useMemo(
    () => ROWS.map(([p, q]) => ({ p, q, r: current.fn(p, q) })),
    [current]
  );

  return (
    <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-4 my-2 text-white">
      <div className="mb-4">
        <h4 className="font-mono text-sm text-cyan-400 font-semibold uppercase tracking-wider">
          Interaktív igazságtábla
        </h4>
        <p className="text-xs text-zinc-400 mt-1">
          Aktuális formula: <span className="text-emerald-300 font-mono">{current.latex}</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {FORMULAS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFormula(f.id)}
            className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-all ${
              formula === f.id
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm font-mono border-collapse">
          <thead>
            <tr className="text-zinc-400 text-left">
              <th className="border border-zinc-800 px-3 py-2">p</th>
              <th className="border border-zinc-800 px-3 py-2">q</th>
              <th className="border border-zinc-800 px-3 py-2 text-emerald-300">{current.latex}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={row.r ? 'bg-emerald-500/5' : 'bg-rose-500/5'}>
                <td className="border border-zinc-800 px-3 py-2">{row.p ? 'I' : 'H'}</td>
                <td className="border border-zinc-800 px-3 py-2">{row.q ? 'I' : 'H'}</td>
                <td className={`border border-zinc-800 px-3 py-2 font-bold ${row.r ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {row.r ? 'I' : 'H'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-zinc-500 mt-3 leading-relaxed">
        Emeld ki szóbelin: az implikáció csak akkor hamis, ha a feltétel igaz és a következmény hamis. A kontrapozíció:
        $p \Rightarrow q \equiv \neg q \Rightarrow \neg p$.
      </p>
    </div>
  );
};
