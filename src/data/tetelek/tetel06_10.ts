import { Tetel } from '../../types/math';

export const TETELEK_06_10: Tetel[] = [
  {
    id: 'tétel-06',
    number: 6,
    title: 'A logaritmus fogalma és azonosságai. Az exponenciális és a logaritmusfüggvény. Az inverzfüggvény',
    category: 'Függvények és analízis',
    tags: ['Logaritmus', 'Exponenciális', 'Inverzfüggvény', 'Azonosságok', 'Alapváltás', 'Richter-skála'],
    difficulty: '3: trückös',
    summary: 'A logaritmus fogalma, alap- és numeruskikötései. A logaritmus azonosságai (szorzat, hányados, hatvány, áttérés új alapra). Az exponenciális és a logaritmusfüggvény tulajdonságai (a > 1 és 0 < a < 1). Az inverzfüggvény fogalma, feltétele és geometriai szimmetriája (tükrözés az y = x egyenesre).',
    statementLatex: '\\log_a b = c \\iff a^c = b, \\quad \\log_a (x \\cdot y) = \\log_a x + \\log_a y, \\quad \\log_a (x^k) = k \\cdot \\log_a x, \\quad \\log_a b = \\frac{\\log_c b}{\\log_c a}',
    conditionsLatex: 'a > 0, a \\neq 1, \\quad b > 0, \\quad x, y > 0, \\quad c > 0, c \\neq 1',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 3. oldal (Logaritmus fogalma és azonosságai)',
    introduction: `Az első logaritmustáblázatot Jobst Bürgi 16-17. századi svájci órásmester hozta létre.

Bürgi Johannes Kepler csillagász munkatársa volt, és a bonyolult bolygómozgási számítások elvégzésének megkönnyítésére dolgozta ki a módszert.

Tőle függetlenül a skót John Napier 1614-ben publikálta a logaritmus elméletét, amely a szorzásokat összeadásra vezette vissza.`,
    detailedTheory: `### 1. A logaritmus fogalma és kikötései

- **Definíció:** Egy $b$ pozitív szám ($b > 0$) $a$ alapú ($a > 0$ és $a \\neq 1$) logaritmusának nevezzük azt az egyetlen valós kitevőt ($c$), amelyre $a$-t emelve $b$-t kapjuk.
  $$\\log_a b = c \\iff a^c = b$$
  Ebből közvetlenül következik a logaritmus alapazonossága: $a^{\\log_a b} = b$.

- **Részei:** $a$ a logaritmus alapja, $b$ a numerus (argumentum).

- **Kikötések indoklása:**
  - $a > 0$: negatív alap esetén a valós kitevőjű hatványozás nem értelmezhető folytonosan.
  - $a \\neq 1$: $1^c = 1$ minden valós $c$-re, így 1-től különböző számot nem kaphatnánk, 1-re pedig végtelen sok kitevő lenne.
  - $b > 0$: pozitív szám bármely valós kitevőjű hatványa mindig szigorúan pozitív ($a^c > 0$), így negatív számnak és a 0-nak nincs valós logaritmusa!

### 2. A logaritmus azonosságai

1. **Szorzat logaritmusa:** $\\log_a (x \\cdot y) = \\log_a x + \\log_a y$ ($x, y > 0$).

2. **Hányados logaritmusa:** $\\log_a \\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$ ($x, y > 0$).

3. **Hatvány logaritmusa:** $\\log_a (x^k) = k \\cdot \\log_a x$ ($x > 0, k \\in \\mathbb{R}$).
   - Speciálisan: $\\log_a \\sqrt[n]{x} = \\frac{1}{n} \\log_a x$.

4. **Áttérés új alapra (bázisváltás):** $\\log_a b = \\frac{\\log_c b}{\\log_c a}$ ($a, b, c > 0; a, c \\neq 1$).
   - Következmény 1: $\\log_a b = \\frac{1}{\\log_b a}$ (alap és numerus felcserélése).
   - Következmény 2: $\\log_a b \\cdot \\log_b a = 1$.
   - Következmény 3: $\\log_{a^k} b = \\frac{1}{k} \\log_a b$.

- **Kitüntetett alapú logaritmusok:**
  - Tízes alapú logaritmus: $\\log_{10} x = \\lg x$.
  - Természetes alapú (Euler-féle $e \\approx 2{,}71828$) logaritmus: $\\log_e x = \\ln x$.

- **Nevezetes értékek:** $\\log_a 1 = 0$ (mert $a^0 = 1$), $\\log_a a = 1$ (mert $a^1 = a$).

### 3. Az exponenciális függvény: $f(x) = a^x$ ($a > 0, a \\neq 1$)

- **Értelmezési tartomány:** $D_f = \\mathbb{R}$.

- **Értékkészlet:** $R_f = \\mathbb{R}^+ = ]0; \\infty[$.

- **Folytonosság:** az értelmezési tartomány minden pontjában folytonos.

- **Monotonitás:**
  - Ha $a > 1$: szigorúan monoton növekvő (pl. $2^x, e^x$). Határértéke: $\\lim_{x \\to -\\infty} a^x = 0$, $\\lim_{x \\to \\infty} a^x = \\infty$.
  - Ha $0 < a < 1$: szigorúan monoton csökkenő (pl. $(1/2)^x$). Határértéke: $\\lim_{x \\to -\\infty} a^x = \\infty$, $\\lim_{x \\to \\infty} a^x = 0$.

- **Zérushely:** nincs (mivel $a^x > 0$).

- **Tengelymetszet:** minden grafikon átmegy a $(0; 1)$ ponton, mert $a^0 = 1$.

- **Konvexitás:** mindenütt konvex. Korlátosság: alulról korlátos (alsó korlát 0), felülről nem korlátos.

### 4. A logaritmusfüggvény: $g(x) = \\log_a x$ ($a > 0, a \\neq 1$)

- **Értelmezési tartomány:** $D_g = \\mathbb{R}^+ = ]0; \\infty[$.

- **Értékkészlet:** $R_g = \\mathbb{R}$.

- **Folytonosság:** folytonos az értelmezési tartományán.

- **Monotonitás:**
  - Ha $a > 1$: szigorúan monoton növekvő. Határértéke: $\\lim_{x \\to 0^+} \\log_a x = -\\infty$, $\\lim_{x \\to \\infty} \\log_a x = \\infty$.
  - Ha $0 < a < 1$: szigorúan monoton csökkenő. Határértéke: $\\lim_{x \\to 0^+} \\log_a x = \\infty$, $\\lim_{x \\to \\infty} \\log_a x = -\\infty$.

- **Zérushely:** $x = 1$, mert $\\log_a 1 = 0$. A grafikon mindig átmegy az $(1; 0)$ ponton.

- **Konvexitás:** $a > 1$ esetén konkáv, $0 < a < 1$ esetén konvex. Nem korlátos.

### 5. Az inverzfüggvény

- **Inverz fogalma:** Az $f$ függvénynek a $g$ függvény az inverze ($g = f^{-1}$), ha $D_{f^{-1}} = R_f$, $R_{f^{-1}} = D_f$, és minden $x \\in D_f$-re $f^{-1}(f(x)) = x$.

- **Létezésének feltétele:** A függvénynek pontosan akkor létezik inverze, ha **kölcsönösen egyértelmű (injektív)**, vagyis különböző $x$ értékekhez különböző $y$ értékek tartoznak ($x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$). A szigorú monotonitás elégséges feltétel az invertálhatósághoz!

- **Előállítása:**
  - Algebrailag: az $y = f(x)$ egyenletből kifejezzük az $x$-et, majd felcseréljük a változók betűjeleit ($x \\leftrightarrow y$).
  - Geometriailag: a függvény grafikonjának tengelyes tükrözése az $y = x$ egyenletű (identitás) egyenesre.

- **Az $a^x$ és $\\log_a x$ kapcsolata:** Mivel mindkettő szigorúan monoton, kölcsönösen egymás inverzei:
  $$f(x) = a^x \\iff f^{-1}(x) = \\log_a x$$
  Grafikonjaik az $y = x$ egyenesre tengelyesen szimmetrikusak!`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'Szorzat logaritmusa egyenlő a tényezők logaritmusának összegével',
        statementLatex: '\\log_a (b \\cdot c) = \\log_a b + \\log_a c \\quad (a, b, c > 0, a \\neq 1)',
        proofTitle: 'Bizonyítás a logaritmus definíciója és az exponenciális függvény szigorú monotonitása alapján',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Tényezők felírása hatványalakban',
            latexContent: 'b = a^{\\log_a b}, \\quad c = a^{\\log_a c}, \\quad b \\cdot c = a^{\\log_a (b \\cdot c)}',
            explanation: 'Alkalmazzuk a logaritmus alapvető definícióját mindkét tényezőre és a szorzatukra.'
          },
          {
            stepNumber: 2,
            title: 'A szorzat átalakítása hatványazonossággal',
            latexContent: 'b \\cdot c = a^{\\log_a b} \\cdot a^{\\log_a c} = a^{\\log_a b + \\log_a c}',
            explanation: 'Felhasználjuk az azonos alapú hatványok szorzására vonatkozó azonosságot.'
          },
          {
            stepNumber: 3,
            title: 'Exponenciális függvény szigorú monotonitásának alkalmazása',
            latexContent: 'a^{\\log_a (b \\cdot c)} = a^{\\log_a b + \\log_a c} \\implies \\log_a (b \\cdot c) = \\log_a b + \\log_a c',
            explanation: 'Mivel az a alapú exponenciális függvény szigorúan monoton (kölcsönösen egyértelmű), az egyenlőség pontosan akkor áll fenn, ha a kitevők egyenlőek.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'Hányados logaritmusa egyenlő a számláló és a nevező logaritmusának különbségével',
        statementLatex: '\\log_a \\left(\\frac{b}{c}\\right) = \\log_a b - \\log_a c \\quad (a, b, c > 0, a \\neq 1)',
        proofTitle: 'Bizonyítás a hatványok hányadosának azonosságával',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'A hányados felírása',
            latexContent: '\\frac{b}{c} = \\frac{a^{\\log_a b}}{a^{\\log_a c}} = a^{\\log_a b - \\log_a c}',
            explanation: 'Azonos alapú hatványok osztásánál a kitevőket kivonjuk.'
          },
          {
            stepNumber: 2,
            title: 'Azonosítás és az alapok elhagyása',
            latexContent: 'a^{\\log_a (b / c)} = a^{\\log_a b - \\log_a c} \\implies \\log_a \\left(\\frac{b}{c}\\right) = \\log_a b - \\log_a c',
            explanation: 'A szigorú monotonitás miatt a kitevők megegyeznek.'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'Hatvány logaritmusa egyenlő a kitevő és az alap logaritmusának szorzatával',
        statementLatex: '\\log_a (b^n) = n \\cdot \\log_a b \\quad (a, b > 0, a \\neq 1, n \\in \\mathbb{R})',
        proofTitle: 'Bizonyítás a hatvány hatványozásának azonosságával',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'A b hatványalakjának n-edik hatványa',
            latexContent: 'b = a^{\\log_a b} \\implies b^n = (a^{\\log_a b})^n = a^{n \\cdot \\log_a b}',
            explanation: 'Hatvány hatványozásakor a kitevőket összeszorozzuk.'
          },
          {
            stepNumber: 2,
            title: 'Összevetés a logaritmus definíciójával',
            latexContent: 'b^n = a^{\\log_a (b^n)} \\implies a^{\\log_a (b^n)} = a^{n \\cdot \\log_a b} \\implies \\log_a (b^n) = n \\cdot \\log_a b',
            explanation: 'A szigorú monotonitás miatt a kitevők egyenlősége adódik.'
          }
        ]
      },
      {
        theoremNumber: 4,
        title: 'Áttérés új alapú logaritmusra (Bázisváltás)',
        statementLatex: '\\log_a b = \\frac{\\log_c b}{\\log_c a} \\quad (a, b, c > 0, a \\neq 1, c \\neq 1)',
        proofTitle: 'Bizonyítás mindkét oldal c alapú logaritmusának vételével',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Alapazonosság felírása',
            latexContent: 'b = a^{\\log_a b}',
            explanation: 'A logaritmus alapdefinícióját használjuk.'
          },
          {
            stepNumber: 2,
            title: 'Mindkét oldal c alapú logaritmusának vétele',
            latexContent: '\\log_c b = \\log_c (a^{\\log_a b}) = \\log_a b \\cdot \\log_c a',
            explanation: 'A hatvány logaritmusára vonatkozó szabály szerint a kitevő szorzóként kiemelhető.'
          },
          {
            stepNumber: 3,
            title: 'Leosztás log_c a-val',
            latexContent: '\\log_c a \\neq 0 \\; (a \\neq 1) \\implies \\log_a b = \\frac{\\log_c b}{\\log_c a}',
            explanation: 'Mivel a ≠ 1, log_c a ≠ 0, leoszthatunk vele és megkaptuk az alapváltási tételt.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Exponenciális egyenletek megoldása: ha a két oldal alapjai nem hozhatók azonos alakra, mindkét oldal logaritmusát vesszük (pl. $2^x = 3^{x-1}$).',
      'Kamatos kamat futamidő kiszámítása: a tőke megtérülési idejét ($n$) logaritmussal fejezzük ki az exponenciális kitevőből: $n = \\frac{\\lg(T_n / T_0)}{\\lg(1 + p/100)}$.',
      'Logaritmusos egyenlőtlenségek megoldása: ha az alap $a > 1$, a reláció iránya megmarad; ha $0 < a < 1$, a szigorú monoton csökkenés miatt a relációs jel megfordul!',
      'Számítások leegyszerűsítése logarléccel a zsebszámológépek elterjedése előtt.'
    ],
    applicationsOutside: [
      'Földrengések erőssége (Richter-skála): a földrengés magnitúdója $M = \\lg(A / A_0)$, azaz egy 7-es erősségű földrengés amplitúdója 10-szerese, energiája kb. 31,6-szorosa egy 6-osénak.',
      'Akusztika és hangtan (Decibel-skála): az emberi fül hangerőérzete logaritmikus. $L = 10 \\lg(I / I_0)$ dB. 10 dB növekedés tízszeres hangintenzitást jelent.',
      'Kémia (pH-érték): a vizes oldatok hidrogénion-koncentrációjának negatív tízes alapú logaritmusa: $\\text{pH} = -\\lg[\\text{H}^+]$.',
      'Orvostudomány és pszichofizika (Weber–Fechner-törvény): az emberi érzékelés (látás, hallás, tapintás) intenzitása az inger erősségének logaritmusával arányos.',
      'Biológia és demográfia: baktériumtenyészetek szaporodása, populáció növekedése és radioaktív izotópok felezési ideje.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Oldd meg a következő egyenletet a valós számok halmazán: 9^(1-x) - 4 · 3^(-x) - 69 = 0!',
        solutionLatex: '9 \\cdot (3^{-x})^2 - 4 \\cdot (3^{-x}) - 69 = 0. \\quad a = 3^{-x} \\implies 9a^2 - 4a - 69 = 0. \\\\ a_{1,2} = \\frac{4 \\pm \\sqrt{16 - 4 \\cdot 9 \\cdot (-69)}}{18} = \\frac{4 \\pm 50}{18} \\implies a_1 = 3, \\; a_2 = -\\frac{23}{9}. \\\\ \\text{Mivel } 3^{-x} > 0, \\text{ csak } a_1 = 3 \\text{ ad megoldást:} \\quad 3^{-x} = 3^1 \\implies -x = 1 \\implies x = -1.'
      },
      {
        problemNumber: 2,
        question: 'Oldd meg a valós számok halmazán az alábbi egyenletet: 2 lg 2 + (1 + x) lg 3 - lg(3^(2x) + 27) = 0!',
        solutionLatex: '\\text{Kikötés: } 3^{2x} + 27 > 0 \\; (\\forall x \\in \\mathbb{R}). \\\\ \\lg(2^2) + \\lg(3 \\cdot 3^x) - \\lg(3^{2x} + 27) = 0 \\implies \\lg\\left(\\frac{4 \\cdot 3 \\cdot 3^x}{3^{2x} + 27}\\right) = \\lg 1. \\\\ \\frac{12 \\cdot 3^x}{3^{2x} + 27} = 1 \\implies 3^{2x} - 12 \\cdot 3^x + 27 = 0. \\\\ a = 3^x \\implies a^2 - 12a + 27 = 0 \\implies (a - 3)(a - 9) = 0. \\\\ a_1 = 3 \\implies 3^x = 3^1 \\implies x_1 = 1; \\quad a_2 = 9 \\implies 3^x = 3^2 \\implies x_2 = 2.'
      }
    ],    oralPresentationOutline: [
      'Logaritmus def.: $\\log_a b = x \\iff a^x=b$ ($a>0,a\\neq1,b>0$)',
      'Azonosságok: összeg, különbség, kitevő kiemelése, váltás',
      'Exponenciális és logaritmusfüggvény — egymás inverzei',
      'Grafikonok, aszimptoták, monotonitás',
      'Egyenletek: $a^x=b$, $\\log$ egyenletek — ÉT ellenőrzés',
      'Egyenlőtlenségek: alap >1 vs. 0<a<1',
      'Szóbeli: def. + azonosság + inverz + ÉT csapda'
    ],
    requiredDefinitions: [
      {
        term: 'Logaritmus',
        definitionLatex: '\\log_a b = x \\iff a^x = b\\quad (a>0,a\\neq 1,b>0)',
        explanation: 'Az a alapú logaritmus az a kitevő, amire a-t emelve b-t kapunk. $\\ln=\\log_e$, $\\lg=\\log_{10}$.',
      },
      {
        term: 'Logaritmus azonosságok',
        definitionLatex: '\\log_a(xy)=\\log_a x+\\log_a y,\\ \\log_a\\frac{x}{y}=\\log_a x-\\log_a y,\\ \\log_a(x^k)=k\\log_a x',
        explanation: 'Váltás: $\\log_a b=\\frac{\\log_c b}{\\log_c a}$.',
      },
      {
        term: 'Inverz kapcsolat',
        definitionLatex: '\\log_a(a^x)=x,\\quad a^{\\log_a x}=x\\ (x>0)',
        explanation: 'Az $a^x$ és $\\log_a x$ függvények egymás inverzei; grafikonjuk az y=x-re tükrös.',
      }
    ],

    examinerTraps: [
      {
        question: 'Megfordul-e az egyenlőtlenség jele, ha mindkét oldal logaritmusát vesszük?',
        answer: 'Attól függ, mekkora a logaritmus alapja! Ha az alap 1-nél nagyobb (a > 1), a szigorú monoton növekedés miatt a reláció iránya VÁLTOZATLAN marad. Ha az alap 0 és 1 közötti (0 < a < 1), a relációs jel szükségképpen MEGFORDUL!',
        dangerLevel: 'Magas'
      },
      {
        question: 'Egyenlő-e a log_a(x + y) kifejezés a log_a x + log_a y összeggel?',
        answer: 'NEM! Végzetes típushiba! A szorzat logaritmusa az összegek logaritmusa: log_a(x · y) = log_a x + log_a y. Az összeg logaritmusára nincs szétszedési szabály!',
        dangerLevel: 'Magas'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Logaritmus, exponenciális, inverz\n\n### Fő definíció és azonosságok\n\n$\\log_a b = x \\iff a^x = b \\quad (a>0,\\ a\\neq1,\\ b>0)$\n\n$\\log_a(xy)=\\log_a x+\\log_a y,\\quad \\log_a\\frac{x}{y}=\\log_a x-\\log_a y,\\quad \\log_a(x^k)=k\\log_a x$\n\n$\\log_a b = \\frac{\\log_c b}{\\log_c a},\\quad \\log_a(a^x)=x,\\quad a^{\\log_a x}=x\\ (x>0)$\n\n$\\lg=\\log_{10},\\quad \\ln=\\log_e$\n\n**Bázisváltás** + alkalmazások: Richter, decibel, pH, kamatos kamat.\n\n### Definíciók\n\n**Logaritmus:** az a kitevő, amelyre az alapot emelve az argumentumot kapjuk.\n\n**Exponenciális függvény:** $f(x)=a^x$ ($a>0,a\\neq1$).\n\n**Logaritmusfüggvény:** $g(x)=\\log_a x$, értelmezési tartomány $(0,\\infty)$.\n\n**Inverz függvény:** $f$ és $f^{-1}$ összetétele identitás; grafikonok $y=x$-re tükrösek.\n\n### Egyenlőtlenség\n\nHa $a>1$: $\\log_a$ szigorúan növő (jel nem fordul). Ha $0<a<1$: szigorúan fogyó (jel megfordul).\n\n### Tételek\n\n$a^x$ és $\\log_a x$ egymás inverzei. Azonosságok a hatványazonosságokból.",
    oralExamPlan: "## Szóbeli felelet vázlata — Logaritmus (15–20 perc · 35 pont)\n\n### 0–2 perc · Bevezetés\nLogaritmus mint hatványozás „megfordítása”. Napier; Richter, dB, pH mint motiváció.\n\n### 2–5 perc · Definíció (2 pont)\n$\\log_a b=x\\iff a^x=b$ — **mindhárom feltétel** kimondva.\n\n### 5–8 perc · Elmélet\nAzonosságok + váltóképlet. Exponenciális / log függvény grafikon, aszimptota ($x=0$). Inverz kapcsolat. ÉT minden egyenletnél.\n\n### 8–13 perc · Tétel + bizonyítás (6 pont)\nEgy azonosság bizonyítása (pl. összeg), **vagy** inverz tulajdonság ($\\log_a(a^x)=x$), **vagy** változócseréés exponenciális egyenlet mint kidolgozott módszer.\n\n### 13–15 perc · Alkalmazások (4 pont)\nRichter, decibel, pH, kamatos kamat / felezési idő — egyet részletesen.\n\n### 15–18 perc · Feladat (8 pont)\nExponenciális → helyettesítés, vagy log-egyenlet összevonással + ellenőrzés.\n\n### Zárás · Nyelv (5 pont)\nCsapda: $\\log(x+y)\\neq\\log x+\\log y$. Egyenlőtlénél alap szerinti jelfordulás.\n\n### Pontozás\n10+2+6+8+4+5 = 35",
    visualizerType: 'function'
  },
  {
    id: 'tétel-07',
    number: 7,
    title: 'Másodfokú egyenletek és egyenlőtlenségek. Másodfokúra visszavezethető egyenletek. Egyenletek ekvivalenciája, gyökvesztés, hamis gyök, ellenőrzés',
    category: 'Számelmélet és algebra',
    tags: ['Másodfokú egyenlet', 'Diszkrimináns', 'Viète-formulák', 'Gyöktényezős alak', 'Ekvivalencia', 'Hamis gyök', 'Gyökvesztés'],
    difficulty: '2: bemelegítő',
    summary: 'A másodfokú egyenlet fogalma, megoldóképlete és annak levezetése teljes négyzetté alakítással. A diszkrimináns szerepe. A Viète-formulák és a gyöktényezős alak. Másodfokúra visszavezethető egyenletek (új ismeretlen bevezetése). Egyenletek ekvivalenciája, gyökvesztés és hamis gyök elkerülése, ellenőrzés kötelező esetei.',
    statementLatex: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad D = b^2 - 4ac, \\quad x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}',
    conditionsLatex: 'a, b, c \\in \\mathbb{R}, \\quad a \\neq 0',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 2. oldal (Másodfokú egyenlet megoldóképlete, Viète-formulák)',
    introduction: `Az emberiség legelső matematikusai már az ókori Kínában, Egyiptomban, Mezopotámiában és Hellászban is foglalkoztak másodfokú egyenletek geometriai megoldásával (pl. Eukleidész területátdarabolásokkal).

A 16. században François Viète (1540–1603) francia matematikus vezette be az együtthatók és az ismeretlenek szimbolikus betűjelölését, és fedezte fel a gyökök és az együtthatók közti alapvető összefüggéseket.`,
    detailedTheory: `### 1. Alapfogalmak és a másodfokú egyenlet

- **Egyenlet:** két algebrai kifejezés egyenlőségjellel összekötve. Nyitott mondat, amelynek változói az ismeretlenek.

- **Alaphalmaz:** az a számhalmaz, amelyen a megoldásokat keressük.

- **Értelmezési tartomány:** az alaphalmaz legbővebb részhalmaza, amelyen az egyenletben szereplő kifejezések értelmezhetők.

- **Másodfokú egyenlet kanonikus alakja:**
  $$ax^2 + bx + c = 0 \\quad (a, b, c \\in \\mathbb{R}, a \\neq 0)$$

- **Megoldási módszerek:**
  1. Szorzattá alakítás (kiemeléssel, ha $c = 0$, vagy nevezetes azonossággal).
  2. Teljes négyzetté alakítás.
  3. Megoldóképlet alkalmazása.
  4. Grafikus megoldás (a bal oldali parabola és az x-tengely metszéspontjai).

### 2. A diszkrimináns és a gyökök természete

- **Diszkrimináns ($D$):** a megoldóképletben a négyzetgyök alatti kifejezés: $D = b^2 - 4ac$.
  - Ha $D > 0$: az egyenletnek **két különböző valós gyöke** van ($x_1 \\neq x_2$).
  - Ha $D = 0$: az egyenletnek **két egybeeső (dupla) valós gyöke** van: $x_1 = x_2 = -\\frac{b}{2a}$.
  - Ha $D < 0$: az egyenletnek **nincs valós gyöke** (a komplex számok halmazán két konjugált komplex gyöke van).

### 3. A Viète-formulák és a gyöktényezős alak

- Ha az $ax^2 + bx + c = 0$ egyenlet gyökei $x_1$ és $x_2$, akkor az egyenlet felírható **gyöktényezős alakban**:
  $$a(x - x_1)(x - x_2) = 0$$

- **Viète-formulák:**
  $$x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}$$
- Alkalmazása: gyökök előjelének vizsgálata diszkrimináns nélkül, új másodfokú egyenlet alkotása adott gyökökkel ($x^2 - (x_1+x_2)x + x_1 x_2 = 0$), és gyökök gyors megsejtése egész együtthatók esetén.

### 4. Másodfokú egyenlőtlenségek megoldása

- Nullára rendezzük az egyenlőtlenséget: $ax^2 + bx + c \\gtrless 0$.
- Kiszámoljuk a zérushelyeket ($x_1, x_2$), és vizsgáljuk az $a$ főegyüttható előjelét:
  - Ha $a > 0$: a parabola felfelé nyílik (konvex). Zérushelyeken kívül pozitív, zérushelyek között negatív.
  - Ha $a < 0$: a parabola lefelé nyílik (konkáv). Zérushelyek között pozitív, zérushelyeken kívül negatív.

### 5. Másodfokúra visszavezethető egyenletek

- **Bikvadratikus (negyedfokú) egyenletek:** $a x^4 + b x^2 + c = 0 \\implies u = x^2$ ($u \\ge 0$).

- **Exponenciális egyenletek:** $a \\cdot (q^x)^2 + b \\cdot q^x + c = 0 \\implies u = q^x$ ($u > 0$).

- **Logaritmusos egyenletek:** $a \\cdot \\lg^2 x + b \\cdot \\lg x + c = 0 \\implies u = \\lg x$.

- **Trigonometrikus egyenletek:** $a \\cdot \\sin^2 x + b \\cdot \\sin x + c = 0 \\implies u = \\sin x$ ($u \\in [-1; 1]$).

- **Gyökös egyenletek:** új változó bevezetésével vagy négyzetre emeléssel.

### 6. Egyenletek ekvivalenciája, gyökvesztés és hamis gyök

- **Ekvivalens egyenletek:** amelyeknek az adott alaphalmazon a megoldáshalmazuk pontosan megegyezik.

- **Ekvivalens átalakítások:** mindkét oldalhoz ugyanazt a kifejezést hozzáadni/kivonni; nemnulla számmal megszorozni/osztani; páratlan gyököt vonni vagy páratlan hatványra emelni.

- **Nem ekvivalens átalakítások (Ellenőrzés kötelező!):**
  - **Hamis gyök keletkezése:** az értelmezési tartományt bővítő átalakításoknál (pl. mindkét oldal négyzetre emelése, ismeretlennel való szorzás). A kapott gyökök közül az ellenőrzés szűri ki a hamis gyököket.
  - **Gyökvesztés veszélye:** az értelmezési tartományt szűkítő átalakításoknál (pl. ismeretlennel való leosztás, négyzetgyökvonás mindkét oldalból). Soha ne osszunk ismeretlennel a lehetséges zérus érték külön vizsgálata nélkül!

### 7. Paraméteres egyenletek és diszkusszió

- Paraméteres feladatnál mindig válaszd szét az eseteket: az együttható nulla, a diszkrimináns előjele, illetve a gyökök elhelyezkedése szerint.

- **Példa:** $px^2-2px+1=0$. Ha $p=0$, akkor $1=0$, azaz nincs megoldás. Ha $p\\neq0$, akkor $D=4p^2-4p=4p(p-1)$; valós gyök pontosan $p<0$ vagy $p\\ge1$ esetén van.

- **Gyökök előjele Viète-tel:** $x_1x_2=\\frac ca$ és $x_1+x_2=-\\frac ba$. Két pozitív gyök feltétele: $D\\ge0$, $\\frac ca>0$ és $-\\frac ba>0$.

- **Gyökök elhelyezkedése:** az $f(x)=ax^2+bx+c$ parabola csúcsa $x_0=-\\frac{b}{2a}$; $a>0$ esetén a gyökök a csúcs két oldalán helyezkednek el.

### 8. Szélsőérték és szöveges feladatok

- A másodfokú függvény szélsőértéke a csúcsban van: $f(x)=a(x-x_0)^2+f(x_0)$, ahol $x_0=-\\frac{b}{2a}$.

- **Példa:** adott $K$ kerületű téglalap területe $T(x)=x\\left(\\frac K2-x\\right)$; maximuma $x=\\frac K4$-nél van, azaz négyzet esetén.

- **Szöveges feladat menete:** ismeretlen megválasztása → összefüggés felírása → másodfokú kifejezés → csúcs vagy diszkrimináns → ellenőrzés a szöveg szerint.

- **Fizikai példa:** a ferde hajítás pályája parabola, a maximális magasság a csúcs ordinátája.

### 9. Szóbeli kiemelések

- A megoldóképlet levezetésénél hangsúlyozd a teljes négyzetté alakítást és a $D\\ge0$ feltételt.
- Az ekvivalencia kérdésénél a legfontosabb: négyzetre emelés, gyökös egyenlet, nevezővel szorzás — mikor veszhet el vagy keletkezhet gyök.
- A Viète-formuláknál a gyöktényezős alakból indulj ki: $ax^2+bx+c=a(x-x_1)(x-x_2)$.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'A másodfokú egyenlet megoldóképletének levezetése',
        statementLatex: 'x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\quad (a \\neq 0)',
        proofTitle: 'Levezetés teljes négyzetté alakítással',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Kiemelés a főegyütthatóval',
            latexContent: 'ax^2 + bx + c = 0 \\implies a \\left( x^2 + \\frac{b}{a}x + \\frac{c}{a} \\right) = 0 \\implies x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0',
            explanation: 'Mivel a ≠ 0, mindkét oldalt leoszthatjuk a-val.'
          },
          {
            stepNumber: 2,
            title: 'Teljes négyzetté alakítás',
            latexContent: '\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a^2} + \\frac{c}{a} = 0',
            explanation: 'Az x² + (b/a)x tagokat teljes négyzetté alakítjuk: (x + b/(2a))² = x² + (b/a)x + b²/(4a²).'
          },
          {
            stepNumber: 3,
            title: 'Konstansok átvitele és közös nevező',
            latexContent: '\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{4ac}{4a^2} = \\frac{b^2 - 4ac}{4a^2}',
            explanation: 'Áthozzuk a konstans tagokat a jobb oldalra és 4a² közös nevezőre hozzuk.'
          },
          {
            stepNumber: 4,
            title: 'Gyökvonás és kifejezés x-re',
            latexContent: 'x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a} \\implies x_{1,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
            explanation: 'Négyzetgyököt vonunk mindkét oldalból és kivonjuk a b/(2a) tagot, megkapva a megoldóképletet.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'A Viète-formulák bizonyítása',
        statementLatex: 'x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}',
        proofTitle: 'Bizonyítás a megoldóképletből közvetlen összeadással és szorzással',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Gyökök összeadása',
            latexContent: 'x_1 + x_2 = \\frac{-b + \\sqrt{D}}{2a} + \\frac{-b - \\sqrt{D}}{2a} = \\frac{-2b}{2a} = -\\frac{b}{a}',
            explanation: 'A számlálókban a +√D és -√D kiejtik egymást.'
          },
          {
            stepNumber: 2,
            title: 'Gyökök megszorzása (Nevezetes azonosság)',
            latexContent: 'x_1 \\cdot x_2 = \\frac{(-b + \\sqrt{D})(-b - \\sqrt{D})}{4a^2} = \\frac{(-b)^2 - (\\sqrt{D})^2}{4a^2} = \\frac{b^2 - (b^2 - 4ac)}{4a^2} = \\frac{4ac}{4a^2} = \\frac{c}{a}',
            explanation: 'Alkalmazzuk az (u + v)(u - v) = u² - v² azonosságot u = -b és v = √D helyettesítéssel.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Szélsőérték-feladatok algebrai megoldása: a másodfokú függvény $f(x) = ax^2 + bx + c$ szélsőértékének helye deriválás nélkül, a parabola tengelyéből: $x_{\\text{szélső}} = -\\frac{b}{2a}$.',
      'Koordinátageometria: egyenes és kör, illetve egyenes és parabola metszéspontjainak meghatározása másodfokú egyenletrendszer megoldására vezet.',
      'Analízis: integrálás során a racionális törtfüggvények nevezőjének gyöktényezőkre bontása a parciális törtekre bontás alapja.',
      'Trigonometrikus egyenletek megoldása másodfokúra való visszavezetéssel.'
    ],
    applicationsOutside: [
      'Klasszikus fizika: egyenletesen gyorsuló mozgás út-idő függvénye másodfokú: $s(t) = v_0 t + \\frac{a}{2}t^2$. Szabadesésnél $h = \\frac{g}{2}t^2$.',
      'Ballisztika és hajítások: ferde hajításnál a lövedék pályája másodfokú függvénnyel leírható parabola. A maximális magasság és a lőtávolság a gyökökből és a csúcspontból adódik.',
      'Mikroökonómia: a másodfokú költségfüggvények és bevételi függvények profitmaximalizálása a másodfokú kifejezés szélsőértékének megkeresésével történik.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'A p valós paraméter mely értékeire van az (1 - p)x² - 4px + 4(1 - p) = 0 egyenletnek legfeljebb egy valós gyöke?',
        solutionLatex: '\\text{1. eset: Ha } p = 1, \\text{ az egyenlet lineáris: } -4x = 0 \\implies x = 0 \\; (1 \\text{ gyök, megoldás!}) \\\\ \\text{2. eset: Ha } p \\neq 1, \\text{ akkor másodfokú, legfeljebb egy valós gyök } \\iff D \\le 0. \\\\ D = (-4p)^2 - 4(1-p) \\cdot 4(1-p) = 16p^2 - 16(1-p)^2 = 16[p^2 - (1 - 2p + p^2)] = 16(2p - 1). \\\\ 16(2p - 1) \\le 0 \\implies 2p - 1 \\le 0 \\implies p \\le \\frac{1}{2}. \\\\ \\text{Összesített megoldás: } p \\le \\frac{1}{2} \\quad \\text{vagy} \\quad p = 1.'
      },
      {
        problemNumber: 2,
        question: 'Oldd meg a valós számok halmazán a következő egyenlőtlenséget: (x + 4) / (x - 3) > 3!',
        solutionLatex: '\\text{Kikötés: } x \\neq 3. \\\\ \\frac{x+4}{x-3} - 3 > 0 \\implies \\frac{x+4 - 3(x-3)}{x-3} > 0 \\implies \\frac{13 - 2x}{x-3} > 0. \\\\ \\text{Egy tört akkor pozitív, ha a számláló és nevező előjele azonos:} \\\\ \\text{I. eset: } 13 - 2x > 0 \\land x - 3 > 0 \\implies x < 6{,}5 \\land x > 3 \\implies x \\in ]3; 6{,}5[. \\\\ \\text{II. eset: } 13 - 2x < 0 \\land x - 3 < 0 \\implies x > 6{,}5 \\land x < 3 \\implies \\emptyset. \\\\ \\text{Megoldás: } x \\in ]3; 6{,}5[.'
      },
      {
        problemNumber: 3,
        question: 'Oldd meg a p paraméter függvényében a px² − 2px + 1 = 0 egyenletet! Hány valós gyöke van?',
        solutionLatex: 'p=0:\\ 1=0\\implies\\text{nincs megoldás}. \\quad p\\neq0:\\ D=4p^2-4p=4p(p-1). \\\\ D\\ge0\\iff p<0\\ \\text{vagy}\\ p\\ge1. \\quad p=1:\\ x=1; \\quad p\\neq1:\\ x_{1,2}=1\\pm\\sqrt{\\frac{p-1}{p}}.',
        explanation: 'Paraméteres egyenletnél először az együttható nulla esetét kell vizsgálni, különben elveszítjük a lineáris esetet. Ezután a diszkrimináns előjele dönt a valós gyökök számáról; a p=1 esetben a gyök kettős.'
      },
    ],    oralPresentationOutline: [
      'Másodfokú egyenlet: $ax^2+bx+c=0$ ($a\\neq0$); alaphalmaz / ÉT',
      'Megoldóképlet levezetése teljes négyzetté alakítással',
      'Diszkrimináns: $D>0$, $D=0$, $D<0$ esetei',
      'Viète-formulák és gyöktényezős alak',
      'Másodfokú egyenlőtlenség: előjelvizsgálat / parabola',
      'Visszavezethető egyenletek: $u=\\ldots$ helyettesítés + ÉT',
      'Ekvivalencia, hamis gyök, gyökvesztés — mikor kötelező az ellenőrzés'
    ],
    requiredDefinitions: [
      {
        term: 'Másodfokú egyenlet',
        definitionLatex: 'ax^2+bx+c=0\\quad (a,b,c\\in\\mathbb{R},\\ a\\neq 0)',
        explanation: 'Pontosan másodfokú, ha a≠0. Az alaphalmaz általában $\\mathbb{R}$; gyökös/tört esetén szűkebb ÉT.',
      },
      {
        term: 'Diszkrimináns',
        definitionLatex: 'D=b^2-4ac',
        explanation: 'D>0: két különböző valós gyök; D=0: kétszeres gyök; D<0: nincs valós gyök.',
      },
      {
        term: 'Viète-formulák',
        definitionLatex: 'x_1+x_2=-\\frac{b}{a},\\quad x_1 x_2=\\frac{c}{a}',
        explanation: 'Gyöktényezős alakból: $ax^2+bx+c=a(x-x_1)(x-x_2)$.',
      },
      {
        term: 'Ekvivalens átalakítás',
        definitionLatex: 'A\\iff B\\text{ ugyanazon az alaphalmazon}',
        explanation: 'Négyzetre emelés, ismeretlennel osztás/szorzás általában NEM ekvivalens — ellenőrzés kell.',
      }
    ],

    examinerTraps: [
      {
        question: 'Miért okoz gyökvesztést, ha az x² = 2x egyenlet mindkét oldalát elosztjuk x-szel?',
        answer: 'Mert ismeretlennel osztottunk anélkül, hogy megvizsgáltuk volna az x = 0 esetet! Az x-szel való leosztás után x = 2-t kapunk, de elveszítettük az x = 0 megoldást. Helyes lépés: nullára rendezés és kiemelés: x(x - 2) = 0.',
        dangerLevel: 'Magas'
      },
      {
        question: 'Miért kötelező ellenőrizni a gyökös egyenleteket négyzetre emelés után?',
        answer: 'Mert a négyzetre emelés NEM ekvivalens átalakítás (pl. (-3)² = 3²)! A négyzetre emelés bővíti az értelmezési tartományt, ami hamis gyököket hozhat be.',
        dangerLevel: 'Magas'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Másodfokú egyenletek / egyenlőtlenségek\n\n### Fő képletek\n\n$ax^2+bx+c=0\\ (a\\neq0),\\quad D=b^2-4ac$\n\n$x_{1,2}=\\frac{-b\\pm\\sqrt{D}}{2a}$\n\n$x_1+x_2=-\\frac{b}{a},\\quad x_1 x_2=\\frac{c}{a}\\quad(\\text{Viète})$\n\n$ax^2+bx+c=a(x-x_1)(x-x_2)$\n\n### Definíciók\n\n**Diszkrimináns:** $D>0$ két különböző valós; $D=0$ kétszeres; $D<0$ nincs valós gyök.\n\n**Gyöktényezős alak:** $ax^2+bx+c=a(x-x_1)(x-x_2)$.\n\n**Ekvivalens egyenletek:** azonos megoldáshalmaz az adott alaphalmazon.\n\n**Hamis gyök:** nem ekvivalens lépés (pl. négyzetre emelés, ismeretlennel szorzás) után kapott, de az eredetit nem teljesítő érték.\n\n**Gyökvesztés:** ÉT-szűkítő lépés (pl. ismeretlennel osztás, páros gyökvonás) elveszíthet gyököt — ellenőrzés / kizárt esetek kötelező.\n\n### Egyenlőtlenség\n\nNullára rendezés → gyökök → parabola nyitása ($a$ előjele) → előjelvizsgálat / táblázat.\n\n### Visszavezetés / paraméter\n\n$u=x^2$, $u=a^x$, $u=\\log x$, $u=\\sin x$ — mindig ÉT a $u$-ra! Paraméteres: $D$ előjele szerint esetszétválasztás.",
    oralExamPlan: "## Szóbeli felelet vázlata — Másodfokú egyenletek (15–20 perc · 35 pont)\n\n### 0–2 perc · Bevezetés\nViète; megoldóképlet mint teljes négyzet. Felelet: képlet → D → Viète → ekvivalencia.\n\n### 2–5 perc · Definíció (2 pont)\nMásodfokú egyenlet ($a\\neq0$) **vagy** diszkrimináns esetei **vagy** ekvivalens átalakítás.\n\n### 5–8 perc · Elmélet\nMegoldási módszerek. Viète + gyöktényezős alak. Egyenlőtlenség előjelvizsgálattal. Hamis gyök / gyökvesztés példával.\n\n### 8–13 perc · Tétel + bizonyítás (6 pont)\n**Megoldóképlet levezetése** teljes négyzetté alakítással — ajánlott. Alternatíva: Viète a képletből.\n\n### 13–15 perc · Alkalmazások (4 pont)\nSzélsőérték $x=-b/(2a)$; fizika $s=v_0t+\\frac12 at^2$; kör–egyenes metszet.\n\n### 15–18 perc · Feladat (8 pont)\nParaméteres D-vizsgálat, tört-egyenlőtlenség, vagy visszavezethető egyenlet.\n\n### Zárás · Nyelv (5 pont)\nSoha ne ossz ismeretlennel ellenőrzés nélkül. Négyzetre emelés → kötelező ellenőrzés.\n\n### Pontozás\n10+2+6+8+4+5 = 35",
    visualizerType: 'quadratic'
  },
  {
    id: 'tétel-08',
    number: 8,
    title: 'A leíró statisztika jellemzői, diagramok. Nevezetes középértékek',
    category: 'Gráfelmélet és statisztika',
    tags: ['Leíró statisztika', 'Középértékek', 'Szórás', 'Sodrófa diagram', 'Közepek közötti egyenlőtlenség', 'HiMSUN'],
    difficulty: '1: alap alatti',
    summary: 'A statisztika tárgya, alapfogalmai (sokaság, ismérv, gyakoriságok). Grafikus ábrázolás (diagramtípusok, sodrófa/boxplot diagram, grafikus manipulációk). Helyzeti középértékek (módusz, medián, kvartilisek) és számított középértékek (harmonikus, mértani, számtani, négyzetes). Szóródási mutatók. Nevezetes közepek közötti egyenlőtlenség (H ≤ M ≤ A ≤ Q) bizonyítása.',
    statementLatex: 'H \\le M \\le A \\le Q \\quad \\Longleftrightarrow \\quad \\frac{2}{\\frac{1}{a} + \\frac{1}{b}} \\le \\sqrt{ab} \\le \\frac{a+b}{2} \\le \\sqrt{\\frac{a^2+b^2}{2}}',
    conditionsLatex: 'a, b > 0, \\quad \\text{egyenlőség } \\iff a = b',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 12. oldal (Statisztika, közepek, szórás)',
    introduction: `A statisztika a tömeges jelenségek számszerű vizsgálatával, adatok gyűjtésével, feldolgozásával és elemzésével foglalkozó tudományág, amely több mint ezeréves múltra tekint vissza (népszámlálások már az ókori Rómában is voltak).

A leíró statisztika az adatokat tömöríti és ábrázolja, míg a matematikai statisztika reprezentatív mintából von le valószínűségi következtetéseket a teljes sokaságra.`,
    detailedTheory: `### 1. A leíró statisztika alapfogalmai

- **Statisztikai sokaság:** a megfigyelés tárgyát képező egyedek összessége (pl. egy iskola tanulói).

- **Statisztikai ismérv ($X$):** a sokaság egyedeit jellemző tulajdonság (pl. testmagasság, érettségi jegy).

- **Gyakoriság ($f_i$):** megmutatja, hogy egy adott ismérvérték hányszor fordul elő a sokaságban. $\\sum f_i = N$.

- **Relatív gyakoriság ($g_i$):** a gyakoriság és az elemszám hányadosa: $g_i = \\frac{f_i}{N}$. Összegük: $\\sum g_i = 1$ (vagy 100%).

- **Kumulált (felhalmozott) gyakoriság ($f_i'$):** megmutatja, hogy hány olyan adat van, amely nem nagyobb egy adott értéknél.

- **Osztályközök:** folytonos ismérvek esetén az adathalmazt intervallumokra (osztályközökre) bontjuk.

### 2. Adatok grafikus ábrázolása és a diagramok

- **Diagramtípusok:**
  - Vonaldiagram: időbeli változások, trendek szemléltetésére.
  - Oszlopdiagram (és hisztogram): adatok egymáshoz viszonyított nagyságának összehasonlítására.
  - Kördiagram: részek aránya az egészhez képest (a körcikk középponti szöge: $\\alpha_i = g_i \\cdot 360^\\circ$).
  - Pontdiagram: két ismérv közötti korreláció vizsgálatára.
  - **Sodrófa-diagram (Box-plot, dobozdiagram):** öt kitüntetett értéket ábrázol: Minimum ($x_{\\min}$), Alsó kvartilis ($Q_1$), Medián ($Me = Q_2$), Felső kvartilis ($Q_3$), Maximum ($x_{\\max}$). A doboz hossza az interkvartilis terjedelem ($Q_3 - Q_1$).

- **Grafikus manipulációk:** az adatok tudatos vagy figyelmetlenségből fakadó torzítása: a függőleges tengely elvágása (nem 0-tól indul), nem arányos skálázás, 3D perspektivikus torzítás.

### 3. Statisztikai középértékek

- **Helyzeti középértékek:**
  - **Módusz ($Mo$):** a mintában leggyakrabban előforduló érték. Csak akkor jellemzi jól a sokaságot, ha kiemelkedő a gyakorisága.
  - **Medián ($Me$):** a nagyság szerint sorbarendezett adatok középső eleme. Páratlan $N$ esetén a középső: $x_{\\frac{N+1}{2}}$, páros $N$ esetén a két középső számtani közepe. Előnye: robusztus mutató, érzéketlen a szélső kiugró értékekre!
  - **Kvartilisek:** az adathalmazt 4 egyenlő részre osztják. $Q_1$ (alsó kvartilis): az adatok 25%-a kisebb nála; $Q_2 = Me$; $Q_3$ (felső kvartilis): az adatok 75%-a kisebb nála.

- **Számított középértékek ($a_1, a_2, \\dots, a_n > 0$):**
  - **Harmonikus közép ($H$):** a reciprok értékek számtani közepének reciproka:
    $$H = \\frac{n}{\\sum_{i=1}^n \\frac{1}{a_i}}$$
  - **Mértani (geometriai) közép ($M$):** a számok szorzatának $n$-edik gyöke:
    $$M = \\sqrt[n]{a_1 \\cdot a_2 \\dotsm a_n}$$
  - **Számtani (aritmetikai) közép ($A$ vagy $\\bar{x}$):** az adatok összege osztva a darabszámmal:
    $$A = \\frac{\\sum_{i=1}^n a_i}{n}$$
  - **Négyzetes (kvadratikus) közép ($Q$):** a négyzetek összegének átlagából vont négyzetgyök:
    $$Q = \\sqrt{\\frac{\\sum_{i=1}^n a_i^2}{n}}$$

- **Nevezetes közepek közötti egyenlőtlenség (HiMSUN / HaMiSaN szabály):**
  $$x_{\\min} \\le H \\le M \\le A \\le Q \\le x_{\\max}$$
  Egyenlőség csak akkor áll fenn, ha az összes átlagolandó szám megegyezik ($a_1 = a_2 = \\dots = a_n$).

### 4. Szóródási mutatók

- **Terjedelem ($R$):** a legnagyobb és legkisebb adat különbsége: $R = x_{\\max} - x_{\\min}$.

- **Félterjedelem (Interkvartilis terjedelem, $IQR$):** $IQR = Q_3 - Q_1$. Az adatok középső 50%-át fogja közre.

- **Átlagos abszolút eltérés ($\\delta$):** az adatok átlagtól vett abszolút eltéréseinek átlaga: $\\delta = \\frac{1}{n} \\sum |a_i - \\bar{x}|$.

- **Szórás ($\\sigma$ vagy $s_n$):** az adatok átlagtól vett négyzetes eltéréseinek átlagából vont négyzetgyök:
  $$\\sigma = \\sqrt{\\frac{1}{n} \\sum_{i=1}^n (a_i - \\bar{x})^2} = \\sqrt{\\frac{\\sum a_i^2}{n} - \\bar{x}^2}$$

- **Relatív szórás ($V$):** a szórás és az átlag hányadosa százalékban kifejezve: $V = \\frac{\\sigma}{\\bar{x}} \\cdot 100\\%$.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'Két pozitív szám számtani és mértani közepe közötti egyenlőtlenség algebrai bizonyítása',
        statementLatex: '\\frac{a+b}{2} \\ge \\sqrt{ab} \\quad (a, b > 0)',
        proofTitle: 'Bizonyítás teljes négyzet képzésével',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Átrendezés és beszorzás 2-vel',
            latexContent: '\\frac{a+b}{2} \\ge \\sqrt{ab} \\iff a + b \\ge 2\\sqrt{ab}',
            explanation: 'Mivel 2 > 0, az egyenlőtlenség iránya változatlan.'
          },
          {
            stepNumber: 2,
            title: 'Nullára rendezés és teljes négyzet felismerése',
            latexContent: 'a - 2\\sqrt{ab} + b \\ge 0 \\iff (\\sqrt{a})^2 - 2\\sqrt{a}\\sqrt{b} + (\\sqrt{b})^2 \\ge 0 \\iff (\\sqrt{a} - \\sqrt{b})^2 \\ge 0',
            explanation: 'Kihasználjuk, hogy a = (√a)² és b = (√b)², így a bal oldal az ismert (u - v)² teljes négyzet alakot ölti.'
          },
          {
            stepNumber: 3,
            title: 'Konklúzió levonása',
            latexContent: '(\\sqrt{a} - \\sqrt{b})^2 \\ge 0 \\quad (\\forall a, b > 0 \\text{ valós számra fennáll})',
            explanation: 'Bármely valós szám négyzete nemnegatív, így az egyenlőtlenség minden pozitív számpárra teljesül. Egyenlőség pontosan akkor áll fenn, ha √a = √b, azaz a = b.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'Két pozitív szám számtani és mértani közepe közötti egyenlőtlenség geometriai bizonyítása',
        proofTitle: 'Bizonyítás a Thalész-kör és a magasságtétel segítségével',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Thalész-kör felvétele p + q átmérővel',
            latexContent: 'd = p + q \\implies r = \\frac{p+q}{2} \\quad (\\text{a kör sugara})',
            explanation: 'Rajzoljunk fel egy kört, melynek átmérője p + q szakasz.'
          },
          {
            stepNumber: 2,
            title: 'Átfogóhoz tartozó magasság és a magasságtétel',
            latexContent: 'm = \\sqrt{p \\cdot q}',
            explanation: 'A szakaszok határpontjában az átmérőre állított merőleges körívig terjedő szakasza a derékszögű háromszög m magassága, ami a magasságtétel szerint √(pq).'
          },
          {
            stepNumber: 3,
            title: 'Magasság és sugár viszonya',
            latexContent: 'm \\le r \\implies \\sqrt{pq} \\le \\frac{p+q}{2}',
            explanation: 'A körben bármely merőleges magasság legfeljebb a kör sugarával lehet egyenlő (amikor az átmérő felezőpontjában van állítva). Ezzel a geometriai állítást igazoltuk.'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'Két pozitív szám számtani és négyzetes közepe közötti egyenlőtlenség bizonyítása',
        statementLatex: '\\frac{a+b}{2} \\le \\sqrt{\\frac{a^2+b^2}{2}} \\quad (a, b > 0)',
        proofTitle: 'Algebrai levezetés ekvivalens átalakításokkal',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Négyzetre emelés és rendezés',
            latexContent: '\\left(\\frac{a+b}{2}\\right)^2 \\le \\frac{a^2+b^2}{2} \\iff \\frac{a^2 + 2ab + b^2}{4} \\le \\frac{a^2+b^2}{2}',
            explanation: 'Mindkét oldal pozitív, így a négyzetre emelés ekvivalens átalakítás.'
          },
          {
            stepNumber: 2,
            title: 'Beszorzás 4-gyel és nullára rendezés',
            latexContent: 'a^2 + 2ab + b^2 \\le 2a^2 + 2b^2 \\iff 0 \\le a^2 - 2ab + b^2 \\iff 0 \\le (a - b)^2',
            explanation: 'Áthozva mindent a jobb oldalra ismét a nemnegatív (a - b)² teljes négyzetet kapjuk, ami mindig igaz.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Szélsőérték-feladatok megoldása közepekkel: ha két szám szorzata állandó ($ab = K$), összegük akkor minimális, ha $a = b$ (számtani-mértani közép egyenlőtlenségből). Ha összegük állandó ($a + b = S$), szorzatuk akkor maximális, ha $a = b$.',
      'Geometriai szélsőértékek: adott kerületű téglalapok közül a négyzet területe a legnagyobb; adott térfogatú téglatestek közül a kocka felszíne a legkisebb.',
      'Sorozatok elnevezése: számtani sorozatnál $a_n = A(a_{n-1}, a_{n+1})$, mértani sorozatnál $|a_n| = M(a_{n-1}, a_{n+1})$, harmonikus sorozatnál $a_n = H(a_{n-1}, a_{n+1})$.'
    ],
    applicationsOutside: [
      'Átlagsebesség számítása azonos útszakaszokra: ha ugyanazt a távolságot odafelé $v_1$, visszafelé $v_2$ sebességgel tesszük meg, a teljes út átlagsebessége a két sebesség **harmonikus közepe**: $v_{\\text{átlag}} = \\frac{2}{\\frac{1}{v_1} + \\frac{1}{v_2}}$. (Csak azonos idők esetén lenne számtani közép!).',
      'Közgazdaságtan és szociológia: Lorenz-görbe és Gini-koefficiens a társadalmi jövedelemegyenlőtlenségek mérésére (kumulált relatív gyakoriságokból).',
      'Pénzügyek: hozamok és árfolyamok átlagos növekedési ütemének meghatározásához mértani átlagot használunk.',
      'Központi Statisztikai Hivatal (KSH): infláció, fogyasztói árindex, munkanélküliségi ráta és népességi korfa elemzése.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Az egyetemen az alapképzésben részt vevők félévente átlagban 30 kreditet vesznek fel, a szórás 6,8 kredit. Hogyan változik a felvett kreditek átlaga és szórása, ha: a) mindenkinek 4-gyel növelik a felvett kreditek számát? b) mindenkinek 4%-kal növelik a felvett kreditek számát?',
        solutionLatex: '\\text{a) Ha minden adat } x_i\' = x_i + 4: \\\\ \\bar{x}\' = \\bar{x} + 4 = 30 + 4 = 34 \\text{ kredit}. \\\\ \\sigma\' = \\sigma = 6{,}8 \\text{ kredit (a szórás nem változik!).} \\\\ \\text{b) Ha minden adat } x_i\' = 1{,}04 \\cdot x_i: \\\\ \\bar{x}\' = 1{,}04 \\cdot 30 = 31{,}2 \\text{ kredit}. \\\\ \\sigma\' = 1{,}04 \\cdot 6{,}8 = 7{,}072 \\text{ kredit (a szórás is 4\\%-kal nő!).}'
      },
      {
        problemNumber: 2,
        question: 'Milyen pozitív a és b értékeknél maximális a √(4a + 1) + √(4b + 1) kifejezés értéke, ha a + b = 1?',
        solutionLatex: '\\text{Alkalmazzuk a számtani és négyzetes közép közötti egyenlőtlenséget:} \\\\ \\frac{\\sqrt{4a+1} + \\sqrt{4b+1}}{2} \\le \\sqrt{\\frac{(4a+1) + (4b+1)}{2}} = \\sqrt{\\frac{4(a+b) + 2}{2}} = \\sqrt{\\frac{4(1) + 2}{2}} = \\sqrt{3}. \\\\ \\sqrt{4a+1} + \\sqrt{4b+1} \\le 2\\sqrt{3}. \\\\ \\text{Egyenlőség pontosan akkor áll fenn, ha } 4a+1 = 4b+1 \\implies a = b = \\frac{1}{2}. \\\\ \\text{A maximum értéke } 2\\sqrt{3}.'
      }
    ],    oralPresentationOutline: [
      'Mintavétel, adatok; gyakoriság, relatív gyakoriság',
      'Diagramok: oszlop, kör, vonal — mikor melyik',
      'Középértékek: számtani, mértani, harmonikus, négyzetes; medián, módusz',
      'Szórás, terjedelem, kvartilisek — szóródás',
      'Nevezetes közepek egyenlőtlensége: $H\\le G\\le A\\le Q$',
      'Torzítás / félrevezető diagramok (vizsgáztatói kérdés)',
      'Szóbeli: definiálj 3 közepet + szórás + egy diagramtípus'
    ],
    requiredDefinitions: [
      {
        term: 'Számtani közép',
        definitionLatex: '\\bar x = \\frac{x_1+\\cdots+x_n}{n}',
        explanation: 'Érzékeny a szélsőséges adatokra. Súlyozott változat is létezik.',
      },
      {
        term: 'Medián és módusz',
        definitionLatex: '\\mathrm{Me}=\\text{középső adat (rendezve)},\\quad \\mathrm{Mo}=\\text{leggyakoribb}',
        explanation: 'Páratlan n: középső; páros n: a két középső számtani közepe (folytonos interpretációban).',
      },
      {
        term: 'Szórás',
        definitionLatex: 's=\\sqrt{\\frac{1}{n}\\sum (x_i-\\bar x)^2}\\quad(\\text{vagy }n-1\\text{ mintánál})',
        explanation: 'Az átlagtól való átlagos négyzetes eltérés gyöke; a szóródás fő mérőszáma.',
      },
      {
        term: 'Mértani közép',
        definitionLatex: 'G=\\sqrt[n]{x_1\\cdots x_n}\\quad (x_i>0)',
        explanation: 'Százalékos növekedések, arányok átlagolására. $G\\le A$ (AM–GM).',
      }
    ],

    examinerTraps: [
      {
        question: 'Ha egy autó 100 km-t 60 km/h-val tesz meg, majd a visszaúton 100 km-t 80 km/h-val, mennyi az átlagsebessége? Valóban (60 + 80) / 2 = 70 km/h?',
        answer: 'NEM 70 km/h! Ez a leggyakoribb statisztikai csapda! Mivel a megtett utak egyenlők, a lassabb sebességgel több időt töltött az autó. Az átlagsebesség a harmonikus közép: H(60, 80) = 2 / (1/60 + 1/80) = 2 · 480 / 14 ≈ 68,57 km/h.',
        dangerLevel: 'Magas'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Leíró statisztika, közepek\n\n### Fő egyenlőtlenség (HiMSUN)\n\n$H\\le M\\le A\\le Q \\quad (a_i>0),\\quad\\text{egyenlőség}\\iff a_1=\\cdots=a_n$\n\n**Harmonikus közép** $H=\\frac{n}{\\sum 1/a_i}$, **mértani közép** $M=\\sqrt[n]{a_1\\cdots a_n}$, **számtani közép** $A=\\frac{\\sum a_i}{n}$, **négyzetes közép** $Q=\\sqrt{\\frac{\\sum a_i^2}{n}}$\n\nKét tagra:\n$\\frac{2}{\\frac1a+\\frac1b}\\le\\sqrt{ab}\\le\\frac{a+b}{2}\\le\\sqrt{\\frac{a^2+b^2}{2}}$\n\n### Definíciók\n\n**Gyakoriság / relatív gyakoriság:** $f_i$, $g_i=f_i/N$, $\\sum g_i=1$.\n\n**Módusz:** leggyakoribb érték. **Medián:** rendezett sor középsője.\n\n**Kvartilisek:** $Q_1,Q_2=Me,Q_3$; $IQR=Q_3-Q_1$.\n\n**Szórás:**\n$\\sigma=\\sqrt{\\frac1n\\sum(a_i-\\bar x)^2}=\\sqrt{\\frac{\\sum a_i^2}{n}-\\bar x^2}$\n\n**Terjedelem:** $R=x_{\\max}-x_{\\min}$.\n\n### Transzformációk\n\n$x_i'=x_i+c$: átlag $+c$, szórás változatlan.\n\n$x_i'=k x_i$: átlag és szórás $|k|$-szoros.\n\n### Tételek\n\nAM–GM (számtani–mértani közép) algebrai: $(\\sqrt a-\\sqrt b)^2\\ge0$. Geometriai: Thalész + magasságtétel. AM–QM: $(a-b)^2\\ge0$.\n\n**Diagramok:** pont-, vonal-, oszlop-, kördiagram; **sodrófa** (boxplot) a kvartilisek és szélsőértékek megjelenítésére.",
    oralExamPlan: "## Szóbeli felelet vázlata — Statisztika / közepek (15–20 perc · 35 pont)\n\n### 0–2 perc · Bevezetés\nLeíró vs. matematikai statisztika. Diagramok szerepe; közepek „HiMSUN” sorrendje.\n\n### 2–5 perc · Definíció (2 pont)\nSzámtani közép **vagy** medián **vagy** szórás — pontos képlettel.\n\n### 5–8 perc · Elmélet\nHelyzeti vs. számított közepek. Diagramtípusok + boxplot öt száma. Szóródás. Félrevezető ábrák.\n\n### 8–13 perc · Tétel + bizonyítás (6 pont)\n**AM–GM** algebrai **vagy** geometriai bizonyítás. Alternatíva: AM–QM.\n\n### 13–15 perc · Alkalmazások (4 pont)\nÁtlagsebesség = harmonikus közép (egyenlő utak). Növekedési ütem → mértani. Szélsőérték AM–GM-mel.\n\n### 15–18 perc · Feladat (8 pont)\nÁtlag/szórás lineáris transzformációja, vagy közepekkel szélsőérték.\n\n### Zárás · Nyelv (5 pont)\nCsapda: átlagsebesség ≠ számtani közép. Ne keverd a mediánt az átlaggal.\n\n### Pontozás\n10+2+6+8+4+5 = 35",
    visualizerType: 'stats'
  },
  {
    id: 'tétel-09',
    number: 9,
    title: 'Függvénytani alapismeretek, függvények tulajdonságai, határérték, folytonosság. Számsorozatok. A számtani sorozat, az első n tag összege',
    category: 'Függvények és analízis',
    tags: ['Függvénytan', 'Határérték', 'Folytonosság', 'Számsorozatok', 'Számtani sorozat', 'Gauss-összegzés', 'Teljes indukció'],
    difficulty: '2: bemelegítő',
    summary: 'A függvény fogalma mint egyértelmű hozzárendelés. Globális és lokális tulajdonságok (ÉTT, ÉTK, zérushely, monotonitás, szélsőérték, paritás, periodicitás, korlátosság, konvexitás, folytonosság). Függvény- és sorozathatárérték (Cauchy-féle ε-N küszöbindexes definíció). A számtani sorozat n-edik tagja és első n tagjának összegképlete.',
    statementLatex: 'a_n = a_1 + (n-1)d, \\quad S_n = \\frac{a_1 + a_n}{2} \\cdot n = \\frac{2a_1 + (n-1)d}{2} \\cdot n, \\quad a_n = \\frac{a_{n-k} + a_{n+k}}{2}',
    conditionsLatex: 'a_1, d \\in \\mathbb{R}, \\quad n \\in \\mathbb{N}^+',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 4. oldal (Számtani sorozat, sorozatok)',
    introduction: `René Descartes és Pierre de Fermat a 17. században fektették le a változó mennyiségek kapcsolatának matematikai alapjait a koordinátarendszer segítségével.

A modern, halmazelméleti függvényfogalmat Peter Gustav Lejeune Dirichlet (1805–1859) határozta meg.

A számsorozatok összegzésének törvényeit az ifjú Carl Friedrich Gauss fedezte fel újra elemi iskolásként.`,
    detailedTheory: `### 1. A függvény fogalma és megadási módjai

- **Definíció:** Adott két nemüres halmaz, $X$ és $Y$. Ha az $X$ halmaz minden egyes eleméhez valamilyen egyértelmű szabály szerint hozzárendeljük az $Y$ halmaz pontosan egy elemét, akkor ezt a hozzárendelést függvénynek nevezzük ($f: X \\to Y$).

- **Értelmezési tartomány ($D_f$):** az a halmaz, amelynek elemeihez rendelünk ($X$).

- **Értékkészlet ($R_f$):** az $Y$ halmaz azon elemeinek részhalmaza, amelyeket a függvény értékként ténylegesen felvesz: $R_f = \\{f(x) \\mid x \\in D_f\\} \\subseteq Y$.

### 2. Függvények globális és lokális tulajdonságai

- **Zérushely:** az értelmezési tartomány azon $x_0 \\in D_f$ pontja, amelyre $f(x_0) = 0$ (a grafikon metszi vagy érinti az x-tengelyt).

- **Monotonitás:**
  - Szigorúan monoton növekvő: $x_1 < x_2 \\implies f(x_1) < f(x_2)$.
  - Szigorúan monoton csökkenő: $x_1 < x_2 \\implies f(x_1) > f(x_2)$.

- **Szélsőérték:**
  - Globális maximum: létezik $x_0 \\in D_f$, hogy minden $x \\in D_f$-re $f(x) \\le f(x_0)$. Maximumhely: $x_0$, maximumérték: $f(x_0)$.
  - Globális minimum: minden $x \\in D_f$-re $f(x) \\ge f(x_0)$.
  - Lokális szélsőérték: ha az egyenlőtlenség $x_0$ egy nyílt környezetében teljesül.

- **Paritás (szimmetria):**
  - Páros függvény: $f(-x) = f(x)$ minden $x \\in D_f$-re. Grafikonja szimmetrikus az y-tengelyre (pl. $x^2, \\cos x, |x|$).
  - Páratlan függvény: $f(-x) = -f(x)$ minden $x \\in D_f$-re. Grafikonja középpontosan szimmetrikus az origóra (pl. $x^3, \\sin x, 1/x$).

- **Periodicitás:** létezik olyan $p > 0$ periódus, hogy minden $x$-re $f(x + p) = f(x)$ (pl. $\\sin x, \\cos x$ periódusa $2\\pi$, $\\operatorname{tg} x$ periódusa $\\pi$).

- **Korlátosság:**
  - Alulról korlátos: létezik $k \\in \\mathbb{R}$, hogy minden $x$-re $f(x) \\ge k$ (legnagyobb alsó korlát: infimum).
  - Felülről korlátos: létezik $K \\in \\mathbb{R}$, hogy minden $x$-re $f(x) \\le K$ (legkisebb felső korlát: szuprémum).
  - Korlátos: alulról és felülről is korlátos.

- **Konvexitás:** $f$ konvex az intervallumon, ha bármely két pontját összekötő húr a grafikon felett vagy azon fut. Konkáv, ha alatta fut. Inflexiós pont: ahol a függvény konvexből konkávba vált (vagy megfordítva).

- **Folytonosság:** $f$ folytonos az $x_0$ pontban, ha létezik határértéke $x_0$-ban, és megegyezik a helyettesítési értékkel: $\\lim_{x \\to x_0} f(x) = f(x_0)$.

### 3. Számsorozatok

- **Sorozat fogalma:** A számsorozat a pozitív egész számok halmazán értelmezett függvény: $a: \\mathbb{N}^+ \\to \\mathbb{R}$, jelölése: $\\{a_n\\}_{n=1}^\\infty$.

- **Megadási módjai:** explicite képlettel ($a_n = 2n - 1$) vagy rekurzív formulával ($a_1 = 1, a_{n+1} = a_n + 3$).

- **Sorozat határértéke (Cauchy-féle $\\varepsilon$-$N$ definíció):**
  Az $A$ valós számot az $a_n$ sorozat határértékének nevezzük ($\\lim_{n \\to \\infty} a_n = A$), ha minden $\\varepsilon > 0$ valós számhoz létezik olyan $N(\\varepsilon) \\in \\mathbb{N}$ küszöbindex, hogy minden $n > N$ esetén $|a_n - A| < \\varepsilon$.

- **Konvergencia:** ha a határérték véges valós szám, a sorozat konvergens. Ha nem létezik vagy $\\pm \\infty$, a sorozat divergens.

- **Weierstrass-tétel:** Minden monoton és korlátos sorozat konvergens!

### 4. A számtani sorozat

- **Definíció:** Az $\\{a_n\\}$ sorozatot számtani sorozatnak nevezzük, ha a második tagjától kezdve bármely tagjának és az őt megelőző tagnak a különbsége állandó ($d$, differencia):
  $$a_{n+1} - a_n = d \\quad (\\forall n \\ge 1)$$

- **N-edik tag képlete:**
  $$a_n = a_1 + (n - 1)d$$

- **Számtani közép tulajdonság:** A sorozat bármely tagja (a másodiktól kezdve) a tőle szimmetrikusan elhelyezkedő tagok számtani közepe:
  $$a_n = \\frac{a_{n-k} + a_{n+k}}{2} \\quad (k < n)$$

- **Első n tag összege ($S_n$):**
  $$S_n = \\frac{a_1 + a_n}{2} \\cdot n = \\frac{2a_1 + (n-1)d}{2} \\cdot n$$

### 5. Határérték és folytonosság

- **Határérték:** $\\lim_{x\\to a}f(x)=L$, ha minden $\\varepsilon>0$-hoz van olyan $\\delta>0$, hogy $0<|x-a|<\\delta$ esetén $|f(x)-L|<\\varepsilon$.

- **Két oldali határérték:** a határérték létezéséhez a jobb és a bal oldali határértéknek meg kell egyeznie. Például $f(x)=\\frac{|x|}{x}$ esetén $x\\to0^+$ mellett $1$, $x\\to0^-$ mellett $-1$, tehát a határérték nem létezik.

- **Folytonosság:** $f$ folytonos $a$-ban, ha $\\lim_{x\\to a}f(x)=f(a)$; ehhez a helyettesítési értéknek is léteznie kell.

- **Nevezetes határértékek:** $\\lim_{x\\to0}\\frac{\\sin x}{x}=1$, $\\lim_{x\\to0}\\frac{e^x-1}{x}=1$, $\\lim_{x\\to\\infty}\\left(1+\\frac1x\\right)^x=e$.

- **Aszimptota:** ha $\\lim_{x\\to\\infty}f(x)=c$, akkor vízszintes aszimptota van; ha $\\lim_{x\\to a}f(x)=\\pm\\infty$, akkor függőleges aszimptota.

### 6. Sorozatok konvergenciája

- **Korlátosság és monotonitás:** minden konvergens sorozat korlátos; minden monoton és korlátos sorozat konvergens (a valós számok teljessége miatt).

- **Műveletek:** konvergens sorozatok összege, szorzata és hányadosa (nullától különböző határérték esetén) a határértékekkel számolható.

- **Példa:** $a_n=\\frac{3n^2+2}{n^2-1}\\to3$, mert a számlálót és a nevezőt $n^2$-tel osztva $\\frac{3+2/n^2}{1-1/n^2}\\to3$.

- **Mértani sorozat határértéke:** $q^n\\to0$, ha $|q|<1$; $q^n\\to1$, ha $q=1$; divergens, ha $|q|>1$, és $q=-1$ esetén oszcillál.

- **Számtani sorozat:** ha $d\\neq0$, akkor $a_n\\to\\pm\\infty$; csak $d=0$ esetén konvergens (konstans sorozat).

### 7. A számtani sorozat alkalmazásai

- **Középérték:** $a_k=\\frac{a_{k-1}+a_{k+1}}{2}$, ezért a szomszédos tagok különbsége állandó.

- **Összeg mint függvény:** $S_n=\\frac d2n^2+\\left(a_1-\\frac d2\\right)n$, tehát $S_n$ az $n$-nek másodfokú függvénye, konstans tag nélkül.

- **Példa:** $1+2+\\dots+100=\\frac{100\\cdot101}{2}=5050$; a páratlan számok összege $1+3+\\dots+(2n-1)=n^2$.

- **Szöveges feladat:** egy 20 soros nézőtéren az első sorban 30 hely van, soronként 2-vel több. Összesen $S_{20}=\\frac{2\\cdot30+19\\cdot2}{2}\\cdot20=980$ hely.

- **Összevetés:** a számtani növekedés lineáris, a mértani exponenciális; ezért hosszú távon a mértani sorozat sokkal gyorsabban nő.

### 8. Szóbeli kiemelések

- A függvény fogalmánál a kulcs: minden értelmezési tartománybeli elemhez pontosan egy érték tartozik.
- A határértéknél említsd a két oldali határértéket és a folytonosság kapcsolatát.
- A számtani sorozatnál a $d$ előjele dönt a monotonitásról; az összegképletet a Gauss-féle párosítással indokold.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'A számtani sorozat n-edik tagjának képlete: a_n = a_1 + (n - 1)d',
        proofTitle: 'Bizonyítás teljes indukcióval',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Bázislépés n = 1-re',
            latexContent: 'a_1 = a_1 + (1 - 1)d = a_1 + 0 \\cdot d = a_1 \\quad (\\text{Igaz!})',
            explanation: 'Az állítás n = 1 esetén nyilvánvalóan teljesül.'
          },
          {
            stepNumber: 2,
            title: 'Indukciós feltevés n = k-ra',
            latexContent: 'a_k = a_1 + (k - 1)d \\quad (\\text{Feltesszük, hogy igaz})',
            explanation: 'Feltételezzük, hogy az összefüggés érvényes k indexre.'
          },
          {
            stepNumber: 3,
            title: 'Öröklődés igazolása n = k + 1-re',
            latexContent: 'a_{k+1} = a_k + d = [a_1 + (k - 1)d] + d = a_1 + kd = a_1 + [(k+1) - 1]d',
            explanation: 'A számtani sorozat definíciója szerint a_(k+1) = a_k + d. Behelyettesítve az indukciós feltevést megkapjuk a k+1-re vonatkozó képletet. Ezzel a tételt igazoltuk.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'A számtani sorozat első n tagjának összegképlete: S_n = n(a_1 + a_n)/2',
        proofTitle: 'Bizonyítás a Gauss-féle megfordításos összegzéssel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Az összeg felírása kétféle sorrendben',
            latexContent: 'S_n = a_1 + a_2 + \\dotsm + a_{n-1} + a_n \\\\ S_n = a_n + a_{n-1} + \\dotsm + a_2 + a_1',
            explanation: 'Írjuk fel az első n tag összegét növekvő és csökkenő indexek szerint.'
          },
          {
            stepNumber: 2,
            title: 'A két sor összeadása oszloponként',
            latexContent: '2S_n = (a_1 + a_n) + (a_2 + a_{n-1}) + \\dotsm + (a_n + a_1)',
            explanation: 'Összeadjuk az egymás alatt álló tagpárokat.'
          },
          {
            stepNumber: 3,
            title: 'Tagpárok azonossága és rendezés',
            latexContent: 'a_k + a_{n-k+1} = [a_1 + (k-1)d] + [a_1 + (n-k)d] = a_1 + [a_1 + (n-1)d] = a_1 + a_n',
            explanation: 'Mivel mind az n darab oszlop összege azonos: a_1 + a_n, ezért 2S_n = n(a_1 + a_n), amiből 2-vel osztva adódik a képlet.'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'Számtani sorozat bármely tagja a szimmetrikus elemek számtani közepe',
        statementLatex: 'a_n = \\frac{a_{n-k} + a_{n+k}}{2} \\quad (k < n)',
        proofTitle: 'Közvetlen levezetés az n-edik tag képletéből',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'A szimmetrikus tagok kifejtése',
            latexContent: 'a_{n-k} = a_1 + (n - k - 1)d, \\quad a_{n+k} = a_1 + (n + k - 1)d',
            explanation: 'Alkalmazzuk az n-edik tag képletét n-k és n+k indexekre.'
          },
          {
            stepNumber: 2,
            title: 'Összegzés és osztás 2-vel',
            latexContent: '\\frac{a_{n-k} + a_{n+k}}{2} = \\frac{2a_1 + (2n - 2)d + kd - kd}{2} = \\frac{2[a_1 + (n - 1)d]}{2} = a_n',
            explanation: '+kd és -kd kiejtik egymást, és pontosan a_n-et kapjuk vissza.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Analízis és határértékszámítás: tört kifejezések sorozathatárértékének megállapítása a legnagyobb hatvány kiemelésével.',
      'Függvényvizsgálat: a függvények zérushelyeinek, lokális szélsőértékeinek és inflexiós pontjainak szisztematikus táblázatos felírása.',
      'Permanenciaelv igazolása: irracionális kitevőjű hatvány ($a^\\pi$) sorozathatárértékként való definiálása ($a^{\\lim r_n}$).',
      'Fraktálgeometria: önhasonló fraktálok (Koch-hópehely, Sierpiński-háromszög) kerületének és területének számítása sorozatokkal.'
    ],
    applicationsOutside: [
      'Építészet és nézőtér tervezés: színházak, amfiteátrumok és stadionok széksorai, ahol minden egymást követő sorban egyenletesen $d$ darabbal több szék fér el.',
      'Természet és biológia: fenyőtobozok, ananász pikkelyei és a napraforgó magjai spiráljai (Fibonacci-sorozat).',
      'Szabadon eső test másodpercenként megtett útjai: az egymást követő 1 másodperces időközökben megtett utak aránya páratlan számok számtani sorozata ($1 : 3 : 5 : 7 : \\dots$).'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Hány sor van abban a színházban, ahol 510 szék van összesen, az első sorban 20 szék van, és minden sorban 2-vel nő a székek száma?',
        solutionLatex: 'a_1 = 20, \\; d = 2, \\; S_n = 510. \\\\ S_n = \\frac{2a_1 + (n-1)d}{2} \\cdot n \\implies \\frac{2 \\cdot 20 + (n-1)2}{2} \\cdot n = 510 \\\\ (20 + n - 1)n = 510 \\implies n^2 + 19n - 510 = 0. \\\\ n_{1,2} = \\frac{-19 \\pm \\sqrt{361 + 2040}}{2} = \\frac{-19 \\pm 49}{2} \\implies n_1 = 15, \\; n_2 = -34. \\\\ \\text{Mivel } n \\in \\mathbb{N}^+, \\text{ a színházban 15 sor van.}'
      },
      {
        problemNumber: 2,
        question: 'Határozd meg az a_n = (n³ + 5n + 2) / (3n³ - 2n² + 5) sorozat határértékét n → ∞ esetén!',
        solutionLatex: '\\lim_{n \\to \\infty} \\frac{n^3 + 5n + 2}{3n^3 - 2n^2 + 5} = \\lim_{n \\to \\infty} \\frac{n^3(1 + \\frac{5}{n^2} + \\frac{2}{n^3})}{n^3(3 - \\frac{2}{n} + \\frac{5}{n^3})} = \\frac{1 + 0 + 0}{3 - 0 + 0} = \\frac{1}{3}.'
      },
      {
        problemNumber: 3,
        question: 'Egy színház nézőterén 20 sor van. Az első sorban 30 hely, minden további sorban 2-vel több hely van. Hány hely van a 10. sorban, és hány hely van összesen?',
        solutionLatex: 'a_1=30,\\ d=2,\\ n=20:\\quad a_{10}=30+9\\cdot2=48; \\quad S_{20}=\\frac{2\\cdot30+19\\cdot2}{2}\\cdot20=\\frac{98}{2}\\cdot20=980.',
        explanation: 'A helyek száma számtani sorozatot alkot. A 10. tagot az n-edik tag képletével, az összes helyet az első n tag összegképletével számoljuk. Ellenőrzés: az első és az utolsó sor átlaga (30+68)/2=49, szorozva 20 sorral = 980.'
      },
    ],    oralPresentationOutline: [
      'Függvény fogalma: $f:D\\to R$, egyértelmű hozzárendelés',
      'Értelmezési tartomány, értékkészlet, grafikon',
      'Tulajdonságok: monotonitás, zérushely, szélsőérték, paritás, periodicitás',
      'Korlátosság; injektív / szürjektív / bijektív; inverz',
      'Határérték szemléletesen és $\\varepsilon$-nyelven (emelt szint)',
      'Folytonosság pontban és intervallumon; szakadások típusai',
      'Elemi függvények áttekintése (hatvány, exp, log, trig)'
    ],
    requiredDefinitions: [
      {
        term: 'Függvény',
        definitionLatex: 'f:D\\to\\mathbb{R}\\text{ minden }x\\in D\\text{-hez pontosan egy }f(x)\\text{-et rendel}',
        explanation: 'A grafikon: $\\{(x,f(x)):x\\in D\\}$. Függőleges vonal teszt.',
      },
      {
        term: 'Monotonitás',
        definitionLatex: 'x_1<x_2 \\Rightarrow f(x_1)\\le f(x_2)\\text{ (növő)}',
        explanation: 'Szigorú monotonitásnál $<$. Csökkenőnél fordított egyenlőtlenség.',
      },
      {
        term: 'Határérték (szemlélet)',
        definitionLatex: '\\lim_{x\\to a}f(x)=L',
        explanation: 'x közelít a-hoz (a-t esetleg kihagyva), f(x) közelít L-hez. Folytonosság: a lim = f(a).',
      },
      {
        term: 'Folytonosság pontban',
        definitionLatex: '\\lim_{x\\to a}f(x)=f(a)',
        explanation: 'Három feltétel: a∈D, létezik a határérték, és egyenlő a függvényértékkel.',
      }
    ],

    examinerTraps: [
      {
        question: 'Igaz-e, hogy minden korlátos sorozat konvergens?',
        answer: 'NEM! Például az a_n = (-1)^n sorozat korlátos (alsó korlát -1, felső korlát 1), de DIVERGENS, mert felváltva -1 és +1 értékeket vesz fel, így nincs határértéke. A tétel úgy szól: minden KORLÁTOS ÉS MONOTON sorozat konvergens!',
        dangerLevel: 'Magas'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Függvénytan, határérték, folytonosság, számtani sorozat\n\n### Fő állítások\n\n$a_n = a_1 + (n-1)d, \\quad S_n = \\frac{a_1+a_n}{2}\\cdot n = \\frac{2a_1+(n-1)d}{2}\\cdot n$\n\n$a_n = \\frac{a_{n-k}+a_{n+k}}{2} \\quad (k<n)$\n\n**Feltételek:** $a_1,d\\in\\mathbb{R}$, $n\\in\\mathbb{N}^+$.\n\n### Definíciók\n\n**Függvény:** nemüres $X,Y$; $X$ minden eleméhez $Y$ pontosan egy elemét rendeljük ($f:X\\to Y$). $D_f=X$, $R_f=\\{f(x):x\\in D_f\\}$.\n\n**Monotonitás / szélsőérték / paritás / periodicitás:** szig. növő: $x_1<x_2\\Rightarrow f(x_1)<f(x_2)$; páros $f(-x)=f(x)$; páratlan $f(-x)=-f(x)$; periodikus $\\exists p>0: f(x+p)=f(x)$.\n\n**Folytonosság $a$-ban:** $\\lim_{x\\to a}f(x)=f(a)$ (helyettesítési érték, határérték, egyenlőség).\n\n**Sorozathatárérték (Cauchy):** $\\lim a_n=A \\iff \\forall\\varepsilon>0\\,\\exists N: n>N\\Rightarrow |a_n-A|<\\varepsilon$. Weierstrass: monoton + korlátos $\\Rightarrow$ konvergens.\n\n**Számtani sorozat:** $a_{n+1}-a_n=d$ állandó.\n\n### Tételek\n\n1. $a_n=a_1+(n-1)d$ — teljes indukció.\n2. $S_n=\\frac{n}{2}(a_1+a_n)$ — Gauss-párosítás.\n3. $a_n=\\frac{a_{n-k}+a_{n+k}}{2}$ — számtani közép.\n\n### Képlettár\nHivatalos Képlettár 2026: 4. oldal (számtani sorozat, sorozatok).\n\n### Csapda\nKorlátos $\\not\\Rightarrow$ konvergens (pl. $(-1)^n$) — Weierstrasshoz kell a monotonitás is.",
    oralExamPlan: "## Szóbeli felelet vázlata — 9. tétel\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nÍv: bevezetés → függvénytulajdonságok → határérték/folytonosság → számsorozat → számtani sorozat (def. + bizonyítás) → alkalmazás → feladat.\n\n### 0:00–1:30 · Bevezetés (szerkezet)\nDescartes–Fermat; Dirichlet függvényfogalma; Gauss iskolai összegzése. Mondd el a felelet ívét.\n\n### 1:30–5:00 · Fogalmak\nEgyértelmű hozzárendelés; $D_f$, $R_f$; zérushely, monotonitás, szélsőérték, paritás, periodicitás, korlátosság.\n\n### 5:00–7:30 · Definíció (2 pont)\n**Kimondandó:** folytonosság pontban *vagy* sorozathatárérték $\\varepsilon$-$N$ alakja. Emeld ki Weierstrasst.\n\n### 7:30–12:30 · Tétel + bizonyítás (6 pont)\n**Ajánlott:** $S_n=\\frac{n}{2}(a_1+a_n)$ Gauss-módszerrel. Alternatíva: $a_n=a_1+(n-1)d$ indukcióval.\n\n### 12:30–14:30 · Alkalmazások (4 pont)\nNézőtér-sorok; szabadon eső test     :3:5:\\dots$; Gauss története — 1 részletes vagy 3 rövid.\n\n### 14:30–18:00 · Feladat (8 pont)\nPl. $S_n=510$, $a_1=20$, $d=2\\Rightarrow n=15$; vagy polinomhányados határértéke.\n\n### 18:00–19:30 · Zárás (nyelv 5 pont)\nSzámtani növekedés lineáris, mértani exponenciális.\n\n### Pontozás\nSzerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5 → **35**",
    visualizerType: 'function'
  },
  {
    id: 'tétel-10',
    number: 10,
    title: 'Mértani sorozat, az első n tag összege, végtelen mértani sor. Kamatszámítás, gyűjtőjáradék, törlesztőrészlet. Exponenciális folyamatok a társadalomban és a természetben',
    category: 'Függvények és analízis',
    tags: ['Mértani sorozat', 'Kvóciens', 'Végtelen mértani sor', 'Kamatszámítás', 'Gyűjtőjáradék', 'Törlesztőrészlet', 'Exponenciális'],
    difficulty: '2: bemelegítő',
    summary: 'A mértani sorozat definíciója és hányadosa (q). Az n-edik tag és az első n tag összegképlete. A végtelen mértani sor fogalma és konvergenciája (|q| < 1). Pénzügyi matematika: kamatos kamat, gyűjtőjáradék és törlesztőrészlet. Exponenciális folyamatok a társadalomban és a természetben.',
    statementLatex: 'a_n = a_1 \\cdot q^{n-1}, \\quad S_n = a_1 \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1), \\quad S_\\infty = \\frac{a_1}{1 - q} \\quad (|q| < 1)',
    conditionsLatex: 'a_1 \\neq 0, \\quad q \\neq 0',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 4. oldal (Mértani sorozat, végtelen sor összege, kamatos kamat)',
    introduction: `„Ha 7 ház mindegyikében 7 macska van, mindegyik megfog 7 egeret, minden egér megeszik 7 búzaszemet, minden búzaszemből 7 mérő búza terem: hány mérő búza lett volna abból?” Ez a mértani sorozatra vezető híres feladat a 3600 éves ókori egyiptomi Rhind-papiruszon maradt fenn.

A mértani sorozat ma a banki hitelezés, a járadékszámítás és a természeti exponenciális növekedési modellek legfontosabb matematikai eszköze.`,
    detailedTheory: `### 1. A mértani sorozat fogalma és tulajdonságai

- **Definíció:** Az $\\{a_n\\}$ számsorozatot ($a_n \\neq 0$) mértani sorozatnak nevezzük, ha a második tagjától kezdve bármelyik tagjának és az őt megelőző tagnak a hányadosa állandó ($q$, kvóciens):
  $$\\frac{a_{n+1}}{a_n} = q = \\text{konstans} \\quad (\\forall n \\ge 1, q \\neq 0)$$

- **N-edik tag képlete:**
  $$a_n = a_1 \\cdot q^{n-1}$$

- **Mértani közép tulajdonság:** A sorozat bármely tagjának abszolút értéke a két szomszédos (vagy szimmetrikusan elhelyezkedő) tag mértani közepe:
  $$|a_n| = \\sqrt{a_{n-1} \\cdot a_{n+1}} \\implies a_n^2 = a_{n-k} \\cdot a_{n+k} \\quad (k < n)$$

- **Konvergencia viselkedés:**
  - Ha $|q| < 1$: $a_n \\to 0$, a sorozat nullához konvergál.
  - Ha $q = 1$: konstans sorozat ($a_n = a_1$), konvergens.
  - Ha $q = -1$: oszcilláló divergens sorozat ($a_1, -a_1, a_1, -a_1, \\dots$).
  - Ha $|q| > 1$: divergens sorozat ($|a_n| \\to \\infty$).

### 2. Az első n tag összege és a végtelen mértani sor

- **Első n tag összege ($S_n$):**
  $$S_n = a_1 \\frac{q^n - 1}{q - 1} = a_1 \\frac{1 - q^n}{1 - q} \\quad (q \\neq 1)$$
  (Ha $q = 1$, akkor $S_n = n \\cdot a_1$).

- **Végtelen mértani sor:** az $a_1 + a_1 q + a_1 q^2 + \\dotsm$ végtelen összeg.

- **Végtelen sor összege:** a részletösszegek sorozatának határértéke ($n \\to \\infty$).
  - Ha $|q| < 1$, akkor $q^n \\to 0$, így a végtelen mértani sor **konvergens**:
    $$S_\\infty = \\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} a_1 \\frac{1 - q^n}{1 - q} = \\frac{a_1}{1 - q}$$
  - Ha $|q| \\ge 1$, a végtelen sor divergens (nincs véges összege).

- **Alkalmazása:** Végtelen szakaszos tizedes törtek átírása közönséges törtté (pl. $0{,}\\dot{3} = \\frac{0{,}3}{1 - 0{,}1} = \\frac{0{,}3}{0{,}9} = \\frac{1}{3}$).

### 3. Pénzügyi matematika

- **Kamatos kamat:** a tőke $p\\%$ kamatlábbal növekszik évenként, és a kamat maga is tőkésedik (újrakamatozik):
  $$T_n = T_0 \\cdot \\left(1 + \\frac{p}{100}\\right)^n = T_0 \\cdot q^n \\quad \\left(q = 1 + \\frac{p}{100} \\text{ a kamattényező}\\right)$$

- **Gyűjtőjáradék (megtakarítás):** minden év elején elhelyezünk a bankban azonos $a$ összeget, amely évi $p\\%$-os kamatos kamattal kamatozik. Az $n$-edik év végére felgyűlt összeg:
  $$S = a \\cdot q^n + a \\cdot q^{n-1} + \\dotsm + a \\cdot q = a \\cdot q \\cdot \\frac{q^n - 1}{q - 1}$$

- **Törlesztőrészlet (annuitásos hiteltörlesztés):** $S_0$ nagyságú felvett hitelt $n$ éven keresztül minden év végén azonos $a$ összegű törlesztőrészlettel fizetünk vissza:
  $$S_0 \\cdot q^n = a \\frac{q^n - 1}{q - 1} \\implies a = S_0 \\cdot q^n \\cdot \\frac{q - 1}{q^n - 1}$$

### 4. Exponenciális folyamatok a természetben és a társadalomban

- **Lényege:** Olyan folyamat, ahol egyenlő időközök alatt a mennyiség mindig ugyanannyiszorosára változik: $N(t) = N_0 \\cdot a^t = N_0 \\cdot e^{kt}$.

- **Példák:**
  - Népességnövekedés (Malthus-modell).
  - Radioaktív bomlás: $N(t) = N_0 \\cdot 2^{-t / T_{1/2}}$ ($T_{1/2}$ a felezési idő).
  - Járványterjedés kezdeti szakasza (fertőzöttek száma: $R_0^t$).
  - Számítógépek számítási kapacitása (Moore-törvény: kétévente duplázódik).

### 5. Kamatos kamat, hitel és megtakarítás

- **Kamatos kamat:** $n$ év után $a_n=a_0(1+p)^n$, ahol $p$ az éves kamatláb tizedes alakban. A növekedés mértani sorozat, hányadosa $q=1+p$.

- **Havi tőkésítés:** $a_n=a_0\\left(1+\\frac{p}{12}\\right)^{12n}$; minél gyakoribb a tőkésítés, annál nagyobb a tényleges hozam.

- **Effektív kamatláb:** $p_{\\text{eff}}=\\left(1+\\frac{p}{m}\\right)^m-1$.

- **Törlesztés:** $T$ hitel, havi $p/12$ kamat, havi $r$ törlesztés mellett $n$ hónap után az adósság $T\\left(1+\\frac{p}{12}\\right)^n-r\\cdot\\frac{\\left(1+\\frac{p}{12}\\right)^n-1}{p/12}$. A hitel akkor fogy el, ha ez nulla, innen $r=\\frac{T\\cdot\\frac{p}{12}}{1-\\left(1+\\frac{p}{12}\\right)^{-n}}$.

- **Megtakarítás:** havi $r$ befizetés esetén $n$ hónap után $r\\cdot\\frac{\\left(1+\\frac{p}{12}\\right)^n-1}{p/12}$ a vagyon.

### 6. Végtelen mértani sor és a konvergencia

- A végtelen sor csak $|q|<1$ esetén konvergens, összege $S=\\frac{a_1}{1-q}$. Ha $|q|\\ge1$, a tagok nem tartanak nullához, ezért a sor divergens.

- **Példa:** $0{,}\\overline9=0{,}9+0{,}09+\\dots=\\frac{0{,}9}{1-0{,}1}=1$.

- **Zénón-paradoxon:** $\\frac12+\\frac14+\\frac18+\\dots=1$, tehát végtelen sok tag összege is lehet véges.

- **A feltétel fontos:** $1+2+4+\\dots$ esetén $q=2$, a képlet "eredménye" $\\frac1{1-2}=-1$, ami nyilvánvalóan hamis; a képlet csak $|q|<1$-re érvényes.

### 7. Exponenciális modellek és linearizálás

- A mértani sorozat $a_n=a_1q^{n-1}$ alakja kitevős; logaritmussal lineárissá tehető: $\\lg a_n=\\lg a_1+(n-1)\\lg q$, tehát $\\lg a_n$ az $n$ lineáris függvénye.

- **Duplázódási idő:** $q=2^{1/T}$, azaz $T=\\frac{\\lg2}{\\lg q}$; bomlásnál $q=\\left(\\frac12\\right)^{1/T}$.

- **Példa:** évi $2\\%$-os növekedés esetén $T=\\frac{\\lg2}{\\lg1{,}02}\\approx35$ év.

- **Korlátok:** a tiszta mértani modell hosszú távon irreális (erőforrás-korlát), ezért a gyakorlatban logisztikus modellt használnak.

### 8. Szóbeli kiemelések

- Mindig mondd ki: az összegképlet feltétele $q\\neq1$; $q=1$ esetén $S_n=na_1$.
- A végtelen sornál a konvergencia feltétele $|q|<1$, és hivatkozz a határérték fogalmára.
- A pénzügyi példáknál a kamatlábat tizedes törtként írd be, és ellenőrizd a nagyságrendet.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'A mértani sorozat n-edik tagjának képlete: a_n = a_1 · q^(n-1)',
        proofTitle: 'Bizonyítás teljes indukcióval',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Bázislépés n = 1-re',
            latexContent: 'a_1 = a_1 \\cdot q^{1-1} = a_1 \\cdot q^0 = a_1 \\cdot 1 = a_1 \\quad (\\text{Igaz!})',
            explanation: 'Az állítás n = 1-re nyilvánvalóan teljesül.'
          },
          {
            stepNumber: 2,
            title: 'Indukciós feltevés n = k-ra',
            latexContent: 'a_k = a_1 \\cdot q^{k-1} \\quad (\\text{Feltesszük, hogy igaz})',
            explanation: 'Feltételezzük a képlet helyességét k-ra.'
          },
          {
            stepNumber: 3,
            title: 'Öröklődés igazolása n = k + 1-re',
            latexContent: 'a_{k+1} = a_k \\cdot q = (a_1 \\cdot q^{k-1}) \\cdot q = a_1 \\cdot q^k = a_1 \\cdot q^{(k+1) - 1}',
            explanation: 'A mértani sorozat definíciója szerint a_(k+1) = a_k · q. Behelyettesítve megkapjuk a k+1-re érvényes képletet.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'A mértani sorozat első n tagjának összegképlete: S_n = a_1 (q^n - 1) / (q - 1)',
        proofTitle: 'Algebrai levezetés beszorzással és kivonással',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Az összeg felírása',
            latexContent: 'S_n = a_1 + a_1 q + a_1 q^2 + \\dotsm + a_1 q^{n-1}',
            explanation: 'Felírjuk az első n tag összegét.'
          },
          {
            stepNumber: 2,
            title: 'Mindkét oldal beszorzása q-val',
            latexContent: 'q \\cdot S_n = a_1 q + a_1 q^2 + a_1 q^3 + \\dotsm + a_1 q^n',
            explanation: 'Megszorozzuk az egyenlet mindkét oldalát q-val.'
          },
          {
            stepNumber: 3,
            title: 'A két egyenlet kivonása egymásból',
            latexContent: 'q S_n - S_n = a_1 q^n - a_1 \\implies S_n (q - 1) = a_1 (q^n - 1)',
            explanation: 'A belső tagok (teleszkópos módon) mind kiejtik egymást.'
          },
          {
            stepNumber: 4,
            title: 'Leosztás (q - 1)-gyel',
            latexContent: 'S_n = a_1 \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)',
            explanation: 'Mivel q ≠ 1, leoszthatunk (q - 1)-gyel, és megkaptuk a kívánt összegképletet.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Végtelen szakaszos tizedes tört felírása racionális számként: pl. $0{,}\\dot{3} = \\frac{3}{10} + \\frac{3}{100} + \\dotsm = \\frac{3/10}{1 - 1/10} = \\frac{1}{3}$.',
      'Fraktálok kerülete és területe: a Koch-hópehely kerülete minden lépésben 4/3-szorosára nő (végtelenhez tart), területe viszont egy konvergens mértani sor összegeként véges marad.',
      'Zenetudomány és akusztika: a kiegyenlített hangolású zongora szomszédos félhangjai mértani sorozatot alkotnak, ahol a frekvenciák hányadosa $q = \\sqrt[12]{2} \\approx 1{,}05946$.'
    ],
    applicationsOutside: [
      'Banki hitelek és lakáshitel törlesztőrészlet számítása (annuitás).',
      'Nukleáris medicina és atomenergetika: a radioaktív izotópok aktivitásának csökkenése felezési idővel.',
      'Szénizotópos kormeghatározás (C-14 módszer): régészeti leletek korának megállapítása a felezési idő exponenciális bomlásképletéből.',
      'Közgazdaságtan: infláció hatása a pénz vásárlóértékére az évek során.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Ha most berakok a bankba 200 000 Ft-ot évi 7%-os kamatos kamatra 5 évre, akkor 5 év múlva mennyi pénzem lesz a számlán?',
        solutionLatex: 'T_0 = 200\\,000, \\; p = 7, \\; n = 5 \\implies q = 1 + \\frac{7}{100} = 1{,}07. \\\\ T_5 = T_0 \\cdot q^5 = 200\\,000 \\cdot (1{,}07)^5 = 200\\,000 \\cdot 1{,}40255 = 280\\,510 \\text{ Ft.}'
      },
      {
        problemNumber: 2,
        question: 'Egy pozitív tagokból álló mértani sorozat első három tagjának összege 26. Ha az első taghoz 1-et, a másodikhoz 6-ot, a harmadikhoz 3-at adunk, egy számtani sorozat első három tagját kapjuk. Határozd meg a mértani sorozatot!',
        solutionLatex: '\\text{A számtani sorozat tagjai: } 12 - d, \\; 12, \\; 12 + d \\; (\\text{összegük } 26 + 10 = 36). \\\\ \\text{A mértani sorozat tagjai: } a_1 = 11 - d, \\; a_2 = 6, \\; a_3 = 9 + d. \\\\ a_2^2 = a_1 \\cdot a_3 \\implies 6^2 = (11 - d)(9 + d) \\implies 36 = 99 + 2d - d^2 \\\\ d^2 - 2d - 63 = 0 \\implies d_1 = 9, \\; d_2 = -7. \\\\ d = 9 \\implies a_1 = 2, a_2 = 6, a_3 = 18 \\quad (q = 3). \\\\ d = -7 \\implies a_1 = 18, a_2 = 6, a_3 = 2 \\quad (q = 1/3).'
      },
      {
        problemNumber: 3,
        question: 'Egy megtakarítási számlára havonta 20 000 Ft-ot teszünk évi 6%-os kamatra, havi tőkésítéssel. Körülbelül mennyi pénz lesz a számlán 10 év után?',
        solutionLatex: 'r=20000,\\ \\frac{p}{12}=0{,}005,\\ n=120:\\quad S=r\\cdot\\frac{(1{,}005)^{120}-1}{0{,}005}\\approx20000\\cdot163{,}88\\approx3\\,277\\,600\\ \\text{Ft}.',
        explanation: 'A befizetések mértani sort alkotnak: az első befizetés 120 hónapig, az utolsó már csak 1 hónapig kamatozik. Ezért az összeg r·((1+p/12)^n−1)/(p/12). Ellenőrzés: a befizetett tőke 2,4 millió Ft, a kamat mintegy 0,88 millió Ft.'
      },
    ],    oralPresentationOutline: [
      'Mértani sorozat def.: $a_{n+1}=a_n q$; képlet $a_n=a_1 q^{n-1}$',
      'Első n tag összege: $S_n=a_1\\frac{q^n-1}{q-1}$ ($q\\neq1$)',
      'Végtelen mértani sor: $|q|<1$ esetén $S=\\frac{a_1}{1-q}$',
      'Konvergencia feltétele; divergencia $|q|\\ge1$-re (a₁≠0)',
      'Kamatos kamat: $T_n=T_0(1+r)^n$; kapcsolódó feladatok',
      'Összehasonlítás számtani sorozattal',
      'Szóbeli: képletek levezetése + egy kamatpélda'
    ],
    requiredDefinitions: [
      {
        term: 'Mértani sorozat',
        definitionLatex: 'a_{n+1}=q\\, a_n\\iff a_n=a_1 q^{n-1}',
        explanation: 'Hányados állandó. q=1: konstans sorozat; q=-1: váltakozó előjel.',
      },
      {
        term: 'Részletösszeg',
        definitionLatex: 'S_n=a_1\\frac{q^n-1}{q-1}\\ (q\\neq1);\\quad S_n=n a_1\\ (q=1)',
        explanation: 'Bizonyítás: $S_n-qS_n$ teleszkóp összeg.',
      },
      {
        term: 'Végtelen mértani sor',
        definitionLatex: '|q|<1\\Rightarrow \\sum_{n=0}^\\infty a_1 q^n = \\frac{a_1}{1-q}',
        explanation: 'Konvergencia csak $|q|<1$ esetén (a₁≠0). Kamatos kamatnál q=1+r.',
      },
      {
        term: 'Kamatos kamat',
        definitionLatex: 'T_n=T_0(1+r)^n',
        explanation: 'r relatív kamatláb időszakonként; n időszak száma. Folytonos határeset: $e^{rt}$.',
      }
    ],

    examinerTraps: [
      {
        question: 'Lehet-e egy mértani sorozatnak 0 értéke bármely tagnál?',
        answer: 'Nem! A mértani sorozat definíciója megköveteli, hogy a_1 ≠ 0 és q ≠ 0 legyen, különben a szomszédos tagok hányadosa nem lenne értelmezhető.',
        dangerLevel: 'Közepes'
      },
      {
        question: 'Összegezhető-e egy végtelen mértani sor, ha q = 1 vagy q = -1?',
        answer: 'Nem! Csak akkor létezik véges összege, ha |q| < 1 (azaz -1 < q < 1). q = 1 esetén végtelenhez tart, q = -1 esetén oszcillál.',
        dangerLevel: 'Magas'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Mértani sorozat, végtelen sor, kamat\n\n### Fő állítások\n\n$a_n=a_1 q^{n-1}, \\quad S_n=a_1\\frac{q^n-1}{q-1}\\ (q\\neq 1), \\quad S_\\infty=\\frac{a_1}{1-q}\\ (|q|<1)$\n\n**Feltételek:** $a_1\\neq 0$, $q\\neq 0$. Ha $q=1$: $S_n=n a_1$.\n\n### Definíciók\n\n**Mértani sorozat:** $a_{n+1}=q\\,a_n$ (állandó hányados).\n\n**Végtelen mértani sor:** $\\sum_{k=0}^{\\infty}a_1 q^k$ konvergens $\\iff |q|<1$.\n\n**Kamatos kamat:** $T_n=T_0(1+r)^n$. Gyűjtőjáradék / törlesztőrészlet: mértani összegként (képlettár).\n\n### Tételek\n\n1. $a_n=a_1 q^{n-1}$ — teljes indukció.\n2. $S_n=a_1\\frac{q^n-1}{q-1}$ — $S_n-qS_n=a_1(1-q^n)$.\n\n### Képlettár\n4. oldal: mértani sorozat, végtelen sor, kamatos kamat.\n\n### Csapdák\n- $|q|\\ge 1$ (és $a_1\\neq0$) → divergens végtelen sor.\n- Kamatláb: $r=0{,}07$, ne $7$.",
    oralExamPlan: "## Szóbeli felelet vázlata — 10. tétel\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nÍv: mértani fogalom → képletek → végtelen sor → kamat/járadék → számtani összevetés → feladat.\n\n### 0:00–1:30 · Bevezetés\nExponenciális folyamatok (népesség, kamat, bomlás); mértani sorozat mint diszkrét modell.\n\n### 1:30–4:30 · Definíció (2 pont)\nÁllandó $q$; $a_n=a_1 q^{n-1}$. Rövid indukcióvázlat.\n\n### 4:30–10:00 · Tétel + bizonyítás (6 pont)\n**Fő tétel:** $S_n$ képlete ($S_n-qS_n$). Határérték: $S_\\infty$ ha $|q|<1$.\n\n### 10:00–13:00 · Alkalmazások (4 pont)\n$T_n=T_0(1+r)^n$; gyűjtőjáradék/törlesztés; radioaktív bomlás — 1 részletes vagy 3 rövid.\n\n### 13:00–17:30 · Feladat (8 pont)\nKamatpélda (pl. 200 000 Ft, 7%, 5 év) vagy mértani–számtani szöveges. Magyarázd $q=1+r$-t.\n\n### 17:30–19:30 · Zárás\nSzámtani vs mértani; konvergenciafeltétel.\n\n### Pontozás\nSzerkezet 10 · Def 2 · Tétel+biz 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5 = **35**",
    visualizerType: 'sequence',
  }
];
