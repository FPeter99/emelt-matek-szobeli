import React, { useState } from 'react';

export const PrimeVisualizer: React.FC = () => {
  const [limit, setLimit] = useState<number>(30);

  // Eratosthenes sieve calculation
  const getSieve = (max: number) => {
    const isPrime = new Array(max + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let p = 2; p * p <= max; p++) {
      if (isPrime[p]) {
        for (let i = p * p; i <= max; i += p) {
          isPrime[i] = false;
        }
      }
    }
    return isPrime;
  };

  const sieve = getSieve(limit);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) primes.push(i);
  }

  return (
    <div className="bg-omp-card border border-omp-border rounded-xl p-5 my-6 text-white shadow-xl">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div>
          <h4 className="font-mono text-emerald-400 font-semibold text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Eratoszthenész Szitája & Prímszám Szimulátor
          </h4>
          <p className="text-xs text-omp-muted">Prímszámok keresése és eloszlása a természetes számok körében</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xs text-zinc-400 font-mono">Határ (N): {limit}</label>
          <input
            type="range"
            min="10"
            max="100"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="accent-emerald-500 cursor-pointer w-28"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-4 max-h-56 overflow-y-auto p-1 custom-scrollbar">
        {Array.from({ length: limit - 1 }, (_, i) => i + 2).map((num) => {
          const isPrimeNum = sieve[num];
          return (
            <div
              key={num}
              className={`flex items-center justify-center h-10 rounded-lg font-mono text-sm font-semibold transition-all duration-300 ${
                isPrimeNum
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-md shadow-emerald-950 scale-105'
                  : 'bg-zinc-900/60 text-zinc-600 border border-zinc-800 line-through opacity-50'
              }`}
            >
              {num}
            </div>
          );
        })}
      </div>

      <div className="bg-zinc-900/90 rounded-lg p-3 border border-zinc-800 text-xs font-mono flex justify-between items-center">
        <div>
          <span className="text-zinc-400">Prímszámok száma 2 és {limit} között: </span>
          <span className="text-emerald-400 font-bold text-sm ml-1">{primes.length} db</span>
        </div>
        <div className="text-zinc-500 hidden sm:block">
          π({limit}) ≈ {(limit / Math.log(limit)).toFixed(1)} (Prímtételes közelítés)
        </div>
      </div>
    </div>
  );
};
