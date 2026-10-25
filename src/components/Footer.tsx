import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-omp-border py-12 text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-base">
                🐿️
              </div>
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight">Emelt Matek Szóbeli 2026</span>
              <p className="text-zinc-500 text-[11px] mt-0.5">A 25 hivatalos szóbeli tétel kidolgozva</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://oktatas.hu" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              Oktatási Hivatal
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col gap-3 text-[11px] text-zinc-600">
          <p>
            Készítette:{' '}
            <a
              href="https://github.com/FPeter99"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              Forgács Péter | FPeter99
            </a>
          </p>
          <p>
            Forrás — kidolgozott feleletek:{' '}
            <a
              href="https://www.matekmindenkinek.hu/kurzus/matek-emelt-szobeli-erettsegi"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-emerald-400 transition-colors break-all"
            >
              matekmindenkinek.hu/kurzus/matek-emelt-szobeli-erettsegi
            </a>
          </p>
          <p>
            Egyéb projektjeim:{' '}
            <a
              href="https://fpeter99.github.io/3D-Analytic-Geometry-Calculator/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              3D geometriai számológép
            </a>
          </p>
          <p className="text-zinc-700">© 2026 Emelt Matek Szóbeli.</p>
        </div>
      </div>
    </footer>
  );
};
