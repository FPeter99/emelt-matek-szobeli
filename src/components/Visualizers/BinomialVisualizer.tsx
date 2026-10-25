import React, { useState } from 'react';
import { MathRenderer } from '../MathRenderer';

export const BinomialVisualizer: React.FC = () => {
  const [rows, setRows] = useState<number>(6);

  const generatePascal = (n: number) => {
    const triangle: number[][] = [];
    for (let i = 0; i < n; i++) {
      triangle[i] = new Array(i + 1);
      triangle[i][0] = 1;
      triangle[i][i] = 1;
      for (let j = 1; j < i; j++) {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
    return triangle;
  };

  const pascal = generatePascal(rows);

  return (
    <div className="bg-omp-card border border-omp-border rounded-xl p-4 my-4 font-sans text-sm">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <span className="font-semibold text-emerald-400">Pascal-háromszög & Binomiális Együtthatók</span>
        <div className="flex items-center gap-2">
          <label className="text-xs text-gray-400">Sorok száma:</label>
          <input
            type="range"
            min="3"
            max="10"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="accent-emerald-500 cursor-pointer"
          />
          <span className="text-xs font-mono text-emerald-400 w-4">{rows}</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 my-6 overflow-x-auto py-2">
        {pascal.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 justify-center">
            {row.map((val, colIndex) => (
              <div
                key={colIndex}
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-emerald-500/30 flex flex-col items-center justify-center text-xs font-mono hover:border-emerald-400 hover:scale-110 transition-all cursor-pointer group relative"
                title={`(${rowIndex} felett ${colIndex}) = ${val}`}
              >
                <span className="text-emerald-300 font-bold">{val}</span>
                <div className="absolute -bottom-8 bg-zinc-950 border border-zinc-800 text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 text-zinc-300">
                  C({rowIndex}, {colIndex}) = {val}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="text-xs text-zinc-400 text-center italic flex flex-wrap items-center justify-center gap-1">
        <span>A 0-tól indexelt n-edik sor k-adik eleme</span>
        <MathRenderer math="\binom{n}{k}" />
        <span>(Pascal-azonosság:</span>
        <MathRenderer math="\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}" />
        <span>).</span>
      </p>
    </div>
  );
};
