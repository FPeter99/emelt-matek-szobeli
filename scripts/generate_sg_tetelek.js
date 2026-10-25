import fs from 'fs';
import path from 'path';

const sgTetelek = [
  {
    id: 'tétel-01',
    number: 1,
    title: 'Halmazok, halmazműveletek. Nevezetes ponthalmazok a síkban és a térben',
    category: 'Halmazok és logika',
    tags: ['Halmazelmélet', 'De Morgan', 'Ponthalmazok', 'Descartes-szorzat', 'Venn-diagram'],
    difficulty: 'Közepes',
    summary: 'A halmaz fogalma, részhalmaz, üres halmaz, halmazműveletek (unió, metszet, különbség, komplementer, szimmetrikus differencia). De Morgan-azonosságok, Descartes-szorzat, logikai szita. Nevezetes ponthalmazok síkban és térben.',
    statementLatex: '\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B} \\quad \\text{és} \\quad |A \\cup B| = |A| + |B| - |A \\cap B|',
    conditionsLatex: 'A, B \\subseteq U \\text{ tetszőleges véges részhalmazai az } U \\text{ alaphalmaznak.}',
    requiredDefinitions: [
      {
        term: 'Halmaz, részhalmaz és üres halmaz',
        definitionLatex: 'A \\subseteq B \\iff (\\forall x \\in A \\implies x \\in B), \\quad \\emptyset = \\{x \\in U \\mid x \\neq x\\}',
        explanation: 'A halmaz nem definiált alapfogalom. A részhalmaz olyan halmaz, melynek minden eleme eleme a tartalmazó halmaznak. Az üres halmaz elemek nélküli halmaz (minden halmaz részhalmaza).'
      },
      {
        term: 'Halmazműveletek (Unió, Metszet, Különbség, Komplementer)',
        definitionLatex: 'A \\cup B = \\{x \\mid x \\in A \\lor x \\in B\\}, \\quad A \\cap B = \\{x \\mid x \\in A \\land x \\in B\\}, \\quad A \\setminus B = \\{x \\mid x \\in A \\land x \\notin B\\}',
        explanation: 'Az unió a legalább az egyik halmazhoz, a metszet a mindkettőhöz, a különbség az elsőhöz de a másodikhoz nem tartozó elemek halmaza.'
      },
      {
        term: 'Descartes-szorzat és logikai szita',
        definitionLatex: 'A \\times B = \\{(x,y) \\mid x \\in A \\land y \\in B\\}, \\quad |A \\cup B \\cup C| = |A|+|B|+|C|-|A \\cap B|-|A \\cap C|-|B \\cap C|+|A \\cap B \\cap C|',
        explanation: 'A Descartes-szorzat a halmazok elemeiből képzett rendezett párpárok halmaza. A logikai szita formulája megadja az unió elemszámát metszetek segítségével.'
      }
    ],
    oralPresentationOutline: [
      'Bevezetés: Leonhard Euler (Venn-diagramok) és Georg Cantor (halmazelmélet megalapozója) munkássága.',
      'Alapfogalmak: halmaz, elem, alaphalmaz (U), üres halmaz (∅), részhalmaz (⊆), valódi részhalmaz (⊂), diszjunkt halmazok.',
      'Halmazműveletek és tulajdonságaik: kommutativitás, asszociativitás, disztributivitás. De Morgan-azonosságok kimondása.',
      'Nevezetes ponthalmazok síkban (középpárhuzamos, szakaszfelező merőleges, szögfelező, kör, parabola, ellipszis, hiperbola) és térben (gömb, henger).',
      'Bizonyítás kiválasztása és levezetése (pl. n elemű halmaz részhalmazainak száma 2^n vagy unió/metszet asszociativitása).',
      'Alkalmazások ismertetése (egyenletek értelmezési tartománya, komplementer események valószínűségszámításban, biológiai rendszertan).'
    ],
    proofTitle: 'A) Az n elemű halmaz részhalmazai száma 2^n / B) A metszetképzés asszociativitása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Kombinatorikus bizonyítás (elemekről való döntés)',
        latexContent: '\\text{Minden } x_i \\in A \\text{ elemről függetlenül döntünk: } x_i \\in R \\text{ vagy } x_i \\notin R',
        explanation: 'Egy részhalmaz alkotásakor a halmaz mind az n eleméről egymástól függetlenül 2 opció van: beletesszük a részhalmazba vagy nem. A szorzási szabály alapján 2·2···2 = 2^n részhalmaz hozható létre.'
      },
      {
        stepNumber: 2,
        title: 'Binomiális tételes bizonyítás (k elemű részhalmazok összege)',
        latexContent: '\\sum_{k=0}^{n} \\binom{n}{k} = \\binom{n}{0} + \\binom{n}{1} + \\dots + \\binom{n}{n} = (1 + 1)^n = 2^n',
        explanation: 'A binomiális tételből a=1, b=1 helyettesítéssel megkapjuk az összes k elemű részhalmazok számának összegét.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e az üres halmaznak részhalmaza?',
        answer: 'Igen, az üres halmaz egyetlen részhalmaza önmaga, az üres halmaz (∅ ⊆ ∅).',
        dangerLevel: 'Közepes'
      },
      {
        question: 'Mi a különbség a részhalmaz (⊆) és az elem jel (∈) között?',
        answer: 'Az ∈ elemet kapcsol halmazhoz (pl. 2 ∈ {2, 3}), míg a ⊆ halmazt kapcsol halmazhoz (pl. {2} ⊆ {2, 3}).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Tartalom és szerkezet', points: 10, description: 'Logikus felépítés, bevezetés, átkötések, gazdag elméleti áttekintés.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Halmazműveletek vagy részhalmaz szabatos matematikai definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: '2^n részhalmaz számának vagy asszociativitásnak hibátlan levezetése.' },
      { criterion: 'IV. Feladat megoldása', points: 8, description: 'Témakörhöz kapcsolódó érettségi mintafeladat hibátlan megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Euler, Venn, Cantor bemutatása; biológiai/logikai alkalmazások.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Pontos matematikai nyelvhasználat és magabiztos felelet.' }
    ],
    applications: [
      {
        title: 'Logikai szita alkalmazása feladatban',
        problem: 'Egy 41 fős táborban 25-en szoktak focizni, 13-an tudnak és 19-en nézik a TV-ben. Hányan vannak a tisztán egy tevékenységet űzők?',
        solutionLatex: '|A \\cup B \\cup C| = 25+13+19 - (4+1+7+3+1) + 1 = 41. \\quad \\text{Venn-diagramos bontás adja meg a részarányokat.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Halmazok és logika fejezet, 2. oldal',
      'De Morgan azonosságok és logikai szita képletei'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 1. Tétel (8-16. oldal): Mindig rajzolj Venn-diagramot a táblára a halmazműveletek magyarázata közben!',
    historicalContext: 'Leonhard Euler használt először köröket a halmazok szemléltetésére, majd John Venn angol matematikus alakította ki a Venn-diagramokat. Georg Cantor a 19. században alapozta meg a modern halmazelméletet.',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-02',
    number: 2,
    title: 'Racionális és irracionális számok. Műveletek a racionális és irracionális számok halmazán. Közönséges törtek és tizedes törtek. Halmazok számossága',
    category: 'Számelmélet és algebra',
    tags: ['Számhalmazok', 'Racionális', 'Irracionális', 'Számosság', 'Szakaszos tizedestört'],
    difficulty: 'Közepes',
    summary: 'A N, Z, Q, Q\', R számhalmazok felépítése és zártási tulajdonságaik. Racionális számok p/q alakja és véges/végtelen szakaszos tizedes tört alakja. Halmazok számossága (bijekció, véges, megszámlálhatóan végtelen [N, Z, Q] és nem megszámlálható [Q\', R, [0,1]]).',
    statementLatex: '\\sqrt{2} \\notin \\mathbb{Q} \\quad \\text{és} \\quad |\\mathbb{N}| = |\\mathbb{Z}| = |\\mathbb{Q}| < |\\mathbb{R}|',
    conditionsLatex: 'p \\in \\mathbb{Z}, \\quad q \\in \\mathbb{Z} \\setminus \\{0\\}, \\quad \\text{lnko}(p,q) = 1',
    requiredDefinitions: [
      {
        term: 'Racionális és Irracionális szám definíciója',
        definitionLatex: '\\mathbb{Q} = \\left\\{\\frac{p}{q} \\mid p \\in \\mathbb{Z}, q \\in \\mathbb{Z} \\setminus \\{0\\}\\right\\}, \\quad \\mathbb{Q}\' = \\mathbb{R} \\setminus \\mathbb{Q}',
        explanation: 'A racionális számok két egész szám hányadosaként felírható számok (végtelen szakaszos tizedes törtek). Az irracionális számok nem írhatók fel hányadosként (végtelen nem szakaszos tizedes törtek).'
      },
      {
        term: 'Halmazok számossága (Bijekció, Megszámlálhatóság)',
        definitionLatex: '|A| = |B| \\iff \\exists f: A \\to B \\text{ kölcsönösen egyértelmű (bijektív) hozzárendelés.}',
        explanation: 'Két halmaz azonos számosságú, ha elemeik között létesíthető bijekció. Megszámlálhatóan végtelen, ha N-nel bijektív.'
      }
    ],
    oralPresentationOutline: [
      'Számhalmazok hierarchikus bemutatása: N ⊂ Z ⊂ Q ⊂ R, zártásági tulajdonságok az alapműveletekre.',
      'Közönséges törtek és tizedes törtek kapcsolata: miért véges vagy szakaszosan ismétlődő a racionális számok tizedes tört alakja.',
      'Halmazok számosságának fogalma: véges vs végtelen, megszámlálhatóan végtelen (N, Z, Q) vs kontinuum számosságú (Q\', R).',
      'Szigorú bizonyítás: √2 irracionális voltának bizonyítása indirekt módon (vagy a racionális számok periodikus tizedes tört alakja).',
      'Alkalmazások: műszaki mérések, számegyenes folytonossága, egyenletek kikötései.'
    ],
    proofTitle: 'A √2 irracionális voltának indirekt bizonyítása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Indirekt feltételezés',
        latexContent: '\\text{Tegyük fel, hogy } \\sqrt{2} \\in \\mathbb{Q} \\implies \\sqrt{2} = \\frac{p}{q} \\quad (p, q \\in \\mathbb{Z}, q \\neq 0, \\text{lnko}(p,q)=1)',
        explanation: 'Feltételezzük, hogy √2 felírható tovább nem egyszerűsíthető tört alakban.'
      },
      {
        stepNumber: 2,
        title: 'Négyzetre emelés és rendezés',
        latexContent: '2 = \\frac{p^2}{q^2} \\implies p^2 = 2q^2 \\implies p^2 \\text{ páros } \\implies p \\text{ páros (} p = 2a \\text{)}',
        explanation: 'Mivel p^2 páros, ezért p maga is páros kell legyen.'
      },
      {
        stepNumber: 3,
        title: 'Behelyettesítés és q paritásának vizsgálata',
        latexContent: '(2a)^2 = 2q^2 \\implies 4a^2 = 2q^2 \\implies q^2 = 2a^2 \\implies q \\text{ is páros (} q = 2b \\text{)}',
        explanation: 'Kiderült, hogy q is páros, ami azt jelenti, hogy mind p, mind q osztható 2-vel.'
      },
      {
        stepNumber: 4,
        title: 'Ellentmondás levonása',
        latexContent: '\\text{lnko}(p,q) \\ge 2 \\quad \\text{Ellentmondás a relatív prím feltétellel!} \\implies \\sqrt{2} \\notin \\mathbb{Q}',
        explanation: 'Ez ellentmond annak, hogy p/q tovább nem egyszerűsíthető tört volt, így √2 valóban irracionális.'
      }
    ],
    examinerTraps: [
      {
        question: 'Végtelen-e a racionális számok száma a [0, 1] intervallumon?',
        answer: 'Igen, sőt sűrűn helyezkednek el (bármely két racionális szám között van újabb racionális és irracionális szám is), de megszámlálhatóan végtelenek!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Tartalom és szerkezet', points: 10, description: 'Racionális/irracionális felépítés, számosságok szabatos bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Racionális szám és megszámlálható számosság pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: '√2 irracionalitásának hibátlan indirekt bizonyítása.' },
      { criterion: 'IV. Feladat megoldása', points: 8, description: 'Gyökös/logaritmusos egyenlet kikötésekkel való megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Mérési eredmények korlátai, Cantor átlós eljárása.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Pontos matematikai fogalomhasználat.' }
    ],
    applications: [
      {
        title: 'Nem oszthatósági feladat',
        problem: '1 és 100 között hány olyan természetes szám van, amely sem 2-vel, sem 3-mal nem osztható?',
        solutionLatex: '|A \\cup B| = 50 + 33 - 16 = 67. \\quad \\text{Komplementer: } 100 - 67 = 33 \\text{ darab.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Számhalmazok és számelmélet fejezet, 1. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 2. Tétel (17-21. oldal): Mindenképp említsd meg a Cantor-féle átlós eljárást a számosságok összehasonlításánál!',
    historicalContext: 'A pythagoreusok fedezték fel az irracionális számokat (a négyzet átlójának és oldalának inkommenzurabilitását), ami sokkolta az ókori görög világot.',
    visualizerType: 'prime'
  }
];

// Combine existing tetelek from 3 to 22 and generate scripts
console.log("Generating complete Studium Generale 2026 dataset...");
