import { Tetel } from '../../types/math';

export const TETELEK_21_25: Tetel[] = [
  {
    id: "tétel-21",
    number: 21,
    title: "Térelemek távolsága és szöge. Térbeli alakzatok. Felszín- és térfogatszámítás",
    category: "Geometria és trigonometria",
    tags: [
      "Térgeometria",
      "Euler-tétel",
      "Hasáb",
      "Gúla",
      "Csonkagúla",
      "Gömb",
      "Forgástestek"
    ],
    difficulty: "1: alap alatti",
    summary: "Térelemek (pont, egyenes, sík) kölcsönös helyzete, távolsága és hajlásszöge. Poliéderek (hasáb, gúla, csonkagúla) és forgástestek (henger, kúp, csonkakúp, gömb): felszín és térfogat. Euler-féle poliédertétel, Cavalieri-elv, hasonló testek arányai, összetett testek.",
    statementLatex: "c+l=e+2,\\quad V_{\\text{gúla}}=\\frac{Tm}{3},\\quad V_{\\text{csonkagúla}}=\\frac{m}{3}\\left(T+\\sqrt{Tt}+t\\right),\\quad V_{\\text{gömb}}=\\frac{4}{3}\\pi r^3",
    conditionsLatex: "c:\\text{csúcsok},\\ l:\\text{lapok},\\ e:\\text{élek};\\quad T,t>0,\\ m>0",
    formulaSheetReference: "Hivatalos Képlettár 2026: stereometria",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Stereometria (térgeometria), 10–11. oldal"
    ],
    introduction: `Euklidész Elemek című művének XI–XIII. könyve tárgyalja a térgeometriát, és a XIII. könyv csúcspontja az öt szabályos (platóni) test létezésének bizonyítása.

Leonhard Euler 1750 körül írta le a poliédertételt: bármely konvex poliéderre a csúcsok és lapok száma 2-vel nagyobb az élek számánál.

A térfogatszámítás alapja Cavalieri elve és a hasonlóság; a csonkagúla és a gömb térfogatképletének levezetése a szóbeli kedvelt bizonyítási feladata.

A témakör a térlátást és a képletek biztos használatát kéri számon egyszerre: a vizsgáztató gyakran egy összetett test (pohár, tartály, tető) felszínére és térfogatára kérdez, ahol a helyes testre bontás a döntő.`,
    detailedTheory: `### 1. Térelemek kölcsönös helyzete

- **Két egyenes** a térben:
  - **metsző:** egy síkban vannak, pontosan egy közös pontjuk van;
  - **párhuzamos:** egy síkban vannak, nincs közös pontjuk;
  - **kitérő:** nincs olyan sík, amely mindkettőt tartalmazza; nincs közös pontjuk, de nem is párhuzamosak.

- **Egyenes és sík:** az egyenes metszi a síkot (egy pont), párhuzamos vele (nincs közös pont), vagy illeszkedik a síkra (minden pont közös).

- **Két sík:** metsző (a metszésvonal egy egyenes) vagy párhuzamos (nincs közös pont).

- **Merőleges egyenes és sík:** az egyenes merőleges a síkra, ha a sík minden, a talpponton átmenő egyenesére merőleges. Elegendő két, a talpponton átmenő, egymást metsző egyenesre merőlegesnek lennie.

### 2. Távolságok és szögek a térben

- **Két pont távolsága:** az összekötő szakasz hossza.

- **Pont–egyenes távolság:** a pontból az egyenesre bocsátott merőleges szakasz hossza.

- **Pont–sík távolság:** a pontból a síkra bocsátott merőleges szakasz hossza; koordinátákkal
  $$d=\\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}.$$

- **Kitérő egyenesek távolsága:** a két egyenest metsző, mindkettőre merőleges **normáltranszverzális** hossza. Ez a két egyenes legrövidebb távolsága.

- **Párhuzamos egyenesek és párhuzamos síkok távolsága:** bármely pont és a másik egyenes/sík távolsága.

- **Két egyenes hajlásszöge:** a párhuzamos eltolással közös pontba hozott egyenesek szöge; kitérőknél is így értelmezzük (a szöget $0^\\circ$ és $90^\\circ$ között vesszük).

- **Egyenes és sík hajlásszöge:** az egyenes és a síkra eső **merőleges vetületének** szöge. Ha $\\vec v$ az egyenes irányvektora és $\\vec n$ a sík normálvektora, akkor $\\sin\\alpha=\\frac{|\\vec v\\cdot\\vec n|}{|\\vec v||\\vec n|}$.

- **Két sík hajlásszöge:** a metszésvonalra merőleges, mindkét síkban fekvő egyenesek szöge; normálvektorokkal $\\cos\\alpha=\\frac{|\\vec n_1\\cdot\\vec n_2|}{|\\vec n_1||\\vec n_2|}$, és a hegyesszöget vesszük.

- **Szögtartományok:** a térben nyolc térnyolcad (oktáns) van; a koordinátasíkhoz viszonyított előjelek kombinációi.

### 3. Poliéderek

- **Poliéder:** véges sok síklappal határolt test. **Konvex poliéder:** bármely két pontját összekötő szakasz a testben marad.

- **Euler-féle poliédertétel:** összefüggő, gömbszerű poliéderre
  $$c+l=e+2,$$
  ahol $c$ a csúcsok, $l$ a lapok, $e$ az élek száma.

- **Szabályos (platóni) testek:** tetraéder ($4,4,6$), kocka ($8,6,12$), oktaéder ($6,8,12$), dodekaéder ($20,12,30$), ikozaéder ($12,20,30$). Mindegyikre teljesül az Euler-képlet.

- **Hasáb:** két egybevágó, párhuzamos alaplap és paralelogramma alakú oldallapok. $V=Tm$, $A=2T+K_{\\mathrm{alap}}m$, ahol $K_{\\mathrm{alap}}$ az alaplap kerülete.

- **Gúla:** egy alaplap és egy közös csúcsú háromszöglapok. $V=\\frac{Tm}{3}$, $A=T+\\frac{K_{\\mathrm{alap}}m_{\\mathrm{oldal}}}{2}$ (szabályos gúlára), ahol $m_{\\mathrm{oldal}}$ az oldallap magassága.

- **Csonkagúla:** a gúla alappal párhuzamos síkkal való elvágásával keletkezik; $V=\\frac{m}{3}(T+\\sqrt{Tt}+t)$, $A=T+t+\\text{palást}$.

### 4. Forgástestek

- **Henger:** $V=r^2\\pi m$, $A=2r^2\\pi+2r\\pi m=2r\\pi(r+m)$. Palástja kiterítve téglalap: $2r\\pi\\cdot m$.

- **Kúp:** $V=\\frac{r^2\\pi m}{3}$, $A=r^2\\pi+r\\pi a$, ahol $a=\\sqrt{r^2+m^2}$ az alkotó. Palástja kiterítve körcikk.

- **Csonkakúp:** $V=\\frac{m\\pi}{3}(R^2+Rr+r^2)$, $A=R^2\\pi+r^2\\pi+(R+r)\\pi a$, ahol $a=\\sqrt{m^2+(R-r)^2}$.

- **Gömb:** $V=\\frac{4}{3}r^3\\pi$, $A=4r^2\\pi$.

- **Gömbszelet, gömbsüveg:** a gömböt síkkal elvágva keletkező részek; térfogatuk integrállal vagy a gömbszelet képletével számítható.

### 5. Cavalieri-elv és a térfogatképletek háttere

- **Cavalieri-elv:** ha két test magassága egyenlő, és minden, az alappal párhuzamos síkmetszetük területe egyenlő, akkor a térfogatuk egyenlő.

- **Gúla és kúp:** a $\\frac13$ tényező onnan jön, hogy a gúla három, egyenlő térfogatú tetraéderre bontható (háromszög alapú hasáb esetén), illetve Cavalieri-vel összevethető egy ugyanolyan alapterületű és magasságú hasábbal.

- **Gömb:** egy félgömböt összevetünk egy hengerrel, amelyből egy kúpot vágtunk ki; a $h$ magasságban mindkét test metszete $\\pi(r^2-h^2)$ területű, ezért a térfogatok egyenlők.

- **Hasonló testek:** $k$ arányú hasonlóságnál a felszín $k^2$, a térfogat $k^3$ arányban változik.

### 6. Összetett testek és beírt/köré írt testek

- **Összetett test:** bontjuk hengerre, kúpra, gömbre, hasábra; a térfogatokat adjuk össze, illetve vonjuk ki (pl. kifúrt lyuk).

- **Felszín:** csak a külső felület számít; a belső érintkező lapokat nem adjuk hozzá. A palástokat külön kell számolni.

- **Beírt gömb:** a test minden lapját érinti; középpontja az egyenlő távolságok mértani helyén van. Kockába írt gömb sugara $r=\\frac{a}{2}$.

- **Köré írt gömb:** minden csúcsot tartalmaz; kockánál $R=\\frac{a\\sqrt3}{2}$.

- **Hengerbe írt gömb:** $r=\\frac{m}{2}$ és $m=2r$; a gömb térfogata a henger $\\frac23$-a.

- **Kúpba írt gömb:** a tengelymetszetbe írt kör sugara adja a gömb sugarát.

### 7. Gyakorlati megjegyzések

- **Testátló:** téglatestnél $d=\\sqrt{a^2+b^2+c^2}$; kockánál $d=a\\sqrt3$.

- **Felszín vs. térfogat:** a felszín négyzetes, a térfogat köbös mértékegységű; a váltásnál (cm² ↔ m², cm³ ↔ liter) külön figyelni kell.

- **1 liter = 1 dm³ = 1000 cm³**; a pohár-, tartályfeladatoknál ez a leggyakoribb átváltás.

- **Kerekítés:** a szóbeli feladatnál a részeredményeket érdemes 3–4 értékes jegyre számolni, a végeredményt a feladat által kért pontossággal megadni.`,
    theorems: [
      {
        theoremNumber: 1,
        title: "A csonkagúla térfogata",
        statementLatex: "V=\\frac{m}{3}\\left(T+\\sqrt{Tt}+t\\right)",
        proofTitle: "Hasonló gúlák különbsége",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Kiegészítés teljes gúlává",
            latexContent: "V=V_1-V_2=\\frac{Tm_1}{3}-\\frac{tm_2}{3}",
            explanation: "A csonkagúlát úgy kapjuk, hogy a teljes gúlából kivonjuk a levágott, hozzá hasonló kis gúlát."
          },
          {
            stepNumber: 2,
            title: "Hasonlósági arány",
            latexContent: "\\lambda=\\frac{m_1}{m_2}=\\sqrt{\\frac{T}{t}}",
            explanation: "A két gúla hasonló, ezért a magasságok aránya a területek arányának négyzetgyöke; $m=m_1-m_2$ a csonkagúla magassága."
          },
          {
            stepNumber: 3,
            title: "Magasságok kifejezése",
            latexContent: "m_1=\\frac{\\lambda m}{\\lambda-1},\\qquad m_2=\\frac{m}{\\lambda-1}",
            explanation: "Az $m_1-m_2=m$ és $m_1=\\lambda m_2$ egyenletrendszer megoldása."
          },
          {
            stepNumber: 4,
            title: "Behelyettesítés",
            latexContent: "V=\\frac{m}{3}\\cdot\\frac{\\lambda T-t}{\\lambda-1}",
            explanation: "Kiemeljük a közös $\\frac{m}{3(\\lambda-1)}$ tényezőt."
          },
          {
            stepNumber: 5,
            title: "Algebrai egyszerűsítés",
            latexContent: "\\lambda T-t=t(\\lambda^3-1)=t(\\lambda-1)(\\lambda^2+\\lambda+1)",
            explanation: "Felhasználjuk, hogy $T=\\lambda^2t$. A $\\lambda-1$ tényező kiesik, és $\\lambda^2t=T$, $\\lambda t=\\sqrt{Tt}$, $t=t$ marad."
          },
          {
            stepNumber: 6,
            title: "Eredmény",
            latexContent: "V=\\frac{m}{3}\\left(T+\\sqrt{Tt}+t\\right)",
            explanation: "A képlet a három tag összege: a két alapterület és a mértani közepük, szorozva a magasság harmadával."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "Euler-féle poliédertétel",
        statementLatex: "c+l=e+2",
        proofTitle: "Bizonyítás síkbarajzolt gráfra (Schlegel-diagram)",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Vetítés síkra",
            latexContent: "c\\to n,\\quad e\\to e,\\quad l\\to f",
            explanation: "A poliédert az egyik lapján keresztül a síkra vetítjük (Schlegel-diagram); a csúcsok, élek és lapok száma megmarad, a kiválasztott lap lesz a külső tartomány."
          },
          {
            stepNumber: 2,
            title: "Összefüggő síkgráf",
            latexContent: "n-e+f=2",
            explanation: "Így egy összefüggő síkbarajzolt gráfot kapunk; elegendő ezt az összefüggést bizonyítani."
          },
          {
            stepNumber: 3,
            title: "Fa esete",
            latexContent: "e=n-1,\\quad f=1 \\implies n-(n-1)+1=2",
            explanation: "Ha a gráf fa, akkor élszáma $n-1$, és egyetlen külső tartománya van; az összefüggés teljesül."
          },
          {
            stepNumber: 4,
            title: "Körről él elhagyása",
            latexContent: "e\\to e-1,\\quad f\\to f-1",
            explanation: "Ha van kör, egy körön fekvő élt elhagyva a gráf összefüggő marad, két tartomány összeolvad, ezért az $n-e+f$ értéke nem változik."
          },
          {
            stepNumber: 5,
            title: "Visszavezetés fára",
            latexContent: "n-e+f=2",
            explanation: "Az eljárást ismételve végül fát kapunk, amelyre az összefüggés igaz; mivel az érték közben nem változott, az eredeti gráfra is igaz."
          }
        ],
        notes: "A tétel konvex poliéderekre és gömbszerű felületre igaz; tórusz alakú testre nem (ott $c+l-e=0$)."
      },
      {
        theoremNumber: 3,
        title: "A gúla térfogata",
        statementLatex: "V=\\frac{Tm}{3}",
        proofTitle: "Három egyenlő térfogatú tetraéder",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Háromszög alapú hasáb",
            latexContent: "V_{\\text{hasáb}}=Tm",
            explanation: "A háromszög alapú hasáb térfogata alapterület szorozva magassággal."
          },
          {
            stepNumber: 2,
            title: "Felbontás tetraéderekre",
            latexContent: "ABCA',\\ A'B'CB?,\\ A'B'C'C",
            explanation: "A hasábot három tetraéderre bontjuk: $ABCA'$, $A'B'CB$ (másképp $A'BCB'$) és $A'B'C'C$."
          },
          {
            stepNumber: 3,
            title: "Egyenlő térfogatok",
            latexContent: "V_1=V_2=V_3=\\frac{Tm}{3}",
            explanation: "Az $ABCA'$ és $A'BCB'$ tetraédereknek közös az $A'BC$ lapja és az $A$, illetve $B'$ csúcsa ugyanabban a síkban van, ezért a magasságuk egyenlő; így térfogatuk is. Ugyanez a harmadikra is."
          },
          {
            stepNumber: 4,
            title: "Általános gúla",
            latexContent: "V=\\frac{Tm}{3}",
            explanation: "Tetszőleges sokszög alapú gúlát háromszög alapú gúlákra bontunk; a kúp esetén határátmenettel (vagy Cavalieri-vel) adódik ugyanez."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "A gömb térfogata",
        statementLatex: "V=\\frac{4}{3}r^3\\pi",
        proofTitle: "Cavalieri-elv hengerrel és kúppal",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Félgömb és összehasonlító test",
            latexContent: "V_{\\text{félgömb}} \\leftrightarrow V_{\\text{henger}}-V_{\\text{kúp}}",
            explanation: "Vegyünk egy $r$ sugarú félgömböt, és egy $r$ sugarú, $r$ magas hengert, amelyből egy $r$ sugarú, $r$ magas kúpot vágtunk ki."
          },
          {
            stepNumber: 2,
            title: "Metszet a $h$ magasságban",
            latexContent: "A_{\\text{félgömb}}=\\pi(r^2-h^2)",
            explanation: "A félgömb $h$ magasságú síkmetszete olyan kör, amelynek sugara $\\sqrt{r^2-h^2}$."
          },
          {
            stepNumber: 3,
            title: "Összehasonlító metszet",
            latexContent: "A_{\\text{henger}}-A_{\\text{kúp}}=\\pi r^2-\\pi h^2=\\pi(r^2-h^2)",
            explanation: "A henger metszete $\\pi r^2$, a kúp metszete a hasonlóság miatt $\\pi h^2$; a különbség megegyezik a félgömb metszetével."
          },
          {
            stepNumber: 4,
            title: "Cavalieri",
            latexContent: "V_{\\text{félgömb}}=\\pi r^3-\\frac{\\pi r^3}{3}=\\frac{2}{3}\\pi r^3",
            explanation: "Egyenlő magasság és minden szinten egyenlő metszetterület, ezért a térfogatok egyenlők. A henger $\\pi r^3$, a kúp $\\frac13\\pi r^3$."
          },
          {
            stepNumber: 5,
            title: "Teljes gömb",
            latexContent: "V=2\\cdot\\frac{2}{3}\\pi r^3=\\frac{4}{3}\\pi r^3",
            explanation: "A gömb két félgömbből áll, ezért térfogata a félgömb térfogatának kétszerese."
          }
        ]
      },
      {
        theoremNumber: 5,
        title: "A henger és a kúp palástja",
        statementLatex: "A_{\\text{henger, palást}}=2r\\pi m,\\quad A_{\\text{kúp, palást}}=r\\pi a",
        proofTitle: "Síkba terítés",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Henger kiterítése",
            latexContent: "\\text{téglalap: } 2r\\pi \\times m",
            explanation: "A henger palástját az alkotó mentén felvágva téglalapot kapunk; az egyik oldal a magasság, a másik az alapkör kerülete."
          },
          {
            stepNumber: 2,
            title: "Henger palástja",
            latexContent: "A=2r\\pi m",
            explanation: "A téglalap területe a két oldal szorzata."
          },
          {
            stepNumber: 3,
            title: "Kúp kiterítése",
            latexContent: "\\text{körcikk: sugár } a,\\ \\text{ívhossz } 2r\\pi",
            explanation: "A kúp palástja olyan körcikk, amelynek sugara az alkotó $a$, ívhossza az alapkör kerülete $2r\\pi$."
          },
          {
            stepNumber: 4,
            title: "Körcikk területe",
            latexContent: "A=\\frac12\\cdot a\\cdot 2r\\pi=r\\pi a",
            explanation: "A körcikk területe $\\frac12\\cdot\\text{sugár}\\cdot\\text{ívhossz}$; innen adódik a kúp palástjának képlete."
          }
        ],
        notes: "Csonkakúpnál a palást két körcikk különbsége, ami a $(R+r)\\pi a$ képletet adja."
      }
    ],
    applicationsInside: [
      "Összetett testek felszíne és térfogata (összeadás, kivonás).",
      "Euler-tétel ellenőrzése adott poliéderre.",
      "Hasonló testek: felszín $k^2$, térfogat $k^3$.",
      "Beírt és köré írt gömb, henger, kúp.",
      "Testátló, felszín, palást, űrtartalom átváltása."
    ],
    applicationsOutside: [
      "Építészet: piramisok, csonkagúla alakú tornyok, kupolák.",
      "Csomagolástechnika, tartályok és poharak űrtartalma.",
      "Kristálytan: szabályos poliéderek, ásványi szerkezetek.",
      "Műszaki tervezés: csővezetékek, tartályok, fúvókák; orvosi képalkotás térfogatbecslése."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Egy csonkakúp alakú pohár alapkörének sugara $6$ cm, fedőkörének sugara $3$ cm, alkotója $5$ cm. Mekkora a poharak térfogata, felszíne, és mennyi lé fér bele a magasság $86\\%$-áig?",
        solutionLatex: "m=\\sqrt{5^2-3^2}=4; \\quad V=\\frac{4\\pi}{3}(36+18+9)=84\\pi\\approx263{,}9\\ \\mathrm{cm}^3; \\quad A=\\pi(36+9+45)=90\\pi\\approx282{,}7\\ \\mathrm{cm}^2; \\quad V_{86\\%}\\approx0{,}86\\cdot263{,}9\\approx226{,}9\\ \\mathrm{cm}^3.",
        explanation: "A magasságot az alkotóból és a sugarak különbségéből Pitagorasz-tétellel kapjuk: $m=\\sqrt{a^2-(R-r)^2}=\\sqrt{25-9}=4$. A csonkakúp térfogata $\\frac{m\\pi}{3}(R^2+Rr+r^2)$, felszíne $\\pi(R^2+r^2+(R+r)a)$. A $86\\%$-os töltés a magasság arányában nem lineáris, de a feladat a térfogat $86\\%$-át kéri, ezért a teljes térfogatot szorozzuk."
      },
      {
        problemNumber: 2,
        question: "Ellenőrizd Euler tételét kockára, szabályos tetraéderre és szabályos oktaéderre!",
        solutionLatex: "\\text{kocka: }8+6=12+2; \\quad \\text{tetraéder: }4+4=6+2; \\quad \\text{oktaéder: }6+8=12+2.",
        explanation: "Mindhárom konvex poliéder, ezért teljesíteniük kell a $c+l=e+2$ összefüggést. Az oktaédernek 6 csúcsa, 8 lapja és 12 éle van."
      },
      {
        problemNumber: 3,
        question: "Egy kocka éle $6$ cm. Számítsd ki a testátlóját, felszínét és térfogatát!",
        solutionLatex: "d=6\\sqrt3\\approx10{,}39\\ \\mathrm{cm}; \\quad A=6\\cdot36=216\\ \\mathrm{cm}^2; \\quad V=6^3=216\\ \\mathrm{cm}^3.",
        explanation: "A testátló a térbeli Pitagorasz-tételből $d=a\\sqrt3$. A felszín hat lap területe, a térfogat az él köbe. Érdekesség: itt a felszín és a térfogat számértéke egyenlő, de mértékegységük különbözik."
      },
      {
        problemNumber: 4,
        question: "Egy szabályos négyzet alapú gúla alapéle $6$ cm, magassága $4$ cm. Határozd meg a térfogatát, az oldalmagasságát, az oldalélét és a felszínét!",
        solutionLatex: "V=\\frac{36\\cdot4}{3}=48\\ \\mathrm{cm}^3; \\quad m_{\\text{oldal}}=\\sqrt{4^2+3^2}=5; \\quad e=\\sqrt{4^2+(3\\sqrt2)^2}=\\sqrt{34}; \\quad A=36+4\\cdot\\frac{6\\cdot5}{2}=96\\ \\mathrm{cm}^2.",
        explanation: "Az oldalmagasság a gúla magasságából és az alapél feléből számítható. Az oldalél a testátló irányába esik, ezért az alap átlójának felével ($3\\sqrt2$) kell számolni. A felszín az alaplap és négy egyforma oldalháromszög összege."
      },
      {
        problemNumber: 5,
        question: "Egy gömb sugara $3$ cm. Mekkora a térfogata és a felszíne? Mekkora a bele írható kocka éle?",
        solutionLatex: "V=\\frac{4}{3}\\pi\\cdot27=36\\pi\\approx113{,}1\\ \\mathrm{cm}^3; \\quad A=4\\pi\\cdot9=36\\pi\\approx113{,}1\\ \\mathrm{cm}^2; \\quad a\\sqrt3=6 \\implies a=2\\sqrt3\\approx3{,}46\\ \\mathrm{cm}.",
        explanation: "A beírt kocka testátlója a gömb átmérője: $a\\sqrt3=2r=6$. Innen $a=2\\sqrt3$. Érdekesség, hogy $r=3$ esetén a gömb térfogatának és felszínének számértéke megegyezik."
      },
      {
        problemNumber: 6,
        question: "Egy henger sugara $5$ cm, magassága $12$ cm. Számítsd ki a térfogatát, felszínét és a testátlóját!",
        solutionLatex: "V=25\\pi\\cdot12=300\\pi\\approx942{,}5\\ \\mathrm{cm}^3; \\quad A=2\\pi\\cdot25+2\\pi\\cdot5\\cdot12=170\\pi\\approx534{,}1\\ \\mathrm{cm}^2; \\quad d=\\sqrt{10^2+12^2}=\\sqrt{244}=2\\sqrt{61}\\approx15{,}62\\ \\mathrm{cm}.",
        explanation: "A henger felszíne két körből és a palástból áll. A testátló a tengelymetszet átlója, amelynek oldalai $2r=10$ és $m=12$."
      },
      {
        problemNumber: 7,
        question: "Egy kúp alapkörének sugara $3$ cm, magassága $4$ cm. Mekkora a térfogata, felszíne és a kúpba írható gömb sugara?",
        solutionLatex: "a=5; \\quad V=\\frac{9\\pi\\cdot4}{3}=12\\pi\\approx37{,}7\\ \\mathrm{cm}^3; \\quad A=9\\pi+15\\pi=24\\pi\\approx75{,}4\\ \\mathrm{cm}^2; \\quad r_{\\text{gömb}}=\\frac{3\\cdot4}{3+5}=1{,}5\\ \\mathrm{cm}.",
        explanation: "Az alkotó $a=\\sqrt{3^2+4^2}=5$. A kúpba írt gömb sugarát a tengelymetszet derékszögű háromszögébe írt kör sugara adja: $r=\\frac{rm}{a+r}$ alakban, azaz $\\frac{3\\cdot4}{5+3}=1{,}5$."
      }
    ],
    oralPresentationOutline: [
      'Térelemek: pont, egyenes, sík; illeszkedés',
      'Távolságok: pont–sík, kitérő egyenesek (szemlélet)',
      'Szögek: két sík, egyenes–sík',
      'Hasáb, henger, gúla, kúp, gömb — felszín',
      'Térfogatképletek; Cavalieri-elv szemlélete',
      'Háló / kiterítés; metszetek',
      'Szóbeli: 2–3 képlet + egy távolság/szög def.'
    ],
    requiredDefinitions: [
      {
        term: "Euler-féle poliédertétel",
        definitionLatex: "c+l=e+2",
        explanation: "Konvex, gömbszerű poliéder csúcsainak és lapjainak összege 2-vel nagyobb az élek számánál."
      },
      {
        term: "Kitérő egyenesek",
        definitionLatex: "\\text{nincs közös sík, nincs közös pont}",
        explanation: "Olyan térbeli egyenesek, amelyek nem párhuzamosak és nem metszik egymást; távolságukat a normáltranszverzális adja."
      },
      {
        term: "Cavalieri-elv",
        definitionLatex: "A_1(h)=A_2(h)\\ \\forall h \\implies V_1=V_2",
        explanation: "Egyenlő magasságú testeknél, ha minden szinten egyenlő a metszetterület, a térfogatok is egyenlők."
      },
      {
        term: "Hasáb és gúla térfogata",
        definitionLatex: "V_{\\text{hasáb}}=Tm,\\quad V_{\\text{gúla}}=\\frac{Tm}{3}",
        explanation: "$T$ az alapterület, $m$ a magasság; a gúla térfogata a hasáb harmada."
      },
      {
        term: "Egyenes–sík hajlásszög",
        definitionLatex: "\\sin\\alpha=\\frac{|\\vec v\\cdot\\vec n|}{|\\vec v||\\vec n|}",
        explanation: "Az egyenes és a síkra eső merőleges vetületének szöge; az irányvektor és a normálvektor szögének kiegészítője."
      }
    ],
    examinerTraps: [
      {
        question: "Mi a különbség két kitérő és két párhuzamos egyenes között?",
        answer: "A párhuzamosak egy síkban vannak és nincs közös pontjuk; a kitérők nincsenek egy síkban (és nincs közös pontjuk). A kitérők hajlásszögét párhuzamos eltolással értelmezzük.",
        dangerLevel: "Közepes"
      },
      {
        question: "Gúla térfogata $Tm$ vagy $Tm/3$?",
        answer: "$Tm/3$ — a hasábé $Tm$. A $\\frac13$ tényező a három egyenlő térfogatú tetraéderre bontásból, illetve Cavalieri-elvből adódik. Gyakori keverés.",
        dangerLevel: "Magas"
      },
      {
        question: "Csonkagúlánál miért szerepel $\\sqrt{Tt}$?",
        answer: "A hasonlósági arány $\\lambda=\\sqrt{T/t}$; a két gúla térfogatának különbségéből a $\\lambda^3-1$ kifejezés tényezőkre bontásakor keletkezik a $\\lambda^2t=T$, $\\lambda t=\\sqrt{Tt}$, $t$ hármas.",
        dangerLevel: "Magas"
      },
      {
        question: "A felszín számításakor az összes lapot össze kell adni?",
        answer: "Csak a külső felületet. Összetett testnél a belső érintkező lapokat nem számítjuk, és a palástokat külön kell kezelni; a nyitott testeknél (pl. pohár) a fedőlap hiányzik.",
        dangerLevel: "Magas"
      },
      {
        question: "Hengerbe írt gömb térfogata hányadrésze a hengerének?",
        answer: "$\\frac23$. Ha a gömb a hengert érinti, akkor $m=2r$, a henger térfogata $2\\pi r^3$, a gömbé $\\frac43\\pi r^3$, az arány $\\frac{4/3}{2}=\\frac23$.",
        dangerLevel: "Közepes"
      }
    ],
    applications: [
      {
        title: "Csonkakúp pohár kapacitása",
        problem: "$R=6$, $r=3$, $a=5$ cm; töltés a térfogat $86\\%$-áig",
        solutionLatex: "V=84\\pi\\approx263{,}9\\ \\mathrm{cm}^3, \\quad V_{86\\%}\\approx226{,}9\\ \\mathrm{cm}^3"
      },
      {
        title: "Gömbbe írt kocka",
        problem: "$r=3$ cm",
        solutionLatex: "a=2\\sqrt3\\approx3{,}46\\ \\mathrm{cm}"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Térelemek, poliéderek, forgástestek, képletek."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Euler-tétel, kitérő egyenesek vagy Cavalieri-elv."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "Csonkagúla, gúla vagy gömb térfogata."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Összetett felszín- és térfogatszámítás."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Építészet, csomagolás, Euklidész."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Térgeometriai fogalmak pontos használata."
      }
    ],
    historicalContext: "Euklidész Elemek XI–XIII. könyve: térgeometria és a szabályos testek. Euler (1750 körül): poliédertétel. Cavalieri (17. század): a metszetelv. Archimédész: a gömb felszíne és térfogata.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 21. Tétel (136–142. oldal): A csonkagúla képletét levezetéssel együtt kérdik — készülj a hasonlósági arányra!",
    memorizationMaterial: `## Bemagolandó — Térelemek távolsága és szöge. Térbeli alakzatok. Felszín- és térfogatszámítás

### Fő állítás / képletek

$c+l=e+2,\\quad V_{\\text{gúla}}=\\frac{Tm}{3},\\quad V_{\\text{csonkagúla}}=\\frac{m}{3}\\left(T+\\sqrt{Tt}+t\\right),\\quad V_{\\text{gömb}}=\\frac{4}{3}\\pi r^3$

### Definíciók

**Euler-féle poliédertétel:** $c+l=e+2$

Konvex, gömbszerű poliéder csúcsainak és lapjainak összege 2-vel nagyobb az élek számánál.

**Kitérő egyenesek:** $\\text{nincs közös sík, nincs közös pont}$

Olyan térbeli egyenesek, amelyek nem párhuzamosak és nem metszik egymást; távolságukat a normáltranszverzális adja.

**Cavalieri-elv:** $A_1(h)=A_2(h)\\ \\forall h \\implies V_1=V_2$

Egyenlő magasságú testeknél, ha minden szinten egyenlő a metszetterület, a térfogatok is egyenlők.

**Hasáb és gúla térfogata:** $V_{\\text{hasáb}}=Tm,\\quad V_{\\text{gúla}}=\\frac{Tm}{3}$

$T$ az alapterület, $m$ a magasság; a gúla térfogata a hasáb harmada.

**Egyenes–sík hajlásszög:** $\\sin\\alpha=\\frac{|\\vec v\\cdot\\vec n|}{|\\vec v||\\vec n|}$

Az egyenes és a síkra eső merőleges vetületének szöge; az irányvektor és a normálvektor szögének kiegészítője.

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**A csonkagúla térfogata**

$V=\\frac{m}{3}\\left(T+\\sqrt{Tt}+t\\right)$

*Bizonyítás iránya:* Hasonló gúlák különbsége

**Euler-féle poliédertétel**

$c+l=e+2$

*Bizonyítás iránya:* Bizonyítás síkbarajzolt gráfra (Schlegel-diagram)

**A gúla térfogata**

$V=\\frac{Tm}{3}$

*Bizonyítás iránya:* Három egyenlő térfogatú tetraéder

**A gömb térfogata**

$V=\\frac{4}{3}r^3\\pi$

*Bizonyítás iránya:* Cavalieri-elv hengerrel és kúppal

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — Térelemek távolsága és szöge. Térbeli alakzatok. Felszín- és térfogatszámítás (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Térelemek: pont, egyenes, sík; illeszkedés
2. Távolságok: pont–sík, kitérő egyenesek (szemlélet)
3. Szögek: két sík, egyenes–sík
4. Hasáb, henger, gúla, kúp, gömb — felszín
5. Térfogatképletek; Cavalieri-elv szemlélete
6. Háló / kiterítés; metszetek
7. Szóbeli: 2–3 képlet + egy távolság/szög def.

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **A csonkagúla térfogata** (Hasonló gúlák különbsége).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,
  },

  {
    id: "tétel-22",
    number: 22,
    title: "Területszámítás elemi úton és az integrálszámítás felhasználásával",
    category: "Függvények és analízis",
    tags: [
      "Területszámítás",
      "Határozott integrál",
      "Newton–Leibniz",
      "Hérón-képlet",
      "Riemann-összeg",
      "Görbe alatti terület"
    ],
    difficulty: "3: trückös",
    summary: "Síkidomok területe elemi úton (háromszögek, négyszögek, kör, Hérón, Brahmagupta); a határozott integrál Riemann-összegekkel; a Newton–Leibniz-formula; előjeles terület és zérushelyek szerinti bontás; két görbe által közrezárt terület.",
    statementLatex: "\\int_a^b f=F(b)-F(a),\\quad T=\\int_a^b|f-g|\\,dx,\\quad T=rs=\\tfrac12 ab\\sin\\gamma",
    conditionsLatex: "f\\text{ folytonos }[a,b]\\text{-n};\\quad F'=f",
    formulaSheetReference: "Hivatalos Képlettár 2026: integrál, területek",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Integrálszámítás és geometria, 6–7. oldal"
    ],
    introduction: `A területszámítás a geometria legrégebbi problémái közé tartozik.

Archimédész kimerítéses módszerrel határozta meg a parabola íve alatti területet: a görbét egyre több, egyre kisebb háromszöggel közelítette.

Ugyanez a gondolat jelenik meg a Riemann-integrálban, ahol téglalapokkal közelítünk.

Gottfried Wilhelm Leibniz vezette be a $\\int$ jelet a latin „summa” szó nyújtott S betűjéből.

A Newton–Leibniz-formula teremti meg a kapcsolatot a differenciál- és integrálszámítás között: a terület a primitív függvény növekménye.

A szóbelin ezt a hidat kell hangsúlyozni — a vizsgáztató leggyakrabban arra kíváncsi, érti-e a jelölt, miért számolható terület integrállal.`,
    detailedTheory: `### 1. A terület fogalma és axiómái

- **Egység:** az egységnégyzet területe $1$.

- **Egybevágóság:** egybevágó síkidomok területe egyenlő.

- **Additivitás:** ha egy idom közös belső pont nélküli részekre bontható, területe a részek területének összege.

- **Monotonitás:** ha $A\\subseteq B$, akkor $T(A)\\le T(B)$.

- **Átdarabolás:** az átdarabolható idomok területe egyenlő — erre épül sok elemi bizonyítás (pl. paralelogramma → téglalap).

### 2. Elemi területképletek

- **Háromszög:** $T=\\frac12 ah_a=\\frac12 ab\\sin\\gamma=rs=\\frac{abc}{4R}=\\sqrt{s(s-a)(s-b)(s-c)}$, ahol $s=\\frac{a+b+c}{2}$ (Hérón-képlet).

- **Négyszögek:**
  - téglalap: $ab$;
  - paralelogramma: $ah$ (közös alap és magasság);
  - trapéz: $\\frac{a+c}{2}m$ (középvonal szorozva magassággal);
  - deltoid: $\\frac12 e f$ (átlók szorzata fele);
  - húrnégyszög: Brahmagupta-képlet $T=\\sqrt{(s-a)(s-b)(s-c)(s-d)}$, $s=\\frac{a+b+c+d}{2}$;
  - érintőnégyszög: $T=rs$.

- **Kör és részei:** $T=r^2\\pi$; körcikk $T=\\frac{\\alpha}{360^\\circ}r^2\\pi=\\frac12 r^2\\alpha$ (radiánban); körszelet $T=T_{\\text{cikk}}-T_{\\triangle}$; körgyűrű $T=(R^2-r^2)\\pi$.

- **Szabályos sokszög:** $n$ darab egyenlő szárú háromszögre bontható; $T=\\frac{n}{2}R^2\\sin\\frac{360^\\circ}{n}=\\frac{n}{4}a^2\\cot\\frac{180^\\circ}{n}$.

- **Sokszög koordinátákból (cipőfűző-képlet):** az $(x_1,y_1),\\dots,(x_n,y_n)$ csúcsú, önmagát nem metsző sokszög előjeles területe
  $$T=\\frac12\\left|\\sum_{i=1}^{n}(x_i y_{i+1}-x_{i+1}y_i)\\right|,\\qquad (x_{n+1},y_{n+1})=(x_1,y_1).$$

### 3. A határozott integrál (Riemann)

- Osszuk fel az $[a,b]$ intervallumot $n$ részre: $a=x_0<x_1<\\dots<x_n=b$, $\\Delta x_i=x_i-x_{i-1}$.
- Válasszunk minden részintervallumban egy $\\xi_i$ pontot; a **Riemann-összeg**
  $$S_n=\\sum_{i=1}^{n} f(\\xi_i)\\Delta x_i.$$
- Ha $f$ folytonos, a felosztás finomodásával az összeg egyetlen határértékhez tart, függetlenül a $\\xi_i$ választásától:
  $$\\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}\\sum_{i=1}^{n} f(\\xi_i)\\Delta x_i.$$

- **Tulajdonságok:** linearitás, additivitás ($\\int_a^b=\\int_a^c+\\int_c^b$), monotónia ($f\\le g\\Rightarrow\\int f\\le\\int g$), $\\int_a^a f=0$, $\\int_a^b f=-\\int_b^a f$.

- **Középértéktétel:** folytonos $f$-re létezik $\\xi\\in[a,b]$, amelyre $\\int_a^b f=f(\\xi)(b-a)$.

### 4. Newton–Leibniz-formula

- Ha $F'=f$ az $[a,b]$ intervallumon és $f$ folytonos, akkor
  $$\\int_a^b f(x)\\,dx=F(b)-F(a)=[F(x)]_a^b.$$

- **Szemlélet:** az $F(x)=\\int_a^x f(t)\\,dt$ integrálfüggvény deriváltja $f(x)$; tehát $F$ primitív függvény, és a határozott integrál a primitív növekménye.

- **Primitív függvények:** $\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C$ ($n\\neq-1$), $\\int\\frac1x\\,dx=\\ln|x|+C$, $\\int e^x dx=e^x+C$, $\\int\\sin x\\,dx=-\\cos x+C$, $\\int\\cos x\\,dx=\\sin x+C$.

### 5. Előjeles terület és görbe alatti terület

- Az $\\int_a^b f$ érték **előjeles**: az $x$-tengely alatti rész negatív hozzájárulást ad.
- A valódi (geometriai) terület:
  $$T=\\int_a^b |f(x)|\\,dx,$$
  amelyet célszerű a zérushelyeknél részekre bontani, és a részeken belül az előjelet figyelembe venni.

- **Két görbe között:** ha $f\\ge g$ az $[a,b]$-n, akkor
  $$T=\\int_a^b (f(x)-g(x))\\,dx;$$
  általában $T=\\int_a^b|f(x)-g(x)|\\,dx$, ahol $a,b$ a metszéspontok.

- **$y$ szerinti integrálás:** ha a tartományt függőlegesen célszerű szeletelni, $T=\\int_c^d |x_{\\text{jobb}}(y)-x_{\\text{bal}}(y)|\\,dy$.

### 6. Gyakorlati megjegyzések

- Metszéspontok meghatározása az integrálás előtt kötelező; a határok felcserélése előjelhibát okoz.
- Ha a függvény páratlan szimmetrikus intervallumon, az integrál nulla, de a terület nem az.
- Területszámításnál az integrál csak akkor ad területet, ha a függvény nem vált előjelet; különben bontani kell.
- Az integrálás alkalmazásai: ívhossz, forgástest térfogata és felszíne, súlypont, munkavégzés.`,
    theorems: [
      {
        theoremNumber: 1,
        title: "A háromszög területe $T=rs$",
        statementLatex: "T=r\\,s",
        proofTitle: "A beírt kör középpontjából való felbontás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Felbontás három háromszögre",
            latexContent: "T=T_{ABO}+T_{BCO}+T_{CAO}",
            explanation: "A beírt kör $O$ középpontját a csúcsokkal összekötve a háromszöget három kisebb háromszögre bontjuk."
          },
          {
            stepNumber: 2,
            title: "Magasság a sugár",
            latexContent: "m_a=m_b=m_c=r",
            explanation: "Az érintési pontba húzott sugár merőleges az oldalra, ezért mindhárom kis háromszög magassága $r$."
          },
          {
            stepNumber: 3,
            title: "Összegzés",
            latexContent: "T=\\frac12 ar+\\frac12 br+\\frac12 cr=r\\cdot\\frac{a+b+c}{2}=rs",
            explanation: "A félkerület $s=(a+b+c)/2$; ezzel megkapjuk a képletet."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "A Hérón-képlet levezetése",
        statementLatex: "T=\\sqrt{s(s-a)(s-b)(s-c)}",
        proofTitle: "Trigonometriai átalakítás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Terület szinuszos alakja",
            latexContent: "T=\\tfrac12 ab\\sin\\gamma",
            explanation: "Két oldal és a közrezárt szög ismeretében ezt a képletet használjuk."
          },
          {
            stepNumber: 2,
            title: "Koszinusztétel",
            latexContent: "\\cos\\gamma=\\frac{a^2+b^2-c^2}{2ab}",
            explanation: "A harmadik oldalt a koszinusztétellel fejezzük ki."
          },
          {
            stepNumber: 3,
            title: "Azonosság",
            latexContent: "\\sin^2\\gamma=1-\\cos^2\\gamma=\\frac{4a^2b^2-(a^2+b^2-c^2)^2}{4a^2b^2}",
            explanation: "A nevezetes szorzattal a jobb oldal tovább alakítható: $((a+b)^2-c^2)(c^2-(a-b)^2)$."
          },
          {
            stepNumber: 4,
            title: "Szorzat és gyök",
            latexContent: "T^2=\\tfrac14a^2b^2\\sin^2\\gamma=s(s-a)(s-b)(s-c)",
            explanation: "A négy tényezőre bontott kifejezésből $T=\\sqrt{s(s-a)(s-b)(s-c)}$ adódik; a gyökvonásnál a pozitív előjelet választjuk."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "A Newton–Leibniz-formula",
        statementLatex: "\\int_a^b f=F(b)-F(a)",
        proofTitle: "Az integrálfüggvény deriváltja",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Integrálfüggvény",
            latexContent: "\\Phi(x)=\\int_a^x f(t)\\,dt",
            explanation: "Definiáljuk a felső határ függvényében az addig felhalmozott előjeles területet."
          },
          {
            stepNumber: 2,
            title: "Differenciahányados",
            latexContent: "\\frac{\\Phi(x+h)-\\Phi(x)}{h}=\\frac1h\\int_x^{x+h}f(t)\\,dt",
            explanation: "Az integrál additivitását használva a különbség egy $h$ hosszú intervallumra vett integrál."
          },
          {
            stepNumber: 3,
            title: "Középértéktétel",
            latexContent: "\\frac1h\\int_x^{x+h}f(t)\\,dt=f(\\xi_h),\\quad \\xi_h\\in[x,x+h]",
            explanation: "Folytonos $f$ esetén a középértéktétel szerint létezik ilyen $\\xi_h$."
          },
          {
            stepNumber: 4,
            title: "Határérték",
            latexContent: "\\Phi'(x)=\\lim_{h\\to0}f(\\xi_h)=f(x)",
            explanation: "A folytonosság miatt $\\xi_h\\to x$, így $\\Phi'=f$. Tehát $\\Phi$ primitív függvény, és $\\int_a^b f=\\Phi(b)-\\Phi(a)=F(b)-F(a)$."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "Két görbe közötti terület",
        statementLatex: "T=\\int_a^b|f(x)-g(x)|\\,dx",
        proofTitle: "Terület mint előjeles integrál abszolút értéke",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Függőleges szeletek",
            latexContent: "\\Delta T\\approx|f(x)-g(x)|\\,\\Delta x",
            explanation: "Egy vékony függőleges sávban a két görbe közötti távolság $|f(x)-g(x)|$, a sáv szélessége $\\Delta x$."
          },
          {
            stepNumber: 2,
            title: "Összegzés",
            latexContent: "T\\approx\\sum|f(\\xi_i)-g(\\xi_i)|\\Delta x_i",
            explanation: "A sávok területét összeadjuk; ez a függvény Riemann-összege."
          },
          {
            stepNumber: 3,
            title: "Határérték",
            latexContent: "T=\\int_a^b|f(x)-g(x)|\\,dx",
            explanation: "Finomítással a Riemann-összeg az integrálhoz tart. Ha $f\\ge g$, az abszolút érték elhagyható."
          }
        ]
      }
    ],
    applicationsInside: [
      "Elemi sokszögterületek, Hérón, Brahmagupta, $T=rs$.",
      "Görbe alatti terület Newton–Leibniz-cel.",
      "Két függvény közti terület metszéspontokból.",
      "Előjeles integrál és valódi terület megkülönböztetése."
    ],
    applicationsOutside: [
      "Földmérés, telek- és táblaterület számítása.",
      "Fizika: munka $W=\\int F\\,dx$, út $s=\\int v\\,dt$, folyadéknyomás.",
      "Közgazdaságtan: fogyasztói és termelői többlet.",
      "Orvosi képalkotás: keresztmetszeti területek, térfogatbecslés."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Számítsd ki az $\\int_0^1 (x-x^2)\\,dx$ integrált, és értelmezd területként!",
        solutionLatex: "\\left[\\frac{x^2}{2}-\\frac{x^3}{3}\\right]_0^1=\\frac12-\\frac13=\\frac16.",
        explanation: "Az $[0,1]$ intervallumon $x\\ge x^2$, ezért az integrandus nemnegatív, és az integrál valóban a két görbe közti terület: $1/6$."
      },
      {
        problemNumber: 2,
        question: "Mekkora a $6$, $8$, $10$ oldalú háromszög területe Hérón-képlettel?",
        solutionLatex: "s=12,\\qquad T=\\sqrt{12\\cdot6\\cdot4\\cdot2}=\\sqrt{576}=24.",
        explanation: "A háromszög derékszögű ($6^2+8^2=10^2$), ezért a terület $\\frac12\\cdot6\\cdot8=24$ — a Hérón-képlet ugyanezt adja, ami jó ellenőrzés."
      },
      {
        problemNumber: 3,
        question: "Határozd meg az $f(x)=-x^2+8x-7$ parabola és a $g(x)=x+3$ egyenes által közrezárt területet!",
        solutionLatex: "-x^2+8x-7=x+3 \\implies x^2-7x+10=0 \\implies x_1=2,\\ x_2=5;\\quad T=\\int_2^5(-x^2+7x-10)\\,dx=\\left[-\\frac{x^3}{3}+\\frac{7x^2}{2}-10x\\right]_2^5=4{,}5.",
        explanation: "A metszéspontok adják az integrálási határokat. A különbségfüggvény a $[2,5]$ intervallumon pozitív, ezért nem kell abszolút értéket venni. Ellenőrzés: a parabola tengelypontja $x=4$, $f(4)=9$; az egyenes ott $7$, tehát a parabola van felül."
      },
      {
        problemNumber: 4,
        question: "Számítsd ki az $\\int_0^{2\\pi}\\sin x\\,dx$ értékét, majd az $y=\\sin x$ görbe és az $x$-tengely által közrezárt területet $[0,2\\pi]$-n!",
        solutionLatex: "\\int_0^{2\\pi}\\sin x\\,dx=[-\\cos x]_0^{2\\pi}=0;\\qquad T=\\int_0^{2\\pi}|\\sin x|\\,dx=2\\int_0^{\\pi}\\sin x\\,dx=2\\cdot2=4.",
        explanation: "Az integrál előjeles: a $[\\pi,2\\pi]$ szakaszon a görbe a tengely alatt van, ezért a két rész kioltja egymást. A valódi területhez abszolút érték vagy a $\\pi$ pontnál való szétbontás kell."
      },
      {
        problemNumber: 5,
        question: "Mekkora az $y=x^2$ parabola és az $y=x$ egyenes által közrezárt terület?",
        solutionLatex: "x^2=x \\implies x=0,\\ x=1;\\qquad T=\\int_0^1 (x-x^2)\\,dx=\\frac16.",
        explanation: "A $[0,1]$ intervallumon $x\\ge x^2$, ezért a különbség nemnegatív. Ugyanaz az integrál, mint az 1. feladatban — itt geometriai jelentéssel."
      },
      {
        problemNumber: 6,
        question: "Vezesd le az $r$ sugarú kör területét integrállal!",
        solutionLatex: "T=2\\int_{-r}^{r}\\sqrt{r^2-x^2}\\,dx=\\left[x\\sqrt{r^2-x^2}+r^2\\arcsin\\frac{x}{r}\\right]_{-r}^{r}=r^2\\pi.",
        explanation: "A felső félkör egyenlete $y=\\sqrt{r^2-x^2}$; a szimmetria miatt a $[-r,r]$ intervallumon vett integrál kétszerese. A primitív függvény az $x=r\\sin t$ helyettesítéssel adódik."
      }
    ],
    oralPresentationOutline: [
      'Elemi területek: háromszög, négyszög, kör, Hérón',
      'Riemann-összeg → határozott integrál',
      'Newton–Leibniz: ∫_a^b f = F(b)−F(a)',
      'Előjeles terület vs. geometriai terület (|f|)',
      'Két görbe közötti terület: ∫|f−g|',
      'Zérushelynél intervallum bontása (SG!)',
      'Szóbeli: elemi képlet + NL-formula + egy integrálos terület'
    ],
    requiredDefinitions: [
      {
        term: "Határozott integrál (Riemann)",
        definitionLatex: "\\int_a^b f=\\lim\\sum f(\\xi_i)\\Delta x_i",
        explanation: "A felosztás finomodásával a Riemann-összegek közös határértéke; nemnegatív $f$ esetén a görbe alatti terület."
      },
      {
        term: "Primitív függvény",
        definitionLatex: "F'=f",
        explanation: "Olyan differenciálható függvény, amelynek deriváltja $f$; az integrálás a deriválás fordított művelete."
      },
      {
        term: "Előjeles terület",
        definitionLatex: "\\int_a^b f",
        explanation: "A tengely feletti rész pozitív, a tengely alatti negatív előjellel számít; a valódi területhez abszolút érték kell."
      },
      {
        term: "Hérón-képlet",
        definitionLatex: "T=\\sqrt{s(s-a)(s-b)(s-c)}",
        explanation: "A háromszög területe kizárólag az oldalhosszokból, a félkerülettel kifejezve."
      }
    ],
    examinerTraps: [
      {
        question: "Mi a különbség az integrál értéke és a görbe alatti terület között?",
        answer: "Az integrál előjeles: a tengely alatti rész negatív. A valódi területhez abszolút érték vagy a zérushelyeknél való részekre bontás kell.",
        dangerLevel: "Magas"
      },
      {
        question: "Miért kell $|f-g|$ két görbe között?",
        answer: "Mert nem tudjuk előre, melyik görbe van felül; az integrál előjeles, a terület viszont nemnegatív. Ha ismert a sorrend, a különbség abszolút érték nélkül is felírható.",
        dangerLevel: "Közepes"
      },
      {
        question: "Zérushelynél mi a teendő?",
        answer: "Bontsd az intervallumot a zérushelyeknél, és a részeket külön számold; csak az azonos előjelű szakaszokon egyezik az integrál a területtel.",
        dangerLevel: "Magas"
      },
      {
        question: "A Newton–Leibniz-formula minden függvényre érvényes?",
        answer: "Nem. Folytonos $f$ és létező primitív függvény kell hozzá; szakadásos függvénynél (pl. $1/x^2$ a $[-1,1]$-en) a formula nem alkalmazható közvetlenül.",
        dangerLevel: "Magas"
      },
      {
        question: "A terület negatív is lehet?",
        answer: "Nem, a geometriai terület nemnegatív. Negatív értéket az előjeles integrál adhat, ami csak algebrai fogalom.",
        dangerLevel: "Közepes"
      }
    ],
    applications: [
      {
        title: "Parabola és egyenes területe",
        problem: "$f(x)=-x^2+8x-7$, $g(x)=x+3$",
        solutionLatex: "T=4{,}5"
      },
      {
        title: "Előjeles integrál",
        problem: "$\\int_0^{2\\pi}\\sin x\\,dx$ és a görbe alatti terület",
        solutionLatex: "0,\\quad T=4"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Elemi képletek, Riemann-integrál, Newton–Leibniz."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Határozott integrál vagy primitív függvény."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "$T=rs$, Hérón vagy Newton–Leibniz."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Görbék közötti terület."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Fizika, földmérés, Archimédész."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Kalkulus és geometria."
      }
    ],
    historicalContext: "Archimédész: kimerítéses módszer, parabola területe. Leibniz: a $\\int$ jel. Newton és Leibniz: a kalkulus alaptétele.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 22. Tétel (143–148. oldal): Zérushely jelenléténél ne felejtsd el szétbontani az integrálási intervallumot!",
    memorizationMaterial: `## Bemagolandó — Területszámítás elemi úton és az integrálszámítás felhasználásával

### Fő állítás / képletek

$\\int_a^b f=F(b)-F(a),\\quad T=\\int_a^b|f-g|\\,dx,\\quad T=rs=\\tfrac12 ab\\sin\\gamma$

### Definíciók

**Határozott integrál (Riemann):** $\\int_a^b f=\\lim\\sum f(\\xi_i)\\Delta x_i$

A felosztás finomodásával a Riemann-összegek közös határértéke; nemnegatív $f$ esetén a görbe alatti terület.

**Primitív függvény:** $F'=f$

Olyan differenciálható függvény, amelynek deriváltja $f$; az integrálás a deriválás fordított művelete.

**Előjeles terület:** $\\int_a^b f$

A tengely feletti rész pozitív, a tengely alatti negatív előjellel számít; a valódi területhez abszolút érték kell.

**Hérón-képlet:** $T=\\sqrt{s(s-a)(s-b)(s-c)}$

A háromszög területe kizárólag az oldalhosszokból, a félkerülettel kifejezve.

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**A háromszög területe $T=rs$**

$T=r\\,s$

*Bizonyítás iránya:* A beírt kör középpontjából való felbontás

**A Hérón-képlet levezetése**

$T=\\sqrt{s(s-a)(s-b)(s-c)}$

*Bizonyítás iránya:* Trigonometriai átalakítás

**A Newton–Leibniz-formula**

$\\int_a^b f=F(b)-F(a)$

*Bizonyítás iránya:* Az integrálfüggvény deriváltja

**Két görbe közötti terület**

$T=\\int_a^b|f(x)-g(x)|\\,dx$

*Bizonyítás iránya:* Terület mint előjeles integrál abszolút értéke

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — Területszámítás elemi úton és az integrálszámítás felhasználásával (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Elemi területek: háromszög, négyszög, kör, Hérón
2. Riemann-összeg → határozott integrál
3. Newton–Leibniz: ∫_a^b f = F(b)−F(a)
4. Előjeles terület vs. geometriai terület (|f|)
5. Két görbe közötti terület: ∫|f−g|
6. Zérushelynél intervallum bontása (SG!)
7. Szóbeli: elemi képlet + NL-formula + egy integrálos terület

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **A háromszög területe $T=rs$** (A beírt kör középpontjából való felbontás).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,
    visualizerType: 'function'
  },
  {
    id: "tétel-23",
    number: 23,
    title: "Kombináció. Binomiális együtthatók, tulajdonságaik. Binomiális tétel. A klasszikus valószínűségi modell. A hipergeometrikus eloszlás",
    category: "Kombinatorika és valószínűség",
    tags: [
      "Kombináció",
      "Binomiális együttható",
      "Binomiális tétel",
      "Klasszikus valószínűség",
      "Hipergeometrikus eloszlás",
      "Pascal-háromszög"
    ],
    difficulty: "3: trückös",
    summary: "A kombináció fogalma és képlete; a binomiális együtthatók tulajdonságai (szimmetria, Pascal-azonosság, összeg); a binomiális tétel és bizonyítása; a klasszikus valószínűségi modell; a hipergeometrikus eloszlás képlete és alkalmazásai.",
    statementLatex: "\\binom{n}{k}=\\frac{n!}{k!(n-k)!},\\quad (a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k,\\quad P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}",
    conditionsLatex: "0\\le k\\le n;\\quad \\text{egyenlően valószínű elemi események}",
    formulaSheetReference: "Hivatalos Képlettár 2026: kombinatorika, valószínűség",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Kombinatorika és valószínűségszámítás, 5–6. oldal"
    ],
    introduction: `A kombinatorika a leszámlálás tudománya: hányféleképpen lehet kiválasztani, elrendezni, csoportosítani.

A binomiális együtthatók már Blaise Pascal 1654-es munkájában megjelennek a Pascal-háromszög formájában, bár Kínában és Perzsiában évszázadokkal korábban is ismerték.

A binomiális tétel Newton nevéhez fűződik, aki általánosította negatív és tört kitevőkre is.

A valószínűségszámítás a 17. századi szerencsejátékokból indult: Pascal és Fermat levelezése a kockajátékok problémáiról tekinthető a terület születésének.

A klasszikus modell és a hipergeometrikus eloszlás a mindennapi életben is jelen van: lottó, minőségellenőrzés, népszámlálás.

A szóbelin a legfontosabb, hogy pontosan el tudjuk különíteni a kombinációt a variációtól és a permutációtól.`,
    detailedTheory: `### 1. Leszámlálási alapelvek

- **Szorzási szabály:** ha egy döntés $m$, egy másik $n$féleképpen hozható, akkor a két döntés együttesen $m\\cdot n$féleképpen.

- **Összeadási szabály:** ha két esetkör egymást kizárja, és az egyikben $m$, a másikban $n$ lehetőség van, akkor összesen $m+n$ lehetőség.

- **Permutáció:** $n$ különböző elem sorrendje: $n!$; ismétléses permutáció: $\\frac{n!}{k_1!k_2!\\cdots}$.

- **Variáció:** $n$ elemből $k$ kiválasztása **sorrendben**, ismétlés nélkül: $\\frac{n!}{(n-k)!}$; ismétléssel: $n^k$.

- **Kombináció:** $n$ elemből $k$ kiválasztása **sorrend nélkül**, ismétlés nélkül:
  $$\\binom{n}{k}=C_n^k=\\frac{n!}{k!(n-k)!}.$$
  Ismétléses kombináció (multihalmaz): $\\binom{n+k-1}{k}$.

- **Megkülönböztetés:** kombinációnál a kiválasztás sorrendje nem számít; variációnál számít; permutációnál az összes elem sorrendjét rendezzük.

- **Alapösszefüggés:** $\\binom{n}{k}=\\frac{n}{k}\\binom{n-1}{k-1}$, valamint $\\binom{n}{0}=\\binom{n}{n}=1$, $\\binom{n}{1}=n$.

### 2. A binomiális együtthatók tulajdonságai

- **Szimmetria:** $\\binom{n}{k}=\\binom{n}{n-k}$. Kombinatorikusan: a $k$ kiválasztott elem helyett a bent maradó $n-k$ elemet választjuk ki.

- **Pascal-azonosság:** $\\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k}$. Ez építi fel a Pascal-háromszöget.

- **Összeg:** $\\sum_{k=0}^{n}\\binom{n}{k}=2^n$ — az $n$ elemű halmaz összes részhalmazának száma.

- **Váltakozó összeg:** $\\sum_{k=0}^{n}(-1)^k\\binom{n}{k}=0$ ($n\\ge1$).

- **Unimodalitás:** a sorozat $k=\\lfloor n/2\\rfloor$-ig nő, majd szimmetrikusan csökken.

- **Vandermonde-azonosság:** $\\sum_{i=0}^{k}\\binom{m}{i}\\binom{n}{k-i}=\\binom{m+n}{k}$.

- **Hokibot-azonosság:** $\\sum_{i=k}^{n}\\binom{i}{k}=\\binom{n+1}{k+1}$.

- **Nevezetes értékek:** $\\binom{n}{2}=\\frac{n(n-1)}{2}$ (kézfogások száma), $\\binom{n}{3}=\\frac{n(n-1)(n-2)}{6}$.

### 3. A binomiális tétel

- Minden $a,b$ valósra és $n\\in\\mathbb N$ esetén
  $$(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k.$$
- Például $(a+b)^3=a^3+3a^2b+3ab^2+b^3$, $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$.

- **Szemlélet:** az $(a+b)^n$ szorzatban minden taghoz $n$ tényezőből választunk $a$-t vagy $b$-t; a $b$-t pontosan $k$-szor választó lehetőségek száma $\\binom{n}{k}$.

- **Következmény:** $a=b=1$ esetén $\\sum\\binom{n}{k}=2^n$; $a=1,b=-1$ esetén $\\sum(-1)^k\\binom{n}{k}=0$.

### 4. A klasszikus valószínűségi modell

- **Elemi esemény:** a kísérlet egyetlen lehetséges kimenetele. Az elemi események halmaza az **eseménytér** $\\Omega$.

- **Esemény:** az eseménytér egy részhalmaza. A biztos esemény $\\Omega$, a lehetetlen esemény $\\varnothing$.

- **Klasszikus modell:** véges sok, **egyenlően valószínű** elemi esemény esetén
  $$P(A)=\\frac{|A|}{|\\Omega|}=\\frac{\\text{kedvező elemi események száma}}{\\text{összes elemi esemény száma}}.$$

- **Tulajdonságok:** $0\\le P(A)\\le1$; $P(\\Omega)=1$; $P(\\varnothing)=0$; $P(\\overline A)=1-P(A)$; ha $A\\cap B=\\varnothing$, akkor $P(A\\cup B)=P(A)+P(B)$; általában $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.

- **Függetlenség:** $A$ és $B$ független, ha $P(A\\cap B)=P(A)P(B)$.

- **Feltételes valószínűség:** $P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$, ha $P(B)>0$.

### 5. A hipergeometrikus eloszlás

- **Kísérlet:** $N$ elem között $K$ „kedvező” (pl. piros golyó) és $N-K$ „kedvezőtlen”; visszatevés **nélkül** kiválasztunk $n$ elemet. Jelölje $X$ a kiválasztott kedvező elemek számát.

- **Eloszlás:**
  $$P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}},\\qquad k=0,1,\\dots,\\min(K,n).$$

- **Várható érték:** $E(X)=n\\frac{K}{N}$; **szórás:** $D(X)=\\sqrt{n\\frac{K}{N}\\left(1-\\frac{K}{N}\\right)\\frac{N-n}{N-1}}$.

- **Kapcsolat a binomiálissal:** visszatevés nélkül hipergeometrikus, visszatevéssel binomiális eloszlás. Nagy $N$ és kis $n$ esetén a kettő közel azonos.

- **Alkalmazás:** lottó, minőségellenőrzés (hibás termékek száma a mintában), biológiai mintavétel.

### 6. Mintapéldák és gyakori hibák

- **Lottó:** $5$-ös lottó, $90$ szám, $5$ találat valószínűsége $1/\\binom{90}{5}$.

- **Kiosztás:** $n$ emberből $k$-tagú bizottság: $\\binom{n}{k}$; ha a bizottságon belül szerepek is vannak, akkor $\\binom{n}{k}\\cdot k!$.

- **Gyakori hiba:** a „legalább egy” típusú feladatokat komplementerrel érdemes számolni: $P(\\text{legalább egy})=1-P(\\text{egy sem})$.`,
    theorems: [
      {
        theoremNumber: 1,
        title: "A binomiális tétel",
        statementLatex: "(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k",
        proofTitle: "Kombinatorikus leszámlálás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "A szorzat felbontása",
            latexContent: "(a+b)^n=(a+b)(a+b)\\cdots(a+b)",
            explanation: "A hatvány $n$ darab tényező szorzata; minden tényezőből $a$-t vagy $b$-t választunk."
          },
          {
            stepNumber: 2,
            title: "Egy tag kiválasztása",
            latexContent: "a^{n-k}b^k",
            explanation: "Ha pontosan $k$ tényezőből választjuk $b$-t (és $n-k$-ból $a$-t), a szorzat értéke $a^{n-k}b^k$."
          },
          {
            stepNumber: 3,
            title: "Leszámlálás",
            latexContent: "\\text{az ilyen választások száma } \\binom{n}{k}",
            explanation: "Azon $k$ tényezők kiválasztása, amelyekből $b$-t veszünk, $\\binom{n}{k}$féleképpen lehetséges."
          },
          {
            stepNumber: 4,
            title: "Összegzés",
            latexContent: "(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k",
            explanation: "A $k=0,\\dots,n$ értékekre összegezve megkapjuk a binomiális tételt."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "A binomiális együtthatók szimmetriája",
        statementLatex: "\\binom{n}{k}=\\binom{n}{n-k}",
        proofTitle: "Kombinatorikus megfeleltetés",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Kiválasztás",
            latexContent: "\\binom{n}{k}",
            explanation: "Az $n$ elemű halmazból $k$ elem kiválasztásainak száma."
          },
          {
            stepNumber: 2,
            title: "Komplementer",
            latexContent: "A\\mapsto \\overline A",
            explanation: "Minden $k$ elemű részhalmazhoz egyértelműen hozzárendeljük az $n-k$ elemű komplementerét."
          },
          {
            stepNumber: 3,
            title: "Bijekció",
            latexContent: "\\binom{n}{k}=\\binom{n}{n-k}",
            explanation: "Ez a hozzárendelés kölcsönösen egyértelmű, tehát a két leszámlálás ugyanannyi."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "A Pascal-azonosság",
        statementLatex: "\\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k}",
        proofTitle: "Kitüntetett elem szerinti esetszétválasztás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Kitüntetett elem",
            latexContent: "x\\in H,\\ |H|=n",
            explanation: "Az $n$ elemű halmazból választunk $k$ elemet; jelöljünk ki egy $x$ elemet."
          },
          {
            stepNumber: 2,
            title: "Két eset",
            latexContent: "x\\in A \\text{ vagy } x\\notin A",
            explanation: "Ha $x$ benne van a kiválasztott halmazban, a maradék $k-1$ elemet $n-1$-ből választjuk; ha nincs, $k$ elemet választunk $n-1$-ből."
          },
          {
            stepNumber: 3,
            title: "Összeg",
            latexContent: "\\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k}",
            explanation: "A két eset egymást kizárja és lefedi az összes lehetőséget, ezért összeadhatók."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "A binomiális együtthatók összege",
        statementLatex: "\\sum_{k=0}^{n}\\binom{n}{k}=2^n",
        proofTitle: "Két út: binomiális tétel és részhalmazok",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Binomiális tétel",
            latexContent: "(1+1)^n=\\sum\\binom{n}{k}",
            explanation: "Az $a=b=1$ helyettesítés közvetlenül adja az összeget."
          },
          {
            stepNumber: 2,
            title: "Részhalmazok",
            latexContent: "\\text{minden elemre: benne van / nincs benne}",
            explanation: "Minden részhalmazt úgy kapunk, hogy minden elemről külön döntünk; ez $2^n$ lehetőség."
          },
          {
            stepNumber: 3,
            title: "Egyezés",
            latexContent: "\\sum_{k=0}^{n}\\binom{n}{k}=2^n",
            explanation: "A $k$ elemű részhalmazok száma $\\binom{n}{k}$; ezek összege az összes részhalmaz száma."
          }
        ]
      },
      {
        theoremNumber: 5,
        title: "A hipergeometrikus eloszlás képlete",
        statementLatex: "P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}",
        proofTitle: "Klasszikus modell és leszámlálás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Összes kiválasztás",
            latexContent: "|\\Omega|=\\binom{N}{n}",
            explanation: "Az $N$ elemből $n$-t visszatevés nélkül, sorrend nélkül választunk."
          },
          {
            stepNumber: 2,
            title: "Kedvező esetek",
            latexContent: "|A|=\\binom{K}{k}\\binom{N-K}{n-k}",
            explanation: "A $K$ kedvező elemből $k$-t, a kedvezőtlenekből $n-k$-t választunk, egymástól függetlenül."
          },
          {
            stepNumber: 3,
            title: "Hányados",
            latexContent: "P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}",
            explanation: "Mivel minden $n$ elemű kiválasztás egyenlően valószínű, a klasszikus modell képlete adja az eloszlást."
          }
        ]
      }
    ],
    applicationsInside: [
      "Kiválasztási feladatok: bizottság, kézfogás, sorsolás.",
      "Binomiális együtthatós azonosságok igazolása.",
      "Lottó és kártyafeladatok klasszikus modellel.",
      "Hipergeometrikus eloszlás visszatevés nélküli mintavételre."
    ],
    applicationsOutside: [
      "Minőségellenőrzés: hibás termékek száma a mintában.",
      "Biológia: jelölt egyedek visszafogása, populációbecslés.",
      "Szerencsejátékok és biztosítási kockázat.",
      "Kvótás kiválasztás, közvélemény-kutatás mintavétele."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Hányféleképpen választható ki 5 diák egy 12 fős osztályból?",
        solutionLatex: "\\binom{12}{5}=\\frac{12!}{5!\\,7!}=792.",
        explanation: "A kiválasztás sorrendje nem számít, ezért kombináció. Ellenőrzés: $\\binom{12}{5}=\\binom{12}{7}=792$."
      },
      {
        problemNumber: 2,
        question: "Mennyi az $x^3$ együtthatója az $(x+2)^5$ kifejtésében?",
        solutionLatex: "\\binom{5}{3}x^3\\cdot2^2=10\\cdot4\\,x^3=40x^3 \\implies 40.",
        explanation: "A binomiális tételben $k=2$ esetén kapunk $x^3$-at: $\\binom{5}{2}x^3\\cdot2^2=40x^3$. A kitevőket mindig ellenőrizni kell."
      },
      {
        problemNumber: 3,
        question: "Mennyi a valószínűsége, hogy az ötös lottón mind az 5 számot eltaláljuk? (90 számból 5-öt húznak.)",
        solutionLatex: "P=\\frac{1}{\\binom{90}{5}}=\\frac{1}{43\\,949\\,268}\\approx2{,}28\\cdot10^{-8}.",
        explanation: "Az összes lehetséges szelvény száma $\\binom{90}{5}$; pontosan egy kedvező van. Ez a klasszikus modell közvetlen alkalmazása."
      },
      {
        problemNumber: 4,
        question: "Egy dobozban 4 piros és 6 kék golyó van. Visszatevés nélkül kihúzunk 3 golyót. Mennyi a valószínűsége, hogy pontosan 2 piros lesz köztük?",
        solutionLatex: "P(X=2)=\\frac{\\binom{4}{2}\\binom{6}{1}}{\\binom{10}{3}}=\\frac{6\\cdot6}{120}=0{,}3.",
        explanation: "Hipergeometrikus eloszlás: $N=10$, $K=4$, $n=3$, $k=2$. Ellenőrzés: a kedvező esetek száma 36, az összes 120."
      },
      {
        problemNumber: 5,
        question: "Hányféleképpen lehet 8 emberből egy 3 tagú bizottságot választani, ha a bizottságon belül van elnök, titkár és jegyző?",
        solutionLatex: "\\binom{8}{3}\\cdot3!=56\\cdot6=336.",
        explanation: "Először kiválasztjuk a 3 tagot, majd a szerepeket $3!$féleképpen osztjuk ki. Ez megegyezik a $8\\cdot7\\cdot6=336$ variációs számítással."
      },
      {
        problemNumber: 6,
        question: "Két szabályos kockával dobunk. Mennyi a valószínűsége, hogy az összeg 7?",
        solutionLatex: "P=\\frac{6}{36}=\\frac16.",
        explanation: "Az összes elemi esemény $6\\cdot6=36$; a kedvezőek $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$, összesen 6."
      }
    ],
    oralPresentationOutline: [
      'Kombináció: C(n,k)=n!/(k!(n−k)!)',
      'Binomiális együtthatók tulajdonságai; szimmetria',
      'Pascal-háromszög; rekurzió C(n,k)=C(n−1,k−1)+C(n−1,k)',
      'Binomiális tétel: (a+b)^n = Σ C(n,k) a^{n−k} b^k',
      'Alkalmazás: együttható kikeresése, közelítés',
      'Kapcsolat valószínűséggel (binomiális eloszlás előkészítés)',
      'Szóbeli: def. + tétel + egy számolás'
    ],
    requiredDefinitions: [
      {
        term: "Kombináció",
        definitionLatex: "\\binom{n}{k}=\\frac{n!}{k!(n-k)!}",
        explanation: "$n$ elemből $k$ kiválasztása sorrend nélkül, ismétlés nélkül."
      },
      {
        term: "Binomiális együttható",
        definitionLatex: "\\binom{n}{k}",
        explanation: "Az $n$ elemű halmaz $k$ elemű részhalmazainak száma; a Pascal-háromszög elemei."
      },
      {
        term: "Klasszikus valószínűség",
        definitionLatex: "P(A)=\\frac{|A|}{|\\Omega|}",
        explanation: "Véges, egyenlően valószínű elemi események esetén a kedvező és az összes eset hányadosa."
      },
      {
        term: "Hipergeometrikus eloszlás",
        definitionLatex: "P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}",
        explanation: "Visszatevés nélküli mintavételnél a kedvező elemek számának eloszlása."
      }
    ],
    examinerTraps: [
      {
        question: "Mikor kell kombinációt és mikor variációt használni?",
        answer: "Ha a kiválasztás sorrendje nem számít, kombináció; ha számít (pl. szerepek, sorrend, helyezés), variáció. A „bizottság” általában kombináció, a „elnök, titkár, jegyző” viszont variáció.",
        dangerLevel: "Magas"
      },
      {
        question: "A hipergeometrikus és a binomiális eloszlás ugyanaz?",
        answer: "Nem. A hipergeometrikus visszatevés nélküli, a binomiális visszatevéses mintavételre vonatkozik. Nagy populáció és kis minta esetén közelíthetők egymással.",
        dangerLevel: "Magas"
      },
      {
        question: "A $P(A\\cup B)=P(A)+P(B)$ összefüggés mindig igaz?",
        answer: "Csak akkor, ha $A$ és $B$ egymást kizáró események. Általában $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
        dangerLevel: "Közepes"
      },
      {
        question: "Miért $\\binom{n}{k}=\\binom{n}{n-k}$?",
        answer: "Mert a $k$ kiválasztott elem egyértelműen meghatározza a bent maradó $n-k$ elemet; a két leszámlálás ugyanazt számolja.",
        dangerLevel: "Közepes"
      }
    ],
    applications: [
      {
        title: "Hipergeometrikus mintavétel",
        problem: "4 piros, 6 kék golyóból 3-at húzunk visszatevés nélkül. $P(2$ piros$)$?",
        solutionLatex: "0{,}3"
      },
      {
        title: "Lottó",
        problem: "Ötös lottó, 5 találat valószínűsége?",
        solutionLatex: "1/43\\,949\\,268"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Kombináció, binomiális együtthatók, hipergeometrikus eloszlás."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Kombináció vagy klasszikus valószínűség."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "Binomiális tétel vagy Pascal-azonosság."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Leszámlálás, valószínűség."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Lottó, minőségellenőrzés, Pascal."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Kombinatorika és valószínűség."
      }
    ],
    historicalContext: "Pascal és Fermat: a valószínűségszámítás kezdetei; Newton: binomiális tétel; a Pascal-háromszög kínai és perzsa előzményei.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 23. Tétel (149–156. oldal): Hangsúlyozd a visszatevés nélküli mintavételt a hipergeometrikus eloszlásnál!",
    memorizationMaterial: `## Bemagolandó — Kombináció. Binomiális együtthatók, tulajdonságaik. Binomiális tétel. A klasszikus valószínűségi modell. A hipergeometrikus eloszlás

### Fő állítás / képletek

$\\binom{n}{k}=\\frac{n!}{k!(n-k)!},\\quad (a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k,\\quad P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$

### Definíciók

**Kombináció:** $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$

$n$ elemből $k$ kiválasztása sorrend nélkül, ismétlés nélkül.

**Binomiális együttható:** $\\binom{n}{k}$

Az $n$ elemű halmaz $k$ elemű részhalmazainak száma; a Pascal-háromszög elemei.

**Klasszikus valószínűség:** $P(A)=\\frac{|A|}{|\\Omega|}$

Véges, egyenlően valószínű elemi események esetén a kedvező és az összes eset hányadosa.

**Hipergeometrikus eloszlás:** $P(X=k)=\\frac{\\binom{K}{k}\\binom{N-K}{n-k}}{\\binom{N}{n}}$

Visszatevés nélküli mintavételnél a kedvező elemek számának eloszlása.

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**A binomiális tétel**

$(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k$

*Bizonyítás iránya:* Kombinatorikus leszámlálás

**A binomiális együtthatók szimmetriája**

$\\binom{n}{k}=\\binom{n}{n-k}$

*Bizonyítás iránya:* Kombinatorikus megfeleltetés

**A Pascal-azonosság**

$\\binom{n}{k}=\\binom{n-1}{k-1}+\\binom{n-1}{k}$

*Bizonyítás iránya:* Kitüntetett elem szerinti esetszétválasztás

**A binomiális együtthatók összege**

$\\sum_{k=0}^{n}\\binom{n}{k}=2^n$

*Bizonyítás iránya:* Két út: binomiális tétel és részhalmazok

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — Kombináció. Binomiális együtthatók, tulajdonságaik. Binomiális tétel. A klasszikus valószínűségi modell. A hipergeometrikus eloszlás (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Kombináció: C(n,k)=n!/(k!(n−k)!)
2. Binomiális együtthatók tulajdonságai; szimmetria
3. Pascal-háromszög; rekurzió C(n,k)=C(n−1,k−1)+C(n−1,k)
4. Binomiális tétel: (a+b)^n = Σ C(n,k) a^{n−k} b^k
5. Alkalmazás: együttható kikeresése, közelítés
6. Kapcsolat valószínűséggel (binomiális eloszlás előkészítés)
7. Szóbeli: def. + tétel + egy számolás

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **A binomiális tétel** (Kombinatorikus leszámlálás).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,

    visualizerType: 'binomial'
  },
  {
    id: "tétel-24",
    number: 24,
    title: "Permutáció, variáció. A binomiális eloszlás. A geometriai valószínűségi modell",
    category: "Kombinatorika és valószínűség",
    tags: [
      "Permutáció",
      "Variáció",
      "Binomiális eloszlás",
      "Geometriai valószínűség",
      "Bernoulli-kísérlet",
      "Mérték"
    ],
    difficulty: "3: trückös",
    summary: "Permutáció (ismétlés nélküli, ismétléses, ciklikus) és variáció (ismétlés nélküli, ismétléses); a binomiális eloszlás feltételei, képlete, várható értéke és szórása; a geometriai valószínűségi modell hossz-, terület- és térfogatarányokkal.",
    statementLatex: "P_n=n!,\\quad V_n^k=\\frac{n!}{(n-k)!},\\quad V_n^{k,\\mathrm{ism}}=n^k,\\quad P(X=k)=\\binom nk p^k(1-p)^{n-k}",
    conditionsLatex: "0\\le p\\le 1,\\quad 0\\le k\\le n",
    formulaSheetReference: "Hivatalos Képlettár 2026: permutáció, variáció, eloszlások",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Kombinatorika és valószínűségszámítás, 11. oldal"
    ],
    introduction: `A valószínűségszámítás modern, axiómákra épülő felépítése Andrej Kolmogorov 1933-as munkájához kötődik, aki a mértékelmélet nyelvén fogalmazta meg a valószínűség tulajdonságait.

A geometriai valószínűség klasszikus példája Buffon tűproblémája (1777): egy tűt véletlenszerűen ejtünk vonalakkal mintázott síkra, és a metszés valószínűségéből $\\pi$ becsülhető.

A binomiális eloszlás a visszatevéses mintavétel és az ismételt független kísérletek modellje — a kockadobástól a minőségellenőrzésig.

A szóbelin a PVC-tábla (permutáció–variáció–kombináció) biztos ismerete elengedhetetlen, mert a vizsgáztató gyakran egyetlen feladaton keresztül ellenőrzi, hogy a jelölt felismeri-e a helyes modellt.`,
    detailedTheory: `### 1. A PVC-tábla

| | Sorrend számít | Sorrend nem számít |
|---|---|---|
| **Ismétlés nélkül** | $V_n^k=\\dfrac{n!}{(n-k)!}$ | $\\dbinom nk$ |
| **Ismétlés megengedett** | $n^k$ | $\\dbinom{n+k-1}{k}$ |
| **Teljes sorbaállítás** | $P_n=n!$ | — |

- **Kulcskérdés:** számít-e a sorrend, és megengedett-e az ismétlés? A válaszokból egyértelműen kiválasztható a modell.

- **Permutáció:** az összes elem sorba rendezése.

- **Variáció:** $n$ elemből $k$ kiválasztása, ahol a sorrend számít.

- **Kombináció:** $n$ elemből $k$ kiválasztása, ahol a sorrend nem számít.

### 2. Permutáció

- **Ismétlés nélküli:** $n$ különböző elem sorrendjeinek száma
  $$P_n=n!=1\\cdot2\\cdots n,\\qquad 0!=1.$$

- **Ismétléses:** ha az elemek között $k_1,k_2,\\dots,k_r$ darab azonos van ($k_1+\\dots+k_r=n$), a különböző sorrendek száma
  $$P_n^{k_1,\\dots,k_r}=\\frac{n!}{k_1!k_2!\\cdots k_r!}.$$

- **Ciklikus permutáció:** $n$ elem körbe rendezése; a forgatással egymásba vihető sorrendeket azonosnak tekintjük:
  $$P_n^{\\text{cikl}}=(n-1)!.$$

- **Példa:** 5 könyv közül 2 egyforma → $5!/2!=60$ különböző sorrend.

### 3. Variáció

- **Ismétlés nélküli:** $n$ elemből $k$ különböző elem kiválasztása és sorba rendezése:
  $$V_n^k=n(n-1)\\cdots(n-k+1)=\\frac{n!}{(n-k)!}.$$

- **Ismétléses:** minden pozícióra $n$ lehetőség, egymástól függetlenül:
  $$V_n^{k,\\mathrm{ism}}=n^k.$$

- **Példa:** 4 jegyű PIN-kód: $10^4=10\\,000$; ha nem ismétlődhet számjegy: $V_{10}^4=5040$.

### 4. A binomiális eloszlás

- **Bernoulli-kísérlet:** olyan kísérlet, amelynek két kimenetele van (siker / kudarc), a siker valószínűsége $p$, a kudarcé $1-p=q$.

- **Feltételek:** $n$ darab **független**, **azonos** $p$ paraméterű Bernoulli-kísérletet végzünk; $X$ a sikerek száma.

- **Eloszlás:**
  $$P(X=k)=\\binom nk p^k(1-p)^{n-k},\\qquad k=0,1,\\dots,n.$$

- **Szemlélet:** egy konkrét, $k$ sikert tartalmazó sorozat valószínűsége $p^kq^{n-k}$; a sikerek helyét $\\binom nk$féleképpen választhatjuk ki.

- **Várható érték és szórás:** $E(X)=np$, $D(X)=\\sqrt{np(1-p)}$.

- **Ellenőrzés:** $\\sum_{k=0}^n\\binom nk p^kq^{n-k}=(p+q)^n=1$, tehát valóban eloszlást kaptunk.

- **Legvalószínűbb érték:** $k\\approx np$ környékén van; a valószínűségek $k$ növekedésével először nőnek, majd csökkennek.

- **Kapcsolat a hipergeometrikussal:** visszatevés nélkül hipergeometrikus, visszatevéssel binomiális eloszlás; nagy populáció esetén a kettő közel azonos.

### 5. A geometriai valószínűségi modell

- **Alapgondolat:** ha az elemi események egy geometriai alakzat pontjai, és a pont „találomra” választódik, akkor a valószínűség a kedvező halmaz **mértékének** aránya:
  $$P(A)=\\frac{\\mathrm{mes}(A)}{\\mathrm{mes}(\\Omega)},$$
  ahol a mérték lehet hossz (1D), terület (2D) vagy térfogat (3D).

- **Példa:** egy $2\\times2$-es négyzetben véletlenszerűen választott pont az egységkörön belül van: $P=\\frac{\\pi\\cdot1^2}{4}=\\frac{\\pi}{4}\\approx0{,}785$.

- **Nullmértékű halmazok:** egyetlen pont, szakasz vagy görbe mértéke 0, ezért valószínűsége 0 — mégsem lehetetlen esemény. Ez a geometriai modell legfontosabb fogalmi csapdája.

- **Buffon tűprobléma:** $l$ hosszú tűt ejtünk $d>l$ távolságú párhuzamos vonalakra; a metszés valószínűsége $P=\\frac{2l}{\\pi d}$.

- **Feltételes geometriai valószínűség:** $P(A\\mid B)=\\frac{\\mathrm{mes}(A\\cap B)}{\\mathrm{mes}(B)}$.

### 6. Kolmogorov-axiómák (vázlat)

- $P(A)\\ge0$ minden eseményre.
- $P(\\Omega)=1$.
- Megszámlálhatóan sok, páronként diszjunkt eseményre $P\\left(\\bigcup A_i\\right)=\\sum P(A_i)$.
- Ezekből levezethető: $P(\\varnothing)=0$, $P(\\overline A)=1-P(A)$, $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.

### 7. Gyakori alkalmazások

- Jelszavak, PIN-kódok, rendszámok száma (variáció).
- Sorsolás, ülésrend, körkörös elrendezés (permutáció).
- Független ismételt kísérletek: kockadobás, selejtarány, sporttalálatok (binomiális).
- Geometriai valószínűség: darts, esőcsepp, találomra választott pont, Buffon-tű.`,
    theorems: [
      {
        theoremNumber: 1,
        title: "Az ismétléses variáció száma",
        statementLatex: "V_n^{k,\\mathrm{ism}}=n^k",
        proofTitle: "Szorzási szabály",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Pozíciók",
            latexContent: "1,2,\\dots,k",
            explanation: "$k$ egymást követő helyet töltünk ki; a sorrend számít."
          },
          {
            stepNumber: 2,
            title: "Helyenkénti választás",
            latexContent: "n\\cdot n\\cdots n",
            explanation: "Minden pozícióra $n$ lehetőség van, mert az ismétlés megengedett, és a választások függetlenek."
          },
          {
            stepNumber: 3,
            title: "Eredmény",
            latexContent: "n^k",
            explanation: "A szorzási szabály szerint a $k$ tényező szorzata $n^k$."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "Az ismétlés nélküli permutáció száma",
        statementLatex: "P_n=n!",
        proofTitle: "Szorzási szabály",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Első hely",
            latexContent: "n",
            explanation: "Az első helyre bármelyik $n$ elem kerülhet."
          },
          {
            stepNumber: 2,
            title: "További helyek",
            latexContent: "n-1,\\ n-2,\\ \\dots,\\ 1",
            explanation: "A már elhelyezett elemek nem használhatók újra, ezért a lehetőségek száma fogy."
          },
          {
            stepNumber: 3,
            title: "Szorzat",
            latexContent: "n(n-1)\\cdots2\\cdot1=n!",
            explanation: "A szorzási szabály szerint a lehetőségek száma $n!$."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "Az ismétléses permutáció száma",
        statementLatex: "\\frac{n!}{k_1!k_2!\\cdots k_r!}",
        proofTitle: "Azonos elemek összemosása",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Különböző elemek",
            latexContent: "n!",
            explanation: "Ha minden elem különböző lenne, $n!$ sorrend létezne."
          },
          {
            stepNumber: 2,
            title: "Azonos elemek cseréje",
            latexContent: "k_i!\\text{ azonos sorrend}",
            explanation: "Az $i$-edik fajta $k_i$ darab azonos elem egymás közötti cseréje nem ad új sorrendet, ezért minden valódi sorrendet $k_i!$-szor számoltunk."
          },
          {
            stepNumber: 3,
            title: "Osztás",
            latexContent: "\\frac{n!}{k_1!\\cdots k_r!}",
            explanation: "A túlszámlálást minden fajtára kiszűrjük; például $5!/2!=60$."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "A ciklikus permutáció száma",
        statementLatex: "(n-1)!",
        proofTitle: "A forgatások azonosítása",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Lineáris sorrendek",
            latexContent: "n!",
            explanation: "Ha a körből kivágunk egy helyet, $n!$ lineáris sorrendet kapunk."
          },
          {
            stepNumber: 2,
            title: "Forgatási osztályok",
            latexContent: "n\\text{ lineáris reprezentáció / kör}",
            explanation: "Minden körkörös elrendezésnek pontosan $n$ lineáris reprezentációja van, mert $n$ helyen vághatjuk fel."
          },
          {
            stepNumber: 3,
            title: "Osztás",
            latexContent: "\\frac{n!}{n}=(n-1)!",
            explanation: "Ugyanez adódik úgy is, hogy egy elemet rögzítünk, a többit pedig $(n-1)!$-féleképpen rendezzük."
          }
        ]
      },
      {
        theoremNumber: 5,
        title: "A binomiális eloszlás képlete",
        statementLatex: "P(X=k)=\\binom nk p^k(1-p)^{n-k}",
        proofTitle: "Független Bernoulli-kísérletek",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Egy konkrét sorozat",
            latexContent: "p^k(1-p)^{n-k}",
            explanation: "Egy olyan kimenetel, amelyben pontosan $k$ siker és $n-k$ kudarc van, a függetlenség miatt $p^kq^{n-k}$ valószínűségű."
          },
          {
            stepNumber: 2,
            title: "A sikerek helye",
            latexContent: "\\binom nk",
            explanation: "A $k$ siker helyét az $n$ kísérlet közül $\\binom nk$féleképpen választhatjuk ki."
          },
          {
            stepNumber: 3,
            title: "Összegzés",
            latexContent: "P(X=k)=\\binom nk p^k(1-p)^{n-k}",
            explanation: "A kedvező sorozatok valószínűségei egyenlők, ezért a szorzatot megszorozzuk a sorozatok számával."
          }
        ]
      },
      {
        theoremNumber: 6,
        title: "A binomiális eloszlás várható értéke",
        statementLatex: "E(X)=np",
        proofTitle: "A várható érték definíciójából",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Definíció",
            latexContent: "E(X)=\\sum_{k=0}^{n}k\\binom nk p^kq^{n-k}",
            explanation: "A várható érték az értékek valószínűségekkel súlyozott összege."
          },
          {
            stepNumber: 2,
            title: "Azonosság",
            latexContent: "k\\binom nk=n\\binom{n-1}{k-1}",
            explanation: "A binomiális együtthatóra vonatkozó azonosság; ezzel a $k=0$ tag eltűnik."
          },
          {
            stepNumber: 3,
            title: "Kiemelés",
            latexContent: "E(X)=np\\sum_{j=0}^{n-1}\\binom{n-1}{j}p^jq^{n-1-j}=np",
            explanation: "A maradó összeg a binomiális tétel szerint $(p+q)^{n-1}=1$, tehát $E(X)=np$."
          }
        ]
      }
    ],
    applicationsInside: [
      "Jelszó- és PIN-kódok száma ismétléses variációval.",
      "Sorsolás, ülésrend, körkörös elrendezés permutációval.",
      "Független ismételt kísérletek binomiális eloszlással.",
      "Geometriai valószínűség területaránnyal (darts, négyzet)."
    ],
    applicationsOutside: [
      "Informatika: jelszavak, kulcsterek, permutációs kódolás.",
      "Minőségellenőrzés: selejtek száma visszatevéses mintában.",
      "Buffon-tűprobléma: $\\pi$ Monte-Carlo becslése.",
      "Sport és játék: találati sorozatok, sorozatnyerés valószínűsége."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Hány 4 jegyű PIN-kód létezik, ha a számjegyek ismétlődhetnek (0–9)?",
        solutionLatex: "V_{10}^{4,\\mathrm{ism}}=10^4=10\\,000.",
        explanation: "Négy pozíció, mindegyikre 10 lehetőség, ismétlés megengedett; a szorzási szabály adja az eredményt."
      },
      {
        problemNumber: 2,
        question: "Egy $n=10$, $p=0{,}3$ paraméterű binomiális eloszlásnál mennyi $P(X=2)$?",
        solutionLatex: "P(X=2)=\\binom{10}{2}(0{,}3)^2(0{,}7)^8=45\\cdot0{,}09\\cdot0{,}057648\\approx0{,}2335.",
        explanation: "A képletbe helyettesítünk. Érdemes ellenőrizni, hogy $E(X)=np=3$, tehát a $k=2$ érték a várható érték közelében van — reális, hogy viszonylag nagy valószínűséget kapunk."
      },
      {
        problemNumber: 3,
        question: "Egy cinkelt kockán a hatos dobás valószínűsége $1/8$. Hét dobásból mennyi a valószínűsége, hogy pontosan öt hatos lesz?",
        solutionLatex: "P=\\binom75\\left(\\frac18\\right)^5\\left(\\frac78\\right)^2=21\\cdot\\frac{49}{2\\,097\\,152}\\approx0{,}00049=0{,}049\\%.",
        explanation: "Binomiális eloszlás $n=7$, $p=1/8$, $k=5$ paraméterrel. A $\\binom75=21$ a hatosok helyeinek száma; a kapott érték nagyon kicsi, ami összhangban van azzal, hogy $E(X)=7/8$."
      },
      {
        problemNumber: 4,
        question: "Egy $2\\times2$-es négyzetben véletlenszerűen választunk egy pontot. Mennyi a valószínűsége, hogy a pont az egységkörön belül van?",
        solutionLatex: "P=\\frac{\\pi\\cdot1^2}{2\\cdot2}=\\frac{\\pi}{4}\\approx0{,}785.",
        explanation: "A geometriai modellben a valószínűség a területek aránya. A négyzet területe 4, az egységköré $\\pi$."
      },
      {
        problemNumber: 5,
        question: "Hányféleképpen lehet 5 könyvet sorba rakni, ha közülük 2 egyforma?",
        solutionLatex: "\\frac{5!}{2!}=60.",
        explanation: "Ismétléses permutáció: az öt könyv $5!$ sorrendjében a két egyforma könyv cseréje nem ad új sorrendet, ezért osztunk $2!$-ral."
      },
      {
        problemNumber: 6,
        question: "Egy 20 kérdéses feleletválasztós tesztben minden kérdésre 4 válasz közül kell tippelni. Mennyi a helyes válaszok várható száma és szórása?",
        solutionLatex: "n=20,\\ p=\\tfrac14:\\quad E(X)=np=5,\\quad D(X)=\\sqrt{20\\cdot\\tfrac14\\cdot\\tfrac34}=\\sqrt{3{,}75}\\approx1{,}94.",
        explanation: "A tippelések független Bernoulli-kísérletek, ezért binomiális eloszlás. A várható érték $5$ helyes válasz, a szórás kb. $1{,}94$."
      }
    ],
    oralPresentationOutline: [
      'Permutáció: n!; ismétléses permutáció',
      'Variáció: V(n,k)=n!/(n−k)!; ismétléses variáció n^k',
      'Binomiális eloszlás: P(X=k)=C(n,k) p^k (1−p)^{n−k}',
      'Várható érték / szórás (binomiális) ha kell',
      'Geometriai valószínűség: hossz/terület arány',
      'Klasszikus vs. geometriai modell különbsége',
      'Szóbeli: permutáció/variáció/kombináció megkülönböztetés + példa'
    ],
    requiredDefinitions: [
      {
        term: "Permutáció",
        definitionLatex: "P_n=n!",
        explanation: "$n$ elem összes sorba rendezése; ismétléses esetben azonos elemek cseréje nem számít."
      },
      {
        term: "Variáció",
        definitionLatex: "V_n^k=\\frac{n!}{(n-k)!}",
        explanation: "$n$ elemből $k$ kiválasztása és sorba rendezése, ismétlés nélkül; ismétléssel $n^k$."
      },
      {
        term: "Binomiális eloszlás",
        definitionLatex: "P(X=k)=\\binom nk p^k(1-p)^{n-k}",
        explanation: "$n$ független, azonos $p$ paraméterű Bernoulli-kísérletben a sikerek számának eloszlása."
      },
      {
        term: "Geometriai valószínűség",
        definitionLatex: "P(A)=\\frac{\\mathrm{mes}(A)}{\\mathrm{mes}(\\Omega)}",
        explanation: "A kedvező halmaz és az eseménytér mértékének aránya (hossz, terület, térfogat)."
      }
    ],
    examinerTraps: [
      {
        question: "A geometriai modellben $P=0$ azt jelenti, hogy az esemény lehetetlen?",
        answer: "Nem. Egy pont vagy egy görbe mértéke 0, ezért a valószínűsége 0, de az esemény bekövetkezhet. A valószínűség 0 nem azonos a lehetetlenséggel.",
        dangerLevel: "Magas"
      },
      {
        question: "Miért $(n-1)!$ a ciklikus permutáció?",
        answer: "Mert a forgatással egymásba vihető elrendezések azonosak; minden körnek $n$ lineáris reprezentációja van, ezért $n!/n=(n-1)!$. Ugyanez: egy elemet rögzítünk, a többit $(n-1)!$-féleképpen rendezzük.",
        dangerLevel: "Közepes"
      },
      {
        question: "Mi a különbség a binomiális és a hipergeometrikus eloszlás között?",
        answer: "A binomiális visszatevéses (független) mintavételre, a hipergeometrikus visszatevés nélkülire vonatkozik. Utóbbinál a kísérletek nem függetlenek, mert a kivett elem megváltoztatja az arányokat.",
        dangerLevel: "Magas"
      },
      {
        question: "A binomiális eloszlásnál mindig $E(X)=np$?",
        answer: "Igen, ha a kísérletek függetlenek és azonos $p$ paraméterűek. Ha a $p$ kísérletenként változik, a képlet nem érvényes.",
        dangerLevel: "Közepes"
      }
    ],
    applications: [
      {
        title: "Cinkelt kocka binomiálisan",
        problem: "$p=1/8$, 7 dobás, pontosan 5 hatos",
        solutionLatex: "P\\approx0{,}049\\%"
      },
      {
        title: "Geometriai valószínűség",
        problem: "$2\\times2$-es négyzet, egységkör",
        solutionLatex: "P=\\pi/4\\approx0{,}785"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "PVC, binomiális eloszlás, geometriai modell."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Variáció vagy binomiális eloszlás."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "$n^k$, $n!$ vagy binomiális képlet."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "PVC vagy binomiális feladat."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "PIN, Buffon, minőségellenőrzés."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Kombinatorika és valószínűség."
      }
    ],
    historicalContext: "Buffon (1777): tűprobléma. Kolmogorov (1933): a valószínűség axiómái. Bernoulli: a binomiális eloszlás gyökerei.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 24. Tétel (155–160. oldal): Rajzold fel a PVC-táblát a rendszerezéshez!",
    memorizationMaterial: `## Bemagolandó — Permutáció, variáció. A binomiális eloszlás. A geometriai valószínűségi modell

### Fő állítás / képletek

$P_n=n!,\\quad V_n^k=\\frac{n!}{(n-k)!},\\quad V_n^{k,\\mathrm{ism}}=n^k,\\quad P(X=k)=\\binom nk p^k(1-p)^{n-k}$

### Definíciók

**Permutáció:** $P_n=n!$

$n$ elem összes sorba rendezése; ismétléses esetben azonos elemek cseréje nem számít.

**Variáció:** $V_n^k=\\frac{n!}{(n-k)!}$

$n$ elemből $k$ kiválasztása és sorba rendezése, ismétlés nélkül; ismétléssel $n^k$.

**Binomiális eloszlás:** $P(X=k)=\\binom nk p^k(1-p)^{n-k}$

$n$ független, azonos $p$ paraméterű Bernoulli-kísérletben a sikerek számának eloszlása.

**Geometriai valószínűség:** $P(A)=\\frac{\\mathrm{mes}(A)}{\\mathrm{mes}(\\Omega)}$

A kedvező halmaz és az eseménytér mértékének aránya (hossz, terület, térfogat).

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**Az ismétléses variáció száma**

$V_n^{k,\\mathrm{ism}}=n^k$

*Bizonyítás iránya:* Szorzási szabály

**Az ismétlés nélküli permutáció száma**

$P_n=n!$

*Bizonyítás iránya:* Szorzási szabály

**Az ismétléses permutáció száma**

$\\frac{n!}{k_1!k_2!\\cdots k_r!}$

*Bizonyítás iránya:* Azonos elemek összemosása

**A ciklikus permutáció száma**

$(n-1)!$

*Bizonyítás iránya:* A forgatások azonosítása

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — Permutáció, variáció. A binomiális eloszlás. A geometriai valószínűségi modell (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Permutáció: n!; ismétléses permutáció
2. Variáció: V(n,k)=n!/(n−k)!; ismétléses variáció n^k
3. Binomiális eloszlás: P(X=k)=C(n,k) p^k (1−p)^{n−k}
4. Várható érték / szórás (binomiális) ha kell
5. Geometriai valószínűség: hossz/terület arány
6. Klasszikus vs. geometriai modell különbsége
7. Szóbeli: permutáció/variáció/kombináció megkülönböztetés + példa

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **Az ismétléses variáció száma** (Szorzási szabály).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,

    visualizerType: 'binomial'
  },
  {
    id: "tétel-25",
    number: 25,
    title: "Bizonyítási módszerek: direkt bizonyítás, indirekt bizonyítás, skatulyaelv, teljes indukció, bizonyítás ábrával és más tétel segítségével",
    category: "Halmazok és logika",
    tags: [
      "Direkt bizonyítás",
      "Indirekt bizonyítás",
      "Teljes indukció",
      "Skatulyaelv",
      "Ellenpélda",
      "Logika"
    ],
    difficulty: "3: trückös",
    summary: "Az axióma, definíció, tétel és bizonyítás fogalma; direkt és indirekt bizonyítás; a teljes indukció három lépése; a skatulyaelv; ábrás bizonyítás és más tételek felhasználása; ellenpélda és cáfolat.",
    statementLatex: "\\sqrt2\\notin\\mathbb Q,\\quad \\sum_{i=1}^{n}i=\\frac{n(n+1)}{2},\\quad n+1 \\text{ tárgy} \\implies \\text{két tárgy egy rekeszben}",
    conditionsLatex: "n\\in\\mathbb N;\\quad \\text{a tárgyak száma > a rekeszek száma}",
    formulaSheetReference: "Hivatalos Képlettár 2026: bizonyítási módszerek",
    formulaSheetReferences: [
      "Matematika képlettár 2026 (OH) – Halmazok, logika, bizonyítások, 1–2. oldal"
    ],
    introduction: `A matematika egyetlen eszköze a bizonyítás: egy állítás addig nem tétel, amíg nem láttuk be, hogy minden lehetséges esetben igaz.

A görög matematika — különösen Euklidész Elemek című műve — tette a bizonyítást a tudomány szervező elvévé.

A bizonyítási módszerek rendszerezése a 19–20. századi logika és halmazelmélet eredménye: Frege, Russell, Hilbert és mások munkája nyomán vált világossá, mi a különbség axióma, definíció és tétel között.

A szóbelin ez a tétel kiváló alkalom arra, hogy a jelölt ne csak felsorolja a módszereket, hanem mindegyikre mutasson egy pontos, rövid példát.

A leggyakoribb hiba, hogy a jelölt összekeveri a példát a bizonyítással: egy állítás igazolásához nem elég néhány eset, cáfolásához viszont egyetlen ellenpélda is elég.`,
    detailedTheory: `### 1. Alapfogalmak

- **Axióma:** bizonyítás nélkül elfogadott alapállítás (pl. „két ponton át pontosan egy egyenes húzható” az euklideszi geometriában).

- **Definíció:** egy fogalom pontos meghatározása már ismert fogalmakkal (pl. „prímszám: az 1-nél nagyobb, csak 1-gyel és önmagával osztható természetes szám”).

- **Tétel:** bizonyított állítás. Szerkezete: feltétel (ha…), következmény (akkor…).

- **Bizonyítás:** logikai lépések sorozata, amely az axiómákból, definíciókból és korábbi tételekből kiindulva levezeti az állítást.

- **Szükséges és elégséges feltétel:** az „A pontosan akkor, ha B” azt jelenti, hogy $A\\Rightarrow B$ (elégséges) és $B\\Rightarrow A$ (szükséges) is igaz. A két irányt külön kell bizonyítani.

- **Tagadás:** a „minden $x$-re $P(x)$” tagadása „létezik $x$, amelyre nem $P(x)$”; a „létezik $x$, amelyre $P(x)$” tagadása „minden $x$-re nem $P(x)$”.

### 2. Direkt bizonyítás

- **Menete:** a feltételből kiindulva, ismert tételek és azonosságok felhasználásával lépésenként eljutunk a következményhez.

- **Példa:** két páros szám összege páros. Ha $a=2m$, $b=2n$, akkor $a+b=2(m+n)$, ami osztható 2-vel.

- **Példa:** két racionális szám szorzata racionális. Ha $x=\\frac ab$, $y=\\frac cd$ ($b,d\\neq0$), akkor $xy=\\frac{ac}{bd}$, és $bd\\neq0$.

- **Előnye:** áttekinthető, konstruktív; gyakran maga a bizonyítás is algoritmust ad.

### 3. Indirekt bizonyítás

- **Menete:** feltesszük az állítás tagadását, és logikai ellentmondásra jutunk; ebből következik, hogy a tagadás hamis, tehát az állítás igaz.

- **Példa:** $\\sqrt2$ irracionális. Tegyük fel, hogy $\\sqrt2=p/q$ egyszerűsített tört; négyzetre emelve $2q^2=p^2$, tehát $p$ páros, $p=2k$; visszahelyettesítve $q$ is páros — ellentmondás az egyszerűsítettséggel.

- **Példa:** végtelen sok prímszám van. Ha véges sok lenne, $p_1,\\dots,p_n$, akkor a $p_1p_2\\cdots p_n+1$ szám egyik prímmel sem osztható, tehát vagy maga prím, vagy van új prímosztója — ellentmondás.

- **Figyelem:** az indirekt bizonyításnál pontosan a **tagadást** kell felírni; a „nem igaz, hogy minden” nem ugyanaz, mint a „minden nem”.

### 4. Teljes indukció

- **Menete:** természetes számokra vonatkozó állítások bizonyítására szolgál.
  1. **Bázis:** az állítás igaz $n=1$-re (vagy a legkisebb szóba jövő értékre).
  2. **Indukciós feltevés:** feltesszük, hogy az állítás igaz valamely $n=k$-ra.
  3. **Indukciós lépés:** ebből bebizonyítjuk $n=k+1$-re.

- **Következtetés:** a bázis és az öröklődés miatt az állítás minden $n\\ge1$-re igaz.

- **Példa:** $1+2+\\dots+n=\\frac{n(n+1)}{2}$. Bázis $n=1$: $1=1$. Ha $n=k$-ra igaz, akkor
  $$1+\\dots+k+(k+1)=\\frac{k(k+1)}{2}+(k+1)=\\frac{(k+1)(k+2)}{2},$$
  ami éppen az $n=k+1$ eset.

- **Példa:** $2^n>n$ minden $n\\ge1$-re. Bázis $n=1$: $2>1$. Ha $2^k>k$, akkor $2^{k+1}=2\\cdot2^k>2k\\ge k+1$ (mert $k\\ge1$).

- **Gyakori hiba:** a bázis elhagyása, vagy az indukciós feltevés fel nem használása.

### 5. Skatulyaelv (Dirichlet-elv)

- **Egyszerű alak:** ha $n+1$ tárgyat $n$ rekeszbe helyezünk, akkor legalább egy rekeszbe legalább két tárgy kerül.

- **Általános alak:** ha $nk+1$ tárgyat $n$ rekeszbe helyezünk, akkor valamelyik rekeszben legalább $k+1$ tárgy van.

- **Példa:** 13 ember között biztosan van kettő, aki ugyanabban a hónapban született (12 hónap = 12 rekesz).

- **Példa:** egy $1\\times1$-es négyzetben 5 pontot elhelyezve biztosan van két pont, amelyek távolsága legfeljebb $\\frac{\\sqrt2}{2}$ (a négyzetet 4 negyedre bontjuk).

- **Kulcs:** a nehézség annak eldöntése, mik a „tárgyak” és mik a „rekeszek”.

### 6. Bizonyítás ábrával

- Az ábra nem helyettesíti a bizonyítást, de segíthet az ötlet megtalálásában és a lépések szemléltetésében.

- **Példa (Pitagorasz-tétel):** egy $a+b$ oldalú négyzetet kétféleképpen darabolunk; a hiányzó területek egyenlőségéből $a^2+b^2=c^2$.

- **Példa:** az első $n$ páratlan szám összege $n^2$ — a pontok négyzetes elrendezése vizuálisan mutatja a lépcsőzetes összeadást.

- **Figyelem:** az ábrás bizonyításnál minden esetre érvényes érvelés kell; az ábra csak szemléltet, nem bizonyít önmagában.

### 7. Bizonyítás más tételek segítségével

- Gyakran egy állítást korábban bizonyított tételekre vezetünk vissza.

- **Példa:** a Thalész-tétel a kerületi–középponti szögek tételének speciális esete (a középponti szög $180^\\circ$).

- **Példa:** a háromszög-egyenlőtlenség felhasználható távolságbecslésekre, a koszinusztétel a Pitagorasz-tétel általánosítására.

- **Példa:** a Pitagorasz-tételből levezethető a kör érintőjének hossza, a Hérón-képlet vagy a paralelogramma-azonosság.

- **Előnye:** a matematika építő jellegét mutatja: a tételek egymásra épülnek.

### 8. Ellenpélda és cáfolat

- **Ellenpélda:** egyetlen eset, amelyre az állítás nem igaz; ezzel az állítás megcáfolható.

- **Példa:** „minden prímszám páratlan” — ellenpélda a 2.

- **Példa:** „minden $n$-re $n^2+n+41$ prím” — $n=40$-re $40^2+40+41=41^2$, nem prím.

- **Fontos:** egy állítás igazolásához nem elég példákat mutatni; cáfolásához viszont egyetlen ellenpélda elegendő.

### 9. Összefoglaló táblázat

| Módszer | Mikor használjuk | Kulcslépés |
|---|---|---|
| Direkt | feltételből következtetés | ismert tételek láncolata |
| Indirekt | nehéz közvetlenül bizonyítani | a tagadás felírása, ellentmondás |
| Teljes indukció | természetes számos állítás | bázis + öröklődés |
| Skatulyaelv | létezés bizonyítása | tárgyak/rekeszek azonosítása |
| Ábrás | geometriai összefüggés | átdarabolás, terület |
| Más tételre építve | már ismert eredmény | visszavezetés |`,
    theorems: [
      {
        theoremNumber: 1,
        title: "$\\sqrt2$ irracionális",
        statementLatex: "\\sqrt2\\notin\\mathbb Q",
        proofTitle: "Indirekt bizonyítás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Feltevés",
            latexContent: "\\sqrt2=\\frac pq,\\quad (p,q)=1",
            explanation: "Tegyük fel, hogy $\\sqrt2$ racionális, azaz egy egyszerűsített $p/q$ tört alakjában írható, ahol $p,q$ egész, $q\\neq0$, és közös osztójuk csak 1."
          },
          {
            stepNumber: 2,
            title: "Négyzetre emelés",
            latexContent: "2q^2=p^2",
            explanation: "Mindkét oldalt négyzetre emelve $2=p^2/q^2$, azaz $p^2=2q^2$."
          },
          {
            stepNumber: 3,
            title: "$p$ páros",
            latexContent: "p=2k \\implies 2q^2=4k^2 \\implies q^2=2k^2",
            explanation: "Mivel $p^2$ páros, $p$ is páros (ha $p$ páratlan lenne, $p^2$ is páratlan). Legyen $p=2k$; visszahelyettesítve $q^2=2k^2$, tehát $q$ is páros."
          },
          {
            stepNumber: 4,
            title: "Ellentmondás",
            latexContent: "(p,q)=1 \\text{ és } 2\\mid p,\\ 2\\mid q",
            explanation: "$p$ és $q$ is páros, ami ellentmond az egyszerűsítettségnek. Tehát a feltevés hamis: $\\sqrt2$ irracionális."
          }
        ]
      },
      {
        theoremNumber: 2,
        title: "Végtelen sok prímszám van",
        statementLatex: "|\\mathbb P|=\\infty",
        proofTitle: "Euklidész indirekt bizonyítása",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Feltevés",
            latexContent: "\\mathbb P=\\{p_1,p_2,\\dots,p_n\\}",
            explanation: "Tegyük fel, hogy csak véges sok prím létezik, és ezeket felsoroltuk."
          },
          {
            stepNumber: 2,
            title: "Új szám",
            latexContent: "N=p_1p_2\\cdots p_n+1",
            explanation: "Képezzük a prímek szorzatánál eggyel nagyobb számot."
          },
          {
            stepNumber: 3,
            title: "Oszthatóság",
            latexContent: "p_i\\nmid N \\text{ minden } i\\text{-re}",
            explanation: "Ha $p_i$ osztaná $N$-t, akkor osztaná $N-p_1\\cdots p_n=1$-et is, ami lehetetlen."
          },
          {
            stepNumber: 4,
            title: "Ellentmondás",
            latexContent: "N\\text{-nek van prímosztója, ami nem a listán van}",
            explanation: "Minden 1-nél nagyobb egésznek van prímosztója; ez nem lehet a felsoroltak között, tehát a lista nem teljes — ellentmondás."
          }
        ]
      },
      {
        theoremNumber: 3,
        title: "Az első $n$ pozitív egész összege",
        statementLatex: "1+2+\\dots+n=\\frac{n(n+1)}{2}",
        proofTitle: "Teljes indukció",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Bázis",
            latexContent: "n=1:\\quad 1=\\frac{1\\cdot2}{2}",
            explanation: "Az állítás $n=1$-re igaz."
          },
          {
            stepNumber: 2,
            title: "Indukciós feltevés",
            latexContent: "1+\\dots+k=\\frac{k(k+1)}{2}",
            explanation: "Feltesszük, hogy az állítás valamely $k\\ge1$ egészre igaz."
          },
          {
            stepNumber: 3,
            title: "Öröklődés",
            latexContent: "\\frac{k(k+1)}{2}+(k+1)=\\frac{(k+1)(k+2)}{2}",
            explanation: "A feltevést felhasználva hozzáadjuk a $(k+1)$-et, majd közös nevezőre hozunk."
          },
          {
            stepNumber: 4,
            title: "Következtetés",
            latexContent: "n=k+1 \\text{ is igaz}",
            explanation: "A bázis és az öröklődés miatt az állítás minden pozitív egész $n$-re igaz."
          }
        ]
      },
      {
        theoremNumber: 4,
        title: "$2^n>n$ minden pozitív egész $n$-re",
        statementLatex: "2^n>n",
        proofTitle: "Teljes indukció",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Bázis",
            latexContent: "n=1:\\quad 2>1",
            explanation: "Az egyenlőtlenség $n=1$-re teljesül."
          },
          {
            stepNumber: 2,
            title: "Indukciós feltevés",
            latexContent: "2^k>k",
            explanation: "Feltesszük, hogy valamely $k\\ge1$-re igaz."
          },
          {
            stepNumber: 3,
            title: "Öröklődés",
            latexContent: "2^{k+1}=2\\cdot2^k>2k\\ge k+1",
            explanation: "A feltevést felhasználva $2\\cdot2^k>2k$; mivel $k\\ge1$, $2k\\ge k+1$. Így $2^{k+1}>k+1$."
          }
        ]
      },
      {
        theoremNumber: 5,
        title: "A skatulyaelv",
        statementLatex: "n+1 \\text{ tárgy},\\ n \\text{ rekesz} \\implies \\exists\\text{ rekesz: } \\ge2",
        proofTitle: "Indirekt bizonyítás",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Feltevés",
            latexContent: "\\text{minden rekeszben } \\le1 \\text{ tárgy}",
            explanation: "Tegyük fel az állítás tagadását: minden rekeszben legfeljebb egy tárgy van."
          },
          {
            stepNumber: 2,
            title: "Összeszámolás",
            latexContent: "\\text{legfeljebb } n\\cdot1=n \\text{ tárgy}",
            explanation: "Ekkor összesen legfeljebb $n$ tárgyat helyezhettünk volna el."
          },
          {
            stepNumber: 3,
            title: "Ellentmondás",
            latexContent: "n+1>n",
            explanation: "Ez ellentmond annak, hogy $n+1$ tárgyat helyeztünk el; tehát valamelyik rekeszben legalább két tárgy van."
          }
        ]
      },
      {
        theoremNumber: 6,
        title: "Az első $n$ páratlan szám összege",
        statementLatex: "1+3+5+\\dots+(2n-1)=n^2",
        proofTitle: "Bizonyítás ábrával és indukcióval",
        proofSteps: [
          {
            stepNumber: 1,
            title: "Ábra",
            latexContent: "n\\times n \\text{ pontnégyzet}",
            explanation: "Az $n\\times n$-es pontnégyzet rétegekbe rendezhető: az első réteg 1, a második 3, a harmadik 5, … pontot tartalmaz."
          },
          {
            stepNumber: 2,
            title: "Rétegek",
            latexContent: "1+3+5+\\dots+(2n-1)",
            explanation: "A $k$-adik rétegben $2k-1$ pont van; a rétegek száma $n$, a pontok száma összesen $n^2$."
          },
          {
            stepNumber: 3,
            title: "Indukciós ellenőrzés",
            latexContent: "n^2+(2n+1)=(n+1)^2",
            explanation: "Az összefüggés indukcióval is igazolható: a következő páratlan szám hozzáadása éppen a következő négyzetszámot adja."
          }
        ]
      }
    ],
    applicationsInside: [
      "Természetes számos azonosságok igazolása teljes indukcióval.",
      "Oszthatósági állítások bizonyítása (pl. $n^3-n$ osztható 3-mal).",
      "Létezési állítások skatulyaelvvel.",
      "Geometriai tételek ábrás és más tételekre épülő bizonyítása."
    ],
    applicationsOutside: [
      "Informatika: algoritmusok helyességének bizonyítása indukcióval, ciklusinvariánsok.",
      "Kriptográfia: prímszámok végtelensége, prímtesztek.",
      "Kombinatorika és gráfelmélet: skatulyaelves becslések.",
      "Tudományos érvelés: cáfolat ellenpéldával, hipotézisek tesztelése."
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: "Bizonyítsd be, hogy minden $n$ természetes számra $n(n+1)$ páros!",
        solutionLatex: "n\\text{ és } n+1 \\text{ közül az egyik páros} \\implies 2\\mid n(n+1).",
        explanation: "Direkt bizonyítás esetszétválasztással: ha $n$ páros, kész; ha $n$ páratlan, akkor $n+1$ páros. Két egymást követő egész közül mindig az egyik páros."
      },
      {
        problemNumber: 2,
        question: "Bizonyítsd be teljes indukcióval, hogy $1+2+\\dots+n=\\frac{n(n+1)}{2}$!",
        solutionLatex: "n=1:\\ 1=1;\\quad \\frac{k(k+1)}{2}+(k+1)=\\frac{(k+1)(k+2)}{2}.",
        explanation: "A bázis $n=1$. Az indukciós lépésben a feltevést használva hozzáadjuk a $(k+1)$-et, és közös nevezőre hozunk; az eredmény a $k+1$ eset képlete."
      },
      {
        problemNumber: 3,
        question: "Bizonyítsd be, hogy $n^3-n$ minden egész $n$-re osztható 3-mal!",
        solutionLatex: "n^3-n=n(n-1)(n+1)",
        explanation: "Három egymást követő egész szám szorzata mindig osztható 3-mal, mert közöttük pontosan az egyik osztható 3-mal. Ez direkt bizonyítás; indukcióval is működik."
      },
      {
        problemNumber: 4,
        question: "Egy $1\\times1$-es négyzetben 5 pontot helyeztünk el. Bizonyítsd be, hogy van két pont, amelyek távolsága legfeljebb $\\frac{\\sqrt2}{2}$!",
        solutionLatex: "4\\text{ negyed} \\implies \\text{két pont egy negyedben};\\quad d\\le\\frac{\\sqrt2}{2}.",
        explanation: "A négyzetet négy $\\frac12\\times\\frac12$-es negyedre bontjuk; 5 pont és 4 rekesz, ezért a skatulyaelv szerint két pont ugyanabba a negyedbe esik. Egy negyed átlója $\\frac{\\sqrt2}{2}$, így a távolság legfeljebb ennyi."
      },
      {
        problemNumber: 5,
        question: "Bizonyítsd be indirekt módon: ha $n^2$ páros, akkor $n$ páros!",
        solutionLatex: "n \\text{ páratlan} \\implies n=2k+1 \\implies n^2=4k^2+4k+1 \\text{ páratlan}.",
        explanation: "Tegyük fel, hogy $n$ páratlan. Ekkor $n^2$ is páratlan, ami ellentmond a feltételnek. Tehát $n$ páros."
      },
      {
        problemNumber: 6,
        question: "Cáfold meg ellenpéldával: „Minden prímszám páratlan.”",
        solutionLatex: "2 \\text{ prím, de páros}.",
        explanation: "Egyetlen ellenpélda elegendő az állítás cáfolatához. A 2 az egyetlen páros prím."
      },
      {
        problemNumber: 7,
        question: "Bizonyítsd be, hogy $\\sqrt2$ irracionális!",
        solutionLatex: "\\sqrt2=\\frac pq,\\ (p,q)=1 \\implies p^2=2q^2 \\implies p,q \\text{ páros} \\implies \\text{ellentmondás}.",
        explanation: "Indirekt bizonyítás: az egyszerűsített tört feltevéséből azt kapjuk, hogy $p$ és $q$ is páros, ami ellentmond a közös osztó hiányának."
      }
    ],
    oralPresentationOutline: [
      'Direkt bizonyítás sémája',
      'Indirekt (ellentmondásos) bizonyítás',
      'Kontrapozíció: ¬B ⇒ ¬A',
      'Teljes indukció: alaplépés + induktív lépés',
      'Skatulyaelv (Dirichlet): n+1 elem → n skatulya',
      'Mikor melyik módszer; tipikus példák',
      'Szóbeli: 3 módszer + egy teljes indukciós példa'
    ],
    requiredDefinitions: [
      {
        term: "Bizonyítás",
        definitionLatex: "\\text{axiómák} \\Rightarrow \\text{tétel}",
        explanation: "Logikai lépések sorozata, amely axiómákból, definíciókból és korábbi tételekből levezeti az állítást."
      },
      {
        term: "Teljes indukció",
        definitionLatex: "P(1)\\ \\wedge\\ (P(k)\\Rightarrow P(k+1))",
        explanation: "Bázis és öröklődés; ezek együtt biztosítják az állítást minden természetes számra."
      },
      {
        term: "Skatulyaelv",
        definitionLatex: "n+1>n",
        explanation: "Ha több tárgyat helyezünk el, mint ahány rekesz van, valamelyik rekeszbe legalább két tárgy kerül."
      },
      {
        term: "Ellenpélda",
        definitionLatex: "\\exists x:\\ \\neg P(x)",
        explanation: "Egyetlen olyan eset, amelyre az állítás hamis; ezzel az állítás cáfolható."
      }
    ],
    examinerTraps: [
      {
        question: "Elég néhány példát mutatni egy állítás bizonyításához?",
        answer: "Nem. Példák csak szemléltetnek; bizonyításhoz minden esetre érvényes logikai érvelés kell. Cáfolathoz viszont egyetlen ellenpélda is elegendő.",
        dangerLevel: "Magas"
      },
      {
        question: "Mi a teljes indukció három lépése?",
        answer: "Bázis (az állítás igazolása a legkisebb értékre), indukciós feltevés (igaz valamely $k$-ra), indukciós lépés ($k$-ból $k+1$-re). A bázis elhagyása hibás bizonyítást ad.",
        dangerLevel: "Közepes"
      },
      {
        question: "Hogyan tagadjuk a „minden $x$-re $P(x)$” állítást?",
        answer: "Így: „létezik olyan $x$, amelyre nem $P(x)$”. Az indirekt bizonyításnál ezt kell felírni, nem azt, hogy „minden $x$-re nem $P(x)$”.",
        dangerLevel: "Magas"
      },
      {
        question: "Mit bizonyít a skatulyaelv?",
        answer: "Létezést: biztosan van olyan rekesz, amelyben legalább két tárgy van. Nem mondja meg, melyik az, és nem ad konstruktív eljárást.",
        dangerLevel: "Közepes"
      }
    ],
    applications: [
      {
        title: "Teljes indukció",
        problem: "$1+2+\\dots+n=\\frac{n(n+1)}{2}$",
        solutionLatex: "\\text{bázis } n=1;\\ \\text{öröklődés } k\\to k+1"
      },
      {
        title: "Skatulyaelv",
        problem: "13 ember, 12 hónap",
        solutionLatex: "\\text{van két azonos hónapban született}"
      }
    ],
    scoringBreakdown: [
      {
        criterion: "I. Tartalom",
        points: 10,
        description: "Bizonyítási módszerek rendszerezése."
      },
      {
        criterion: "II. Definíció",
        points: 2,
        description: "Bizonyítás, teljes indukció vagy skatulyaelv."
      },
      {
        criterion: "III. Bizonyítás",
        points: 6,
        description: "Egy módszer teljes végigvitele."
      },
      {
        criterion: "IV. Feladat",
        points: 8,
        description: "Indukciós vagy skatulyaelves feladat."
      },
      {
        criterion: "V. Alkalmazás",
        points: 4,
        description: "Euklidész, informatika, tudományos érvelés."
      },
      {
        criterion: "VI. Szaknyelv",
        points: 5,
        description: "Logikai fogalmak pontos használata."
      }
    ],
    historicalContext: "Euklidész: a bizonyítás mint a matematika alapja; Frege, Russell, Hilbert: a modern logika és axiómarendszerek; Dirichlet: skatulyaelv.",
    studiumGeneraleNotes: "Studium Generale 2026 Kiadvány 25. Tétel (161–168. oldal): Minden módszerhez mondj egy önálló, rövid példát!",
    memorizationMaterial: `## Bemagolandó — Bizonyítási módszerek: direkt bizonyítás, indirekt bizonyítás, skatulyaelv, teljes indukció, bizonyítás ábrával és más tétel segítségével

### Fő állítás / képletek

$\\sqrt2\\notin\\mathbb Q,\\quad \\sum_{i=1}^{n}i=\\frac{n(n+1)}{2},\\quad n+1 \\text{ tárgy} \\implies \\text{két tárgy egy rekeszben}$

### Definíciók

**Bizonyítás:** $\\text{axiómák} \\Rightarrow \\text{tétel}$

Logikai lépések sorozata, amely axiómákból, definíciókból és korábbi tételekből levezeti az állítást.

**Teljes indukció:** $P(1)\\ \\wedge\\ (P(k)\\Rightarrow P(k+1))$

Bázis és öröklődés; ezek együtt biztosítják az állítást minden természetes számra.

**Skatulyaelv:** $n+1>n$

Ha több tárgyat helyezünk el, mint ahány rekesz van, valamelyik rekeszbe legalább két tárgy kerül.

**Ellenpélda:** $\\exists x:\\ \\neg P(x)$

Egyetlen olyan eset, amelyre az állítás hamis; ezzel az állítás cáfolható.

**Klasszikus indirekt példa (Eukleidész):** végtelen sok prímszám van — ha $p_1,\dots,p_k$ az összes prím volna, akkor $N=p_1\cdots p_k+1$ új prímet (vagy új prímtényezőt) adna.

### Tételek (tanuld meg pontosan legalább egyet + bizonyítást)

**$\\sqrt2$ irracionális**

$\\sqrt2\\notin\\mathbb Q$

*Bizonyítás iránya:* Indirekt bizonyítás

**Végtelen sok prímszám van**

$|\\mathbb P|=\\infty$

*Bizonyítás iránya:* Euklidész indirekt bizonyítása

**Az első $n$ pozitív egész összege**


     $1+2+\\dots+n=\\frac{n(n+1)}{2}$

*Bizonyítás iránya:* Teljes indukció

**$2^n>n$ minden pozitív egész $n$-re**

$2^n>n$

*Bizonyítás iránya:* Teljes indukció

### Szóbeli tipp
Egy definíció szó szerint; egy tétel + teljes bizonyítás; 2 alkalmazás röviden kifejtve; 1 feladat végigszámolva.`,
    oralExamPlan: `## Szóbeli felelet vázlata — Bizonyítási módszerek: direkt bizonyítás, indirekt bizonyítás, skatulyaelv, teljes indukció, bizonyítás ábrával és más tétel segítségével (15–20 perc · 35 pont)

**Célidő:** 15–20 perc · **Max pont:** 35/35

A felelet aránya (Studium Generale / hivatalos szempontok): bevezetés → definíció(k) → áttekintés → **egy** tétel + bizonyítás → alkalmazások (kifejtve) → feladat.

### 0–2 perc · Bevezetés (szerkezet)
Mondd ki a tétel címét saját szavakkal, és vázold a menetet. Kerüld a „ma ezt fogom elmondani” listát — inkább tartalmi bevezető (fogalom eredete / miért fontos).

### 2–5 perc · Definíciók (2 pont)
Egy (max kettő) **pontos** definíció. Ha rákérdeznek, tudj példát és ellenpéldát.

### 5–9 perc · Elméleti áttekintés (szerkezet, 10 pont része)
Logikus ív a témán:
1. Direkt bizonyítás sémája
2. Indirekt (ellentmondásos) bizonyítás
3. Kontrapozíció: ¬B ⇒ ¬A
4. Teljes indukció: alaplépés + induktív lépés
5. Skatulyaelv (Dirichlet): n+1 elem → n skatulya
6. Mikor melyik módszer; tipikus példák
7. Szóbeli: 3 módszer + egy teljes indukciós példa

### 9–14 perc · Tétel + bizonyítás (6 pont)
Ajánlott bizonyítás: **$\\sqrt2$ irracionális** (Indirekt bizonyítás).
Hibátlan lépések, indoklás minden átmenetnél. Ha elakadsz: írd fel a feltételeket és a célt újra.

### 14–17 perc · Alkalmazások (4 pont)
Legalább **két** alkalmazás, mindegyiket röviden kifejtve (2017 óta nem elég felsorolni).

### 17–20 perc · Feladat (8 pont)
Egy kidolgozott érettségi-típusú példa. Számolás + ellenőrzés. Szaknyelv végig (5 pont).

### Pontozási emlékeztető
Szerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Kommunikáció 5 = **35**`,
  }
];
