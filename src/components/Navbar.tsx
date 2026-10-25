import React from 'react';
import { Search, Bookmark, CheckCircle2, Award } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
  onOpenGuide: () => void;
  onShowFavorites: () => void;
  onShowCompleted: () => void;
  favoritesCount: number;
  completedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchClick,
  onOpenGuide,
  onShowFavorites,
  onShowCompleted,
  favoritesCount,
  completedCount,
  totalCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-omp-dark/80 border-b border-omp-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center text-lg group-hover:bg-zinc-900 transition-colors">
                🐿️
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-white tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                Emelt Matek
                <span className="text-emerald-400 font-mono font-extrabold text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Szóbeli 2026
                </span>
              </span>
            </div>
          </a>
        </div>

        {/* Search Bar Trigger */}
        <div className="flex-1 max-w-md hidden md:block">
          <button
            onClick={onSearchClick}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 hover:border-emerald-500/40 text-zinc-400 text-sm transition-all shadow-inner group"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              <span>Keresés a 25 tétel, definíciók és levezetések között...</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono font-semibold text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>

        {/* Stats & Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono">
            <button
              onClick={onShowCompleted}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 px-2.5 py-1.5 rounded-l-xl hover:bg-emerald-500/10 transition-colors"
              title="Ugrás a megtanult tételekhez"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{completedCount}/{totalCount}</span>
            </button>
            <span className="text-zinc-700">|</span>
            <button
              onClick={onShowFavorites}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 px-2.5 py-1.5 rounded-r-xl hover:bg-amber-500/10 transition-colors"
              title="Ugrás a mentett tételekhez"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{favoritesCount}</span>
            </button>
          </div>

          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-mono transition-colors whitespace-nowrap"
            title="Szóbeli Értékelési Útmutató (35 pont)"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden lg:inline">35 Pontos Értékelés</span>
            <span className="lg:hidden">35p</span>
          </button>

          <button
            onClick={onSearchClick}
            className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400"
            aria-label="Keresés"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
