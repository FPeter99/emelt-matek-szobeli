import React from 'react';
import { Category, Difficulty, FilterState } from '../types/math';
import { Search, Bookmark, CheckCircle2, Layers, Gauge } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalCount: number;
  filteredCount: number;
}

const CATEGORIES: (Category | 'Összes')[] = [
  'Összes',
  'Halmazok és logika',
  'Kombinatorika és valószínűség',
  'Számelmélet és algebra',
  'Függvények és analízis',
  'Geometria és trigonometria',
  'Koordinátageometria és vektorok',
  'Gráfelmélet és statisztika',
];

const DIFFICULTIES: Difficulty[] = [
  '1: alap alatti',
  '2: bemelegítő',
  '3: trückös',
];

const difficultyButtonClass = (diff: Difficulty, isActive: boolean) => {
  if (!isActive) {
    return 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700';
  }
  switch (diff) {
    case '1: alap alatti':
      return 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-sm';
    case '2: bemelegítő':
      return 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-sm';
    case '3: trückös':
      return 'bg-rose-500/15 border-rose-500/40 text-rose-300 shadow-sm';
  }
};

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  setFilters,
  totalCount,
  filteredCount,
}) => {
  const selectDifficulty = (diff: Difficulty) => {
    setFilters((prev) => ({
      ...prev,
      // Same button again clears the filter (shows all three)
      difficulty: prev.difficulty === diff ? null : diff,
    }));
  };

  return (
    <div className="bg-zinc-950/60 border-b border-zinc-800/80 sticky top-16 z-30 backdrop-blur-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

        {/* Categories — wrap to new lines, no horizontal scroll */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-zinc-500 font-mono text-xs flex items-center gap-1 shrink-0 mr-1">
            <Layers className="w-3.5 h-3.5" /> Témakör:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = filters.category === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilters((prev) => ({ ...prev, category: cat }))}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-sm'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search + Difficulty + Toggles */}
        <div className="flex flex-col gap-3 pt-1">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">

            {/* Search Box */}
            <div className="relative flex-1 max-w-lg">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="search-input"
                type="text"
                placeholder="Keress tétel nevére, kifejezésre vagy teóriára..."
                value={filters.searchQuery}
                onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300"
                >
                  Törlés
                </button>
              )}
            </div>

            {/* Difficulty — between search and bookmark/completed */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-zinc-500 font-mono text-xs flex items-center gap-1 shrink-0">
                <Gauge className="w-3.5 h-3.5" /> Nehézség:
              </span>
              {DIFFICULTIES.map((diff) => {
                const isActive = filters.difficulty === diff;
                return (
                  <button
                    key={diff}
                    onClick={() => selectDifficulty(diff)}
                    className={`px-3 py-1.5 rounded-xl font-medium transition-all whitespace-nowrap border ${
                      difficultyButtonClass(diff, isActive)
                    }`}
                  >
                    {diff}
                  </button>
                );
              })}
            </div>

            {/* Toggle Buttons */}
            <div className="flex flex-wrap items-center gap-2 text-xs lg:ml-auto">
              <button
                onClick={() => setFilters((prev) => ({ ...prev, onlyFavorites: !prev.onlyFavorites }))}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border transition-all ${
                  filters.onlyFavorites
                    ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                <span>Könyvjelzők</span>
              </button>

              <button
                onClick={() => setFilters((prev) => ({ ...prev, onlyCompleted: !prev.onlyCompleted }))}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border transition-all ${
                  filters.onlyCompleted
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Megtanult tételek</span>
              </button>

              <span className="text-zinc-500 text-xs font-mono ml-1">
                {filteredCount} / {totalCount} tétel
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
