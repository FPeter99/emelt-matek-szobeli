import fs from 'fs';
import path from 'path';

const tetelek = [
  {
    id: 'tétel-01',
    number: 1,
    title: 'Halmazok, halmazműveletek. Nevezetes ponthalmazok a síkban és a térben',
    category: 'Halmazok és logika',
    tags: ['Halmazelmélet', 'De Morgan', 'Műveletek', 'Ponthalmazok', 'Venn-diagram'],
    difficulty: 'Közepes',
    summary: 'A halmaz fogalma, részhalmaz, üres halmaz. Unió, metszet, különbség, komplementer és szimmetrikus differencia. De Morgan-azonosságok, Descartes-szorzat és nevezetes ponthalmazok a síkban és térben.',
    statementLatex: '\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B} \\quad \\text{és} \\quad \\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}',
    conditionsLatex: 'A, B \\subseteq U \\text{ tetszőleges részhalmazai az } U \\text{ alaphalmaznak.}',
    requiredDefinitions: [
      {
        term: 'Halmaz és Részhalmaz',
        definitionLatex: 'A \\subseteq B \\iff (\\forall x \\in A \\implies x \\in B)',
        explanation: 'Alapfogalom. Az A halmaz részhalmaza B-nek, ha A minden eleme B-nek is eleme.'
      },
      {
        term: 'Halmazműveletek (Unió, Metszet, Különbség, Komplementer)',
        definitionLatex: 'A \\cup B = \\{x \\in U \\mid x \\in A \\lor x \\in B\\}, \\quad A \\cap B = \\{x \\in U \\mid x \\in A \\land x \\in B\\}',
        explanation: 'Az unió a legalább az egyik, a metszet a mindkét halmazban szereplő elemek halmaza.'
      },
      {
        term: 'Parabola mint ponthalmaz',
        definitionLatex: 'P = \\{Q \\in \\text{sík} \\mid d(Q, F) = d(Q, v)\\}',
        explanation: 'A sík azon pontjainak halmaza, melyek a fókuszponttól (F) és a vezéregyenestől (v) egyenlő távolságra vannak.'
      }
    ],
    oralPresentationOutline: [
      'Bevezetés: Leonhard Euler és John Venn szerepe, Cantor modern halmazelmélete.',
      'Alapfogalmak: halmaz, elem, üres halmaz, alaphalmaz (U), egyenlőség, részhalmaz, valódi részhalmaz, diszjunkt halmazok.',
      'Halmazműveletek és tulajdonságaik: kommutativitás, asszociativitás, disztributivitás.',
      'De Morgan-azonosságok, Descartes-szorzat ($A \\times B$), logikai szita klauzula.',
      'Nevezetes ponthalmazok síkban (szakaszfelező merőleges, szögfelező, kör, parabola, ellipszis, hiperbola) és térben (gömb, henger, szakaszfelező merőleges sík).',
      'Kiválasztott tétel bizonyítása (pl. Háromszög oldalfelező merőlegeseinek metszéspontja vagy De Morgan).',
      'Mintafeladat felvázolása és megoldása.'
    ],
    proofTitle: 'A háromszög oldalfelező merőlegesei egy pontban metszik egymást (Köré írható kör középpontja)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Oldalfelező merőlegesek metszéspontja (K)',
        latexContent: 'e \\cap f = \\{K\\}, \\quad \\text{ahol } e \\bot AB, f \\bot BC',
        explanation: 'Az AB oldal e és a BC oldal f felezőmerőlegesei metszik egymást K-ban.'
      },
      {
        stepNumber: 2,
        title: 'Távolságok egyenlősége',
        latexContent: 'K \\in e \\implies KA = KB, \\quad K \\in f \\implies KB = KC',
        explanation: 'Mivel K az e egyenesen van, egyenlő távolságra van A-tól és B-től. Mivel f-en van, egyenlő távolságra van B-től és C-től.'
      },
      {
        stepNumber: 3,
        title: 'Tranzitív tulajdonság és konklúzió',
        latexContent: 'KA = KB \\land KB = KC \\implies KA = KC \\implies K \\in m_{AC}',
        explanation: 'Az egyenlőség tranzitivitása miatt KA = KC, tehát K illeszkedik az AC oldal felezőmerőlegesére is.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mi a különbség a részhalmaz (⊆) és a valódi részhalmaz (⊂) között?',
        answer: 'Részhalmaz esetén A = B is lehetséges (minden halmaz részhalmaza önmagának). Valódi részhalmaznál létezik B-ben olyan elem, amely nincs A-ban.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Összefüggő előadás, áttekintő logikus felépítés (bevezetés, műveletek, ponthalmazok).' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Egy pontos definíció (pl. részhalmaz vagy unió/metszet).' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Kiválasztott tétel szabatos kimondása (2p) és bizonyítása (4p).' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'A húzott feladat (pl. Venn-diagramos logikai szita) hibátlan levezetése.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Biológiai rendszertan, adatbázis szűrések, Euler és Venn munkássága.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Szabatos matematikai jelölések és folyamatos előadásmód.' }
    ],
    applications: [
      {
        title: 'Venn-diagramos logikai szita feladat',
        problem: 'Egy 41 fős tanári karban 25-en szoktak focizni, 13-an tudnak, 19-en nézik a TV-ben. Hányan hódolnak kizárólag egy tevékenységnek?',
        solutionLatex: '|A \\cup B \\cup C| = |A|+|B|+|C| - |A \\cap B| - |B \\cap C| - |A \\cap C| + |A \\cap B \\cap C| = 41'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Halmazok és matematikai logika fejezet, 1. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 1. Tétel (8-16. oldal): Ügyelj rá, hogy a ponthalmazoknál a síkbeli és térbeli megfelelőket is említsd meg!',
    historicalContext: 'Leonhard Euler használt először köröket a halmazok szemléltetésére, majd John Venn angol matematikus tökéletesítette a Venn-diagramot. Georg Cantor alapozta meg a halmazelméletet.',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-02',
    number: 2,
    title: 'Racionális és irracionális számok. Műveletek a racionális és irracionális számok halmazán. Közönséges törtek és tizedes törtek. Halmazok számossága',
    category: 'Számelmélet és algebra',
    tags: ['Racionális', 'Irracionális', 'Számosság', 'Tizedes törtek', 'Divergens/Konvergens'],
    difficulty: 'Közepes',
    summary: 'A számhalmazok hierarchiája (N, Z, Q, Q\', R). Racionális számok p/q alakja, véges és szakaszos tizedes törtek. Gyök 2 irracionalitása. Halmazok számossága (megszámlálható és nem megszámlálható végtelen).',
    statementLatex: '\\sqrt{2} \\notin \\mathbb{Q}',
    conditionsLatex: 'p, q \\in \\mathbb{Z}, q \\neq 0',
    requiredDefinitions: [
      {
        term: 'Racionális számok halmaza (Q)',
        definitionLatex: '\\mathbb{Q} = \\left\\{ \\frac{p}{q} \\;\\middle|\\; p \\in \\mathbb{Z}, q \\in \\mathbb{Z} \\setminus \\{0\\} \\right\\}',
        explanation: 'Azon számok, amelyek felírhatók két egész szám hányadosaként. Tizedes tört alakjuk véges vagy végtelen szakaszosan ismétlődő.'
      },
      {
        term: 'Megszámlálhatóan végtelen számosság',
        definitionLatex: '|A| = |\\mathbb{N}| \\iff \\exists f: A \\to \\mathbb{N} \\text{ bijekció}',
        explanation: 'Egy halmaz megszámlálhatóan végtelen, ha elemei kölcsönösen egyértelműen hozzárendelhetők a természetes számokhoz.'
      }
    ],
    oralPresentationOutline: [
      'Számhalmazok bővülési láncolata: N ⊂ Z ⊂ Q ⊂ R.',
      'Racionális számok műveleti zártsága (4 alapműveletre zárt) és tizedes tört alakjai.',
      'Irracionális számok (végtelen nem szakaszos tizedes törtek, pl. √2, π, e).',
      'Tétel: √2 irracionális szám indirekt bizonyítása.',
      'Tétel: Racionális számok tizedes tört alakja minden esetben szakaszosan ismétlődő.',
      'Halmazok számossága: véges, megszámlálhatóan végtelen (N, Z, Q), kontinuum számosságú (Q\', R). Cantor átlós eljárása.'
    ],
    proofTitle: 'A √2 szám irracionalitásának bizonyítása (Indirekt módon)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Indirekt feltételezés',
        latexContent: '\\sqrt{2} = \\frac{p}{q}, \\quad p, q \\in \\mathbb{Z}^+, \\quad (p, q) = 1',
        explanation: 'Tegyük fel, hogy √2 racionális, azaz felírható tovább nem egyszerűsíthető p/q törtként.'
      },
      {
        stepNumber: 2,
        title: 'Négyzetre emelés és p párossága',
        latexContent: '2 = \\frac{p^2}{q^2} \\implies p^2 = 2q^2 \\implies p \\text{ páros } \\implies p = 2a',
        explanation: 'Mivel p² páros, p-nek is párosnak kell lennie.'
      },
      {
        stepNumber: 3,
        title: 'q párossága és ellentmondás',
        latexContent: '(2a)^2 = 2q^2 \\implies 4a^2 = 2q^2 \\implies q^2 = 2a^2 \\implies q \\text{ páros}',
        explanation: 'Behelyettesítés után q² is páros, így q is páros. Ez ellentmond annak, hogy p és q relatív prímek!'
      }
    ],
    examinerTraps: [
      {
        question: 'Racionális számok száma több-e, mint a természetes számoké?',
        answer: 'Nem! Mindkettő megszámlálhatóan végtelen számosságú (|Q| = |N|), mivel megadható köztük bijekció.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Számhalmazok felépítése, tizedes törtek, számosságok szabatos előadása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Racionális szám vagy megszámlálható számosság pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: '√2 irracionalitásának hibátlan indirekt bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Gyökös/logaritmusos kikötéses feladat levezetése.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Mérési eredmények korlátai, pythagoreusok felfedezése.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Pontos matematikai fogalomhasználat.' }
    ],
    applications: [
      {
        title: 'Nem oszthatósági feladat logikai szitával',
        problem: '1 és 100 között hány olyan természetes szám van, amely sem 2-vel, sem 3-mal nem osztható?',
        solutionLatex: '|A \\cup B| = 50 + 33 - 16 = 67. \\quad 100 - 67 = 33 \\text{ darab.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Számhalmazok és számelmélet fejezet, 1. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 2. Tétel (17-21. oldal): Mindenképp említsd meg a Cantor-féle átlós eljárást a számosságok összehasonlításánál!',
    historicalContext: 'A pythagoreusok fedezték fel az irracionális számokat (a négyzet átlójának és oldalának inkommenzurabilitását), ami sokkolta az ókori görög világot.',
    visualizerType: 'prime'
  },
  {
    id: 'tétel-03',
    number: 3,
    title: 'Oszthatóság, oszthatósági szabályok és tételek. Prímszámok. Számrendszerek',
    category: 'Számelmélet és algebra',
    tags: ['Oszthatóság', 'Prímszámok', 'Euklideszi algoritmus', 'Számrendszerek', 'Aritmetika alaptétele'],
    difficulty: 'Közepes',
    summary: 'Az oszthatóság definíciója és tulajdonságai. Prímszámok, összetett számok. Az aritmetika alaptétele. Oszthatósági szabályok (2,3,4,5,6,8,9,10,11,25). LNKO és LKKT. Számrendszerek közötti átváltás.',
    statementLatex: 'a \\mid b \\iff \\exists c \\in \\mathbb{N}: b = a \\cdot c \\quad \\text{és} \\quad |\\mathbb{P}| = \\infty',
    conditionsLatex: 'a, b \\in \\mathbb{N}^+, a \\neq 0',
    requiredDefinitions: [
      {
        term: 'Oszthatóság definíciója',
        definitionLatex: 'a \\mid b \\iff \\exists c \\in \\mathbb{N}: b = a \\cdot c',
        explanation: 'Azt mondjuk, hogy az a szám osztója b-nek, ha létezik olyan c természetes szám, amellyel a-t megszorozva b-t kapjuk.'
      },
      {
        term: 'Prímszám definíciója',
        definitionLatex: 'p \\in \\mathbb{N}, p > 1 \\text{ prím } \\iff \\text{osztóinak száma pontosan 2 (1 és önmaga)}',
        explanation: 'Az 1 nem prímszám! Az összetett számoknak 2-nél több osztójuk van.'
      }
    ],
    oralPresentationOutline: [
      'Az oszthatóság fogalma, tulajdonságai (reflexivitás, tranzitivitás, összeadás/szorzás szabályai).',
      'Prímszámok és összetett számok definíciója, az Aritmetika Alaptétele.',
      'Oszthatósági szabályok 10-es számrendszerben (helyiérték alapú és számjegyösszeg alapú).',
      'Legnagyobb közös osztó (LNKO), legkisebb közös többszörös (LKKT) és kapcsolatuk: $(a,b) \\cdot [a,b] = a \\cdot b$.',
      'Tétel: Végtelen sok prímszám létezik (Eukleidész-féle indirekt bizonyítás).',
      'Számrendszerek: $n$-alapú számrendszer helyiértékei, átváltás 10-es és $n$-es számrendszer között.'
    ],
    proofTitle: 'Végtelen sok prímszám létezésének bizonyítása (Eukleidész tétele)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Indirekt feltételezés',
        latexContent: '\\mathbb{P} = \\{p_1, p_2, \\dots, p_k\\}',
        explanation: 'Tegyük fel, hogy véges sok prímszám létezik, és soroljuk fel mindet.'
      },
      {
        stepNumber: 2,
        title: 'Segédszám megkonstruálása',
        latexContent: 'N = (p_1 \\cdot p_2 \\cdot \\dots \\cdot p_k) + 1',
        explanation: 'Képezzük az összes prímszám szorzatánál 1-gyel nagyobb N számot.'
      },
      {
        stepNumber: 3,
        title: 'Oszthatóság vizsgálata és ellentmondás',
        latexContent: 'N \\pmod{p_i} = 1 \\quad (\\forall i \\in \\{1, \\dots, k\\})',
        explanation: 'Az N számot a felsorolt p_i prímek bármelyikével osztva 1-et kapunk maradékul. Így N maga is prím, vagy van egy fel nem sorolt prímosztója. Ez ellentmondás!'
      }
    ],
    examinerTraps: [
      {
        question: 'Miért nem prímszám az 1?',
        answer: 'Mert az Aritmetika Alaptétele (a prímfelbontás egyértelműsége) érvényét veszítené, ha az 1 prím lenne (akárhányszor beszorozhatnánk 1-gyel).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Oszthatóság, oszthatósági szabályok, számrendszerek és prímek átfogó előadása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Oszthatóság vagy prímszám szabatos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Prímszámok végtelenségének szabatos bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Számrendszerbeli átváltás vagy oszthatósági feladat levezetése.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'RSA titkosítás, informatikai 2-es/16-os számrendszerek, 60-as sumér időmérés.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Tiszta matematikai kifejezésmód.' }
    ],
    applications: [
      {
        title: 'Számrendszerbeli átváltás',
        problem: 'Írjuk fel a 2564 tízes számrendszerbeli számot 5-ös számrendszerben!',
        solutionLatex: '2564 = 40224_5 \\quad (2564 = 4 \\cdot 5^4 + 0 \\cdot 5^3 + 2 \\cdot 5^2 + 2 \\cdot 5^1 + 4 \\cdot 5^0)'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Számelmélet fejezet, 2. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 3. Tétel (22-26. oldal): A számrendszereknél az osztós és a kivonásos módszert is érdemes bemutatni!',
    historicalContext: 'A 60-as számrendszert az ókori sumérok használták, ennek emlékét őrzi a mai napig az óra 60 perce és a kör 360 fokos felosztása.',
    visualizerType: 'prime'
  },
  {
    id: 'tétel-04',
    number: 4,
    title: 'A matematikai logika elemei. Logikai műveletek. Állítás és megfordítása, szükséges és elégséges feltételek, bemutatásuk tételek megfogalmazásában és bizonyításában',
    category: 'Halmazok és logika',
    tags: ['Logika', 'Igazságtábla', 'Implikáció', 'De Morgan', 'Szükséges és elégséges'],
    difficulty: 'Közepes',
    summary: 'Ítélet (kijelentés) fogalma, logikai érték. Kvantorok (∀, ∃) és tagadásuk. Logikai műveletek: negáció, konjunkció, diszjunktív, implikáció, ekvivalencia. Igazságtáblák. Állítás megfordítása, szükséges és elégséges feltétel.',
    statementLatex: 'p \\implies q \\iff \\neg p \\lor q',
    conditionsLatex: 'p, q \\in \\{0, 1\\}',
    requiredDefinitions: [
      {
        term: 'Kijelentés (Ítélet)',
        definitionLatex: 'p \\in \\{I, H\\}',
        explanation: 'Olyan nyelvtani kifejezés, amelyről egyértelműen és objektíven eldönthető, hogy igaz (1) vagy hamis (0).'
      },
      {
        term: 'Implikáció (Ha... akkor)',
        definitionLatex: 'p \\implies q \\equiv \\neg p \\lor q',
        explanation: 'Csak akkor hamis, ha az előtag (p) igaz és az utótag (q) hamis. Minden más esetben igaz.'
      }
    ],
    oralPresentationOutline: [
      'A matematikai logika alapfogalmai: kijelentés, logikai érték (I/H), nyitott mondat.',
      'Univerzális (∀) és egzisztenciális (∃) kvantorok és tagadásuk szabályai.',
      'Logikai műveletek (negáció, konjunkció, diszjunkció, antivalencia, implikáció, ekvivalencia) igazságtáblái.',
      'Azonosságok: De Morgan-szabályok logikában, implikáció átírása diszjunkcióvá.',
      'Állítás és megfordítása. Szükséges feltétel, elégséges feltétel, szükséges és elégséges feltétel fogalma.',
      'Tétel bizonyítása igazságtáblával (pl. A konjunkció disztributív a diszjunkcióra, vagy De Morgan).'
    ],
    proofTitle: 'A konjunkció disztributív a diszjunkcióra nézve: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Igazságtábla felépítése (8 sor)',
        latexContent: '\\begin{array}{ccc|c|c} p & q & r & q \\lor r & p \\land (q \\lor r) \\\\ \\hline I & I & I & I & I \\end{array}',
        explanation: 'Mivel 3 kijelentés van, a táblázat 2³ = 8 soros.'
      },
      {
        stepNumber: 2,
        title: 'A jobb oldal kiszámítása',
        latexContent: '(p \\land q) \\lor (p \\land r)',
        explanation: 'Kiszámítjuk a két konjunkciót, majd ezek diszjunkcióját képezzük.'
      },
      {
        stepNumber: 3,
        title: 'Oszlopok egyenlőségének megállapítása',
        latexContent: 'p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r)',
        explanation: 'Megállapítjuk, hogy a bal oldal és a jobb oldal oszlopa mind az 8 esetben azonos logikai értéket vesz fel.'
      }
    ],
    examinerTraps: [
      {
        question: 'Ha egy "Ha A, akkor B" állítás igaz, igaz-e a megfordítása is?',
        answer: 'Nem feltétlenül! A megfordítás (Ha B, akkor A) nem ekvivalens az eredeti implikációval. (Pl. Ha egy szám 4-gyel osztható, akkor páros [IGAZ], de megfordítva hamis).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Logikai műveletek, igazságtáblák, szükséges/elégséges feltételek átfogó ismertetése.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Implikáció vagy ekvivalencia pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Kiválasztott logikai azonosság hibátlan igazságtáblás bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Következtetési feladat vagy oszthatósági feltételek megadása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Programozás (Boolean logika), áramkörök, kapuk (AND, OR, NOT).' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz logikai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Oszthatósági feltételek logikai elemzése',
        problem: 'Adj meg a 24-gyel való oszthatósághoz szükséges, elégséges, valamint szükséges és elégséges feltételt!',
        solutionLatex: '\\text{Szükséges: osztható 6-tal. Elégséges: osztható 48-cal. Szükséges és elégséges: osztható 3-mal és 8-cal.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Halmazok és matematikai logika fejezet, 1. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 4. Tétel (27-32. oldal): Az implikáció igazságtáblájánál hangsúlyozd ki, hogy mikor hamis!',
    historicalContext: 'Gottlob Frege és George Boole fektették le a modern szimbolikus logika alapjait (Boole-algebra), amely a számítógépek működésének elméleti alapja.',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-05',
    number: 5,
    title: 'Hatványozás, a hatványfogalom kiterjesztése, a hatványozás azonosságai. Az n-edik gyök fogalma. A négyzetgyök azonosságai. Hatványfüggvények és a négyzetgyökfüggvény',
    category: 'Számelmélet és algebra',
    tags: ['Hatványozás', 'Gyökvonás', 'Azonosságok', 'Permanenciaelv', 'Hatványfüggvény'],
    difficulty: 'Közepes',
    summary: 'Egész és racionális kitevőjű hatvány. Permanenciaelv. Hatványozás 5 alapvető azonossága. N-edik gyök fogalma páros és páratlan kitevőre. Négyzetgyök azonosságai. Hatvány- és gyökfüggvények tulajdonságai és inverz kapcsolata.',
    statementLatex: 'a^{\\frac{p}{q}} = \\sqrt[q]{a^p}, \\quad (a \\cdot b)^n = a^n \\cdot b^n',
    conditionsLatex: 'a, b > 0, n, m \\in \\mathbb{R}',
    requiredDefinitions: [
      {
        term: 'Racionális kitevőjű hatvány',
        definitionLatex: 'a^{\\frac{p}{q}} = \\sqrt[q]{a^p} \\quad (a > 0, p \\in \\mathbb{Z}, q \\in \\mathbb{N}^+)',
        explanation: 'A permanenciaelv alapján kiterjesztett hatvány, melynek értéke az a szám p-edik hatványának q-adik gyöke.'
      },
      {
        term: 'Négyzetgyök fogalma',
        definitionLatex: '\\sqrt{a} = b \\iff b \\ge 0 \\text{ és } b^2 = a \\quad (a \\ge 0)',
        explanation: 'A nemnegatív a szám négyzetgyöke az a nemnegatív b szám, amelynek négyzete a.'
      }
    ],
    oralPresentationOutline: [
      'A hatvány fogalmának kiterjesztése: pozitív egész, 0, negatív egész, racionális és irracionális kitevőre (Permanenciaelv).',
      'A hatványozás azonosságai (azonos alapú hatványok szorzata/hányadosa, hatvány hatványa, szorzat/hányados hatványa).',
      'Az n-edik gyök fogalma (páros és páratlan gyökkitevő közötti különbségek). A négyzetgyök azonosságai.',
      'Hatványfüggvények tulajdonságai (páros vs. páratlan kitevő, értelmezési tartomány, paritás, monotonitás).',
      'Gyökfüggvények tulajdonságai és kapcsolatuk a hatványfüggvényekkel (inverz kapcsolat x ≥ 0 esetén).',
      'Azonosság bizonyítása (pl. Szorzat hatványa vagy Szorzat négyzetgyöke).'
    ],
    proofTitle: 'Szorzat négyzetgyöke egyenlő a tényezők négyzetgyökének szorzatával: √(a · b) = √a · √b',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Mindkét oldal nemnegatív voltának megállapítása',
        latexContent: 'a \\ge 0, b \\ge 0 \\implies \\sqrt{a \\cdot b} \\ge 0 \\quad \\text{és} \\quad \\sqrt{a} \\cdot \\sqrt{b} \\ge 0',
        explanation: 'A négyzetgyök definíciója szerint mindkét oldal nemnegatív.'
      },
      {
        stepNumber: 2,
        title: 'A jobb oldal négyzetre emelése',
        latexContent: '(\\sqrt{a} \\cdot \\sqrt{b})^2 = (\\sqrt{a})^2 \\cdot (\\sqrt{b})^2 = a \\cdot b',
        explanation: 'A szorzat hatványozási azonosságát és a négyzetgyök definícióját használjuk.'
      },
      {
        stepNumber: 3,
        title: 'Konklúzió a négyzetgyök egyértelműségéből',
        latexContent: '(\\sqrt{a \\cdot b})^2 = a \\cdot b = (\\sqrt{a} \\cdot \\sqrt{b})^2 \\implies \\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}',
        explanation: 'Mivel a két nemnegatív kifejezés négyzete megegyezik, maga a két kifejezés is egyenlő.'
      }
    ],
    examinerTraps: [
      {
        question: 'Igaz-e, hogy √(x²) = x minden valós x-re?',
        answer: 'Nem! √(x²) = |x|. Ha x negatív, akkor √(x²) = -x (pl. √((-3)²) = √9 = 3 = |-3|).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Hatványozás kiterjesztése, azonosságok, gyökfüggvények szabatos bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Négyzetgyök vagy racionális kitevőjű hatvány pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Kiválasztott hatvány- vagy gyökazonosság hibátlan levezetése.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Gyökös/hatványos kifejezés egyszerűsítése vagy egyenlet megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Mérnöki számítások, kamatos kamat, fizikai inga lengésideje ($T = 2\\pi\\sqrt{l/g}$).' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Azonosságok pontos megfogalmazása.' }
    ],
    applications: [
      {
        title: 'Teljes négyzetté alakítás gyök alatt',
        problem: 'Határozd meg a \\sqrt{x+2+4\\sqrt{x-2}} - \\sqrt{x+7+6\\sqrt{x-2}} kifejezés értékét x ≥ 2 esetén!',
        solutionLatex: '\\sqrt{(2+\\sqrt{x-2})^2} - \\sqrt{(3+\\sqrt{x-2})^2} = (2+\\sqrt{x-2}) - (3+\\sqrt{x-2}) = -1'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Hatvány, gyök, logaritmus fejezet, 3. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 5. Tétel (33-39. oldal): Emeld ki a Permanenciaelv szerepét a hatványfogalom kiterjesztésekor!',
    historicalContext: 'A hatványozás jelölésrendszerét René Descartes rögzítette a 17. században. A négyzet- és köbgyök kiszámítását a kínaiak már időszámításunk kezdetén ismerték.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-06',
    number: 6,
    title: 'A logaritmus fogalma és azonosságai. Az exponenciális és a logaritmusfüggvény. Az inverzfüggvény',
    category: 'Számelmélet és algebra',
    tags: ['Logaritmus', 'Exponenciális', 'Inverzfüggvény', 'Azonosságok', 'Alapváltás'],
    difficulty: 'Kiemelt emelt',
    summary: 'A logaritmus szabatos definíciója és kikötései. A logaritmus 4 fő azonossága (szorzat, hányados, hatvány, alapváltás). Exponenciális és logaritmusfüggvények elemzése. Az inverzfüggvény fogalma, létezésének feltétele és grafikus tükrözése.',
    statementLatex: '\\log_a b = c \\iff a^c = b, \\quad \\log_a(x \\cdot y) = \\log_a x + \\log_a y',
    conditionsLatex: 'a > 0, a \\neq 1, b > 0, x, y > 0',
    requiredDefinitions: [
      {
        term: 'A logaritmus definíciója',
        definitionLatex: '\\log_a b = c \\iff a^c = b \\quad (a > 0, a \\neq 1, b > 0)',
        explanation: 'A b szám a alapú logaritmusa az a valós kitevő (c), amelyre a-t emelve b-t kapjuk.'
      },
      {
        term: 'Inverzfüggvény definíciója',
        definitionLatex: 'f^{-1}(y) = x \\iff f(x) = y \\quad (D_{f^{-1}} = R_f, R_{f^{-1}} = D_f)',
        explanation: 'Csak kölcsönösen egyértelmű (szigorúan monoton) függvényeknek létezik inverze.'
      }
    ],
    oralPresentationOutline: [
      'Bevezetés: Jobst Bürgi és John Napier szerepe, logarléc.',
      'A logaritmus definíciója, alap- és numeruskikötések indoklása.',
      'A logaritmus 4 alapvető azonossága (szorzat, hányados, hatvány, áttérés új alapra) és nevezetes alapok (lg, ln).',
      'Az exponenciális függvény $f(x)=a^x$ és a logaritmusfüggvény $g(x)=\\log_a x$ tulajdonságainak összehasonlítása ($a>1$ és $0<a<1$ esetén).',
      'Az inverzfüggvény fogalma, algebrai előállítása és grafikus tükrözése az $y=x$ egyenesre.',
      'Tétel bizonyítása (pl. Szorzat logaritmusa vagy Áttérés új alapra).'
    ],
    proofTitle: 'Szorzat logaritmusa egyenlő a tényezők logaritmusának összegével: log_a(b · c) = log_a b + log_a c',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A logaritmus definíciójának alkalmazása',
        latexContent: 'b = a^{\\log_a b}, \\quad c = a^{\\log_a c}, \\quad b \\cdot c = a^{\\log_a(b \\cdot c)}',
        explanation: 'Felírjuk a b, c és b·c számokat az a alap hatványaként.'
      },
      {
        stepNumber: 2,
        title: 'Hatványozás azonosságának felhasználása',
        latexContent: 'b \\cdot c = a^{\\log_a b} \\cdot a^{\\log_a c} = a^{\\log_a b + \\log_a c}',
        explanation: 'Azonos alapú hatványok szorzásánál a kitevőket összeadjuk.'
      },
      {
        stepNumber: 3,
        title: 'Exponenciális függvény szigorú monotonitása',
        latexContent: 'a^{\\log_a(b \\cdot c)} = a^{\\log_a b + \\log_a c} \\implies \\log_a(b \\cdot c) = \\log_a b + \\log_a c',
        explanation: 'Mivel az exponenciális függvény szigorúan monoton, az alapok elhagyhatók.'
      }
    ],
    examinerTraps: [
      {
        question: 'Létezik-e logaritmusa negatív számnak a valós számok halmazán?',
        answer: 'Nem! Mivel a pozitív alap bármely valós hatványa pozitív ($a^c > 0$), a logaritmus numerusa csak pozitív szám lehet ($b > 0$).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Logaritmus definíciója, azonosságok, exp/log függvények, inverzfüggvény szabatos felépítése.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'A logaritmus vagy az inverzfüggvény hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Kiválasztott logaritmusazonosság szigorú bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Exponenciális vagy logaritmusos egyenlet kikötésekkel való megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Richter-skála (földrengés), pH-érték, decibel-skála, kamatos kamat futamidő.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz matematikai fogalmazás.' }
    ],
    applications: [
      {
        title: 'Logaritmusos egyenlet megoldása',
        problem: 'Oldd meg a $2 \\lg x + (1+x)\\lg 3 - \\lg(3^{2x}+27) = 0$ egyenletet!',
        solutionLatex: '\\text{Rendezés és } 3^x = a \\text{ helyettesítés után } a_1 = 9, a_2 = 3 \\implies x_1 = 2, x_2 = 1.'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Hatvány, gyök, logaritmus fejezet, 3. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 6. Tétel (40-45. oldal): Mindig hangsúlyozd ki a logaritmus kikötéseit ($a>0, a\\neq 1, b>0$)!',
    historicalContext: 'John Napier és Jobst Bürgi egymástól függetlenül alkották meg a logaritmust a 17. század elején, hogy megkönnyítsék a csillagászati szorzási műveleteket.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-07',
    number: 7,
    title: 'Másodfokú egyenletek és egyenlőtlenségek. Másodfokúra visszavezethető egyenletek. Egyenletek ekvivalenciája, gyökvesztés, hamis gyök, ellenőrzés',
    category: 'Számelmélet és algebra',
    tags: ['Másodfokú', 'Diszkrimináns', 'Viète-formulák', 'Ekvivalencia', 'Hamis gyök'],
    difficulty: 'Közepes',
    summary: 'Másodfokú egyenlet általános alakja, megoldóképlete és levezetése. Diszkrimináns és a gyökök száma. Viète-formulák és gyöktényezős alak. Másodfokúra visszavezethető egyenlettípusok. Ekvivalens és nem ekvivalens átalakítások (gyökvesztés, hamis gyök).',
    statementLatex: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}',
    conditionsLatex: 'a, b, c \\in \\mathbb{R}, a \\neq 0',
    requiredDefinitions: [
      {
        term: 'Másodfokú egyenlet Diszkriminánsa',
        definitionLatex: 'D = b^2 - 4ac',
        explanation: 'A megoldóképlet gyökjele alatti kifejezés. Determinálja a valós gyökök számát (D>0: 2 gyök, D=0: 1 dupla gyök, D<0: nincs valós gyök).'
      },
      {
        term: 'Ekvivalens átalakítás',
        definitionLatex: 'E_1 \\iff E_2 \\quad (M_1 = M_2)',
        explanation: 'Olyan átalakítás, amely nem változtatja meg az egyenlet alaphalmazán lévő megoldások halmazát.'
      }
    ],
    oralPresentationOutline: [
      'A másodfokú egyenlet általános alakja $ax^2+bx+c=0 \\;(a \\neq 0)$. Megoldási módszerek (szorzattá alakítás, teljes négyzet, megoldóképlet).',
      'Tétel: A másodfokú egyenlet megoldóképletének levezetése (teljes négyzetté alakítással).',
      'A diszkrimináns szerepe a gyökök számában.',
      'Tétel: Viète-formulák kimondása és bizonyítása ($x_1+x_2 = -b/a$, $x_1 x_2 = c/a$). Gyöktényezős alak: $a(x-x_1)(x-x_2)=0$.',
      'Másodfokúra visszavezethető egyenletek (új ismeretlen bevezetésével: bikvadratikus, trigonometrikus, exponenciális, logaritmusos).',
      'Egyenletek ekvivalenciája: mérlegelv, ekvivalens vs. nem ekvivalens átalakítások (négyzetre emelés $\\to$ hamis gyök; ismeretlennel osztás $\\to$ gyökvesztés). Az ellenőrzés kötelező jellege.'
    ],
    proofTitle: 'A másodfokú egyenlet megoldóképletének levezetése',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Kiemelés és teljes négyzetté alakítás',
        latexContent: 'a\\left(x^2 + \\frac{b}{a}x + \\frac{c}{a}\\right) = 0 \\implies \\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a^2} + \\frac{c}{a} = 0',
        explanation: 'Leosztunk a-val (a ≠ 0), majd a négyzetes és lineáris tagot teljes négyzetté alakítjuk.'
      },
      {
        stepNumber: 2,
        title: 'Rendezés és gyökvonás',
        latexContent: '\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2} \\implies x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'Átvisszük a konstansokat a jobb oldalra és gyököt vonunk.'
      },
      {
        stepNumber: 3,
        title: 'A végső megoldóképlet',
        latexContent: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
        explanation: 'Kifejezzük x-et, megkapva a közismert megoldóképletet.'
      }
    ],
    examinerTraps: [
      {
        question: 'Miért kaphatunk hamis gyököt az egyenlet megoldása során?',
        answer: 'Mert nem ekvivalens átalakítást végeztünk (pl. páros hatványra emeltünk vagy bővítettük az értelmezési tartományt). Ezért az ellenőrzés ilyenkor kötelező!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Másodfokú egyenlet, Viète-formulák, ekvivalencia és gyökvesztés szigorú felépítése.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Diszkrimináns vagy ekvivalens átalakítás hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'A megoldóképlet vagy a Viète-formulák szabatos levezetése.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Paraméteres vagy másodfokúra visszavezethető egyenlet hibátlan megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Fizikai ferde hajítás, szélsőérték feladatok, Viète francia matematikus munkássága.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Pontos matematikai kifejezésmód.' }
    ],
    applications: [
      {
        title: 'Szélsőérték feladat teljes négyzettel',
        problem: 'Bonts fel egy 8 cm-es szakaszt két részre úgy, hogy az egyes részek fölé rajzolt szabályos háromszögek területének összege minimális legyen!',
        solutionLatex: 'T(x) = \\frac{\\sqrt{3}}{4}(x^2 + (8-x)^2) = \\frac{\\sqrt{3}}{2}[(x-4)^2 + 16] \\implies x = 4 \\text{ cm-nél minimális.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Algebra fejezet, 2. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 7. Tétel (46-50. oldal): Paraméteres feladatoknál figyelj a főegyüttható 0-vá válásának vizsgálatára!',
    historicalContext: 'François Viète (1540–1603) francia matematikus vezette be az betűjelöléseket az algebrában, megalapozva a modern szimbolikus algebrát.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-08',
    number: 8,
    title: 'A leíró statisztika jellemzői, diagramok. Nevezetes középértékek',
    category: 'Gráfelmélet és statisztika',
    tags: ['Statisztika', 'Középértékek', 'Szórás', 'Sodrófa diagram', 'Közepek közötti egyenlőtlenség'],
    difficulty: 'Közepes',
    summary: 'A leíró statisztika alapfogalmai (sokaság, ismérv, gyakoriság, relatív gyakoriság). Diagramtípusok és sodrófa (box-plot) diagram. Helyzeti (módusz, medián, kvartilisek) és számított középértékek (átlag, harmonikus, mértani, négyzetes). Szóródási mutatók. Nevezetes közepek közötti egyenlőtlenség (H ≤ M ≤ A ≤ Q).',
    statementLatex: 'H \\le M \\le A \\le Q \\quad (\\text{HiMSUN / HaMiSaN})',
    conditionsLatex: 'a_1, a_2, \\dots, a_n > 0',
    requiredDefinitions: [
      {
        term: 'Szórás (Tapasztalati szórás)',
        definitionLatex: '\\sigma = \\sqrt{\\frac{\\sum_{i=1}^n (x_i - \\bar{x})^2}{n}}',
        explanation: 'Az adatnak az átlagtól vett eltéréseinek négyzetes átlaga. Megmutatja az adatok átlag körüli ingadozását.'
      },
      {
        term: 'Medián',
        definitionLatex: 'Me = x_{\\left(\\frac{n+1}{2}\\right)} \\quad (n \\text{ páratlan})',
        explanation: 'A sorbarendezett adatok középső eleme (vagy a két középső elem számtani közepe páros n esetén).'
      }
    ],
    oralPresentationOutline: [
      'A leíró statisztika feladata, alapfogalmai (ismérv, gyakoriság, relatív gyakoriság, kumulált gyakoriság).',
      'Adatábrázolás: oszlop-, kör-, vonal-, pont- és sodrófa (box-plot / doboz) diagram.',
      'Helyzeti középértékek (módusz, medián, alsó/felső kvartilis, félterjedelem).',
      'Számított középértékek (számtani A, mértani M, harmonikus H, négyzetes Q közép) szabatos képletei.',
      'Szóródási mutatók (terjedelem R, átlagos abszolút eltérés δ, szórás σ, relatív szórás V).',
      'Tétel: Két pozitív szám számtani és mértani közepe közötti egyenlőtlenség ($A \\ge M$) bizonyítása (algebrai vagy geometriai úton).'
    ],
    proofTitle: 'Két pozitív szám számtani és mértani közepe közötti egyenlőtlenség bizonyítása: (a+b)/2 ≥ √(a·b)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Átrendezés és négyzetre emelés',
        latexContent: '\\frac{a+b}{2} \\ge \\sqrt{a \\cdot b} \\iff a+b \\ge 2\\sqrt{a \\cdot b} \\iff (a+b)^2 \\ge 4a \\cdot b',
        explanation: 'Mivel mindkét oldal pozitív, a négyzetre emelés ekvivalens átalakítás.'
      },
      {
        stepNumber: 2,
        title: 'Nullára rendezés és teljes négyzetté alakítás',
        latexContent: 'a^2 + 2ab + b^2 - 4ab \\ge 0 \\iff a^2 - 2ab + b^2 \\ge 0 \\iff (a-b)^2 \\ge 0',
        explanation: 'A bal oldalon az (a-b)² teljes négyzetet kapjuk.'
      },
      {
        stepNumber: 3,
        title: 'Konklúzió',
        latexContent: '(a-b)^2 \\ge 0 \\quad (\\forall a, b \\in \\mathbb{R})',
        explanation: 'Bármely valós szám négyzete nemnegatív, így az állítás igaz. Egyenlőség pontosan akkor áll fenn, ha a = b.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mikor érzékeny az átlag a kiugró adatokra, és mit érdemes helyette használni?',
        answer: 'Erősen ferde eloszlásnál vagy kiugró értékeknél (pl. jövedelmek) az átlag eltorzul. Ilyenkor a medián ad sokkal reálisabb képet a sokaságról.',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Statisztikai mutatók, diagramok és a közepek rendszerezett bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Szórás vagy medián szabatos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'A számtani és mértani közép közötti egyenlőtlenség hibátlan igazolása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Statisztikai mutatók kiszámítása vagy átlagsebesség feladat.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'KSH statisztikák, Lorenz-görbe, átlagsebesség számítása harmonikus középpel.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Szabatos szaknyelv használata.' }
    ],
    applications: [
      {
        title: 'Átlagsebesség számítása harmonikus középpel',
        problem: 'Egy 240 km-es utat odafelé 60 km/h, visszafelé 80 km/h sebességgel teszünk meg. Mennyi az átlagsebesség?',
        solutionLatex: 'v_{átlag} = H(60, 80) = \\frac{2}{\\frac{1}{60} + \\frac{1}{80}} = 68{,}57 \\text{ km/h}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Statisztika fejezet, 12. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 8. Tétel (51-56. oldal): A közepek közötti egyenlőtlenség láncolatát (HiMSUN / HaMiSaN) említsd meg!',
    historicalContext: 'A statisztika szó a latin "status" (állam) szóból ered, eredetileg az államháztartás és a népesség számbavételét jelentette.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-09',
    number: 9,
    title: 'Függvénytani alapismeretek, függvények tulajdonságai, határérték, folytonosság. Számsorozatok. A számtani sorozat, az első n tag összege',
    category: 'Függvények és analízis',
    tags: ['Függvénytan', 'Határérték', 'Folytonosság', 'Számsorozat', 'Számtani sorozat'],
    difficulty: 'Kiemelt emelt',
    summary: 'Függvény fogalma (egyértelmű hozzárendelés). Globális és lokális tulajdonságok (ÉnT, ÉK, monotonitás, szélsőérték, paritás, periodicitás, korlátosság, folytonosság). Függvény- és sorozathatárérték (Cauchy ε-N definíció). Számtani sorozat n-edik tagja és első n tagjának összege.',
    statementLatex: 'a_n = a_1 + (n-1)d, \\quad S_n = \\frac{a_1 + a_n}{2} \\cdot n = \\frac{2a_1 + (n-1)d}{2} \\cdot n',
    conditionsLatex: 'a_1, d \\in \\mathbb{R}, n \\in \\mathbb{N}^+',
    requiredDefinitions: [
      {
        term: 'Sorozat határértéke (Cauchy-féle ε-N definíció)',
        definitionLatex: '\\lim_{n \\to \\infty} a_n = A \\iff \\forall \\varepsilon > 0 \\; \\exists N(\\varepsilon) \\in \\mathbb{N}: \\forall n > N \\implies |a_n - A| < \\varepsilon',
        explanation: 'Az A szám a sorozat határértéke, ha bármely pozitív ε-hoz megadható egy N küszöbszám, amelynél nagyobb indexű tagok ε-nál közelebb vannak A-hoz.'
      },
      {
        term: 'Számtani sorozat definíciója',
        definitionLatex: 'a_n - a_{n-1} = d = \\text{konstans} \\quad (n \\ge 2)',
        explanation: 'Olyan sorozat, amelyben a második tagtól kezdve bármelyik tag és az őt megelőző tag különbsége állandó (d).'
      }
    ],
    oralPresentationOutline: [
      'A függvény fogalma (értelmezési tartomány, értékkészlet, egyértelmű hozzárendelés).',
      'Függvények tulajdonságai: monotonitás, zérushely, szélsőérték, paritás, korlátosság, konvexitás, folytonosság.',
      'Sorozat fogalma mint $\\mathbb{N}^+ \\to \\mathbb{R}$ függvény. Monotonitás, korlátosság, konvergencia.',
      'A sorozat határértékének pontos (ε-N) definíciója.',
      'Számtani sorozat definíciója, n-edik tagjának képlete, szomszédos tagok számtani közepe.',
      'Tétel: A számtani sorozat első n tagjának összegképletének levezetése (Gauss-módszer vagy teljes indukció).'
    ],
    proofTitle: 'A számtani sorozat első n tagja összegképletének levezetése: S_n = n(a_1 + a_n)/2',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Az összeg felírása növekvő és csökkenő sorrendben',
        latexContent: 'S_n = a_1 + a_2 + \\dots + a_n, \\quad S_n = a_n + a_{n-1} + \\dots + a_1',
        explanation: 'Felírjuk az összeget először rendes, majd fordított sorrendben.'
      },
      {
        stepNumber: 2,
        title: 'A két egyenlet összeadása',
        latexContent: '2S_n = (a_1 + a_n) + (a_2 + a_{n-1}) + \\dots + (a_n + a_1)',
        explanation: 'Összeadjuk az oszloponkénti tagokat.'
      },
      {
        stepNumber: 3,
        title: 'Szimmetrikus tagok összegének egyenlősége',
        latexContent: 'a_k + a_{n-k+1} = a_1 + (k-1)d + a_1 + (n-k)d = a_1 + a_n \\implies 2S_n = n(a_1 + a_n)',
        explanation: 'Minden tagpár összege a_1 + a_n-nel egyenlő, és n darab ilyen pár van.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e egy sorozat konvergens, ha nem korlátos?',
        answer: 'Nem! Minden konvergens sorozat szükségképpen korlátos (de fordítva nem igaz, pl. (-1)^n korlátos, de divergens).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Függvénytan, határérték definíciója és számtani sorozat átfogó bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Sorozathatárérték ε-N definíciójának hibátlan kimondása.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'A számtani sorozat összegképletének szabatos levezetése.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Számtani sorozatos szöveges feladat hibátlan megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Színházi széksorok, Gauss kisgyermekkori összegzési ötlete.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Analízis szaknyelv pontos használata.' }
    ],
    applications: [
      {
        title: 'Színházi széksorok száma',
        problem: 'Hány sor van abban a színházban, ahol 510 szék van, az 1. sorban 20 szék van, és minden sorban 2-vel nő a székek száma?',
        solutionLatex: 'S_n = \\frac{2 \\cdot 20 + (n-1)2}{2} \\cdot n = 510 \\implies n^2 + 19n - 510 = 0 \\implies n = 15 \\text{ sor.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Sorozatok fejezet, 4. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 9. Tétel (57-63. oldal): A Cauchy-féle ε-N definíciónál rajzolj fel küszöbszám-szemléltető ábrát!',
    historicalContext: 'Carl Friedrich Gauss (1777–1855) 9 évesen pillanatok alatt adta össze a számokat 1-től 100-ig a szimmetrikus tagok párosításával.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-10',
    number: 10,
    title: 'Mértani sorozat, az első n tag összege, végtelen mértani sor. Kamatszámítás, gyűjtőjáradék, törlesztőrészlet. Exponenciális folyamatok a társadalomban és a természetben',
    category: 'Függvények és analízis',
    tags: ['Mértani sorozat', 'Kamatszámítás', 'Gyűjtőjáradék', 'Törlesztőrészlet', 'Végtelen sor'],
    difficulty: 'Kiemelt emelt',
    summary: 'Mértani sorozat definíciója és hányadosa (q). n-edik tag és összegképlet. Végtelen mértani sor összege ($|q|<1$). Pénzügyi matematika: kamatos kamat, gyűjtőjáradék, törlesztőrészlet képletei. Exponenciális növekedés és bomlás a természetben.',
    statementLatex: 'a_n = a_1 \\cdot q^{n-1}, \\quad S_n = a_1 \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1), \\quad S_\\infty = \\frac{a_1}{1 - q} \\quad (|q| < 1)',
    conditionsLatex: 'a_1 \\neq 0, q \\in \\mathbb{R}',
    requiredDefinitions: [
      {
        term: 'Mértani sorozat definíciója',
        definitionLatex: '\\frac{a_n}{a_{n-1}} = q = \\text{konstans} \\quad (n \\ge 2, a_1 \\neq 0, q \\neq 0)',
        explanation: 'Olyan sorozat, amelyben a második tagtól kezdve bármelyik tag és az őt megelőző tag hányadosa állandó (q).'
      },
      {
        term: 'Végtelen mértani sor összege',
        definitionLatex: 'S_\\infty = \\lim_{n \\to \\infty} S_n = \\frac{a_1}{1-q} \\quad (|q| < 1)',
        explanation: 'Ha a kvóciens abszolút értéke 1-nél kisebb, a részletösszegek sorozata konvergens.'
      }
    ],
    oralPresentationOutline: [
      'Mértani sorozat definíciója, n-edik tagjának képlete, szomszédos tagok mértani közepe.',
      'Tétel: A mértani sorozat első n tagja összegképletének levezetése.',
      'Végtelen mértani sor fogalma és összegképlete ($|q|<1$ feltétel indoklásával). Végtelen szakaszos tizedes törtek tört alakja.',
      'Pénzügyi matematika: Kamatos kamat $T_n = T_0(1 + p/100)^n$.',
      'Gyűjtőjáradék (évente elhelyezett megtakarítások) és Törlesztőrészlet (hitel visszafizetés) egyenletei.',
      'Exponenciális folyamatok: népességnövekedés, radioaktív bomlás (felezési idő), információterjedés.'
    ],
    proofTitle: 'A mértani sorozat első n tagja összegképletének levezetése',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Az S_n összeg felírása',
        latexContent: 'S_n = a_1 + a_1 q + a_1 q^2 + \\dots + a_1 q^{n-1}',
        explanation: 'Felírjuk az első n tag összegét.'
      },
      {
        stepNumber: 2,
        title: 'Megszorzás q-val és a két egyenlet kivonása',
        latexContent: 'q S_n = a_1 q + a_1 q^2 + \\dots + a_1 q^n \\implies q S_n - S_n = a_1 q^n - a_1',
        explanation: 'A q S_n egyenletből kivonjuk az eredeti S_n egyenletet. A középső tagok kiesnek!'
      },
      {
        stepNumber: 3,
        title: 'Kiemelés és leosztás (q-1)-gyel',
        latexContent: 'S_n(q - 1) = a_1(q^n - 1) \\implies S_n = a_1 \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)',
        explanation: 'Kiemeljük S_n-et és leosztunk (q-1)-gyel.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mi történik a végtelen mértani sor összegével, ha q ≥ 1?',
        answer: 'A sor divergens, a részletösszegek végtelenhez tartanak (vagy oszcillálnak q ≤ -1 esetén), így nem létezik véges összeg.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Mértani sorozat, végtelen sor, kamatszámítás és exponenciális folyamatok rendszerezett bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Mértani sorozat vagy végtelen sor összegének hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'A mértani sorozat összegképletének szabatos levezetése.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Gyűjtőjáradék vagy törlesztőrészlet feladat levezetése.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Banki hitelek, radioaktív bomlás felezési ideje, papirusztekercs búzaszem feladata.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Pénzügyi és matematikai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Kamatos kamat megtakarítás',
        problem: 'Ha most berakunk a bankba 200 000 Ft-ot évi 7%-os kamatos kamatra 5 évre, mennyi pénzünk lesz?',
        solutionLatex: 'T_5 = 200\\,000 \\cdot (1 + 0{,}07)^5 = 200\\,000 \\cdot 1{,}40255 = 280\\,510 \\text{ Ft}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Sorozatok és pénzügyi matematika fejezet, 4-5. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 10. Tétel (64-68. oldal): A törlesztőrészlet képleténél figyelj az időperiódusok megfelelő lekezelésére!',
    historicalContext: 'A legrégibb mértani sorozatos feladat az egyiptomi Rhind-papiruszon található (Kr. e. 1650 körül): 7 ház, 7 macska, 7 egér, 7 búzaszem...',
    visualizerType: 'function'
  },
  {
    id: 'tétel-11',
    number: 11,
    title: 'A differenciálhányados fogalma, deriválási szabályok. A differenciálszámítás alkalmazásai (érintő, függvényvizsgálat, szélsőértékfeladatok)',
    category: 'Függvények és analízis',
    tags: ['Analízis', 'Derivált', 'Érintő', 'Függvényvizsgálat', 'Szélsőérték'],
    difficulty: 'Kiemelt emelt',
    summary: 'Differenciahányados (szelő meredeksége) és Differenciálhányados (érintő meredeksége) határértékként. Deriválási szabályok (összeg, szorzat, hányados, összetett függvény). Elemi függvények deriváltjai. Teljes függvényvizsgálat és szélsőérték-ötletek.',
    statementLatex: 'f\'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}, \\quad e: y - f(x_0) = f\'(x_0)(x - x_0)',
    conditionsLatex: 'f \\text{ differenciálható } x_0 \\text{-ban}',
    requiredDefinitions: [
      {
        term: 'Differenciálhányados (Derivált)',
        definitionLatex: 'f\'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}',
        explanation: 'A differenciahányados (szelő meredeksége) határértéke, amikor x tart x_0-hoz. Megadja az érintő meredekségét.'
      },
      {
        term: 'Görbe érintőjének egyenlete',
        definitionLatex: 'y - f(x_0) = f\'(x_0)(x - x_0)',
        explanation: 'Az f függvény x_0 pontbeli érintőegyenesének egyenlete.'
      }
    ],
    oralPresentationOutline: [
      'Bevezetés: Isaac Newton és Gottfried Wilhelm Leibniz vitája az analízis felfedezéséről.',
      'A szelő meredeksége (differenciahányados) és az érintő meredeksége (differenciálhányados) géometriai és fizikai jelentése.',
      'Deriválási szabályok: c·f, f±g, f·g (szorzatszabály), f/g (hányadosszabály), f(g(x)) (láncszabály).',
      'Elemi függvények deriváltjai ($x^n \\to n x^{n-1}$, $\\sin x \\to \\cos x$, $\\cos x \\to -\\sin x$, $e^x \\to e^x$).',
      'Tétel: Ha f-nek $x_0$-ban lokális szélsőértéke van és ott differenciálható, akkor $f\'(x_0) = 0$.',
      'Teljes függvényvizsgálat lépései (ÉnT, ÉK, Zérushely, Monotonitás, Szélsőérték, Konvexitás, Inflexió, Aszimptoták).'
    ],
    proofTitle: 'A hatványfüggvény deriválási szabályának bizonyítása: (x^n)\' = n·x^(n-1)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Differenciahányados felírása',
        latexContent: '\\frac{f(x) - f(a)}{x - a} = \\frac{x^n - a^n}{x - a}',
        explanation: 'Felírjuk a hatványfüggvény differenciahányadosát az x=a pontban.'
      },
      {
        stepNumber: 2,
        title: 'Szorzattá alakítás a számlálóban',
        latexContent: 'x^n - a^n = (x - a)(x^{n-1} + x^{n-2}a + \\dots + a^{n-1})',
        explanation: 'Alkalmazzuk az ismert algebrai azonosságot.'
      },
      {
        stepNumber: 3,
        title: 'Határérték képzés x → a esetén',
        latexContent: 'f\'(a) = \\lim_{x \\to a} (x^{n-1} + x^{n-2}a + \\dots + a^{n-1}) = n \\cdot a^{n-1}',
        explanation: 'Egyszerűsítés után n darab a^{n-1} tagot kapunk, így f\'(x) = n x^{n-1}.'
      }
    ],
    examinerTraps: [
      {
        question: 'Ha f\'(x_0) = 0, akkor ott feltétlenül lokális szélsőértéke van a függvénynek?',
        answer: 'Nem feltétlenül! Szükséges feltétel f\'(x_0) = 0, de nem elégséges. Kell még, hogy f\' ott előjelet váltson (pl. f(x)=x³ x=0-ban f\'(0)=0, de ott inflexiós pont van, nem szélsőérték!).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Derivált fogalma, geometriai jelentés, szabályok, függvényvizsgálat szabatos felépítése.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Differenciálhányados vagy érintő egyenletének hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: '(x^n)\' deriválási szabályának vagy a szélsőérték szükséges feltételének bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Szélsőérték feladat vagy érintőegyenlet meghatározása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Fizikai pillanatnyi sebesség ($v(t)=s\'(t)$) és gyorsulás ($a(t)=v\'(t)$), Newton és Leibniz.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Analízis szaknyelv pontos használata.' }
    ],
    applications: [
      {
        title: 'Maximalizálási kerítés feladat',
        problem: 'Egy 10 m hosszú kerítéshálóval téglalap alakú baromfiudvart kerítünk le a fal mellett. Mikor lesz a terület maximális?',
        solutionLatex: 'T(x) = x(10-x) = 10x - x^2 \\implies T\'(x) = 10 - 2x = 0 \\implies x = 5 \\text{ m, } T_{max} = 25 \\text{ m}^2'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Differenciál- és integrálszámítás fejezet, 6. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 11. Tétel (69-74. oldal): Rajzold fel a szelő érintővé válását a határérték szemléltetéséhez!',
    historicalContext: 'Gottlob Wilhelm Leibniz és Isaac Newton egymástól függetlenül fejlesztették ki a differenciálszámítást a 17. század végén. A ma használt $dy/dx$ jelölés Leibniztől származik.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-12',
    number: 12,
    title: 'Derékszögű háromszögekre vonatkozó tételek. A hegyesszögek szögfüggvényei. Összefüggések a hegyesszögek szögfüggvényei között. A szögfüggvények általánosítása',
    category: 'Geometria és trigonometria',
    tags: ['Trigonometria', 'Pitagorasz-tétel', 'Magasságtétel', 'Befogótétel', 'Egységkör'],
    difficulty: 'Közepes',
    summary: 'Derékszögű háromszög tételei (Pitagorasz, Pitagorasz megfordítása, Magasságtétel, Befogótétel, Thalész-tétel). Hegyesszögek szögfüggvényei (sin, cos, tg, ctg). Szögfüggvények kiterjesztése egységkör segítségével tetszőleges forgásszögre.',
    statementLatex: 'a^2 + b^2 = c^2, \\quad m_c = \\sqrt{p \\cdot q}, \\quad b = \\sqrt{q \\cdot c}, \\quad \\sin^2 \\alpha + \\cos^2 \\alpha = 1',
    conditionsLatex: '\\gamma = 90^\\circ',
    requiredDefinitions: [
      {
        term: 'Hegyesszög Szinusza',
        definitionLatex: '\\sin \\alpha = \\frac{a}{c} = \\frac{\\text{szöggel szemközti befogó}}{\\text{átfogó}}',
        explanation: 'Derékszögű háromszögben a szöggel szemközti befogó és az átfogó hányadosa.'
      },
      {
        term: 'Szögfüggvények általánosítása egységkörben',
        definitionLatex: 'e = (\\cos \\alpha, \\sin \\alpha)',
        explanation: 'Tetszőleges α forgásszög szinusza és koszinusza az egységvektor y és x koordinátája.'
      }
    ],
    oralPresentationOutline: [
      'A derékszögű háromszög elemei (befogók, átfogó, magasság, vetületek).',
      'Tétel: Pitagorasz-tétel kimondása és bizonyítása (átdarabolással vagy koszinusztétellel/befogótétellel).',
      'Tétel: Magasságtétel $m_c = \\sqrt{p \\cdot q}$ és Befogótétel $b = \\sqrt{q \\cdot c}$ bizonyítása háromszögek hasonlóságával.',
      'Hegyesszögek szögfüggvényei és összefüggéseik (pótszögek, $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$, $\\operatorname{tg} \\alpha = \\sin \\alpha / \\cos \\alpha$).',
      'Szögfüggvények általánosítása egységkörben tetszőleges forgásszögre. Előjelek a 4 síknegyedben.'
    ],
    proofTitle: 'A Magasságtétel és Befogótétel bizonyítása háromszögek hasonlóságával',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Hasonló háromszögek azonosítása',
        latexContent: '\\triangle ATC \\sim \\triangle BTC \\sim \\triangle ABC',
        explanation: 'Az átfogóhoz tartozó magasság két derékszögű háromszögre bontja az eredetit, amiknek szögei megegyeznek.'
      },
      {
        stepNumber: 2,
        title: 'Magasságtétel aránypárja',
        latexContent: '\\frac{m}{p} = \\frac{q}{m} \\implies m^2 = p \\cdot q \\implies m = \\sqrt{p \\cdot q}',
        explanation: 'Az ATC és BTC háromszögek megfelelő oldalainak arányából megkapjuk a magasságtételt.'
      },
      {
        stepNumber: 3,
        title: 'Befogótétel aránypárja',
        latexContent: '\\frac{b}{q} = \\frac{c}{b} \\implies b^2 = q \\cdot c \\implies b = \\sqrt{q \\cdot c}',
        explanation: 'Az ATC és ABC háromszögek megfelelő oldalainak arányából adódik a befogótétel.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mely szögekre nincs értelmezve a tangens függvény?',
        answer: 'α = 90° + k·180° (k ∈ Z) szögekre, mert ott a koszinusz értéke 0, és 0-val nem oszthatunk.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Derékszögű háromszög tételei, szögfüggvények és egységkörös általánosítás átfogó bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Szinusz/koszinusz vagy egységkörös szögfüggvény pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Pitagorasz-, Magasság- vagy Befogótétel hibátlan bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Derékszögű háromszöges vagy szögfüggvényes feladat kiszámítása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Építészet, magasságmérés világítótoronynál, lejtők fizikában, egyiptomi kötélhúzók (3-4-5).' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Trigonometrikus szaknyelv.' }
    ],
    applications: [
      {
        title: 'Körhöz húzott érintő húrhossza',
        problem: 'Egy 10 cm sugarú körhöz egy külső pontból 24 cm-es érintőszakaszokat húzunk. Mekkora az érintési pontokat összekötő húr hossza?',
        solutionLatex: '\\operatorname{tg} \\alpha = \\frac{10}{24} \\implies \\alpha = 22{,}62^\\circ \\implies TA = 24 \\sin 22{,}62^\\circ = 9{,}23 \\implies AB = 18{,}46 \\text{ cm}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Trigonometria es geometria fejezet, 7-8. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 12. Tétel (75-82. oldal): A Pitagorasz-tétel geometriai (terület-átdarabolásos) bizonyítását is érdemes ismerni!',
    historicalContext: 'Pitagorasz (Kr. e. 6. század) görög matematikus és filozófus nevét viseli a tétel, de a babilóniaiak és kínaiak már évszázadokkal korábban ismerték a számtani összefüggést.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-13',
    number: 13,
    title: 'Háromszögek nevezetes vonalai, pontjai és körei',
    category: 'Geometria és trigonometria',
    tags: ['Geometria', 'Súlypont', 'Magasságpont', 'Beírható kör', 'Köré írható kör', 'Euler-egyenes'],
    difficulty: 'Közepes',
    summary: 'Háromszög nevezetes vonalai: oldalfelező merőlegesek, belső szögfelezők, magasságvonalak, súlyvonalak, középvonalak. Nevezetes pontok és köreik (köré írható kör K, beírható kör O, magasságpont M, súlypont S). Euler-egyenes, Feuerbach-kör (9 pont köre) és Apollóniusz-kör.',
    statementLatex: 'T = r \\cdot s = \\frac{a \\cdot b \\cdot c}{4R}, \\quad OS : SM = 1 : 2',
    conditionsLatex: 's = \\frac{a+b+c}{2}',
    requiredDefinitions: [
      {
        term: 'Háromszög Súlyvonala és Súlypontja',
        definitionLatex: 's_a = A \\text{ csúcsot az } a \\text{ oldal felezőpontjával összekötő szakasz}',
        explanation: 'A súlyvonalak egy pontban (S) metszik egymást, amely 2:1 arányban osztja a súlyvonalakat a csúcstól távolodva.'
      },
      {
        term: 'Háromszög Középvonala',
        definitionLatex: 'k_c = \\frac{c}{2}, \\quad k_c \\parallel c',
        explanation: 'Két oldal felezőpontját összekötő szakasz. Párhuzamos a harmadik oldallal és hossza annak fele.'
      }
    ],
    oralPresentationOutline: [
      'A háromszög 4 klasszikus nevezetes vonalának és metszéspontjainak bemutatása.',
      '1. Oldalfelező merőlegesek $\\to$ Köré írható kör középpontja (K).',
      '2. Belső szögfelezők $\\to$ Beírható kör középpontja (O). Szögfelező-tétel.',
      '3. Magasságvonalak $\\to$ Magasságpont (M).',
      '4. Súlyvonalak $\\to$ Súlypont (S). Súlyvonal-tétel (2:1 arány).',
      'Egyéb nevezetes elemek: középvonalak, Euler-egyenes (O, S, M egy egyenesen, OS:SM = 1:2), Feuerbach-kör (9 pont köre), Hozzáírt körök.',
      'Tétel bizonyítása (Súlyvonal-tétel vagy Szögfelező-tétel vagy Köré írható kör középpontja).'
    ],
    proofTitle: 'A háromszög súlyvonalai egy pontban metszik egymást és 2:1 arányban osztják egymást (Súlyvonal-tétel)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Középvonalak behúzása',
        latexContent: 'F_a F_b \\parallel AB \\quad \\text{és} \\quad F_a F_b = \\frac{AB}{2}',
        explanation: 'Az F_a és F_b oldalfelező pontokat összekötő szakasz a háromszög középvonala.'
      },
      {
        stepNumber: 2,
        title: 'Paralelogramma megkonstruálása',
        latexContent: 'F_a F_b G_b G_a \\text{ paralelogramma}',
        explanation: 'Az AB S metszéspont felőli felezőpontjaival (G_a, G_b) képezett négyszög paralelogramma, mert átlói felezik egymást.'
      },
      {
        stepNumber: 3,
        title: '2:1 arány levezetése',
        latexContent: 'AG_a = G_a S = SF_a \\implies AS : SF_a = 2 : 1',
        explanation: 'A paralelogramma átlóinak felezési tulajdonságából adódik, hogy a súlypont 2:1 arányban osztja a súlyvonalat.'
      }
    ],
    examinerTraps: [
      {
        question: 'Hol helyezkedik el a magasságpont tompaszögű háromszög esetén?',
        answer: 'A háromszögön kívül! (Derékszögű háromszögnél a derékszögű csúcsban, hegyesszögűnél a háromszögön belül van).',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: '4 nevezetes vonal, pontok, köreik, Euler-egyenes és Feuerbach-kör átfogó bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Súlyvonal vagy középvonal pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'A súlyvonal-tétel vagy a szögfelező-tétel hibátlan bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Háromszög beírt/köré írt kör sugarának kiszámítása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'GPS helymeghatározás (3 múhold), építészeti alátámasztási súlypont, színházi díszpáholy.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz geometriai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Háromszög beírt és köré írt körének sugara',
        problem: 'Egy háromszög oldalai 9, 12 és 15 egység. Mekkorák a beírható és köré írható köreinek sugarai?',
        solutionLatex: 'T = \\frac{9 \\cdot 12}{2} = 54, \\quad s = 18 \\implies r = \\frac{T}{s} = 3, \\quad R = \\frac{c}{2} = 7{,}5'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Geometria fejezet, 7. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 13. Tétel (83-89. oldal): Szabályos háromszögben a 4 nevezetes pont mind egybeesik!',
    historicalContext: 'Leonhard Euler (1707–1783) igazolta, hogy a köré írható kör középpontja, a súlypont és a magasságpont egy egyenesre esik (Euler-egyenes). Karl Wilhelm Feuerbach írta le a 9 pont körét.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-14',
    number: 14,
    title: 'Összefüggések az általános háromszögek oldalai között, szögei között, oldalai és szögei között',
    category: 'Geometria és trigonometria',
    tags: ['Trigonometria', 'Szinusztétel', 'Koszinusztétel', 'Háromszög-egyenlőtlenség', 'Hérón-képlet'],
    difficulty: 'Kiemelt emelt',
    summary: 'Háromszög-egyenlőtlenség. Belső és külső szögek összege (180° és 360°). Hosszabb oldallal szemben nagyobb szög van. Szinusztétel a/sinα = b/sinβ = c/sinγ = 2R. Koszinusztétel c² = a² + b² - 2ab cosγ. Területképletek (ab sinγ / 2, Hérón-képlet).',
    statementLatex: '\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{c}{\\sin \\gamma} = 2R, \\quad c^2 = a^2 + b^2 - 2ab \\cos \\gamma',
    conditionsLatex: 'a, b, c > 0, \\alpha, \\beta, \\gamma > 0',
    requiredDefinitions: [
      {
        term: 'Szinusztétel',
        definitionLatex: '\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{c}{\\sin \\gamma} = 2R',
        explanation: 'Bármely háromszög oldalainak aránya megegyezik a velük szemben lévő szögek szinuszainak arányával, és ez az arány a köré írható kör átmérője (2R).'
      },
      {
        term: 'Koszinusztétel',
        definitionLatex: 'c^2 = a^2 + b^2 - 2ab \\cos \\gamma',
        explanation: 'Egy háromszög bármely oldalának négyzete megegyezik a másik két oldal négyzetösszegének és a közbezárt szög koszinuszával vett kétszeres szorzatuk különbségével.'
      }
    ],
    oralPresentationOutline: [
      'A háromszög megadhatóságának feltételei (3 független adat). Háromszög-egyenlőtlenség ($a+b>c$).',
      'Szögek közötti összefüggések (belső szögek összege 180°, külső szögek összege 360°, külső szög = 2 nem mellette fekvő belső szög összege).',
      'Oldalak és szögek közötti kapcsolat: hosszabb oldallal szemben nagyobb szög van.',
      'Tétel: Szinusztétel kimondása és bizonyítása (hegyes-, tompa- és derékszögű esetre vagy magasságvonalakkal).',
      'Tétel: Koszinusztétel kimondása és bizonyítása (vektorok skaláris szorzatával vagy derékszögű háromszögekre bontással).',
      'Általános háromszög területképletei ($T = \\frac{1}{2}ab \\sin \\gamma$, Hérón-képlet $T = \\sqrt{s(s-a)(s-b)(s-c)}$).'
    ],
    proofTitle: 'A Koszinusztétel bizonyítása vektorok skaláris szorzatával',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Oldalvektorok felírása',
        latexContent: '\\vec{c} = \\vec{a} - \\vec{b}',
        explanation: 'Az c oldalvektort felírjuk az a és b oldalvektorok különbségeként.'
      },
      {
        stepNumber: 2,
        title: 'Önmagával vett skaláris szorzás',
        latexContent: '\\vec{c}^2 = (\\vec{a} - \\vec{b})^2 = \\vec{a}^2 + \\vec{b}^2 - 2\\vec{a} \\cdot \\vec{b}',
        explanation: 'Négyzetre emeljük az egyenletet a skaláris szorzás tulajdonságait használva.'
      },
      {
        stepNumber: 3,
        title: 'Skaláris szorzat kifejtése',
        latexContent: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos \\gamma \\implies c^2 = a^2 + b^2 - 2ab \\cos \\gamma',
        explanation: 'A skaláris szorzat definíciója alapján megkapjuk a koszinusztételt.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mikor adhat a szinusztétel 2 megoldást egy háromszög kiszámításakor?',
        answer: 'Ha két oldal és a rövidebbik oldallal szemközti szög van megadva. Ekkor a szinuszfüggvényből hegyes- és tompaszög is adódhat (sin α = sin(180°-α)).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Háromszög-egyenlőtlenség, szögek, Szinusz- és Koszinusztétel átfogó ismertetése.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Szinusztétel vagy Koszinusztétel szabatos kimondása.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Szinusztétel vagy Koszinusztétel hibátlan szigorú bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Háromszög hiányzó oldalainak/szögeinek kiszámítása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Geodézia (háromszögelés), erővektorok felbontása fizikában, Arisztarkhosz mérései.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Szabatos trigonometrikus nyelvhasználat.' }
    ],
    applications: [
      {
        title: 'Kilátó magasságának mérése',
        problem: 'András és Béla 200 m-re állnak egymástól. A tornyot András 42°-os, Béla 33°-os szögben látja. Milyen magas a torony?',
        solutionLatex: 'c \\cdot \\operatorname{tg} 42^\\circ = (c + 200) \\operatorname{tg} 33^\\circ \\implies c = 517{,}46 \\text{ m} \\implies h = 517{,}46 \\operatorname{tg} 42^\\circ = 465{,}92 \\text{ m}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Trigonometria fejezet, 8. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 14. Tétel (90-93. oldal): A Szinusztételnél mindhárom (hegyes-, tompa-, derékszögű) esetet érdemes megemlíteni!',
    historicalContext: 'Arisztarkhosz (Kr. e. 3. század) görög csillagász a szögfüggvények őseivel számította ki a Nap és a Hold Földtől való távolságát.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-15',
    number: 15,
    title: 'Egybevágósági transzformációk, alakzatok egybevágósága. Szimmetria. Hasonlósági transzformációk. Hasonló síkidomok kerülete, területe, hasonló testek felszíne, térfogata. A hasonlóság alkalmazása síkgeometriai tételek bizonyításában',
    category: 'Geometria és trigonometria',
    tags: ['Transzformációk', 'Egybevágóság', 'Hasonlóság', 'Párhuzamos szelők', 'Területarány'],
    difficulty: 'Kiemelt emelt',
    summary: 'Egybevágósági transzformációk (tengelyes tükrözözés, forgatás, középpontos tükrözés, eltolás). Szimmetriák. Hasonlósági transzformációk (középpontos hasonlóság). Hasonló síkidomok kerület- ($k$), terület- ($k^2$), hasonló testek felszín- ($k^2$) és térfogataránya ($k^3$). Párhuzamos szelők tétele.',
    statementLatex: '\\frac{K_1}{K_2} = k, \\quad \\frac{T_1}{T_2} = k^2, \\quad \\frac{A_1}{A_2} = k^2, \\quad \\frac{V_1}{V_2} = k^3',
    conditionsLatex: 'k > 0 \\text{ hasonlósági arány}',
    requiredDefinitions: [
      {
        term: 'Hasonlósági transzformáció',
        definitionLatex: 'P\'Q\' = k \\cdot PQ \\quad (k > 0)',
        explanation: 'Olyan geometriai transzformáció, amely aránytartó: bármely két pont képeinek távolsága az eredeti távolság k-szorosa.'
      },
      {
        term: 'Középpontos hasonlóság',
        definitionLatex: '\\vec{OP\'} = \\lambda \\vec{OP} \\quad (\\lambda \\neq 0)',
        explanation: 'Az O középpontból indított helyvektorokat λ-val megszorozva kapjuk a képpontokat.'
      }
    ],
    oralPresentationOutline: [
      'Geometriai transzformáció fogalma. Egybevágósági transzformációk (távolságtartó: tengelyes tükrözés, forgatás, középpontos tükrözés, eltolás). Invariáns tulajdonságok.',
      'Alakzatok egybevágósága és szimmetriája (tengelyes és középpontos szimmetria).',
      'Hasonlósági transzformációk (aránytartó), középpontos hasonlóság tulajdonságai.',
      'Háromszögek hasonlóságának 4 alapesete. Sokszögek hasonlósága.',
      'Hasonló síkidomok kerület- ($k$) és területaránya ($k^2$). Hasonló testek felszín- ($k^2$) és térfogataránya ($k^3$).',
      'Párhuzamos szelők tétele és párhuzamos szelőszakaszok tétele.',
      'Tétel bizonyítása hasonlósággal (pl. Befogótétel, Magasságtétel, Szögfelező-tétel vagy Területarány $k^2$).'
    ],
    proofTitle: 'Hasonló síkidomok területének aránya megegyezik a hasonlósági arány négyzetével: T_1 / T_2 = k^2',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Háromszögek területének felírása',
        latexContent: 'T_1 = \\frac{a_1 \\cdot m_1}{2}, \\quad T_2 = \\frac{a_2 \\cdot m_2}{2}',
        explanation: 'Felírjuk a két hasonló háromszög területképletét.'
      },
      {
        stepNumber: 2,
        title: 'Hasonlósági arány behelyettesítése',
        latexContent: 'a_1 = k \\cdot a_2, \\quad m_1 = k \\cdot m_2',
        explanation: 'A hasonlóság miatt a megfelelő oldalak és a hozzájuk tartozó magasságok aránya is k.'
      },
      {
        stepNumber: 3,
        title: 'Területek hányadosának képezése',
        latexContent: '\\frac{T_1}{T_2} = \\frac{\\frac{(k \\cdot a_2)(k \\cdot m_2)}{2}}{\\frac{a_2 \\cdot m_2}{2}} = k^2',
        explanation: 'Egyszerűsítés után pontosan k²-et kapunk. Általános sokszögekre háromszögekre bontással adódik.'
      }
    ],
    examinerTraps: [
      {
        question: 'Ha egy kocka éleit duplájára (2x) növeljük, hányszorosára nő a térfogata?',
        answer: '8-szorosára! Mivel V₁/V₂ = k³, és k = 2, így 2³ = 8-szorosára nő.',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Egybevágóság, hasonlóság, k/k²/k³ arányok és szelőtétel rendszerezett bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Hasonlósági transzformáció vagy középpontos hasonlóság pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Kiválasztott síkgeometriai tétel hibátlan hasonlóságos bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Körök külső érintőivel vagy terület/térfogataránnyal kapcsolatos feladat.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Építészeti alaprajzok, térkép méretaránya, fotózás/vetítés, babilóniai cseréptöredékek.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz geometriai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Érintkező körök külső érintője',
        problem: 'Egy 7 és egy 12 egység sugarú kör kívülről érinti egymást. Milyen messze van a középpontokat összekötő egyenes az érintők metszéspontjától?',
        solutionLatex: '\\frac{r_1}{r_2} = \\frac{d}{d + 19} \\implies \\frac{7}{12} = \\frac{d}{d + 19} \\implies d = 26{,}6, \\quad d_{össz} = 45{,}6 \\text{ egység}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Geometria fejezet, 7-8. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 15. Tétel (94-100. oldal): Mindig hangsúlyozd ki a kerület (k), terület/felszín (k²) és térfogat (k³) arányok közötti különbséget!',
    historicalContext: 'Irán területén talált 4000 éves babilóniai agyagcserepek tanúsága szerint a hasonlóság fogalmát már az ókori Keleten is használták az építészetben.',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-16',
    number: 16,
    title: 'Konvex sokszögek tulajdonságai. Szabályos sokszögek. Gráfok',
    category: 'Gráfelmélet és statisztika',
    tags: ['Sokszögek', 'Szabályos sokszögek', 'Gráfelmélet', 'Euler-kör', 'Fokszámtétel'],
    difficulty: 'Közepes',
    summary: 'Konvex sokszögek átlói [n(n-3)/2], belső szögek összege [(n-2)180°] és külső szögek összege (360°). Szabályos sokszögek szimmetriái, beírt/köré írt köre. Gráfelméleti alapfogalmak (csúcs, él, fokszám, séta, út, kör, fa). Fokszámtétel. Euler-vonal és Euler-kör.',
    statementLatex: '\\sum \\text{deg}(v_i) = 2 |E|, \\quad A = \\frac{n(n-3)}{2}, \\quad S_{belső} = (n-2)180^\\circ',
    conditionsLatex: 'n \\ge 3, n \\in \\mathbb{N}',
    requiredDefinitions: [
      {
        term: 'Gráf és Fokszám',
        definitionLatex: 'G = (V, E), \\quad \\text{deg}(v) = |\\{e \\in E \\mid v \\in e\\}|',
        explanation: 'A gráf csúcsok (V) és őket összekötő élek (E) halmaza. Egy csúcs fokszáma a belőle induló élek száma.'
      },
      {
        term: 'Fagráf (Fa)',
        definitionLatex: 'G \\text{ összefüggő és körmentes } \\iff |E| = |V| - 1',
        explanation: 'Olyan összefüggő gráf, amely nem tartalmaz kört. n csúcsú fának n-1 éle van.'
      }
    ],
    oralPresentationOutline: [
      'Konvex sokszög fogalma. Átlók száma, belső és külső szögek összegének levezetése.',
      'Szabályos sokszögek tulajdonságai (oldalak/szögek egyenlősége, szimmetriatengelyek, beírt és köré írt kör).',
      'Gráfelmélet alapfogalmai (csúcs, él, fokszám, hurokél, többszörös él, egyszerű gráf, teljes gráf, izomorfizmus, komplementer).',
      'Séta, vonal, út, kör, Euler-vonal, Euler-kör, Hamilton-út, Hamilton-kör.',
      'Fagráfok tulajdonságai (fa, levél, fakritériumok).',
      'Tétel: A gráfok fokszámtételének bizonyítása (fokszámok összege = 2 · élek száma) ÉS/VAGY Átlók száma / Belső szögek összege.'
    ],
    proofTitle: 'Gráfok fokszámtétele: a csúcsok fokszámainak összege az élek számának kétszerese',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Élek és csúcsok kapcsolata',
        latexContent: 'e = (u, v) \\in E',
        explanation: 'Minden e él pontosan két csúcsot (u és v) köt össze.'
      },
      {
        stepNumber: 2,
        title: 'Összegzés az élek hozzájárulása alapján',
        latexContent: '\\sum_{v \\in V} \\text{deg}(v) = 2 |E|',
        explanation: 'Amikor az összes csúcs fokszámát összeadjuk, minden egyes élt pontosan kétszer számolunk be (mindkét végpontjánál egyszer-egyszer).'
      },
      {
        stepNumber: 3,
        title: 'Következmény a páratlan fokszámú csúcsokra',
        latexContent: '\\text{A páratlan fokszámú csúcsok száma páros.}',
        explanation: 'Mivel a fokszámok összege páros (2|E|), a páratlan tagok száma csak páros lehet.'
      }
    ],
    examinerTraps: [
      {
        question: 'Létezhet-e olyan egyszerű gráf, amelyben minden csúcs fokszáma különböző?',
        answer: 'Nem! A Skatulyaelv miatt minden legalább 2 csúcsú egyszerű gráfban van legalább két azonos fokszámú csúcs.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Sokszögek, szabályos sokszögek és gráfelmélet átfogó, strukturált bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Gráf, fokszám vagy fagráf hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Fokszámtétel vagy az átlók számának szabatos bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Gráfelméleti feladat (pl. táncpartnerek) hibátlan megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Königsbergi hidak (Euler), hálózattervezés, Erdős-szám, áramkörök.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz gráfelméleti és geometriai nyelvhasználat.' }
    ],
    applications: [
      {
        title: 'Táncpartnerek gráfelméleti feladata',
        problem: '10 ember táncolt egy buliban. A partnerek száma: 5,5,5,4,4,3,3,3,3 és x. Hány partnerrel táncolt a 10. ember?',
        solutionLatex: '\\sum \\text{deg}(v) = 5+5+5+4+4+3+3+3+3+x = 35+x = 2|E| \\implies x \\text{ páratlan } \\implies x = 3 \\text{ partner.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Geometria és gráfelmélet fejezet, 8. és 12. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 16. Tétel (101-107. oldal): A königsbergi hidak problémáját és az Euler-kör létezésének feltételét említsd meg!',
    historicalContext: 'Leonhard Euler 1736-ban oldotta meg a königsbergi hidak problémáját, megalapozva a gráfelméletet. Rényi Alfréd és Erdős Pál a véletlen gráfok elméletét alkották meg.',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-17',
    number: 17,
    title: 'A kör és részei. Kerületi szög, középponti szög, látószög. Húrnégyszögek, érintőnégyszögek',
    category: 'Geometria és trigonometria',
    tags: ['Kör', 'Kerületi szög', 'Középponti szög', 'Húrnégyszög', 'Érintőnégyszög', 'Látószög'],
    difficulty: 'Kiemelt emelt',
    summary: 'A kör elemei (sugár, átmérő, húr, szelő, érintő, körív, körcikk, körszelet). Kerületi és középponti szögek tétele. Érintőszárú kerületi szög. Látószögkörív. Húrnégyszögek tétele (szemközti szögek összege 180°). Érintőnégyszögek tétele (szemközti oldalak összege egyenlő). Érintő- és szelőszakaszok tétele.',
    statementLatex: '\\beta = 2 \\alpha, \\quad \\alpha + \\gamma = \\beta + \\delta = 180^\\circ, \\quad a + c = b + d',
    conditionsLatex: '\\text{adott körívre illeszkedő szögek}',
    requiredDefinitions: [
      {
        term: 'Húrnégyszög',
        definitionLatex: 'ABCD \\text{ húrnégyszög } \\iff \\exists k \\text{ kör, hogy } A, B, C, D \\in k',
        explanation: 'Olyan konvex négyszög, amelynek minden csúcsa egy körön van (van köré írható köre).'
      },
      {
        term: 'Érintőnégyszög',
        definitionLatex: 'ABCD \\text{ érintőnégyszög } \\iff \\exists k \\text{ kör, hogy } a, b, c, d \\text{ érintik } k\\text{-t}',
        explanation: 'Olyan konvex négyszög, amelynek minden oldala érint egy kört (van beírható köre).'
      }
    ],
    oralPresentationOutline: [
      'A kör elemeinek definíciója (sugár, átmérő, húr, szelő, érintő, körív, körcikk, körszelet). Kör kerülete, területe, ívhossz, körcikk területe.',
      'Tétel: Kerületi és középponti szögek tétele (azonos ívhez tartozó középponti szög kétszerese a kerületi szögnek). Érintőszárú kerületi szög.',
      'Látószög és látószögkörív fogalma, szerkesztése.',
      'Tétel: Húrnégyszögek tétele és megfordítása (szemközti szögek összege 180°).',
      'Tétel: Érintőnégyszögek tétele és megfordítása (szemközti oldalak összege egyenlő: a+c = b+d).',
      'Érintő- és szelőszakaszok tétele ($PE^2 = PA \\cdot PB$).'
    ],
    proofTitle: 'Kerületi és középponti szögek tételének bizonyítása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'I. eset: A kör középpontja a kerületi szög egyik szárán van',
        latexContent: '\\angle AOB = 2 \\alpha',
        explanation: 'A COB egyenlő szárú háromszög külső szöge az AOB középponti szög, így AOB = α + α = 2α.'
      },
      {
        stepNumber: 2,
        title: 'II. eset: A középpont a szög belsejében van',
        latexContent: '\\alpha = \\alpha_1 + \\alpha_2 \\implies \\beta = 2\\alpha_1 + 2\\alpha_2 = 2\\alpha',
        explanation: 'A CO átmérővel két részre bontjuk a szöget, és az I. esetet alkalmazzuk mindkét részre.'
      },
      {
        stepNumber: 3,
        title: 'III. eset: A középpont a szögön kívül van',
        latexContent: '\\alpha = \\alpha_1 - \\alpha_2 \\implies \\beta = 2\\alpha_1 - 2\\alpha_2 = 2\\alpha',
        explanation: 'Két kerületi szög különbségeként írjuk fel a szöget.'
      }
    ],
    examinerTraps: [
      {
        question: 'Minden deltoid érintőnégyszög-e, és minden deltoid húrnégyszög-e?',
        answer: 'Minden deltoid érintőnégyszög (mert a szögfelezői egy pontban metszik egymást), de csak a derékszögű deltoid húrnégyszög!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Kör elemei, kerületi/középponti szögek, húr- és érintőnégyszögek szabatos felépítése.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Húrnégyszög vagy érintőnégyszög hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Kerületi-középponti szögek tétele vagy Húrnégyszögek tételének szigorú bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Körcikkbe írt kör vagy érintőszeletes feladat levezetése.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Autó ékszíj hossza, fagylaltgombóc tölcsérben, színházi páholy látószöge.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz körgeometriai nyelvhasználat.' }
    ],
    applications: [
      {
        title: 'Körcikkbe írt kör területe',
        problem: 'Egy 60°-os középponti szögű 300 cm² területű körcikkbe kört írunk, ami érinti a sugarakat és a körívet. Mekkora a beírt kör területe?',
        solutionLatex: '\\sin 30^\\circ = \\frac{r}{R-r} = \\frac{1}{2} \\implies R = 3r. \\quad T_{körcikk} = \\frac{R^2 \\pi}{6} = 300 \\implies T_{kör} = r^2 \\pi = 200 \\text{ cm}^2'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Geometria fejezet, 7-8. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 17. Tétel (108-115. oldal): A kerületi-középponti szögek tételénél mind a 4 esetet (beleértve az érintőszárút) mutasd be!',
    historicalContext: 'Hippokratész (Kr. e. 5. század) görög matematikus fedezte fel a kerületi és középponti szögek közötti kapcsolatot és a híres "Hippokratész-holdacskákat".',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-18',
    number: 18,
    title: 'Vektorok, vektorműveletek. Vektorfelbontási tétel. Vektorok koordinátái. Skaláris szorzat',
    category: 'Koordinátageometria és vektorok',
    tags: ['Vektorok', 'Skaláris szorzat', 'Vektorfelbontás', 'Koordináták', 'Láncszabály'],
    difficulty: 'Közepes',
    summary: 'Vektor fogalma (irányított szakasz, hossz, irány). Nullvektor, egységvektor, helyvektor, irányvektor, normálvektor. Vektorműveletek (összeadás: háromszög/paralelogramma/láncszabály, kivonás, skalárral szorzás). Vektorfelbontási tétel (bázis). Skaláris szorzat definíciója és koordinátás alakja.',
    statementLatex: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos \\varphi = a_1 b_1 + a_2 b_2',
    conditionsLatex: '\\vec{a}(a_1, a_2), \\vec{b}(b_1, b_2)',
    requiredDefinitions: [
      {
        term: 'Két vektor Skaláris Szorzata',
        definitionLatex: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos \\varphi',
        explanation: 'A két vektor hosszának és a közbezárt szögük koszinuszának szorzata. Eredménye egy valós szám (skalár).'
      },
      {
        term: 'Egyértelmű vektorfelbontás tétele (2D Bázis)',
        definitionLatex: '\\vec{v} = v_1 \\vec{i} + v_2 \\vec{j}',
        explanation: 'Bármely síkbeli vektor egyértelműen felbontható két nem egyállású (pl. merőleges egységvektor) bázisvektor lineáris kombinációjaként.'
      }
    ],
    oralPresentationOutline: [
      'Vektor fogalma, jellemzői (nagyság, állás, irány). Speciális vektorok (nullvektor, egységvektor, ellentett vektor, helyvektor, irányvektor, normálvektor).',
      'Vektorműveletek geometriailag: összeadás (háromszög-, paralelogramma-módszer, láncszabály), kivonás, szorzás skalárral.',
      'Vektorfelbontási tétel síkban (lineáris kombináció, bázis). Vektor koordinátái derékszögű koordináta-rendszerben.',
      'Műveletek koordinátákkal (összeg, különbség, számszoros, szakasz felezőpontja, súlypont).',
      'Skaláris szorzat definíciója és tulajdonságai (kommutatív, disztributív, nem asszociatív). Merőlegesség feltétele ($\\vec{a} \\cdot \\vec{b} = 0$).',
      'Tétel: Skaláris szorzat koordinátás alakjának bizonyítása ($\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$) ÉS/VAGY Két pont távolságának képlete.'
    ],
    proofTitle: 'A skaláris szorzat koordinátás alakjának bizonyítása: a · b = a_1 b_1 + a_2 b_2',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Vektorok felírása i és j bázisvektorokkal',
        latexContent: '\\vec{a} = a_1 \\vec{i} + a_2 \\vec{j}, \\quad \\vec{b} = b_1 \\vec{i} + b_2 \\vec{j}',
        explanation: 'A vektorokat felbontjuk az i(1,0) és j(0,1) merőleges egységvektorok komponenseire.'
      },
      {
        stepNumber: 2,
        title: 'Skaláris szorzás disztributivitása',
        latexContent: '\\vec{a} \\cdot \\vec{b} = (a_1 \\vec{i} + a_2 \\vec{j}) \\cdot (b_1 \\vec{i} + b_2 \\vec{j}) = a_1 b_1 \\vec{i}^2 + a_1 b_2 \\vec{i} \\cdot \\vec{j} + a_2 b_1 \\vec{j} \\cdot \\vec{i} + a_2 b_2 \\vec{j}^2',
        explanation: 'Felbontjuk a zárójeleket a disztributivitás alapján.'
      },
      {
        stepNumber: 3,
        title: 'Bázisvektorok skalárszorzatai',
        latexContent: '\\vec{i}^2 = 1, \\quad \\vec{j}^2 = 1, \\quad \\vec{i} \\cdot \\vec{j} = 0 \\implies \\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2',
        explanation: 'Mivel i és j merőlegesek (i·j = 0) és egységnyi hosszúak (i² = 1, j² = 1), megkapjuk a koordinátás képletet.'
      }
    ],
    examinerTraps: [
      {
        question: 'Asszociatív-e a skaláris szorzat: (a · b) · c = a · (b · c)?',
        answer: 'Nem! Értelmetlen a kérdés, mert a·b egy skalár (szám), így (a·b)·c a c vektor számszorosa lesz (c irányú), míg a·(b·c) az a vektor számszorosa (a irányú).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Vektorok, műveletek, bázisfelbontás és skaláris szorzat átfogó bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Skaláris szorzat hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Skaláris szorzat koordinátás alakjának vagy a szakaszfelező képletének szigorú levezetése.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Vektorműveletes vagy merőlegességi feladat megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Fizikai munka ($W = \\vec{F} \\cdot \\vec{s}$), erővektorok felbontása, Hamilton ír matematikus.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz vektoranalízis szaknyelv.' }
    ],
    applications: [
      {
        title: 'Fizikai munkavégzés kiszámítása',
        problem: 'Mekkora munkát végez az F(30, 40) N erő, ha a testet s(5, 2) m vektorral mozdítja el?',
        solutionLatex: 'W = \\vec{F} \\cdot \\vec{s} = F_1 s_1 + F_2 s_2 = 30 \\cdot 5 + 40 \\cdot 2 = 150 + 80 = 230 \\text{ Joule}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Koordinátageometria fejezet, 9. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 18. Tétel (116-123. oldal): Mindig hangsúlyozd ki, hogy a skaláris szorzat eredménye SZÁM, nem vektor!',
    historicalContext: 'William Rowan Hamilton (1805–1865) ír matematikus és csillagász használta először a vektor szót (latin "vector" = hordozó).',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-19',
    number: 19,
    title: 'Szakaszok és egyenesek a koordinátasíkon. Párhuzamos és merőleges egyenesek. Elsőfokú egyenlőtlenségek, egyenletrendszerek grafikus megoldása',
    category: 'Koordinátageometria és vektorok',
    tags: ['Koordinátageometria', 'Egyenes egyenlete', 'Normálvektor', 'Irányvektor', 'Meredekség'],
    difficulty: 'Közepes',
    summary: 'Szakasz hossza és felezőpontja. Egyenes egyenleteinek alakjai (normálvektoros Ax+By=Ax₀+By₀, irányvektoros, iránytangenses/meredekséges y-y₀=m(x-x₀), tengelymetszetes). Párhuzamos és merőleges egyenesek feltételei. Elsőfokú egyenlőtlenségek és egyenletrendszerek grafikus megoldása.',
    statementLatex: 'A(x - x_0) + B(y - y_0) = 0, \\quad m = \\operatorname{tg} \\alpha, \\quad m_1 \\cdot m_2 = -1 \\quad (e_1 \\bot e_2)',
    conditionsLatex: '\\vec{n}(A, B) \\neq \\vec{0}',
    requiredDefinitions: [
      {
        term: 'Egyenes Normálvektora és Irányvektora',
        definitionLatex: '\\vec{n}(A, B) \\bot e, \\quad \\vec{v}(v_1, v_2) \\parallel e',
        explanation: 'A normálvektor az egyenesre merőleges, az irányvektor az egyenessel párhuzamos nullvektortól különböző vektor.'
      },
      {
        term: 'Egyenes Meredeksége (Iránytangens)',
        definitionLatex: 'm = \\operatorname{tg} \\alpha = \\frac{v_2}{v_1} = -\\frac{A}{B} \\quad (B \\neq 0)',
        explanation: 'Az egyenes x tengely pozitív irányával bezárt α irányszögének tangense.'
      }
    ],
    oralPresentationOutline: [
      'A koordinátageometria alapgondolata (Descartes): geometriai alakzatok leírása algebrai egyenletekkel.',
      'Szakaszok a koordinátasíkon: távolság képlete $AB = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$, felezőpont $F((x_1+x_2)/2, (y_1+y_2)/2)$, osztópontok.',
      'Egyenes meghatározó adatai (2 pont; 1 pont + irányvektor; 1 pont + normálvektor; 1 pont + meredekség).',
      'Egyenes egyenletének alakjai: normálvektoros ($Ax+By=Ax_0+By_0$), irányvektoros, meredekséges ($y-y_0=m(x-x_0)$), tengelymetszetes.',
      'Párhuzamos és merőleges egyenesek feltételei (normálvektorok kollinearitása vs. merőlegessége $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$, $m_1 \\cdot m_2 = -1$). Pont és egyenes távolsága.',
      'Tétel bizonyítása (Normálvektoros vagy Meredekséges egyenlet levezetése).',
      'Elsőfokú egyenlőtlenségek és egyenletrendszerek grafikus megoldása (félsíkok metszete, lineáris programozás).'
    ],
    proofTitle: 'Az egyenes normálvektoros egyenletének levezetése: A(x - x_0) + B(y - y_0) = 0',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Adott pont és futópont helyvektorai',
        latexContent: 'P_0(x_0, y_0) \\in e, \\quad P(x, y) \\in e \\implies \\vec{P_0 P} = (x - x_0, y - y_0)',
        explanation: 'Veszünk egy rögzített P_0 pontot és az egyenes tetszőleges P futópontját.'
      },
      {
        stepNumber: 2,
        title: 'Merőlegesség feltétele a normálvektorral',
        latexContent: '\\vec{n}(A, B) \\bot \\vec{P_0 P} \\iff \\vec{n} \\cdot \\vec{P_0 P} = 0',
        explanation: 'A normálvektor merőleges az egyenes bármely P_0 P elmozdulásvektorára, így skaláris szorzatuk 0.'
      },
      {
        stepNumber: 3,
        title: 'Skaláris szorzat kiszámítása',
        latexContent: 'A(x - x_0) + B(y - y_0) = 0 \\implies Ax + By = Ax_0 + By_0',
        explanation: 'Kifejtjük a skaláris szorzatot koordinátákkal, megkapva a normálvektoros egyenletet.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mely egyeneseknek nincs meredeksége (m)?',
        answer: 'Az y tengellyel párhuzamos (x = c alakú) egyeneseknek, mert irányszögük α = 90°, és tg 90° nincs értelmezve.',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Szakaszok, egyenes egyenletének alakjai, merőlegesség és grafikus megoldások bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Normálvektor, irányvektor vagy meredekség hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'A normálvektoros vagy a meredekséges egyenesegyenlet szigorú levezetése.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Egyenes egyenletének felírása vagy egyenletrendszer grafikus megoldása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Lineáris programozás, légi navigáció, GPS útvonaltervezés, René Descartes.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz koordinátageometriai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Merőleges egyenes egyenlete',
        problem: 'Írd fel a P(14, 2) ponton átmenő, e: 3x + 2y = 7 egyenesre merőleges egyenes egyenletét!',
        solutionLatex: '\\vec{n}_e(3, 2) = \\vec{v}_f \\implies \\vec{n}_f(-2, 3) \\implies -2x + 3y = -2(14) + 3(2) \\implies 2x - 3y = 22'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Koordinátageometria fejezet, 9. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 19. Tétel (124-128. oldal): A normálvektorból irányvektorba váltást (koordináták cseréje + egyik előjele ellentett) mindig mutasd be!',
    historicalContext: 'René Descartes (1596–1650) francia filozófus és matematikus hozta létre az analitikus geometriát ("Géométrie", 1637), összekötve az algebrát a geometriával.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-20',
    number: 20,
    title: 'A kör és a parabola elemi úton és a koordinátasíkon. Kör és egyenes, parabola és egyenes kölcsönös helyzete. Másodfokú egyenlőtlenségek grafikus megoldása',
    category: 'Koordinátageometria és vektorok',
    tags: ['Kúpseletek', 'Kör egyenlete', 'Parabola egyenlete', 'Érintő', 'Másodfokú egyenlőtlenség'],
    difficulty: 'Kiemelt emelt',
    summary: 'Kör és parabola elemi definíciója és kanonikus egyenlete a koordinátasíkon [(x-u)²+(y-v)²=r² és (x-u)²=2p(y-v)]. Kölcsönös helyzet egyenessel (szelő, érintő, kívül fekvő) diszkrimináns vizsgálattal (D>0, D=0, D<0). Másodfokú egyenlőtlenségek grafikus megoldása.',
    statementLatex: '(x - u)^2 + (y - v)^2 = r^2, \\quad (x - u)^2 = 2p(y - v)',
    conditionsLatex: 'C(u, v) \\text{ középpont}, r > 0, p > 0 \\text{ paraméter}',
    requiredDefinitions: [
      {
        term: 'Kör Egyenlete',
        definitionLatex: '(x - u)^2 + (y - v)^2 = r^2',
        explanation: 'A C(u, v) középpontú, r sugarú körvonal pontjainak koordinátái által kielégített egyenlet (Pitagorasz-tételből).'
      },
      {
        term: 'Parabola mint Kúpszelet',
        definitionLatex: 'y = \\frac{1}{2p}(x - u)^2 + v \\quad (p > 0)',
        explanation: 'A fókuszponttól és a vezéregyenestől egyenlő távolságra lévő pontok mértani helye.'
      }
    ],
    oralPresentationOutline: [
      'Kúpszeletek fogalma (Apollóniosz). A kör és a parabola elemi definíciója.',
      'Tétel: A kör kanonikus egyenletének levezetése a két pont távolságának képletéből.',
      'Tétel: A tengelyponti tengelyállású parabola egyenletének levezetése ($y = \\frac{1}{2p}x^2$).',
      'Kör és egyenes kölcsönös helyzete (módszerek: egyenletrendszer diszkriminánsa D>0, D=0, D<0; vagy középpont és egyenes d távolsága vs. r).',
      'Parabola és egyenes kölcsönös helyzete (1 közös pont: érintő VAGY tengellyel párhuzamos szelő; 2 közös pont: szelő; 0 pont: kívül fekvő).',
      'Másodfokú egyenlőtlenségek grafikus megoldása (parabola ábrázolása, zérushelyek, előjeltábla, x tengely feletti/alatti tartomány).'
    ],
    proofTitle: 'A tengelyponti tengelyállású parabola egyenletének levezetése: y = x² / (2p)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Fókuszpont és vezéregyenes koordinátái',
        latexContent: 'F\\left(0, \\frac{p}{2}\\right), \\quad v: y = -\\frac{p}{2}',
        explanation: 'Az origó a tengelypont, a fókuszpont az y tengelyen van, a vezéregyenes y = -p/2.'
      },
      {
        stepNumber: 2,
        title: 'Távolságok egyenlőségének felírása',
        latexContent: 'd(Q, F) = d(Q, v) \\implies \\sqrt{x^2 + \\left(y - \\frac{p}{2}\\right)^2} = y + \\frac{p}{2}',
        explanation: 'Alkalmazzuk a parabola elemi definícióját a Q(x, y) futópontra.'
      },
      {
        stepNumber: 3,
        title: 'Négyzetre emelés és egyszerűsítés',
        latexContent: 'x^2 + y^2 - py + \\frac{p^2}{4} = y^2 + py + \\frac{p^2}{4} \\implies x^2 = 2py \\implies y = \\frac{1}{2p}x^2',
        explanation: 'Négyzetre emelünk és összevonjuk az azonos tagokat.'
      }
    ],
    examinerTraps: [
      {
        question: 'Ha egy egyenesnek 1 közös pontja van a parabolával, akkor az feltétlenül érintő-e?',
        answer: 'Nem! Ha az egyenes párhuzamos a parabola tengelyével (pl. x = c), akkor 1 közös pontja van, de az szelő, nem érintő!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Kör és parabola egyenletei, kölcsönös helyzetek és másodfokú egyenlőtlenségek felépítése.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Kör vagy parabola egyenletének hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'A kör vagy a parabola egyenletének szigorú levezetése.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Kör/parabola és egyenes metszéspontjának kiszámítása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Parabolaantenna, fényszórók foncsora, műholdak pályája, Apollóniosz.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz analitikus geometriai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Parabola és kör kölcsönös helyzete',
        problem: 'Milyen helyzetű egymáshoz képest az y = x² parabola és az x² + (y-1)² = 1 kör?',
        solutionLatex: 'y + (y-1)^2 = 1 \\implies y + y^2 - 2y + 1 = 1 \\implies y^2 - y = 0 \\implies y_1 = 0 (x=0), y_2 = 1 (x=\\pm 1). \\text{ 3 metszéspont.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Koordinátageometria fejezet, 10. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 20. Tétel (129-135. oldal): A parabola gyújtóponti tulajdonságát (párhuzamos sugarak fókuszba gyűjtése) említsd meg!',
    historicalContext: 'Pergai Apollóniosz (Kr. e. 262–190) írta a "Kúpszeletek" című 8 kötetes művet, ő adta a parabola, ellipszis és hiperbola nevet az alakzatoknak.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-21',
    number: 21,
    title: 'Térelemek távolsága és szöge. Térbeli alakzatok. Felszín- és térfogatszámítás',
    category: 'Geometria és trigonometria',
    tags: ['Térgeometria', 'Poliéderek', 'Euler-tétel', 'Hasáb', 'Gúla', 'Forgástestek'],
    difficulty: 'Közepes',
    summary: 'Térelemek (pont, egyenes, sík) kölcsönös helyzete, távolsága és hajlásszöge. Poliéderek (hasáb, gúla, csonkagúla) és forgástestek (henger, kúp, csonkakúp, gömb). Convex poliéderekre Euler-féle c+l=e+2 tétel. Felszín- és térfogatképletek.',
    statementLatex: 'c + l = e + 2, \\quad V_{\\text{gúla}} = \\frac{T \\cdot m}{3}, \\quad V_{\\text{gömb}} = \\frac{4}{3}\\pi r^3, \\quad V_{\\text{csonkagúla}} = \\frac{m}{3}(T + \\sqrt{Tt} + t)',
    conditionsLatex: 'c: \\text{csúcsok}, l: \\text{lapok}, e: \\text{élek}',
    requiredDefinitions: [
      {
        term: 'Euler-féle poliédertétel',
        definitionLatex: 'c + l = e + 2',
        explanation: 'Bármely konvex poliéder csúcsainak (c) és lapjainak (l) összege 2-vel nagyobb az élek (e) számánál.'
      },
      {
        term: 'Hasáb és Gúla',
        definitionLatex: 'V_{\\text{hasáb}} = T \\cdot m, \\quad V_{\\text{gúla}} = \\frac{T \\cdot m}{3}',
        explanation: 'Hasáb: két párhuzamos egybevágó sokszöglappal határolt poliéder. Gúla: egy sokszögalappal és egy csúccsal határolt poliéder.'
      }
    ],
    oralPresentationOutline: [
      'Térelemek (pont, egyenes, sík) kölcsönös helyzete a térben (kitérő egyenesek!).',
      'Térelemek távolsága (két kitérő egyenes távolsága = normáltranszverzális hossza) és hajlásszöge (egyenes és sík, két sík hajlásszöge).',
      'Térbeli alakzatok osztályozása: Poliéderek vs. Forgástestek. Konvex poliéderek és az Euler-féle c+l=e+2 tétel.',
      'Hasáb, henger, gúla, kúp, csonkagúla, csonkakúp felszín- és térfogatszámítása.',
      'Gömb felszíne ($A = 4\\pi r^2$) és térfogata ($V = \\frac{4}{3}\\pi r^3$).',
      'Tétel bizonyítása (Csonkagúla/csonkakúp térfogata hasonlósággal ODER Gömb térfogata integrálással/Cavalieri-elvvel).'
    ],
    proofTitle: 'A csonkagúla térfogatképletének levezetése hasonlósággal: V = m/3 · (T + √(Tt) + t)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Csonkagúla mint két gúla különbsége',
        latexContent: 'V = V_1 - V_2 = \\frac{T \\cdot m_1}{3} - \\frac{t \\cdot m_2}{3}',
        explanation: 'A csonkagúla térfogatát megkapjuk, ha a teljes gúla térfogatából kivonjuk a levágott kisgúla térfogatát.'
      },
      {
        stepNumber: 2,
        title: 'Hasonlóság alkalmazása',
        latexContent: '\\frac{m_1}{m_2} = \\sqrt{\\frac{T}{t}} = \\lambda \\implies m_1 = m_2 \\sqrt{\\frac{T}{t}}, \\quad m = m_1 - m_2',
        explanation: 'A magasságok aránya a területek arányának négyzetgyökével (hasonlósági arány λ) egyenlő.'
      },
      {
        stepNumber: 3,
        title: 'Algebrai átalakítás',
        latexContent: 'V = \\frac{m}{3} \\left( T + \\sqrt{T \\cdot t} + t \\right)',
        explanation: 'Behelyettesítés és kiemelés után megkapjuk a csonkagúla ismert térfogatképletét.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mi a különbség két kitérő egyenes és két párhuzamos egyenes között?',
        answer: 'A párhuzamos egyenesek egy síkban vannak és nincs közös pontjuk. A kitérő egyenesek nincsenek egy síkban (és nincs közös pontjuk).',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Térelemek, poliéderek, forgástestek, felszín- és térfogatképletek rendszerezett bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Euler-tétel vagy gúla/hasáb hibátlan definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Csonkagúla térfogatképletének vagy a gömb térfogatának szigorú levezetése.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Összetett térgeometriai felszín/térfogat kiszámítása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Építészet (egyiptomi piramisok csonkagúlája), csomagolástechnika, kristálytan, Eukleidész.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz térgeometriai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Csonkakúp alakú pohár kapacitása',
        problem: 'Egy csonkakúp pohár alapkör átmérője 6 cm, fedőköré 11 cm, alkotója 8,5 cm. Mennyi narancslé fér bele a magasság 86%-áig?',
        solutionLatex: 'm = \\sqrt{8{,}5^2 - 2{,}5^2} = \\sqrt{66} \\approx 8{,}12 \\text{ cm} \\implies V \\approx 370 \\text{ cm}^3'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Stereometria (Térgeometria) fejezet, 10-11. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 21. Tétel (136-142. oldal): Az Euler-féle c+l=e+2 tételt ellenőrizd le kockára és tetraéderre a feleletben!',
    historicalContext: 'Eukleidész (Kr. e. 300) "Elemek" című művének XIII. kötete foglalkozik a szabályos testekkel (platóni testek). Leonhard Euler 1750-ben írta le a poliédertételt.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-22',
    number: 22,
    title: 'Területszámítás elemi úton és az integrálszámítás felhasználásával',
    category: 'Függvények és analízis',
    tags: ['Területszámítás', 'Határozott integrál', 'Newton-Leibniz', 'Hérón-képlet', 'Görbe alatti terület'],
    difficulty: 'Kiemelt emelt',
    summary: 'Síkikidomok területe elemi úton (területaxiómák, háromszögek, négyszögek, szabályos sokszögek, kör). Területszámítás integrálszámítással (Riemann-integrál, határozott integrál mint előjeles terület, Newton-Leibniz-formula). Két függvény által közrezárt terület.',
    statementLatex: 'T = \\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a), \\quad T = \\int_a^b |f(x) - g(x)| \\, dx',
    conditionsLatex: 'f \\text{ folytonos és korlátos } [a, b]-\\text{n}',
    requiredDefinitions: [
      {
        term: 'Határozott Integrál (Riemann-integrál)',
        definitionLatex: '\\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(\\xi_i) \\Delta x_i',
        explanation: 'Az alsó és felső Riemann-összegek közös határértéke. Nemnegatív f esetén megadja a függvénygörbe alatti területet.'
      },
      {
        term: 'Newton-Leibniz-formula',
        definitionLatex: '\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)',
        explanation: 'A határozott integrál kiszámításának alapvető tétele, ahol F az f függvény egy primitív függvénye (F\' = f).'
      }
    ],
    oralPresentationOutline: [
      'Síkikidomok területe elemi úton: területaxiómák (egységnégyzet $T=1$, egybevágó idomok területe egyenlő, additivitás).',
      'Elemi területképletek: háromszög ($ab\\sin\\gamma/2$, Hérón), négyszögek (deltoid, trapéz, paralelogramma, téglalap, húr/érintőnégyszög), szabályos sokszögek, kör.',
      'Területszámítás integrálszámítással: beírt és körülírt téglalapösszegek (Riemann-integrál).',
      'A határozott integrál mint előjeles terület. Zérushelyek szerepe (előjelváltásnál részekre bontás!).',
      'Tétel: Newton-Leibniz-formula kimondása.',
      'Két függvény grafikonja által közrezárt terület $T = \\int_a^b |f(x) - g(x)| dx$.',
      'Tétel bizonyítása (pl. Háromszög területe $T = \\frac{1}{2}ab\\sin\\gamma$ ODER $T = r\\cdot s$ ODER Parabola alatti terület integrállal).'
    ],
    proofTitle: 'A háromszög T = r · s területképletének bizonyítása (beírt kör sugarával)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Háromszög felbontása a beírt kör középpontjából',
        latexContent: 'T_{ABC} = T_{ABO} + T_{BCO} + T_{ACO}',
        explanation: 'Az O beírt kör középpontját összekötjük a csúcsokkal, így 3 kisebb háromszöget kapunk.'
      },
      {
        stepNumber: 2,
        title: 'Kisebb háromszögek magassága',
        latexContent: 'm_{AB} = r, \\quad m_{BC} = r, \\quad m_{AC} = r',
        explanation: 'Mivel az O pontból az oldalakra bocsátott merőlegesek a beírt kör sugarai, a magasságok mind r-rel egyenlők.'
      },
      {
        stepNumber: 3,
        title: 'Területek összegezése',
        latexContent: 'T = \\frac{c \\cdot r}{2} + \\frac{a \\cdot r}{2} + \\frac{b \\cdot r}{2} = r \\cdot \\frac{a+b+c}{2} = r \\cdot s',
        explanation: 'Kiemeljük r-et, és a félkerület s definícióját használva megkapjuk a T = r · s képletet.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mi a különbség a határozott integrál értéke és a függvénygörbe alatti terület között?',
        answer: 'Ha f(x) negatív értéket is felvesz az [a,b] intervallumon, az integrál az x tengely alatti területet negatív előjellel számolja (előjeles terület). A valódi területhez az x tengely alatti részek abszolút értékét kell venni!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Elemi területképletek, Riemann-integrál, Newton-Leibniz és görbék közötti terület felépítése.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Határozott integrál vagy Newton-Leibniz-formula hibátlan kimondása.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Kiválasztott elemi területképlet vagy integrálos tétel szigorú bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Parabola és egyenes által közrezárt terület integrálos kiszámítása.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Fizikai munkavégzés ($W=\\int F dx$), megtett út ($s=\\int v dt$), fogyasztói többlet mikroökonómiában.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz kalkulus és geometriai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Parabola és egyenes által közrezárt terület',
        problem: 'Határozd meg az f(x) = -x² + 8x - 7 parabola és a g(x) = x + 3 egyenes által közrezárt területet!',
        solutionLatex: '-x^2 + 8x - 7 = x + 3 \\implies x^2 - 7x + 10 = 0 \\implies x_1 = 2, x_2 = 5. \\quad T = \\int_2^5 (-x^2 + 7x - 10) dx = 4{,}5'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Integrálszámítás és Geometria fejezet, 6. és 7. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 22. Tétel (143-148. oldal): Zérushely jelenléténél ne felejtsd el szétbontani az integrálási intervallumot!',
    historicalContext: 'Gottfried Wilhelm Leibniz vezette be az integrál jelét (nyújtott S betű, a latin "summa" szóból). Archimédész már az ókorban kimerítéses módszerrel számította ki a parabola íve alatti területet.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-23',
    number: 23,
    title: 'Kombinációk. Binomiális tétel, a Pascal-háromszög. A valószínűség kiszámításának kombinatorikus modellje. A hipergeometrikus eloszlás',
    category: 'Kombinatorika és valószínűség',
    tags: ['Kombinatorika', 'Kombináció', 'Binomiális tétel', 'Pascal-háromszög', 'Hipergeometrikus eloszlás'],
    difficulty: 'Kiemelt emelt',
    summary: 'Ismétlés nélküli és ismétléses kombináció. Binomiális együtthatók és tulajdonságaik. Binomiális tétel. Pascal-háromszög felépítése és mintázatai. Klasszikus valószínűségi mező (P = K/Ö). Hipergeometrikus eloszlás (visszatevés nélküli mintavétel).',
    statementLatex: '(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k, \\quad C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}',
    conditionsLatex: 'a, b \\in \\mathbb{R}, n, k \\in \\mathbb{N}, k \\le n',
    requiredDefinitions: [
      {
        term: 'Ismétlés nélküli kombináció',
        definitionLatex: 'C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}',
        explanation: 'n különböző elemből k elemű csoportokat képezünk úgy, hogy az elemek sorrendje nem számít, és egy elemet csak egyszer választhatunk.'
      },
      {
        term: 'Hipergeometrikus eloszlás',
        definitionLatex: 'P(X = k) = \\frac{\\binom{M}{k} \\binom{N-M}{n-k}}{\\binom{N}{n}}',
        explanation: 'Visszatevés nélküli mintavétel valószínűsége: N elemből M selejtes, n-et kihúzva pontosan k selejtes kihúzásának esélye.'
      }
    ],
    oralPresentationOutline: [
      'Kombinatorika alapfogalmai. Kombináció definíciója (ismétlés nélküli és ismétléses).',
      'Binomiális együttható $\\binom{n}{k}$ tulajdonságai (szimmetria $\\binom{n}{k} = \\binom{n}{n-k}$, Pascal-azonosság $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$).',
      'Pascal-háromszög felépítése, sorok összege ($2^n$), kapcsolat a 11 hatványaival és a Fibonacci-számokkal.',
      'Tétel: Binomiális tétel kimondása és bizonyítása (kombinatorikus úton vagy teljes indukcióval).',
      'Klasszikus valószínűségi modell: $P(A) = \\frac{\\text{Kedvező események}}{\\text{Összes esemény}}$.',
      'Hipergeometrikus eloszlás képlete és alkalmazása visszatevés nélküli mintavételre.'
    ],
    proofTitle: 'A binomiális együtthatók összegének bizonyítása: ∑ (n felett k) = 2^n',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A binomiális tétel felírása',
        latexContent: '(a + b)^n = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\dots + \\binom{n}{n}b^n',
        explanation: 'Felírjuk az (a+b)^n kifejezést a binomiális tétel szerint.'
      },
      {
        stepNumber: 2,
        title: 'Speciális helyettesítés a = 1, b = 1',
        latexContent: '(1 + 1)^n = \\binom{n}{0}1^n + \\binom{n}{1}1^{n-1}1 + \\dots + \\binom{n}{n}1^n',
        explanation: 'Az a = 1 és b = 1 értékeket helyettesítjük be.'
      },
      {
        stepNumber: 3,
        title: 'Konklúzió',
        latexContent: '2^n = \\sum_{k=0}^n \\binom{n}{k} = \\binom{n}{0} + \\binom{n}{1} + \\dots + \\binom{n}{n}',
        explanation: 'Megkapjuk, hogy a binomiális együtthatók összege az n-edik sorban pontosan 2^n (az n elemű halmaz részhalmazainak száma).'
      }
    ],
    examinerTraps: [
      {
        question: 'Mikor alkalmazható a klasszikus valószínűségi modell (P = K/Ö)?',
        answer: 'Csak akkor, ha az eseménytér véges, és az elemi események mindegyike egyenlő valószínűséggel (szimmetrikusan) következik be!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Kombináció, Pascal-háromszög, Binomiális tétel és hipergeometrikus eloszlás átfogó bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Ismétlés nélküli kombináció vagy hipergeometrikus eloszlás pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'A binomiális tétel vagy a kombináció képletének szigorú bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Lottó/kártya vagy hipergeometrikus valószínűségi feladat hibátlan levezetése.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Ötöslottó (90 felett 5), minőségellenőrzés gyárban, szerencsejátékok, Blaise Pascal.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz kombinatorikai szaknyelv.' }
    ],
    applications: [
      {
        title: 'Golyóhúzási hipergeometrikus feladat',
        problem: 'Egy dobozban 12 golyó van, ebből 3 barna. Találomra kiválasztunk 3-at visszatevés nélkül. Mennyi a valószínűsége, hogy pontosan 2 barna lesz?',
        solutionLatex: 'P(X = 2) = \\frac{\\binom{3}{2} \\binom{9}{1}}{\\binom{12}{3}} = \\frac{3 \\cdot 9}{220} = \\frac{27}{220} \\approx 12{,}27\\%'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Kombinatorika és valószínűségszámítás fejezet, 11. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 23. Tétel (149-154. oldal): A Pascal-háromszögnél említsd meg a részhalmazok számával (2^n) való kapcsolatot!',
    historicalContext: 'Blaise Pascal (1623–1662) francia matematikus a Pierre de Fermat-val folytatott levelezésében fektette le a valószínűségszámítás alapjait a szerencsejátékok elemzése során.',
    visualizerType: 'binomial'
  },
  {
    id: 'tétel-24',
    number: 24,
    title: 'Permutációk, variációk. A binomiális eloszlás. A valószínűség kiszámításának geometriai modellje',
    category: 'Kombinatorika és valószínűség',
    tags: ['Permutáció', 'Variáció', 'Binomiális eloszlás', 'Geometriai valószínűség', 'Faktoriális'],
    difficulty: 'Közepes',
    summary: 'Permutációk (ismétlés nélküli n!, ismétléses, ciklikus). Variációk (ismétlés nélküli n!/(n-k)!, ismétléses n^k). Binomiális eloszlás (visszatevéses mintavétel). Geometriai valószínűségi modell (területek/hosszak hányadosa). Kolmogorov-féle valószínűségi axiómák.',
    statementLatex: 'P_n = n!, \\quad V_n^k = \\frac{n!}{(n-k)!}, \\quad P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad P(A) = \\frac{\\text{mes}(A)}{\\text{mes}(\\Omega)}',
    conditionsLatex: '0 \\le p \\le 1, k \\le n',
    requiredDefinitions: [
      {
        term: 'Ismétléses Variáció',
        definitionLatex: 'V_n^{k,\\text{ism}} = n^k',
        explanation: 'n elemből k pozícióra választunk elemeket úgy, hogy a sorrend számít, és egy elemet többször is kiválaszthatunk.'
      },
      {
        term: 'Binomiális eloszlás',
        definitionLatex: 'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}',
        explanation: 'Visszatevéses mintavétel: n független kísérletből pontosan k-szor következik be a p valószínűségű esemény.'
      }
    ],
    oralPresentationOutline: [
      'A kombinatorika áttekintése: PVC-tábla (Permutáció, Variáció, Kombináció) összefoglaló elvei.',
      'Permutációk: ismétlés nélküli ($P_n = n!$), ismétléses ($P_n^{k_1,k_2...} = \\frac{n!}{k_1! k_2! \\dots}$), ciklikus ($(n-1)!$).',
      'Variációk: ismétlés nélküli ($V_n^k = \\frac{n!}{(n-k)!}$) és ismétléses ($V_n^{k,\\text{ism}} = n^k$).',
      'Valószínűségszámítás axiómái (Kolmogorov). Eseménytér, elemi események.',
      'Binomiális eloszlás képlete, független kísérletek (visszatevéses mintavétel).',
      'Geometriai valószínűségi modell: végtelen eseménytér, területek/hosszak/értékek hányadosa. Darts-tábla példa.',
      'Tétel bizonyítása (Ismétléses variáció képletének levezetése $n^k$ ODER Binomiális eloszlás levezetése).'
    ],
    proofTitle: 'Az ismétléses variáció n^k képletének levezetése',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Pozíciók független kiválasztása',
        latexContent: '\\text{Pozíciók: } 1., 2., \\dots, k.',
        explanation: 'k darab egymás utáni helyre kell elemeket választanunk az n elemű halmazból.'
      },
      {
        stepNumber: 2,
        title: 'Lehetőségek száma helyenként',
        latexContent: 'n \\cdot n \\cdot n \\dots n \\quad (k \\text{ tényező})',
        explanation: 'Mivel az elemek ismétlődhetnek, minden egyes helyre függetlenül n-féle elemet rakhatunk.'
      },
      {
        stepNumber: 3,
        title: 'Szorzási szabály alkalmazása',
        latexContent: 'V_n^{k,\\text{ism}} = n^k',
        explanation: 'A független választási lehetőségeket összeszorozva megkapjuk az n^k képletet.'
      }
    ],
    examinerTraps: [
      {
        question: 'Ha egy geometriai valószínűségi feladatban egy pont eltalálásának valószínűsége 0, jelenti-e ez azt, hogy a pont eltalálása lehetetlen esemény?',
        answer: 'Nem! Egyetlen pont területe 0, így geometriai valószínűsége 0, de az esemény bekövetkezhet (nem lehetetlen esemény).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Permutációk, variációk, binomiális eloszlás és geometriai valószínűség bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Ismétléses variáció vagy binomiális eloszlás pontos definíciója.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Az ismétléses variáció $n^k$ képletének vagy a binomiális eloszlásnak a bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Kombinatorikai vagy binomiális eloszlásos feladat levezetése.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Csalási esélyek kaszinóban, PIN kódok száma, Buffon-féle tűprobléma (π közelítése).' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Precíz kombinatorikai és valószínűségi szaknyelv.' }
    ],
    applications: [
      {
        title: 'Csaló kaszinó kockadobása binomiális eloszlással',
        problem: 'Egy cinkelt kockával a 6-os dobás esélye p = 1/8. Mi a valószínűsége, hogy 7 dobásból pontosan 5-ször dobunk 6-ost?',
        solutionLatex: 'P(X = 5) = \\binom{7}{5} \\left(\\frac{1}{8}\\right)^5 \\left(\\frac{7}{8}\\right)^2 = 21 \\cdot \\frac{49}{2097152} \\approx 0{,}049\\%'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Kombinatorika és valószínűségszámítás fejezet, 11. oldal'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 24. Tétel (155-160. oldal): Rajzold fel a PVC-táblát (Permutáció, Variáció, Kombináció) a rendszerezéshez!',
    historicalContext: 'Georges-Louis Leclerc (Buffon grófja) 1777-ben írta le a Buffon-féle tűproblémát, amely az első geometriai valószínűségi feladat volt a történelemben.',
    visualizerType: 'binomial'
  },
  {
    id: 'tétel-25',
    number: 25,
    title: 'Bizonyítási módszerek és bemutatásuk tételek bizonyításában',
    category: 'Halmazok és logika',
    tags: ['Bizonyítások', 'Direkt', 'Indirekt', 'Teljes indukció', 'Skatulyaelv'],
    difficulty: 'Kiemelt emelt',
    summary: 'Matematikai struktúra: axiómák, definíciók, tételek. Bizonyítási módszerek: Direkt bizonyítás, Indirekt bizonyítás, Teljes indukció 3 lépése, Skatulyaelv (Dirichlet-elv), Bizonyítás más tételre hivatkozással és Geometriai/Átdarabolásos bizonyítás.',
    statementLatex: 'A_1 \\implies A_k \\implies A_{k+1} \\quad (\\text{Teljes indukció}), \\quad n > k \\implies \\exists \\text{skatulya } \\ge 2 \\text{ elemmel}',
    conditionsLatex: 'n, k \\in \\mathbb{N}^+',
    requiredDefinitions: [
      {
        term: 'Axióma',
        definitionLatex: '\\text{Axióma: bizonyítás nélkül elfogadott alapigazság}',
        explanation: 'Olyan kiindulási állítás egy matematikai elméletben, amelyet nem bizonyítunk, de amelyből minden más tételt levezetünk (pl. Eukleidész axiómái).'
      },
      {
        term: 'Teljes indukció 3 lépése',
        definitionLatex: '1.\\; A_1 \\text{ igaz}, \\quad 2.\\; A_k \\text{ feltételezés}, \\quad 3.\\; A_{k+1} \\text{ igazolása}',
        explanation: 'A megszámlálhatóan végtelen sok természetes számra vonatkozó állítások szigorú igazolási módszere.'
      }
    ],
    oralPresentationOutline: [
      'A matematika logikai felépítése: alapfogalmak, axiómák, definíciók, tételek, bizonyítások.',
      '1. Direkt bizonyítás: axiómákból és korábbi tételekből helyes következtetésekkel jutunk a célhoz (pl. Pitagorasz-tétel).',
      '2. Indirekt bizonyítás: az állítás tagadásából indulunk ki, és ellentmondásra jutunk (pl. √2 irracionális, prímszámok végtelensége).',
      '3. Teljes indukció: bázislépés ($n=1$), indukciós feltétel ($n=k$), öröklődés igazolása ($n=k+1$) (pl. négyzetszámok összege, $2^n$ részhalmazok).',
      '4. Skatulyaelv (Dirichlet-elv): ha $n$ elemet $k$ skatulyába rakunk és $n>k$, van legalább 2 elemű skatulya.',
      '5. Bizonyítás ábrával / átdarabolással és Bizonyítás más tétel segítségével (pl. Pitagorasz koszinusztétellel).',
      'Példák bemutatása és levezetése a fenti módszerek mindegyikére.'
    ],
    proofTitle: 'Az első n négyzetszám összegképletének bizonyítása teljes indukcióval: 1² + 2² + ... + n² = n(n+1)(2n+1)/6',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Bázislépés n = 1-re',
        latexContent: '1^2 = 1, \\quad \\frac{1(1+1)(2\\cdot 1 + 1)}{6} = \\frac{1 \\cdot 2 \\cdot 3}{6} = 1 \\quad \\checkmark',
        explanation: 'Az állítás n = 1 esetén igaz.'
      },
      {
        stepNumber: 2,
        title: 'Indukciós feltétel n = k-ra',
        latexContent: 'S_k = 1^2 + 2^2 + \\dots + k^2 = \\frac{k(k+1)(2k+1)}{6}',
        explanation: 'Feltételezzük, hogy az állítás igaz k-ra.'
      },
      {
        stepNumber: 3,
        title: 'Öröklődés igazolása n = k+1-re',
        latexContent: 'S_{k+1} = S_k + (k+1)^2 = \\frac{k(k+1)(2k+1)}{6} + (k+1)^2 = \\frac{(k+1)(k+2)(2k+3)}{6}',
        explanation: 'Kiemeljük (k+1)-et, közös nevezőre hozzuk, és megkapjuk a k+1-re vonatkozó alakot.'
      }
    ],
    examinerTraps: [
      {
        question: 'Elegendő-e a teljes indukciónál csak kipróbálni az állítást n=1, 2, 3, 4, 5-re?',
        answer: 'Nem! Véges sok eset kipróbálása nem bizonyítás (léteznek olyan állítások, amik n=1..100-ra igazak, de n=101-re hamisak!). A k → k+1 öröklődési lépés elengedhetetlen!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'I. Felelet tartalma és szerkezete', points: 10, description: 'Direkt, indirekt, teljes indukció, skatulyaelv átfogó, példákkal teli bemutatása.' },
      { criterion: 'II. Definíció pontos kimondása', points: 2, description: 'Axióma vagy a teljes indukció lépéseinek hibátlan kimondása.' },
      { criterion: 'III. Tétel és Bizonyítás', points: 6, description: 'Kiválasztott tétel (pl. négyzetszámok összege) hibátlan indukciós bizonyítása.' },
      { criterion: 'IV. Kitűzött feladat megoldása', points: 8, description: 'Skatulyaelves vagy oszthatósági indukciós feladat levezetése.' },
      { criterion: 'V. Alkalmazások & Történet', points: 4, description: 'Gödel nemteljességi tétele, Dirichlet német matematikus, matematika logikai szilárdsága.' },
      { criterion: 'VI. Szaknyelv & Kommunikáció', points: 5, description: 'Szigorú matematikai bizonyítási szaknyelv.' }
    ],
    applications: [
      {
        title: 'Oszthatósági bizonyítás teljes indukcióval',
        problem: 'Bizonyítsd be, hogy a $2^{2n} + 15n - 1$ kifejezés osztható 9-cel minden $n \\in \\mathbb{N}^+$ esetén!',
        solutionLatex: 'n=1: 18 \\quad (9|18). \\quad 2^{2(k+1)} + 15(k+1) - 1 = 4(2^{2k} + 15k - 1) - 9(5k - 2) \\implies 9 \\text{ osztója.}'
      }
    ],
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) - Bizonyítási módszerek és algebra fejezet'
    ],
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 25. Tétel (161-164. oldal): A feleletben mondj példát mind a 4 fő bizonyítási módszerre (Direkt, Indirekt, Indukció, Skatulya)!',
    historicalContext: 'Peter Gustav Lejeune Dirichlet (1805–1859) írta le először a Skatulyaelvet (Dirichlet-elv). Kurt Gödel 1931-ben bizonyította be híres nemteljességi tételét.',
    visualizerType: 'graph'
  }
];

const content = `import { Tetel } from '../types/math';

export const TETELEK: Tetel[] = ${JSON.stringify(tetelek, null, 2)};
`;

const outputPath = path.join(process.cwd(), 'src', 'data', 'tetelek.ts');
fs.writeFileSync(outputPath, content, 'utf-8');
console.log(`Successfully generated ALL ${tetelek.length} official Studium Generale 2026 tetelek in ${outputPath}`);
