import { Tetel } from '../../types/math';

export const TETELEK_11_15: Tetel[] = [
  {
    id: 'tétel-11',
    number: 11,
    title: 'A differenciálhányados fogalma, deriválási szabályok. A differenciálszámítás alkalmazásai (érintő, függvényvizsgálat, szélsőértékfeladatok)',
    category: 'Függvények és analízis',
    tags: ['Derivált', 'Érintő', 'Függvényvizsgálat', 'Szélsőérték', 'Láncszabály', 'Fermat-tétel'],
    difficulty: '3: trückös',
    summary: 'Differenciahányados (szelő meredeksége) és derivált (érintő meredeksége). Alapderiváltak, összeg-, szorzat-, hányados- és láncszabály. Monotonitás, lokális szélsőérték, konvexitás, inflexió és optimalizálás.',
    statementLatex: "f'(x_0)=\\lim_{h\\to0}\\frac{f(x_0+h)-f(x_0)}{h}, \\quad y-f(x_0)=f'(x_0)(x-x_0)",
    conditionsLatex: 'f \\text{ differenciálható } x_0 \\text{-ban}',
    formulaSheetReference: 'Hivatalos Képlettár 2026: Differenciálszámítás (alapderiváltak, szabályok)',
    introduction: `Isaac Newton és Gottfried Wilhelm Leibniz a 17. század végén egymástól függetlenül dolgozta ki a differenciálszámítást: Newton a mozgás pillanatnyi sebességének, Leibniz a görbék érintőinek vizsgálatára.

A ma használt $dy/dx$ jelölés Leibniztől származik.

A derivált geometriai jelentése az érintő meredeksége, fizikában pedig a pillanatnyi változási sebesség.`,
    detailedTheory: `### 1. Differenciahányados és derivált

A függvény grafikonjának két pontját összekötő **szelő** meredeksége a **differenciahányados**:

$$\\frac{f(x_0+h)-f(x_0)}{h}\\qquad (h\\neq 0).$$

Ha ennek létezik véges határértéke $h\\to 0$ esetén, akkor $f$ **differenciálható** $x_0$-ban, és a határérték a **differenciálhányados (derivált)**:

$$f'(x_0)=\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}.$$

**Geometriai jelentés:** $f'(x_0)$ az $x_0$-beli **érintő** meredeksége.

**Érintő egyenlete:**

$$y-f(x_0)=f'(x_0)\\bigl(x-x_0\\bigr).$$

**Fizikai jelentés:** ha $s(t)$ a megtett út, akkor $s'(t)$ a pillanatnyi sebesség, $s''(t)$ a gyorsulás.

### 2. Differenciálhatóság és folytonosság

Differenciálhatóságból következik a folytonosság $x_0$-ban, de fordítva nem: pl. $f(x)=|x|$ folytonos $0$-ban, de ott nem differenciálható (bal és jobb oldali derivált különbözik: $-1$ és $+1$).

Bal / jobb oldali derivált: a határértéket csak $h\\to 0^-$ vagy $h\\to 0^+$ felől vesszük. Zárt intervallum végpontján csak egyoldali deriváltról beszélünk.

### 3. Deriválási szabályok (képlettár)

Alapderiváltak:

- $(c)'=0$, $(x^n)'=n x^{n-1}$ ($n\\in\\mathbb{R}$, $x>0$ ha kell), $(e^x)'=e^x$, $(a^x)'=a^x\\ln a$,
- $(\\ln x)'=\\frac{1}{x}$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$, $(\\mathrm{tg}\\,x)'=\\frac{1}{\\cos^2 x}$.

Műveleti szabályok ($f,g$ diff.ható):

- **összeg:** $(f\\pm g)'=f'\\pm g'$,

- **szorzat:** $(fg)'=f'g+fg'$,

- **hányados:** $\\displaystyle\\left(\\frac{f}{g}\\right)'=\\frac{f'g-fg'}{g^2}$ ($g\\neq 0$),

- **láncszabály:** $\\bigl(f(g(x))\\bigr)'=f'(g(x))\\cdot g'(x)$.

**Szóbeli tipp:** az összegszabályt határral, a láncszabályt „külső × belső” nyelven is mondd el.

### 4. Függvényvizsgálat a deriválttal

- $f'>0$ intervallumon $\\Rightarrow$ szigorúan monoton nő; $f'<0$ $\\Rightarrow$ szigorúan monoton csökken.
- $f'(x_0)=0$ (vagy $f'$ nem létezik): **kritikus / stacionárius pont** — szélsőérték *lehet*.

- **1. derivált teszt:** előjelváltás $+\\to-$ helyi max, $-\\to+$ helyi min.

- **2. derivált teszt:** $f'(x_0)=0$ és $f''(x_0)>0$ $\\Rightarrow$ helyi min; $f''(x_0)<0$ $\\Rightarrow$ helyi max; $f''(x_0)=0$ esetén a teszt nem dönt.
- $f''$ előjelváltása: **inflexió** (konvexitás váltása). $f''>0$: konvex (alulról nézve „U”), $f''<0$: konkáv.

### 5. Globális szélsőérték zárt intervallumon

Folytonos $f:[a,b]\\to\\mathbb{R}$ felveszi a minimumát és maximumát (Weierstrass). Ezek vagy kritikus pontokban, vagy a végpontokban vannak — ezért a vizsgán mindig ellenőrizd $a$-t és $b$-t is.

### 6. Szélsőérték-feladat menete

1. Értelmezési tartomány, célfüggvény felírása (egy változó!).

2. Deriválás, $f'=0$ és ahol $f'$ nem létezik.

3. Előjelvizsgálat / 2. derivált / zártságon végpontok.

4. Szöveges válasz, mértékegység, realitás (pl. oldal $>0$).

### 7. Szóbeli felelet hangsúlyai

Definiáld a deriváltat határértékkel, írd fel az érintőt, említs folytonosság–diff kapcsolatot ellenpéldával, sorolj műveleti szabályokat, és mutass egy rövid szélsőérték-példát (pl. kerítés / doboz).

### 8. Kidolgozott példák a szóbelihez

- **Érintő egyenlete:** $f(x)=x^3-3x$ esetén $f'(x)=3x^2-3$. Az $x_0=2$ pontban $f(2)=2$ és $f'(2)=9$, így az érintő: $y-2=9(x-2)$, azaz $y=9x-16$.

- **Monotonitás és szélsőérték:** $f'(x)=3(x-1)(x+1)$, tehát $x<-1$-re nő, $-1<x<1$-re csökken, $x>1$-re nő; lokális maximum $x=-1$-ben $f(-1)=2$, lokális minimum $x=1$-ben $f(1)=-2$.

- **Szöveges szélsőérték:** $40$ cm drótból téglalapot hajlítunk. Ha az egyik oldal $x$, a másik $20-x$, a terület $T(x)=x(20-x)$, maximuma $x=10$-nél van, értéke $100\\ \\text{cm}^2$ (négyzet).

- **Konzervdoboz:** adott $V$ térfogatú, felül nyitott henger minimális felszínnel. $V=\\pi r^2h$, innen $h=\\frac{V}{\\pi r^2}$, valamint $A(r)=\\pi r^2+\\frac{2V}{r}$. Az $A\'(r)=2\\pi r-\\frac{2V}{r^2}=0$ egyenletből $r^3=\\frac{V}{\\pi}$, és ekkor $h=r$.

### 9. Tipikus hibák és vizsgacsapdák

- **Folytonosság nem differenciálhatóság:** $f(x)=|x|$ folytonos nullában, de nem differenciálható; a differenciálhatóság erősebb feltétel.

- **A derivált nulla volta nem elég szélsőértékhez:** $f(x)=x^3$ esetén $f'(0)=0$, mégsincs szélsőérték (inflexió).

- **Zárt intervallum:** a szélsőértéket a végpontokban is ellenőrizni kell, nem csak a stacionárius pontokban.

- **Láncszabály:** $\\bigl(f(g(x))\\bigr)'=f'(g(x))\\cdot g'(x)$; a belső függvény deriváltját nem szabad kihagyni.

- **Hányados szabály:** a számlálóban $f'g-fg'$ a sorrend, nem $f'g+fg'$.

- **Érintő meredeksége:** a derivált az adott pontban a meredekség, nem a függvényérték.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'A hatványfüggvény deriváltja: (x^n)\'=n x^{n-1}',
        statementLatex: "(x^n)'=n x^{n-1} \\quad (n\\in\\mathbb{N}^+)",
        proofTitle: 'Levezetés a differenciahányados határértékéből',
        proofSteps: [
          {
            stepNumber: 1,
            title: '(xⁿ)\' = n xⁿ⁻¹',
            latexContent: '(x^n)\'=n x^{n-1}',
            explanation: 'Az f(x)=xⁿ függvény a pontbeli deriváltja a differenciahányados határértéke: lim_{x→a} (xⁿ−aⁿ)/(x−a). A számlálót szorzattá bontjuk: xⁿ−aⁿ = (x−a)(xⁿ⁻¹ + xⁿ⁻²a + … + xaⁿ⁻² + aⁿ⁻¹). Az (x−a)-val egyszerűsítve n darab tag összege marad; x→a határértékben mindegyik aⁿ⁻¹ lesz, ezért f′(a)=n aⁿ⁻¹. Az a helyére x-et írva: (xⁿ)′ = n xⁿ⁻¹. Ellenőrzés: n=2 → (x²)′=2x; n=1 → (x)′=1.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'Fermat-tétel: differenciálható lokális szélsőértékhelyen f\'(x₀)=0',
        statementLatex: "f'(x_0)=0",
        proofTitle: 'Fermat: lokális szélsőértéken a derivált nulla',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'f\'(x₀) = 0',
            latexContent: 'f\'(x_0)=0',
            explanation: 'Tegyük fel, hogy f differenciálható x₀-ban, és ott lokális maximuma van (minimum ugyanígy, fordított egyenlőtlenségekkel): a környezetben f(x) ≤ f(x₀). Jobbról (x>x₀) a differenciahányados ≤ 0, mert a számláló nempozitív, a nevező pozitív — tehát a jobb oldali derivált ≤ 0. Balról (x<x₀) a nevező negatív, a számláló nempozitív, ezért a hányados ≥ 0 — bal oldali derivált ≥ 0. Differenciálhatóság miatt a két oldali derivált egyenlő, így csak 0 lehet: f′(x₀)=0. Figyelem: a megfordítás nem igaz (pl. x³-nak x=0-ban inflexiója van, deriváltja 0, de nincs szélsőérték).'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'Szorzatszabály',
        statementLatex: "(fg)'=f'g+fg'",
        proofTitle: 'Bizonyítás a differenciahányados átalakításával',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Osztás h-val és határérték',
            latexContent: '\\frac{\\Delta(fg)}{h}=f(x+h)\\cdot\\frac{\\Delta g}{h}+\\frac{\\Delta f}{h}\\cdot g(x) \\xrightarrow{h\\to 0} f(x)g\'(x)+f\'(x)g(x)',
            explanation: 'Cél: belátni, hogy Szorzatszabály. Hozzáadunk és kivonunk egy f(x+h)g(x) tagot. Ez előkészíti a következő lépést (Növekmény felírása). A folytonosság miatt f(x+h)→f(x), a differenciahányadosok pedig a deriváltakhoz tartanak. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Érintőegyenlet felírása adott pontban.',
      'Teljes függvényvizsgálat: monotonitás, szélsőérték, konvexitás, inflexió.',
      'Geometriai terület- és térfogat-optimalizálás (pl. maximális területű téglalap adott kerület mellett).'
    ],
    applicationsOutside: [
      'Fizika: s\'(t)=v(t), v\'(t)=a(t); radioaktív bomlás, hővezetés.',
      'Közgazdaságtan: határköltség, határbevétel, árrugalmasság.',
      'Biológia: populációnövekedés pillanatnyi üteme.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Írd fel az f(x)=x²−3x+2 függvény x=4 pontbeli érintőjének egyenletét!',
        solutionLatex: "f(4)=6, \\quad f'(x)=2x-3, \\quad f'(4)=5. \\quad y-6=5(x-4) \\implies y=5x-14."
      },
      {
        problemNumber: 2,
        question: 'Egy 10 m hosszú kerítéshálóval téglalap alakú baromfiudvart kerítünk le egyenes fal mellett (a fal egyik oldalt adja). Mikor lesz a terület maximális?',
        solutionLatex: 'T(x)=x(10-2x)=10x-2x^2 \\quad (0<x<5). \\quad T\'(x)=10-4x=0 \\implies x=2{,}5\\text{ m}, \\quad \\text{hossz}=5\\text{ m}, \\quad T_{\\max}=12{,}5\\text{ m}^2.',
        explanation: 'Ha x a falra merőleges oldal, akkor a fallal párhuzamos oldal 10−2x. (Ha a fal a hosszabb oldalt adja: T(x)=x(10−x), max. 25 m² x=5-nél.)'
      },
      {
        problemNumber: 3,
        question: 'Vizsgáld meg az f(x)=x³−3x függvény lokális szélsőértékeit!',
        solutionLatex: "f'(x)=3x^2-3=3(x-1)(x+1)=0 \\implies x=\\pm 1. \\quad f' \\text{ előjelváltása: } x=-1 \\text{ lokális max. } f(-1)=2; \\quad x=1 \\text{ lokális min. } f(1)=-2."
      },
      {
        problemNumber: 4,
        question: 'Egy nyitott tetejű, 500 cm³ térfogatú henger alakú dobozt készítünk. Milyen sugár és magasság esetén lesz a felszíne minimális?',
        solutionLatex: 'V=\\pi r^2h=500\\implies h=\\frac{500}{\\pi r^2}. \\quad A(r)=\\pi r^2+2\\pi rh=\\pi r^2+\\frac{1000}{r}. \\\\ A\'(r)=2\\pi r-\\frac{1000}{r^2}=0\\implies r^3=\\frac{500}{\\pi}\\implies r=\\sqrt[3]{\\frac{500}{\\pi}}\\approx5{,}42\\ \\text{cm},\\quad h=r\\approx5{,}42\\ \\text{cm}.',
        explanation: 'A felszín egyváltozós függvénye A(r)=πr²+1000/r. A derivált nullhelye adja a minimumot; mivel A″(r)=2π+2000/r³>0, valóban minimum. A megoldás érdekessége, hogy a magasság éppen a sugárral lesz egyenlő.'
      },
    ],
    oralPresentationOutline: [
      'Differenciálhányados / derivált fogalma (határértékkel)',
      'Geometriai jelentés: érintő meredeksége',
      'Deriválási szabályok: összeg, szorzat, hányados, láncszabály',
      'Elemi függvények deriváltjai (hatvány, exp, log, trig)',
      'Szélsőérték: f′=0, második derivált / előjelváltás',
      'Alkalmazás: érintőegyenes, monotonitás, sebesség',
      'Szóbeli: def. + egy szabály bizonyításvázlata + példa'
    ],
    requiredDefinitions: [
      {
        term: 'Differenciálhányados',
        definitionLatex: 'f\'(a)=\\lim_{h\\to 0}\\frac{f(a+h)-f(a)}{h}',
        explanation: 'Ha a határérték létezik, f deriválható a-ban. Geometriailag az érintő meredeksége.',
      },
      {
        term: 'Érintőegyenes',
        definitionLatex: 'y-f(a)=f\'(a)(x-a)',
        explanation: 'A grafikon a-beli érintője: átmegy (a,f(a))-n, meredeksége f′(a).',
      },
      {
        term: 'Láncszabály',
        definitionLatex: '(f\\circ g)\'(x)=f\'(g(x))\\cdot g\'(x)',
        explanation: 'Összetett függvény deriváltja: külső derivált × belső derivált.',
      },
      {
        term: 'Szükséges feltétel szélsőértékhez',
        definitionLatex: 'f\'(c)=0\\text{ (ha }f\'\\text{ létezik }c\\text{-ben)}',
        explanation: 'Belső szélsőértéknél a derivált nulla (vagy nem létezik). Elégséges: előjelváltás / f″.',
      }
    ],
    examinerTraps: [
      {
        question: 'Ha f\'(x₀)=0, biztosan szélsőérték van?',
        answer: 'Nem. Szükséges, de nem elégséges feltétel. Pl. f(x)=x³ esetén f\'(0)=0, de inflexiós pont van, nem szélsőérték. Kell az előjelváltás vizsgálata is.',
        dangerLevel: 'Magas'
      },
      {
        question: 'Differenciálható-e minden folytonos függvény?',
        answer: 'Nem. Klasszikus ellenpélda: f(x)=|x| az x=0 pontban folytonos, de nem differenciálható (a bal és jobb oldali derivált −1 és +1).',
        dangerLevel: 'Közepes'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Differenciálhányados, szabályok, alkalmazások\n\n### Fő állítások\n\n$f'(x_0)=\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}, \\quad y-f(x_0)=f'(x_0)(x-x_0)$\n\n**Feltétel:** $f$ differenciálható $x_0$-ban.\n\n### Definíciók\n\n**Differenciahányados → derivált:** szelő meredeksége → érintő meredeksége.\n\n**Érintő:** $y-f(a)=f'(a)(x-a)$.\n\n**Láncszabály:** $(f\\circ g)'(x)=f'(g(x))\\cdot g'(x)$.\n\n**Szükséges feltétel:** belső szélsőértéknél (ha $f'$ létezik) $f'(c)=0$. Nem elégséges (pl. $x^3$ a $0$-ban).\n\n### Alapderiváltak és szabályok\n$(c)'=0$, $(x^n)'=nx^{n-1}$, $(e^x)'=e^x$, $(\\ln x)'=1/x$, $(\\sin x)'=\\cos x$, $(\\cos x)'=-\\sin x$.\nÖsszeg; szorzat $(fg)'=f'g+fg'$; hányados $\\bigl(f/g\\bigr)'=(f'g-fg')/g^2$.\n\n### Tételek\n1. $(x^n)'=nx^{n-1}$ — $x^n-a^n$ szorzattá alakítás.\n2. Fermat: lokális szélsőértéknél $f'(x_0)=0$ (ha diff.ható).\n3. Szorzatszabály — differenciahányados átalakításával.\n\n### Csapdák\n$f'=0\\not\\Rightarrow$ szélsőérték; folytonos $\\not\\Rightarrow$ diff.ható ($|x|$); zárt intervallumon a végpontokat is vizsgáld.",
    oralExamPlan: "## Szóbeli felelet vázlata — 11. tétel\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nÍv: Newton–Leibniz → derivált def. → szabályok → függvényvizsgálat → bizonyítás → feladat.\n\n### 0:00–1:30 · Bevezetés\nNewton (sebesség) és Leibniz ($dy/dx$, érintő).\n\n### 1:30–5:00 · Definíció (2 pont)\nDifferenciahányados → derivált; geometriai jelentés; érintő. Diff.ható $\\Rightarrow$ folytonos (fordítva nem).\n\n### 5:00–8:00 · Szabályok (szerkezet)\nAlapderiváltak; összeg, szorzat, hányados, láncszabály.\n\n### 8:00–12:30 · Tétel + bizonyítás (6 pont)\n**Ajánlott:** $(x^n)'=nx^{n-1}$. Alternatíva: Fermat vagy szorzatszabály.\n\n### 12:30–14:30 · Alkalmazások (4 pont)\nÉrintő; monotonitás $f'$ előjeléből; sebesség; optimalizálás — 1 részletes vagy 3 rövid.\n\n### 14:30–18:00 · Feladat (8 pont)\nÉrintő / $x^3-3x$ szélsőérték / kerítéses területmax. Említsd az 1. és 2. derivált tesztet.\n\n### 18:00–19:30 · Zárás\nKritikus pont ≠ szélsőérték; Weierstrass zárt intervallumon.\n\n### Pontozás\nSzerkezet 10 · Def 2 · Tétel+biz 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5 = **35**",
    visualizerType: 'function'
  },
  {
    id: 'tétel-12',
    number: 12,
    title: 'Derékszögű háromszögekre vonatkozó tételek. A hegyesszögek szögfüggvényei. Összefüggések a hegyesszögek szögfüggvényei között. A szögfüggvények általánosítása',
    category: 'Geometria és trigonometria',
    tags: ['Pitagorasz', 'Thalész', 'Magasságtétel', 'Befogótétel', 'Trigonometria', 'Egységkör', 'Redukciós szabályok'],
    difficulty: '2: bemelegítő',
    summary: 'A derékszögű háromszög elemei; Pitagorasz-tétel és megfordítása; magasság- és befogótétel; Thalész-tétel. A hegyesszögek szögfüggvényei, nevezetes szögek, pótszög-összefüggések, az alapazonosság. A szögfüggvények általánosítása egységkörön, előjelek, periodicitás, redukciós szabályok.',
    statementLatex: 'a^2+b^2=c^2, \\quad m^2=pq, \\quad a^2=cp, \\quad b^2=cq, \\quad \\sin^2\\alpha+\\cos^2\\alpha=1',
    conditionsLatex: '\\gamma=90^\\circ, \\quad c=p+q',
    formulaSheetReference: 'Hivatalos Képlettár 2026: trigonometria és derékszögű háromszög',
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) – Geometria és trigonometria, 7–8. oldal'
    ],
    introduction: `A 3–4–5 oldalú háromszöggel az egyiptomi „kötélhúzók” derékszöget tűztek ki a Nílus áradása után újraosztott földeken.

A Pitagorasz nevéhez kötött tételt a babilóniaiak (YBC 7289 agyagtábla) és a kínaiak is ismerték jóval előbb, de az első rendszerezett bizonyítás a görög matematikához kötődik.

A trigonometria a csillagászatból és a hajózásból nőtt ki: Hipparkhosz és Ptolemaiosz húrtáblázatai a mai szögfüggvény-táblázatok elődei.

Az egységkörös általánosítás — amelyet a 18. században Euler rögzített — tette lehetővé, hogy a szögfüggvényeket ne csak hegyesszögekre, hanem tetszőleges forgásszögekre, sőt valós számokra értelmezzük.

A szóbelin ez a tétel két dolgot kér számon egyszerre: a geometriai tételek biztos használatát és a szögfüggvények fogalmi tisztaságát.`,
    detailedTheory: `### 1. A derékszögű háromszög elemei

- A derékszöggel szemközti oldal az **átfogó** $c$, a másik két oldal a **befogó** $a$ és $b$. A derékszög csúcsa $C$, az átfogó $AB$.
- Az átfogóra bocsátott **magasság** $m$ talppontja $T$; ez az átfogót két **vetületre** bontja: $p=AT$ (az $a$ befogó vetülete) és $q=BT$ (a $b$ befogó vetülete), így $c=p+q$.
- A szögek jelölése: $\\alpha$ az $a$ oldallal szemközti, $\\beta$ a $b$ oldallal szemközti szög, $\\gamma=90^\\circ$.

- **Terület:** $T=\\frac{ab}{2}=\\frac{cm}{2}$; a két képlet egyenlősége maga is hasznos összefüggés ($ab=cm$).

- **Köré írt kör:** Thalész tétele miatt a derékszögű háromszög köré írt körének átmérője az átfogó, tehát $R=\\frac{c}{2}$.

### 2. A klasszikus tételek

- **Pitagorasz-tétel:** $a^2+b^2=c^2$. Megfordítása is igaz: ha egy háromszögben $a^2+b^2=c^2$, akkor a $c$ oldallal szemközti szög derékszög. (A megfordítás teszi alkalmassá a tételt derékszög ellenőrzésére a gyakorlatban.)

- **Magasságtétel:** $m^2=pq$, azaz a magasság mértani közepe a két vetületnek.

- **Befogótételek:** $a^2=cp$ és $b^2=cq$; a befogó mértani közepe az átfogónak és a befogó vetületének.

- **Thalész-tétel:** az átmérő végpontjait a kör egy harmadik pontjával összekötve derékszögű háromszöget kapunk; megfordítva, a derékszögű háromszög csúcsai olyan körön vannak, amelynek átmérője az átfogó.

- **Nevezetes arányok:**
  - $45^\\circ\\!-\\!45^\\circ\\!-\\!90^\\circ$: a befogók egyenlők, az átfogó $\\sqrt2$-ször akkora;
  - $30^\\circ\\!-\\!60^\\circ\\!-\\!90^\\circ$: a rövidebb befogó az átfogó fele, a hosszabb $\\frac{\\sqrt3}{2}c$, az arány $1:\\sqrt3:2$.

### 3. A hegyesszögek szögfüggvényei

- **Szinusz:** $\\sin\\alpha=\\dfrac{\\text{szemközti befogó}}{\\text{átfogó}}=\\dfrac{a}{c}$.

- **Koszinusz:** $\\cos\\alpha=\\dfrac{\\text{melletti befogó}}{\\text{átfogó}}=\\dfrac{b}{c}$.

- **Tangens:** $\\operatorname{tg}\\alpha=\\dfrac{\\text{szemközti}}{\\text{melletti}}=\\dfrac{a}{b}=\\dfrac{\\sin\\alpha}{\\cos\\alpha}$.

- **Kotangens:** $\\operatorname{ctg}\\alpha=\\dfrac{\\text{melletti}}{\\text{szemközti}}=\\dfrac{b}{a}=\\dfrac{\\cos\\alpha}{\\sin\\alpha}=\\dfrac{1}{\\operatorname{tg}\\alpha}$.
- Hegyesszögre $0<\\sin\\alpha<1$, $0<\\cos\\alpha<1$, $\\operatorname{tg}\\alpha>0$, $\\operatorname{ctg}\\alpha>0$.

- **Nevezetes szögek:**

| $\\alpha$ | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ |
|---|---|---|---|
| $\\sin\\alpha$ | $\\frac12$ | $\\frac{\\sqrt2}{2}$ | $\\frac{\\sqrt3}{2}$ |
| $\\cos\\alpha$ | $\\frac{\\sqrt3}{2}$ | $\\frac{\\sqrt2}{2}$ | $\\frac12$ |
| $\\operatorname{tg}\\alpha$ | $\\frac{\\sqrt3}{3}$ | $1$ | $\\sqrt3$ |

### 4. Összefüggések a hegyesszögek szögfüggvényei között

- **Alapazonosság:** $\\sin^2\\alpha+\\cos^2\\alpha=1$ — ez valójában a Pitagorasz-tétel a $\\sin,\\cos$ jelöléssel.

- **Pótszögek:** $\\sin(90^\\circ-\\alpha)=\\cos\\alpha$ és $\\cos(90^\\circ-\\alpha)=\\sin\\alpha$; hasonlóan $\\operatorname{tg}(90^\\circ-\\alpha)=\\operatorname{ctg}\\alpha$.

- **Tangenses alakok:** $1+\\operatorname{tg}^2\\alpha=\\dfrac{1}{\\cos^2\\alpha}$ és $1+\\operatorname{ctg}^2\\alpha=\\dfrac{1}{\\sin^2\\alpha}$.

- **Szorzat:** $\\operatorname{tg}\\alpha\\cdot\\operatorname{ctg}\\alpha=1$.

- **Felezés és négyzetes azonosságok (kiegészítés):** $\\sin2\\alpha=2\\sin\\alpha\\cos\\alpha$, $\\cos2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha=1-2\\sin^2\\alpha$.

- **Addíciós tételek (kiegészítés):** $\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta$, $\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta$. Ezekből a hegyesszög-összefüggések általános esetre terjeszthetők ki.

### 5. A szögfüggvények általánosítása

- **Egységkör:** a középpont körül $\\alpha$ szöggel elforgatott egységvektor koordinátái $(\\cos\\alpha,\\sin\\alpha)$. Ez a definíció tetszőleges (akár negatív, akár $360^\\circ$-nál nagyobb) forgásszögre működik.

- **Előjelek:** I. síknegyed: $\\sin>0,\\cos>0$; II.: $\\sin>0,\\cos<0$; III.: $\\sin<0,\\cos<0$; IV.: $\\sin<0,\\cos>0$. A tangens a $\\cos=0$ helyeken nincs értelmezve.

- **Értékkészlet:** $-1\\le\\sin\\alpha\\le1$, $-1\\le\\cos\\alpha\\le1$; a tangens és kotangens értékkészlete $\\mathbb R$.

- **Periodicitás:** $\\sin(\\alpha+360^\\circ)=\\sin\\alpha$, $\\cos(\\alpha+360^\\circ)=\\cos\\alpha$; a tangens és kotangens periódusa $180^\\circ$.

- **Páratlanság/párosság:** $\\sin(-\\alpha)=-\\sin\\alpha$, $\\operatorname{tg}(-\\alpha)=-\\operatorname{tg}\\alpha$ (páratlan); $\\cos(-\\alpha)=\\cos\\alpha$ (páros).

- **Redukciós szabályok:** $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$, $\\cos(180^\\circ-\\alpha)=-\\cos\\alpha$; $\\sin(180^\\circ+\\alpha)=-\\sin\\alpha$, $\\cos(180^\\circ+\\alpha)=-\\cos\\alpha$; $\\sin(360^\\circ-\\alpha)=-\\sin\\alpha$, $\\cos(360^\\circ-\\alpha)=\\cos\\alpha$. Általában a szöget a megfelelő síknegyedbeli hegyesszögre vezetjük vissza, és az előjelet a síknegyedből olvassuk le.

- **Grafikonok:** a $\\sin$ és $\\cos$ hullámvonal $360^\\circ$ periódussal, amplitúdó $1$; a $\\operatorname{tg}$ görbe $180^\\circ$ periódusú, függőleges aszimptotákkal a $90^\\circ+k\\cdot180^\\circ$ helyeken.

### 6. Trigonometrikus egyenletek alapjai

- $\\sin x=a$ ($|a|\\le1$): két alapsorozat, $x=\\alpha+k\\cdot360^\\circ$ vagy $x=180^\\circ-\\alpha+k\\cdot360^\\circ$.
- $\\cos x=a$: $x=\\pm\\alpha+k\\cdot360^\\circ$.
- $\\operatorname{tg}x=a$: $x=\\alpha+k\\cdot180^\\circ$.
- Az egyenlet megoldásánál mindig ellenőrizni kell az értelmezési tartományt (nevező, tangens), és a periódust a szög mértékegységéhez kell igazítani (fok vagy radián).

### 7. Gyakorlati megjegyzések

- Derékszögű háromszögben két adat (oldal, szög) elegendő a többi meghatározásához; a stratégiát mindig a keresett mennyiséghez válasszuk ($\\sin$: szemközti és átfogó; $\\cos$: melletti és átfogó; $\\operatorname{tg}$: két befogó).

- **Szögfüggvény és szög visszakeresése:** a számológép $\\sin^{-1},\\cos^{-1},\\operatorname{tg}^{-1}$ kulcsaival, de figyelni kell arra, hogy a hegyesszög-eredmény csak a megfelelő síknegyedben érvényes.

- **Mérési feladatok:** emelkedési szög, depressziószög, lejtő hajlásszöge — mind derékszögű háromszögre vezethető vissza.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'Pitagorasz tétele',
        statementLatex: 'a^2+b^2=c^2',
        proofTitle: 'Bizonyítás befogótételekkel / területekkel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'a² + b² = c²',
            latexContent: 'a^2+b^2=c^2',
            explanation: 'Derékszögű háromszögben a,b befogók, c átfogó. Egy tiszta út: a magasság az átfogóra két kisebb, az eredetihez hasonló háromszöget vág. A befogótétel: a² = c·a′ és b² = c·b′, ahol a′,b′ az átfogó szeletei. Összeadva a²+b² = c(a′+b′) = c·c = c². (Területes bizonyítás is van: négy háromszög + belső négyzet.) Ellenőrzés: 3-4-5 → 9+16=25.'
          }
        ],
        notes: 'A megfordítás bizonyítása koszinusztétellel a legrövidebb; a tankönyvi átdarabolásos bizonyítás ugyanerre az eredményre vezet.'
      },
      {
        theoremNumber: 2,
        title: 'Magasság- és befogótétel',
        statementLatex: 'm^2=pq, \\quad a^2=cp, \\quad b^2=cq',
        proofTitle: 'Bizonyítás hasonló háromszögek aránypárjaival',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Ellenőrzés',
            latexContent: '\\triangle ATC \\sim \\triangle BTC \\sim \\triangle ABC \\ \\frac{m}{p}=\\frac{q}{m} \\implies m^2=pq \\ \\frac{b}{q}=\\frac{c}{b} \\implies b^2=qc \\ a^2+b^2=c(p+q)=c^2',
            explanation: 'Cél: belátni, hogy Magasság- és befogótétel. Az átfogóhoz tartozó magasság két derékszögű háromszögre bontja az eredetit; mindháromban megjelenik az $\\alpha$ és a $90^\\circ-\\alpha$ szög. Az $ATC$ és $BTC$ háromszögekben a megfelelő befogók aránya egyenlő; keresztszorzással adódik a magasságtétel. Az $ATC$ és $ABC$ háromszögek hasonlóságából; a másik befogóra ugyanígy $a^2=pc$. Ez előkészíti a következő lépést (Befogótétel). A két befogótétel összege visszaadja a Pitagorasz-tételt, ami mutatja az állítások konzisztenciáját. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'Thalész tétele',
        statementLatex: '\\text{Átmérőhöz tartozó kerületi szög }=90^\\circ',
        proofTitle: 'Bizonyítás egyenlő szárú háromszögekkel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Megfordítás',
            latexContent: 'OA=OB=OC=r \\ \\angle OAC=\\angle OCA=\\alpha, \\quad \\angle OBC=\\angle OCB=\\beta \\ 2\\alpha+2\\beta=180^\\circ \\implies \\alpha+\\beta=90^\\circ \\ \\angle ACB=90^\\circ \\implies AB \\text{ átmérő}',
            explanation: 'Cél: belátni, hogy Thalész tétele. Az $AB$ az átmérő, $C$ a körön van, $O$ a középpont. Az $OAC$ és $OBC$ háromszögek egyenlő szárúak. Egyenlő szárú háromszögekben az alapon fekvő szögek egyenlők. Ez előkészíti a következő lépést (Alapszögek). Az $ABC$ háromszög szögeinek összege $180^\\circ$, és $\\angle ACB=\\alpha+\\beta$. Ez előkészíti a következő lépést (Szögek összege). A köré írt kör középpontja a derékszögű háromszögnél az átfogó felezőpontja, tehát az átfogó átmérő. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 4,
        title: 'Az alapazonosság',
        statementLatex: '\\sin^2\\alpha+\\cos^2\\alpha=1',
        proofTitle: 'Pitagorasz-tétel a derékszögű háromszögben',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Egységkörös megjelenés',
            latexContent: '\\sin\\alpha=\\frac{a}{c}, \\quad \\cos\\alpha=\\frac{b}{c} \\ \\sin^2\\alpha+\\cos^2\\alpha=\\frac{a^2+b^2}{c^2} \\ \\frac{a^2+b^2}{c^2}=\\frac{c^2}{c^2}=1 \\ (\\cos\\alpha)^2+(\\sin\\alpha)^2=1',
            explanation: 'Cél: belátni, hogy Az alapazonosság. A derékszögű háromszög befogóinak és átfogójának arányai. A definíció szerinti átírás után a műveletek ismert azonosságait alkalmazzuk. Közös nevezőre hozva a számlálóban a két befogó négyzetösszege áll. Ez előkészíti a következő lépést (Négyzetösszeg). A Pitagorasz-tétel szerint $a^2+b^2=c^2$, tehát a hányados 1. Ez előkészíti a következő lépést (Pitagorasz). Az egységkörön a pont koordinátái $\\cos\\alpha$ és $\\sin\\alpha$; a pont a körön van, ezért a koordináták négyzetösszege 1. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 5,
        title: 'A pótszög-összefüggések',
        statementLatex: '\\sin(90^\\circ-\\alpha)=\\cos\\alpha, \\quad \\cos(90^\\circ-\\alpha)=\\sin\\alpha',
        proofTitle: 'Derékszögű háromszög két hegyesszöge',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Összevetés',
            latexContent: '\\alpha+\\beta=90^\\circ \\ \\sin\\beta=\\frac{b}{c} \\ \\sin(90^\\circ-\\alpha)=\\frac{b}{c}=\\cos\\alpha',
            explanation: 'Cél: belátni, hogy A pótszög-összefüggések. A derékszögű háromszög két hegyesszögének összege $90^\\circ$, tehát $\\beta=90^\\circ-\\alpha$. A $\\beta$ szöggel szemközti befogó $b$, az átfogó $c$. Ez előkészíti a következő lépést (Szinusz $\\beta$-ra). Ugyanez a hányados a $\\alpha$ szög koszinusza; a másik azonosság a szerepek felcserélésével adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Háromszögterület: $T=\\frac{ab\\sin\\gamma}{2}$.',
      'A távolságképlet a Pitagorasz-tételből származik: $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.',
      'Trigonometrikus azonosságok és egyenletek megoldása.',
      'Szinusz- és koszinusztétel általános háromszögekre; a derékszögű eset speciális eset.',
      'Ferde hajítás pályája, erőfelbontás lejtőn.'
    ],
    applicationsOutside: [
      'Építészet: tetőhajlásszög, derékszög kitűzése, lépcsőarányok.',
      'Földmérés: torony vagy hegy magasságának indirekt meghatározása emelkedési szögből.',
      'Navigáció és csillagászat: irányszög, magassági szög, távolságbecslés.',
      'Fizika: lejtőn ható erők felbontása, rezgések és hullámok leírása.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Egy derékszögű háromszögben az átfogóhoz tartozó magasság $m=6$, az egyik vetület $p=4$. Határozd meg az oldalakat!',
        solutionLatex: 'm^2=pq \\implies 36=4q \\implies q=9, \\quad c=p+q=13; \\quad a=\\sqrt{cp}=\\sqrt{52}=2\\sqrt{13}, \\quad b=\\sqrt{cq}=\\sqrt{117}=3\\sqrt{13}.',
        explanation: 'A magasságtételből $q=9$, így az átfogó $13$. A befogótételekkel $a^2=13\\cdot4=52$ és $b^2=13\\cdot9=117$. Ellenőrzés: $52+117=169=13^2$.'
      },
      {
        problemNumber: 2,
        question: 'Egy $10$ cm sugarú körhöz külső pontból $24$ cm-es érintőszakaszokat húzunk. Mekkora az érintési pontokat összekötő húr?',
        solutionLatex: 'OP=\\sqrt{10^2+24^2}=26; \\quad \\sin\\alpha=\\frac{10}{26}=\\frac{5}{13} \\implies \\text{húr}=2\\cdot 24\\cdot\\frac{5}{13}=\\frac{240}{13}\\approx18{,}46\\ \\text{cm}.',
        explanation: 'A középpont, a külső pont és az érintési pont derékszögű háromszöget alkot, mert a sugár merőleges az érintőre. A húr fele a derékszögű háromszögben $24\\sin\\alpha$, ahol $\\alpha$ az $OP$ és az érintő szöge.'
      },
      {
        problemNumber: 3,
        question: 'Egy $30^\\circ\\!-\\!60^\\circ\\!-\\!90^\\circ$ háromszög átfogója $10$ cm. Mekkorák a befogók, a terület és a beírt kör sugara?',
        solutionLatex: 'a=5, \\quad b=5\\sqrt3\\approx8{,}66; \\quad T=\\frac{ab}{2}=\\frac{25\\sqrt3}{2}\\approx21{,}65; \\quad r=\\frac{a+b-c}{2}=\\frac{5+5\\sqrt3-10}{2}\\approx1{,}83.',
        explanation: 'A $30^\\circ$-os szöggel szemközti befogó az átfogó fele, a másik befogó $\\frac{\\sqrt3}{2}c$. Derékszögű háromszögben a beírt kör sugara $r=\\frac{a+b-c}{2}$, ami a területképletből és $T=rs$-ből is adódik.'
      },
      {
        problemNumber: 4,
        question: 'Egy torony árnyéka $30$ m, a nap emelkedési szöge $25^\\circ$. Milyen magas a torony?',
        solutionLatex: '\\operatorname{tg}25^\\circ=\\frac{h}{30} \\implies h=30\\operatorname{tg}25^\\circ\\approx30\\cdot0{,}4663\\approx13{,}99\\ \\text{m}.',
        explanation: 'A torony, az árnyék és a napsugár derékszögű háromszöget alkot; a $25^\\circ$ szöggel szemközti befogó a torony magassága, a melletti befogó az árnyék. A tangens a két befogó aránya.'
      },
      {
        problemNumber: 5,
        question: 'Egy hegyesszögre $\\sin\\alpha=\\frac{5}{13}$. Határozd meg $\\cos\\alpha$, $\\operatorname{tg}\\alpha$ és $\\operatorname{ctg}\\alpha$ értékét!',
        solutionLatex: '\\cos\\alpha=\\sqrt{1-\\frac{25}{169}}=\\frac{12}{13}, \\quad \\operatorname{tg}\\alpha=\\frac{5}{12}, \\quad \\operatorname{ctg}\\alpha=\\frac{12}{5}.',
        explanation: 'Az alapazonosságból $\\cos^2\\alpha=1-\\frac{25}{169}=\\frac{144}{169}$; hegyesszögre a koszinusz pozitív. A tangens $\\frac{\\sin}{\\cos}=\\frac{5}{12}$, a kotangens ennek reciproka.'
      },
      {
        problemNumber: 6,
        question: 'Számítsd ki redukciós szabályokkal: $\\sin150^\\circ$, $\\cos240^\\circ$, $\\operatorname{tg}315^\\circ$!',
        solutionLatex: '\\sin150^\\circ=\\sin30^\\circ=\\frac12; \\quad \\cos240^\\circ=-\\cos60^\\circ=-\\frac12; \\quad \\operatorname{tg}315^\\circ=-\\operatorname{tg}45^\\circ=-1.',
        explanation: 'A $150^\\circ$ a II. síknegyedben van, ott a szinusz pozitív, a $30^\\circ$-os pótszögre vezet. A $240^\\circ$ a III. negyedben van, a koszinusz negatív. A $315^\\circ$ a IV. negyedben van, a tangens negatív.'
      }
    ],
    oralPresentationOutline: [
      'Pitagorasz-tétel és megfordítása',
      'Hegyesszögek szögfüggvényei derékszögű háromszögben',
      'sin²α+cos²α=1 és kapcsolódó azonosságok',
      'Thalész-tétel; kerületi és középponti szög (ha kell)',
      'Alkalmazás: magasság, távolság mérése',
      'Kapcsolat: egységkör / általános szög előkészítése',
      'Szóbeli: Pitagorasz + egy szögfüggvény-definíció + példa'
    ],
    requiredDefinitions: [
      {
        term: 'Hegyesszög szinusza',
        definitionLatex: '\\sin\\alpha=\\frac{\\text{szemközti befogó}}{\\text{átfogó}}',
        explanation: 'Derékszögű háromszögben a szöggel szemközti befogó és az átfogó hányadosa.'
      },
      {
        term: 'Hegyesszög koszinusza',
        definitionLatex: '\\cos\\alpha=\\frac{\\text{melletti befogó}}{\\text{átfogó}}',
        explanation: 'A szög melletti befogó és az átfogó hányadosa; pótszögre a szinusz.'
      },
      {
        term: 'Szögfüggvények egységkörön',
        definitionLatex: '(\\cos\\alpha,\\sin\\alpha)',
        explanation: 'Tetszőleges $\\alpha$ forgásszög koszinusza és szinusza az egységvektor $x$, illetve $y$ koordinátája.'
      },
      {
        term: 'Periodicitás',
        definitionLatex: '\\sin(\\alpha+360^\\circ)=\\sin\\alpha',
        explanation: 'A szögfüggvények értéke $360^\\circ$ (tangensnél, kotangensnél $180^\\circ$) elforgatás után ismétlődik.'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Derékszögű háromszög, szögfüggvények\n\n### Fő állítások\n\n$a^2+b^2=c^2, \\quad m^2=pq, \\quad a^2=cp, \\quad b^2=cq, \\quad \\sin^2\\alpha+\\cos^2\\alpha=1$\n\n**Feltételek:** $\\gamma=90^\\circ$, átfogó $c$, befogók $a,b$; $c=p+q$ a magasság talppontjával.\n\n### Definíciók\n**Hegyesszög $\\sin/\\cos/\\mathrm{tg}$:** szemközti/átfogó; szomszédos/átfogó; szemközti/szomszédos.\n**Egységkör:** $P(\\cos\\varphi,\\sin\\varphi)$; előjelek negyedek szerint.\n**Periodicitás:** $\\sin,\\cos$: $2\\pi$; $\\mathrm{tg}$: $\\pi$.\n\n### Tételek\n1. Pitagorasz (+ megfordítás).\n2. Magasságtétel: $m^2=pq$.\n3. Befogótétel: $a^2=c\\cdot p$, $b^2=c\\cdot q$.\n4. Thalész: átmérőhöz tartozó kerületi szög derékszög.\n5. Alapazonosság: $\\sin^2+\\cos^2=1$.\n\n### Nevezetes értékek\n$\\sin 30^\\circ=1/2$, $\\sin 45^\\circ=\\sqrt{2}/2$, $\\sin 60^\\circ=\\sqrt{3}/2$ (koszinusz pótszögként).\n\n### Képlettár\nGeometria és trigonometria, 7–8. oldal.",
    oralExamPlan: "## Szóbeli felelet vázlata — 12. tétel\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nÍv: derékszögű elemek → Pitagorasz/magasság/befogó → Thalész → szögfüggvények → egységkör → feladat.\n\n### 0:00–1:30 · Bevezetés\nPitagorasz-iskola; Thalész; szögfüggvények mint arányok, majd egységkör.\n\n### 1:30–4:30 · Definíció (2 pont)\nHegyesszög $\\sin/\\cos/\\mathrm{tg}$ *vagy* egységkörös definíció.\n\n### 4:30–10:30 · Tétel + bizonyítás (6 pont)\n**Ajánlott:** Pitagorasz (hasonló háromszögek); vagy magasságtétel; vagy Thalész. Rajzolj!\n\n### 10:30–13:00 · Szögfüggvények + alkalmazások (4 pont)\nAlapazonosság; pótszögek; magasságmérés / navigáció.\n\n### 13:00–17:30 · Feladat (8 pont)\nDerékszögű számítás / magasság-befogó / egységkörös érték. Ábra kötelező.\n\n### 17:30–19:30 · Zárás\nMegfordítás vs tétel; előjelek a negyedekben.\n\n### Pontozás\nSzerkezet 10 · Def 2 · Tétel+biz 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5 = **35**",
    examinerTraps: [
      {
        question: 'Mit jelent $\\sqrt{x^2}$?',
        answer: '$|x|$, mert a négyzetgyök függvény értéke mindig nemnegatív. $\\sqrt{x^2}=x$ csak $x\\ge0$ esetén igaz — ez a hiba sok trigonometrikus egyenletnél előjön.',
        dangerLevel: 'Magas'
      },
      {
        question: 'Mely szögekre nincs értelmezve a tangens?',
        answer: '$\\alpha=90^\\circ+k\\cdot180^\\circ$ ($k\\in\\mathbb Z$), mert ott $\\cos\\alpha=0$, és nullával nem osztunk.',
        dangerLevel: 'Magas'
      },
      {
        question: 'A $\\sin(180^\\circ-\\alpha)=\\sin\\alpha$ összefüggés minden szögre igaz?',
        answer: 'Igen, tetszőleges $\\alpha$-ra érvényes, mert a $180^\\circ-\\alpha$ és $\\alpha$ szögekhez tartozó egységkör-pontok $y$-koordinátája azonos. A koszinusznál viszont előjelváltás van.',
        dangerLevel: 'Közepes'
      },
      {
        question: 'A Pitagorasz-tétel megfordítása is igaz?',
        answer: 'Igen: ha $a^2+b^2=c^2$, akkor a $c$ oldallal szemközti szög derékszög. Ez teszi lehetővé, hogy oldalakból következtessünk a szögre.',
        dangerLevel: 'Közepes'
      }
    ],
    applications: [
      {
        title: 'Torony magassága',
        problem: '$30$ m árnyék, $25^\\circ$ emelkedési szög',
        solutionLatex: 'h=30\\operatorname{tg}25^\\circ\\approx13{,}99\\ \\text{m}'
      },
      {
        title: 'Redukciós szabályok',
        problem: '$\\sin150^\\circ$, $\\cos240^\\circ$, $\\operatorname{tg}315^\\circ$',
        solutionLatex: '\\frac12, \\quad -\\frac12, \\quad -1'
      }
    ],
    scoringBreakdown: [
      {
        criterion: 'I. Tartalom',
        points: 10,
        description: 'Derékszögű tételek, szögfüggvények, általánosítás.'
      },
      {
        criterion: 'II. Definíció',
        points: 2,
        description: 'Szögfüggvények vagy egységkör.'
      },
      {
        criterion: 'III. Bizonyítás',
        points: 6,
        description: 'Pitagorasz, magasságtétel vagy Thalész.'
      },
      {
        criterion: 'IV. Feladat',
        points: 8,
        description: 'Hiányzó oldal/szög, redukció.'
      },
      {
        criterion: 'V. Alkalmazás',
        points: 4,
        description: 'Mérés, építészet, történet.'
      },
      {
        criterion: 'VI. Szaknyelv',
        points: 5,
        description: 'Trigonometriai jelölések.'
      }
    ],
    historicalContext: 'A babilóniai YBC 7289 tábla és az egyiptomi kötélhúzók már ismerték a 3–4–5 arányt; Pitagorasz és az Elemek I. könyve rendszerezte; Hipparkhosz és Ptolemaiosz húrtáblázatai a trigonometria elődei; Euler rögzítette az egységkörös értelmezést.',
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 12. Tétel (82–89. oldal): A Pitagorasz-tétel bizonyítását és a szögfüggvények egységkörös általánosítását egyaránt készítsd fel!',
    visualizerType: 'triangle',
  },
  {
    id: 'tétel-13',
    number: 13,
    title: 'Háromszögek nevezetes vonalai, pontjai és körei',
    category: 'Geometria és trigonometria',
    tags: ['Súlypont', 'Magasságpont', 'Beírt kör', 'Köré írt kör', 'Euler-egyenes', 'Feuerbach-kör', 'Szögfelező-tétel'],
    difficulty: '2: bemelegítő',
    summary: 'Oldalfelező merőlegesek, szögfelezők, magasságvonalak, súlyvonalak és metszéspontjaik; középvonal; Euler-egyenes és Feuerbach-kör; beírt, köré írt és hozzáírt körök; szögfelező-tétel; a nevezetes pontok helyzete a háromszög típusa szerint.',
    statementLatex: 'KS:SM=1:2, \\quad r=\\frac{T}{s}, \\quad R=\\frac{abc}{4T}, \\quad \\frac{BD}{DC}=\\frac{AB}{AC}',
    conditionsLatex: 's=\\frac{a+b+c}{2}, \\quad T>0',
    formulaSheetReference: 'Hivatalos Képlettár 2026: háromszög nevezetes elemei',
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) – Geometria, 7–8. oldal'
    ],
    introduction: `A háromszög nevezetes pontjait már az ókori földmérők és építészek is használták: a súlypont a homogén háromszög alakú lemez egyensúlyi pontja, a köré írt kör középpontja a három csúcstól egyenlő távolságra van.

Euklidész Elemek című művének IV. könyve szerkeszti meg a beírt és köré írt kört.

Leonhard Euler 1765-ben mutatta meg, hogy a köré írt kör középpontja, a súlypont és a magasságpont egy egyenesre esik — ezt ma Euler-egyenesnek nevezzük.

Karl Wilhelm Feuerbach 1822-ben írta le a kilencpontos kört, amely érinti a beírt és a három hozzáírt kört.

A témakör a szóbelin azért kedvelt, mert egyetlen ábrán egyszerre kérhető számon szerkesztés, arány, terület és bizonyítás.`,
    detailedTheory: `### 1. Nevezetes vonalak

- **Oldalfelező merőleges:** a szakasz két végpontjától egyenlő távolságra levő pontok mértani helye. Mindhárom oldal felezőmerőlegese egy pontban metszi egymást.

- **Belső szögfelező:** a szögszáraktól egyenlő távolságra levő pontok mértani helye. A három belső szögfelező egy pontban metszi egymást.

- **Külső szögfelező:** a szög szárainak meghosszabbításaitól egyenlő távolságra levő pontok halmaza; a belső szögfelezőre merőleges.

- **Magasságvonal:** csúcsból a szemközti oldal egyenesére bocsátott merőleges egyenes; a magasságvonalak (vagy meghosszabbításaik) egy pontban metszik egymást.

- **Súlyvonal (medián):** a csúcsot a szemközti oldal felezőpontjával összekötő szakasz; a három súlyvonal egy pontban metszi egymást.

- **Középvonal:** két oldal felezőpontját összekötő szakasz; párhuzamos a harmadik oldallal, hossza annak fele.

### 2. Nevezetes pontok és köreik

- **Köré írt kör középpontja $K$:** az oldalfelező merőlegesek metszéspontja; a csúcsoktól $R$ távolságra van.

- **Beírt kör középpontja $O$:** a belső szögfelezők metszéspontja; mindhárom oldaltól $r$ távolságra van.

- **Magasságpont $M$:** a magasságvonalak metszéspontja. Hegyesszögű háromszögben a háromszög belsejében, derékszögűben a derékszögű csúcsban, tompaszögűben a háromszögön kívül helyezkedik el.

- **Súlypont $S$:** a súlyvonalak metszéspontja; mindig a háromszög belsejében van, a csúcstól a felezőpont felé $2:1$ arányban osztja a súlyvonalat.

- **Hozzáírt körök középpontjai:** egy belső és két külső szögfelező metszéspontjai; a hozzáírt kör az egyik oldalt és a másik két oldal meghosszabbítását érinti. Sugaruk $r_a=\\frac{T}{s-a}$, $r_b=\\frac{T}{s-b}$, $r_c=\\frac{T}{s-c}$.

- **Feuerbach-kör (kilencpontos kör):** átmegy a három oldalfelező ponton, a három magasságtalpponton és a csúcs–magasságpont szakaszok három felezőpontján; sugara $\\frac{R}{2}$, középpontja a $K$ és $M$ felezőpontja.

### 3. Euler-egyenes

- A $K$ (köré írt kör középpontja), az $S$ (súlypont) és az $M$ (magasságpont) egy egyenesen van: ez az **Euler-egyenes**.
- Az arány: $KS:SM=1:2$, azaz a súlypont a $KM$ szakaszt $1:2$ arányban osztja ($K$-tól számítva $1$ rész, $M$-ig $2$ rész). Vektorosan $\\vec s=\\frac{2\\vec k+\\vec m}{3}$, illetve $\\vec m=3\\vec s-2\\vec k$.
- A Feuerbach-kör középpontja az Euler-egyenesen van, a $KM$ szakasz felezőpontjában.
- Egyenlő szárú háromszögben az Euler-egyenes a szimmetriatengely; szabályos háromszögben a három pont egybeesik, az Euler-egyenes nem egyértelmű.

### 4. Fontos képletek

- **Terület:** $T=rs=\\frac{abc}{4R}=\\sqrt{s(s-a)(s-b)(s-c)}=\\frac12 ab\\sin\\gamma$.

- **Beírt kör sugara:** $r=\\frac{T}{s}$; derékszögű háromszögben $r=\\frac{a+b-c}{2}$.

- **Köré írt kör sugara:** $R=\\frac{abc}{4T}=\\frac{a}{2\\sin\\alpha}$.

- **Szögfelező-tétel:** a belső szögfelező a szemközti oldalt a szomszédos oldalak arányában osztja: $\\frac{BD}{DC}=\\frac{AB}{AC}=\\frac{c}{b}$.

- **Súlyvonal hossza:** $s_a=\\frac12\\sqrt{2b^2+2c^2-a^2}$ (Apollóniosz tétele).

- **Középvonal:** $K_aK_b=\\frac{c}{2}$ és $K_aK_b\\parallel AB$.

- **Terület arányok:** a súlyvonalak hat egyenlő területű háromszögre bontják a háromszöget; a súlypont a csúcsokkal összekötve három egyenlő területű részre osztja.

### 5. A nevezetes pontok helyzete a háromszög típusa szerint

- **Hegyesszögű:** $K$, $O$, $S$, $M$ mind a háromszög belsejében van.

- **Derékszögű:** $M$ a derékszögű csúcsban, $K$ az átfogó felezőpontjában, $R=\\frac{c}{2}$.

- **Tompaszögű:** $M$ a háromszögön kívül, $K$ az oldalakon kívül is lehet; $S$ és $O$ mindig belül.

- **Egyenlő szárú:** a szimmetriatengelyen $K$, $O$, $S$, $M$ mind rajta van; az Euler-egyenes maga a tengely.

- **Szabályos:** $K=O=S=M$; $R=2r$; a magasság $m=\\frac{\\sqrt3}{2}a$, $T=\\frac{\\sqrt3}{4}a^2$.

### 6. Szerkesztési megjegyzések

- A köré írt kör szerkesztéséhez két oldalfelező merőleges elég; a harmadik ellenőrzés.
- A beírt körhöz két belső szögfelező kell; a sugarat a metszéspontból az oldalra bocsátott merőleges adja.
- A magasságpont tompaszögű esetben a magasságvonalak meghosszabbításain keletkezik — az ábrán ezt jelölni kell.
- A hozzáírt kör szerkesztése: egy belső és két külső szögfelező metszéspontja.

### 7. Gyakori alkalmazások

- Háromszög alakú telek beírt körének maximalizálása, köré írt körének meghatározása.
- Távolságok és területek számítása a nevezetes pontok segítségével.
- Súlypontszámítás fizikában, statikában; egyensúlyi feladatok.
- Gépészeti alkatrészek, háromszög alakú tartók méretezése.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'A súlypont 2:1 arányban osztja a súlyvonalat',
        statementLatex: 'AS:SF_a=2:1',
        proofTitle: 'Bizonyítás középvonalakkal',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Egyértelműség',
            latexContent: 'F_aF_b\\parallel AB, \\quad F_aF_b=\\frac{AB}{2} \\ \\triangle ABS \\sim \\triangle F_bSF_a \\ \\frac{AS}{SF_a}=\\frac{AB}{F_aF_b}=2 \\ S \\text{ mindhárom súlyvonalon rajta van}',
            explanation: 'Cél: belátni, hogy A súlypont 2:1 arányban osztja a súlyvonalat. Két oldal felezőpontját összekötő szakasz középvonala a harmadik oldalnak: párhuzamos vele és fele olyan hosszú. Az $AB$ és $F_aF_b$ párhuzamos, ezért az $ASB$ és $F_bSF_a$ háromszögek csúcsszögei és váltószögei egyenlők, tehát hasonlók. A hasonlóság aránya a megfelelő oldalak hányadosa: $AB:F_aF_b=2:1$, tehát $AS=2\\,SF_a$. Ez előkészíti a következő lépést (Hasonlósági arány). Ugyanez az arány a másik két súlyvonalra is; mivel két súlyvonal egyetlen pontban metszi egymást, a harmadik is átmegy ezen a ponton. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'Az oldalfelező merőlegesek egy pontban metszik egymást',
        statementLatex: 'e\\cap f\\cap g=K',
        proofTitle: 'Bizonyítás: egyenlő távolságok tranzitivitása',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Köré írt kör középpontja',
            latexContent: 'K = e \\cap f \\implies KA = KB = KC',
            explanation: 'Vegyük az AB és BC oldalak e és f felezőmerőlegesét. Mivel az oldalak nem párhuzamosak, e és f egyetlen K pontban metszi egymást. A felezőmerőleges mértani hely: e pontjai egyenlő távol vannak A-tól és B-től, tehát KA = KB; hasonlóan KB = KC. A távolságok tranzitivitásával KA = KB = KC, azaz K az A-tól és C-től is egyenlő távol van — ezért K rajta van az AC felezőmerőlegesén is. Tehát a három felezőmerőleges egy pontban metszi egymást, és ez a K pont a köré írt kör középpontja (sugár KA). Szemlélet: K az a pont, ahonnan mindhárom csúcs „ugyanolyan messze” van.'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'A belső szögfelezők egy pontban metszik egymást',
        statementLatex: 'O=e\\cap f\\cap g',
        proofTitle: 'Bizonyítás: oldaltávolságok egyenlősége',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Beírható kör középpontja',
            latexContent: 'd(O,AB)=d(O,BC)=d(O,CA)=r',
            explanation: 'Legyen e az α, f a β szögfelezője, O = e ∩ f. A szögfelező mértani helye: pontjai egyenlő távol vannak a két szártól, ezért d(O,AB) = d(O,AC) és d(O,BA) = d(O,BC). Innen d(O,AC) = d(O,BC) is, tehát O a γ szögfelezőjén is rajta van. O mindhárom oldaltól ugyanarra az r távolságra van: ez a beírható kör középpontja, r a sugár. Megjegyzés: a magasságpont / súlypont más mértani hely; itt a kulcs az „egyenlő oldaltávolság”.'
          }
        ]
      },
      {
        theoremNumber: 4,
        title: 'Euler-egyenes: $K,S,M$ kollineárisak',
        statementLatex: 'KS:SM=1:2',
        proofTitle: 'Bizonyítás középponti vetítéssel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Következmény',
            latexContent: '\\vec s=\\frac{\\vec a+\\vec b+\\vec c}{3} \\ \\vec m=\\vec a+\\vec b+\\vec c-2\\vec k \\ \\vec s=\\frac{2\\vec k+\\vec m}{3} \\ K,S,M \\text{ egy egyenesen}',
            explanation: 'Cél: belátni, hogy Euler-egyenes: $K,S,M$ kollineárisak. A súlypont helyvektora a csúcsok helyvektorainak átlaga. Ez előkészíti a következő lépést (Súlypont helyzete). A köré írt kör középpontjára vonatkozó tükrözés és a magasságpont kapcsolata; a csúcsok helyvektorai és $\\vec k$ segítségével felírható. Az előző két összefüggésből $\\vec m=3\\vec s-2\\vec k$, ami átrendezve $\\vec s=\\frac{2\\vec k+\\vec m}{3}$. Ez éppen azt jelenti, hogy $S$ a $KM$ szakaszt $K$-tól számítva $1:2$ arányban osztja. A vektoros összefüggés szerint a három pont kollineáris; ez az Euler-egyenes. A Feuerbach-kör középpontja a $KM$ felezőpontja. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ],
        notes: 'Az állítás vektoros bizonyítása a leggyorsabb; az elemi bizonyítás a középponti vetítést (homotéciát) használja $S$ körül $-\\frac12$ aránnyal.'
      },
      {
        theoremNumber: 5,
        title: 'Szögfelező-tétel',
        statementLatex: '\\frac{BD}{DC}=\\frac{AB}{AC}',
        proofTitle: 'Bizonyítás párhuzamossal',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Párhuzamos szelők',
            latexContent: 'CE\\parallel AD, \\quad E\\in AB \\ \\angle ACE=\\angle CAD=\\angle DAB=\\angle AEC \\ \\frac{BD}{DC}=\\frac{AB}{AE}=\\frac{AB}{AC}',
            explanation: 'Cél: belátni, hogy Szögfelező-tétel. A $C$ csúcson át párhuzamost húzunk a szögfelezővel; ez az $AB$ egyenesét $E$-ben metszi. Ez előkészíti a következő lépést (Segédegyenes). A párhuzamosok miatt a váltószögek egyenlők; így az $ACE$ háromszög egyenlő szárú, $AC=AE$. A párhuzamos szelők tételét alkalmazzuk az $ABE$ háromszögre; $AE=AC$ helyettesítéssel adódik az állítás. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Háromszög területe: $T=rs$ és $R=\\frac{abc}{4T}$.',
      'A súlypont helyvektora a csúcsok helyvektorainak átlaga.',
      'Szögfelező-tétel oldalarányokhoz, szögfelező hosszához.',
      'Hozzáírt körök sugara és érintési pontjai.',
      'Kilencpontos kör szerkesztése, Euler-egyenes ábrázolása.'
    ],
    applicationsOutside: [
      'Háromszög alakú lemez tömegközéppontja a súlypont (statika).',
      'Építészet: tartószerkezetek, háromszög alakú rácsostartók.',
      'Háromszögelés (trianguláció): köré írt körök és távolságok.',
      'Grafika: háromszöghálók, beírt körök, súlypont-alapú interpoláció.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Egy $9$, $12$, $15$ oldalú háromszögben határozd meg a beírt és a köré írt kör sugarát!',
        solutionLatex: 'T=\\frac{9\\cdot12}{2}=54, \\quad s=18, \\quad r=\\frac{T}{s}=3, \\quad R=\\frac{abc}{4T}=\\frac{9\\cdot12\\cdot15}{216}=7{,}5.',
        explanation: 'A $9$–$12$–$15$ háromszög derékszögű, mert $9^2+12^2=15^2$; ezért $R=\\frac{c}{2}=7{,}5$ is adódik. A beírt kör sugara derékszögű háromszögben $r=\\frac{a+b-c}{2}=\\frac{9+12-15}{2}=3$.'
      },
      {
        problemNumber: 2,
        question: 'Egy háromszögben $AB=8$, $AC=6$, a belső szögfelező a $BC$ oldalt $D$-ben metszi. Milyen arányban osztja $D$ a $BC$ oldalt?',
        solutionLatex: '\\frac{BD}{DC}=\\frac{AB}{AC}=\\frac{8}{6}=\\frac43.',
        explanation: 'A szögfelező-tétel szerint a szemközti oldalt a szomszédos oldalak arányában osztja. Ha $BC=14$, akkor $BD=8$ és $DC=6$; ha $BC$ más, az arány ugyanígy $4:3$.'
      },
      {
        problemNumber: 3,
        question: 'Egy háromszög csúcsainak koordinátái $A(0,0)$, $B(6,0)$, $C(0,8)$. Határozd meg a súlypontot, a köré írt kör középpontját és a magasságpontot!',
        solutionLatex: 'S\\left(2,\\frac83\\right), \\quad K(3,4), \\quad M(0,0); \\quad \\text{ellenőrzés: } \\vec s=\\frac{2\\vec k+\\vec m}{3}=\\left(2,\\frac83\\right).',
        explanation: 'A háromszög derékszögű az $A$ csúcsban, ezért a magasságpont $A(0,0)$, a köré írt kör középpontja az átfogó felezőpontja: $K(3,4)$. A súlypont a csúcsok átlaga: $S(2,\\frac83)$. Az Euler-egyenes aránya is teljesül: $\\frac{2K+M}{3}=(2,\\frac83)=S$.'
      },
      {
        problemNumber: 4,
        question: 'Egy egyenlő oldalú háromszög oldala $6$ cm. Határozd meg $R$, $r$, a területet és a magasságot!',
        solutionLatex: 'm=\\frac{\\sqrt3}{2}\\cdot6=3\\sqrt3, \\quad T=\\frac{\\sqrt3}{4}\\cdot36=9\\sqrt3, \\quad R=\\frac{a}{\\sqrt3}=2\\sqrt3, \\quad r=\\frac{a}{2\\sqrt3}=\\sqrt3.',
        explanation: 'Szabályos háromszögben $R=2r$ és $r=\\frac{m}{3}$. A magasság $3\\sqrt3$, harmada $\\sqrt3$; a köré írt kör sugara $2\\sqrt3$. Ellenőrzés: $R=\\frac{abc}{4T}=\\frac{216}{36\\sqrt3}=2\\sqrt3$.'
      },
      {
        problemNumber: 5,
        question: 'Egy háromszög oldalai $13$, $14$, $15$. Számítsd ki a beírt kör sugarát és a hozzáírt körök sugarait!',
        solutionLatex: 's=21, \\quad T=\\sqrt{21\\cdot8\\cdot7\\cdot6}=84, \\quad r=4; \\quad r_a=\\frac{84}{8}=10{,}5, \\quad r_b=\\frac{84}{7}=12, \\quad r_c=\\frac{84}{6}=14.',
        explanation: 'Hérón-képlettel $T=84$. A beírt kör sugara $r=\\frac{T}{s}=4$; a hozzáírt köröknél a nevező $s-a$, $s-b$, $s-c$. Ellenőrzés: $\\frac1r=\\frac1{r_a}+\\frac1{r_b}+\\frac1{r_c}$, azaz $\\frac14=\\frac{1}{10{,}5}+\\frac{1}{12}+\\frac{1}{14}$ közelítőleg teljesül.'
      },
      {
        problemNumber: 6,
        question: 'Egy háromszögben $R=10$ és a $60^\\circ$-os szöggel szemközti oldal $a$. Mekkora $a$?',
        solutionLatex: 'a=2R\\sin\\alpha=2\\cdot10\\cdot\\sin60^\\circ=20\\cdot\\frac{\\sqrt3}{2}=10\\sqrt3\\approx17{,}32.',
        explanation: 'A szinusztétel szerint $\\frac{a}{\\sin\\alpha}=2R$. Ez a köré írt kör sugarának közvetlen alkalmazása, és egyben a szinusztétel leggyorsabb felhasználási módja.'
      }
    ],
    oralPresentationOutline: [
      'Oldalfelező merőlegesek → körülírt kör középpontja',
      'Szögfelezők → beírt kör középpontja',
      'Magasságok → magasságpont',
      'Súlyvonalak → súlypont; 2:1 arány',
      'Euler-egyenes (emelt: magasságpont, súlypont, körülírtközép)',
      'Kapcsolatok / képletek (r, R) ha szerepelnek',
      'Szóbeli: mind a 4 nevezetes pont + egy bizonyításvázlat'
    ],
    requiredDefinitions: [
      {
        term: 'Súlyvonal',
        definitionLatex: 'AS_a, \\quad S_a=\\text{a szemközti oldal felezőpontja}',
        explanation: 'A csúcsot a szemközti oldal felezőpontjával összekötő szakasz; a három súlyvonal a súlypontban metszi egymást.'
      },
      {
        term: 'Beírt kör',
        definitionLatex: 'r=\\frac{T}{s}',
        explanation: 'A három oldalt belülről érintő kör; középpontja a belső szögfelezők metszéspontja.'
      },
      {
        term: 'Köré írt kör',
        definitionLatex: 'R=\\frac{abc}{4T}',
        explanation: 'A három csúcson átmenő kör; középpontja az oldalfelező merőlegesek metszéspontja.'
      },
      {
        term: 'Euler-egyenes',
        definitionLatex: 'K,S,M \\text{ kollineáris}, \\quad KS:SM=1:2',
        explanation: 'A köré írt kör középpontján, a súlyponton és a magasságponton átmenő egyenes.'
      },
      {
        term: 'Szögfelező-tétel',
        definitionLatex: '\\frac{BD}{DC}=\\frac{AB}{AC}',
        explanation: 'A belső szögfelező a szemközti oldalt a szomszédos oldalak arányában osztja.'
      }
    ],
    memorizationMaterial: `## Bemagolandó — Háromszög nevezetes vonalai, pontjai, körei

### Fő állítások

$KS:SM=1:2, \quad T=rs=\frac{abc}{4R}, \quad r=\frac{T}{s}, \quad R=\frac{abc}{4T}, \quad \frac{BD}{DC}=\frac{c}{b}$

**Jelölés (egységes):** $K$ = köré írt középpont, $O$ = beírt középpont, $S$ = súlypont, $M$ = magasságpont; $s=(a+b+c)/2$.

### Fogalmak

**Oldalfelező merőleges** → köré írt kör középpontja $K$, sugár $R$.
**Szögfelező** → beírt kör középpontja $O$, sugár $r$. Szögfelező-tétel: $\frac{BD}{DC}=\frac{AB}{AC}=\frac{c}{b}$.
**Súlyvonal** → súlypont $S$, $AS:SF=2:1$ (csúcstól).
**Magasság** → magasságpont $M$.
**Középvonal:** párhuzamos a harmadik oldallal, hossza annak fele.
**Hozzáírt kör:** egy belső + két külső szögfelező; $r_a=T/(s-a)$ (ciklikusan).
**Feuerbach-kör (kilencpontos):** oldalfelezők, magasságtalppontok, $CM$ felezők; sugár $R/2$.
**Euler-egyenes:** $K$, $S$, $M$ egy egyenesen; $KS:SM=1:2$.

### Tételek
1. Oldalfelező merőlegesek egy pontban (köréírható kör).
2. Szögfelezők egy pontban (beírható kör).
3. Súlyvonalak egy pontban; $2:1$ arány.
4. Magasságok egy pontban.
5. Szögfelező-tétel.
6. Euler: $K,S,M$ kollineárisak, $KS:SM=1:2$.

### Képletek
$T=rs=\frac{abc}{4R}$; $r=T/s$; $R=abc/(4T)=a/(2\sin\alpha)$; $s_a=\tfrac12\sqrt{2b^2+2c^2-a^2}$.

### Csapda
Tompaszögűben $K$ és $M$ kívül van; $S$ és $O$ mindig belül. Ne cseréld fel $K$-t és $O$-t!`,
    oralExamPlan: "## Szóbeli felelet vázlata — 13. tétel\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nÍv: négy vonal → négy pont → beírt/köréírt/hozzáírt → Euler/Feuerbach → bizonyítás → feladat.\n\n### 0:00–1:30 · Bevezetés\nNevezetes pontok mint együttjáró metszéspontok; Euler-egyenes; Feuerbach.\n\n### 1:30–5:00 · Definíció (2 pont)\nSúlyvonal / beírt kör / köré írt kör / szögfelező — rajzzal. Jelölés: $K$, $O$, $S$, $M$.\n\n### 5:00–8:00 · Áttekintés\nOldalfelező→$K$; szögfelező→$O$; súlyvonal→$S$ ($2:1$); magasság→$M$; hozzáírt $r_a$; Euler: $K,S,M$, $KS:SM=1:2$.\n\n### 8:00–13:00 · Tétel + bizonyítás (6 pont)\n**Ajánlott:** oldalfelező merőlegesek (egyenlő távolság) vagy súlypont $2:1$; vagy szögfelező-tétel.\n\n### 13:00–15:00 · Alkalmazások (4 pont)\nSzerkesztés; $T=rs$; $R=abc/(4T)$; Euler-egyenes.\n\n### 15:00–18:30 · Feladat (8 pont)\nSzerkesztés / $R,r$ / súlypont / szögfelező arány. Ábra!\n\n### 18:30–19:30 · Zárás\nTompaszögnél $K,M$ kívül; ne keverd $K$-t (köré) és $O$-t (beírt).\n\n### Pontozás\nSzerkezet 10 · Def 2 · Tétel+biz 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5 = **35**",
    examinerTraps: [
      {
        question: 'A magasságpont mindig a háromszög belsejében van?',
        answer: 'Nem. Hegyesszögűben belül, derékszögűben a derékszögű csúcsban, tompaszögűben kívül. Az Euler-egyenes és a Feuerbach-kör vizsgálatánál ezt az esetet külön kell kezelni.',
        dangerLevel: 'Magas'
      },
      {
        question: 'A súlypont melyik arányban osztja a súlyvonalat?',
        answer: 'A csúcstól számítva $2:1$ arányban: a csúcs és a súlypont közötti rész kétszer akkora, mint a súlypont és az oldalfelezőpont közötti. A felületes válasz gyakran $1:2$-t mond, ami a rossz irány.',
        dangerLevel: 'Magas'
      },
      {
        question: 'Minden háromszögnek van beírt és köré írt köre?',
        answer: 'Igen, minden nem elfajuló háromszögnek egy-egy beírt és köré írt köre van. Hozzáírt körből viszont három van, és ezek középpontjai a belső és külső szögfelezők metszéspontjai.',
        dangerLevel: 'Közepes'
      },
      {
        question: 'A szögfelező-tétel külső szögfelezőre is igaz?',
        answer: 'A külső szögfelezőre a megfelelő alak $\\frac{BD}{DC}=\\frac{AB}{AC}$, de $D$ a $BC$ szakaszon kívül van, ezért előjeles arányokkal kell dolgozni. A belső és külső szögfelező egymásra merőleges.',
        dangerLevel: 'Magas'
      }
    ],
    applications: [
      {
        title: 'Háromszög körei',
        problem: '$9$, $12$, $15$ oldalú háromszög $r$, $R$',
        solutionLatex: 'r=3, \\quad R=7{,}5'
      },
      {
        title: 'Szögfelező-tétel',
        problem: '$AB=8$, $AC=6$, $BD:DC=?$',
        solutionLatex: 'BD:DC=4:3'
      }
    ],
    scoringBreakdown: [
      {
        criterion: 'I. Tartalom',
        points: 10,
        description: 'Nevezetes vonalak, pontok, körök, Euler-egyenes.'
      },
      {
        criterion: 'II. Definíció',
        points: 2,
        description: 'Súlyvonal, beírt/köré írt kör.'
      },
      {
        criterion: 'III. Bizonyítás',
        points: 6,
        description: 'Súlypont aránya vagy szögfelező-tétel.'
      },
      {
        criterion: 'IV. Feladat',
        points: 8,
        description: '$r$, $R$, szögfelező arány.'
      },
      {
        criterion: 'V. Alkalmazás',
        points: 4,
        description: 'Statika, építészet, Euler.'
      },
      {
        criterion: 'VI. Szaknyelv',
        points: 5,
        description: 'Geometriai jelölések, pontnevek.'
      }
    ],
    historicalContext: 'Euklidész Elemek IV. könyve: beírt és köré írt kör szerkesztése. Euler (1765): az Euler-egyenes. Feuerbach (1822): a kilencpontos kör. Apollóniosz: a súlyvonal hosszának tétele.',
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 13. Tétel (90–97. oldal): Az Euler-egyenes arányát ($KS:SM=1:2$) és a Feuerbach-kört is említsd!',
    visualizerType: 'triangle',
  },
  {
    id: 'tétel-14',
    number: 14,
    title: 'Összefüggések az általános háromszögek oldalai között, szögei között, oldalai és szögei között',
    category: 'Geometria és trigonometria',
    tags: ['Szinusztétel', 'Koszinusztétel', 'Hérón-képlet', 'Háromszög-egyenlőtlenség', '2R', 'Kétértelmű eset'],
    difficulty: '3: trückös',
    summary: 'Háromszög-egyenlőtlenség, belső és külső szögek, hosszabb oldallal szemben nagyobb szög. Szinusztétel és koszinusztétel bizonyítással, a kétértelmű SSA-eset. Területképletek: $\\frac12 ab\\sin\\gamma$, Hérón, $rs$, $\\frac{abc}{4R}$. A háromszög megoldásának alapesetei.',
    statementLatex: '\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2R, \\quad c^2=a^2+b^2-2ab\\cos\\gamma',
    conditionsLatex: 'a,b,c>0, \\quad \\alpha+\\beta+\\gamma=180^\\circ',
    formulaSheetReference: 'Hivatalos Képlettár 2026: szinusz- és koszinusztétel, területképletek',
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) – Geometria és trigonometria, 7–8. oldal'
    ],
    introduction: `Az általános háromszögek trigonometriai összefüggései az ókori csillagászat és földmérés gyakorlati igényeiből fejlődtek ki.

A szinusztételt a középkori arab és perzsa csillagászok (Abu al-Wafa, Naszír al-Dín at-Túszi) fogalmazták meg sík és gömbháromszögekre; a koszinusztétel modern alakja a 16–17. századi trigonometriai munkákban jelent meg.

A két tétel együtt teszi lehetővé, hogy három független adatból (oldal vagy szög) a háromszög minden további eleme kiszámítható legyen.

A szóbelin kiemelt szerepe van a **kétértelmű esetnek**: ez az egyetlen hely a témakörben, ahol egy feladatnak két különböző megoldása is lehet, és ezt a vizsgáztató szinte mindig megkérdezi.`,
    detailedTheory: `### 1. Alapösszefüggések

- **Háromszög-egyenlőtlenség:** bármely két oldal összege nagyobb a harmadiknál: $a+b>c$, $a+c>b$, $b+c>a$. Ekvivalens alak: $|a-b|<c<a+b$. Egyenlőség csak elfajuló (egy egyenesbe eső) esetben lehetséges.

- **Szögek összege:** $\\alpha+\\beta+\\gamma=180^\\circ$. A külső szögek összege $360^\\circ$; egy külső szög egyenlő a két nem mellette fekvő belső szög összegével (külsőszög-tétel).

- **Oldal–szög kapcsolat:** nagyobb oldallal szemben nagyobb szög van, és megfordítva. Ez a rendezés alapja: a háromszög oldalai és a szemközti szögek ugyanabban a sorrendben rendezhetők.

- **Szigorú egyenlőtlenség:** egyenlő oldalakkal szemben egyenlő szögek vannak (egyenlő szárú háromszög tétele), és megfordítva.

- **Terület és kerület:** $K=a+b+c$, $s=\\frac{K}{2}$.

### 2. Szinusztétel

- **Kimondás:** bármely háromszögben
  $$\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2R,$$
  ahol $R$ a köré írt kör sugara.

- **Bizonyítás ötlete:** a $c$ oldalhoz tartozó magasságot kétféleképpen írjuk fel: $m_c=a\\sin\\beta=b\\sin\\alpha$. Ebből $\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}$; a harmadik arány ugyanígy adódik. A $2R$ kapcsolat a köré írt körből: az $a$ húrhoz tartozó kerületi szög $\\alpha$, a középponti szög $2\\alpha$, ezért $a=2R\\sin\\alpha$.

- **Használat:** ha ismert két szög és egy oldal (ASA/AAS), vagy két oldal és az egyikkel szemközti szög (SSA), a tétel közvetlenül alkalmazható.

- **Kétértelmű eset (SSA):** adott $a$, $b$ és az $a$-val szemközti $\\alpha$. Ekkor
  $$\\sin\\beta=\\frac{b\\sin\\alpha}{a}.$$
  Ha $\\sin\\beta<1$, két szög jöhet szóba: $\\beta$ és $180^\\circ-\\beta$. Mindkettőt ellenőrizni kell: csak akkor érvényes, ha $\\alpha+\\beta<180^\\circ$.
  - Ha $a<b$ és $\\alpha<90^\\circ$: általában **két** megoldás lehet.
  - Ha $a\\ge b$: egy megoldás.
  - Ha $a<b\\sin\\alpha$: nincs megoldás (a szinusz értéke 1-nél nagyobb lenne).

- **Geometriai magyarázat:** a megadott $\\alpha$ szöghöz tartozó látószögköríven a $b$ hosszú oldal végpontja két helyen is elhelyezkedhet, ezért két háromszög lehetséges.

### 3. Koszinusztétel

- **Kimondás:**
  $$c^2=a^2+b^2-2ab\\cos\\gamma,$$
  és ciklikusan: $a^2=b^2+c^2-2bc\\cos\\alpha$, $b^2=a^2+c^2-2ac\\cos\\beta$.

- **Bizonyítás:** vektorosan $\\vec c=\\vec a-\\vec b$, négyzetre emelve $c^2=a^2+b^2-2\\vec a\\cdot\\vec b$, és $\\vec a\\cdot\\vec b=ab\\cos\\gamma$. (Lásd a bizonyítások között.)

- **Derékszög esete:** $\\gamma=90^\\circ$ → $\\cos\\gamma=0$ → $c^2=a^2+b^2$: visszakapjuk a Pitagorasz-tételt. A koszinusztétel tehát a Pitagorasz-tétel általánosítása.

- **Szög kiszámítása:** $\\cos\\gamma=\\dfrac{a^2+b^2-c^2}{2ab}$.

- **A háromszög szög szerinti osztályozása:** a legnagyobb oldal $c$ ellenében
  - $c^2<a^2+b^2$ → hegyesszögű;
  - $c^2=a^2+b^2$ → derékszögű;
  - $c^2>a^2+b^2$ → tompaszögű.

- **Használat:** SSS (három oldal) és SAS (két oldal és a közbezárt szög) esetén ez a tétel a célravezető.

### 4. Területképletek

- **Két oldal és a közbezárt szög:** $T=\\frac12 ab\\sin\\gamma=\\frac12 ac\\sin\\beta=\\frac12 bc\\sin\\alpha$.

- **Beírt körrel:** $T=rs$, ahol $s=\\frac{a+b+c}{2}$.

- **Köré írt körrel:** $T=\\frac{abc}{4R}$.

- **Hérón-képlet:** $T=\\sqrt{s(s-a)(s-b)(s-c)}$.

- **Vektoros/koszinuszos alak:** a fenti képletek mindegyike levezethető a szinuszos területképletből és a szinusztételből.

- **Terület és szög:** $T=\\frac{a^2\\sin\\beta\\sin\\gamma}{2\\sin\\alpha}$ — akkor hasznos, ha két szög és egy oldal ismert.

### 5. A háromszög megoldásának alapesetei

| Adott adatok | Módszer | Megoldások száma |
|---|---|---|
| SSS (három oldal) | koszinusztétel, majd szinusztétel | 1 (ha teljesül a háromszög-egyenlőtlenség) |
| SAS (két oldal + közbezárt szög) | koszinusztétel | 1 |
| ASA/AAS (két szög + egy oldal) | szinusztétel (harmadik szög: $180^\\circ$ összeg) | 1 |
| SSA (két oldal + nem közbezárt szög) | szinusztétel | 0, 1 vagy 2 |

- **Ajánlott sorrend:** először mindig rajzoljunk vázlatot, jelöljük a ismert és keresett mennyiségeket, majd válasszuk ki a tételt aszerint, hogy mi ismert és mi a keresett.

- **Ellenőrzés:** a kapott szögek összege $180^\\circ$ legyen; a kapott oldalakra teljesüljön a háromszög-egyenlőtlenség; a legnagyobb oldallal szemben a legnagyobb szög álljon.

### 6. Nevezetes alkalmazások

- **Földmérés (trianguláció):** két ismert pontból mért szögekből a harmadik pont távolsága szinusztétellel számítható; a módszer a 18–19. századi térképészet alapja.

- **Fizika:** két erő eredőjének nagysága a koszinusztétellel: $F^2=F_1^2+F_2^2+2F_1F_2\\cos\\varphi$ (a bezárt szög kiegészítő szögével).

- **Navigáció és csillagászat:** irányszögek és távolságok; gömbháromszögek esetén a síkbeli tételek gömbváltozatai.

- **Építészet:** tetőszerkezetek ferde síkjai, háromszög alakú tartók méretezése.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'Szinusztétel',
        statementLatex: '\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2R',
        proofTitle: 'Bizonyítás magassággal és a köré írt körrel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'a/sin α = 2R',
            latexContent: '\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}=2R',
            explanation: 'Egyszerű út magassággal: az A csúcsból a BC-re emelt m magasságra m = b sin γ = c sin β, innen b/sin β = c/sin γ. Ugyanígy a többi arány. Erősebb alak: a köré írt körben a kerületi szög és a húr miatt a = 2R sin α (átmérős Thalész-helyzet / területképlet), tehát a/sin α = 2R. Használat: két oldal + nemközrezárt szög, vagy két szög + egy oldal.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'Koszinusztétel',
        statementLatex: 'c^2=a^2+b^2-2ab\\cos\\gamma',
        proofTitle: 'Bizonyítás skaláris szorzattal (vagy Pitagorasz + vetület)',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'c² = a² + b² − 2ab cos γ',
            latexContent: 'c^2=a^2+b^2-2ab\\cos\\gamma',
            explanation: 'Vektorosan: legyen c = a − b (oldalvektorok). Ekkor |c|² = (a−b)·(a−b) = |a|²+|b|²−2 a·b = a²+b²−2ab cos γ, ahol γ a két oldal közti szög. Elemi út: a magasság egyik befogóra; Pitagorasz a két derékszögű darabon, a koszinusz a vetület. Ha γ=90°, cos γ=0 → Pitagorasz. Ha γ tompaszög, cos negatív, c² > a²+b² — ez is stimmel.'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'A trigonometrikus területképlet',
        statementLatex: 'T=\\frac12 ab\\sin\\gamma',
        proofTitle: 'Magasság kifejezése szögfüggvénnyel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Ciklikus változatok',
            latexContent: 'm_b=a\\sin\\gamma \\ T=\\frac12 b\\,m_b=\\frac12 ab\\sin\\gamma \\ T=\\frac12 bc\\sin\\alpha=\\frac12 ac\\sin\\beta',
            explanation: 'Cél: belátni, hogy A trigonometrikus területképlet. A $b$ oldalhoz tartozó magasság az $a$ oldal és a $\\gamma$ szög szinuszának szorzata; tompaszög esetén a magasság $a\\sin(180^\\circ-\\gamma)=a\\sin\\gamma$. A háromszög területképletébe ($\\frac12\\cdot$ alap $\\cdot$ magasság) helyettesítünk. Ez előkészíti a következő lépést (Behelyettesítés). A szerepek ciklikus felcserélésével a másik két szög-párra is felírható ugyanez. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 4,
        title: 'Hérón-képlet',
        statementLatex: 'T=\\sqrt{s(s-a)(s-b)(s-c)}',
        proofTitle: 'Bizonyítás a koszinusztétellel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Hérón alak',
            latexContent: 'T^2=s(s-a)(s-b)(s-c)',
            explanation: 'Cél: belátni, hogy Hérón-képlet. Kiindulunk a trigonometrikus területképletből. Ez előkészíti a következő lépést (Terület szinuszos alakja). A $\\gamma$ szög koszinuszát a koszinusztételből fejezzük ki. Ez előkészíti a következő lépést (Koszinusztétel). Közös nevezőre hozás után a számláló nevezetes szorzattá alakítható. Ez előkészíti a következő lépést (Szinusz négyzete). Két négyzet különbsége: $4a^2b^2=(2ab)^2$, majd az $(a^2+b^2-c^2)$ kifejezéssel alkalmazzuk az $x^2-y^2$ azonosságot. A tényezők tovább bontva $(a+b+c)(a+b-c)(c+a-b)(c-a+b)$ alakúak, ami a félkerülettel éppen a Hérón-képlet négyzetét adja. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ],
        notes: 'A levezetés lényege, hogy $\\sin\\gamma$-t algebrai úton fejezzük ki az oldalakból; a gyökvonásnál a pozitív előjelet választjuk, mert a terület nemnegatív.'
      },
      {
        theoremNumber: 5,
        title: 'Nagyobb oldallal szemben nagyobb szög',
        statementLatex: 'a>b \\iff \\alpha>\\beta',
        proofTitle: 'Bizonyítás szinusztétellel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Következtetés',
            latexContent: '\\frac{a}{b}=\\frac{\\sin\\alpha}{\\sin\\beta} \\ a>b \\iff \\sin\\alpha>\\sin\\beta \\ \\alpha+\\beta<180^\\circ \\implies \\alpha>\\beta \\iff \\sin\\alpha>\\sin\\beta \\ a>b \\iff \\alpha>\\beta',
            explanation: 'Cél: belátni, hogy Nagyobb oldallal szemben nagyobb szög. A szinusztételből az oldalak aránya a szemközti szögek szinuszának arányával egyenlő. Ez előkészíti a következő lépést (Szinusztétel). A háromszög szögeire $\\alpha,\\beta\\in(0,180^\\circ)$, és a szinusz ezen a tartományon nem monoton — ezért itt óvatosan kell érvelni. Két olyan szögre, amelyek összege $180^\\circ$ alatt van, a szinusz szigorúan monoton nő; ezért az összehasonlítás érvényes marad. A lépések megfordíthatók, így az ekvivalencia mindkét irányban teljesül. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Hiányzó oldal vagy szög meghatározása (SSS, SAS, ASA, SSA).',
      'Terület, beírt és köré írt kör sugara: $T=rs=\\frac{abc}{4R}$.',
      'A háromszög szög szerinti osztályozása oldalakból.',
      'Kétértelmű eset kezelése, megoldások számának eldöntése.'
    ],
    applicationsOutside: [
      'Földmérés és geodézia: háromszögelés, távolságmeghatározás.',
      'Fizika: erők eredője, ferde hajítás, vektorháromszögek.',
      'Navigáció és csillagászat: irányszögek, láthatóság, távolság.',
      'Építészet: tetők, rácsostartók, ferde szerkezetek méretezése.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Két oldal $5$ és $8$ cm, a közbezárt szög $60^\\circ$. Határozd meg a harmadik oldalt és a háromszög területét!',
        solutionLatex: 'c^2=5^2+8^2-2\\cdot5\\cdot8\\cos60^\\circ=25+64-40=49 \\implies c=7; \\quad T=\\frac12\\cdot5\\cdot8\\cdot\\sin60^\\circ=10\\sqrt3\\approx17{,}32.',
        explanation: 'Koszinusztétel az oldalra, trigonometrikus területképlet a területre. Ellenőrzés: a $7$ cm-es oldallal a háromszög oldalai $5,7,8$, és $25+49=74>64$, tehát hegyesszögű.'
      },
      {
        problemNumber: 2,
        question: 'Egy háromszög oldalai $6$, $8$, $10$. Számítsd ki a területét Hérón-képlettel, majd a köré írt kör sugarát!',
        solutionLatex: 's=12, \\quad T=\\sqrt{12\\cdot6\\cdot4\\cdot2}=\\sqrt{576}=24; \\quad R=\\frac{abc}{4T}=\\frac{480}{96}=5.',
        explanation: 'A $6$–$8$–$10$ háromszög derékszögű, ezért $T=\\frac12\\cdot6\\cdot8=24$ és $R=\\frac{c}{2}=5$ — a Hérón-képlet és a képlet ugyanezt adja, ami jó ellenőrzés.'
      },
      {
        problemNumber: 3,
        question: 'Egy háromszög oldalai $7$, $8$, $9$. Mekkora a $9$-cel szemközti szög?',
        solutionLatex: '\\cos\\gamma=\\frac{7^2+8^2-9^2}{2\\cdot7\\cdot8}=\\frac{32}{112}=\\frac27 \\implies \\gamma\\approx73{,}4^\\circ.',
        explanation: 'SSS-eset: a koszinusztételt a keresett szögre rendezzük. Mivel $\\cos\\gamma>0$, a szög hegyesszög; a legnagyobb oldallal szemben ez a legnagyobb szög, és valóban hegyesszögű a háromszög.'
      },
      {
        problemNumber: 4,
        question: 'Egy háromszögben $a=6$, $b=8$ és $\\alpha=30^\\circ$. Hány megoldás van, és mekkorák a hiányzó adatok?',
        solutionLatex: '\\sin\\beta=\\frac{8\\sin30^\\circ}{6}=\\frac23 \\implies \\beta_1\\approx41{,}81^\\circ, \\ \\beta_2\\approx138{,}19^\\circ; \\quad \\gamma_1\\approx108{,}19^\\circ, \\ \\gamma_2\\approx11{,}81^\\circ.',
        explanation: 'Két megoldás van, mert $a<b$ és $\\alpha<90^\\circ$. Mindkét szög esetén $\\alpha+\\beta<180^\\circ$, tehát mindkettő érvényes. A harmadik oldal szinusztétellel: $c_1=\\frac{6\\sin108{,}19^\\circ}{\\sin30^\\circ}\\approx11{,}40$, $c_2=\\frac{6\\sin11{,}81^\\circ}{\\sin30^\\circ}\\approx2{,}46$.'
      },
      {
        problemNumber: 5,
        question: 'Egy $13$, $14$, $15$ oldalú háromszögben mekkora a köré írt kör sugara és a beírt kör sugara?',
        solutionLatex: 's=21, \\quad T=84; \\quad R=\\frac{13\\cdot14\\cdot15}{4\\cdot84}=\\frac{2730}{336}=8{,}125, \\quad r=\\frac{84}{21}=4.',
        explanation: 'Először Hérón-képlettel a terület: $\\sqrt{21\\cdot8\\cdot7\\cdot6}=84$. Innen $R=\\frac{abc}{4T}$ és $r=\\frac{T}{s}$ közvetlenül adódik.'
      },
      {
        problemNumber: 6,
        question: 'Két hajó között $20$ km a távolság. Az egyikből a másik felé mutató irány és a partvonál szöge $50^\\circ$, a másikból $60^\\circ$. Milyen messze van a parton álló kikötő az egyes hajóktól?',
        solutionLatex: '\\gamma=180^\\circ-50^\\circ-60^\\circ=70^\\circ; \\quad d_1=\\frac{20\\sin60^\\circ}{\\sin70^\\circ}\\approx18{,}44, \\quad d_2=\\frac{20\\sin50^\\circ}{\\sin70^\\circ}\\approx16{,}30.',
        explanation: 'A két hajó és a kikötő háromszöget alkot; ismert egy oldal és két szög (ASA), ezért a szinusztétel használható. A harmadik szög $70^\\circ$, a keresett távolságok a megfelelő szemközti szögekkel arányosak.'
      }
    ],
    oralPresentationOutline: [
      'Koszinusztétel: c²=a²+b²−2ab cosγ',
      'Szinusztétel: a/sinα = b/sinβ = c/sinγ = 2R',
      'Mikor melyiket: oldalak ↔ szögek',
      'Területképletek: (1/2)ab sinγ, Heron',
      'Egyenlőtlenségek: háromszög-egyenlőtlenség',
      'Egyértelműség / megoldások száma (SSA csapda)',
      'Szóbeli: mindkét tétel + egy területképlet + példa'
    ],
    requiredDefinitions: [
      {
        term: 'Szinusztétel',
        definitionLatex: '\\frac{a}{\\sin\\alpha}=2R',
        explanation: 'Bármely háromszögben az oldal és a szemközti szög szinuszának aránya állandó, egyenlő a köré írt kör átmérőjével.'
      },
      {
        term: 'Koszinusztétel',
        definitionLatex: 'c^2=a^2+b^2-2ab\\cos\\gamma',
        explanation: 'Az oldal négyzete a másik két oldal négyzetösszegéből a közbezárt szög koszinuszos tagjának levonásával adódik.'
      },
      {
        term: 'Háromszög-egyenlőtlenség',
        definitionLatex: '|a-b|<c<a+b',
        explanation: 'Három szakaszból pontosan akkor szerkeszthető háromszög, ha bármely kettő összege nagyobb a harmadiknál.'
      },
      {
        term: 'Kétértelmű eset',
        definitionLatex: '\\sin\\beta=\\frac{b\\sin\\alpha}{a}',
        explanation: 'Két oldal és a rövidebbel szemközti szög esetén a szinusz két szöget is adhat; a szögek összegével kell dönteni.'
      }
    ],
    memorizationMaterial: `## Bemagolandó — Összefüggések az általános háromszögben

### Fő állítások

$\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}=2R$

$c^2=a^2+b^2-2ab\cos\gamma$

$T=\frac12 ab\sin\gamma=\sqrt{s(s-a)(s-b)(s-c)}=r\cdot s=\frac{abc}{4R}$

**Feltételek:** $s=(a+b+c)/2$; háromszög-egyenlőtlenség: $a+b>c$ (ciklikusan).

### Definíciók
**Szinusztétel / koszinusztétel** — fent. $\cos$ előjele: hegyes $>0$, tompa $<0$, derékszög $=0$.
**Kétértelmű eset (SSA):** 0, 1 vagy 2 háromszög lehetséges.
**Szögösszeg:** $\alpha+\beta+\gamma=180^\circ$; nagyobb oldallal szemben nagyobb szög.

### Tételek
1. Szinusztétel (területes / $2R$).
2. Koszinusztétel (magasság / Pitagorasz-kiterjesztés).
3. Hérón-képlet.
4. $T=rs$ és $T=abc/(4R)$.
5. Szögösszeg $180^\circ$; oldal–szög monotonitás.

### Csapdák
SSA kétértelműség; koszinusznál a szög melletti oldal a bal oldal; $\gamma=90^\circ\Rightarrow$ koszinusz = Pitagorasz.`,
    oralExamPlan: "## Szóbeli felelet vázlata — 14. tétel\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nÍv: oldal–szög → szinusz/koszinusz → terület → egyenlőtlenség → bizonyítás → feladat.\n\n### 0:00–1:30 · Bevezetés\nÁltalános háromszög: Pitagorasz csak derékszögnél; kell a koszinusz. Szinusz: $2R$.\n\n### 1:30–4:30 · Definíció (2 pont)\nSzinusz- vagy koszinusztétel; vagy háromszög-egyenlőtlenség.\n\n### 4:30–10:30 · Tétel + bizonyítás (6 pont)\n**Ajánlott:** szinusztétel ($T=\\frac12 ab\\sin\\gamma$ / $a=2R\\sin\\alpha$); vagy koszinusztétel magassággal.\n\n### 10:30–13:30 · Alkalmazások (4 pont)\nHáromszögmegoldás; földmérés; Hérón.\n\n### 13:30–17:30 · Feladat (8 pont)\nHiányzó oldal/szög; terület; figyeld a kétértelmű esetet.\n\n### 17:30–19:30 · Zárás\nDerékszögű határ: koszinusz→Pitagorasz.\n\n### Pontozás\nSzerkezet 10 · Def 2 · Tétel+biz 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5 = **35**",
    examinerTraps: [
      {
        question: 'Mikor lehet két megoldása a szinusztételes feladatnak?',
        answer: 'Két oldal és a rövidebb oldallal szemközti szög esetén (SSA), mert a $\\sin\\beta$ értékhez $\\beta$ és $180^\\circ-\\beta$ is tartozhat. Mindig ellenőrizni kell, hogy a szögek összege $180^\\circ$ marad-e.',
        dangerLevel: 'Magas'
      },
      {
        question: 'Mi történik a koszinusztétellel derékszög esetén?',
        answer: '$\\cos90^\\circ=0$, ezért $c^2=a^2+b^2$ — visszakapjuk a Pitagorasz-tételt. A koszinusztétel tehát nem „másik” tétel, hanem a Pitagorasz általánosítása.',
        dangerLevel: 'Közepes'
      },
      {
        question: 'A szinusztételből mindig kiszámítható a szög egyértelműen?',
        answer: 'Nem. A szinusz a $(0,180^\\circ)$ intervallumon nem injektív: egy értékhez két szög tartozhat. Ezért kell a kétértelmű esetet mindig megvizsgálni, és a háromszög-egyenlőtlenséget is ellenőrizni.',
        dangerLevel: 'Magas'
      },
      {
        question: 'Honnan tudjuk, hogy egy háromszög tompaszögű?',
        answer: 'A legnagyobb oldal $c$ ellenében: ha $c^2>a^2+b^2$, akkor a $\\cos\\gamma<0$, tehát $\\gamma>90^\\circ$. Egyenlőségnél derékszögű, kisebbnél hegyesszögű.',
        dangerLevel: 'Közepes'
      }
    ],
    applications: [
      {
        title: 'Háromszögelés',
        problem: 'Két hajó $20$ km-re, szögek $50^\\circ$ és $60^\\circ$',
        solutionLatex: 'd_1\\approx18{,}44\\ \\text{km}, \\quad d_2\\approx16{,}30\\ \\text{km}'
      },
      {
        title: 'Terület és körsugarak',
        problem: '$13$, $14$, $15$ oldalú háromszög',
        solutionLatex: 'T=84, \\quad R=8{,}125, \\quad r=4'
      }
    ],
    scoringBreakdown: [
      {
        criterion: 'I. Tartalom',
        points: 10,
        description: 'Háromszög-egyenlőtlenség, szinusz- és koszinusztétel, terület.'
      },
      {
        criterion: 'II. Definíció',
        points: 2,
        description: 'Szinusz- vagy koszinusztétel.'
      },
      {
        criterion: 'III. Bizonyítás',
        points: 6,
        description: 'Szinusztétel vagy koszinusztétel bizonyítása.'
      },
      {
        criterion: 'IV. Feladat',
        points: 8,
        description: 'Háromszög megoldása, kétértelmű eset.'
      },
      {
        criterion: 'V. Alkalmazás',
        points: 4,
        description: 'Földmérés, navigáció, fizika.'
      },
      {
        criterion: 'VI. Szaknyelv',
        points: 5,
        description: 'Trigonometricus jelölések, esetek megnevezése.'
      }
    ],
    historicalContext: 'A szinusztétel sík és gömbháromszögekre a középkori arab–perzsa csillagászatban kristályosodott ki (Abu al-Wafa, at-Túszi); a koszinusztétel modern alakja a 16–17. századi trigonometriában; a Hérón-képlet Alexandriai Hérón nevéhez fűződik.',
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 14. Tétel (98–105. oldal): A kétértelmű esetet mindenképpen mutasd be, és magyarázd a megoldásszámot!',
    visualizerType: 'triangle',
  },
  {
    id: 'tétel-15',
    number: 15,
    title: 'Egybevágósági transzformációk, alakzatok egybevágósága. Szimmetria. Hasonlósági transzformációk. Hasonló síkidomok kerülete, területe, hasonló testek felszíne, térfogata. A hasonlóság alkalmazása síkgeometriai tételek bizonyításában',
    category: 'Geometria és trigonometria',
    tags: ['Egybevágóság', 'Hasonlóság', 'Szimmetria', 'Párhuzamos szelők', 'Területarány', 'k²', 'k³'],
    difficulty: '3: trückös',
    summary: 'Tengelyes és középpontos tükrözés, forgatás, eltolás; távolság- és szögtartás, egybevágósági alapesetek. Szimmetriafajták. Középpontos hasonlóság, a háromszögek hasonlósági alapesetei. Hasonló síkidomok kerülete $k$, területe és felszíne $k^2$, térfogata $k^3$ arányban; a hasonlóság mint bizonyítási eszköz.',
    statementLatex: '\\frac{K_1}{K_2}=k, \\quad \\frac{T_1}{T_2}=k^2, \\quad \\frac{V_1}{V_2}=k^3',
    conditionsLatex: 'k>0 \\text{ (hasonlósági arány)}',
    formulaSheetReference: 'Hivatalos Képlettár 2026: egybevágóság, hasonlóság, arányok',
    formulaSheetReferences: [
      'Matematika képlettár 2026 (OH) – Geometria, 6–7. oldal'
    ],
    introduction: `A hasonlóság gondolatát már az ókori építészek és földmérők használták: a babilóniai agyagtáblákon méretarányos alaprajzok maradtak fenn, Thalész pedig a piramis magasságát árnyékhasonlósággal határozta meg.

A térképészet, a modellezés, az optika és a számítógépes grafika mind a hasonlóság elvén működik.

Az egybevágóság ennél szűkebb fogalom: olyan transzformációk eredménye, amelyek a távolságokat változatlanul hagyják.

A témakör a szóbelin azért kiemelt, mert itt derül ki, hogy a jelölt tud-e különbséget tenni „egybevágó”, „hasonló” és „arányos” között, és látja-e, hogy a hasonlóság nemcsak számítási eszköz, hanem a geometriai bizonyítások egyik legfontosabb módszere.`,
    detailedTheory: `### 1. Egybevágósági transzformációk

- **Definíció:** olyan síkbeli (vagy térbeli) leképezés, amely **távolságtartó**: bármely két pont képe ugyanolyan távolságra van, mint az eredeti pontok. Ebből következik, hogy szögtartó is, és egyenest egyenesbe, kört körbe visz.

- **Négy alaptípusa a síkban:**
  - **Tengelyes tükrözés** egy $t$ egyenesre: a pont és képe közötti szakaszt a tengely merőlegesen felezi. Fixpontok: a tengely pontjai; fix egyenesek: a tengely és a rá merőleges egyenesek.
  - **Középpontos tükrözés** egy $O$ pontra: ez $180^\\circ$-os forgatás; a pont és képe közötti szakasz felezőpontja $O$. Egyetlen fixpont: $O$.
  - **Forgatás** egy $O$ pont körül adott $\\varphi$ szöggel: a pont távolsága $O$-tól változatlan, a szög $\\varphi$. Fixpont: $O$ (ha $\\varphi\\neq360^\\circ$).
  - **Eltolás** egy $\\vec v$ vektorral: minden pont ugyanazzal a vektorral tolódik el. Nincs fixpont (ha $\\vec v\\neq\\vec 0$).

- **Tulajdonságok:** a transzformációk kompozíciója is egybevágósági transzformáció; két tükrözés kompozíciója eltolás vagy forgatás; minden egybevágósági transzformáció előáll legfeljebb három tükrözés szorzataként.

- **Egybevágó alakzatok:** két alakzat egybevágó, ha létezik olyan egybevágósági transzformáció, amely az egyiket a másikba viszi. Jelölés: $ABC\\triangle\\cong A'B'C'$.

- **Háromszögek egybevágósági alapesetei:** SSS (három oldal), SAS (két oldal és a közbezárt szög), ASA (két szög és a köztük lévő oldal), valamint a derékszögű esetre az SsA (átfogó és befogó).

### 2. Szimmetria

- **Tengelyes szimmetria:** az alakzat önmagába megy át a $t$ tengelyre tükrözve.

- **Középpontos szimmetria:** az alakzat önmagába megy át az $O$ pontra tükrözve (pl. paralelogramma, kör, szabályos hatszög).

- **Forgásszimmetria:** az alakzat önmagába megy át $O$ körüli $\\varphi$ szögű forgatással; a legkisebb ilyen szög a szimmetria rendjét adja.

- **Síkszimmeria és térszimmetria:** térbeli alakzatoknál tükörsík, forgástengely, tükrözési középpont.

- **Példák:** a szabályos $n$-szögnek $n$ tengelye és $n$-edrendű forgásszimmetriája van; a paralelogrammának középpontos, de általában nincs tengelyes szimmetriája; a szabályos tetraédernek 6 tükörsíkja van.

- **Alkalmazás:** kristálytan, molekulaszerkezet, mintázatok, építészeti homlokzatok, logók tervezése.

### 3. Hasonlósági transzformációk

- **Definíció:** olyan leképezés, amely minden távolságot ugyanazzal a $k>0$ aránnyal szoroz (aránytartó), és a szögeket változatlanul hagyja.

- **Középpontos hasonlóság** $O$ középponttal és $k$ aránnyal: $\\overrightarrow{OP'}=k\\,\\overrightarrow{OP}$. Ha $k>0$, a kép az eredetivel egyállású; ha $k<0$, a kép a középpontra tükrözött állású. A fixpont $O$.

- **Hasonló alakzatok:** $A\\sim B$, ha létezik hasonlósági transzformáció, amely az egyiket a másikba viszi. Ekkor a megfelelő szögek egyenlők, a megfelelő hosszak aránya $k$.

- **Kapcsolat az egybevágósággal:** az egybevágóság a hasonlóság $k=1$ speciális esete.

- **Háromszögek hasonlósági alapesetei:**
  - **AA:** két-két megfelelő szög egyenlő (a harmadik ekkor automatikusan egyenlő);
  - **SAS:** két oldal aránya egyenlő, és a közbezárt szög egyenlő;
  - **SSS:** három oldal aránya páronként egyenlő.

- **Jelölés:** $ABC\\triangle\\sim A'B'C'$; az arány $k=\\frac{A'B'}{AB}$.

### 4. Hasonlóság és arányok

- **Kerület:** $\\frac{K_1}{K_2}=k$, mert a kerület hosszúságok összege.

- **Terület (síkidom):** $\\frac{T_1}{T_2}=k^2$, mert a terület két lineáris méret szorzata.

- **Felszín (test):** $\\frac{A_1}{A_2}=k^2$, mert a felszín területek összege.

- **Térfogat:** $\\frac{V_1}{V_2}=k^3$, mert a térfogat három lineáris méret szorzata.

- **Sűrűség, tömeg:** homogén anyagnál a tömeg a térfogattal arányos, tehát $m_1/m_2=k^3$; ezért a nagyobb test relatíve „nehezebb” — ez a **négyzet–kocka törvény** lényege.

- **Skálázási csapda:** a lineáris arányt ($k$) soha nem szabad közvetlenül területre vagy térfogatra alkalmazni.

### 5. A hasonlóság mint bizonyítási eszköz

- **Párhuzamos szelők tétele:** ha két egyenest párhuzamosok metszenek, a szelőkön keletkező szakaszok aránya egyenlő. Bizonyítás: a keletkező háromszögek hasonlók (AA).

- **Szögfelező-tétel:** a belső szögfelező a szemközti oldalt a szomszédos oldalak arányában osztja. Bizonyítás: párhuzamos segédegyenessel hasonló háromszögeket hozunk létre.

- **Magasságtétel és befogótétel:** a derékszögű háromszög átfogóhoz tartozó magassága két, az eredetivel hasonló háromszöget hoz létre; az arányokból $m^2=pq$, $a^2=cp$, $b^2=cq$.

- **Pitagorasz-tétel:** a befogótételek összeadásával adódik.

- **Hasonlósági középpont:** két hasonló alakzat hasonlósági középpontja a megfelelő pontpárokat összekötő egyenesek metszéspontja (ha létezik).

### 6. Gyakorlati megjegyzések

- **Térkép:** az arány $1:M$; egy $a\\times b$ méretű téglalap területe a térképen $M^2$-ed része a valós területnek.

- **Makett:** a modell és az eredeti minden hossza $k$ arányban, felszíne $k^2$, térfogata $k^3$ arányban áll.

- **Optika:** a vetítővászon képe a tárgy hasonló kicsinyítése/nagyítása; a nagyítás a képtávolság és tárgytávolság aránya.

- **Hasonló testek:** csonkagúla, csonkakúp esetén a levágott rész és az eredeti test hasonló; ez adja a térfogatképlet levezetését.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'A párhuzamos szelők tétele',
        statementLatex: '\\frac{AD}{DB}=\\frac{AE}{EC} \\quad (DE\\parallel BC)',
        proofTitle: 'Bizonyítás hasonló háromszögekkel',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Osztott arány',
            latexContent: '\\angle ADE=\\angle ABC, \\quad \\angle AED=\\angle ACB \\ \\triangle ADE\\sim\\triangle ABC \\quad (AA) \\ \\frac{AD}{AB}=\\frac{AE}{AC}=\\frac{DE}{BC} \\ \\frac{AD}{DB}=\\frac{AE}{EC}',
            explanation: 'Cél: belátni, hogy A párhuzamos szelők tétele. A $DE\\parallel BC$ miatt a megfelelő szögek egyenlők (egyállású szögek). Ez előkészíti a következő lépést (Szögek egyenlősége). Két szög egyezik, ezért a két háromszög hasonló; a hasonlósági arány $k=\\frac{AD}{AB}$. Ez előkészíti a következő lépést (Hasonlóság). Hasonló háromszögek megfelelő oldalai arányosak. Ez előkészíti a következő lépést (Oldalarányok). Az $AB=AD+DB$ és $AC=AE+EC$ felhasználásával az aránypár átrendezhető a szelőkre vonatkozó alakra. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'A háromszögek AA hasonlósági alapesete',
        statementLatex: "\\alpha=\\alpha',\\ \\beta=\\beta' \\implies \\triangle ABC\\sim\\triangle A'B'C'",
        proofTitle: 'Bizonyítás a harmadik szög és az oldalarányok alapján',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Párhuzamos szelők',
            latexContent: '\\gamma=180^\\circ-\\alpha-\\beta=\\gamma \\ A\'B\' \\text{ az } AB \\text{ egyenesére, } A\'=A \\ \\frac{AB}{AB\'}=\\frac{AC}{AC\'}=\\frac{BC}{B\'C\'}',
            explanation: 'Cél: belátni, hogy A háromszögek AA hasonlósági alapesete. A háromszög szögeinek összege $180^\\circ$, ezért a harmadik szög is automatikusan egyenlő. A két háromszöget közös csúccsal helyezzük el úgy, hogy a megfelelő oldalak párhuzamosak legyenek. A párhuzamos szelők tétele miatt a megfelelő oldalak aránya közös $k$; ez éppen a hasonlóság. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'Hasonló síkidomok területaránya $k^2$',
        statementLatex: '\\frac{T_1}{T_2}=k^2',
        proofTitle: 'Bizonyítás háromszögekre bontással',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Görbe vonallal határolt idomok',
            latexContent: 'a_1=ka_2, \\quad m_1=km_2 \\ \\frac{T_1}{T_2}=\\frac{\\frac12 a_1m_1}{\\frac12 a_2m_2}=k\\cdot k=k^2 \\ T=\\sum T_i \\implies \\frac{T_1}{T_2}=k^2 \\ T_1/T_2=k^2',
            explanation: 'Cél: belátni, hogy Hasonló síkidomok területaránya $k^2$. Hasonló háromszögeknél minden alap és a hozzá tartozó magasság ugyanazzal a $k$ aránnyal skálázódik. A területképletbe helyettesítve a két $k$ tényező szorzata $k^2$. Ez előkészíti a következő lépést (Területek hányadosa). A hasonló sokszögeket megfelelő háromszögekre bontjuk; minden részterület $k^2$-szeresére változik, így az összeg is. Közelítő sokszögekkel (vagy integrállal) az állítás tetszőleges hasonló síkidomra kiterjeszthető. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 4,
        title: 'Hasonló testek felszín- és térfogataránya',
        statementLatex: '\\frac{A_1}{A_2}=k^2, \\quad \\frac{V_1}{V_2}=k^3',
        proofTitle: 'Lineáris méretek szorzata',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Következmény',
            latexContent: 'a_1=ka_2, \\quad b_1=kb_2, \\quad c_1=kc_2 \\ \\frac{A_1}{A_2}=\\frac{\\sum T_i^{(1)}}{\\sum T_i^{(2)}}=k^2 \\ \\frac{V_1}{V_2}=k^3 \\ \\frac{m_1}{m_2}=k^3 \\quad (\\text{homogén anyag})',
            explanation: 'Cél: belátni, hogy Hasonló testek felszín- és térfogataránya. Hasonló testeknél minden megfelelő él és magasság a $k$ aránnyal skálázódik. Ez előkészíti a következő lépést (Lineáris méretek). A felszín lapok területeinek összege; minden laptábla hasonló, ezért területe $k^2$-szeres. A térfogat három lineáris méret szorzata (hasáb, gúla, gömb képletében is); mindhárom tényező $k$-szoros, így $k^3$ adódik. A tömeg a térfogattal arányos, ezért a nagyobb, hasonló test relatíve nehezebb — ez a négyzet–kocka törvény. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 5,
        title: 'Magasság- és befogótétel hasonlósággal',
        statementLatex: 'm^2=pq, \\quad a^2=cp, \\quad b^2=cq',
        proofTitle: 'A derékszögű háromszög felbontása',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Pitagorasz',
            latexContent: '\\triangle ATC\\sim\\triangle BTC\\sim\\triangle ABC \\ \\frac{m}{p}=\\frac{q}{m} \\implies m^2=pq \\ \\frac{b}{q}=\\frac{c}{b} \\implies b^2=cq \\ a^2+b^2=c(p+q)=c^2',
            explanation: 'Cél: belátni, hogy Magasság- és befogótétel hasonlósággal. Az átfogóhoz tartozó magasság két derékszögű háromszögre bontja az eredetit; mindháromban ugyanazok a szögek szerepelnek. Az $ATC$ és $BTC$ háromszögek megfelelő befogóinak arányából. Ez előkészíti a következő lépést (Magasságtétel). Az $ATC$ és $ABC$ hasonlóságából; a másik befogóra $a^2=cp$. Ez előkészíti a következő lépést (Befogótétel). A két befogótétel összege a Pitagorasz-tételt adja; ez mutatja, hogy a hasonlóság milyen mélyen összekapcsolja a tételeket. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Párhuzamos szelők tétele, szögfelező-tétel, magasság- és befogótétel bizonyítása.',
      'Hasonló háromszögek felismerése szögek vagy oldalarányok alapján.',
      'Kerület-, terület-, felszín- és térfogatarány számítása.',
      'Hasonlósági középpont szerkesztése, kicsinyítés/nagyítás.'
    ],
    applicationsOutside: [
      'Térkép és tervrajz méretaránya; telek- és táblaterület számítása.',
      'Építészeti makettek, modellvasutak, hajómodellek.',
      'Optika: vetítés, fényképezés, mikroszkóp, távcső nagyítása.',
      'Csillagászat: holdfogyatkozás, távolságok becslése árnyékokból; biológia: növekedési arányok.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Két hasonló test megfelelő éleinek aránya $3:5$. Mekkora a felszíneik és a térfogataik aránya?',
        solutionLatex: 'k=\\frac35: \\quad \\frac{A_1}{A_2}=\\left(\\frac35\\right)^2=\\frac{9}{25}, \\quad \\frac{V_1}{V_2}=\\left(\\frac35\\right)^3=\\frac{27}{125}.',
        explanation: 'A felszín a lineáris arány négyzetével, a térfogat a köbével változik. Ellenőrzés: $27:125$ arány mellett a lineáris arány köbgyöke $3:5$.'
      },
      {
        problemNumber: 2,
        question: 'Egy kocka élét kétszerezzük. Hányszorosára nő a felszíne és a térfogata?',
        solutionLatex: 'k=2 \\implies \\frac{A_2}{A_1}=2^2=4, \\quad \\frac{V_2}{V_1}=2^3=8.',
        explanation: 'A felszín négyszeresére, a térfogat nyolcszorosára nő. Gyakori hiba a lineáris arányt ($2$) közvetlenül a térfogatra alkalmazni.'
      },
      {
        problemNumber: 3,
        question: 'Egy $1:25\\,000$ méretarányú térképen egy telek területe $8$ cm². Mekkora a telek valódi területe?',
        solutionLatex: 'M=25\\,000, \\quad T_{\\text{valós}}=8\\cdot M^2=8\\cdot625\\,000\\,000=5\\cdot10^9\\ \\mathrm{cm}^2=500\\,000\\ \\mathrm{m}^2=50\\ \\text{ha}.',
        explanation: 'A terület a méretarány négyzetével skálázódik. Ellenőrzés: $1$ cm a térképen $250$ m a valóságban, tehát $1$ cm² a térképen $62\\,500$ m²; ezt nyolcszorozva $500\\,000$ m².'
      },
      {
        problemNumber: 4,
        question: 'Egy $1{,}8$ m magas ember árnyéka $2{,}4$ m, egy fa árnyéka ugyanabban az időben $12$ m. Milyen magas a fa?',
        solutionLatex: '\\frac{h}{12}=\\frac{1{,}8}{2{,}4} \\implies h=12\\cdot\\frac{1{,}8}{2{,}4}=9\\ \\text{m}.',
        explanation: 'A napsugarak párhuzamosak, ezért a két függőleges szakasz és árnyékuk hasonló derékszögű háromszögeket alkot. Az aránypár a hasonlóság közvetlen alkalmazása — ez Thalész piramismérésének elve.'
      },
      {
        problemNumber: 5,
        question: 'Két hasonló háromszög megfelelő oldalainak aránya $2:3$, területeik különbsége $45$ cm². Mekkora a két terület?',
        solutionLatex: '\\frac{T_1}{T_2}=\\frac49, \\quad T_2-T_1=45 \\implies 9x-4x=5x=45 \\implies x=9; \\quad T_1=36, \\quad T_2=81\\ \\mathrm{cm}^2.',
        explanation: 'A területeket $4x$ és $9x$ alakban írjuk fel; a különbség $5x=45$, innen $x=9$. Ellenőrzés: $36:81=4:9$, és $81-36=45$.'
      },
      {
        problemNumber: 6,
        question: 'Egy kúpot a magasságának felénél az alappal párhuzamosan elvágunk. A levágott kis kúp térfogata hány százaléka az eredeti kúp térfogatának, és mekkora a visszamaradó csonkakúp térfogataránya?',
        solutionLatex: 'k=\\frac12 \\implies \\frac{V_{\\text{kis}}}{V_{\\text{eredeti}}}=\\left(\\frac12\\right)^3=\\frac18=12{,}5\\%; \\quad \\frac{V_{\\text{csonka}}}{V_{\\text{eredeti}}}=\\frac78=87{,}5\\%.',
        explanation: 'A levágott kúp hasonló az eredetihez $k=\\frac12$ aránnyal, ezért térfogata $k^3=\\frac18$. A csonkakúp a maradék, azaz az eredeti $\\frac78$-a.'
      }
    ],
    oralPresentationOutline: [
      'Egybevágóság fogalma; egybevágósági transzformációk',
      'Tengelyes / középpontos tükrözés, eltolás, forgatás',
      'Háromszögek egybevágósági alapesetei (SSS, SAS, ASA, SsH)',
      'Hasonlóság fogalma; hasonló háromszögek alapesetei',
      'Párhuzamos szelők tétele / arányok',
      'Szimmetria síkidomokon',
      'Szóbeli: egybevágóság vs. hasonlóság + egy alapeset'
    ],
    requiredDefinitions: [
      {
        term: 'Egybevágósági transzformáció',
        definitionLatex: "d(P,Q)=d(P',Q')",
        explanation: 'Távolságtartó leképezés; a síkban tengelyes tükrözés, középpontos tükrözés, forgatás és eltolás.'
      },
      {
        term: 'Hasonlósági arány',
        definitionLatex: 'k=\\frac{\\text{kép megfelelő hossza}}{\\text{eredeti hossza}}',
        explanation: 'A megfelelő hosszúságok állandó aránya; a kerület $k$, a terület $k^2$, a térfogat $k^3$ arányban változik.'
      },
      {
        term: 'Hasonló alakzatok',
        definitionLatex: 'A\\sim B \\iff \\exists\\, \\text{hasonlósági transzformáció}: A\\mapsto B',
        explanation: 'A megfelelő szögek egyenlők, a megfelelő hosszak aránya közös $k>0$.'
      },
      {
        term: 'Szimmetria',
        definitionLatex: '\\text{az alakzat önmagába megy át}',
        explanation: 'Tengelyes, középpontos vagy forgásszimmetria; a szimmetriát megvalósító transzformáció az alakzatot önmagára képezi.'
      }
    ],
    memorizationMaterial: `## Bemagolandó — Egybevágóság, szimmetria, hasonlóság

### Fő állítások

$\frac{K_1}{K_2}=k, \quad \frac{T_1}{T_2}=k^2, \quad \frac{A_1}{A_2}=k^2, \quad \frac{V_1}{V_2}=k^3$

**Feltétel:** $k>0$ hasonlósági arány. Egybevágóság = hasonlóság $k=1$ esete.

### Definíciók
**Egybevágósági transzformáció (izometria):** eltolás, forgatás, tengelyes/középpontos tükrözés (és csúsztatva tükrözés). Távolság- és szögtartó.
**Szimmetria:** tengelyes / középpontos / forgásszimmetria.
**Hasonlóság:** szögek egyenlők, oldalak aránya $k=|\lambda|$; középpontos hasonlóság (O, $\lambda\neq 0$): $\overrightarrow{OP'}=\lambda\,\overrightarrow{OP}$ ($|\lambda|>1$ nagyítás, $|\lambda|<1$ kicsinyítés, $|\lambda|=1$ egybevágóság).

### Egybevágósági alapesetek
OOO, OSO, SOS, SSO (az oldal a nagyobbik szöggel szemközti). SSA önmagában nem!

### Hasonlósági alapesetek
AA (szög–szög); SAS arányosan; SSS arányosan.

### Tételek / alkalmazások bizonyításban
1. Párhuzamos szelők (AA hasonlóság).
2. Magasság-/befogótétel (hasonló derékszögűek).
3. Pitagorasz a befogótételek összegéből.
4. Területarány $k^2$, térfogatarány $k^3$.

### Csapda
Lineáris $k$-t ne alkalmazd területre/térfogatra; SSA kétértelmű.`,
    oralExamPlan: "## Szóbeli felelet vázlata — 15. tétel\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\nÍv: izometriák → egybevágóság → szimmetria → hasonlóság → $\\lambda^2$ → bizonyítás hasonlósággal → feladat.\n\n### 0:00–1:30 · Bevezetés\nEgybevágóság: ugyanaz a forma és méret; hasonlóság: ugyanaz a forma, más méret.\n\n### 1:30–4:30 · Definíció (2 pont)\nEgybevágósági transzformáció *vagy* hasonlósági arány.\n\n### 4:30–8:00 · Áttekintés\nNégy izometria; alapesetek; szimmetriák.\n\n### 8:00–13:00 · Tétel + bizonyítás (6 pont)\n**Ajánlott:** Pitagorasz vagy magasságtétel hasonlósággal; vagy párhuzamos szelők. Hangsúly: „hasonlóság alkalmazása bizonyításban”.\n\n### 13:00–15:00 · Alkalmazások (4 pont)\nTérkép lépték; modell; területarány $\\lambda^2$.\n\n### 15:00–18:30 · Feladat (8 pont)\nEgybevágóság / hasonló arány / lépték.\n\n### 18:30–19:30 · Zárás\nSSA nem elég; szögek feleljenek meg.\n\n### Pontozás\nSzerkezet 10 · Def 2 · Tétel+biz 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5 = **35**",
    examinerTraps: [
      {
        question: 'Ha a kocka élét kétszerezzük, hányszorosára nő a térfogat?',
        answer: 'Nyolcszorosára: a térfogatarány $2^3=8$. A felszín négyszeresére nő ($2^2=4$). Gyakori hiba a lineáris arányt a térfogatra is alkalmazni.',
        dangerLevel: 'Magas'
      },
      {
        question: 'Minden hasonló alakzat egybevágó is?',
        answer: 'Nem. Az egybevágóság a hasonlóság $k=1$ speciális esete. Ha $k\\neq1$, az alakzatok hasonlók, de nem egybevágók.',
        dangerLevel: 'Közepes'
      },
      {
        question: 'Az AA hasonlósági alapesetnél miért elég két szög?',
        answer: 'Mert a harmadik szög a $180^\\circ$-os összeg miatt automatikusan egyenlő. Így valójában három szög egyezik, ami már biztosítja az oldalarányok egyenlőségét.',
        dangerLevel: 'Közepes'
      },
      {
        question: 'A háromszög-egyenlőtlenség és a hasonlóság hogyan kapcsolódik?',
        answer: 'Hasonló háromszögeknél az oldalarányok azonosak, ezért a háromszög-egyenlőtlenség mindkettőben ugyanúgy teljesül. Az arányok ismeretében az egyik háromszög létezéséből a másiké is következik.',
        dangerLevel: 'Közepes'
      }
    ],
    applications: [
      {
        title: 'Térkép méretaránya',
        problem: '$1:25\\,000$, $8$ cm² a térképen',
        solutionLatex: 'T=500\\,000\\ \\mathrm{m}^2=50\\ \\text{ha}'
      },
      {
        title: 'Csonkakúp térfogataránya',
        problem: 'A magasság felénél elvágott kúp',
        solutionLatex: '\\frac{V_{\\text{kis}}}{V}=\\frac18, \\quad \\frac{V_{\\text{csonka}}}{V}=\\frac78'
      }
    ],
    scoringBreakdown: [
      {
        criterion: 'I. Tartalom',
        points: 10,
        description: 'Egybevágóság, hasonlóság, szimmetria, arányok.'
      },
      {
        criterion: 'II. Definíció',
        points: 2,
        description: 'Egybevágóság vagy hasonlósági arány.'
      },
      {
        criterion: 'III. Bizonyítás',
        points: 6,
        description: 'Párhuzamos szelők vagy $k^2$ területarány.'
      },
      {
        criterion: 'IV. Feladat',
        points: 8,
        description: 'Arányszámítás, térkép, csonkakúp.'
      },
      {
        criterion: 'V. Alkalmazás',
        points: 4,
        description: 'Térkép, makett, optika, Thalész.'
      },
      {
        criterion: 'VI. Szaknyelv',
        points: 5,
        description: 'Transzformációk, arányok pontos megnevezése.'
      }
    ],
    historicalContext: 'Thalész a piramis magasságát árnyékhasonlósággal mérte; Euklidész Elemek VI. könyve a hasonlóság rendszerezése; a négyzet–kocka törvényt Galilei fogalmazta meg a mechanikában.',
    studiumGeneraleNotes: 'Studium Generale 2026 Kiadvány 15. Tétel (106–107. oldal): A $k$, $k^2$, $k^3$ arányokat bizonyítással együtt kérdik — készülj a levezetésre!',
    visualizerType: 'triangle',
  }
];
