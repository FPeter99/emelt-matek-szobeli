export type Category =
  | 'Halmazok és logika'
  | 'Kombinatorika és valószínűség'
  | 'Számelmélet és algebra'
  | 'Függvények és analízis'
  | 'Geometria és trigonometria'
  | 'Koordinátageometria és vektorok'
  | 'Gráfelmélet és statisztika';

export type Difficulty = '1: alap alatti' | '2: bemelegítő' | '3: trückös';

export interface ProofStep {
  stepNumber: number;
  title: string;
  latexContent: string;
  explanation: string;
}

export interface TheoremProof {
  theoremNumber: number;
  title: string;
  statementLatex?: string;
  proofTitle: string;
  proofSteps: ProofStep[];
  notes?: string;
}

export interface PracticeProblem {
  problemNumber: number;
  question: string;
  solutionLatex: string;
  explanation?: string;
}

export interface ApplicationExample {
  title: string;
  problem: string;
  solutionLatex: string;
}

export interface RequiredDefinition {
  term: string;
  definitionLatex: string;
  explanation: string;
}

export interface ExaminerTrap {
  question: string;
  answer: string;
  dangerLevel: 'Magas' | 'Közepes';
}

export interface Tetel {
  id: string;
  number: number;
  title: string;
  category: Category;
  tags: string[];
  difficulty: Difficulty;
  summary: string;
  statementLatex: string;
  conditionsLatex?: string;

  // Corvinus Studium Generale 2026 mély struktúra
  introduction?: string;
  detailedTheory?: string;
  theorems?: TheoremProof[];
  applicationsInside?: string[];
  applicationsOutside?: string[];
  practiceProblems?: PracticeProblem[];

  // Szóbeli vizsgatippek & képlettár
  formulaSheetReference?: string;
  formulaSheetReferences?: string[];
  studiumGeneraleNotes?: string;
  examinerTraps?: ExaminerTrap[];
  oralPresentationOutline?: string[];
  /** Bemagolandó anyag: definíciók, tételek, képletek — külön oldalon. */
  memorizationMaterial?: string;
  /** Részletes, időzített szóbeli feleletterv bekezdésekben — külön oldalon. */
  oralExamPlan?: string;
  /** Egybefüggő, ~10 perces kidolgozott szóbeli felelet (markdown + LaTeX). */
  continuousEssay?: string;
  requiredDefinitions?: RequiredDefinition[];
  proofSteps?: ProofStep[];
  proofTitle?: string;
  applications?: ApplicationExample[];
  historicalContext?: string;
  scoringBreakdown?: { criterion: string; points: number; description: string }[];

  visualizerType?: 'function' | 'graph' | 'prime' | 'vector' | 'binomial' | 'conic' | 'quadratic' | 'sets' | 'logic' | 'sequence' | 'triangle' | 'circle' | 'stats' | 'none';
  isFavorite?: boolean;
  isCompleted?: boolean;
}

export interface FilterState {
  searchQuery: string;
  category: Category | 'Összes';
  /** Max selected difficulty (inclusive of easier levels). null = all three. */
  difficulty: Difficulty | null;
  onlyFavorites: boolean;
  onlyCompleted: boolean;
}
