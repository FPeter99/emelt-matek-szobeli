import { Tetel } from '../../types/math';

export const TETELEK_16_20: Tetel[] = [
  {
    id: "tétel-16",
    number: 16,
    title: "Konvex sokszögek tulajdonságai. Szabályos sokszögek. Gráfok",
    category: "Gráfelmélet és statisztika",
    tags: [
      "Sokszögek",
      "Szabályos sokszögek",
      "Gráfelmélet",
      "Euler-kör",
      "Fokszámtétel",
      "Fa",
      "Skatulyaelv"
    ],
    difficulty: "1: alap alatti",
    summary: "Konvex n-szög átlóinak száma $\\frac{n(n-3)}{2}$, belső szögek összege $(n-2)180^\\circ$, külső szögeké $360^\\circ$; szabályos sokszögek oldala, területe, szimmetriái. Gráf, fokszám, fokszámtétel, Euler-vonal és Euler-kör, Hamilton-kör, fa, síkbarajzolhatóság.",
    statementLatex: "d_n=\\frac{n(n-3)}{2},\\quad S_{\\text{belső}}=(n-2)180^\\circ,\\quad \\sum_{v\\in V}\\deg(v)=2|E|",
    conditionsLatex: "n\\ge 3,\\ n\\in\\mathbb{N};\\quad G=(V,E)\\text{ véges gráf}",
    formulaSheetReference: "Hivatalos Képlettár 2026: geometria és gráfelmélet",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Geometria és gráfelmélet, 8. és 12. oldal"
    ],
    introduction: `A gráfelmélet 1736-ban született, amikor Leonhard Euler a königsbergi hidak problémáját vizsgálta: bejárható-e mind a hét híd úgy, hogy mindegyiken pontosan egyszer haladunk át? Euler észrevette, hogy a kérdés nem a távolságokon, hanem a kapcsolatok szerkezetén múlik — ezzel megszületett a gráf fogalma.

A 20. században Erdős Pál és Rényi Alfréd a véletlen gráfok elméletét alapozta meg, amely ma a hálózatkutatás, a járványterjedés-modellek és az internet-topológia egyik alapja.

A témakör első fele a konvex és szabályos sokszögek klasszikus geometriája, második fele a gráfok kombinatorikája.

A szóbelin a két rész akkor működik jól, ha a jelölt fel tudja mutatni a közös módszert: a **kettős leszámlálást** és a **skatulyaelvet**.`,
    detailedTheory: `### 1. Konvex sokszögek

- **Definíció:** egy sokszög konvex, ha bármely két belső pontját összekötő szakasz is a sokszögbe (vagy annak határára) esik. Ekvivalens: minden belső szög $180^\\circ$-nál kisebb, és a sokszög az összes oldalegyenesének ugyanazon az oldalán fekszik.

- **Átlók száma:** egy csúcsból $n-3$ átló indul (önmagába és a két szomszédos csúcsba nem megy átló). Az összes csúcsból $n(n-3)$ „átlóvég” adódik, de minden átlót kétszer számoltunk:
  $$d_n=\\frac{n(n-3)}{2}.$$

- **Belső szögek összege:** egy csúcsból húzott átlókkal a sokszög $n-2$ háromszögre bontható, ezért
  $$S_{\\text{belső}}=(n-2)\\cdot180^\\circ.$$

- **Külső szögek összege:** a sokszög körüljárása során a külső szögek összege mindig $360^\\circ$; ez a tény a szabályos sokszög belső szögének kiszámításához is kell.

- **Szabályos sokszög belső szöge:** $\\frac{(n-2)180^\\circ}{n}$.

- **Konvex négyszögek nevezetes esetei:** trapéz (van párhuzamos oldalpár), paralelogramma (két-két párhuzamos oldalpár), deltoid (két-két szomszédos oldal egyenlő), húrnégyszög (szemközti szögek összege $180^\\circ$), érintőnégyszög (szemközti oldalak összege egyenlő).

- **Terület:** a sokszög háromszögekre bontható; koordinátákból a cipőfűző-képlet adja: $T=\\frac12\\left|\\sum(x_iy_{i+1}-x_{i+1}y_i)\\right|$.

### 2. Szabályos sokszögek

- **Definíció:** minden oldala egyenlő hosszú és minden belső szöge egyenlő.

- **Körei:** van beírt köre (sugara $r$, az apotéma) és köré írt köre (sugara $R$); középpontjuk egybeesik, ez a sokszög szimmetriaközéppontja.

- **Szimmetriák:** $n$ darab szimmetriatengely (páros $n$-nél a csúcsokon és az oldalfelező pontokon átmenő tengelyek), és $n$-edrendű forgásszimmetria.

- **Középponti szög:** $\\frac{360^\\circ}{n}$; a szabályos sokszög $n$ darab egybevágó egyenlő szárú háromszögre bontható.

- **Oldal és sugár:** $a=2R\\sin\\frac{180^\\circ}{n}$; az apotéma $r=R\\cos\\frac{180^\\circ}{n}$.

- **Terület:** $T=\\frac12 nR^2\\sin\\frac{360^\\circ}{n}=n\\cdot\\frac{a\\cdot r}{2}$.

- **Kerület:** $K=na$.

- **Nevezetes esetek:** szabályos hatszög: $a=R$, $T=\\frac{3\\sqrt3}{2}a^2$; szabályos nyolcszög: $a=2R\\sin22{,}5^\\circ$.

### 3. Gráfelméleti alapfogalmak

- **Gráf:** $G=(V,E)$, ahol $V$ a csúcsok, $E$ az élek halmaza. Az él két csúcsot köt össze; irányított gráf esetén az élnek iránya van.

- **Fokszám:** $\\deg(v)$ az adott csúcsból induló élek száma; hurokél esetén kétszer számít. Izolált csúcs foka 0.

- **Egyszerű gráf:** nincs hurokél és nincs többszörös él. **Teljes gráf** $K_n$: minden csúcspár össze van kötve, $|E|=\\frac{n(n-1)}{2}$.

- **Séta:** csúcsok és élek váltakozó sorozata. **Vonal:** élismétlés nélküli séta. **Út:** csúcsismétlés nélküli séta. **Kör:** zárt út (legalább három csúccsal).

- **Összefüggő gráf:** bármely két csúcs között vezet út.

- **Euler-vonal:** minden élt pontosan egyszer bejáró (nyílt vagy zárt) vonal. **Euler-kör:** zárt Euler-vonal.

- **Hamilton-út/-kör:** minden csúcsot pontosan egyszer érintő út, illetve kör. Ezekre nincs egyszerű fokszámfeltétel; a Hamilton-kör keresése NP-teljes probléma.

- **Fa:** összefüggő, körmentes gráf. Jellemzések: $|E|=|V|-1$; bármely két csúcs között pontosan egy út vezet; minden élének elhagyása szétesik; levél (1 fokú csúcs) mindig van.

- **Síkbarajzolható gráf:** lerajzolható élkeresztezés nélkül. Euler poliédertétele: összefüggő síkbarajzolt gráfra $|V|-|E|+|F|=2$, ahol $F$ a lapok (tartományok) száma.

### 4. A fokszámtétel és következményei

- **Fokszámtétel (kézfogási lemma):**
  $$\\sum_{v\\in V}\\deg(v)=2|E|.$$

- **Következmény 1:** a páratlan fokú csúcsok száma minden gráfban páros.

- **Következmény 2:** az Euler-vonal létezésének feltétele: a gráf összefüggő, és a páratlan fokú csúcsok száma 0 (Euler-kör) vagy 2 (nyílt Euler-vonal).

- **Következmény 3:** egyszerű gráfban nem lehet minden fok különböző: $n$ csúcs esetén a lehetséges fokok $0,1,\\dots,n-1$, de a 0 és az $n-1$ fok nem szerepelhet egyszerre, így $n$ csúcsra legfeljebb $n-1$ különböző érték jut — skatulyaelvvel van két azonos fok.

- **Következmény 4:** teljes gráfban minden fok $n-1$, ezért $|E|=\\frac{n(n-1)}{2}$, ami összhangban van a fokszámösszeggel.

### 5. Nevezetes gráfelméleti példák

- **Königsbergi hidak:** a hét híd gráfjában négy páratlan fokú csúcs van, ezért nincs Euler-vonal — ez Euler 1736-os eredménye.

- **Házikó-probléma:** három ház és három kút összekötése — $K_{3,3}$ nem síkbarajzolható, ezért nem oldható meg élkeresztezés nélkül.

- **Utazó ügynök:** Hamilton-kör keresése súlyozott gráfban; a gyakorlatban közelítő algoritmusokat használnak.

- **Szociális háló:** a fokszám az ismeretségek számát méri; a fokszámeloszlás vizsgálata a hálózatkutatás alapja.

### 6. Gyakorlati megjegyzések

- Sokszögeknél az átlószám és a szögösszeg képlete csak konvex esetben használható közvetlenül; konkáv sokszögnél az átlók egy része a sokszögön kívül halad.
- Gráfoknál mindig érdemes felírni a fokszámokat: sok feladat (Euler-út, fa, izomorfia) azonnal megoldódik.
- Fa esetén az élek száma egyértelműen meghatározza a csúcsok számát: $|E|=|V|-1$. Több él → van kör.`,
    theorems: [
      {
        theoremNumber: 1,
        title: "Konvex n-szög átlóinak száma",
        statementLatex: "d_n=\\frac{n(n-3)}{2}",
        proofTitle: "Bizonyítás kettős számlálással",
        proofSteps: [
          {
            stepNumber: 1,
            title: "dₙ = n(n−3)/2",
            latexContent: "d_n=\\frac{n(n-3)}{2}",
            explanation: "Egy csúcsból nem húzható átló önmagába és a két szomszédba, tehát egy csúcsból n−3 átló indul. n csúcsból ez n(n−3) átlóvég. Minden átlót kétszer számoltunk (két végpont), ezért az átlók száma n(n−3)/2. Ellenőrzés: négyszög n=4 → 2 átló; ötszög → 5; hatszög → 9."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "A belső szögek összege",
        statementLatex: "S=(n-2)\\cdot180^\\circ",
        proofTitle: "Háromszögekre bontás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Külső szögek",
            latexContent: "n-3 \\text{ átló} \\implies n-2 \\text{ háromszög} \\ (n-2)\\cdot180^\\circ \\ \\sum \\text{ külső} = 360^\\circ",
            explanation: "Cél: belátni, hogy A belső szögek összege. Egy csúcsból a nem szomszédos csúcsokba húzott átlók a sokszöget $n-2$ háromszögre bontják. Minden háromszög belső szögeinek összege $180^\\circ$; a háromszögek szögei együtt éppen a sokszög belső szögeit adják. A sokszög körüljárásakor a külső szögek összege egy teljes fordulat, azaz $360^\\circ$. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "Fokszámtétel (kézfogási lemma)",
        statementLatex: "\\sum_{v\\in V}\\deg(v)=2|E|",
        proofTitle: "Kézfogási lemma",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Σ deg(v) = 2|E|",
            latexContent: "\\sum_v \\deg(v)=2|E|",
            explanation: "Minden él pontosan két csúcsot érint, ezért ha összeadjuk az összes csúcs fokszámát, minden élt kétszer számolunk. Innen az élek száma fele a fokszámösszegnek. Következmény: páratlan fokú csúcsok száma páros. „Kézfogás”: minden kézfogás két kezet érint."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "Az Euler-kör létezésének feltétele",
        statementLatex: "\\text{összefüggő} \\ \\wedge\\ \\forall v: 2\\mid\\deg(v)",
        proofTitle: "Szükségesség és elégségesség",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Nyílt Euler-vonal",
            latexContent: "\\text{minden áthaladás 2 élt használ} \\ \\text{izolált csúcsok nélküli komponens} \\ \\text{körök felbontása és összefűzése} \\ \\text{pontosan 2 páratlan fokú csúcs}",
            explanation: "Cél: belátni, hogy Az Euler-kör létezésének feltétele. Ha egy zárt vonal minden élt pontosan egyszer jár be, akkor minden csúcsba ugyanannyiszor lépünk be, mint ahányszor kilépünk, ezért a fokszám páros. Ha a gráf nem összefüggő, a vonal nem tudja bejárni az összes élt. Ez előkészíti a következő lépést (Összefüggőség). Páros fokszámok esetén a gráf élei körökre bonthatók; a köröket közös csúcsoknál összefűzve egyetlen zárt Euler-vonalat kapunk. Ha pontosan két páratlan fokú csúcs van, az Euler-vonal ezekből indul és ezekben végződik; több páratlan fok esetén nem létezik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ],
        notes: "A königsbergi hidak négy páratlan fokú csúcsot adnak, ezért a hét híd nem járható be Euler-vonallal."
      },
      {
        theoremNumber: 5,
        title: "A fa jellemzése",
        statementLatex: "\\text{összefüggő és körmentes} \\iff |E|=|V|-1",
        proofTitle: "Bizonyítás indukcióval",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Megfordítás",
            latexContent: "\\exists v:\\deg(v)=1 \\ G' = G - v, \\quad |E'|=|E|-1, \\quad |V'|=|V|-1 \\ |E'|=|V'|-1 \\ |E|=|V|-1 \\implies \\text{körmentes}",
            explanation: "Cél: belátni, hogy A fa jellemzése. Minden véges fának van legalább két 1 fokú csúcsa (levél); ellenkező esetben egy kör mentén végtelen sétát lehetne indítani. A levél és a hozzá tartozó él elhagyása összefüggő, körmentes gráfot ad, tehát fát. Ez előkészíti a következő lépést (Levél elhagyása). A kisebb fára az állítás igaz; visszahelyettesítve $|E|-1=(|V|-1)-1$, azaz $|E|=|V|-1$. Az indirekt feltevésből a definíciók és a számelméleti / algebrai tulajdonságok segítségével ellentmondásra jutunk. Ha egy összefüggő gráfban kör lenne, egy él elhagyásával is összefüggő maradna, és ismételgetve egy fát kapnánk, amelynek élszáma $|V|-1$; a kör jelenléte több élt jelentene, ami ellentmondás. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 6,
        title: "Egyszerű gráfban van két azonos fokú csúcs",
        statementLatex: "\\exists u\\neq v:\\ \\deg(u)=\\deg(v)",
        proofTitle: "Skatulyaelv",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Skatulyaelv",
            latexContent: "0,1,\\dots,n-1 \\ 0 \\text{ és } n-1 \\text{ nem fordulhat elő egyszerre} \\ n \\text{ csúcs, legfeljebb } n-1 \\text{ fokérték}",
            explanation: "Cél: belátni, hogy Egyszerű gráfban van két azonos fokú csúcs. $n$ csúcsú egyszerű gráfban minden fok $0$ és $n-1$ közé esik. Ez előkészíti a következő lépést (Lehetséges fokszámok). Ha lenne izolált csúcs (fok 0), akkor nem lehet olyan csúcs, amely mindenki máshoz kapcsolódik (fok $n-1$). A $0$ és $n-1$ közül legfeljebb az egyik fordul elő, így legfeljebb $n-1$ különböző fokszám lehetséges $n$ csúcsra; a skatulyaelv szerint két csúcs foka azonos. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      }
    ],
    applicationsInside: [
      "Átlószám, szögösszeg, szabályos sokszög területe és szimmetriái.",
      "Euler-vonal és Euler-kör eldöntése fokszámokból.",
      "Fa felismerése élszám alapján; minimális összeköttetés.",
      "Síkbarajzolhatóság és az Euler-féle poliédertétel."
    ],
    applicationsOutside: [
      "Útvonaltervezés, hálózatok, logisztika (Euler-vonal).",
      "Königsbergi hidak: a gráfelmélet születése.",
      "Szociális hálók, internet-topológia, járványterjedés.",
      "Kémiai szerkezetek, molekulák gráfjai; számítógépes hálózatok tervezése."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Hány átlója van egy konvex 12-szögnek, és mennyi a belső szögeinek összege?",
        solutionLatex: "d_{12}=\\frac{12\\cdot9}{2}=54; \\quad S=10\\cdot180^\\circ=1800^\\circ.",
        explanation: "Az átlószám képletébe $n=12$-t helyettesítünk. A belső szögek összege $(12-2)\\cdot180^\\circ$. Ellenőrzés: a 12-szög $10$ háromszögre bontható, és $10\\cdot180^\\circ=1800^\\circ$."
      },
      {
        problemNumber: 2,
        question: "Lehet-e olyan 7 csúcsú egyszerű gráf, amelyben minden csúcs foka 3?",
        solutionLatex: "\\sum\\deg=7\\cdot3=21 \\text{ páratlan}, \\quad \\text{de } 2|E| \\text{ páros} \\implies \\text{nem létezik}.",
        explanation: "A fokszámtétel szerint a fokszámok összege mindig páros. Hét páratlan fok összege páratlan, ezért ilyen gráf nem létezhet."
      },
      {
        problemNumber: 3,
        question: "Egy 10 csúcsú gráfban kilenc csúcs foka 5, 5, 5, 4, 4, 3, 3, 3, 3, a fokszámok összege pedig 40. Mennyi a tizedik csúcs foka?",
        solutionLatex: "x=40-(5+5+5+4+4+3+3+3+3)=40-35=5.",
        explanation: "A fokszámtétel szerint a fokszámok összege $2|E|=40$. A kilenc ismert fok összege 35, ezért a tizedik fok 5. Ellenőrzés: 40 páros, tehát a gráf létezhet."
      },
      {
        problemNumber: 4,
        question: "Egy gráf csúcsainak fokszámai: 2, 2, 2, 2, 4, 4. Van-e Euler-köre? És ha a 4 fokú csúcsok egyikét 3-ra változtatjuk, van-e Euler-vonala?",
        solutionLatex: "\\text{minden fok páros} \\implies \\text{van Euler-kör}; \\quad \\text{egy páratlan fok esetén nincs Euler-vonal.}",
        explanation: "Az első esetben minden fok páros, ezért Euler-kör létezik. A második esetben a páratlan fokú csúcsok száma 1 lenne, ami lehetetlen (a fokszámösszeg páratlan lenne), ezért ilyen gráf nem létezik — a módosítás után a fokszámokat is újra kellene ellenőrizni."
      },
      {
        problemNumber: 5,
        question: "Egy összefüggő gráfnak 12 csúcsa és 15 éle van. Biztos, hogy van benne kör?",
        solutionLatex: "\\text{fa esetén } |E|=|V|-1=11, \\quad 15>11 \\implies \\text{van kör}.",
        explanation: "Ha a gráf körmentes lenne, fa lenne, és élszáma 11 volna. Mivel 15 éle van, a többlet élek szükségképpen köröket hoznak létre. A körök száma a ciklomatikus szám: $15-12+1=4$ független kör."
      },
      {
        problemNumber: 6,
        question: "Egy szabályos 12-szög köré írt körének sugara 1. Mekkora egy oldala, a területe és egy belső szöge?",
        solutionLatex: "a=2\\sin15^\\circ\\approx0{,}518; \\quad T=\\frac12\\cdot12\\cdot1^2\\cdot\\sin30^\\circ=3; \\quad \\alpha=\\frac{10\\cdot180^\\circ}{12}=150^\\circ.",
        explanation: "A középponti szög $30^\\circ$, ezért az egyenlő szárú háromszög alapja $2R\\sin15^\\circ$. A terület $n$ darab ilyen háromszög területének összege: $12\\cdot\\frac12\\cdot1\\cdot1\\cdot\\sin30^\\circ=3$. A belső szög $(12-2)180^\\circ/12=150^\\circ$."
      },
      {
        problemNumber: 7,
        question: "A königsbergi hidak gráfjában a négy városrész fokszáma 3, 3, 3, 5. Bejárható-e mind a hét híd pontosan egyszer?",
        solutionLatex: "4 \\text{ páratlan fokú csúcs} \\implies \\text{nincs Euler-vonal}.",
        explanation: "Euler-vonal csak 0 vagy 2 páratlan fokú csúcs esetén létezik. Itt négy páratlan fokú csúcs van, ezért a hidak nem járhatók be a kívánt módon — ez Euler 1736-os eredménye."
      }
    ],
    oralPresentationOutline: [
      'Konvex sokszög: belső szögek összege (n−2)·180°',
      'Átlók száma; szabályos sokszög tulajdonságai',
      'Gráf: csúcs, él, fokszám; kézfogási lemma',
      'Összefüggőség; Euler-út / kör feltételei',
      'Síkbeli gráfok; Euler-formula (v−e+f=2)',
      'Alkalmazás: hálózatok, ütemezés szemléltetése',
      'Szóbeli: szögösszeg + Euler-formula vagy Euler-út'
    ],
    requiredDefinitions: [
      {
        term: "Konvex sokszög",
        definitionLatex: "\\forall P,Q\\in S:\\ PQ\\subseteq S",
        explanation: "Bármely két belső pontját összekötő szakasz a sokszögben marad; minden belső szög $180^\\circ$-nál kisebb."
      },
      {
        term: "Szabályos sokszög",
        definitionLatex: "a_1=\\dots=a_n, \\quad \\alpha_1=\\dots=\\alpha_n",
        explanation: "Minden oldala és minden belső szöge egyenlő; van beírt és köré írt köre, valamint $n$-edrendű forgásszimmetriája."
      },
      {
        term: "Gráf és fokszám",
        definitionLatex: "G=(V,E), \\quad \\deg(v)",
        explanation: "Csúcsok és élek halmaza; a fokszám az adott csúcsból induló élek száma (hurokél kétszer számít)."
      },
      {
        term: "Fa",
        definitionLatex: "\\text{összefüggő és körmentes}, \\quad |E|=|V|-1",
        explanation: "Minimális összeköttetést biztosító gráf; bármely két csúcs között pontosan egy út vezet."
      },
      {
        term: "Euler-kör",
        definitionLatex: "\\text{összefüggő} \\ \\wedge\\ \\forall v:\\ 2\\mid\\deg(v)",
        explanation: "Minden élt pontosan egyszer bejáró zárt vonal; létezésének szükséges és elégséges feltétele az összefüggőség és a páros fokszámok."
      }
    ],
    examinerTraps: [
      {
        question: "Létezhet-e egyszerű gráf, ahol minden fok különböző?",
        answer: "Nem, ha $n\\ge2$. $n$ csúcsra a lehetséges fokok $0,\\dots,n-1$, de a 0 és az $n-1$ nem fordulhat elő egyszerre, így legfeljebb $n-1$ különböző érték marad; a skatulyaelv szerint van két azonos fok.",
        dangerLevel: "Magas"
      },
      {
        question: "Az Euler-vonal és a Hamilton-kör ugyanaz?",
        answer: "Nem. Az Euler-vonal minden élt érint pontosan egyszer (élek bejárása), a Hamilton-kör minden csúcsot érint pontosan egyszer (csúcsok bejárása). Más feltételek, más feladatok.",
        dangerLevel: "Közepes"
      },
      {
        question: "Lehet-e páratlan számú páratlan fokú csúcs?",
        answer: "Nem. A fokszámok összege $2|E|$, ami páros; páros összegben a páratlan tagok száma csak páros lehet.",
        dangerLevel: "Magas"
      },
      {
        question: "Konkáv sokszögre is érvényes az átlószám képlete?",
        answer: "Az átlók száma ugyanaz, de az átlók egy része a sokszögön kívül halad, ezért a „háromszögekre bontás” és a szögösszeg levezetése módosul. A belső szögek összege konkáv esetben is $(n-2)180^\\circ$, de az egyes szögek között $180^\\circ$-nál nagyobb is lehet.",
        dangerLevel: "Magas"
      }
    ],
    applications: [
      {
        title: "Táncpartnerek",
        problem: "10 csúcs, ismert fokok összege 35, teljes összeg 40",
        solutionLatex: "x=5"
      },
      {
        title: "Szabályos 12-szög",
        problem: "$R=1$, oldal, terület, belső szög",
        solutionLatex: "a\\approx0{,}518, \\quad T=3, \\quad \\alpha=150^\\circ"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Sokszögek és gráfelmélet."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Gráf, fa vagy fokszám."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "Fokszámtétel, átlószám vagy szögösszeg."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Gráf-, átló- vagy Euler-feladat."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Königsberg, hálózatok, szabályos sokszögek."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Precíz gráfelméleti terminológia."
      }
    ],
    historicalContext: "Euler 1736: königsbergi hidak, a gráfelmélet születése. Erdős–Rényi: véletlen gráfok. Euler poliédertétele: $|V|-|E|+|F|=2$.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 16. Tétel (101–107. oldal): Említsd a königsbergi hidakat, az Euler-kör feltételét és a fokszámtételt!",
    memorizationMaterial: "## Bemagolandó — Konvex sokszögek, szabályos sokszögek, gráfok\n\n### Fő állítások\n\n$d_n=\\frac{n(n-3)}{2}, \\quad S_{\\text{belső}}=(n-2)180^\\circ, \\quad \\sum_{v\\in V}\\deg(v)=2|E|$\n\n**Feltételek:** $n\\ge 3$; $G=(V,E)$ véges gráf.\n\n### Definíciók\n**Konvex sokszög:** bármely két belső pontját összekötő szakasz a sokszögben van.\n**Szabályos sokszög:** egyenlő oldalak és szögek; beírt és köré írt kör.\n**Gráf / fokszám:** $G=(V,E)$, $\\deg(v)$.\n**Fa:** összefüggő és körmentes; $|E|=|V|-1$.\n**Euler-kör:** minden élt pontosan egyszer bejáró zárt vonal ↔ összefüggő + minden fok páros. Nyílt Euler-vonal: pontosan 2 páratlan fok.\n\n### Tételek\n1. Átlók száma kettős számlálással.\n2. Belső szögek összege: $n-2$ háromszög.\n3. Fokszámtétel + páratlan fokok száma páros.\n4. Euler-vonal létezési feltétele.\n5. Síkbarajzolt összefüggő: $|V|-|E|+|F|=2$.\n\n### Csapda\nKönigsberg: 4 páratlan fok → nincs Euler-vonal. Hamilton ≠ Euler.",
    oralExamPlan: "## Szóbeli felelet vázlata — 16. tétel\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nÍv: sokszög képletek → szabályos → gráf → fokszám/Euler → alkalmazás → feladat.\n\n### 0:00–1:30 · Bevezetés\nEuler 1736: königsbergi hidak → gráfelmélet. Sokszög-rész: klasszikus geometria.\n\n### 1:30–4:30 · Definíció (2 pont)\nKonvex sokszög *vagy* gráf+fokszám *vagy* fa *vagy* Euler-kör.\n\n### 4:30–8:00 · Sokszögek\nÁtlószám, belső/külső szögösszeg, szabályos $R,r,T$.\n\n### 8:00–13:00 · Tétel + bizonyítás (6 pont)\n**Ajánlott:** fokszámtétel; vagy $d_n=n(n-3)/2$; vagy belső szögösszeg.\n\n### 13:00–15:00 · Alkalmazások (4 pont)\nKönigsberg; hálózatok; Euler-formula poliédereknél.\n\n### 15:00–18:30 · Feladat (8 pont)\nÁtló/szög; fokszám-paritás; Euler-kör; fa élszáma.\n\n### 18:30–19:30 · Zárás\nKettős leszámlálás közös módszer.\n\n### Pontozás\nSzerkezet 10 · Def 2 · Tétel+biz 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5 = **35**",
    visualizerType: 'graph'
  },

  {
    id: "tétel-17",
    number: 17,
    title: "A kör és részei. Kerületi szög, középponti szög, látószög. Húrnégyszögek, érintőnégyszögek",
    category: "Geometria és trigonometria",
    tags: [
      "Kör",
      "Kerületi szög",
      "Középponti szög",
      "Látószög",
      "Húrnégyszög",
      "Érintőnégyszög",
      "Érintő–szelő tétel"
    ],
    difficulty: "2: bemelegítő",
    summary: "A kör részei és mértékei; középponti és kerületi szög (β = 2α), érintőszárú szög, Thalész-tétel; látószög és látószögkörív; húrnégyszög (szemközti szögek 180°), érintőnégyszög (a + c = b + d), érintő–szelő tétel.",
    statementLatex: "\\beta=2\\alpha,\\quad \\alpha+\\gamma=180^\\circ,\\quad a+c=b+d,\\quad PE^2=PA\\cdot PB",
    conditionsLatex: "\\text{azonos ívre illeszkedő szögek};\\ \\text{konvex négyszög}",
    formulaSheetReference: "Hivatalos Képlettár 2026: körgeometria",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Geometria, 7–8. oldal"
    ],
    introduction: `A kör a legrégebben vizsgált geometriai alakzat: a babiloni és egyiptomi földmérők a kerület és az átmérő arányát már jóval Euklidész előtt használták.

Euklidész Elemek című művének III. könyve rendszerezi a húrok, érintők és szögek tulajdonságait.

A khioszi Hippokratész (Kr. e. 5. század) a körívekhez tartozó szögek vizsgálatával jutott el a kerületi és középponti szög kapcsolatához.

Thalész nevéhez fűződik az a felismerés, hogy az átmérőhöz tartozó kerületi szög derékszög — ez a kerületi–középponti tétel legegyszerűbb esete.

A témakör a szóbelin azért kiemelt, mert egyetlen ábrán egyszerre kérhető számon szög-, négyszög- és aránytulajdonság.`,
    detailedTheory: `### 1. A kör és részei

- **Kör:** adott $O$ középponttól adott $r>0$ távolságra levő pontok halmaza. **Zárt körlap:** $d(P,O)\\le r$.

- **Sugár** $r$, **átmérő** $2r$; **húr**: két körpontot összekötő szakasz; **szelő**: olyan egyenes, amely két pontban metszi a kört; **érintő**: olyan egyenes, amelynek pontosan egy közös pontja van a körrel. Az érintési pontba húzott sugár **merőleges** az érintőre.

- **Körív**, **körcikk** (két sugár és a közrezárt ív), **körszelet** (húr és a hozzá tartozó ív), **körgyűrű** (két koncentrikus kör közötti rész).

- **Mértékek:** kerület $K=2r\\pi$, terület $T=r^2\\pi$. Radiánban mérve az $\\alpha$ középponti szögű ív hossza $s=r\\alpha$, a körcikk területe $T_{\\text{cikk}}=\\tfrac12 r^2\\alpha$. Fokban ugyanez aránypárral: $s=2r\\pi\\cdot\\frac{\\alpha}{360^\\circ}$, illetve $T_{\\text{cikk}}=r^2\\pi\\cdot\\frac{\\alpha}{360^\\circ}$.

- **Körszelet területe:** $T_{\\text{szelet}}=T_{\\text{cikk}}-T_{\\triangle}$, ahol a háromszög csúcsai a két sugár végpontja és $O$.

### 2. Szögek a körben

- **Középponti szög:** csúcsa a kör középpontja; nagysága megegyezik a hozzá tartozó ív mértékével.

- **Kerületi szög:** csúcsa a körön van, szárai húrok. **Azonos íven** a kerületi szög a középponti szög fele: $\\beta=2\\alpha$. Ugyanazon íven nyugvó kerületi szögek egyenlők.

- **Félkör (Thalész):** ha az ív félkör, a középponti szög $180^\\circ$, ezért a kerületi szög $90^\\circ$. Megfordítva: ha egy húr a kör egy pontjából derékszögben látszik, akkor a húr átmérő.

- **Érintőszárú kerületi szög:** az érintő és egy érintési ponton átmenő húr szöge egyenlő a húr által meghatározott ívhez tartozó kerületi szöggel. Ez a „tangens–húr” tétel, amely az érintő–szelő tétel bizonyításához kell.

- **Húrok távolsága:** egyenlő hosszú húrok a középponttól egyenlő távol vannak, és megfordítva. Az átmérő a leghosszabb húr.

### 3. Látószög

- Az $AB$ szakasz **$\\alpha$ látószögű** pontjainak halmaza az a két **látószögkörív**, amelyekből $AB$ $\\alpha$ szögben látszik. A két ív az $AB$ egyenesére szimmetrikus, és az $AB$ szakasz a két körív közös húrja.
- Szerkesztés: az $AB$ fölé az $AB$ oldalú, $\\alpha$ alapszögű egyenlő szárú háromszögek csúcsai adják a körívek középpontjait; a látószögkörív középponti szöge $2\\alpha$ (vagy $360^\\circ-2\\alpha$).

- **Alkalmazás:** adott szakasz adott szög alatti látásának helye (színház, stadion, kameraállás).

### 4. Húrnégyszög

- **Definíció:** olyan négyszög, amelynek minden csúcsa egyazon körön van (van köré írható köre).

- **Tétel:** konvex négyszög pontosan akkor húrnégyszög, ha **szemközti szögeinek összege** $180^\\circ$: $\\alpha+\\gamma=\\beta+\\delta=180^\\circ$.
- Következmény: húrnégyszögben a szemközti szögek pótszögek; a négyszög köré írt kör középpontja az oldalfelező merőlegesek metszéspontja.

- **Ptolemaiosz-tétel** (gazdagító): húrnégyszögben $ef=ac+bd$, ahol $e,f$ az átlók, $a,b,c,d$ az oldalak.

### 5. Érintőnégyszög

- **Definíció:** olyan négyszög, amelynek minden oldalegyenese érint egy közös kört (van beírható köre).

- **Tétel:** konvex négyszög pontosan akkor érintőnégyszög, ha két-két szemközti oldalának összege egyenlő: $a+c=b+d$. (A feltétel szükséges és elégséges.)
- Az érintőnégyszög területe $T=rs$, ahol $s$ a félkerület és $r$ a beírt kör sugara.
- Minden **deltoid** érintőnégyszög (a szimmetriatengelyre tükrözött oldalpárok egyenlők), de nem minden deltoid húrnégyszög.

### 6. Érintő–szelő tétel és a pont hatványa

- Külső $P$ pontból húzott érintő érintési pontja $E$, a szelő a kört $A$-ban és $B$-ben metszi: $PE^2=PA\\cdot PB$.
- Általánosabban, két szelőre $PA\\cdot PB=PC\\cdot PD$; ez a $P$ pont **hatványa** a körre: $h(P)=PO^2-r^2$. Belülről ugyanez $PA\\cdot PB=r^2-OP^2$ alakban írható.
- Ha $P$ a körön van, a hatvány $0$; ha belül van, negatív (előjelesen).`,
    theorems: [
      {
        theoremNumber: 1,
        title: "Kerületi–középponti szögek tétele",
        statementLatex: "\\beta=2\\alpha",
        proofTitle: "Esetekre bontás a középpont helyzete szerint",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Érintőszárú eset",
            latexContent: "OA=OC=r\\implies \\triangle OAC \\text{ egyenlő szárú} \\ \\beta=\\beta_1+\\beta_2=2\\alpha_1+2\\alpha_2=2\\alpha \\ \\beta=\\beta_1-\\beta_2=2\\alpha_1-2\\alpha_2=2\\alpha \\ \\angle(\\text{érintő},AE)=\\tfrac12\\beta",
            explanation: "Cél: belátni, hogy Kerületi–középponti szögek tétele. Jelölje $\\alpha=\\angle OAC=\\angle ACO$. Az $AOC$ háromszög külső szöge az $O$ csúcsnál $\\beta=\\alpha+\\alpha=2\\alpha$. A középponton át húzott átmérő két részre bontja a szöget; mindkét részre az I. eset érvényes, majd összeadjuk. Ugyanazzal az átmérővel a két I. eset különbsége adja az állítást. Ez előkészíti a következő lépést (III. eset: a középpont a szögön kívül). Az érintő merőleges a sugárra; a sugár és a húr szögét $90^\\circ$-ra kiegészítve, majd a kerületi–középponti tételt alkalmazva kapjuk az érintő–húr szög értékét. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ],
        notes: "A tétel mindhárom esetben ugyanazt az állítást adja; a vizsgán érdemes az I. esetet teljesen végigvezetni, a többit „ugyanígy, összeadással/kivonással” indokolni."
      },
      {
        theoremNumber: 2,
        title: "Thalész-tétele",
        statementLatex: "AB \\text{ átmérő} \\implies \\angle ACB=90^\\circ",
        proofTitle: "A kerületi–középponti tétel speciális esete",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Megfordítás",
            latexContent: "\\beta=180^\\circ \\ \\alpha=\\beta/2=90^\\circ \\ \\alpha=90^\\circ \\implies \\beta=180^\\circ",
            explanation: "Cél: belátni, hogy Thalész-tétele. Az átmérő végpontjaihoz tartozó körív félkör, középponti szöge $180^\\circ$. Ez előkészíti a következő lépést (Az ív félkör). A kerületi szög a középponti szög fele, tehát derékszög. Ez előkészíti a következő lépést (Felezés). Ha a kerületi szög derékszög, a középponti $180^\\circ$, így a húr átmérő: a derékszögű háromszög átfogója a köré írt kör átmérője. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "Húrnégyszög tétele és megfordítása",
        statementLatex: "ABCD \\text{ húrnégyszög} \\iff \\alpha+\\gamma=180^\\circ",
        proofTitle: "A szemközti ívek összege a teljes kör",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Megfordítás",
            latexContent: "2\\alpha+2\\gamma=360^\\circ \\ \\alpha+\\gamma=180^\\circ \\ \\alpha+\\gamma=180^\\circ \\implies A,B,C,D \\text{ egy körön}",
            explanation: "Cél: belátni, hogy Húrnégyszög tétele és megfordítása. Az $\\alpha$ és $\\gamma$ kerületi szögekhez tartozó középponti szögek a két szemközti ívhez tartoznak, amelyek együtt a teljes kört kiadják. Innen a szemközti szögek összege $180^\\circ$; ugyanígy $\\beta+\\delta=180^\\circ$. Ez előkészíti a következő lépést (Osztás kettővel). A $B$ és $D$ csúcsok a $C$ csúcsból nézve $180^\\circ$-ra egészítik ki egymást, ezért ugyanazon látószögköríven vannak, azaz egy körön. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "Érintőnégyszög tétele",
        statementLatex: "a+c=b+d",
        proofTitle: "Az érintőszakaszok egyenlősége",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Összeadás",
            latexContent: "PA=PA',\\quad PB=PB',\\quad PC=PC',\\quad PD=PD' \\ a=x+y,\\ b=y+z,\\ c=z+w,\\ d=w+x \\ a+c=(x+y)+(z+w)=(y+z)+(w+x)=b+d",
            explanation: "Cél: belátni, hogy Érintőnégyszög tétele. Külső pontból a körhöz húzott két érintőszakasz egyenlő hosszú (a derékszögű háromszögek egybevágók). Minden csúcsnál a két szomszédos érintőszakasz hosszát jelöljük; az oldal a két szomszédos csúcs szakaszainak összege. A szemközti oldalpárok összege ugyanaz; a megfordítás a beírt kör szerkesztésével igazolható. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 5,
        title: "Érintő–szelő tétel",
        statementLatex: "PE^2=PA\\cdot PB",
        proofTitle: "Hasonló háromszögek az érintőszárú szöggel",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Hasonlóság és arány",
            latexContent: "\\angle APE=\\angle EPB \\ \\angle PEA=\\angle PBE \\ \\triangle PAE\\sim\\triangle PEB \\implies \\frac{PA}{PE}=\\frac{PE}{PB}\\implies PE^2=PA\\cdot PB",
            explanation: "Cél: belátni, hogy Érintő–szelő tétel. A $P$ pontból induló érintő és szelő ugyanazt a szöget zárja be, hiszen a szelő egyenese átmegy $P$-n. Az $EA$ húrhoz tartozó érintőszárú szög egyenlő az ugyanazon ívhez tartozó $EBA$ kerületi szöggel. Két szög egyezik, tehát a háromszögek hasonlók; a megfelelő oldalak arányából adódik az állítás. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      }
    ],
    applicationsInside: [
      "Körcikk, körszelet, ívhossz számítása.",
      "Húr- és érintőnégyszög felismerése szög- és oldalösszegekből.",
      "Érintő–szelő tétel külső pontból húzott szakaszokra.",
      "Látószögkörív szerkesztése adott szakaszhoz."
    ],
    applicationsOutside: [
      "Színházi páholy, stadionlelátó: a pálya adott szakasza minél nagyobb látószögből látszódjék.",
      "Ékszíjtárcsák és fogaskerekek: közös érintők, ívhosszak.",
      "Optika: lencsék és tükrök görbületi körei, látószög.",
      "GPS és háromszögelés: körívek metszése, távolságok."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Egy $60^\\circ$-os középponti szögű körcikk területe $300\\ \\mathrm{cm}^2$. Mekkora a körcikkbe írható (a két sugárt és az ívet érintő) kör területe?",
        solutionLatex: "\\frac{60^\\circ}{360^\\circ}r^2\\pi=300 \\implies r^2\\pi=1800;\\quad \\sin30^\\circ=\\frac{\\rho}{R-\\rho}\\implies R=3\\rho;\\quad T_{\\text{kör}}=\\pi\\rho^2=\\frac{r^2\\pi}{9}=200\\ \\mathrm{cm}^2.",
        explanation: "A beírt kör középpontja a szögfelezőn van. A szögfelezőn felvett derékszögű háromszögben $\\sin30^\\circ=\\rho/(R-\\rho)$, ahonnan $R=3\\rho$. A körcikk területe $\\pi R^2/6$, a beírt köré $\\pi\\rho^2=\\pi R^2/9$, tehát a terület a körcikk területének $\\frac{1/9}{1/6}=\\frac23$-a: $300\\cdot\\frac23=200$."
      },
      {
        problemNumber: 2,
        question: "Egy húrnégyszög három szöge $70^\\circ$, $95^\\circ$ és $110^\\circ$. Mekkora a negyedik szög?",
        solutionLatex: "70^\\circ+110^\\circ=180^\\circ,\\qquad 95^\\circ+x=180^\\circ \\implies x=85^\\circ.",
        explanation: "A $70^\\circ$ és $110^\\circ$ szemközti szögek, összegük valóban $180^\\circ$; a negyedik szög a $95^\\circ$-os pótszöge."
      },
      {
        problemNumber: 3,
        question: "Egy külső $P$ pontból húzott érintő hossza $PE=6$, a szelő közelebbi metszéspontja $PA=4$. Milyen hosszú a távolabbi szakasz?",
        solutionLatex: "PE^2=PA\\cdot PB \\implies 36=4\\cdot PB \\implies PB=9.",
        explanation: "Az érintő–szelő tétel szerint az érintő négyzete a szelő két szakaszának szorzata. Ellenőrzés: $AB=PB-PA=5$, és $4\\cdot 9=36=6^2$."
      },
      {
        problemNumber: 4,
        question: "Egy körben az $AB$ húr a középpontból $60^\\circ$-os szögben látszik. Mekkora szögben látja $AB$-t a kör nagyobb ívén levő $P$ pont? És a kisebb íven levő $Q$ pont?",
        solutionLatex: "\\angle APB=30^\\circ,\\qquad \\angle AQB=180^\\circ-30^\\circ=150^\\circ.",
        explanation: "A nagyobb íven a kerületi szög a középponti szög fele: $60^\\circ/2=30^\\circ$. A kisebb íven fekvő pont a másik látószögköríven van, ezért a húr a kiegészítő szög alatt látszik."
      }
    ],
    oralPresentationOutline: [
      'Kör részei: húr, szelő, érintő, körív, körcikk, körszelet',
      'Középponti és kerületi szög; β = 2α (azonos íven)',
      'Érintőszárú kerületi szög; Thalész-tétel',
      'Látószög és látószögkörív',
      'Húrnégyszög: szemközti szögek összege 180°',
      'Érintőnégyszög: a+c = b+d; érintő–szelő tétel',
      'Szóbeli: kerületi–középponti + egy négyszög-tétel + feladat'
    ],
    requiredDefinitions: [
      {
        term: "Húrnégyszög",
        definitionLatex: "A,B,C,D\\in k",
        explanation: "Minden csúcsa egyazon körön van; ekvivalens: szemközti szögeinek összege $180^\\circ$."
      },
      {
        term: "Érintőnégyszög",
        definitionLatex: "a+c=b+d",
        explanation: "Minden oldalegyenese érint egy közös kört; ekvivalens az oldalösszeg-egyenlőséggel."
      },
      {
        term: "Kerületi szög",
        definitionLatex: "\\alpha=\\tfrac12\\beta",
        explanation: "Csúcsa a körön van, szárai húrok; azonos íven a középponti szög fele."
      },
      {
        term: "Látószög",
        definitionLatex: "AB \\text{ az } \\alpha \\text{ szög alatt látszik}",
        explanation: "A pontból az $AB$ szakasz két végpontja felé húzott félegyenesek szöge; a mértani hely két látószögkörív."
      }
    ],
    examinerTraps: [
      {
        question: "Mindig fele a kerületi szög a középpontinak?",
        answer: "Csak akkor, ha ugyanahhoz az ívhez tartoznak. Különböző íveken a viszony más; a kisebb íven fekvő pontnál a kiegészítő szög adódik.",
        dangerLevel: "Közepes"
      },
      {
        question: "Minden deltoid húrnégyszög és érintőnégyszög is?",
        answer: "Minden deltoid érintőnégyszög, mert a szimmetriatengely mentén az érintőszakaszok páronként egyenlők. Húrnégyszög csak speciális esetben (pl. négyzet, vagy ha a szemközti szögek $180^\\circ$-ra egészítik ki egymást).",
        dangerLevel: "Magas"
      },
      {
        question: "Elég-e egy négyszögnél az $a+c=b+d$ feltétel az érintőnégyszög eldöntéséhez?",
        answer: "Konvex négyszögre igen, ez elégséges is. Nem konvex (homorú) négyszögre a feltétel önmagában nem garantál beírható kört.",
        dangerLevel: "Magas"
      },
      {
        question: "Hol van a külső pontból húzott érintő érintési pontja?",
        answer: "A $P$ pontból a körhöz húzott érintők érintési pontjai a $PO$ átmérőjű Thalész-körön vannak, mert az érintési pontban a sugár merőleges az érintőre.",
        dangerLevel: "Közepes"
      }
    ],
    applications: [
      {
        title: "Körcikkbe írt kör",
        problem: "60°-os, 300 cm² területű körcikk beírt körének területe?",
        solutionLatex: "T=200\\ \\mathrm{cm}^2"
      },
      {
        title: "Érintő–szelő",
        problem: "PE=6, PA=4 esetén PB=?",
        solutionLatex: "PB=9"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Kör, szögek, húr- és érintőnégyszög."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Húr- vagy érintőnégyszög."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "Kerületi–középponti vagy húrnégyszög-tétel."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Körcikk / érintő–szelő."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Látószög, történet."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Körgeometria."
      }
    ],
    historicalContext: "Hippokratész: kerületi–középponti kapcsolat; Thalész: átmérőhöz tartozó derékszög; Euklidész Elemek III. könyve.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 17. Tétel (108–115. oldal): Az érintőszárú esetet is mutasd!",
    memorizationMaterial: `## Bemagolandó — A kör és részei. Kerületi szög, középponti szög, látószög. Húrnégyszögek, érintőnégyszögek

### Fő állítás / képletek

$\\beta=2\\alpha,\\quad \\alpha+\\gamma=180^\\circ,\\quad a+c=b+d,\\quad PE^2=PA\\cdot PB$

### Definíciók

**Húrnégyszög:** $A,B,C,D\\in k$

Minden csúcsa egyazon körön van; ekvivalens: szemközti szögeinek összege $180^\\circ$.

**Érintőnégyszög:** $a+c=b+d$

Minden oldalegyenese érint egy közös kört; ekvivalens az oldalösszeg-egyenlőséggel.

**Kerületi szög:** $\\alpha=\\tfrac12\\beta$

Csúcsa a körön van, szárai húrok; azonos íven a középponti szög fele.

**Látószög:** $AB \\text{ az } \\alpha \\text{ szög alatt látszik}$

A pontból az $AB$ szakasz két végpontja felé húzott félegyenesek szöge; a mértani hely két látószögkörív.

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**Kerületi–középponti szögek tétele**

$\\beta=2\\alpha$

*Bizonyítás iránya:* Esetekre bontás a középpont helyzete szerint

**Thalész-tétele**

$AB \\text{ átmérő} \\implies \\angle ACB=90^\\circ$

*Bizonyítás iránya:* A kerületi–középponti tétel speciális esete

**Húrnégyszög tétele és megfordítása**

$ABCD \\text{ húrnégyszög} \\iff \\alpha+\\gamma=180^\\circ$

*Bizonyítás iránya:* A szemközti ívek összege a teljes kör

**Érintőnégyszög tétele**

$a+c=b+d$

*Bizonyítás iránya:* Az érintőszakaszok egyenlősége

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — A kör és részei. Kerületi szög, középponti szög, látószög. Húrnégyszögek, érintőnégyszögek (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Kör részei: húr, szelő, érintő, körív, körcikk, körszelet
2. Középponti és kerületi szög; β = 2α (azonos íven)
3. Érintőszárú kerületi szög; Thalész-tétel
4. Látószög és látószögkörív
5. Húrnégyszög: szemközti szögek összege 180°
6. Érintőnégyszög: a+c = b+d; érintő–szelő tétel
7. Szóbeli: kerületi–középponti + egy négyszög-tétel + feladat

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **Kerületi–középponti szögek tétele** (Esetekre bontás a középpont helyzete szerint).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,
    visualizerType: 'conic'
  },
  {
    id: "tétel-18",
    number: 18,
    title: "Vektorok, vektorműveletek. Vektorfelbontási tétel. Vektorok koordinátái. Skaláris szorzat",
    category: "Koordinátageometria és vektorok",
    tags: [
      "Vektorok",
      "Vektorfelbontás",
      "Koordináták",
      "Skaláris szorzat",
      "Merőlegesség",
      "Hajlásszög"
    ],
    difficulty: "1: alap alatti",
    summary: "A vektor fogalma és műveletei; a vektorfelbontási tétel és egyértelműsége; koordináták ortonormált bázisban; a skaláris szorzat geometriai és koordinátás alakja; hajlásszög, merőlegesség, munka.",
    statementLatex: "\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\varphi=a_1b_1+a_2b_2",
    conditionsLatex: "\\vec{a}=(a_1,a_2),\\ \\vec{b}=(b_1,b_2),\\ \\vec{a},\\vec{b}\\neq\\vec{0}",
    formulaSheetReference: "Hivatalos Képlettár 2026: vektorok",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Koordinátageometria, 9. oldal"
    ],
    introduction: `A vektor fogalma a fizikából indult: erő, sebesség, elmozdulás — olyan mennyiségek, amelyeknek nemcsak nagyságuk, hanem irányuk is van.

William Rowan Hamilton (1805–1865) használta először a „vector” szót, és a kvaterniók elméletében dolgozta ki a vektorszámítás alapjait; Josiah Willard Gibbs és Oliver Heaviside alakította ki a ma tanított vektoralgebrát.

A skaláris szorzat kettős szerepet játszik: fizikailag a munka ($W=\\vec{F}\\cdot\\vec{s}$), geometriailag pedig a hajlásszög és a merőlegesség mérőeszköze.

A szóbelin a leggyakoribb hiba, hogy a jelölést és a szemléletet összekeverik: a vektor nem pont, hanem irányított szakasz, a skaláris szorzat eredménye pedig szám.`,
    detailedTheory: `### 1. A vektor fogalma

- **Vektor:** irányított szakasz, amelyet nagyság (hossz), állás és irány jellemez. A **szabad vektor** kezdőpontjától eltekintünk: ugyanaz a vektor minden eltolt példánya.
- Jelölés: $\\vec{a}$, illetve $\\overrightarrow{AB}$ (kezdőpont $A$, végpont $B$). Hossza $|\\vec{a}|\\ge 0$.

- **Nullvektor:** $\\vec{0}$, hossza $0$, iránya tetszőleges. **Egységvektor:** hossza $1$; ha $\\vec{a}\\neq\\vec{0}$, akkor $\\vec{a}/|\\vec{a}|$ egységvektor.

- **Ellentett vektor:** $-\\vec{a}$, ugyanolyan hosszú, ellentétes irányú.
- Két vektor **egyállású (párhuzamos)**, ha származtathatók egymásból skalár szorzással: $\\vec{b}=\\lambda\\vec{a}$ valamilyen $\\lambda\\neq 0$ valósra. **Merőlegesek**, ha hajlásszögük $90^\\circ$.

- **Helyvektor:** a koordinátarendszer origójából a ponthoz mutató vektor; a pont és helyvektora kölcsönösen egyértelműen megfelel egymásnak.

### 2. Vektorműveletek

- **Összeadás:** háromszög-szabály (egymás után fűzés) vagy paralelogramma-szabály (közös kezdőpontból). Kommutatív és asszociatív: $\\vec{a}+\\vec{b}=\\vec{b}+\\vec{a}$, $(\\vec{a}+\\vec{b})+\\vec{c}=\\vec{a}+(\\vec{b}+\\vec{c})$.

- **Kivonás:** $\\vec{a}-\\vec{b}=\\vec{a}+(-\\vec{b})$; ez a $\\overrightarrow{BA}$ vektor, ha $\\vec{a}=\\overrightarrow{OA}$, $\\vec{b}=\\overrightarrow{OB}$.

- **Skalárral szorzás:** $\\lambda\\vec{a}$ hossza $|\\lambda|\\,|\\vec{a}|$; iránya $\\lambda>0$ esetén azonos, $\\lambda<0$ esetén ellentétes, $\\lambda=0$ esetén nullvektor.

- **Disztributivitás:** $\\lambda(\\vec{a}+\\vec{b})=\\lambda\\vec{a}+\\lambda\\vec{b}$, illetve $(\\lambda+\\mu)\\vec{a}=\\lambda\\vec{a}+\\mu\\vec{a}$.

- **Háromszög-egyenlőtlenség vektorokra:** $|\\vec{a}+\\vec{b}|\\le|\\vec{a}|+|\\vec{b}|$, egyenlőség pontosan akkor, ha $\\vec{a}$ és $\\vec{b}$ egyirányú.

### 3. Vektorfelbontási tétel

- Ha $\\vec{i}$ és $\\vec{j}$ **nem egyállású** (lineárisan független) vektorok a síkban, akkor minden $\\vec{v}$ síkvektor egyértelműen felírható
  $$\\vec{v}=v_1\\vec{i}+v_2\\vec{j}$$
  alakban. A $v_1,v_2$ számok a $\\vec{v}$ **koordinátái** az $(\\vec{i},\\vec{j})$ bázisban.

- **Ortonormált bázis:** $\\vec{i}\\perp\\vec{j}$ és $|\\vec{i}|=|\\vec{j}|=1$. Ekkor a koordináták geometriailag a tengelyekre eső vetületek hosszai (előjelesen).

- **Térben** három nem egysíkú vektor alkot bázist: $\\vec{v}=v_1\\vec{i}+v_2\\vec{j}+v_3\\vec{k}$.

### 4. Koordináták és műveletek

- $\\vec{a}=(a_1,a_2)$, $\\vec{b}=(b_1,b_2)$ esetén:
  $$\\vec{a}+\\vec{b}=(a_1+b_1,\\,a_2+b_2),\\qquad \\lambda\\vec{a}=(\\lambda a_1,\\lambda a_2),$$
  $$|\\vec{a}|=\\sqrt{a_1^2+a_2^2}.$$
- Két pont távolsága: $AB=|\\overrightarrow{AB}|=\\sqrt{(b_1-a_1)^2+(b_2-a_2)^2}$.

- **Osztópont:** az $A$ és $B$ pontot $m:n$ arányban osztó $P$ helyvektora $\\vec{p}=\\frac{n\\vec{a}+m\\vec{b}}{m+n}$; felezőpontnál $\\vec{p}=(\\vec{a}+\\vec{b})/2$.

- **Súlypont:** $\\vec{s}=(\\vec{a}+\\vec{b}+\\vec{c})/3$.

### 5. Skaláris szorzat

- **Definíció:** $\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\,|\\vec{b}|\\cos\\varphi$, ahol $\\varphi\\in[0^\\circ,180^\\circ]$ a két vektor hajlásszöge. Az eredmény **skalár** (szám), nem vektor.

- **Tulajdonságok:** kommutatív ($\\vec{a}\\cdot\\vec{b}=\\vec{b}\\cdot\\vec{a}$), disztributív ($\\vec{a}\\cdot(\\vec{b}+\\vec{c})=\\vec{a}\\cdot\\vec{b}+\\vec{a}\\cdot\\vec{c}$), homogén ($(\\lambda\\vec{a})\\cdot\\vec{b}=\\lambda(\\vec{a}\\cdot\\vec{b})$). **Nem asszociatív:** $(\\vec{a}\\cdot\\vec{b})\\cdot\\vec{c}$ jelentése $\\vec{c}$ skalárszorosa, míg $\\vec{a}\\cdot(\\vec{b}\\cdot\\vec{c})$ az $\\vec{a}$ skalárszorosa — általában más vektorok.

- **Koordinátás alak:** ortonormált bázisban $\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2$ (térben $+a_3b_3$).

- **Hajlásszög:** $\\cos\\varphi=\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\,|\\vec{b}|}$.

- **Merőlegesség:** $\\vec{a}\\perp\\vec{b}\\iff\\vec{a}\\cdot\\vec{b}=0$ (nemnulla vektorokra).

- **Vetület:** $\\vec{b}$ vetülete $\\vec{a}$ irányára $\\dfrac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|}$ (előjeles hossz).

- **Következmények:** $\\vec{a}\\cdot\\vec{a}=|\\vec{a}|^2$; $|\\vec{a}\\cdot\\vec{b}|\\le|\\vec{a}||\\vec{b}|$ (Cauchy–Schwarz); a paralelogramma-azonosság $|\\vec{a}+\\vec{b}|^2+|\\vec{a}-\\vec{b}|^2=2(|\\vec{a}|^2+|\\vec{b}|^2)$.

### 6. Alkalmazások

- Fizika: munka $W=\\vec{F}\\cdot\\vec{s}=|\\vec{F}||\\vec{s}|\\cos\\varphi$; erőfelbontás ferde lejtőn; eredő erő.
- Geometria: hajlásszög, merőleges egyenes normálvektora, háromszög területe, koszinusztétel.
- Grafika és navigáció: felületi normálisok, irányvektorok, vetítés.`,
    theorems: [
      {
        theoremNumber: 1,
        title: "Vektorfelbontási tétel",
        statementLatex: "\\vec{v}=v_1\\vec{i}+v_2\\vec{j} \\text{ egyértelműen}",
        proofTitle: "Geometriai szerkesztés: létezés és egyértelműség egyszerre",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Létezés és egyértelműség",
            latexContent: "\\begin{aligned}\\vec{v} &= \\overrightarrow{OP} \\\\ e &\\parallel \\vec{i},\\ e\\ni O \\\\ f &\\parallel \\vec{j},\\ f\\ni P \\\\ e\\cap f &= \\{Q\\} \\\\ \\vec{v} &= \\overrightarrow{OQ}+\\overrightarrow{QP} = v_1\\vec{i}+v_2\\vec{j}\\end{aligned}",
            explanation: "A létezést és az egyértelműséget geometriailag egyszerre igazolhatjuk. Az $O$ ponton át $\\vec{i}$-vel párhuzamos, a $P$ ponton át pedig $\\vec{j}$-vel párhuzamos egyenest húzzunk. Mivel a két bázisvektor nem párhuzamos, a két egyenes pontosan egy pontban metszi egymást. Ez a $Q$ metszéspont egyértelműen meghatározott, ezért a hozzá tartozó két vektorösszetevő is egyértelműen meghatározható. Így a felbontás létezik és egyértelmű, tehát a feladatnak pontosan egy megoldása van."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "A skaláris szorzat koordinátás alakja",
        statementLatex: "\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2",
        proofTitle: "Ortonormált bázisra való kifejtés",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Eredmény",
            latexContent: "\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2",
            explanation: "Cél: belátni, hogy A skaláris szorzat koordinátás alakja. A vektorfelbontási tétel szerint mindkét vektor felírható az ortonormált bázisban. Ez a teljes indukció része: a bázis ellenőrzi az első értéket, az indukciós lépés pedig továbbléptet. A szorzatot tagonként kifejtjük; a skaláris szorzat bilineáris. Ez előkészíti a következő lépést (Disztributivitás). Ortonormált bázisban az egységvektorok hossza $1$, hajlásszögük $90^\\circ$, így $\\cos90^\\circ=0$. A vegyes tagok eltűnnek, marad a két tengely menti szorzat összege. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "A koszinusztétel levezetése skaláris szorzattal",
        statementLatex: "c^2=a^2+b^2-2ab\\cos\\gamma",
        proofTitle: "Vektoros bizonyítás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Szög behelyettesítése",
            latexContent: "\\begin{aligned}\\vec{c} &= \\vec{a}-\\vec{b} \\\\ |\\vec{c}|^2 &= (\\vec{a}-\\vec{b})^2 = |\\vec{a}|^2+|\\vec{b}|^2-2\\vec{a}\\cdot\\vec{b} \\\\ c^2 &= a^2+b^2-2ab\\cos\\gamma\\end{aligned}",
            explanation: "Cél: belátni, hogy A koszinusztétel levezetése skaláris szorzattal. A háromszög két oldalvektora $\\vec{a},\\vec{b}$ a közös csúcsból; a harmadik oldal a különbségük. Felhasználjuk, hogy $\\vec{a}\\cdot\\vec{a}=|\\vec{a}|^2$, és a skaláris szorzat kommutatív. Ez előkészíti a következő lépést (Négyzetre emelés). $\\vec{a}\\cdot\\vec{b}=ab\\cos\\gamma$; $\\gamma=90^\\circ$ esetén visszakapjuk a Pitagorasz-tételt. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "Merőlegességi kritérium",
        statementLatex: "\\vec{a}\\perp\\vec{b} \\iff \\vec{a}\\cdot\\vec{b}=0",
        proofTitle: "A koszinuszos definícióból",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Merőlegesség",
            latexContent: "\\begin{aligned}\\vec{a}\\cdot\\vec{b} &= |\\vec{a}||\\vec{b}|\\cos\\varphi \\\\ \\varphi=90^\\circ &\\implies \\cos\\varphi=0 \\implies \\vec{a}\\cdot\\vec{b}=0\\end{aligned}",
            explanation: "Cél: belátni, hogy Merőlegességi kritérium. Nemnulla vektorokra a hosszak pozitívak. A definíció szerinti átírás után a műveletek ismert azonosságait alkalmazzuk. Ha a szorzat nulla, a pozitív tényezők miatt $\\cos\\varphi=0$, azaz $\\varphi=90^\\circ$. Összefoglalva: a levezetés végén megkapjuk a tétel állítását. Mondd el szóban is: feltétel → kulcslépés → következtetés; egy számpéldával ellenőrizd, ha lehet."
          }
        ]
      },
      {
        theoremNumber: 5,
        title: "Paralelogramma-azonosság",
        statementLatex: "|\\vec{a}+\\vec{b}|^2+|\\vec{a}-\\vec{b}|^2=2(|\\vec{a}|^2+|\\vec{b}|^2)",
        proofTitle: "Két négyzet összeadása",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Összeadás",
            latexContent: "\\begin{aligned}|\\vec{a}+\\vec{b}|^2 &= |\\vec{a}|^2+|\\vec{b}|^2+2\\vec{a}\\cdot\\vec{b} \\\\ |\\vec{a}-\\vec{b}|^2 &= |\\vec{a}|^2+|\\vec{b}|^2-2\\vec{a}\\cdot\\vec{b} \\\\ |\\vec{a}+\\vec{b}|^2+|\\vec{a}-\\vec{b}|^2 &= 2(|\\vec{a}|^2+|\\vec{b}|^2)\\end{aligned}",
            explanation: "Cél: belátni, hogy Paralelogramma-azonosság. A skaláris szorzat disztributivitása miatt. Ez előkészíti a következő lépést (Összeg négyzete). Ugyanígy, csak a vegyes tag előjele negatív. Ez előkészíti a következő lépést (Különbség négyzete). A vegyes tagok kiesnek. Szemléletesen: a paralelogramma átlóinak négyzetösszege az oldalak négyzetösszegének kétszerese. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      }
    ],
    applicationsInside: [
      "Hajlásszög és merőlegesség számítása koordinátákból.",
      "Normálvektoros és irányvektoros egyenes felírása.",
      "Háromszög területe és súlypontja vektorokkal.",
      "Osztópont, felezőpont, távolság."
    ],
    applicationsOutside: [
      "Munka: $W=\\vec{F}\\cdot\\vec{s}$; ferde lejtőn az erőfelbontás.",
      "Számítógépes grafika: normálisok, árnyalás, vetítés.",
      "Navigáció: irány- és sebességvektorok.",
      "Statisztika: vektorok közötti korreláció szemlélete."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Adott $\\vec{a}=(3,4)$ és $\\vec{b}=(1,7)$. Számítsd ki a skaláris szorzatukat és a hajlásszögüket!",
        solutionLatex: "\\vec{a}\\cdot\\vec{b}=3\\cdot1+4\\cdot7=31,\\quad |\\vec{a}|=5,\\quad |\\vec{b}|=5\\sqrt2,\\quad \\cos\\varphi=\\frac{31}{25\\sqrt2}\\approx0{,}877 \\implies \\varphi\\approx28{,}7^\\circ.",
        explanation: "A koordinátás alak és a hosszképlet után a koszinusz definíciójából kapjuk a szöget. Ellenőrzés: a szög hegyesszög, mert a skaláris szorzat pozitív."
      },
      {
        problemNumber: 2,
        question: "Egy testre $\\vec{F}=(30,40)\\ \\mathrm{N}$ erő hat, miközben elmozdulása $\\vec{s}=(5,2)\\ \\mathrm{m}$. Mekkora a végzett munka?",
        solutionLatex: "W=\\vec{F}\\cdot\\vec{s}=30\\cdot5+40\\cdot2=230\\ \\mathrm{J}.",
        explanation: "A munka a skaláris szorzat: $W=|\\vec{F}||\\vec{s}|\\cos\\varphi$. Itt $|\\vec{F}|=50$, $|\\vec{s}|=\\sqrt{29}$, és $\\cos\\varphi=230/(50\\sqrt{29})$."
      },
      {
        problemNumber: 3,
        question: "Mely $\\lambda$ valós számra lesz merőleges egymásra a $(2,\\lambda)$ és a $(3,-1)$ vektor?",
        solutionLatex: "2\\cdot3+\\lambda\\cdot(-1)=0 \\implies 6-\\lambda=0 \\implies \\lambda=6.",
        explanation: "Merőlegesség esetén a skaláris szorzat nulla. Ellenőrzés: $(2,6)\\cdot(3,-1)=6-6=0$."
      },
      {
        problemNumber: 4,
        question: "Bontsd fel a $\\vec{v}=(7,1)$ vektort a $\\vec{a}=(2,1)$ és $\\vec{b}=(1,3)$ irányára!",
        solutionLatex: "\\vec{v}=\\alpha\\vec{a}+\\beta\\vec{b}:\\quad 2\\alpha+\\beta=7,\\ \\alpha+3\\beta=1 \\implies \\alpha=4,\\ \\beta=-1,\\quad \\vec{v}=4\\vec{a}-\\vec{b}.",
        explanation: "A két koordinátaegyenletből álló rendszert megoldva $\\alpha=4$, $\\beta=-1$. Ellenőrzés: $4(2,1)-(1,3)=(7,1)$."
      },
      {
        problemNumber: 5,
        question: "Számítsd ki az $A(0,0)$, $B(4,1)$, $C(1,3)$ csúcsú háromszög területét vektorokkal!",
        solutionLatex: "T=\\tfrac12\\left|\\overrightarrow{AB}\\times\\overrightarrow{AC}\\right|=\\tfrac12|4\\cdot3-1\\cdot1|=\\tfrac{11}{2}=5{,}5.",
        explanation: "A síkban a vektoriális szorzat helyett a determináns abszolút értéke adja a paralelogramma területét, amelynek fele a háromszög területe."
      }
    ],
    oralPresentationOutline: [
      'Vektor fogalma; abszolút érték, egységvektor',
      'Összeadás, skalárral szorzás; parallelogramma-szabály',
      'Vektorfelbontási tétel (bázis szerint)',
      'Koordináták; műveletek koordinátákkal',
      'Skaláris szorzat: def., szög, merőlegesség',
      'Alkalmazás: geometriai bizonyítások vektorral',
      'Szóbeli: műveletek + skaláris szorzat + példa'
    ],
    requiredDefinitions: [
      {
        term: "Vektor",
        definitionLatex: "\\vec{a}=\\overrightarrow{AB},\\quad |\\vec{a}|=AB",
        explanation: "Irányított szakasz; jellemzője a nagyság, az állás és az irány."
      },
      {
        term: "Vektorfelbontás",
        definitionLatex: "\\vec{v}=v_1\\vec{i}+v_2\\vec{j}",
        explanation: "Nem egyállású bázisban minden vektor egyértelműen felbontható; a $v_1,v_2$ a koordináták."
      },
      {
        term: "Skaláris szorzat",
        definitionLatex: "\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\varphi",
        explanation: "Eredménye skalár; koordinátásan $a_1b_1+a_2b_2$."
      },
      {
        term: "Merőlegesség",
        definitionLatex: "\\vec{a}\\perp\\vec{b} \\iff \\vec{a}\\cdot\\vec{b}=0",
        explanation: "Nemnulla vektorokra a skaláris szorzat eltűnése ekvivalens a $90^\\circ$-os hajlásszöggel."
      }
    ],
    examinerTraps: [
      {
        question: "Asszociatív-e a skaláris szorzat?",
        answer: "Nem. $(\\vec{a}\\cdot\\vec{b})\\cdot\\vec{c}$ és $\\vec{a}\\cdot(\\vec{b}\\cdot\\vec{c})$ általában más irányú vektorok; a skaláris szorzat csak kommutatív és disztributív.",
        dangerLevel: "Magas"
      },
      {
        question: "Lehet-e két nemnulla vektor skaláris szorzata nulla?",
        answer: "Igen, pontosan akkor, ha merőlegesek. Ellenkező esetben a szorzat előjele a hajlásszögtől függ: hegyesszögnél pozitív, tompaszögnél negatív.",
        dangerLevel: "Közepes"
      },
      {
        question: "A vektorfelbontás egyértelmű-e, ha a bázisvektorok párhuzamosak?",
        answer: "Nem. Egyállású bázisvektorokkal nem lehet a sík minden vektorát előállítani, és ahol mégis lehetséges, ott sem egyértelműen.",
        dangerLevel: "Magas"
      },
      {
        question: "Mit jelent a $\\vec{a}\\cdot\\vec{b}\\cdot\\vec{c}$ kifejezés?",
        answer: "Értelmetlen, mert a skaláris szorzat két vektort vár. Először zárójelezni kell: $(\\vec{a}\\cdot\\vec{b})\\vec{c}$ egy vektor, $\\vec{a}(\\vec{b}\\cdot\\vec{c})$ szintén vektor.",
        dangerLevel: "Közepes"
      }
    ],
    applications: [
      {
        title: "Fizikai munka",
        problem: "$\\vec{F}=(30,40)$ N, $\\vec{s}=(5,2)$ m. Mennyi a munka?",
        solutionLatex: "W=230\\ \\mathrm{J}"
      },
      {
        title: "Vektorfelbontás",
        problem: "$\\vec{v}=(7,1)$ felbontása $(2,1)$ és $(1,3)$ irányára?",
        solutionLatex: "\\vec{v}=4\\vec{a}-\\vec{b}"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Vektorok, felbontás, koordináták, skaláris szorzat."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Skaláris szorzat."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "Koordinátás alak vagy vektorfelbontási tétel."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Szög, munka, felbontás."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Fizika, Hamilton."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Vektoros jelölések."
      }
    ],
    historicalContext: "Hamilton: „vector”; Gibbs és Heaviside: a modern vektoralgebra kialakítása.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 18. Tétel (116–123. oldal): A skaláris szorzat eredménye SZÁM!",
    memorizationMaterial: `## Bemagolandó — Vektorok, vektorműveletek. Vektorfelbontási tétel. Vektorok koordinátái. Skaláris szorzat

### Fő állítás / képletek

$\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\varphi=a_1b_1+a_2b_2$

### Definíciók

**Vektor:** $\\vec{a}=\\overrightarrow{AB},\\quad |\\vec{a}|=AB$

Irányított szakasz; jellemzője a nagyság, az állás és az irány.

**Vektorfelbontás:** $\\vec{v}=v_1\\vec{i}+v_2\\vec{j}$

Nem egyállású bázisban minden vektor egyértelműen felbontható; a $v_1,v_2$ a koordináták.

**Skaláris szorzat:** $\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\varphi$

Eredménye skalár; koordinátásan $a_1b_1+a_2b_2$.

**Merőlegesség:** $\\vec{a}\\perp\\vec{b} \\iff \\vec{a}\\cdot\\vec{b}=0$

Nemnulla vektorokra a skaláris szorzat eltűnése ekvivalens a $90^\\circ$-os hajlásszöggel.

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**Vektorfelbontási tétel**

$\\vec{v}=v_1\\vec{i}+v_2\\vec{j} \\text{ egyértelműen}$

*Bizonyítás iránya:* Paralelogramma-szerkesztés és az egyértelműség

**A skaláris szorzat koordinátás alakja**

$\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2$

*Bizonyítás iránya:* Ortonormált bázisra való kifejtés

**A koszinusztétel levezetése skaláris szorzattal**

$c^2=a^2+b^2-2ab\\cos\\gamma$

*Bizonyítás iránya:* Vektoros bizonyítás

**Merőlegességi kritérium**

$\\vec{a}\\perp\\vec{b} \\iff \\vec{a}\\cdot\\vec{b}=0$

*Bizonyítás iránya:* A koszinuszos definícióból

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — Vektorok, vektorműveletek. Vektorfelbontási tétel. Vektorok koordinátái. Skaláris szorzat (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Vektor fogalma; abszolút érték, egységvektor
2. Összeadás, skalárral szorzás; parallelogramma-szabály
3. Vektorfelbontási tétel (bázis szerint)
4. Koordináták; műveletek koordinátákkal
5. Skaláris szorzat: def., szög, merőlegesség
6. Alkalmazás: geometriai bizonyítások vektorral
7. Szóbeli: műveletek + skaláris szorzat + példa

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **Vektorfelbontási tétel** (Paralelogramma-szerkesztés és az egyértelműség).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,

    visualizerType: 'vector'
  },
  {
    id: "tétel-19",
    number: 19,
    title: "Szakaszok és egyenesek a koordinátasíkon. Párhuzamos és merőleges egyenesek. Elsőfokú egyenlőtlenségek, egyenletrendszerek grafikus megoldása",
    category: "Koordinátageometria és vektorok",
    tags: [
      "Egyenes",
      "Normálvektor",
      "Irányvektor",
      "Meredekség",
      "Pont–egyenes távolság",
      "Lineáris programozás"
    ],
    difficulty: "2: bemelegítő",
    summary: "Távolság, felezőpont, osztópont; az egyenes normálvektoros, irányvektoros, paraméteres, meredekséges és tengelymetszetes alakja; párhuzamosság és merőlegesség; pont–egyenes távolság; félsíkok, egyenlőtlenség-rendszerek és lineáris programozás.",
    statementLatex: "A(x-x_0)+B(y-y_0)=0,\\quad m_1m_2=-1,\\quad d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}",
    conditionsLatex: "\\vec{n}=(A,B)\\neq\\vec{0}",
    formulaSheetReference: "Hivatalos Képlettár 2026: egyenes",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Koordinátageometria, 9. oldal"
    ],
    introduction: `René Descartes 1637-ben megjelent Géométrie című műve teremtette meg a kapcsolatot az algebra és a geometria között: minden geometriai alakzatot egyenlettel írt le, és viszont.

Ez a koordinátasík ötlete, amely nélkül a modern matematika, a fizika és a számítógépes grafika elképzelhetetlen.

A témakör a szóbelin azért fontos, mert itt találkozik a vektoros szemlélet (normálvektor, irányvektor), az algebra (elsőfokú egyenlet, egyenlőtlenség) és a geometria (párhuzamosság, merőlegesség, távolság).

Az egyenes ötféle alakja közül a vizsgán a normálvektoros és a meredekséges alakot kell biztosan, folyékonyan használni.`,
    detailedTheory: `### 1. Pontok, szakaszok a koordinátasíkon

- **Távolság:** $A(x_1,y_1)$, $B(x_2,y_2)$ esetén
  $$AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.$$

- **Felezőpont:** $F\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)$.

- **Osztópont:** az $AB$ szakaszt $m:n$ arányban osztó $P$ koordinátái
  $$x_P=\\frac{n x_1+m x_2}{m+n},\\qquad y_P=\\frac{n y_1+m y_2}{m+n}.$$

- **Súlypont:** $S\\left(\\frac{x_1+x_2+x_3}{3},\\frac{y_1+y_2+y_3}{3}\\right)$.

- **Kör egyenlete** (előkészítés): $(x-u)^2+(y-v)^2=r^2$.

### 2. Az egyenes öt alakja

- **Normálvektoros:** ha $P_0(x_0,y_0)$ az egyenes pontja és $\\vec{n}=(A,B)$ a normálvektor ($\\vec{n}\\neq\\vec{0}$), akkor
  $$A(x-x_0)+B(y-y_0)=0,\\qquad \\text{azaz } Ax+By-(Ax_0+By_0)=0.$$

- **Irányvektoros:** $\\vec{v}=(v_1,v_2)$ az egyenes iránya; a normálvektor $\\vec{n}=(v_2,-v_1)$ (vagy $(-v_2,v_1)$).

- **Paraméteres:** $P=P_0+t\\vec{v}$, azaz $x=x_0+tv_1$, $y=y_0+tv_2$, $t\\in\\mathbb R$.

- **Meredekséges:** ha az egyenes nem függőleges, $y-y_0=m(x-x_0)$, ahol $m=\\tan\\alpha$ az $x$-tengely pozitív irányával bezárt szög tangense.

- **Tengelymetszetes:** ha az egyenes nem megy át az origón és nem párhuzamos egyik tengellyel sem, $\\frac{x}{a}+\\frac{y}{b}=1$, ahol $a,b$ a tengelymetszetek.

- **Általános alak:** $Ax+By+C=0$, ahol $A,B$ nem mindkettő nulla. Ebből $y=-\\frac{A}{B}x-\\frac{C}{B}$, ha $B\\neq 0$.

- **Speciális esetek:** $x=c$ függőleges egyenes (nincs meredeksége, normálvektora $(1,0)$); $y=c$ vízszintes egyenes ($m=0$).

### 3. Párhuzamosság és merőlegesség

- Két egyenes **párhuzamos**, ha normálvektoraik arányosak: $A_1B_2-A_2B_1=0$; meredekségekkel $m_1=m_2$ (a függőleges esetet külön kell kezelni).
- Két egyenes **merőleges**, ha normálvektoraik merőlegesek: $A_1A_2+B_1B_2=0$; meredekségekkel $m_1m_2=-1$.

- **Egybeesés:** a normálvektorok arányosak **és** a konstans tag is ugyanabban az arányban áll, azaz $\\frac{A_1}{A_2}=\\frac{B_1}{B_2}=\\frac{C_1}{C_2}$.

- **Metszéspont:** a két egyenletből álló lineáris rendszer megoldása. Ha a determináns $A_1B_2-A_2B_1\\neq 0$, egyetlen metszéspont van; ha nulla, az egyenesek párhuzamosak vagy egybeesnek.

### 4. Pont–egyenes távolság

- A $P_0(x_0,y_0)$ pont távolsága az $Ax+By+C=0$ egyenestől
  $$d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}.$$
- A képlet a normálvektorra vetítésből adódik: a számláló a pont eltérése az egyenestől a normálvektor irányában mérve, a nevező a normálvektor hossza.
- Két párhuzamos egyenes távolsága: $\\frac{|C_1-C_2|}{\\sqrt{A^2+B^2}}$ (azonos $A,B$ mellett).

### 5. Elsőfokú egyenlőtlenségek

- Az $Ax+By+C>0$ (vagy $<, \\ge, \\le$) megoldáshalmaza **félsík**, határvonala az $Ax+By+C=0$ egyenes.
- A helyes félsík kiválasztása **tesztponttal** történik: ha az origó nincs a határvonalon, helyettesítsük be; ha rajta van, válasszunk más pontot.
- Az egyenlőtlenség-rendszer megoldása a félsíkok **metszete** (konvex sokszög vagy üres halmaz). A csúcsokat a határvonalak metszéspontjaiként számítjuk.
- Egyenletrendszer **grafikus megoldása**: ábrázoljuk mindkét egyenest; a megoldás a metszéspont (egy megoldás), párhuzamos egyenesek esetén nincs megoldás vagy végtelen sok (egybeesés).

### 6. Lineáris programozás

- Adott egy **célfüggvény** $z=px+qy$ és feltételrendszer (egyenlőtlenségek). A lehetséges megoldások halmaza a **lehetséges tartomány**.

- **Csúcspont-elv:** korlátos, nem üres, konvex poligonon a lineáris célfüggvény szélsőértékét mindig valamelyik csúcsban veszi fel (a szintvonalak párhuzamos egyenesek).
- Eljárás: (1) ábrázoljuk a feltételeket; (2) határozzuk meg a csúcsokat; (3) értékeljük ki a célfüggvényt minden csúcsban; (4) válasszuk a maximumot/minimumot.

- **Nem korlátos** tartományon a szélsőérték nem feltétlenül létezik; **egészértékű** feladatnál a csúcsok mellett a rácspontokat is vizsgálni kell.

### 7. Gyakori alkalmazások

- Két ponton átmenő egyenes; adott ponton átmenő, adott egyenessel párhuzamos/merőleges egyenes.
- Háromszög oldalegyenesei, magasságvonala, oldalfelező merőlegese.
- Távolságok, területek koordinátákkal; poligonális terület a csúcsokból.
- Optimalizálás: termelési mix, szállítás, diéta, nyereségmaximalizálás.`,
    theorems: [
      {
        theoremNumber: 1,
        title: "A normálvektoros egyenesegyenlet",
        statementLatex: "A(x-x_0)+B(y-y_0)=0",
        proofTitle: "A normálvektor merőlegessége",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Merőlegesség",
            latexContent: "P(x,y)\\in e,\\quad P_0(x_0,y_0)\\in e \\ \\overrightarrow{P_0P}=(x-x_0,\\,y-y_0) \\ \\vec{n}\\cdot\\overrightarrow{P_0P}=0 \\implies A(x-x_0)+B(y-y_0)=0",
            explanation: "Cél: belátni, hogy A normálvektoros egyenesegyenlet. Az egyenes tetszőleges $P$ pontját és egy rögzített $P_0$ pontját vesszük. Ez előkészíti a következő lépést (Futópont). Ez a vektor az egyenes irányába mutat, tehát merőleges a normálvektorra. Ez előkészíti a következő lépést (Eltolásvektor). A skaláris szorzat koordinátás alakjából adódik az egyenlet. Megfordítva: a feltételt kielégítő pontok éppen az egyenesen vannak. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "Merőleges egyenesek meredeksége",
        statementLatex: "e\\perp f \\iff m_1m_2=-1",
        proofTitle: "Irányvektorok skaláris szorzata",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Rendezés",
            latexContent: "\\vec{v}_1=(1,m_1),\\quad \\vec{v}_2=(1,m_2) \\ \\vec{v}_1\\cdot\\vec{v}_2=1+m_1m_2=0 \\ m_1m_2=-1",
            explanation: "Cél: belátni, hogy Merőleges egyenesek meredeksége. Nem függőleges egyeneseknél az $x$ irányú egységnyi elmozduláshoz $m$ függőleges elmozdulás tartozik. Két egyenes pontosan akkor merőleges, ha irányvektoraik merőlegesek. Ez előkészíti a következő lépést (Merőlegesség). Innen $m_2=-1/m_1$. Függőleges és vízszintes egyenes esetén a szorzat nem értelmezhető, ott a normálvektorokkal kell dolgozni. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "Pont–egyenes távolság képlete",
        statementLatex: "d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}",
        proofTitle: "Vetítés a normálvektorra",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Egyszerűsítés",
            latexContent: "P_1(x_1,y_1)\\in e \\implies Ax_1+By_1+C=0 \\ \\overrightarrow{P_1P_0}=(x_0-x_1,\\,y_0-y_1) \\ d=\\frac{|\\vec{n}\\cdot\\overrightarrow{P_1P_0}|}{|\\vec{n}|}=\\frac{|A(x_0-x_1)+B(y_0-y_1)|}{\\sqrt{A^2+B^2}} \\ A(x_0-x_1)+B(y_0-y_1)=Ax_0+By_0+C",
            explanation: "Cél: belátni, hogy Pont–egyenes távolság képlete. Válasszunk egy tetszőleges $P_1$ pontot az egyenesen. Ez előkészíti a következő lépést (Egy pont az egyenesen). A keresett távolság ennek a vektornak a normálvektor irányára eső vetületének hossza. Ez előkészíti a következő lépést (Eltolásvektor). A pont és az egyenes távolsága a normálvektorra vetített eltolás hossza. Ez előkészíti a következő lépést (Vetítés). Felhasználtuk, hogy $Ax_1+By_1=-C$. Így megkapjuk a képletet; a számláló abszolút értéke biztosítja a nemnegatív távolságot. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "Két egyenes kölcsönös helyzete",
        statementLatex: "D=A_1B_2-A_2B_1",
        proofTitle: "Determináns és megoldhatóság",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Párhuzamos eset",
            latexContent: "A_1x+B_1y=-C_1,\\quad A_2x+B_2y=-C_2 \\ D=A_1B_2-A_2B_1 \\ D=0:\\quad \\text{nincs megoldás vagy végtelen sok}",
            explanation: "Cél: belátni, hogy Két egyenes kölcsönös helyzete. A két egyenes metszéspontja a két egyenlet közös megoldása. Ez előkészíti a következő lépést (Egyenletrendszer). Ha $D\\neq0$, a rendszer egyértelműen megoldható, tehát egy metszéspont van. Ez előkészíti a következő lépést (Determináns). Ha $D=0$, a normálvektorok arányosak. Ha a konstansok aránya eltér, az egyenesek párhuzamosak (nincs megoldás); ha minden arány egyezik, egybeesnek (végtelen sok megoldás). Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 5,
        title: "A lineáris programozás csúcspont-elve",
        statementLatex: "\\max_{P\\in K}(px+qy)=\\max_{P\\text{ csúcs}}(px+qy)",
        proofTitle: "Szintvonalak és konvexitás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Csúcs vagy él",
            latexContent: "px+qy=c \\ K=\\bigcap \\text{félsíkok} \\ \\text{szélsőérték csúcsban vagy él mentén}",
            explanation: "Cél: belátni, hogy A lineáris programozás csúcspont-elve. A célfüggvény azonos értékeit párhuzamos egyenesek alkotják; a célfüggvény ezekre merőleges irányban nő vagy csökken. Félsíkok metszete konvex; a maximumot a szintvonal addig tolja, amíg el nem éri a tartomány határát. Ha a szintvonal egy éllel párhuzamos, az él minden pontja optimális; ekkor is elegendő a két végcsúcsot kiszámítani. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      }
    ],
    applicationsInside: [
      "Két ponton átmenő egyenes felírása, párhuzamos és merőleges egyenes szerkesztése.",
      "Háromszög magasságvonala, oldalfelező merőlegese koordinátákkal.",
      "Pont–egyenes távolság, párhuzamos egyenesek távolsága.",
      "Félsíkok metszete, lineáris optimalizálás."
    ],
    applicationsOutside: [
      "Termelési terv: nyereségmaximalizálás kapacitáskorlátok mellett.",
      "Szállítási és logisztikai feladatok, költségminimalizálás.",
      "Számítógépes grafika: félsíkokkal való vágás (clipping).",
      "Navigáció és térinformatika: irányok, távolságok, régiók."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Írd fel a $P(14,2)$ ponton átmenő, a $3x+2y=7$ egyenesre merőleges egyenes egyenletét!",
        solutionLatex: "\\vec{n}_e=(3,2)\\implies \\vec{v}_f=(3,2)\\implies \\vec{n}_f=(-2,3);\\quad -2(x-14)+3(y-2)=0 \\implies 2x-3y=22.",
        explanation: "A merőleges egyenes normálvektora az eredeti egyenes irányvektora. Ellenőrzés: $P$ kielégíti az egyenletet ($28-6=22$), és a két normálvektor skaláris szorzata $3\\cdot2+2\\cdot(-3)=0$."
      },
      {
        problemNumber: 2,
        question: "Mekkora a $P(1,1)$ pont távolsága az $x-2y+4=0$ egyenestől?",
        solutionLatex: "d=\\frac{|1-2+4|}{\\sqrt{1^2+(-2)^2}}=\\frac{3}{\\sqrt5}=\\frac{3\\sqrt5}{5}\\approx1{,}34.",
        explanation: "A pont–egyenes távolság képletébe helyettesítünk. A nevező a normálvektor hossza: $\\sqrt{1+4}=\\sqrt5$."
      },
      {
        problemNumber: 3,
        question: "Adott $A(0,0)$ és $B(4,2)$. Határozd meg a felezőpontot és a szakasz hosszát!",
        solutionLatex: "F(2,1),\\qquad |AB|=\\sqrt{4^2+2^2}=\\sqrt{20}=2\\sqrt5.",
        explanation: "A felezőpont a koordináták átlaga, a hossz a Pitagorasz-tételből adódik."
      },
      {
        problemNumber: 4,
        question: "Határozd meg a $2x+y=5$ és $x-3y=-1$ egyenesek metszéspontját!",
        solutionLatex: "y=5-2x \\implies x-3(5-2x)=-1 \\implies 7x=14 \\implies x=2,\\ y=1;\\quad M(2,1).",
        explanation: "Behelyettesítéses megoldás. Ellenőrzés: $4+1=5$ és $2-3=-1$. A determináns $2\\cdot(-3)-1\\cdot1=-7\\neq0$, tehát egyetlen metszéspont van."
      },
      {
        problemNumber: 5,
        question: "Maximalizáld a $z=3x+2y$ célfüggvényt az $x\\ge0$, $y\\ge0$, $x+y\\le4$, $2x+y\\le6$ feltételek mellett!",
        solutionLatex: "\\text{Csúcsok: }(0,0),(3,0),(2,2),(0,4);\\quad z=0,\\ 9,\\ 10,\\ 8 \\implies z_{\\max}=10 \\text{ a } (2,2)\\text{-ben}.",
        explanation: "A két feltételi egyenes metszéspontja $x+y=4$ és $2x+y=6$ megoldásából $(2,2)$. A csúcspont-elv szerint elég a csúcsokat végigszámolni; a maximum $3\\cdot2+2\\cdot2=10$."
      }
    ],
    oralPresentationOutline: [
      'Szakasz, egyenes, félegyenes a koordinátasíkon',
      'Irányvektor, normálvektor; meredekség',
      'Párhuzamos egyenesek: irányvektorok arányosak',
      'Merőleges egyenesek: skaláris szorzat 0 / m₁m₂=−1',
      'Két egyenes metszéspontja; egyenletrendszer',
      'Pont–egyenes távolság képlete',
      'Szóbeli: párhuzamosság + merőlegesség + távolság'
    ],
    requiredDefinitions: [
      {
        term: "Normálvektor és irányvektor",
        definitionLatex: "\\vec{n}\\perp e,\\qquad \\vec{v}\\parallel e",
        explanation: "A normálvektor merőleges az egyenesre, az irányvektor párhuzamos vele; egymásból 90°-os forgatással kaphatók."
      },
      {
        term: "Meredekség",
        definitionLatex: "m=\\tan\\alpha",
        explanation: "Az egyenes és az $x$-tengely pozitív iránya által bezárt szög tangense; függőleges egyenesnek nincs meredeksége."
      },
      {
        term: "Pont–egyenes távolság",
        definitionLatex: "d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}",
        explanation: "A pontból az egyenesre bocsátott merőleges szakasz hossza."
      },
      {
        term: "Félsík",
        definitionLatex: "Ax+By+C>0",
        explanation: "Egy egyenes által határolt síkrész; az egyenlőtlenség-rendszer megoldása félsíkok metszete."
      }
    ],
    examinerTraps: [
      {
        question: "Mely egyenesnek nincs meredeksége?",
        answer: "A függőleges $x=c$ alakú egyeneseknek; ezeknél a meredekség nem értelmezhető, csak normálvektorral vagy paraméteresen írhatók fel.",
        dangerLevel: "Közepes"
      },
      {
        question: "Az $m_1m_2=-1$ feltétel minden merőleges egyenespárra érvényes?",
        answer: "Nem, csak ha egyik egyenes sem függőleges. Függőleges–vízszintes párnál a szorzat nem értelmezhető; ilyenkor a normálvektorok merőlegességét kell használni.",
        dangerLevel: "Magas"
      },
      {
        question: "A pont–egyenes távolság képletében miért kell abszolút érték?",
        answer: "Mert a behelyettesítés előjeles értéket ad: a pozitív/negatív előjel azt mutatja, melyik félsíkban van a pont. A távolság viszont nemnegatív.",
        dangerLevel: "Közepes"
      },
      {
        question: "Lineáris programozásnál mindig elég a csúcsokat kiszámolni?",
        answer: "Korlátos, nem üres, konvex tartományon igen. Nem korlátos tartományon a szélsőérték nem feltétlenül létezik, egészértékű feladatnál pedig a rácspontokat is vizsgálni kell.",
        dangerLevel: "Magas"
      }
    ],
    applications: [
      {
        title: "Merőleges egyenes",
        problem: "$P(14,2)$-n átmenő, $3x+2y=7$-re merőleges egyenes?",
        solutionLatex: "2x-3y=22"
      },
      {
        title: "Lineáris programozás",
        problem: "$z=3x+2y$ maximuma az $x+y\\le4$, $2x+y\\le6$, $x,y\\ge0$ tartományon?",
        solutionLatex: "z_{\\max}=10 \\text{ a } (2,2)\\text{-ben}"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Szakasz, egyenes, egyenlőtlenségek."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Normálvektor, meredekség."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "Normálvektoros egyenlet vagy távolságképlet."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Egyenes, távolság, LP."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Descartes, optimalizálás."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Koordinátageometria."
      }
    ],
    historicalContext: "René Descartes (1596–1650): analitikus geometria; a koordinátasík és az egyenletek kapcsolata.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 19. Tétel (124–128. oldal): Mutasd a normál ↔ irány váltást!",
    memorizationMaterial: `## Bemagolandó — Szakaszok és egyenesek a koordinátasíkon. Párhuzamos és merőleges egyenesek. Elsőfokú egyenlőtlenségek, egyenletrendszerek grafikus megoldása

### Fő állítás / képletek

$A(x-x_0)+B(y-y_0)=0,\\quad m_1m_2=-1,\\quad d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$

### Definíciók

**Normálvektor és irányvektor:** $\\vec{n}\\perp e,\\qquad \\vec{v}\\parallel e$

A normálvektor merőleges az egyenesre, az irányvektor párhuzamos vele; egymásból 90°-os forgatással kaphatók.

**Meredekség:** $m=\\tan\\alpha$

Az egyenes és az $x$-tengely pozitív iránya által bezárt szög tangense; függőleges egyenesnek nincs meredeksége.

**Pont–egyenes távolság:** $d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}$

A pontból az egyenesre bocsátott merőleges szakasz hossza.

**Félsík:** $Ax+By+C>0$

Egy egyenes által határolt síkrész; az egyenlőtlenség-rendszer megoldása félsíkok metszete.

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**A normálvektoros egyenesegyenlet**

$A(x-x_0)+B(y-y_0)=0$

*Bizonyítás iránya:* A normálvektor merőlegessége

**Merőleges egyenesek meredeksége**

$e\\perp f \\iff m_1m_2=-1$

*Bizonyítás iránya:* Irányvektorok skaláris szorzata

**Pont–egyenes távolság képlete**

$d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}$

*Bizonyítás iránya:* Vetítés a normálvektorra

**Két egyenes kölcsönös helyzete**

$D=A_1B_2-A_2B_1$

*Bizonyítás iránya:* Determináns és megoldhatóság

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — Szakaszok és egyenesek a koordinátasíkon. Párhuzamos és merőleges egyenesek. Elsőfokú egyenlőtlenségek, egyenletrendszerek grafikus megoldása (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Szakasz, egyenes, félegyenes a koordinátasíkon
2. Irányvektor, normálvektor; meredekség
3. Párhuzamos egyenesek: irányvektorok arányosak
4. Merőleges egyenesek: skaláris szorzat 0 / m₁m₂=−1
5. Két egyenes metszéspontja; egyenletrendszer
6. Pont–egyenes távolság képlete
7. Szóbeli: párhuzamosság + merőlegesség + távolság

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **A normálvektoros egyenesegyenlet** (A normálvektor merőlegessége).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,

    visualizerType: 'vector'
  },
  {
    id: "tétel-20",
    number: 20,
    title: "A kör és a parabola elemi úton és a koordinátasíkon. Kör és egyenes, parabola és egyenes kölcsönös helyzete. Másodfokú egyenlőtlenségek grafikus megoldása",
    category: "Koordinátageometria és vektorok",
    tags: [
      "Kör",
      "Parabola",
      "Fókusz",
      "Vezéregyenes",
      "Diszkrimináns",
      "Érintő",
      "Másodfokú egyenlőtlenség"
    ],
    difficulty: "3: trückös",
    summary: "A kör egyenlete és általános alakja; kör és egyenes kölcsönös helyzete a középpont–egyenes távolsággal és diszkriminánssal; a parabola fókusz–vezéregyenes definíciója, egyenlete, érintője; parabola és egyenes helyzete; másodfokú egyenlőtlenségek grafikus és algebrai megoldása.",
    statementLatex: "(x-u)^2+(y-v)^2=r^2,\\quad x^2=2py,\\quad D=0 \\text{ érintő}",
    conditionsLatex: "r>0,\\quad p>0",
    formulaSheetReference: "Hivatalos Képlettár 2026: kör, parabola",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Koordinátageometria, 10. oldal"
    ],
    introduction: `A kör és a parabola a kúpszeletek családjába tartozik: egy végtelen kúp és egy sík metszésével keletkeznek.

Pergai Apollóniosz (Kr. e. 3. század) írta le rendszerezetten őket, és tőle származnak a „parabola”, „ellipszis”, „hiperbola” nevek.

A parabola gyújtóponti tulajdonsága évszázadokkal később vált technikailag hasznossá: a tengellyel párhuzamosan érkező fénysugarak a fókuszba verődnek, ezért használják parabolaantennákban, tükrös távcsövekben és fényszórókban.

A témakör második fele a másodfokú egyenlőtlenségek grafikus megoldása, amely szorosan kapcsolódik a parabola előjeléhez.

A szóbelin gyakori csapda, hogy a parabolát összekeverik a függvénnyel: az $y=x^2$ és az $x^2=2py$ ugyanaz az alak, de a tengely állása és a paraméter jelentése eltér.`,
    detailedTheory: `### 1. A kör

- **Definíció:** a $C(u,v)$ középponttól $r>0$ távolságra levő pontok halmaza.

- **Egyenlet:** a távolságképletből
  $$(x-u)^2+(y-v)^2=r^2.$$

- **Általános alak:** $x^2+y^2+Dx+Ey+F=0$. Teljes négyzetté alakítva:
  $$\\left(x+\\frac D2\\right)^2+\\left(y+\\frac E2\\right)^2=\\frac{D^2+E^2}{4}-F,$$
  így a középpont $\\left(-\\frac D2,-\\frac E2\\right)$, a sugár $r=\\sqrt{\\frac{D^2+E^2}{4}-F}$. Valódi körhöz $r^2>0$ kell; $r^2=0$ egy pont, $r^2<0$ üres halmaz.

- **Pont és kör helyzete:** a $P(x_0,y_0)$ pontra $(x_0-u)^2+(y_0-v)^2$ értéke $r^2$-hez képest: kisebb → belső pont, egyenlő → a körön van, nagyobb → külső pont.

- **Érintő a kör adott pontjában:** ha $P_0(x_0,y_0)$ a körön van, az érintő egyenlete
  $$(x_0-u)(x-u)+(y_0-v)(y-v)=r^2.$$
  Ez a sugárra merőleges normálvektoros egyenes.

### 2. Kör és egyenes kölcsönös helyzete

- **Geometriai út:** számítsuk ki a kör középpontjának távolságát $d$-t az egyenestől.
  - $d<r$: **szelő**, két metszéspont;
  - $d=r$: **érintő**, egy metszéspont;
  - $d>r$: nincs közös pont.

- **Algebrai út:** az egyenes egyenletét behelyettesítjük a kör egyenletébe; a kapott másodfokú egyenlet diszkriminánsa:
  - $D>0$: két valós gyök (szelő);
  - $D=0$: egy gyök (érintő);
  - $D<0$: nincs valós gyök.

- **Érintési feltétel:** a behelyettesített másodfokú egyenlet diszkriminánsa nulla; ez az érintő meredekségére vagy paraméterére ad egyenletet.
- A két út ekvivalens, de a geometriai gyorsabb, ha a középpont és a sugár kényelmesen leolvasható.

### 3. A parabola

- **Definíció:** a sík azon pontjainak halmaza, amelyek egy adott $F$ ponttól (fókusz) és egy adott $v$ egyenestől (vezéregyenes) egyenlő távolságra vannak: $d(Q,F)=d(Q,v)$.

- **Tengelyponti alak (függőleges tengely):** $x^2=2py$, ahol $p>0$ a fókusz–vezéregyenes távolság. Ekkor:
  - fókusz $F\\left(0,\\frac p2\\right)$,
  - vezéregyenes $y=-\\frac p2$,
  - tengelypont az origó, tengely az $y$-tengely.

- **Vízszintes tengely:** $y^2=2px$, fókusz $F\\left(\\frac p2,0\\right)$, vezéregyenes $x=-\\frac p2$.

- **Eltolt parabola:** $(x-u)^2=2p(y-v)$ tengelypontja $(u,v)$, fókusza $\\left(u,v+\\frac p2\\right)$.

- **Fő paraméter:** a $p$ érték kétszerese a fókusz és a tengelypont távolsága. Minél nagyobb $p$, annál „szélesebb” a parabola.

- **Fénytani tulajdonság:** a tengellyel párhuzamos sugarak visszaverődés után a fókuszon mennek át; ezért parabolaantennák, fényszórók, tükrös távcsövek.
- A parabola a kúpszelet család tagja: a kúp alkotójával párhuzamos síkmetszet.

### 4. Parabola és egyenes kölcsönös helyzete

- Az egyenes egyenletét behelyettesítjük a parabola egyenletébe; a kapott másodfokú egyenlet diszkriminánsa dönt:
  - $D>0$: két metszéspont (szelő);
  - $D=0$: érintő;
  - $D<0$: nincs közös pont.

- **Fontos csapda:** ha az egyenes a parabola **tengelyével párhuzamos** (pl. $x=c$ a $y^2=2px$ esetén), akkor az egyenlet **elsőfokú**, és egyetlen metszéspont adódik — ez azonban **nem érintő**, hanem a tengellyel párhuzamos szelő. Érintő csak akkor, ha az egyenes nem párhuzamos a tengellyel, és a behelyettesítés után $D=0$.

- **Érintő a parabola adott pontjában:** az $y^2=2px$ parabola $P_0(x_0,y_0)$ pontjában az érintő
  $$y\\,y_0=p(x+x_0).$$
  Ez a képlet a $D=0$ feltételből vezethető le, és a kör érintőképletének analogonja.

### 5. Másodfokú egyenlőtlenségek

- Az $ax^2+bx+c>0$ (illetve $<,\\ge,\\le$) megoldása a $f(x)=ax^2+bx+c$ függvény előjelvizsgálata.

- **Grafikus módszer:**
  1. Határozzuk meg a zérushelyeket ($D$ és a megoldóképlet).
  2. Vázoljuk a parabolát: $a>0$ esetén felfelé, $a<0$ esetén lefelé nyitott.
  3. Olvassuk le, hol van a grafikon az $x$-tengely felett ($f>0$) vagy alatt ($f<0$).

- **Algebrai módszer:** ha $x_1<x_2$ a gyökök, akkor $f(x)=a(x-x_1)(x-x_2)$; az előjel-táblázatból a megoldás:
  - $a>0$ és $f(x)<0$: $x\\in(x_1,x_2)$ (a gyökök között);
  - $a>0$ és $f(x)>0$: $x\\in(-\\infty,x_1)\\cup(x_2,\\infty)$ (a gyökökön kívül);
  - $a<0$ esetén fordítva.

- **Diszkrimináns esetek:** $D<0$ és $a>0$ → $f(x)>0$ minden valós $x$-re; $D=0$ → a gyöknél érinti az $x$-tengelyt, ott az érték nulla.

- **Rendszerek:** több egyenlőtlenség megoldáshalmaza a megoldáshalmazok metszete; ábrázolással ellenőrizhető.

- **Nevezetes alkalmazás:** másodfokú függvény szélsőértéke, paraméteres egyenlőtlenség, törtes egyenlőtlenség előjelvizsgálata.

### 6. Kitekintés: a kúpszeletek családja

- **Ellipszis:** $d(Q,F_1)+d(Q,F_2)=2a$; kanonikus alak $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1$.

- **Hiperbola:** $|d(Q,F_1)-d(Q,F_2)|=2a$; kanonikus alak $\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1$.
- A kör az ellipszis speciális esete ($a=b$); a parabola a „határeset”, amikor az egyik fókusz a végtelenbe kerül.`,
    theorems: [
      {
        theoremNumber: 1,
        title: "A kör egyenlete",
        statementLatex: "(x-u)^2+(y-v)^2=r^2",
        proofTitle: "A távolság definíciójából",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Négyzetre emelés",
            latexContent: "d(P,C)=r \\ \\sqrt{(x-u)^2+(y-v)^2}=r \\ (x-u)^2+(y-v)^2=r^2",
            explanation: "Cél: belátni, hogy A kör egyenlete. A kör minden $P(x,y)$ pontja $r$ távolságra van a $C(u,v)$ középponttól. A definíció szerinti átírás után a műveletek ismert azonosságait alkalmazzuk. A két pont távolságát koordinátákkal írjuk fel. Ez előkészíti a következő lépést (Távolságképlet). Mindkét oldal nemnegatív, ezért az átalakítás ekvivalens; a kör egyenletét kapjuk. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "A parabola egyenlete",
        statementLatex: "x^2=2py",
        proofTitle: "A fókusz–vezéregyenes definícióból",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Rendezés",
            latexContent: "F\\left(0,\\frac p2\\right),\\qquad v:\\ y=-\\frac p2 \\ d(Q,F)=\\sqrt{x^2+\\left(y-\\frac p2\\right)^2},\\qquad d(Q,v)=y+\\frac p2 \\ x^2+\\left(y-\\frac p2\\right)^2=\\left(y+\\frac p2\\right)^2 \\ x^2=2py",
            explanation: "Cél: belátni, hogy A parabola egyenlete. A tengelypontot az origóba tesszük, a tengelyt függőlegesnek választjuk; a fókusz és a vezéregyenes távolsága $p$. A $Q(x,y)$ pont fókusztól mért távolsága a távolságképlet, a vezéregyenestől mért távolság a függőleges irányú eltérés. A parabola definíciója szerint a két távolság egyenlő; mindkét oldalt négyzetre emeljük. A definíció szerinti átírás után a műveletek ismert azonosságait alkalmazzuk. A $y^2$ tagok kiesnek: $x^2+y^2-py+\\frac{p^2}{4}=y^2+py+\\frac{p^2}{4}$, ahonnan $x^2=2py$. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "Kör és egyenes kölcsönös helyzete",
        statementLatex: "d<r \\text{ szelő},\\quad d=r \\text{ érintő},\\quad d>r \\text{ nincs metszés}",
        proofTitle: "A középpont–egyenes távolság és a sugár összehasonlítása",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Esetek",
            latexContent: "T=\\text{a } C \\text{ vetülete az } e \\text{ egyenesre} \\ CP^2=d^2+TP^2 \\ d<r \\iff TP>0,\\quad d=r \\iff TP=0,\\quad d>r \\iff \\text{nincs valós } TP",
            explanation: "Cél: belátni, hogy Kör és egyenes kölcsönös helyzete. A $C$ középpontból az egyenesre bocsátott merőleges talppontja $T$; ekkor $CT=d$. Ez előkészíti a következő lépést (Merőleges vetület). Ha $P$ az egyenes és a kör közös pontja, akkor $CP=r$, és a Pitagorasz-tétel adja a $TP$ hosszt. A $TP^2=r^2-d^2$ kifejezés előjele dönt: két megoldás, egy megoldás vagy nulla megoldás. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "Másodfokú egyenlőtlenség megoldása",
        statementLatex: "a(x-x_1)(x-x_2)\\gtrless 0",
        proofTitle: "Előjeltáblázat és grafikon",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Megoldáshalmaz",
            latexContent: "f(x)=a(x-x_1)(x-x_2) \\ x<x_1:\\ (-)(-)=+,\\quad x_1<x<x_2:\\ (+)(-)=-,\\quad x>x_2:\\ (+)(+)=+ \\ f(x)<0 \\iff x\\in(x_1,x_2)",
            explanation: "Cél: belátni, hogy Másodfokú egyenlőtlenség megoldása. Ha $D>0$, a másodfokú polinom két valós gyökkel rendelkezik, és gyöktényezős alakba írható. $a>0$ esetén a szorzat előjele a gyökök között negatív, azokon kívül pozitív. A grafikon felfelé nyitott parabola, amely a gyökök között az $x$-tengely alatt fut. A relációs jel irányától függően a belső intervallum vagy annak komplementere a megoldás; $a<0$ esetén minden előjel megfordul. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      },
      {
        theoremNumber: 5,
        title: "A parabola érintője adott pontban",
        statementLatex: "y\\,y_0=p(x+x_0)",
        proofTitle: "A diszkrimináns nulla feltételből",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Átrendezés",
            latexContent: "y-y_0=m(x-x_0) \\ \\left(y_0+m(x-x_0)\\right)^2=2px \\ D=0 \\implies m=\\frac{p}{y_0} \\ y\\,y_0=p(x+x_0)",
            explanation: "Cél: belátni, hogy A parabola érintője adott pontban. A $P_0(x_0,y_0)$ a parabolán van, tehát $y_0^2=2px_0$; az érintő meredekségét $m$ jelöli. Ez előkészíti a következő lépést (Egyenes a ponton át). Az egyenes egyenletét a parabola egyenletébe írjuk; ez $x$-ben másodfokú egyenlet. Ez előkészíti a következő lépést (Behelyettesítés). Érintés esetén a másodfokú egyenletnek egyetlen (kettős) gyöke van, amiből $m=p/y_0$ adódik. Az $m=p/y_0$ behelyettesítésével és $y_0^2=2px_0$ felhasználásával kapjuk az érintő egyenletét. Összefoglalva: a levezetés végén megkapjuk a tétel állítását."
          }
        ]
      }
    ],
    applicationsInside: [
      "Kör középpontjának és sugarának meghatározása általános egyenletből.",
      "Kör és egyenes metszéspontjai, érintő felírása.",
      "Parabola fókuszának, vezéregyenesének meghatározása.",
      "Másodfokú egyenlőtlenségek és paraméteres feladatok megoldása."
    ],
    applicationsOutside: [
      "Parabolaantenna és műholdvevő: a fókuszban gyűjtött jel.",
      "Fényszóró, tükrös távcső, napkollektor.",
      "Hajítás pályája (ferde hajítás parabolaív).",
      "Számítógépes grafika: körök, ívek, érintők, görbék közelítése."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Határozd meg az $y=x^2$ parabola és az $x^2+(y-2)^2=4$ kör közös pontjait!",
        solutionLatex: "x^2=u:\\quad u+(u-2)^2=4 \\implies u^2-3u=0 \\implies u=0 \\text{ vagy } u=3;\\quad (0,0),(\\sqrt3,3),(-\\sqrt3,3).",
        explanation: "A parabola egyenletét behelyettesítjük a körébe. $u=0$ az origót adja, $u=3$ esetén $x=\\pm\\sqrt3$ és $y=3$. Ellenőrzés: $(\\sqrt3)^2+(3-2)^2=3+1=4$."
      },
      {
        problemNumber: 2,
        question: "Hány közös pontja van az $y=x^2$ parabolának és az $x^2+(y-1)^2=1$ körnek?",
        solutionLatex: "u+(u-1)^2=1 \\implies u^2-u=0 \\implies u=0 \\text{ vagy } u=1;\\quad (0,0),(1,1),(-1,1).",
        explanation: "Három közös pont adódik. A kör az origóban érinti a parabolát, a másik két pontban metszi; az egyik metszéspont érintkezés, ezért nem szabad a diszkriminánsra hagyatkozni, ha a behelyettesítés nem másodfokú."
      },
      {
        problemNumber: 3,
        question: "Oldd meg az $x^2-5x+6<0$ egyenlőtlenséget!",
        solutionLatex: "x^2-5x+6=(x-2)(x-3)<0 \\implies x\\in(2,3).",
        explanation: "A felfelé nyitott parabola a gyökök, $2$ és $3$ között van az $x$-tengely alatt. A végpontok nem tartoznak bele, mert szigorú az egyenlőtlenség."
      },
      {
        problemNumber: 4,
        question: "Határozd meg az $x^2+y^2-4x+6y-3=0$ kör középpontját és sugarát!",
        solutionLatex: "(x-2)^2-4+(y+3)^2-9-3=0 \\implies (x-2)^2+(y+3)^2=16;\\quad C(2,-3),\\ r=4.",
        explanation: "Teljes négyzetté alakítás: a középpont koordinátái az $x$ és $y$ lineáris tagjából, a sugár a jobb oldal négyzetgyöke."
      },
      {
        problemNumber: 5,
        question: "Add meg az $y^2=8x$ parabola fókuszát és vezéregyenesét!",
        solutionLatex: "2p=8 \\implies p=4;\\quad F(2,0),\\quad v:\\ x=-2.",
        explanation: "A vízszintes tengelyű $y^2=2px$ alakban $2p=8$, tehát $p=4$. A fókusz a tengely pozitív felén $p/2=2$ távolságra van, a vezéregyenes ennek tükörképe."
      },
      {
        problemNumber: 6,
        question: "Írd fel az $x^2+y^2=25$ kör azon érintőit, amelyek párhuzamosak az $y=2x$ egyenessel!",
        solutionLatex: "y=2x+b;\\quad \\frac{|b|}{\\sqrt5}=5 \\implies b=\\pm5\\sqrt5;\\quad y=2x\\pm5\\sqrt5.",
        explanation: "Az érintő egyenlete $y=2x+b$. Az érintés feltétele, hogy az origó távolsága az egyenestől egyenlő legyen a sugárral: $|b|/\\sqrt5=5$."
      }
    ],
    oralPresentationOutline: [
      'Kör elemi def. (mértani hely) és egyenlet (x−u)²+(y−v)²=r²',
      'Parabola elemi def. (fókusz–vezérvonal) és y=ax²+bx+c / (x−u)²=4p(y−v)',
      'Kör és egyenes kölcsönös helyzete: D=r²−d²',
      'Parabola és egyenes: érintő vs. szelő (diszkrimináns)',
      'Érintő merőleges a sugárra (kör)',
      'Grafikus egyenlőtlenségek (kör belseje / külseje)',
      'Szóbeli: mindkét mértani hely + egy kölcsönös helyzet'
    ],
    requiredDefinitions: [
      {
        term: "Kör",
        definitionLatex: "(x-u)^2+(y-v)^2=r^2",
        explanation: "$C(u,v)$ középpont, $r>0$ sugár; a középponttól $r$ távolságra levő pontok halmaza."
      },
      {
        term: "Parabola",
        definitionLatex: "d(Q,F)=d(Q,v)",
        explanation: "Azon pontok halmaza, amelyek a fókusztól és a vezéregyenestől egyenlő távolságra vannak."
      },
      {
        term: "Kör és egyenes helyzete",
        definitionLatex: "d<r:\\ \\text{szelő},\\quad d=r:\\ \\text{érintő},\\quad d>r:\\ \\text{nincs metszés}",
        explanation: "A középpont–egyenes távolság és a sugár viszonya; algebrailag a behelyettesítés utáni diszkrimináns jele."
      },
      {
        term: "Érintő",
        definitionLatex: "D=0",
        explanation: "Olyan egyenes, amelynek pontosan egy közös pontja van a görbével; a behelyettesítés utáni másodfokú egyenlet diszkriminánsa nulla."
      }
    ],
    examinerTraps: [
      {
        question: "Egy közös pont a parabolával mindig érintőt jelent?",
        answer: "Nem. Ha az egyenes a parabola tengelyével párhuzamos, egyetlen metszéspont van, de az egyenes szelő, nem érintő. Érintéshez a behelyettesítés után $D=0$ kell, ami csak nem tengelypárhuzamos egyenesre értelmezhető másodfokú egyenletet ad.",
        dangerLevel: "Magas"
      },
      {
        question: "Mi a vezéregyenes szerepe?",
        answer: "A parabola definíciójában a fókusztól és a vezéregyenestől mért távolság egyenlősége határozza meg a görbét. Az $x^2=2py$ alaknál a vezéregyenes $y=-p/2$, a fókusz $F(0,p/2)$.",
        dangerLevel: "Közepes"
      },
      {
        question: "Az $x^2+y^2+Dx+Ey+F=0$ egyenlet mindig kört ír le?",
        answer: "Nem. Teljes négyzetté alakítás után a jobb oldal $\\frac{D^2+E^2}{4}-F$ lehet nulla (egy pont) vagy negatív (üres halmaz); valódi kör csak pozitív értéknél van.",
        dangerLevel: "Magas"
      },
      {
        question: "Másodfokú egyenlőtlenségnél elég a gyököket kiszámolni?",
        answer: "Nem, a parabola nyitási iránya és a relációs jel is kell. $a>0$ esetén a gyökök között negatív, azokon kívül pozitív az érték; $a<0$ esetén ez fordítva van.",
        dangerLevel: "Közepes"
      }
    ],
    applications: [
      {
        title: "Parabola és kör",
        problem: "$y=x^2$ és $x^2+(y-1)^2=1$ közös pontjai?",
        solutionLatex: "3 \\text{ metszéspont: } (0,0),(1,1),(-1,1)"
      },
      {
        title: "Kör érintője",
        problem: "$x^2+y^2=25$ kör $y=2x$-sel párhuzamos érintői?",
        solutionLatex: "y=2x\\pm5\\sqrt5"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Kör, parabola, kölcsönös helyzet, egyenlőtlenség."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Kör, parabola, érintő."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "Kör- vagy parabolaegyenlet levezetése."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Metszéspont, érintő, egyenlőtlenség."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Antenna, Apollóniosz."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Analitikus geometria."
      }
    ],
    historicalContext: "Pergai Apollóniosz: kúpszeletek; a parabola fókusz–vezéregyenes tulajdonsága és fénytani alkalmazásai.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 20. Tétel (129–135. oldal): Említsd a gyújtóponti tulajdonságot, és hangsúlyozd: parabola + tengellyel párhuzamos egyenes esetén 1 pont ≠ érintő!",
    memorizationMaterial: `## Bemagolandó — A kör és a parabola elemi úton és a koordinátasíkon. Kör és egyenes, parabola és egyenes kölcsönös helyzete. Másodfokú egyenlőtlenségek grafikus megoldása

### Fő állítás / képletek

$(x-u)^2+(y-v)^2=r^2,\\quad x^2=2py,\\quad D=0 \\text{ érintő}$

### Definíciók

**Kör:** $(x-u)^2+(y-v)^2=r^2$

$C(u,v)$ középpont, $r>0$ sugár; a középponttól $r$ távolságra levő pontok halmaza.

**Parabola:** $d(Q,F)=d(Q,v)$

Azon pontok halmaza, amelyek a fókusztól és a vezéregyenestől egyenlő távolságra vannak.

**Kör és egyenes helyzete:** $d<r:\\ \\text{szelő},\\quad d=r:\\ \\text{érintő},\\quad d>r:\\ \\text{nincs metszés}$

A középpont–egyenes távolság és a sugár viszonya; algebrailag a behelyettesítés utáni diszkrimináns jele.

**Érintő:** $D=0$

Olyan egyenes, amelynek pontosan egy közös pontja van a görbével; a behelyettesítés utáni másodfokú egyenlet diszkriminánsa nulla.

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**A kör egyenlete**

$(x-u)^2+(y-v)^2=r^2$

*Bizonyítás iránya:* A távolság definíciójából

**A parabola egyenlete**

$x^2=2py$

*Bizonyítás iránya:* A fókusz–vezéregyenes definícióból

**Kör és egyenes kölcsönös helyzete**

$d<r \\text{ szelő},\\quad d=r \\text{ érintő},\\quad d>r \\text{ nincs metszés}$

*Bizonyítás iránya:* A középpont–egyenes távolság és a sugár összehasonlítása

**Másodfokú egyenlőtlenség megoldása**

$a(x-x_1)(x-x_2)\\gtrless 0$

*Bizonyítás iránya:* Előjeltáblázat és grafikon

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — A kör és a parabola elemi úton és a koordinátasíkon. Kör és egyenes, parabola és egyenes kölcsönös helyzete. Másodfokú egyenlőtlenségek grafikus megoldása (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Kör elemi def. (mértani hely) és egyenlet (x−u)²+(y−v)²=r²
2. Parabola elemi def. (fókusz–vezérvonal) és y=ax²+bx+c / (x−u)²=4p(y−v)
3. Kör és egyenes kölcsönös helyzete: D=r²−d²
4. Parabola és egyenes: érintő vs. szelő (diszkrimináns)
5. Érintő merőleges a sugárra (kör)
6. Grafikus egyenlőtlenségek (kör belseje / külseje)
7. Szóbeli: mindkét mértani hely + egy kölcsönös helyzet

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **A kör egyenlete** (A távolság definíciójából).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,

    visualizerType: 'conic'
  }
];
