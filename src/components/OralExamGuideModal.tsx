import React from 'react';
import { X, Award, FileText, ExternalLink, Lightbulb, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';

interface OralExamGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OralExamGuideModal: React.FC<OralExamGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 bg-zinc-900/60 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                Útmutató a Szóbeli Érettségihez & Hivatalos 35 Pontos Értékelés
              </h2>
              <p className="text-xs text-zinc-400 font-mono">
                Corvinus Studium Generale (2026) és Oktatási Hivatal követelményrendszer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            title="Bezárás"
            aria-label="Bezárás"
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-8 font-sans text-sm text-zinc-300">
          
          {/* Prominent Képlettár Link Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-cyan-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                Hivatalos 2026-os Képlettár (PDF)
              </span>
              <p className="text-xs text-zinc-300">
                A szóbeli felkészülési ideje alatt (30 perc) használható az Oktatási Hivatal által kiadott hivatalos képlettár.
              </p>
            </div>
            <a
              href="https://dload-oktatas.educatio.hu/erettsegi/nyilvanos_anyagok_2026tavasz/matem_keplettar_2026maj.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs font-mono hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 shrink-0"
            >
              <span>Képlettár megnyitása</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Exam slip requirement */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Mit tartalmaz a kihúzott szóbeli tétellap?
            </h3>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-xs font-mono space-y-2 text-zinc-300">
              <p className="text-zinc-400 italic">"A tétel címében megjelölt témát logikusan, arányosan felépített, szabad előadásban kell kifejtenie. A feleletben feltétlenül szerepeljenek az alábbi részletek:"</p>
              <ul className="list-disc list-inside space-y-1 text-emerald-300">
                <li>Egy, a témához tartozó definíció pontos kimondása</li>
                <li>Egy, a témához tartozó tétel pontos kimondása és bizonyítása</li>
                <li>A kitűzött feladat megoldása</li>
                <li>A téma matematikán belüli vagy azon kívüli alkalmazása, illetve matematikatörténeti vonatkozása</li>
              </ul>
              <p className="text-zinc-500 pt-2 border-t border-zinc-800/80">
                A felkészülési idő legalább 30 perc, a felelet időtartama pedig 15–20 perc.
              </p>
            </div>
          </div>

          {/* 35 Points Table */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              A Hivatalos 35 Pontos Értékelési Szempontrendszer
            </h3>
            <div className="border border-zinc-800 rounded-2xl overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 text-zinc-300 font-mono border-b border-zinc-800">
                    <th className="p-3.5">Értékelési Szempont</th>
                    <th className="p-3.5 text-center w-24">Maximális Pont</th>
                    <th className="p-3.5 hidden sm:table-cell">Részletes leírás & Megjegyzések</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/70 text-zinc-300">
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 font-semibold text-white">
                      1. A felelet tartalmi összetétele, szerkezete
                      <span className="block text-[11px] text-zinc-400 font-normal mt-0.5">
                        Definíció megtalálása (1p), Tétel megtalálása (1p), Logikus szerkezet (4p), Matematikai helyesség (4p)
                      </span>
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-emerald-400 text-sm">10 pont</td>
                    <td className="p-3.5 text-zinc-400 hidden sm:table-cell">
                      A témakör átfogó, logikus felépítése (bevezetés, átkötések, gazdag elméleti tartalom).
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 font-semibold text-white">
                      2. Definíció helyes kimondása
                      <span className="block text-[11px] text-zinc-400 font-normal mt-0.5">
                        Ha többet is elmond, a legpontosabbat értékelik
                      </span>
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-emerald-400 text-sm">2 pont</td>
                    <td className="p-3.5 text-zinc-400 hidden sm:table-cell">
                      Pontos, szabatos matematikai definíció a megfelelő feltételekkel.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 font-semibold text-white">
                      3. Tétel helyes kimondása és bizonyítása
                      <span className="block text-[11px] text-zinc-400 font-normal mt-0.5">
                        Tétel kimondása (2 pont), Tétel helyes bizonyítása (4 pont)
                      </span>
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-emerald-400 text-sm">6 pont</td>
                    <td className="p-3.5 text-zinc-400 hidden sm:table-cell">
                      A tétel feltételeinek és állításának szabatos rögzítése, lépésről lépésre felépített levezetés.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 font-semibold text-white">
                      4. A kitűzött feladat helyes megoldása
                      <span className="block text-[11px] text-zinc-400 font-normal mt-0.5">
                        Ha csak segítséggel tudja elkezdeni, max. 5 pont adható
                      </span>
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-emerald-400 text-sm">8 pont</td>
                    <td className="p-3.5 text-zinc-400 hidden sm:table-cell">
                      A kihúzott feladat önálló, indokolt, pontos számításokkal történő bemutatása a táblánál.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 font-semibold text-white">
                      5. Alkalmazások ismertetése
                      <span className="block text-[11px] text-zinc-400 font-normal mt-0.5">
                        1 részletes kifejtés VAGY 3-4 lényeges alkalmazás rövid bemutatása
                      </span>
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-emerald-400 text-sm">4 pont</td>
                    <td className="p-3.5 text-zinc-400 hidden sm:table-cell">
                      Matematikán belüli, illetve gyakorlati/fizikai/társadalmi alkalmazások és történeti háttér.
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3.5 font-semibold text-white">
                      6. Matematikai nyelvhasználat és kommunikáció
                      <span className="block text-[11px] text-zinc-400 font-normal mt-0.5">
                        Nyelvhasználat (2p), Folyamatos előadásmód (2p), Kommunikáció (1p)
                      </span>
                    </td>
                    <td className="p-3.5 text-center font-mono font-bold text-emerald-400 text-sm">5 pont</td>
                    <td className="p-3.5 text-zinc-400 hidden sm:table-cell">
                      Magabiztos fellépés, szakszerű terminológia, szemkontaktus a bizottsággal.
                    </td>
                  </tr>
                  <tr className="bg-emerald-950/20 font-bold border-t border-emerald-500/30">
                    <td className="p-3.5 text-white">Összesen megszerezhető pontszám:</td>
                    <td className="p-3.5 text-center font-mono text-emerald-400 text-base">35 pont</td>
                    <td className="p-3.5 text-emerald-300 hidden sm:table-cell">A szóbeli érettségi maximális pontszáma</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Studium Generale Tips */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              Studium Generale (2026) Gyakorlati Tanácsok a Szóbelihez
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Készíts írott vázlatot!
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  A felkészülési időben írj fel strukturált vázlatot a lapra. Ezt a kezedben tarthatod és bármikor rápillanthatsz felelet közben!
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Ne a táblának beszélj!
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Amikor a táblára írsz, folyamatosan magyarázd, mit csinálsz. Fordulj a vizsgáztatók felé, tarts szemkontaktust!
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Mindig mondj több definíciót!
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Mivel a vizsgáztató a legjobban elmondott definíciót értékeli a 2 ponttal, érdemes a témakör 2-3 fontos definícióját is felvezetni.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Használd a képlettárat!
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  A felkészülés alatt lapozd fel a képlettár megfelelő oldalát (szögfüggvények, koordinátageometria, sorozatok), mert rengeteg támpontot ad.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono transition-colors"
          >
            Értem, bezárás
          </button>
        </div>

      </div>
    </div>
  );
};
