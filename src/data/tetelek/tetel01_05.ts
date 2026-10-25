import { Tetel } from '../../types/math';

export const TETELEK_01_05: Tetel[] = [
  {
    id: 'tétel-01',
    number: 1,
    title: 'Halmazok, halmazműveletek. Nevezetes ponthalmazok a síkban és a térben',
    category: 'Halmazok és logika',
    tags: ['Halmazelmélet', 'De Morgan', 'Ponthalmazok', 'Szakaszfelező', 'Parabola', 'Logikai szita'],
    difficulty: '1: alap alatti',
    summary: 'A halmaz alapfogalma, eleme, részhalmaz és valódi részhalmaz. Unió, metszet, különbség, komplementer, szimmetrikus differencia. Műveleti tulajdonságok, De Morgan-azonosságok, Descartes-szorzat, logikai szita. Nevezetes ponthalmazok a síkban és a térben (szakaszfelező, szögfelező, kör, gömb, parabola, ellipszis, hiperbola).',
    statementLatex: '\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}, \\quad \\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}, \\quad |A \\cup B| = |A| + |B| - |A \\cap B|',
    conditionsLatex: 'A, B \\subseteq U \\text{ tetszőleges részhalmazai az } U \\text{ alaphalmaznak (univerzumnak).}',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 1. oldal (Halmazok, halmazműveletek, De Morgan-azonosságok), 8. oldal (Kör, Parabola, Ellipszis, Hiperbola egyenletei)',
    introduction: `A halmazok szemléltetésére először Leonhard Euler (1707–1783) használt köröket.

Ezekkel foglalkozott később John Venn angol matematikus, innen származik a Venn-diagram elnevezése.

Georg Cantor 19. századi német matematikus vezetett be olyan új forradalmi fogalmakat (pl. a végtelen halmazok különböző számosságai), amelyek megalapozták a halmazelmélet napjainkban ismert modern formáját.`,
    detailedTheory: `### 1. Alapfogalmak és definíciók

- **Halmaz:** A halmazt nem definiáljuk, hanem alapfogalomnak tekintjük, példákkal körülírjuk. A halmaz elemekből áll, ami szintén alapfogalom. Szemléltetése Venn-diagrammal történik. Jelölése: halmazokat nagybetűkkel ($A, B, C$), elemeit kisbetűkkel ($a, b, c$).

- **Halmaz megadása:** történhet elemeinek felsorolásával, vagy utasítással/tulajdonsággal. Minden elemről egyértelműen el kell tudnunk dönteni, hogy eleme-e az adott halmaznak ($x \\in A$) vagy nem ($x \\notin A$).

- **Alaphalmaz (univerzum, $U$):** az a halmaz, amelyen a halmazműveletek értelmezhetők, és amelynek a vizsgált halmazok mind részhalmazai.

- **Üres halmaz ($\\emptyset$ vagy $\\{\\}$):** az a halmaz, amelynek egyetlen eleme sincs. Az üres halmaz minden halmaznak részhalmaza.

- **Halmazok egyenlősége:** $A = B \\iff (\\forall x \\in A \\implies x \\in B) \\land (\\forall x \\in B \\implies x \\in A)$.

- **Részhalmaz ($A \\subseteq B$):** $A$ minden eleme $B$-nek is eleme. Minden halmaz részhalmaza önmagának.

- **Valódi részhalmaz ($A \\subset B$):** $A \\subseteq B$, de $A \\neq B$, tehát van olyan eleme $B$-nek, amely nem eleme $A$-nak.

- **Diszjunkt halmazok:** ha $A$-nak és $B$-nek nincs közös eleme, azaz $A \\cap B = \\emptyset$.

### 2. Halmazműveletek és tulajdonságaik

- **Unió (egyesítés, $A \\cup B$):** Azon elemek halmaza, amelyek legalább az egyik halmaznak elemei: $A \\cup B = \\{x \\in U \\mid x \\in A \\lor x \\in B\\}$.

- **Metszet (közös rész, $A \\cap B$):** Azon elemek halmaza, amelyek mindkét halmaznak elemei: $A \\cap B = \\{x \\in U \\mid x \\in A \\land x \\in B\\}$.

- **Különbség ($A \\setminus B$):** Azon elemek halmaza, amelyek $A$-nak elemei, de $B$-nek nem: $A \\setminus B = \\{x \\in U \\mid x \\in A \\land x \\notin B\\}$. (Nem kommutatív: $A \\setminus B \\neq B \\setminus A$).

- **Komplementer (kiegészítő halmaz, $\\overline{A}$ vagy $A^c$):** Az alaphalmaz azon elemei, amelyek nem tartoznak $A$-hoz: $\\overline{A} = U \\setminus A$. Fontos: $\\overline{\\overline{A}} = A$.

- **Szimmetrikus differencia ($A \\Delta B$):** Azon elemek, amelyek pontosan az egyik halmaznak elemei: $A \\Delta B = (A \\setminus B) \\cup (B \\setminus A) = (A \\cup B) \\setminus (A \\cap B)$.

- **Műveleti tulajdonságok:**
  - Kommutativitás: $A \\cup B = B \\cup A$, $A \\cap B = B \\cap A$, $A \\Delta B = B \\Delta A$. (Különbség NEM kommutatív!)
  - Asszociativitás: $A \\cup (B \\cup C) = (A \\cup B) \\cup C$, $A \\cap (B \\cap C) = (A \\cap B) \\cap C$.
  - Disztributivitás: $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$, illetve $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$.
  - De Morgan-azonosságok: $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ és $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$.

- **Descartes-szorzat ($A \\times B$):** Azon rendezett $(x, y)$ párok halmaza, ahol $x \\in A$ és $y \\in B$.

- **Logikai szita formulája:**
  - 2 halmazra: $|A \\cup B| = |A| + |B| - |A \\cap B|$
  - 3 halmazra: $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$

### 3. Nevezetes ponthalmazok a síkban és a térben

- **Egyenessel párhuzamos egyenespár (sík):** Azon pontok halmaza, amelyek egy adott egyenestől adott $d$ távolságra vannak.

- **Középpárhuzamos (sík):** Két párhuzamos egyenestől egyenlő távolságra lévő pontok halmaza (felezi a távolságukat).

- **Szakaszfelező merőleges (sík):** Azon pontok halmaza, amelyek a szakasz két végpontjától egyenlő távolságra vannak.

- **Szakaszfelező merőleges sík (tér):** Azon térbeli pontok halmaza, amelyek a szakasz két végpontjától egyenlő távolságra vannak.

- **Szögfelező félegyenes (sík):** A konvex szög száraitól egyenlő távolságra lévő pontok halmaza.

- **Szögfelező sík (tér):** Két metsző sík által bezárt lapszögtől egyenlő távolságra lévő pontok halmaza.

- **Körvonal / Körlap (sík):** Egy adott ponttól adott $r$ távolságra lévő (illetve legfeljebb $r$ távolságra lévő) pontok halmaza.

- **Gömbfelület / Gömbtest (tér):** A tér egy adott pontjától adott $R$ távolságra lévő pontok halmaza.

- **Hengerfelület (tér):** Adott egyenestől (tengelytől) adott $R$ távolságra lévő pontok halmaza a térben.

- **Parabola (sík):** Azon pontok halmaza a síkban, amelyek egy adott fókuszponttól ($F$) és egy adott vezéregyenestől ($v$) egyenlő távolságra vannak: $d(P, F) = d(P, v)$.

- **Ellipszis (sík):** Azon pontok halmaza, amelyeknek két adott fókuszponttól ($F_1, F_2$) mért távolságösszege állandó ($2a > F_1F_2$).

- **Hiperbola (sík):** Azon pontok halmaza, amelyeknek két fókuszponttól mért távolságkülönbségének abszolút értéke állandó ($|d_1 - d_2| = 2a < F_1F_2$).

### 4. Intervallumok és hatványhalmaz

- **Zárt intervallum:** $[a;b] = \{x \in \mathbb{R} \mid a \le x \le b\}$.

- **Nyílt intervallum:** $]a;b[ = \{x \in \mathbb{R} \mid a < x < b\}$. (Félig nyílt: $[a;b[$, $]a;b]$.)

- **Hatványhalmaz ($\mathcal{P}(A)$):** az $A$ összes részhalmazának halmaza. Véges $n$ elemű $A$-ra $|\mathcal{P}(A)| = 2^n$ (az üres halmaz és $A$ is eleme).`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'Az n elemű halmaz részhalmazainak száma 2^n',
        proofTitle: 'Bizonyítás: minden elemről 2 döntés',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Szorzási szabály',
            latexContent: '2 \\cdot 2 \\cdot 2 \\dotsm 2 = 2^n',
            explanation: 'Legyen A = {a₁, a₂, …, aₙ}, és keressük az összes R ⊆ A részhalmazt. Egy konkrét R-t úgy határozunk meg, hogy sorban végigmegyünk az elemeken, és mindegyikről eldöntjük: belekerül-e R-be, vagy sem. Az a₁-re 2 választás van (benne / nincs), az a₂-re szintén 2, és így tovább, egészen aₙ-ig — összesen n darab, egymástól független 2-es döntés. A szorzási szabály miatt a lehetőségek száma tehát 2 · 2 · … · 2 (n tényező) = 2ⁿ. Speciális esetek is beleférnek: ha minden döntés „nincs”, az üres halmazt kapjuk; ha minden döntés „benne van”, magát A-t. Kis ellenőrzés: n = 1 → 2 részhalmaz (∅ és {a₁}); n = 2 → 4; n = 3 → 8.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'A halmazok metszet- és unióképzése asszociatív művelet',
        statementLatex: '(A \\cap B) \\cap C = A \\cap (B \\cap C) \\quad \\text{és} \\quad (A \\cup B) \\cup C = A \\cup (B \\cup C)',
        proofTitle: 'Bizonyítás elemi tartalmazással (metszet; unió ugyanígy)',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Asszociativitás tartalmazással',
            latexContent: 'x \\in (A \\cap B) \\cap C \\iff (x \\in A \\land x \\in B) \\land x \\in C \\iff x \\in A \\land (x \\in B \\land x \\in C) \\iff x \\in A \\cap (B \\cap C)',
            explanation: 'Az unióra a bizonyítás szó szerint ugyanez ∨-vel; itt a metszetet részletezzük. Legyen x tetszőleges elem. Az x benne van (A ∩ B) ∩ C-ben pontosan akkor, ha x ∈ (A ∩ B) és x ∈ C. A metszet definíciója szerint x ∈ (A ∩ B) azt jelenti, hogy x ∈ A és x ∈ B, tehát összesen: (x ∈ A ∧ x ∈ B) ∧ x ∈ C. A logikai ÉS asszociatív (a zárójelezés nem számít), ezért ez ugyanaz, mint x ∈ A ∧ (x ∈ B ∧ x ∈ C), ami pedig pont x ∈ A ∩ (B ∩ C). Mivel x tetszőleges volt, a két halmaz ugyanazokat az elemeket tartalmazza — tehát egyenlők. Az unióra ugyanez a gondolatmenet, csak ∧ helyett ∨ szerepel. Ellenőrzés: ha A={1}, B={1,2}, C={2}, mindkét zárójelezés { } illetve {1,2} ugyanarra vezet.'
          }
        ]
      },
      {
        theoremNumber: 3,
        title: 'A háromszög oldalfelező merőlegesei egy pontban metszik egymást (Köré írható kör)',
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
        theoremNumber: 4,
        title: 'A háromszög belső szögfelezői egy pontban metszik egymást (Beírható kör)',
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
        theoremNumber: 5,
        title: 'A tengelyponti parabola egyenletének levezetése a mértani hely definíciójából',
        statementLatex: 'y = \\frac{1}{2p}x^2',
        proofTitle: 'Levezetés a mértani helyből: d(P,F)=d(P,v)',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'y = x²/(2p) előállítása',
            latexContent: 'F\\left(0,\\frac{p}{2}\\right),\\; v: y=-\\frac{p}{2} \\implies \\sqrt{x^2+(y-\\frac{p}{2})^2}=y+\\frac{p}{2} \\implies y=\\frac{1}{2p}x^2',
            explanation: 'A parabola definíciója: azon P(x,y) pontok, amelyek egy F fókusztól és egy v vezéregyenestől egyenlő távol vannak. Tengelyponti helyzetben F(0, p/2), v: y = −p/2 (p>0). A távolságok: d(P,F)=√(x²+(y−p/2)²), d(P,v)=y+p/2 (a felső félsíkban). Egyenlőség, majd mindkét oldal nemnegatív volta miatt négyzetre emelés: x²+(y−p/2)² = (y+p/2)². Kibontva a y² és p²/4 tagok kiesnek, marad x² = 2py, azaz y = x²/(2p). Ellenőrzés: x=0 → y=0 (tengelypont); p nagyobb → „laposabb” parabola.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Egyenletek alaphalmazának és értelmezési tartományának megadása: törtnevező nem lehet 0, négyzetgyök alatti kifejezés nemnegatív, logaritmus argumentuma szigorúan pozitív. A feltételek metszetét képezzük.',
      'Függvényvizsgálat: értelmezési tartomány, értékkészlet, szigorú monotonitási és konvexitási intervallumok felírása nyílt vagy zárt halmazokként.',
      'Koordinátageometria: egyenesek, körök, parabolák mind ponthalmazokként vannak definiálva.',
      'Komplementer módszer a kombinatorikában és a valószínűségszámításban: P(A) = 1 - P(nem A).'
    ],
    applicationsOutside: [
      'Biológiai rendszertan: az élőlények rendszertani csoportosítása egymásba ágyazott részhalmazok (faj ⊂ nemzetség ⊂ család ⊂ rend ⊂ osztály ⊂ törzs ⊂ ország).',
      'Társadalom és politika: parlamentek frakciói, parlamenti bizottságok, szavazati körzetek, mandátumkiosztási halmazműveletek.',
      'Informatikai adatbázisok és SQL lekérdezések: a SELECT ... WHERE feltételek logikai ÉS / VAGY kapcsolatai halmazmetszetet (INTERSECT) és uniót (UNION) képeznek a rekordok halmazán.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'A Tavaszi Táborban a tanárok közül 25-en szoktak játszani focit (Sz), 13-an tudnak játszani (T), 19-en pedig a TV-ben nézik (N). 4 tanár szokott és tud játszani, de nem nézi. 7-en nézik és szoktak játszani, de nem tudnak. 3-an tudnak és nézik, de nem szoktak játszani. Bence az egyetlen, aki szokott, tud és nézi is. Hányan hódolnak kizárólag egy tevékenységnek, és hány tanár van összesen a táborban?',
        solutionLatex: '\\text{Csak Szokott: } 25 - (4 + 1 + 7) = 13. \\quad \\text{Csak Tud: } 13 - (4 + 1 + 3) = 5. \\quad \\text{Csak Nézi: } 19 - (7 + 1 + 3) = 8. \\\\ \\text{Kizárólag egy tevékenység: } 13 + 5 + 8 = 26 \\text{ fő.} \\\\ \\text{Összes tanár a logikai szitával: } |Sz \\cup T \\cup N| = 13 + 5 + 8 + 4 + 7 + 3 + 1 = 41 \\text{ fő.}'
      },
      {
        problemNumber: 2,
        question: 'Egy matematika versenyen két feladatot tűztek ki. Az elsőt az indulók 60%-a, a másodikat 50%-a oldotta meg jól. Minden induló legalább egy feladatot megoldott, és 6-an mindkettőt megoldották. Hányan indultak a versenyen?',
        solutionLatex: '|A \\cup B| = |A| + |B| - |A \\cap B| \\implies x = 0{,}6x + 0{,}5x - 6 \\implies x = 1{,}1x - 6 \\implies 0{,}1x = 6 \\implies x = 60 \\text{ induló.}'
      },
      {
        problemNumber: 3,
        question: 'Hányszor annyi 3 elemű részhalmaza van egy 10 elemű halmaznak, mint ahány 2 elemű részhalmaza?',
        solutionLatex: '\\begin{aligned} &\\text{10 elemből 3 kiválasztása (sorrend nélkül)} = \\binom{10}{3} = \\text{„10 alatt 3”} \\\\ &\\binom{10}{3} = \\dfrac{10 \\cdot 9 \\cdot 8}{3 \\cdot 2 \\cdot 1} = \\dfrac{720}{6} = 120 \\\\ &\\text{10 elemből 2 kiválasztása} = \\binom{10}{2} = \\text{„10 alatt 2”} \\\\ &\\binom{10}{2} = \\dfrac{10 \\cdot 9}{2 \\cdot 1} = \\dfrac{90}{2} = 45 \\\\ &\\dfrac{\\binom{10}{3}}{\\binom{10}{2}} = \\dfrac{120}{45} = \\dfrac{8}{3} \\end{aligned}',
        explanation: 'A „10 alatt 3” (binomiális együttható) azt adja meg, hogy 10 elemből hányféleképpen tudunk kiválasztani 3-at, ha a sorrend nem számít — ez pont a 3 elemű részhalmazok száma. Ugyanígy a „10 alatt 2” a kételemű részhalmazok száma. A kérdés ezek hányadosa: 120/45 = 8/3-szor annyi a háromelemű, mint a kételemű.',
      }
    ],    oralPresentationOutline: [
      'Halmaz fogalma, elem, részhalmaz, üres halmaz, hatványhalmaz',
      'Műveletek: unió, metszet, különbség, komplementer — Venn-diagrammal',
      'De Morgan-azonosságok kimondása és szemléltetése',
      'Nevezetes ponthalmazok a síkban: szakaszfelező merőleges, kör, parabola elemi def.',
      'Nevezetes ponthalmazok a térben: gömb, síkpárhuzamos/egyenes-távolság',
      'Kapcsolat: mértani hely ↔ egyenlet (előkészítés a koordinátageometriához)',
      'Érettségi példa: Venn vagy mértani hely szöveges feladat'
    ],
    requiredDefinitions: [
      {
        term: 'Halmaz és elem',
        definitionLatex: 'A = \\{a_1, a_2, \\ldots\\},\\quad a \\in A \\iff a\\text{ eleme }A\\text{-nak}',
        explanation: 'A halmaz jól meghatározott objektumok összessége. Az üres halmaz: $\\emptyset$.',
      },
      {
        term: 'Részhalmaz és hatványhalmaz',
        definitionLatex: 'B \\subseteq A \\iff (\\forall x)(x \\in B \\Rightarrow x \\in A),\\quad |\\mathcal{P}(A)|=2^{|A|}',
        explanation: 'A hatványhalmaz az összes részhalmaz halmaza; n elemű véges halmaznak $2^n$ részhalmaza van.',
      },
      {
        term: 'Unió, metszet, komplementer',
        definitionLatex: 'A \\cup B,\\ A \\cap B,\\ \\overline{A}=U \\setminus A',
        explanation: 'De Morgan: $\\overline{A \\cup B}=\\overline{A}\\cap\\overline{B}$ és $\\overline{A \\cap B}=\\overline{A}\\cup\\overline{B}$.',
      },
      {
        term: 'Kör mint mértani hely',
        definitionLatex: '\\{P : d(P,O)=r\\}',
        explanation: 'A sík azon pontjainak halmaza, amelyek egy adott O ponttól adott r távolságra vannak.',
      }
    ],

    examinerTraps: [
      {
        question: 'Az üres halmaz eleme vagy részhalmaza egy tetszőleges A halmaznak?',
        answer: 'Az üres halmaz RÉSZHALMAZA minden halmaznak (∅ ⊆ A), de NEM ELEME, kivéve ha az A halmaz elemei maguk is halmazok és ∅ közvetlenül köztük van!',
        dangerLevel: 'Magas'
      },
      {
        question: 'Igaz-e, hogy A \\ B = B \\ A?',
        answer: 'Nem! A különbségképzés NEM kommutatív művelet. A \\ B = B \\ A csak akkor teljesül, ha A = B.',
        dangerLevel: 'Közepes'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Halmazok, halmazműveletek, nevezetes ponthalmazok\n\n### Fő azonosságok\n\n$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}, \\quad \\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$\n\n$|A \\cup B| = |A| + |B| - |A \\cap B|$\n\n$|A \\cup B \\cup C| = |A|+|B|+|C| - |A\\cap B| - |A\\cap C| - |B\\cap C| + |A\\cap B\\cap C|$\n\n### Definíciók\n\n**Halmaz / elem:** alapfogalom; $x \\in A$ vagy $x \\notin A$ egyértelműen eldönthető.\n\n**Üres halmaz:** $\\emptyset$ — minden halmaz részhalmaza.\n\n**Részhalmaz:** $A \\subseteq B \\iff (\\forall x)(x\\in A \\Rightarrow x\\in B)$. Valódi: $A \\subset B$ és $A \\neq B$.\n\n**Unió / metszet / különbség / komplementer:**\n$A\\cup B=\\{x\\mid x\\in A\\lor x\\in B\\},\\quad A\\cap B=\\{x\\mid x\\in A\\land x\\in B\\}$\n$A\\setminus B=\\{x\\mid x\\in A\\land x\\notin B\\},\\quad \\overline{A}=U\\setminus A$\n\n**Szimmetrikus differencia:** $A\\Delta B=(A\\setminus B)\\cup(B\\setminus A)=(A\\cup B)\\setminus(A\\cap B)$.\n\n**Descartes-szorzat:** $A\\times B=\\{(x,y)\\mid x\\in A,\\ y\\in B\\}$.\n\n**Hatványhalmaz:** $|\\mathcal{P}(A)|=2^{|A|}$ (véges $A$-ra).\n\n**Intervallum:** $[a;b]=\\{x\\in\\mathbb{R}:a\\le x\\le b\\}$, $]a;b[=\\{x\\in\\mathbb{R}:a<x<b\\}$.\n\n### Nevezetes ponthalmazok (definíciók)\n\n- **Középpárhuzamos:** két párhuzamos egyenestől egyenlő távolságra lévő pontok (felezi a távolságot).\n- **Szakaszfelező merőleges:** pontok, amelyek a szakasz végpontjaitól egyenlő távol vannak.\n- **Szögfelező:** pontok, amelyek a szögszáraktól egyenlő távol vannak.\n- **Kör:** $\\{P:\\,d(P,O)=r\\}$; **gömb:** térbeli analóg; **hengerfelület:** tengelytől $R$ távolság.\n- **Parabola:** $d(P,F)=d(P,v)$.\n- **Ellipszis:** $d(P,F_1)+d(P,F_2)=2a>F_1F_2$.\n- **Hiperbola:** $|d(P,F_1)-d(P,F_2)|=2a<F_1F_2$.\n\n### Tételek\n\n**Tétel.** $n$ elemű halmaz részhalmazainak száma $2^n$.\n\n**Tétel.** Metszet és unió asszociatív.\n\n**Tétel.** A háromszög oldalfelező merőlegesei egy pontban metszik egymást (köré írt kör középpontja).\n\n**Tétel.** A háromszög belső szögfelezői egy pontban metszik egymást (beírt kör középpontja).\n\n**Tétel.** Tengelyponti parabola: $y=\\dfrac{1}{2p}x^2$.",
    oralExamPlan: "## Szóbeli felelet vázlata — Halmazok (15–20 perc · 35 pont)\n\n**Célidő:** 15–20 perc · **Max pont:** 35/35\n\n### 0–2 perc · Bevezetés (szerkezet)\nEuler–Venn körök, Cantor szerepe. Mondd ki: a felelet menete = fogalmak → műveletek → ponthalmazok → tétel → alkalmazás → feladat.\n\n### 2–5 perc · Definíciók (2 pont)\nVálassz **egy** pontos definíciót (pl. unió + metszet, vagy parabola mint mértani hely). Emeld ki: üres halmaz részhalmaz, de nem feltétlenül elem; különbség nem kommutatív.\n\n### 5–8 perc · Elméleti áttekintés (szerkezet 10-ből)\nMűveleti tulajdonságok: kommutatív / asszociatív / disztributív. De Morgan. Logikai szita 2 és 3 halmazra. 1–2 nevezetes ponthalmaz (sík + tér).\n\n### 8–13 perc · Tétel + bizonyítás (6 pont)\nAjánlott: **$2^n$ részhalmaz** ($2\cdot2\cdots2=2^n$), *vagy* **szögfelezők / felezőmerőlegesek** egy pontban. Mondd ki feltételeket, majd rövid levezetést.\n\n### 13–15 perc · Alkalmazások (4 pont)\nBelül: ÉT megadása, SQL/halmazművelet, komplementer módszer. Kívül: rendszertan vagy frakciók — **röviden magyarázd**, ne csak sorold.\n\n### 15–18 perc · Feladat (8 pont)\nVenn / logikai szita vagy mértani hely. Írj Venn-diagramot, ellenőrizd a szitát: $|A\\cup B\\cup C|$.\n\n### Zárás · Nyelv (5 pont)\nSzakszavak: diszjunkt, komplementer, mértani hely. Szemkontaktus, folyamatos előadás.\n\n### Pontozási emlékeztető\nSzerkezet 10 · Definíció 2 · Tétel+biz. 6 · Feladat 8 · Alkalmazás 4 · Nyelv 5",
    visualizerType: 'sets'
  },
  {
    id: 'tétel-02',
    number: 2,
    title: 'Racionális és irracionális számok. Műveletek a racionális és irracionális számok halmazán. Közönséges törtek és tizedes törtek. Halmazok számossága',
    category: 'Számelmélet és algebra',
    tags: ['Számhalmazok', 'Racionális', 'Irracionális', 'Gyök 2', 'Számosság', 'Cantor', 'Periodikus tizedes tört'],
    difficulty: '1: alap alatti',
    summary: 'A számhalmazok felépítése (N ⊂ Z ⊂ Q ⊂ R). Racionális és irracionális számok definíciója, műveleti zártsága. Véges és végtelen szakaszos tizedes törtek. A √2 irracionális szám indirekt bizonyítása. Halmazok számossága (véges, megszámlálhatóan végtelen, kontinuum).',
    statementLatex: '\\mathbb{Q} = \\left\\{\\frac{p}{q} \\;\\middle|\\; p \\in \\mathbb{Z}, q \\in \\mathbb{Z} \\setminus \\{0\\}\\right\\}, \\quad \\sqrt{2} \\notin \\mathbb{Q}, \\quad |\\mathbb{N}| = |\\mathbb{Z}| = |\\mathbb{Q}| = \\aleph_0 < |\\mathbb{R}| = c',
    conditionsLatex: 'p, q \\in \\mathbb{Z}, q \\neq 0, (p, q) = 1',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 1. oldal (Számhalmazok, jelölések)',
    introduction: `A számelmélet a matematika egyik legősibb ága.

Az emberiség az őskorban a természetes számokkal kezdte a számlálást, de a mérések, osztások szükségessé tették a törtek (racionális számok) bevezetését.

A pythagoreusok az ókori Hellászban fedezték fel, hogy a négyzet átlója nem mérhető össze az oldalával, ami az irracionális számok felismeréséhez vezetett.

Georg Cantor a 19. század végén dolgozta ki a végtelen halmazok számosságának elméletét.`,
    detailedTheory: `### 1. A számhalmazok hierarchiája és műveleti zártsága

- **Természetes számok ($\\mathbb{N}$):** $\\{0, 1, 2, 3, \\dots\\}$. Zárt az összeadásra és a szorzásra nézve. A kivonás kivezethet a halmazból ($3 - 5 = -2 \\notin \\mathbb{N}$).

- **Egész számok ($\\mathbb{Z}$):** $\\{\\dots, -2, -1, 0, 1, 2, \\dots\\}$. Zárt az összeadásra, kivonásra és szorzásra. Az osztás kivezethet ($3 / 2 = 1{,}5 \\notin \\mathbb{Z}$).

- **Racionális számok ($\\mathbb{Q}$):** Azon számok, amelyek felírhatók két egész szám hányadosaként: $\\frac{p}{q}$ alakban ($p, q \\in \\mathbb{Z}, q \\neq 0$). Ez a halmaz mind a 4 alapműveletre (összeadás, kivonás, szorzás, nullával nem osztás) zárt (testet alkot). A gyökvonás kivezethet belőle.
- **Irracionális számok ($\\mathbb{Q}^*$ vagy $\\mathbb{Q}'$):** Azon valós számok, amelyek nem írhatók fel két egész szám hányadosaként. Tizedes tört alakjuk végtelen, nem szakaszosan ismétlődő. Példák: $\\sqrt{2}, \\sqrt{3}, \\pi, e$.

- **Valós számok ($\\mathbb{R}$):** A racionális és irracionális számok egyesítése: $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{Q}'$. A számegyenes folytonos pontjait alkotják.

### 2. Törtek és tizedes törtek kapcsolata

- **Közönséges tört:** $\\frac{a}{b}$ alakú tört ($b \\neq 0$), ahol $a$ a számláló, $b$ a nevező.

- **Véges tizedes tört:** a tizedesvessző után véges sok számjegy áll. Egy tovább nem egyszerűsíthető $\\frac{p}{q}$ közönséges tört akkor és csak akkor véges tizedes tört, ha $q$ prímtényezős felbontásában csak 2-es és 5-ös szerepel ($q = 2^\\alpha \\cdot 5^\\beta$).

- **Végtelen szakaszos (periodikus) tizedes tört:** egy idő után a számjegyek egy csoportja végtelenül ismétlődik. Minden racionális szám vagy véges, vagy végtelen szakaszos tizedes tört!

- **Végtelen nem szakaszos tizedes tört:** pontosan az irracionális számok halmaza.

### 3. Halmazok számossága (Cantor elmélete)

- **Számosság fogalma ($|A|$):** Két halmaz azonos számosságú ($|A| = |B|$), ha létezik köztük kölcsönösen egyértelmű (bijektív) leképezés.

- **Véges halmaz:** elemeinek száma egy természetes számmal megadható ($n \\in \\mathbb{N}$).

- **Megszámlálhatóan végtelen halmaz ($\\aleph_0$):** amely kölcsönösen egyértelműen megfeleltethető a természetes számok halmazával ($\\mathbb{N}$). Meglepő módon:
  $$|\\mathbb{N}| = |\\mathbb{Z}| = |\\mathbb{Q}| = \\aleph_0$$
  (Cantor első átlós eljárásával a törtek sorba rendezhetők!).

- **Nem megszámlálhatóan végtelen (kontínuum számosság, $c$):** amely nem állítható sorba $\\mathbb{N}$-nel. Cantor második átlós eljárásával bizonyította, hogy a valós számok halmaza és bármely nem elfajuló intervallum ($[0, 1]$) nem megszámlálható:
  $$|\\mathbb{R}| = |\\mathbb{Q}'| = |[0, 1]| = c > \\aleph_0$$

### 4. Műveletek racionális és irracionális számokkal

- **Zártság:** $\\mathbb{Q}$ zárt a négy alapműveletre; az irracionális számok halmaza egyikre sem zárt.

- **Racionális + irracionális = irracionális.** Indirekt: ha $r\\in\\mathbb{Q}$, $x\\notin\\mathbb{Q}$ és $r+x=q\\in\\mathbb{Q}$ lenne, akkor $x=q-r\\in\\mathbb{Q}$, ami ellentmondás.

- **Irracionális + irracionális** lehet racionális: $\\sqrt2+(2-\\sqrt2)=2$; de lehet irracionális is: $\\sqrt2+\\sqrt3$.

- **Irracionális · irracionális** lehet racionális: $\\sqrt2\\cdot\\sqrt2=2$; de $\\sqrt2\\cdot\\sqrt3=\\sqrt6$ irracionális.

- **Racionális · irracionális:** ha a racionális tényező nem $0$, az eredmény irracionális; kivétel $0\\cdot\\sqrt2=0$.

- **Példa:** $\\sqrt2+\\sqrt3$ irracionális. Ha $q\\in\\mathbb{Q}$ lenne az összeg, négyzetre emelve $5+2\\sqrt6=q^2$, ahonnan $\\sqrt6\\in\\mathbb{Q}$; ez a $\\sqrt2$-nél látott paritásos indirekt bizonyítással cáfolható.

### 5. Közönséges tört és tizedes tört átalakítása

- **Törtből tizedes tört:** írásbeli osztással. Ha a nevező $2^\\alpha5^\\beta$ alakú, a tört véges; minden más esetben végtelen szakaszos. Például $\\frac17=0{,}\\overline{142857}$, a szakasz hossza 6.

- **Szakaszos tizedes törtből tört:** a szakaszt tartalmazó egyenletet írjuk fel, majd kivonunk.
  $$x=0{,}2\\overline{36}\\implies 100x=23{,}6\\overline{36}\\implies 99x=23{,}4\\implies x=\\frac{234}{990}=\\frac{13}{55}.$$
  Ellenőrzés: $13:55=0{,}2363636\\ldots$

- **$0{,}\\overline9=1$:** $x=0{,}\\overline9\\implies 10x=9{,}\\overline9\\implies 9x=9\\implies x=1$. Ez nem hiba, hanem a tizedes tört alak nem egyértelműsége: minden véges tizedes tört felírható kilences szakasszal is.

- **Fontos:** $\\pi=3{,}14159\\ldots$ nem szakaszos, ezért nem írható fel két egész szám hányadosaként; a $\\frac{22}{7}$ csak közelítés.

### 6. Sűrűség és a valós számok teljessége

- **Sűrűség:** bármely $a<b$ valós szám között van racionális és irracionális szám is. Racionálishoz az arkhimédészi tulajdonságot használjuk: van olyan $n$, hogy $\\frac1n<b-a$, és ekkor valamely $k$-ra $a<\\frac kn<b$.

- **Teljesség:** a racionális számok számegyenesének hézagait a valós számok töltik ki (Dedekind-szeletek, Cauchy-sorozatok). Ez teszi lehetővé a határérték, a folytonosság és a deriválás értelmezését.

- **Látszólagos ellentmondás:** $\\mathbb{Q}$ sűrű $\\mathbb{R}$-ben, mégis "sokkal kevesebb" eleme van: $|\\mathbb{Q}|=\\aleph_0$, míg $|\\mathbb{R}|=c$.

### 7. Szóbeli kiemelések

- A definíciót mindig a $\\frac pq$ alakkal és a $q\\neq0$ kikötéssel mondd ki; említsd, hogy $p,q$ egész és a tört tovább nem egyszerűsíthető.
- A $\\sqrt2$ bizonyításánál a hangsúly az indirekt feltevésen, a paritáson és az egyszerűsíthetőségi ellentmondáson van.
- A számosságnál a kulcs a bijekció, nem a "részhalmaz kisebb" szemlélet: $\\mathbb{N}\\subset\\mathbb{Z}$, mégis $|\\mathbb{N}|=|\\mathbb{Z}|$.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'A √2 szám irracionális szám',
        statementLatex: '\\sqrt{2} \\notin \\mathbb{Q}',
        proofTitle: 'Indirekt bizonyítás paritással',
        proofSteps: [
          {
            stepNumber: 1,
            title: '√2 ∉ ℚ',
            latexContent: '\\sqrt{2}=\\frac{p}{q}\\ (\\mathrm{lnko}=1) \\implies p^2=2q^2 \\implies p,q\\ \\text{páros} \\implies \\text{ellentmondás}',
            explanation: 'Tegyük fel indirekten, hogy √2 racionális: √2 = p/q, ahol p,q pozitív egészek és lnko(p,q)=1 (tovább nem egyszerűsíthető tört). Négyzetre emelve: 2 = p²/q², tehát p² = 2q². Így p² páros ⇒ p páros (páratlan négyzete páratlan), azaz p = 2k. Beírva: 4k² = 2q² ⇒ q² = 2k² ⇒ q is páros. De akkor p és q is osztható 2-vel, ellentmond az lnko(p,q)=1 feltevésnek. Tehát √2 nem racionális. Tipikus vizsgacsapda: ne felejtsd el kimondani, hogy a tört egyszerűsíthetetlen — enélkül nincs ellentmondás.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'A racionális számok tizedes tört alakja minden esetben szakaszosan ismétlődő',
        proofTitle: 'Bizonyítás: maradékos osztás + skatulyaelv',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Véges vagy szakaszos tizedes tört',
            latexContent: 'p:q\\ \\text{maradékai}\\in\\{0,1,\\ldots,q-1\\}',
            explanation: 'A p/q tört tizedes alakját írásbeli osztással kapjuk. Minden lépésben a maradék 0,1,…,q−1 közül kerül ki — legfeljebb q lehetőség. Ha valamikor 0 a maradék, az osztás véget ér: véges tizedes tört. Ha soha nem 0, akkor legkésőbb q lépés után egy korábbi maradéknak meg kell ismétlődnie (skatulyaelv). Ugyanattól a maradéktól ugyanaz a számjegysorozat indul újra → végtelen szakaszos (periodikus) tizedes tört. Fordítva: minden szakaszos tizedes tört visszavezethető közönséges törtre. Példa: 1/7 = 0,142857… szakasz hossza 6 < 7.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Egyenletek megoldásakor a kikötések megadása: páros gyökkitevő alatt nemnegatív szám állhat, tört nevezője nem lehet nulla.',
      'Valós számok használata az analízisben: a határérték, a deriválás és az integrálás elmélete megköveteli a számegyenes hézagmentességét (Dedekind-szeletek, valós számok teljessége).',
      'Geometriai méretek: a kör kerülete és területe az irracionális π számot használja, a Pitagorasz-tétel átlói szinte mindig irracionális gyökökhöz vezetnek.'
    ],
    applicationsOutside: [
      'Mérnöki gyakorlat és kísérleti fizika: a fizikai mérőeszközök korlátozott pontosságúak, így minden közvetlen mérési eredmény szükségképpen racionális szám (véges tizedes tört).',
      'Tudományos modellezés: a valós számok folytonossága teszi lehetővé a differenciálegyenletek felírását a mozgások, hőtani folyamatok és elektromágneses hullámok leírására.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Oldd meg a valós számok halmazán a következő egyenletet: √(-x² + 10x - 21) · log_(x² + 3x - 17)(x - 2) = √(6x² - 60x + 126)!',
        solutionLatex: '\\text{Kikötések: } -x^2+10x-21 \\ge 0 \\implies x \\in [3, 7]; \\quad 6x^2-60x+126 \\ge 0 \\implies x \\in ]-\\infty, 3] \\cup [7, \\infty[. \\\\ \\text{A gyökök közös értelmezési tartománya: } x \\in \\{3, 7\\}. \\\\ x = 3 \\text{ esetén az alap } 3^2+3(3)-17 = 1 \\implies \\text{nem megengedett.} \\\\ x = 7 \\text{ esetén mindkét oldal } 0, \\text{ az alap } 53 > 0, \\neq 1, \\text{ numerus } 5 > 0. \\implies x = 7 \\text{ az egyetlen megoldás.}'
      },
      {
        problemNumber: 2,
        question: '1 és 100 között hány olyan természetes szám van, amely sem kettővel, sem hárommal nem osztható?',
        solutionLatex: '|A| = \\lfloor 100/3 \\rfloor = 33, \\quad |B| = \\lfloor 100/2 \\rfloor = 50, \\quad |A \\cap B| = \\lfloor 100/6 \\rfloor = 16. \\\\ |A \\cup B| = 33 + 50 - 16 = 67. \\quad \\text{Sem 2-vel, sem 3-mal nem osztható: } 100 - 67 = 33 \\text{ db.}'
      },
      {
        problemNumber: 3,
        question: 'Írd fel közönséges tört alakban a 0,2363636… szakaszos tizedes törtet, majd döntsd el, hogy a √2 + √3 szám racionális-e!',
        solutionLatex: 'x=0{,}2\\overline{36}\\implies100x=23{,}6\\overline{36}\\implies99x=23{,}4\\implies x=\\frac{234}{990}=\\frac{13}{55}; \\quad \\sqrt2+\\sqrt3\\notin\\mathbb{Q}.',
        explanation: 'A szakaszos törtnél 100-zal szorozva és az eredeti egyenletet kivonva a szakasz eltűnik. A √2+√3 irracionalitását indirekten: ha q ∈ ℚ lenne, akkor q² = 5+2√6 miatt √6 ∈ ℚ, ami a √2-nél látott paritásos bizonyítással cáfolható.'
      },
    ],    oralPresentationOutline: [
      'Számhalmazok: $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$',
      'Racionális szám: $p/q$ alak; irracionális: nem ilyen (pl. $\\sqrt{2}$, $\\pi$)',
      '$\\sqrt{2}$ irracionalitásának indirekt bizonyítása',
      'Műveletek zártsága $\\mathbb{Q}$-n; $\\mathbb{Q}$ sűrű $\\mathbb{R}$-ben',
      'Tizedes tört: véges/szakaszos ↔ racionális; nem szakaszos ↔ irracionális',
      'Műveletek irracionálisokkal: tipikus csapdák ($\\sqrt{2}+(-\\sqrt{2})=0$)',
      'Szóbeli: bizonyítás + példa + zártság'
    ],
    requiredDefinitions: [
      {
        term: 'Racionális szám',
        definitionLatex: '\\mathbb{Q}=\\left\\{\\frac{p}{q}: p\\in\\mathbb{Z},\\ q\\in\\mathbb{Z}\\setminus\\{0\\}\\right\\}',
        explanation: 'Két egész hányadosa (q≠0). Ekvivalens: szakaszos vagy véges tizedes tört.',
      },
      {
        term: 'Irracionális szám',
        definitionLatex: '\\mathbb{R}\\setminus\\mathbb{Q}',
        explanation: 'Nem írható fel két egész hányadosaként. Klasszikus példák: $\\sqrt{2}$, $\\sqrt{3}$, $\\pi$, $e$.',
      },
      {
        term: 'Zártság műveletre',
        definitionLatex: 'A\\text{ zárt }\\circ\\text{-ra, ha }a,b\\in A \\Rightarrow a\\circ b\\in A',
        explanation: '$\\mathbb{Q}$ zárt az összeadásra és szorzásra; az irracionálisok nem.',
      }
    ],

    examinerTraps: [
      {
        question: 'Lehet-e két irracionális szám összege racionális szám?',
        answer: 'Igen! Például: (3 + √2) + (3 - √2) = 6, ami racionális szám. Hasonlóan √2 · √2 = 2 is racionális.',
        dangerLevel: 'Közepes'
      },
      {
        question: 'Hány racionális szám van 0 és 1 között?',
        answer: 'Megszámlálhatóan végtelen sok (ℵ₀). Bármely két valós szám között végtelen sok racionális és végtelen sok irracionális szám található (a racionális számok sűrűek a valós számokban).',
        dangerLevel: 'Közepes'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Racionális és irracionális számok, számosság\n\n### Fő állítások\n\n**√2 irracionális** ($\\sqrt{2}\\notin\\mathbb{Q}$): klasszikus indirekt bizonyítás.\n\n$\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R},\\quad \\mathbb{Q}=\\left\\{\\frac{p}{q}\\mid p\\in\\mathbb{Z},\\ q\\in\\mathbb{Z}\\setminus\\{0\\}\\right\\}$\n\n$\\sqrt{2}\\notin\\mathbb{Q},\\quad |\\mathbb{N}|=|\\mathbb{Z}|=|\\mathbb{Q}|=\\aleph_0 < |\\mathbb{R}|=c$\n\n### Definíciók\n\n**Racionális:** két egész hányadosa ($q\\neq0$). Ekvivalens: véges vagy végtelen szakaszos tizedes tört.\n\n**Irracionális:** $\\mathbb{R}\\setminus\\mathbb{Q}$ (nem szakaszos végtelen tizedes), pl. √2 ($\\sqrt{2}$), $\\pi$, $e$.\n\n**Zártság:** $A$ zárt $\\circ$-ra, ha $a,b\\in A\\Rightarrow a\\circ b\\in A$. $\\mathbb{Q}$ zárt $+$-ra és $\\cdot$-ra.\n\n**Megszámlálhatóan végtelen:** bijekció van $\\mathbb{N}$-nel. **Kontinuum:** $|\\mathbb{R}|$.\n\n### Tételek / bizonyítandó\n\n**Tétel.** $\\sqrt{2}$ irracionális (indirekt: ha $p/q$ egyszerűsíthetetlen, $p^2=2q^2$ → $p$ páros → $q$ páros → ellentmondás).\n\n**Állítás.** Két irracionális összege/szorzata lehet racionális (pl. $\\sqrt{2}+(-\\sqrt{2})=0$, $\\sqrt{2}\\cdot\\sqrt{2}=2$).\n\n**Állítás.** $\\mathbb{Q}$ sűrű $\\mathbb{R}$-ben: bármely két valós között van racionális (és irracionális).",
    oralExamPlan: "## Szóbeli felelet vázlata — Racionális / irracionális (15–20 perc · 35 pont)\n\n### 0–2 perc · Bevezetés\nSzámhalmaz-hierarchia $\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}$. Pythagoreusok / $\\sqrt{2}$, Cantor számosság.\n\n### 2–5 perc · Definíció (2 pont)\nPontosan: racionális = $p/q$, vagy: szakaszos tizedes ↔ racionális. Emeld ki a $q\\neq0$ feltételt.\n\n### 5–8 perc · Elmélet\nMűveleti zártság $\\mathbb{Q}$-n; irracionálisok **nem** zártak. Tizedes tört típusok. Számosság: $\\aleph_0$ vs. kontinuum (vázlatosan).\n\n### 8–13 perc · Tétel + bizonyítás (6 pont)\n**$\\sqrt{2}\\notin\\mathbb{Q}$** indirekt bizonyítás — ez a klasszikus választás. Alternatíva: $\\sqrt{2}+\\sqrt{3}$ irracionalitása.\n\n### 13–15 perc · Alkalmazások (4 pont)\nBelül: ÉT / gyökök; Pitagorasz → irracionális hossz. Kívül: mérés ≈ racionális, modellezés → $\\mathbb{R}$.\n\n### 15–18 perc · Feladat (8 pont)\nSzakaszos tört → közönséges tört, vagy logikai szita (1–100, sem 2 sem 3), vagy ÉT-es egyenlet.\n\n### Zárás · Nyelv (5 pont)\nNe mondd: „minden irracionális összege irracionális”. Használj: egyszerűsíthetetlen tört, paritás, sűrűség.\n\n### Pontozás\n10+2+6+8+4+5 = 35",
    visualizerType: 'prime'
  },
  {
    id: 'tétel-03',
    number: 3,
    title: 'Oszthatóság, oszthatósági szabályok és tételek. Prímszámok. Számrendszerek',
    category: 'Számelmélet és algebra',
    tags: ['Oszthatóság', 'Prímszámok', 'Aritmetika alaptétele', 'LNKO', 'LKKT', 'Számrendszerek'],
    difficulty: '2: bemelegítő',
    summary: 'Az oszthatóság definíciója, relációja, tulajdonságai. Prímszámok, összetett számok, a számelmélet alaptétele. Oszthatósági szabályok (2, 3, 4, 5, 6, 8, 9, 10, 11, összetett számok). Legnagyobb közös osztó (LNKO) és legkisebb közös többszörös (LKKT). Helyiértékes számrendszerek.',
    statementLatex: 'a \\mid b \\iff \\exists c \\in \\mathbb{Z}: b = a \\cdot c, \\quad n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dotsm p_k^{\\alpha_k}, \\quad (a, b) \\cdot [a, b] = a \\cdot b',
    conditionsLatex: 'a, b \\in \\mathbb{Z}, a \\neq 0',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 2. oldal (Oszthatósági szabályok, számelmélet)',
    introduction: `A számelmélet az egész számok tulajdonságaival foglalkozik.

Az oszthatóság és a prímszámok vizsgálata már az ókori görögök (Eukleidész) és a babilóniaiak idejében virágzott.

A 12-es és a 60-as számrendszer öröksége a mai napig velünk él az időmérésben (60 másodperc, 60 perc, 12 hónap, tucat).

A modern informatikai világ a kettes és tizenhatos számrendszerre épül.`,
    detailedTheory: `### 1. Az oszthatóság fogalma és tulajdonságai

- **Oszthatóság definíciója:** Az $a$ egész szám osztója a $b$ egész számnak ($a \\mid b$), ha létezik olyan $c \\in \\mathbb{Z}$, amelyre $b = a \\cdot c$.

- **Tulajdonságok:**
  - Reflexív: $a \\mid a$ minden $a \\neq 0$-ra.
  - Tranzitív: ha $a \\mid b$ és $b \\mid c$, akkor $a \\mid c$.
  - Lineáris kombináció: ha $a \\mid b$ és $a \\mid c$, akkor $a \\mid (b \\pm c)$, és tetszőleges $k, m \\in \\mathbb{Z}$-re $a \\mid (k b + m c)$.
  - A 0-nak minden nemnulla szám osztója ($a \\mid 0$, mert $0 = a \\cdot 0$). A nullával való osztás nincs értelmezve.
  - Az 1 minden számnak osztója ($1 \\mid a$).

### 2. Prímszámok és a számelmélet alaptétele

- **Prímszám:** azon 1-nél nagyobb természetes szám, amelynek pontosan két pozitív osztója van: 1 és önmaga. (Az 1 NEM prím!).

- **Összetett szám:** 1-nél nagyobb természetes szám, amelynek 2-nél több pozitív osztója van.

- **A számelmélet alaptétele (Aritmetika alaptétele):** Minden 1-nél nagyobb természetes szám a tényezők sorrendjétől eltekintve egyértelműen felbontható prímszámok szorzatára:
  $$n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dotsm p_k^{\\alpha_k} \\quad (p_1 < p_2 < \\dots < p_k \\text{ prímek}, \\alpha_i \\in \\mathbb{N}^+)$$

- **Pozitív osztók száma ($d(n)$):**
  $$d(n) = (\\alpha_1 + 1)(\\alpha_2 + 1) \\dotsm (\\alpha_k + 1)$$

- **Prím fogalmak:**
  - Ikerprímek: különbségük 2 (pl. 11 és 13, 17 és 19).
  - Relatív prímek: legnagyobb közös osztójuk 1: $\\text{lnko}(a, b) = 1$.

### 3. Oszthatósági szabályok a 10-es számrendszerben

- **Utolsó számjegy alapján:**
  - 2-vel: ha az utolsó számjegy páros (0, 2, 4, 6, 8).
  - 5-tel: ha az utolsó számjegy 0 vagy 5.
  - 10-zel: ha az utolsó számjegy 0.

- **Utolsó k számjegy alapján ($10^k$ osztói):**
  - 4-gyel: ha az utolsó két számjegyből alkotott szám osztható 4-gyel.
  - 8-cal: ha az utolsó három számjegyből képzett szám osztható 8-cal.
  - 25-tel: ha az utolsó két számjegy 00, 25, 50 vagy 75.

- **Számjegyösszeg alapján:**
  - 3-mal: ha a számjegyek összege osztható 3-mal.
  - 9-cel: ha a számjegyek összege osztható 9-cel.

- **Váltakozó előjelű összeg:**
  - 11-gyel: ha a számjegyek hátulról képzett váltakozó előjelű összege osztható 11-gyel.

- **Összetett számok oszthatósági szabálya:** Ha $a = b \\cdot c$, és $\\text{lnko}(b, c) = 1$, akkor egy szám pontosan akkor osztható $a$-val, ha külön-külön osztható $b$-vel és $c$-vel is! (Pl. 6 = 2 · 3, 12 = 3 · 4, 18 = 2 · 9, 36 = 4 · 9, 45 = 5 · 9).

### 4. LNKO, LKKT és kapcsolatuk

- **Legnagyobb közös osztó ($\\text{lnko}(a, b)$ vagy $(a, b)$):** A közös prímtényezők legkisebb előforduló hatványkitevőinek szorzata.

- **Legkisebb közös többszörös ($\\text{lkkt}[a, b]$ vagy $[a, b]$):** Az összes előforduló prímtényező legnagyobb hatványkitevőinek szorzata.

- **Alapvető összefüggés:**
  $$(a, b) \\cdot [a, b] = a \\cdot b$$

### 5. Helyiértékes számrendszerek

- Az $n$ alapú számrendszer helyiértékei: $1, n, n^2, n^3, \\dots$. A használható alaki értékek: $0, 1, 2, \\dots, n - 1$.
- Átváltás $n$ alapúból 10-esbe: helyiértékes polinomalak kiszámításával.
- Átváltás 10-esből $n$ alapúba: szukcesszív maradékos osztással $n$-nel, a maradékokat alulról felfelé (visszafelé) kiolvasva.

### 6. Kongruenciák és az oszthatósági bizonyítások mintái

- **Kongruencia:** $a\\equiv b\\pmod m\\iff m\\mid(a-b)$. A maradékos osztás egyértelműsége miatt minden egész pontosan egy maradékosztályba esik modulo $m$.

- **Műveletek:** a kongruenciákat lehet összeadni, kivonni és szorozni; osztani csak akkor, ha az osztó és a modulus relatív prím.

- **Példa:** $7\\mid 3^{2n+1}+2^{n+2}$ minden $n\\ge0$-ra. Mivel $3^{2n+1}=3\\cdot9^n\\equiv3\\cdot2^n$ és $2^{n+2}=4\\cdot2^n$, az összeg $7\\cdot2^n\\equiv0\\pmod7$.

- **Ugyanez teljes indukcióval:** bázis $n=0$-ra $3+4=7$; ha $3^{2n+1}+2^{n+2}=7k$, akkor $3^{2n+3}+2^{n+3}=9\\cdot3^{2n+1}+2\\cdot2^{n+2}=9\\cdot7k-7\\cdot2^{n+2}$, ami osztható 7-tel.

### 7. Nevezetes számelméleti tételek

- **Végtelen sok prímszám (Eukleidész):** ha $p_1,\\dots,p_n$ az összes prím lenne, akkor $N=p_1p_2\\cdots p_n+1$ egyikükkel sem osztható, így van új prímosztója — ellentmondás.

- **Prímteszt:** ha $n$ összetett, akkor van legfeljebb $\\sqrt n$ nagyságú prímosztója. Ezért elég $\\sqrt n$-ig osztókat keresni; ezt használja Eratoszthenész szitája.

- **A számelmélet alaptétele:** minden $n>1$ felbontható prímek szorzatára, és a felbontás a tényezők sorrendjétől eltekintve egyértelmű.

- **Alkalmazás:** $n$ akkor és csak akkor négyzetszám, ha prímfelbontásában minden kitevő páros; köbszámnál minden kitevő osztható 3-mal.

### 8. LNKO, LKKT és szöveges feladatok

- **Euklideszi algoritmus:** $\\gcd(a,b)=\\gcd(b,a\\bmod b)$, amíg a maradék nulla nem lesz. Példa: $1071=2\\cdot462+147$, $462=3\\cdot147+21$, $147=7\\cdot21+0$, tehát $\\gcd(1071,462)=21$.

- **Kapcsolat:** $\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=|ab|$.

- **Szöveges feladat kulcsa:** "legnagyobb egyforma csomag" → LNKO; "legkisebb közös időpont, ismétlődés" → LKKT.

- **Kongruenciás példa:** oldjuk meg egyszerre az $x\\equiv3\\pmod8$ és $x\\equiv7\\pmod{12}$ feltételt. $x=3+8k$ behelyettesítve $3+8k\\equiv7\\pmod{12}$, azaz $2k\\equiv1\\pmod3$, innen $k\\equiv2\\pmod3$, tehát $x=19+24t$.

### 9. Szóbeli kiemelések

- Az oszthatóság definíciójánál mindig mondd ki: létezik olyan $c$ egész, amelyre $b=ac$; a $0$-val való osztást külön zárd ki.
- A prímfelbontás egyértelműségét ne bizonyítsd teljes részletességgel, de utalj rá, hogy ez a számelmélet alaptétele.
- Az oszthatósági szabályoknál a helyiértékes felírásból indulj ki: $n=\\sum a_i10^i$, és használd, hogy $10\\equiv1\\pmod3$, illetve $10\\equiv-1\\pmod{11}$.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'Végtelen sok prímszám létezik (Eukleidész tétele)',
        proofTitle: 'Eukleidész indirekt konstrukciója',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'N = p₁⋯pₖ + 1',
            latexContent: 'N=(p_1\\cdots p_k)+1 \\not\\equiv 0\\pmod{p_i}',
            explanation: 'Tegyük fel, hogy csak véges sok prím van: p₁,…,pₖ. Képezzük N = (p₁·p₂····pₖ)+1. N>1, tehát van prímosztója. De N-et bármelyik listabeli pᵢ-vel osztva 1 a maradék, tehát egyik pᵢ sem osztja N-et. Így N prímosztója új prím — ellentmondás. A lista tetszőleges véges volt, ezért végtelen sok prímszám létezik. Fontos: N maga nem feltétlenül prím (pl. 2·3·5·7·11·13+1 összetett lehet), de mindig van a listán kívüli prímosztója.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Algebrai törtek egyszerűsítése: számláló és nevező prímtényezős felbontásával megkeressük a legnagyobb közös osztót (LNKO).',
      'Törtek közös nevezőre hozása: a nevezők legkisebb közös többszörösének (LKKT) meghatározása.',
      'Lineáris diofantoszi egyenletek megoldhatósága: $ax + by = c$ pontosan akkor oldható meg egész számokban, ha $\\text{lnko}(a, b) \\mid c$.',
      'Számelméleti sejtések: Goldbach-sejtés (minden 2-nél nagyobb páros szám két prím összege).'
    ],
    applicationsOutside: [
      'Kriptográfia és adatbiztonság: az RSA nyilvános kulcsú titkosítás azon alapul, hogy két hatalmas (többszáz jegyű) prímszám szorzatát könnyű kiszámítani, de a szorzatot prímtényezőkre bontani a mai szuperszámítógépekkel is évmilliókig tartana.',
      'Informatika és hardvertervezés: a számítógépek bináris (2-es), a memóriacímzés és színkódok pedig hexadecimális (16-os) számrendszert használnak.',
      'Idő- és szögmérés: a 60-as (sumér) számrendszer alkalmazása az óra percekre és másodpercekre bontásában, valamint a kör 360 fokos felosztásában.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Írd fel a 2564 tízes számrendszerbeli számot 5-ös számrendszerben, és ellenőrizd az eredményt!',
        solutionLatex: '2564 : 5 = 512, \\text{ m: } 4 \\\\ 512 : 5 = 102, \\text{ m: } 2 \\\\ 102 : 5 = 20, \\text{ m: } 2 \\\\ 20 : 5 = 4, \\text{ m: } 0 \\\\ 4 : 5 = 0, \\text{ m: } 4 \\implies 2564_{10} = 40224_5. \\\\ \\text{Ellenőrzés: } 4 \\cdot 5^4 + 0 \\cdot 5^3 + 2 \\cdot 5^2 + 2 \\cdot 5^1 + 4 \\cdot 5^0 = 2500 + 0 + 50 + 10 + 4 = 2564.'
      },
      {
        problemNumber: 2,
        question: 'Öt cédulára felírtuk a 2, 3, 4, 6, 8 számjegyeket, majd hármat kihúzunk visszatevés nélkül. Mekkora a valószínűsége, hogy a kapott 3 jegyű szám osztható 3-mal?',
        solutionLatex: '\\text{A számjegyek 3-as maradékai: } 2 \\to 2, 3 \\to 0, 4 \\to 1, 6 \\to 0, 8 \\to 2. \\\\ \\text{Akkor osztható 3-mal, ha a számjegyösszeg osztható 3-mal (maradékok összege 0 mod 3).} \\\\ \\text{Megfelelő számhármasok: } \\{2,3,4\\}, \\{2,4,6\\}, \\{4,6,8\\}, \\{3,4,8\\} \\implies 4 \\text{ féle hármas.} \\\\ \\text{Kedvező esetek: } 4 \\cdot 3! = 24. \\quad \\text{Összes eset: } 5 \\cdot 4 \\cdot 3 = 60. \\\\ P = \\frac{24}{60} = \\frac{2}{5} = 0{,}40 \\quad (40\\%).'
      },
      {
        problemNumber: 3,
        question: 'Bizonyítsd be, hogy 7 | 3^(2n+1) + 2^(n+2) minden n ≥ 0 egészre, majd határozd meg az összes olyan x egészet, amelyre x ≡ 3 (mod 8) és x ≡ 7 (mod 12)!',
        solutionLatex: '3^{2n+1}+2^{n+2}=3\\cdot9^n+4\\cdot2^n\\equiv3\\cdot2^n+4\\cdot2^n=7\\cdot2^n\\equiv0\\pmod7. \\\\ x=3+8k,\\ 3+8k\\equiv7\\pmod{12}\\implies2k\\equiv1\\pmod3\\implies k\\equiv2\\pmod3 \\\\ x=19+24t,\\ t\\in\\mathbb{Z}.',
        explanation: 'Az első részben a 9 ≡ 2 (mod 7) átalakítás a kulcs, így mindkét tag 2^n többszöröse lesz. A második részben a kongruenciát 8-cal osztva 4-gyel egyszerűsítünk, majd a maradékosztályt visszahelyettesítjük.'
      },
    ],    oralPresentationOutline: [
      'Oszthatóság def.: $a\\mid b \\iff \\exists k\\in\\mathbb{Z}:\\ b=ka$',
      'Oszthatósági szabályok 2,3,4,5,8,9,10,11-re',
      'LNKO, LKKT; euklideszi algoritmus',
      'Prímszám def.; végtelen sok prím (Eukleidész)',
      'A számelmélet alaptétele (egyértelmű prímfaktorizáció)',
      'Számrendszerek: $n=(a_k\\ldots a_0)_b$ átváltás',
      'Szóbeli: alaptétel + euklideszi + egy oszthatósági szabály bizonyítása'
    ],
    requiredDefinitions: [
      {
        term: 'Oszthatóság',
        definitionLatex: 'a\\mid b \\iff \\exists k\\in\\mathbb{Z}:\\ b = k a',
        explanation: 'a osztója b-nek. Tranzitív: ha $a\\mid b$ és $b\\mid c$, akkor $a\\mid c$.',
      },
      {
        term: 'Prímszám',
        definitionLatex: 'p>1\\text{ és csak 1, }p\\text{ pozitív osztói vannak}',
        explanation: 'Az 1 nem prím. Összetett: van nemtriviális osztója.',
      },
      {
        term: 'Számelmélet alaptétele',
        definitionLatex: 'n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}\\quad (p_i\\text{ prímek, egyértelmű felcseréléstől eltekintve})',
        explanation: 'Minden 1-nél nagyobb természetes szám egyértelműen felbomlik prímek szorzatára.',
      },
      {
        term: 'Euklideszi algoritmus',
        definitionLatex: '\\text{lnko}(a,b)=\\text{lnko}(b,a\\bmod b)',
        explanation: 'Maradékos osztásokkal hatékonyan adja az LNKO-t; visszfelé Bézout-együtthatók is.',
      }
    ],

    examinerTraps: [
      {
        question: 'Ha egy szám osztható 4-gyel és 6-tal, akkor biztosan osztható 24-gyel?',
        answer: 'Nem feltétlenül! Például a 12 osztható 4-gyel és 6-tal is, de nem osztható 24-gyel. Az összetett szabály csak RELATÍV PRÍM osztópárokra alkalmazható (pl. 3 és 8 esetén 24-gyel osztható).',
        dangerLevel: 'Magas'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Oszthatóság, prímek, számrendszerek\n\n### Fő állítások\n\n$a\\mid b \\iff \\exists c\\in\\mathbb{Z}:\\ b=ac$\n\n$n=p_1^{\\alpha_1}\\cdots p_k^{\\alpha_k}\\quad(\\text{számelmélet alaptétele})$\n\n$\\mathrm{lnko}(a,b)\\cdot\\mathrm{lkkt}(a,b)=|ab|$\n\n### Definíciók\n\n**Oszthatóság:** $a\\mid b$, ha létezik $c$ egész, $b=ac$ ($a\\neq0$ a gyakorlatban).\n\n**Prím:** $p>1$, pontosan két pozitív osztója: $1$ és $p$. (Az $1$ nem prím!)\n\n**Összetett:** $n>1$, legalább három pozitív osztó.\n\n**LNKO / LKKT:** közös prímek min. / összes prím max. kitevőivel.\n\n**Relatív prím:** $\\mathrm{lnko}(a,b)=1$.\n\n**Ikerprím:** két prím, különbségük 2 (pl. $ és $).\n\n### Oszthatósági szabályok (bemagolandó)\n\n- **2, 5, 10:** utolsó jegy.\n- **4:** utolsó 2 jegy; **8:** utolsó 3 jegy; **16:** utolsó 4 jegy; **25:** utolsó 2 jegy.\n- **3, 9:** számjegyösszeg.\n- **7:** 3-as csoportok váltakozó előjelű összege.\n- **11:** váltakozó előjelű számjegyösszeg.\n- Összetett $a=bc$ relatív prím tényezőkre: $a\\mid n\\iff b\\mid n$ és $c\\mid n$.\n\n### Tételek\n\n**Eukleidész:** végtelen sok prím ($N=p_1\\cdots p_k+1$).\n\n**Alaptétel:** egyértelmű prímfelbontás.\n\n**Euklideszi algoritmus:** $\\mathrm{lnko}(a,b)=\\mathrm{lnko}(b,a\\bmod b)$.\n\n**Osztók száma:** $d(n)=(\\alpha_1+1)\\cdots(\\alpha_k+1)$.",
    oralExamPlan: "## Szóbeli felelet vázlata — Oszthatóság / prímek (15–20 perc · 35 pont)\n\n### 0–2 perc · Bevezetés\nEukleidész, helyiértékes számrendszerek (10-es, 2-es, 60-as örökség).\n\n### 2–5 perc · Definíció (2 pont)\nOszthatóság **vagy** prímszám — pontosan, feltételekkel. Emeld ki: $1$ nem prím.\n\n### 5–8 perc · Elmélet\nOszthatósági szabályok (legalább 3–4 indoklással: $10\\equiv1\\pmod3$). LNKO–LKKT kapcsolat. Számrendszer-átváltás vázlata.\n\n### 8–13 perc · Tétel + bizonyítás (6 pont)\n**Végtelen sok prím** (Eukleidész) — ajánlott. Alternatíva: egy oszthatósági szabály levezetése, vagy $7\\mid 3^{2n+1}+2^{n+2}$.\n\n### 13–15 perc · Alkalmazások (4 pont)\nBelül: törtek egyszerűsítése, közös nevező. Kívül: RSA (prímfaktorizáció nehéz), bináris/hex.\n\n### 15–18 perc · Feladat (8 pont)\nÁtváltás számrendszerben, LNKO/LKKT szöveges, vagy kongruenciarendszer.\n\n### Zárás · Nyelv (5 pont)\nCsapda: „osztható 4-gyel és 6-tal ⇒ osztható 24-gyel” — csak relatív prím tényezőknél.\n\n### Pontozás\n10+2+6+8+4+5 = 35",
    visualizerType: 'prime'
  },
  {
    id: 'tétel-04',
    number: 4,
    title: 'A matematikai logika elemei. Logikai műveletek. Állítás és megfordítása, szükséges és elégséges feltételek, bemutatásuk tételek megfogalmazásában és bizonyításában',
    category: 'Halmazok és logika',
    tags: ['Logika', 'Kijelentéskalkulus', 'Implikáció', 'Ekvivalencia', 'Szükséges és elégséges', 'De Morgan'],
    difficulty: '1: alap alatti',
    summary: 'Kijelentés (ítélet) fogalma, logikai értékek (I/H). Kvantorok (∀, ∃) és tagadásuk. Logikai műveletek: negáció, konjunkció, diszjunkció, kizáró vagy, implikáció, ekvivalencia és igazságtábláik. De Morgan-szabályok. Állítás megfordítása, szükséges és elégséges feltételek.',
    statementLatex: 'A \\implies B \\iff \\neg A \\lor B, \\quad \\neg(A \\implies B) \\iff A \\land \\neg B, \\quad \\neg(A \\land B) \\iff \\neg A \\lor \\neg B',
    conditionsLatex: 'A, B \\in \\{I, H\\} \\text{ logikai kijelentések}',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 1. oldal (Matematikai logika, műveletek)',
    introduction: `A matematikai logika az egzakt következtetések szabályrendszerét vizsgálja.

Arisztotelész ókori görög filozófus fektette le a formális logika alapjait (szillogizmusok).

A 19. század közepén George Boole (1815–1864) alkotta meg a Boole-algebrát, amely a logikai ítéleteket algebrai műveletekké alakította.

Ez vált később a digitális számítógépek és a modern programozás alapkövévé.`,
    detailedTheory: `### 1. Kijelentések és kvantorok

- **Kijelentés (ítélet, állítás):** olyan kijelentő mondat, amelyről egyértelműen és objektíven eldönthető, hogy igaz ($I$ vagy 1) vagy hamis ($H$ vagy 0).
  - Kettős tagadás törvénye: $\\neg(\\neg A) \\equiv A$.
  - Ellentmondásmentesség elve: egy állítás és tagadása nem lehet egyszerre igaz: $A \\land \\neg A \\equiv H$.
  - Harmadik kizárásának elve: egy állítás és tagadása nem lehet egyszerre hamis: $A \\lor \\neg A \\equiv I$.

- **Kvantorok (mennyiségjelzők):**
  - Univerzális kvantor ($\\forall$): "minden...". Tagadása: "létezik olyan, amelyre nem igaz": $\\neg(\\forall x : P(x)) \\equiv \\exists x : \\neg P(x)$.
  - Egzisztenciális kvantor ($\\exists$): "van olyan... / létezik...". Tagadása: "minden elemre nem igaz": $\\neg(\\exists x : P(x)) \\equiv \\forall x : \\neg P(x)$.

### 2. Logikai alapműveletek és igazságtáblázatuk

- **Negáció (tagadás, $\\neg A$):** az ellenkezőjére változtatja az igazságértéket.

- **Konjunkció (ÉS, $A \\land B$):** pontosan akkor igaz, ha mindkét állítás igaz.

- **Diszjunkció (megengedő VAGY, $A \\lor B$):** pontosan akkor hamis, ha mindkét állítás hamis (egyébként igaz).

- **Kizáró diszjunkció (antivalencia, $A \\oplus B$):** pontosan akkor igaz, ha az egyik igaz, a másik hamis.

- **Implikáció (következtetés, $A \\implies B$):** "Ha A, akkor B". Pontosan akkor HAMIS, ha az előtag ($A$) igaz, de az utótag ($B$) hamis. Minden más esetben igaz (hamisból bármi következhet: ex falso quodlibet). Ekvivalens alakja: $\\neg A \\lor B$.

- **Ekvivalencia (akkor és csak akkor, $A \\iff B$):** pontosan akkor igaz, ha $A$ és $B$ logikai értéke megegyezik: $(A \\implies B) \\land (B \\implies A)$.

### 3. Logikai azonosságok

- Kommutativitás: $A \\land B \\equiv B \\land A$, $A \\lor B \\equiv B \\lor A$.
- Asszociativitás: $(A \\land B) \\land C \\equiv A \\land (B \\land C)$.
- Disztributivitás:
  $$A \\land (B \\lor C) \\equiv (A \\land B) \\lor (A \\land C), \\quad A \\lor (B \\land C) \\equiv (A \\lor B) \\land (A \\lor C)$$
- De Morgan-azonosságok:
  $$\\neg(A \\land B) \\equiv \\neg A \\lor \\neg B, \\quad \\neg(A \\lor B) \\equiv \\neg A \\land \\neg B$$

### 4. Állítás és megfordítása, szükséges és elégséges feltételek

- **Állítás megfordítása:** A feltétel és következmény felcserélése. Ha az állítás $A \\implies B$, megfordítása $B \\implies A$. Ha egy állítás igaz, abból NEM következik, hogy a megfordítása is igaz!

- **Kontrapozíció (érvényes megfordítás):** $(A \\implies B) \\equiv (\\neg B \\implies \\neg A)$. Ez az indirekt bizonyítás logikai alapja.

- **Szükséges feltétel:** $B$ szükséges feltétele $A$-nak, ha $A \\implies B$ teljesül ($B$ nélkül $A$ nem állhat fenn).

- **Elégséges feltétel:** $A$ elégséges feltétele $B$-nek, ha $A \\implies B$ teljesül ($A$ megléte már garantálja $B$-t).

- **Szükséges és elégséges feltétel:** $A \\iff B$ (ekvivalencia, "akkor és csak akkor").

### 5. Halmazok és logikai műveletek kapcsolata

- A kijelentéskalkulus és a halmazalgebra ugyanaz a struktúra (Boole-algebra): a $\\land$ a metszetnek, a $\\lor$ az egyesítésnek, a $\\neg$ a komplementernek felel meg.
- Ezért a De Morgan-szabályok mindkét nyelven ugyanúgy szólnak: $\\overline{A\\cap B}=\\overline A\\cup\\overline B$ és $\\neg(p\\land q)\\equiv\\neg p\\lor\\neg q$.
- A kvantorok tagadása: $\\neg(\\forall x\\,P(x))\\equiv\\exists x\\,\\neg P(x)$, illetve $\\neg(\\exists x\\,P(x))\\equiv\\forall x\\,\\neg P(x)$. Szóban: "minden" tagadása "van olyan, amely nem".

- **Példa:** a "minden prímszám páratlan" tagadása nem az, hogy "minden prímszám páros", hanem hogy "van páros prímszám" — és ez igaz ($2$).

### 6. Érvényes következtetések és tipikus hibák

- **Modus ponens:** $p\\implies q$ és $p$ igaz, következik $q$.

- **Modus tollens:** $p\\implies q$ és $q$ hamis, következik $\\neg p$. Ez a kontrapozíció gyakorlati formája.

- **Hibás következtetés:** $p\\implies q$ és $q$ igazából nem következik $p$. Példa: "Ha esik az eső, nedves a járda. Nedves a járda, tehát esett az eső." — locsolókocsi is lehetett.

- **Másik hiba:** $p\\implies q$ és $\\neg p$ nem adja $\\neg q$-t. "Ha versenyző vagyok, edzek. Nem vagyok versenyző, tehát nem edzek." — hibás.

- **Helyes:** a kontrapozíció $\\neg q\\implies\\neg p$ mindig ekvivalens az eredetivel; ezt használjuk az indirekt bizonyításnál.

### 7. Bizonyítási módszerek logikai háttere

- **Direkt:** $p\\implies q$-t lépések láncolatával igazoljuk.

- **Indirekt:** feltesszük $p\\land\\neg q$-t, és ellentmondásra jutunk; ez a $\\neg(p\\land\\neg q)\\equiv(p\\implies q)$ azonosságon alapul.

- **Teljes indukció:** a természetes számok jólrendezettségét használja: bázis + öröklődés esetén az állítás minden $n$-re igaz.

- **Skatulyaelv:** ha $n$ tárgyat $k<n$ rekeszbe teszünk, valamelyik rekeszbe legalább két tárgy kerül. Ez egzisztenciabizonyítás, nem konstruktív.

- **Konstruktív vs. egzisztenciabizonyítás:** az előbbi megadja a létező objektumot, az utóbbi csak a létezését igazolja.

### 8. Szóbeli kiemelések

- Az igazságtáblázatnál mindig írd fel a változók számát és a $2^n$ sort; a sorok számának megemlítése jó pont.
- Az implikációnál hangsúlyozd: $p\\implies q$ csak akkor hamis, ha $p$ igaz és $q$ hamis; az ok és a következmény nem okozati viszony.
- A megfordítás nem ekvivalens: "minden prím páratlan" megfordítása hamis ($2$), a kontrapozíció viszont igaz.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'A konjunkció disztributív a diszjunkcióra nézve: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)',
        proofTitle: 'Bizonyítás teljes 8 soros igazságtáblázattal',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Azonosság megállapítása',
            latexContent: 'p, q, r \\in \\{I, H\\}^3 \\implies 2^3 = 8 \\text{ lehetséges sor} \\ \\text{Bal oldal: } p \\land (q \\lor r), \\quad \\text{Jobb oldal: } (p \\land q) \\lor (p \\land r) \\ \\forall \\text{ sorban a két oszlop logikai értéke azonos } \\implies \\text{ekvivalensek.}',
            explanation: 'Cél: belátni, hogy A konjunkció disztributív a diszjunkcióra nézve: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r). Felírjuk a 3 kijelentés összes lehetséges igazságérték-kombinációját. Ez előkészíti a következő lépést (Kombinációk felírása). Soronként kiértékeljük a műveleti sorrend betartásával a két kifejezést. Ez előkészíti a következő lépést (A bal és jobb oldal oszlopainak kiszámítása). Mind a 8 sorban egyezést kapunk, így a disztributivitás tételét igazoltuk. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'A De Morgan-azonosságok igazolása igazságtáblával',
        statementLatex: '\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q \\quad \\text{és} \\quad \\neg(p \\lor q) \\equiv \\neg p \\land \\neg q',
        proofTitle: 'Igazságtáblás bizonyítás',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Oszlopok egyezése',
            latexContent: 'p, q \\in \\{I, H\\}^2 \\implies 4 \\text{ sor} \\ \\neg(p \\land q) \\text{ értékei: } (H, I, I, I), \\quad \\neg p \\lor \\neg q \\text{ értékei: } (H, I, I, I)',
            explanation: 'Cél: belátni, hogy A De Morgan-azonosságok igazolása igazságtáblával. Két változóra vizsgáljuk a kifejezéseket. Ez előkészíti a következő lépést (4 soros igazságtábla felvétele). Az oszlopok minden sorban egybeesnek, így az azonosság fennáll. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Matematikai tételek szerkezete: minden tétel egy $A \\implies B$ implikáció (feltétel és következmény).',
      'Bizonyítási módszerek: az indirekt bizonyítás a kontrapozíció törvényén alapul ($A \\implies B \\iff \\neg B \\implies \\neg A$).',
      'Egyenletmegoldás: ekvivalens átalakítások ($E_1 \\iff E_2$) biztosítják, hogy a gyökök nem változnak.',
      'Valószínűségszámítás: események összege (diszjunkció) és szorzata (konjunkció).'
    ],
    applicationsOutside: [
      'Informatika és digitális technika: az integrált áramkörök logikai kapukból (AND, OR, NOT, NAND, NOR) épülnek fel. A logikai 1 a feszültséget, a 0 a testet jelenti.',
      'Programozás: elágazások (if-else), ciklusok feltételei (while) mind logikai kifejezések kiértékelésén alapulnak.',
      'Jog és szerződések: a jogszabályok logikai feltétel-következmény struktúrában fogalmazódnak meg.'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Milyen következtetéseket vonhatunk le az alábbi állításokból? a) "Ha SG-zek, bejutok az egyetemre." b) "Csak akkor jutok be az egyetemre, ha SG-zek." c) "Akkor és csak akkor jutok be az egyetemre, ha SG-zek."',
        solutionLatex: '\\text{a) } SG \\implies Bejut: \\text{Az SG-zés elégséges, de nem szükséges feltétel.} \\\\ \\text{b) } Bejut \\implies SG: \\text{Az SG-zés szükséges, de nem biztos, hogy elégséges feltétel.} \\\\ \\text{c) } Bejut \\iff SG: \\text{Az SG-zés szükséges és elégséges feltétele a bejutásnak.}'
      },
      {
        problemNumber: 2,
        question: 'Adj meg a 24-gyel való oszthatósághoz szükséges, elégséges, valamint szükséges és elégséges feltételt!',
        solutionLatex: '\\text{Szükséges: osztható 6-tal (mert } 24 \\mid n \\implies 6 \\mid n\\text{)}. \\\\ \\text{Elégséges: osztható 48-cal (mert } 48 \\mid n \\implies 24 \\mid n\\text{)}. \\\\ \\text{Szükséges és elégséges: osztható 3-mal és 8-cal.}'
      },
      {
        problemNumber: 3,
        question: 'Írd fel logikai jelekkel: „Ha egy szám osztható 6-tal, akkor osztható 3-mal.” Add meg a megfordítását, a tagadását és a kontrapozícióját, és mondd meg, melyik igaz!',
        solutionLatex: 'p\\implies q:\\ 6\\mid n\\implies3\\mid n\\ \\text{(igaz)}; \\quad \\text{megfordítás: } 3\\mid n\\implies6\\mid n\\ \\text{(hamis, } n=3\\text{)}; \\\\ \\text{tagadás: } 6\\mid n\\land3\\nmid n\\ \\text{(hamis)}; \\quad \\text{kontrapozíció: } 3\\nmid n\\implies6\\nmid n\\ \\text{(igaz)}.',
        explanation: 'A megfordítás nem ekvivalens az eredetivel, a kontrapozíció viszont mindig az. A tagadás nem az, hogy „nem osztható 6-tal”, hanem az implikáció tagadása: az előtag igaz és az utótag hamis egyszerre.'
      },
    ],    oralPresentationOutline: [
      'Állítás (kijelentés) fogalma; igazságérték',
      'Logikai műveletek: $\\neg,\\land,\\lor,\\Rightarrow,\\Leftrightarrow$ — igazságtáblák',
      'Implikáció: $A\\Rightarrow B$; megfordítás $B\\Rightarrow A$; tagadás $A\\land\\neg B$',
      'Szükséges és elégséges feltétel',
      'Kvantorok: $\\forall$, $\\exists$; tagadásuk',
      'Bizonyítási sémák kapcsolata: direkt, indirekt, kontrapozíció',
      'Példa: „ha n osztható 4-gyel, akkor páros” — megfordítás hamis'
    ],
    requiredDefinitions: [
      {
        term: 'Implikáció',
        definitionLatex: 'A\\Rightarrow B\\text{ hamis csak akkor, ha }A\\text{ igaz és }B\\text{ hamis}',
        explanation: '„Ha A, akkor B”. Az üres igazság: hamis előtagból bármi következik.',
      },
      {
        term: 'Megfordítás és tagadás',
        definitionLatex: '(A\\Rightarrow B)^{\\mathrm{megf.}}=(B\\Rightarrow A),\\quad \\neg(A\\Rightarrow B)=A\\land\\neg B',
        explanation: 'A megfordítás nem ekvivalens az eredetivel. A tagadás AND-del szól.',
      },
      {
        term: 'Szükséges / elégséges',
        definitionLatex: 'A\\Rightarrow B:\\ A\\text{ elégséges }B\\text{-hez},\\ B\\text{ szükséges }A\\text{-hoz}',
        explanation: '„Akkor és csak akkor”: $A\\Leftrightarrow B$ (szükséges és elégséges).',
      }
    ],

    examinerTraps: [
      {
        question: 'Ha A hamis, mi lesz az A ⟹ B implikáció logikai értéke?',
        answer: 'MINDIG IGAZ! Függetlenül attól, hogy B igaz vagy hamis. Hamis állításból logikailag bármi következhet.',
        dangerLevel: 'Magas'
      },
      {
        question: 'Hogyan tagadjuk helyesen a "Minden diák szeret tanulni" állítást?',
        answer: '"Van olyan diák, aki nem szeret tanulni." (NEM az, hogy "Egyik diák sem szeret tanulni"!). A ∀ tagadása ∃.',
        dangerLevel: 'Magas'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Matematikai logika\n\n### Fő azonosságok\n\n$A\\implies B \\iff \\neg A\\lor B,\\quad \\neg(A\\implies B)\\iff A\\land\\neg B$\n\n$\\neg(A\\land B)\\iff\\neg A\\lor\\neg B,\\quad \\neg(A\\lor B)\\iff\\neg A\\land\\neg B$\n\n$\\neg(\\forall x\\,P(x))\\iff\\exists x\\,\\neg P(x),\\quad \\neg(\\exists x\\,P(x))\\iff\\forall x\\,\\neg P(x)$\n\n### Definíciók\n\n**Kijelentés:** egyértelműen igaz vagy hamis mondat.\n\n**Negáció / konjunkció / diszjunkció / implikáció / ekvivalencia** — igazságtábláikkal.\n\n**Implikáció:** $A\\implies B$ **csak akkor hamis**, ha $A$ igaz és $B$ hamis.\n\n**Megfordítás:** $B\\implies A$ (nem ekvivalens az eredetivel!).\n\n**Kontrapozíció:** $\\neg B\\implies\\neg A$ (ekvivalens az eredetivel).\n\n**Szükséges feltétel:** $A\\implies B$ esetén $B$ szükséges $A$-hoz.\n\n**Elégséges feltétel:** $A\\implies B$ esetén $A$ elégséges $B$-hez.\n\n**Szükséges és elégséges:** $A\\iff B$.\n\n### Tételek\n\nDisztributivitás: $p\\land(q\\lor r)\\equiv(p\\land q)\\lor(p\\land r)$ (igazságtábla).\n\nDe Morgan (igazságtábla).\n\n**Modus ponens / modus tollens.**",
    oralExamPlan: "## Szóbeli felelet vázlata — Logika (15–20 perc · 35 pont)\n\n### 0–2 perc · Bevezetés\nArisztotelész → Boole → digitális technika. Feleletív: műveletek → implikáció → szükséges/elégséges → bizonyítás.\n\n### 2–5 perc · Definíció (2 pont)\n**Implikáció** (mikor hamis?) **vagy** szükséges/elégséges. Emeld ki: hamis előtagból igaz az implikáció.\n\n### 5–8 perc · Elmélet\nIgazságtáblák ($2^n$ sor). De Morgan. Kvantorok tagadása. Megfordítás ≠ kontrapozíció. Halmaz ↔ logika párhuzam.\n\n### 8–13 perc · Tétel + bizonyítás (6 pont)\n**De Morgan** vagy **disztributivitás** igazságtáblával (minden sort említs). Alternatíva: kontrapozíció ekvivalenciája.\n\n### 13–15 perc · Alkalmazások (4 pont)\nTételek szerkezete $A\\implies B$; indirekt bizonyítás. Informatika: AND/OR/NOT. Programozás: if-feltételek.\n\n### 15–18 perc · Feladat (8 pont)\nSzükséges/elégséges példa (24 oszthatóság), vagy implikáció megfordítás/tagadás/kontrapozíció.\n\n### Zárás · Nyelv (5 pont)\n„Minden” tagadása = „van olyan, amely nem”. Ne keverd a megfordítást a tagadással.\n\n### Pontozás\n10+2+6+8+4+5 = 35",
    visualizerType: 'logic'
  },
  {
    id: 'tétel-05',
    number: 5,
    title: 'Hatványozás, a hatványfogalom kiterjesztése, a hatványozás azonosságai. Az n-edik gyök fogalma. A négyzetgyök azonosságai. Hatványfüggvények és a négyzetgyökfüggvény',
    category: 'Számelmélet és algebra',
    tags: ['Hatványozás', 'Gyökvonás', 'Permanenciaelv', 'Azonosságok', 'Hatványfüggvény', 'Gyökfüggvény'],
    difficulty: '1: alap alatti',
    summary: 'A hatványozás definíciója és kiterjesztése a permanenciaelv alapján (pozitív egész, 0, negatív egész, racionális és irracionális kitevő). A hatványozás 5 alaptörvénye. Az n-edik gyök fogalma páros és páratlan kitévőre. A négyzetgyökvonás azonosságai. Hatvány- és gyökfüggvények ábrázolása, jellemzése és inverz kapcsolata.',
    statementLatex: 'a^n \\cdot a^m = a^{n+m}, \\quad \\frac{a^n}{a^m} = a^{n-m}, \\quad (a^n)^m = a^{n \\cdot m}, \\quad a^{\\frac{m}{n}} = \\sqrt[n]{a^m}, \\quad \\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}',
    conditionsLatex: 'a, b > 0, n, m \\in \\mathbb{R}',
    formulaSheetReference: 'Hivatalos Képlettár 2026: 3. oldal (Hatvány, gyök azonosságai)',
    introduction: `Az ókori matematikusok a hatványozást geometriai analógiákból eredeztették (négyzet területe: a², kocka térfogata: a³).

A hatványfogalom fokozatos kiterjesztése negatív, tört és irracionális kitevőkre a 17. században teljesedett ki John Wallis és Isaac Newton munkásságával, megteremtve az alapját az exponenciális függvényeknek.`,
    detailedTheory: `### 1. A hatványozás fogalmának kiterjesztése (Permanenciaelv)

- **Pozitív egész kitevő ($n \\in \\mathbb{N}, n > 1$):** $a^n = \\underbrace{a \\cdot a \\dotsm a}_{n \\text{ tényező}}$. Ha $n = 1$, akkor $a^1 = a$.

- **Permanenciaelv:** a fogalmakat úgy terjesztjük ki új számhalmazokra, hogy a korábban érvényes műveleti azonosságok változatlanul érvényben maradjanak.

- **Nulladik kitevő:** $a^0 = 1$ ($a \\neq 0$). Indoklás: $\\frac{a^n}{a^n} = a^{n-n} = a^0 = 1$. ($0^0$ nincs értelmezve!).

- **Negatív egész kitevő ($n \\in \\mathbb{Z}^+$):** $a^{-n} = \\frac{1}{a^n}$ ($a \\neq 0$). Indoklás: $\\frac{a^0}{a^n} = a^{0-n} = a^{-n} = \\frac{1}{a^n}$.

- **Racionális (tört) kitevő ($m \\in \\mathbb{Z}, n \\in \\mathbb{N}^+, n \\ge 2$):** $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$ ($a > 0$).

- **Irracionális kitevő ($a^\\alpha, \\alpha \\in \\mathbb{Q}'$):** ha $r_n$ egy $\\alpha$-hoz konvergáló racionális számsorozat, akkor $a^\\alpha = \\lim_{n \\to \\infty} a^{r_n}$ ($a > 0$).

### 2. A hatványozás azonosságai ($a, b > 0, n, m \\in \\mathbb{R}$)

1. Azonos alapú hatványok szorzata: $a^n \\cdot a^m = a^{n+m}$

2. Azonos alapú hatványok hányadosa: $\\frac{a^n}{a^m} = a^{n-m}$

3. Szorzat hatványa: $(a \\cdot b)^n = a^n \\cdot b^n$

4. Tört hatványa: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$

5. Hatvány hatványa: $(a^n)^m = a^{n \\cdot m}$

- **Számok normálalakja:** $x = a \\cdot 10^k$, ahol $1 \\le a < 10$ és $k \\in \\mathbb{Z}$.

### 3. Az n-edik gyök fogalma és azonosságai

- **Négyzetgyök ($a \\ge 0$):** $\\sqrt{a}$ az a nemnegatív valós szám, amelynek négyzete $a$. ($\\sqrt{a} \\ge 0$).

- **Páros gyökkitevő ($n = 2k$):** $\\sqrt[2k]{a} = b \\iff b \\ge 0 \\land b^{2k} = a$ ($a \\ge 0$). Páros gyök alatt negatív szám nem állhat a valós számok körében! Fontos: $\\sqrt{x^2} = |x|$!

- **Páratlan gyökkitevő ($n = 2k+1$):** $\\sqrt[2k+1]{a} = b \\iff b^{2k+1} = a$. Minden valós számra értelmezett, negatív szám páratlan gyöke negatív (pl. $\\sqrt[3]{-8} = -2$).

- **Gyökvonás azonosságai ($a, b \\ge 0$):**
  - $\\sqrt[n]{a \\cdot b} = \\sqrt[n]{a} \\cdot \\sqrt[n]{b}$
  - $\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$ ($b > 0$)
  - $\\sqrt[n]{\\sqrt[m]{a}} = \\sqrt[n \\cdot m]{a}$
  - $(\\sqrt[n]{a})^k = \\sqrt[n]{a^k}$
  - $\\sqrt[n \\cdot k]{a^{m \\cdot k}} = \\sqrt[n]{a^m}$

### 4. Hatvány- és gyökfüggvények tulajdonságai

- **Páros kitevőjű hatványfüggvény ($f(x) = x^{2k}$):** $D_f = \\mathbb{R}, R_f = \\mathbb{R}^+_0$. Páros függvény (tengelyesen szimmetrikus az y tengelyre). Konvex, alulról korlátos, minimuma az origóban van. Nem invertálható a teljes értelmezési tartományon, de $x \\ge 0$-ra leszűkítve igen.

- **Páratlan kitevőjű hatványfüggvény ($g(x) = x^{2k+1}$):** $D_g = \\mathbb{R}, R_g = \\mathbb{R}$. Páratlan függvény (origóra középpontosan szimmetrikus). Szigorúan monoton növekvő, nem korlátos. Invertálható, inverze $g^{-1}(x) = \\sqrt[2k+1]{x}$.

- **Négyzetgyökfüggvény ($f(x) = \\sqrt{x}$):** $D_f = [0, \\infty[, R_f = [0, \\infty[$. Szigorúan monoton nő, konkáv, alulról korlátos. Az $y = x^2$ ($x \\ge 0$) függvény inverze, grafikonjaik az $y = x$ egyenesre tükrösek!

### 5. Exponenciális egyenletek és egyenlőtlenségek

- **Azonos alapra hozás:** $4^x=8^{x-1}\\implies2^{2x}=2^{3x-3}\\implies2x=3x-3\\implies x=3$. Az exponenciális függvény szigorú monotonitása miatt az alapok egyenlőségéből a kitevők egyenlősége következik.

- **Helyettesítés:** $4^x-5\\cdot2^x+4=0$ esetén legyen $y=2^x>0$; ekkor $y^2-5y+4=0$, ahonnan $y=1$ vagy $y=4$, azaz $x=0$ vagy $x=2$.

- **Egyenlőtlenség:** $a>1$ esetén $a^u<a^v\\iff u<v$; $0<a<1$ esetén az egyenlőtlenség iránya megfordul. Ezt a vizsgán külön ki kell mondani.

- **Kikötés:** negatív alap esetén a valós kitevős hatvány általában nem értelmezhető, ezért exponenciális egyenletnél $a>0$, $a\\neq1$ feltétellel dolgozunk.

### 6. Gyökös kifejezések és gyöktelenítés

- **Gyöktelenítés:** $\\frac{1}{\\sqrt2}=\\frac{\\sqrt2}{2}$, illetve $\\frac{1}{\\sqrt a-\\sqrt b}=\\frac{\\sqrt a+\\sqrt b}{a-b}$ (bővítés a konjugálttal).

- **Kettős gyök:** $\\sqrt{a+\\sqrt b}$ akkor írható $\\sqrt x+\\sqrt y$ alakra, ha $x+y=a$ és $4xy=b$. Például $\\sqrt{7+4\\sqrt3}=2+\\sqrt3$, mert $3+4=7$ és $4\\cdot3\\cdot4=48$.

- **Abszolút érték csapda:** $\\sqrt{x^2}=|x|$, nem $x$. Például $\\sqrt{(-3)^2}=3$.

- **Értelmezési tartomány:** páros gyök alatt nemnegatív kifejezés állhat; páratlan gyöknél nincs ilyen kikötés, és $\\sqrt[3]{-8}=-2$.

- **Műveleti sorrend:** $\\sqrt{a+b}\\neq\\sqrt a+\\sqrt b$; ellenpélda $a=b=9$, ahol $\\sqrt{18}\\neq6$.

### 7. Hatvány- és gyökfüggvények összehasonlítása

- $f(x)=x^n$ páros $n$-re páros függvény, $[0,\\infty)$-en szigorúan nő; páratlan $n$-re páratlan függvény, végig szigorúan nő.
- $g(x)=x^{1/n}=\\sqrt[n]x$ az $x^n$ inverze a megfelelő leszűkített intervallumon; grafikonjuk az $y=x$ egyenesre tükrös.
- $x^{-1}=\\frac1x$ hiperbola; $x^{-2}=\\frac1{x^2}$ mindenütt pozitív, a nullában nincs értelmezve.

- **Növekedési összehasonlítás:** elég nagy $x$-re $x^n$ lassabban nő, mint $a^x$ ($a>1$), a $\\log_a x$ pedig a leglassabb — ezért hasznos a logaritmikus ábrázolás.

### 8. Szóbeli kiemelések

- A permanenciaelv lényege: az azonosságok a fogalom kiterjesztése után is érvényben maradjanak; ezt mondd ki példával ($a^0=1$, $a^{-n}=\\frac1{a^n}$).
- A gyökvonásnál mindig említsd az értelmezési tartományt és a $\\sqrt{x^2}=|x|$ azonosságot.
- A hatványfüggvényeknél a kitevő paritása dönt a szimmetriáról és a monotonitásról.`,
    theorems: [
      {
        theoremNumber: 1,
        title: 'Azonos alapú hatványok szorzatának azonossága: a^n · a^m = a^(n+m)',
        proofTitle: 'Bizonyítás a definíció és az asszociativitás alapján',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Összeszorzás és csoportosítás',
            latexContent: 'a^n \\cdot a^m = (a \\cdot a \\dotsm a) \\cdot (a \\cdot a \\dotsm a) = \\underbrace{a \\cdot a \\dotsm a}_{n+m \\text{ tényező}} = a^{n+m}',
            explanation: 'Cél: belátni, hogy Azonos alapú hatványok szorzatának azonossága: a^n · a^m = a^(n+m). Alkalmazzuk a pozitív egész kitevőjű hatvány definícióját. A definíció szerinti átírás után a műveletek ismert azonosságait alkalmazzuk. A szorzás asszociativitása miatt a zárójelek elhagyhatók, és összesen n+m darab tényezőt kapunk. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      },
      {
        theoremNumber: 2,
        title: 'Szorzatból tényezőnként vonhatunk négyzetgyököt: √(a · b) = √a · √b',
        statementLatex: '\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b} \\quad (a \\ge 0, b \\ge 0)',
        proofTitle: 'Bizonyítás a négyzetgyök egyértelműségével',
        proofSteps: [
          {
            stepNumber: 1,
            title: 'Egyenlőség levonása',
            latexContent: '\\sqrt{ab} \\ge 0, \\quad \\sqrt{a} \\cdot \\sqrt{b} \\ge 0 \\quad (a \\ge 0, b \\ge 0) \\ (\\sqrt{a} \\cdot \\sqrt{b})^2 = (\\sqrt{a})^2 \\cdot (\\sqrt{b})^2 = a \\cdot b',
            explanation: 'Cél: belátni, hogy Szorzatból tényezőnként vonhatunk négyzetgyököt: √(a · b) = √a · √b. Mindkét oldal a négyzetgyök definíciója miatt nemnegatív. A definíció szerinti átírás után a műveletek ismert azonosságait alkalmazzuk. Felhasználjuk a szorzat hatványozásának azonosságát és a négyzetgyök definícióját. A definíció szerinti átírás után a műveletek ismert azonosságait alkalmazzuk. Mivel mindkét nemnegatív kifejezés négyzete ab, a két kifejezés megegyezik. Ezzel a kívánt összefüggés adódik. Összefoglalva: a levezetés végén megkapjuk a tétel állítását.'
          }
        ]
      }
    ],
    applicationsInside: [
      'Algebrai kifejezések átalakítása: nevezetes azonosságok ($(a+b)^2, a^2-b^2$), gyöktelenítés a nevezőben konjugálttal való bővítéssel.',
      'Polinomok és hatványos egyenletek megoldása, gyöktényezős alak.',
      'Mértani közép és négyzetes közép kiszámítása a statisztikában és szélsőérték feladatokban ($M = \\sqrt{ab}$).',
      'Geometriai képletek: Pitagorasz-tétel ($c = \\sqrt{a^2+b^2}$), Hérón-képlet, térfogatszámítás.'
    ],
    applicationsOutside: [
      'Fizika: egyenletesen gyorsuló mozgás fékútja a sebesség négyzetével arányos ($s = v^2 / 2a$). Kétszer akkora sebességnél négyszeres a fékút!',
      'Hősugárzás (Stefan–Boltzmann törvény): a kisugárzott energia a hőmérséklet negyedik hatványával arányos ($E \\sim T^4$).',
      'Csillagászat és ingamozgás: matematikai inga lengésideje $T = 2\\pi \\sqrt{l/g}$. A Holdon a lengésidő $\\sqrt{6}$-szor nagyobb.',
      'Biológia: allometrikus növekedés és a testtömeg-felszín arány törvényszerűségei ($S \\sim V^{2/3}$).'
    ],
    practiceProblems: [
      {
        problemNumber: 1,
        question: 'Határozd meg a kifejezés pontos értékét x ≥ 2 esetén: √(x + 2 + 4√(x - 2)) - √(x + 7 + 6√(x - 2))!',
        solutionLatex: 'x + 2 + 4\\sqrt{x-2} = (\\sqrt{x-2} + 2)^2, \\quad x + 7 + 6\\sqrt{x-2} = (\\sqrt{x-2} + 3)^2. \\\\ \\sqrt{(\\sqrt{x-2} + 2)^2} - \\sqrt{(\\sqrt{x-2} + 3)^2} = |\\sqrt{x-2} + 2| - |\\sqrt{x-2} + 3| = (\\sqrt{x-2} + 2) - (\\sqrt{x-2} + 3) = -1.'
      },
      {
        problemNumber: 2,
        question: 'Oldd meg a valós számok halmazán a következő egyenletet: 4 / (2 - x) - 3x / (x² - 4) = 5 / (x + 2)!',
        solutionLatex: '\\text{Kikötés: } x \\neq \\pm 2. \\\\ -\\frac{4}{x-2} - \\frac{3x}{(x-2)(x+2)} - \\frac{5}{x+2} = 0 \\implies \\frac{-4(x+2) - 3x - 5(x-2)}{(x-2)(x+2)} = 0 \\\\ -4x - 8 - 3x - 5x + 10 = 0 \\implies -12x + 2 = 0 \\implies x = \\frac{1}{6}.'
      },
      {
        problemNumber: 3,
        question: 'Oldd meg a valós számok halmazán a 4^x − 5·2^x + 4 = 0 egyenletet, majd egyszerűsítsd a √(7 + 4√3) kifejezést!',
        solutionLatex: 'y=2^x>0:\\ y^2-5y+4=0\\implies y_1=1,\\ y_2=4\\implies x_1=0,\\ x_2=2. \\\\ \\sqrt{7+4\\sqrt3}=\\sqrt4+\\sqrt3=2+\\sqrt3.',
        explanation: 'A helyettesítés után másodfokú egyenletet kapunk; a kapott y értékeknek pozitívnak kell lenniük. A kettős gyöknél x+y=7 és xy=12 megoldását keressük, ez a 3 és a 4.'
      },
    ],    oralPresentationOutline: [
      'Hatványozás def. pozitív egész kitevőre; $a^0=1$ ($a\\neq0$)',
      'Negatív kitevő: $a^{-n}=1/a^n$',
      'Gyök mint törtkitevő: $a^{1/n}=\\sqrt[n]{a}$, $a^{m/n}$',
      'Azonosságok: $a^r a^s=a^{r+s}$, $(a^r)^s=a^{rs}$, $(ab)^r=a^r b^r$',
      'Értelmezési tartomány figyelése (páros gyök, $0^0$ kerülése)',
      'Kapcsolat az exponenciális függvénnyel',
      'Szóbeli: azonosságok + egy „veszélyes” példa ($\\sqrt{a^2}=|a|$)'
    ],
    requiredDefinitions: [
      {
        term: 'Hatvány pozitív egész kitevővel',
        definitionLatex: 'a^n = a\\cdot a\\cdots a\\ (n\\text{ tényező}),\\quad a^0=1\\ (a\\neq 0)',
        explanation: 'A hatványozás ismételt szorzás; a 0 kitevő konvenció a szabályok egységéhez.',
      },
      {
        term: 'Törtkitevő / gyök',
        definitionLatex: 'a^{m/n}=\\sqrt[n]{a^m}=(\\sqrt[n]{a})^m\\quad (a\\ge 0\\text{ páros }n\\text{ esetén})',
        explanation: 'Páros gyöknél nemnegatív alap; páratlan gyök értelmezhető negatívon is.',
      },
      {
        term: 'Fő azonosságok',
        definitionLatex: 'a^r a^s=a^{r+s},\\ (a^r)^s=a^{rs},\\ (ab)^r=a^rb^r',
        explanation: 'Ezek a logaritmus azonosságainak „fordítottjai”; vizsgán fejből kell.',
      }
    ],

    examinerTraps: [
      {
        question: 'Mennyi a √(-4)² értéke? -4 vagy 4?',
        answer: 'Pontosan +4! Ugyanis √(a²) = |a|. Mivel |-4| = 4, a négyzetgyök értéke definíció szerint sohasem lehet negatív!',
        dangerLevel: 'Magas'
      },
      {
        question: 'Értelmezve van-e a 0^0 kifejezés?',
        answer: 'A középiskolai matematikában nincs értelmezve (határozatlan alak).',
        dangerLevel: 'Közepes'
      }
    ],
    memorizationMaterial: "## Bemagolandó — Hatványozás, gyök, hatványfüggvények\n\n**Permanenciaelv:** kiterjesztés (0 / negatív / tört / irracionális kitevő) úgy, hogy az azonosságok megmaradjanak.\n\n### Fő azonosságok\n\n$a^r a^s = a^{r+s},\\quad (a^r)^s = a^{rs},\\quad (ab)^r = a^r b^r$\n\n$a^{-n}=\\frac{1}{a^n}\\ (a\\neq0),\\quad a^{m/n}=\\sqrt[n]{a^m}=(\\sqrt[n]{a})^m$\n\n$\\sqrt{a^2}=|a|,\\quad \\sqrt{a}\\sqrt{b}=\\sqrt{ab}\\ (a,b\\ge0)$\n\n### Definíciók\n\n**Hatvány pozitív egészre:** $a^n=a\\cdot\\ldots\\cdot a$; $a^0=1$ ($a\\neq0$).\n\n**Negatív kitevő:** $a^{-n}=1/a^n$.\n\n**n-edik gyök:** $y=\\sqrt[n]{a}\\iff y^n=a$ (páros $n$: $a\\ge0$, $y\\ge0$).\n\n**Törtkitevő:** $a^{m/n}$ a gyökkel azonos (ÉT!).\n\n**Irracionális kitevő:** $a>0$, $\\alpha\\notin\\mathbb{Q}$, $r_n\\to\\alpha$ racionális sorozat $\\Rightarrow a^{\\alpha}=\\lim a^{r_n}$.\n\n### Fontos figyelmeztetések\n\n- $0^0$ nincs értelmezve (középiskola).\n- $\\sqrt{a^2}=|a|$, nem $a$.\n- Páros gyök / páros nevezőjű törtkitevő: nemnegatív alap.\n\n### Tételek / levezetések\n\nAz azonosságok kiterjesztése egész → racionális kitevőre a gyökdefinícióval.\n\nPélda-azonosság: $\\sqrt{x+2+4\\sqrt{x-2}}=|\\sqrt{x-2}+2|$ (teljes négyzet).",
    oralExamPlan: "## Szóbeli felelet vázlata — Hatványozás / gyök (15–20 perc · 35 pont)\n\n### 0–2 perc · Bevezetés\nHatványfogalom kiterjesztése: természetes → egész → racionális → irracionális (sorozathatárérték). Kapcsolat a hatványfüggvénnyel.\n\n### 2–5 perc · Definíció (2 pont)\n$a^{m/n}$ **vagy** $\\sqrt[n]{a}$ pontos feltételekkel (páros/páratlan).\n\n### 5–8 perc · Elmélet\nAzonosságok fejből. ÉT: nevező ≠ 0, páros gyök ≥ 0. $\\sqrt{a^2}=|a|$. Függvények: $x\\mapsto a^x$, $x\\mapsto\\sqrt{x}$ vázlatosan.\n\n### 8–13 perc · Tétel + bizonyítás (6 pont)\nEgy azonosság indoklása (pl. $(a^r)^s=a^{rs}$ racionálisra), vagy teljes négyzetté alakítás gyök alatt, vagy $4^x-5\\cdot2^x+4=0$ helyettesítéses megoldás mint „tétel+módszer”.\n\n### 13–15 perc · Alkalmazások (4 pont)\nPitagorasz, fékút $v^2$, Stefan–Boltzmann $T^4$, inga $T=2\\pi\\sqrt{l/g}$.\n\n### 15–18 perc · Feladat (8 pont)\nGyökös egyszerűsítés, tört-egyenlet ÉT-tel, vagy exponenciális helyettesítés.\n\n### Zárás · Nyelv (5 pont)\nCsapdák: $\\sqrt{(-4)^2}$ vs $(\\sqrt{-4})^2$; $0^0$.\n\n### Pontozás\n10+2+6+8+4+5 = 35",
    visualizerType: 'function'
  }
];
