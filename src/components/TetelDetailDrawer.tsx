import React, { useState, useEffect } from 'react';
import { Tetel } from '../types/math';
import { MathRenderer } from './MathRenderer';
import { MdMath } from './MdMath';
import { FunctionPlotter } from './Visualizers/FunctionPlotter';
import { GraphVisualizer } from './Visualizers/GraphVisualizer';
import { VectorVisualizer } from './Visualizers/VectorVisualizer';
import { PrimeVisualizer } from './Visualizers/PrimeVisualizer';
import { BinomialVisualizer } from './Visualizers/BinomialVisualizer';
import { ConicVisualizer } from './Visualizers/ConicVisualizer';
import { QuadraticVisualizer } from './Visualizers/QuadraticVisualizer';
import { SetVisualizer } from './Visualizers/SetVisualizer';
import { LogicVisualizer } from './Visualizers/LogicVisualizer';
import { StatsVisualizer } from './Visualizers/StatsVisualizer';
import { SequenceVisualizer } from './Visualizers/SequenceVisualizer';
import { TriangleVisualizer } from './Visualizers/TriangleVisualizer';
import {
  X,
  Bookmark,
  CheckCircle2,
  Copy,
  Check,
  BookOpen,
  History,
  Sparkles,
  HelpCircle,
  FileCode,
  Printer,
  AlertTriangle,
  BookMarked,
  ListOrdered,
  Brain,
  Mic2,
  ArrowLeft,
  ScrollText
} from 'lucide-react';
interface TetelDetailDrawerProps {
  tetel: Tetel | null;
  onClose: () => void;
  onToggleFavorite: (id: string) => void;
  onToggleCompleted: (id: string) => void;
  initialSpecialPage?: 'none' | 'memorize' | 'oral' | 'essay';
}
export const TetelDetailDrawer: React.FC<TetelDetailDrawerProps> = ({
  tetel,
  onClose,
  onToggleFavorite,
  onToggleCompleted,
  initialSpecialPage = 'none',
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'theory' | 'proofs' | 'practice' | 'applications'>('all');
  const [specialPage, setSpecialPage] = useState<'none' | 'memorize' | 'oral' | 'essay'>(initialSpecialPage);
  useEffect(() => {
    setSpecialPage(initialSpecialPage);
    setActiveTab('all');
  }, [tetel?.id, initialSpecialPage]);
  if (!tetel) return null;
  const copyLatex = () => {
    const textToCopy = `\\begin{tétel}[${tetel.title}]\n${tetel.statementLatex}\n\\end{tétel}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const renderVisualizer = () => {
    switch (tetel.visualizerType) {
      case 'function':
        return <FunctionPlotter />;
      case 'graph':
        return <GraphVisualizer />;
      case 'vector':
        return <VectorVisualizer />;
      case 'prime':
        return <PrimeVisualizer />;
      case 'binomial':
        return <BinomialVisualizer />;
      case 'conic':
        return <ConicVisualizer />;
      case 'quadratic':
        return <QuadraticVisualizer />;
      case 'sets':
        return <SetVisualizer />;
      case 'logic':
        return <LogicVisualizer />;
      case 'stats':
        return <StatsVisualizer />;
      case 'sequence':
        return <SequenceVisualizer />;
      case 'triangle':
        return <TriangleVisualizer />;
      case 'circle':
        // A típusunió tartalmazza a 'circle'-t; a kör–egyenes / parabola módok a ConicVisualizerben vannak.
        return <ConicVisualizer />;
      default:
        return null;
    }
  };
  const memorizeFallback = () => {
    const defs = (tetel.requiredDefinitions ?? [])
      .map((d) => `### ${d.term}\n\n$$${d.definitionLatex}$$\n\n${d.explanation}`)
      .join('\n\n');
    const ths = (tetel.theorems ?? [])
      .map((t) => `### Tétel: ${t.title}\n\n${t.statementLatex ? `$$${t.statementLatex}$$` : ''}\n\n*Bizonyítás:* ${t.proofTitle}`)
      .join('\n\n');
    return `## Bemagolandó — ${tetel.title}\n\n### Fő állítás\n\n$$${tetel.statementLatex}$$\n\n${tetel.conditionsLatex ? `**Feltételek:** $$${tetel.conditionsLatex}$$\n\n` : ''}## Definíciók\n\n${defs || '_Nincs külön listázott definíció._'}\n\n## Tételek\n\n${ths || '_Nincs külön listázott tétel._'}\n\n## Képlettár\n\n${tetel.formulaSheetReference || tetel.formulaSheetReferences?.join('; ') || 'Lásd a hivatalos képlettárat.'}`;
  };
  const oralFallback = () => {
    const steps = (tetel.oralPresentationOutline ?? [])
      .map((item, i) => `### ${i + 1}. szakasz\n\n${item}`)
      .join('\n\n');
    return `## Szóbeli felelet vázlata — ${tetel.title}\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nA felelet arányos felépítése (Studium Generale / hivatalos szempontok szerint): bevezetés → definíció(k) → tétel + bizonyítás → alkalmazások → feladat.\n\n${steps || '_Még nincs részletes vázlat._'}\n\n### Pontozási emlékeztető\n- Szerkezet: 10 pont\n- Definíció: 2 pont\n- Tétel + bizonyítás: 6 pont\n- Feladat: 8 pont\n- Alkalmazások: 4 pont\n- Nyelv / kommunikáció: 5 pont`;
  };
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-zinc-950/80 backdrop-blur-sm flex justify-end">
      {/* Drawer Overlay backdrop */}
      <div className="absolute inset-0" onClick={onClose} />
      {/* Drawer Container */}
      <div className="relative w-full max-w-5xl bg-zinc-950 border-l border-zinc-800 h-full overflow-y-auto shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
              #{tetel.number < 10 ? `0${tetel.number}` : tetel.number}. tétel
            </span>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              {tetel.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompleted(tetel.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
                tetel.isCompleted
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{tetel.isCompleted ? 'Megtanulva' : 'Megtanulás'}</span>
            </button>
            <button
              onClick={() => onToggleFavorite(tetel.id)}
              className={`p-2 rounded-xl border transition-all ${
                tetel.isFavorite
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
              title="Könyvjelző"
            >
              <Bookmark className="w-4 h-4" fill={tetel.isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={copyLatex}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
              title="LaTeX kimásolása"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              title="Bezárás"
              aria-label="Bezárás"
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Dedicated study pages */}
        {specialPage !== 'none' && (
          <div className="border-b border-zinc-800 bg-zinc-950 px-4 sm:px-8 py-3 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSpecialPage('none')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono"
            >
              <ArrowLeft className="w-4 h-4" /> Vissza a teljes anyaghoz
            </button>
            <span className="text-xs font-mono text-zinc-500">
              {specialPage === 'memorize' ? 'Bemagolandó tananyag' : specialPage === 'oral' ? 'Szóbeli felelet vázlata' : 'Egybefüggő kidolgozott tétel'}
            </span>
          </div>
        )}
        {/* Navigation Tabs */}
        {specialPage === 'none' && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 sm:px-8 py-2 flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            Teljes tananyag
          </button>
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap ${
              activeTab === 'theory'
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            Elmélet & fogalmak
          </button>
          <button
            onClick={() => setActiveTab('proofs')}
            className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap ${
              activeTab === 'proofs'
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            Tételek & bizonyítások
          </button>
          <button onClick={() => setActiveTab('practice')} className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap ${activeTab === 'practice' ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'}`}>
            Kidolgozott feladatok
          </button>
          <button onClick={() => setActiveTab('applications')} className={`px-3 py-1.5 rounded-lg border transition-colors whitespace-nowrap ${activeTab === 'applications' ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'}`}>
            Alkalmazások
          </button>
        </div>
        )}
        {/* Main Content Body */}
        <div className="p-4 sm:p-8 space-y-8 flex-1">
          {specialPage === 'memorize' && (
            <div className="bg-zinc-900/50 border border-amber-500/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-4">
                <Brain className="w-4 h-4" />
                <span>Bemagolandó tananyag</span>
              </div>
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-amber-200 prose-strong:text-zinc-100">
                <MdMath>{tetel.memorizationMaterial || memorizeFallback()}</MdMath>
              </div>
            </div>
          )}
          {specialPage === 'oral' && (
            <div className="bg-zinc-900/50 border border-violet-500/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400 uppercase tracking-wider mb-4">
                <Mic2 className="w-4 h-4" />
                <span>Szóbeli felelet vázlata (15–20 perc · 35 pont)</span>
              </div>
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-violet-200 prose-strong:text-zinc-100">
                <MdMath>{tetel.oralExamPlan || oralFallback()}</MdMath>
              </div>
            </div>
          )}
          {specialPage === 'essay' && (
            <div className="bg-zinc-900/50 border border-cyan-500/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                <ScrollText className="w-4 h-4" />
                <span>Egybefüggő kidolgozott tétel (~10 perc)</span>
              </div>
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-headings:text-cyan-200 prose-strong:text-zinc-100 prose-p:leading-relaxed">
                <MdMath>{tetel.continuousEssay || '## Még nincs kidolgozott szöveg\n\nEz a tétel egybefüggő felelete hamarosan elérhető.'}</MdMath>
              </div>
            </div>
          )}
          {specialPage === 'none' && (
          <>
          {/* Title & Tag Section */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
              {tetel.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              {tetel.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-lg">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setSpecialPage('memorize')}
              className="flex items-center gap-3 p-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/15 text-left transition-all"
            >
              <Brain className="w-6 h-6 text-amber-300 shrink-0" />
              <span>
                <span className="block text-sm font-bold text-amber-200">Bemagolandó tananyag</span>
                <span className="block text-xs text-zinc-400 mt-0.5">Csak definíciók, tételek, képletek — külön oldalon</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSpecialPage('oral')}
              className="flex items-center gap-3 p-4 rounded-2xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/15 text-left transition-all"
            >
              <Mic2 className="w-6 h-6 text-violet-300 shrink-0" />
              <span>
                <span className="block text-sm font-bold text-violet-200">Szóbeli felelet vázlata</span>
                <span className="block text-xs text-zinc-400 mt-0.5">Időzített, bekezdésekre bontott 35/35-ös feleletterv</span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSpecialPage('essay')}
              className="flex items-center gap-3 p-4 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/15 text-left transition-all"
            >
              <ScrollText className="w-6 h-6 text-cyan-300 shrink-0" />
              <span>
                <span className="block text-sm font-bold text-cyan-200">Egybefüggő kidolgozott tétel</span>
                <span className="block text-xs text-zinc-400 mt-0.5">~10 perces, előadható szöveg képletekkel</span>
              </span>
            </button>
          </div>
          <div className="bg-zinc-900/90 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              <span>A Tétel Kimondása (Tételmondat)</span>
            </div>
            <div className="my-4 text-center sm:text-left overflow-x-auto text-lg text-emerald-300 font-mono py-2">
              <MathRenderer math={tetel.statementLatex} block />
            </div>
            {tetel.conditionsLatex && (
              <div className="mt-4 pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500 font-bold mr-2">A tétel feltételei:</span>
                <MathRenderer math={tetel.conditionsLatex} />
              </div>
            )}
          </div>
          {/* Oral Presentation Outline */}
          {(activeTab === 'all' || activeTab === 'theory') && tetel.introduction && (
            <div className="bg-zinc-900/40 border border-purple-500/30 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-3"><History className="w-5 h-5 text-purple-400" />Történeti bevezetés</h2>
              <div className="prose prose-invert prose-sm max-w-none text-zinc-300 leading-relaxed prose-p:my-3 prose-strong:text-zinc-100">
                <MdMath>{tetel.introduction}</MdMath>
              </div>
            </div>
          )}
          {(activeTab === 'all' || activeTab === 'theory') && tetel.detailedTheory && (
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-5"><BookMarked className="w-5 h-5 text-emerald-400" />Részletes elmélet és magyarázat</h2>
              <div className="prose prose-invert prose-sm sm:prose-base max-w-none prose-p:my-3 prose-li:my-1 prose-headings:mt-6 prose-headings:mb-3 prose-headings:text-emerald-300 prose-strong:text-zinc-100 prose-li:marker:text-emerald-500 prose-a:text-cyan-300">
                <MdMath className="prose prose-invert prose-sm sm:prose-base max-w-none">{tetel.detailedTheory}</MdMath>
              </div>
            </div>
          )}
          {(activeTab === 'all' || activeTab === 'theory') && tetel.oralPresentationOutline && (
            <div className="bg-zinc-900/50 border border-purple-500/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                <ListOrdered className="w-4 h-4" />
                <span>Javasolt szóbeli feleletvázlat</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-sans">
                {tetel.oralPresentationOutline.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <MdMath inline className="inline flex-1">{item}</MdMath>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Required Definitions */}
          {(activeTab === 'all' || activeTab === 'theory') && tetel.requiredDefinitions && tetel.requiredDefinitions.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <BookMarked className="w-5 h-5 text-emerald-400" />
                <span>Szükséges Definíciók és Előismeretek</span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {tetel.requiredDefinitions.map((def, idx) => (
                  <div key={idx} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 space-y-2">
                    <h3 className="font-semibold text-emerald-400 text-sm font-mono">
                      {def.term}
                    </h3>
                    <div className="bg-zinc-950 border border-zinc-800 p-2.5 rounded-lg text-emerald-300 font-mono text-xs overflow-x-auto text-center">
                      <MathRenderer math={def.definitionLatex} block />
                    </div>
                    <MdMath className="text-xs text-zinc-400 leading-relaxed prose prose-invert prose-sm max-w-none prose-p:my-0">{def.explanation}</MdMath>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Interactive Visualizer if available */}
          {activeTab === 'all' && tetel.visualizerType && (
            <div className="bg-zinc-900/60 border border-cyan-500/30 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Interaktív Szemléltetés</span>
              </div>
              {renderVisualizer()}
            </div>
          )}
          {/* Proof Steps */}
          {(activeTab === 'all' || activeTab === 'proofs') && tetel.theorems && tetel.theorems.length > 0 && (
            <div className="space-y-7">
              {tetel.theorems.map((theorem) => (
                <section key={theorem.theoremNumber} className="bg-zinc-900/50 border border-emerald-500/20 rounded-2xl p-5 sm:p-7 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0">{theorem.theoremNumber}</span>
                    <div>
                      <h2 className="text-lg font-bold text-white">{theorem.title}</h2>
                      {theorem.statementLatex && <div className="mt-2"><MathRenderer math={theorem.statementLatex} block /></div>}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-emerald-300">{theorem.proofTitle}</h3>
                  <div className="space-y-3">
                    {theorem.proofSteps.map((step) => (
                      <div key={step.stepNumber} className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-2">
                        <h4 className="font-semibold text-zinc-100 text-sm">{step.stepNumber}. {step.title}</h4>
                        <div className="overflow-x-auto"><MathRenderer math={step.latexContent} block /></div>
                        <div className="prose prose-invert prose-sm max-w-none text-zinc-400 leading-relaxed prose-p:my-0 prose-strong:text-zinc-200">
                          <MdMath>{step.explanation}</MdMath>
                        </div>
                      </div>
                    ))}
                  </div>
                  {theorem.notes && <MdMath className="text-xs text-zinc-500 italic prose prose-invert prose-sm max-w-none prose-p:my-0">{theorem.notes}</MdMath>}
                </section>
              ))}
            </div>
          )}
          {(activeTab === 'all' || activeTab === 'proofs') && (!tetel.theorems || tetel.theorems.length === 0) && (
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-emerald-400" />
                  <span>Szigorú Matematikai Bizonyítás</span>
                </h2>
                <span className="text-xs font-mono text-zinc-500">
                  {(tetel.proofSteps ?? []).length} lépésben
                </span>
              </div>
              <div className="space-y-4">
                {(tetel.proofSteps ?? []).map((step) => (
                  <div
                    key={step.stepNumber}
                    className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 space-y-3 relative hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {step.stepNumber}
                      </span>
                      <h3 className="font-semibold text-white text-sm">
                        {step.title}
                      </h3>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800/80 rounded-lg p-3 text-emerald-300 font-mono text-sm overflow-x-auto text-center">
                      <MathRenderer math={step.latexContent} block />
                    </div>
                    <div className="prose prose-invert prose-sm max-w-none text-zinc-400 leading-relaxed prose-p:my-0">
                      <MdMath>{step.explanation}</MdMath>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Examiner Traps */}
          {activeTab === 'all' && tetel.examinerTraps && tetel.examinerTraps.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-bold text-amber-400">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <span>Vizsgáztatói Tisztázó Kérdések & Típushibák</span>
              </div>
              <div className="space-y-3">
                {tetel.examinerTraps.map((trap, idx) => (
                  <div key={idx} className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-amber-100/90 flex-1 min-w-0">
                        <span className="font-mono text-amber-400 font-bold mr-1">Kérdés #{idx + 1}:</span>
                        <MdMath inline className="inline">{trap.question}</MdMath>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        trap.dangerLevel === 'Magas'
                          ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                          : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                      }`}>
                        Veszély: {trap.dangerLevel}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-300 bg-zinc-950/80 p-3 rounded-lg border border-zinc-800">
                      <strong className="text-zinc-200">Helyes válasz / Helyreigazítás:</strong>{' '}
                      <MdMath inline className="inline">{trap.answer}</MdMath>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Application Examples */}
          {(activeTab === 'all' || activeTab === 'practice') && tetel.practiceProblems && tetel.practiceProblems.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2"><HelpCircle className="w-5 h-5 text-cyan-400" />Kidolgozott érettségi feladatok</h2>
              {tetel.practiceProblems.map((problem) => (
                <div key={problem.problemNumber} className="bg-zinc-900/50 border border-cyan-500/20 rounded-2xl p-5 space-y-3">
                  <h3 className="font-semibold text-cyan-300">{problem.problemNumber}. feladat</h3>
                  <div className="text-sm text-zinc-200 leading-relaxed"><MdMath inline className="inline">{problem.question}</MdMath></div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 overflow-x-auto"><MathRenderer math={problem.solutionLatex} block /></div>
                  {problem.explanation && (
                    <div className="prose prose-invert prose-sm max-w-none text-zinc-400 prose-p:my-0">
                      <MdMath>{problem.explanation}</MdMath>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {(activeTab === 'all' || activeTab === 'practice') && (!tetel.practiceProblems || tetel.practiceProblems.length === 0) && tetel.applications && tetel.applications.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2"><HelpCircle className="w-5 h-5 text-cyan-400" />Gyakorló feladatok</h2>
              {tetel.applications.map((app, idx) => (
                <div key={idx} className="bg-zinc-900/50 border border-cyan-500/20 rounded-2xl p-5 space-y-3">
                  <h3 className="font-semibold text-cyan-300">{app.title}</h3>
                  <div className="text-sm text-zinc-200"><MdMath inline className="inline">{app.problem}</MdMath></div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 overflow-x-auto"><MathRenderer math={app.solutionLatex} block /></div>
                </div>
              ))}
            </div>
          )}
          {(activeTab === 'all' || activeTab === 'applications') && tetel.applicationsInside && (
            <div className="bg-zinc-900/40 border border-cyan-500/20 rounded-2xl p-6 space-y-3">
              <h2 className="text-lg font-bold text-white">Alkalmazások a matematikán belül</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300">
                {tetel.applicationsInside.map((item, idx) => (
                  <li key={idx}>
                    <MdMath inline>{item}</MdMath>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {(activeTab === 'all' || activeTab === 'applications') && tetel.applicationsOutside && (
            <div className="bg-zinc-900/40 border border-purple-500/20 rounded-2xl p-6 space-y-3">
              <h2 className="text-lg font-bold text-white">Alkalmazások a matematikán kívül</h2>
              <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300">
                {tetel.applicationsOutside.map((item, idx) => (
                  <li key={idx}>
                    <MdMath inline>{item}</MdMath>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {(activeTab === 'all' || activeTab === 'applications') && tetel.applications && tetel.applications.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-cyan-400" />
                <span>Érettségi Típustételek & Gyakorlati Alkalmazások</span>
              </h2>
              <div className="space-y-4">
                {tetel.applications.map((app, idx) => (
                  <div key={idx} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 space-y-3">
                    <h3 className="font-semibold text-white text-sm">
                      {app.title}
                    </h3>
                    <div className="text-xs sm:text-sm text-zinc-300 italic bg-zinc-950/60 p-3 rounded-lg border border-zinc-800">
                      <strong className="not-italic text-zinc-200">Feladat:</strong>{' '}
                      <MdMath inline className="inline">{app.problem}</MdMath>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 p-3 rounded-lg text-emerald-300 font-mono text-xs overflow-x-auto">
                      <MathRenderer math={app.solutionLatex} block />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Historical Context */}
          {activeTab === 'all' && tetel.historicalContext && (
            <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 flex items-start gap-3">
              <History className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                  Matematikatörténeti Háttér
                </h3>
                <MdMath className="text-xs text-zinc-400 leading-relaxed prose prose-invert prose-sm max-w-none prose-p:my-0">{tetel.historicalContext}</MdMath>
              </div>
            </div>
          )}
          </>
          )}
        </div>
        {/* Footer Actions */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex justify-between items-center text-xs font-mono text-zinc-500">
          <span>🐿️Emelt Matek Szóbeli 2026</span>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <Printer className="w-4 h-4" /> Nyomtatás / PDF mentés
          </button>
        </div>
      </div>
    </div>
  );
};