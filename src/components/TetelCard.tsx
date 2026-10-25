import React from 'react';
import { Tetel } from '../types/math';
import { MathRenderer } from './MathRenderer';
import { Bookmark, CheckCircle2, ChevronRight, Brain, Mic2, ScrollText } from 'lucide-react';

interface TetelCardProps {
  tetel: Tetel;
  onSelect: () => void;
  onOpenMemorize?: () => void;
  onOpenOralPlan?: () => void;
  onOpenEssay?: () => void;
  onToggleFavorite: (id: string) => void;
  onToggleCompleted: (id: string) => void;
}

export const TetelCard: React.FC<TetelCardProps> = ({
  tetel,
  onSelect,
  onOpenMemorize,
  onOpenOralPlan,
  onOpenEssay,
  onToggleFavorite,
  onToggleCompleted,
}) => {
  const getDifficultyBadge = (diff: Tetel['difficulty']) => {
    switch (diff) {
      case '1: alap alatti':
        return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400';
      case '2: bemelegítő':
        return 'bg-amber-500/10 border-amber-500/20 text-amber-400';
      case '3: trückös':
        return 'bg-rose-500/10 border-rose-500/20 text-rose-400';
      default:
        return 'bg-zinc-800 border-zinc-700 text-zinc-300';
    }
  };

  return (
    <div
      onClick={onSelect}
      className={`group relative bg-zinc-900/70 hover:bg-zinc-900 border rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-950/20 hover:-translate-y-0.5 ${
        tetel.isCompleted
          ? 'border-emerald-500/30 bg-emerald-950/10'
          : 'border-zinc-800/90 hover:border-emerald-500/40'
      }`}
    >
      {/* Top Card Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
              #{tetel.number < 10 ? `0${tetel.number}` : tetel.number}
            </span>
            <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${getDifficultyBadge(tetel.difficulty)}`}>
              {tetel.difficulty}
            </span>
          </div>

          {/* Favorites & Completed Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompleted(tetel.id);
              }}
              className={`p-1.5 rounded-lg border transition-all ${
                tetel.isCompleted
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                  : 'bg-zinc-950/60 border-zinc-800 text-zinc-500 hover:text-emerald-400 hover:border-zinc-700'
              }`}
              title={tetel.isCompleted ? 'Megtanulva megjelölve' : 'Megtanultnak jelölés'}
              aria-pressed={tetel.isCompleted}
            >
              <CheckCircle2 className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(tetel.id);
              }}
              className={`p-1.5 rounded-lg border transition-all ${
                tetel.isFavorite
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                  : 'bg-zinc-950/60 border-zinc-800 text-zinc-500 hover:text-amber-400 hover:border-zinc-700'
              }`}
              title={tetel.isFavorite ? 'Eltávolítás a könyvjelzőkből' : 'Könyvjelzőkhöz adás'}
              aria-pressed={tetel.isFavorite}
            >
              <Bookmark className="w-4 h-4" fill={tetel.isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-2">
          {tetel.title}
        </h2>

        {/* Category */}
        <p className="text-xs font-mono text-zinc-400 mb-3">
          {tetel.category}
        </p>

        {/* Summary */}
        <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
          {tetel.summary}
        </p>

        {/* LaTeX Highlight Box */}
        <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3 my-3 overflow-x-auto text-center font-mono text-xs text-emerald-300">
          <MathRenderer math={tetel.statementLatex} block />
        </div>
      </div>

      {/* Card Footer: study shortcuts + open */}
      <div className="pt-3 border-t border-zinc-800/60 mt-2 space-y-2">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
          {tetel.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="text-[10px] font-mono bg-zinc-800/60 text-zinc-400 px-2 py-0.5 rounded-md whitespace-nowrap">
              #{tag}
            </span>
          ))}
          {tetel.tags.length > 3 && (
            <span className="text-[10px] text-zinc-500">+{tetel.tags.length - 3}</span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              (onOpenEssay ?? onSelect)();
            }}
            className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 text-[11px] font-mono hover:bg-cyan-500/20"
          >
            <ScrollText className="w-3.5 h-3.5" /> Egybefüggő kidolgozás
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                (onOpenMemorize ?? onSelect)();
              }}
              className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-200 text-[11px] font-mono hover:bg-amber-500/20"
            >
              <Brain className="w-3.5 h-3.5" /> Bemagolandó
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                (onOpenOralPlan ?? onSelect)();
              }}
              className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-200 text-[11px] font-mono hover:bg-violet-500/20"
            >
              <Mic2 className="w-3.5 h-3.5" /> Feleletvázlat
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-1 text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
          <span>Kidolgozás</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
