import React from 'react';
import { Sparkles, BookOpen, Calculator, Compass, ShieldCheck, Award, ExternalLink, Bookmark, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenGuide?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGuide }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 border-b border-omp-border bg-gradient-to-b from-emerald-950/20 via-omp-dark to-omp-dark">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-purple-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Status Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>2026-os Hivatalos Emelt Szintű Matematika Szóbeli Tételsor (25 tétel)</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
          Az emelt matek érettségi <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
            teljes 25 tétele 15–20 perces levezetésekkel.
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-lg text-zinc-400 font-sans mb-8 leading-relaxed">
          Elméleti alapfogalmak, a bizonyítandó tételek lépésről lépésre felépített levezetése, kitűzött mintafeladatok megoldása és matematikatörténeti kontextus.
        </p>

        {/* Action Buttons: Formula Sheet & Exam Guide */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-xl mx-auto mb-8 font-mono text-xs sm:text-sm">
          <a
            href="https://dload-oktatas.educatio.hu/erettsegi/nyilvanos_anyagok_2026tavasz/matem_keplettar_2026maj.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all shadow-lg shadow-emerald-500/20"
          >
            <BookOpen className="w-4 h-4 text-black" />
            <span>Hivatalos 2026 Képlettár (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          {onOpenGuide && (
            <button
              onClick={onOpenGuide}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700/80 transition-all shadow-lg"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>35 Pontos Szóbeli Értékelési Útmutató</span>
            </button>
          )}
        </div>

        {/* Quick usage strip */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-3 rounded-2xl bg-zinc-950/90 border border-zinc-800 shadow-2xl font-mono text-[11px] sm:text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              Kattints a tételre a kidolgozáshoz
            </span>
            <span className="flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-amber-400" />
              Könyvjelzővel mentheted
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Pipa: megtanulva
            </span>
          </div>
        </div>

        {/* Highlights Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
            <BookOpen className="w-5 h-5 text-emerald-400 mb-2" />
            <h3 className="font-semibold text-white text-sm">25 Kidolgozott Tétel</h3>
            <p className="text-xs text-zinc-400 mt-1">A teljes hivatalos tételsor.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
            <Calculator className="w-5 h-5 text-cyan-400 mb-2" />
            <h3 className="font-semibold text-white text-sm">Több Bizonyítás / Tétel</h3>
            <p className="text-xs text-zinc-400 mt-1">Tételenként akár 3-6 szigorú tételbizonyítás.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
            <Compass className="w-5 h-5 text-purple-400 mb-2" />
            <h3 className="font-semibold text-white text-sm">Kidolgozott Feladatok</h3>
            <p className="text-xs text-zinc-400 mt-1">Érettségi szintű mintapéldák részletes levezetéssel.</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-amber-400 mb-2" />
            <h3 className="font-semibold text-white text-sm">Vizsgacsapdák & Tippek</h3>
            <p className="text-xs text-zinc-400 mt-1">Tipikus bukási pontok és elkerülésük.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
