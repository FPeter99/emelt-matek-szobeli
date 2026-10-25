import fs from 'fs';
import path from 'path';

const tetelek = [
  {
    id: 'tétel-01',
    number: 1,
    title: 'Halmazok, halmazműveletek és a De Morgan-azonosságok',
    category: 'Halmazok és logika',
    tags: ['Halmazelmélet', 'De Morgan', 'Műveletek', 'Alapfogalmak'],
    difficulty: 'Közepes',
    summary: 'A halmaz fogalma, részhalmaz, üres halmaz. Unió, metszet, különbség és komplementer képzése. A De Morgan-azonosságok kimondása és bizonyítása.',
    statementLatex: '\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B} \\quad \\text{és} \\quad \\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}',
    conditionsLatex: 'A, B \\subseteq U \\text{ tetszőleges részhalmazai az } U \\text{ alaphalmaznak.}',
    requiredDefinitions: [
      {
        term: 'Halmaz és részhalmaz fogalma',
        definitionLatex: 'A \\subseteq B \\iff (\\forall x \\in A \\implies x \\in B)',
        explanation: 'Az A halmaz részhalmaza B-nek, ha A minden eleme egyúttal B-nek is eleme. Az üres halmaz (∅) minden halmaznak részhalmaza.'
      },
      {
        term: 'Halmazműveletek (Unió, Metszet, Különbség, Komplementer)',
        definitionLatex: 'A \\cup B = \\{x \\in U \\mid x \\in A \\lor x \\in B\\}, \\quad A \\cap B = \\{x \\in U \\mid x \\in A \\land x \\in B\\}, \\quad A \\setminus B = \\{x \\in U \\mid x \\in A \\land x \\notin B\\}',
        explanation: 'A komplementer halmaz az alaphalmaz azon elemeinek halmaza, amelyek nem tartoznak a megadott halmazhoz: \\overline{A} = U \\setminus A.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld a halmaz, részhalmaz és az üres halmaz fogalmát.',
      'Ismertesd a négy alapvető halmazműveletet (unió, metszet, különbség, komplementer) Venn-diagramok felrajzolásával.',
      'Mondd ki pontosan a két De Morgan-azonosságot.',
      'Válassz ki egyet a De Morgan-azonosságok közül (pl. komplementerek uniója/metszete) és bizonyítsd be kettős tartalmazással!',
      'Említs meg egy gyakorlati/valószínűségszámítási alkalmazást (pl. események tagadása).'
    ],
    proofTitle: 'A De Morgan-azonosságok igazolása elemi tartalmazási lépésekkel',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Két halmaz egyenlőségének definíciója',
        latexContent: 'X = Y \\iff (X \\subseteq Y \\text{ és } Y \\subseteq X)',
        explanation: 'Azt kell megmutatnunk, hogy a bal oldal minden eleme benne van a jobb oldalban, és fordítva.'
      },
      {
        stepNumber: 2,
        title: 'Balról jobbra tartalmazás: x ∈ \\overline{A \\cup B}',
        latexContent: 'x \\in \\overline{A \\cup B} \\implies x \\notin (A \\cup B) \\implies x \\notin A \\text{ és } x \\notin B',
        explanation: 'Ha x nincs benne az unióban, akkor sem A-nak, sem B-nek nem eleme.'
      },
      {
        stepNumber: 3,
        title: 'Komplementer definíciójának alkalmazása',
        latexContent: 'x \\notin A \\implies x \\in \\overline{A}, \\quad x \\notin B \\implies x \\in \\overline{B}',
        explanation: 'Mivel x mindkét komplementerhalmaznak eleme, ezért eleme a komplementerek metszetének is: x ∈ \\overline{A} ∩ \\overline{B}. Ezzel igazoltuk az X ⊆ Y tartalmazást.'
      },
      {
        stepNumber: 4,
        title: 'Jobbról balra tartalmazás igazolása',
        latexContent: 'y \\in \\overline{A} \\cap \\overline{B} \\implies y \\in \\overline{A} \\text{ és } y \\in \\overline{B} \\implies y \\notin A \\text{ és } y \\notin B \\implies y \\notin (A \\cup B) \\implies y \\in \\overline{A \\cup B}',
        explanation: 'Ezzel igazoltuk a Y ⊆ X tartalmazást is, tehát az egyenlőség fennáll.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e az üres halmaznak részhalmaza?',
        answer: 'Igen, az üres halmaz egyetlen részhalmaza önmaga, az üres halmaz (∅ ⊆ ∅).',
        dangerLevel: 'Közepes'
      },
      {
        question: 'Mi a kapcsolat a De Morgan-azonosságok és a logikai tagadási szabályok között?',
        answer: 'A De Morgan-azonosságok a halmazelméletben pontos megfelelői a logikai diszjunkció és konjunkció tagadásának: ¬(P ∨ Q) ≡ ¬P ∧ ¬Q.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Alapfogalmak, definíciók és Venn-diagramok', points: 4, description: 'Halmaz, műveletek szabatos definíciója' },
      { criterion: 'De Morgan-azonosságok pontos kimondása', points: 3, description: 'Mindkét formula pontos leírása' },
      { criterion: 'Kettős tartalmazáson alapuló bizonyítás', points: 8, description: 'Logikailag hibátlan levezetés' },
      { criterion: 'Alkalmazás és felelet felépítése', points: 5, description: 'Gyakorlati példa és magabiztos előadás' }
    ],
    applications: [
      {
        title: 'Valószínűségszámítási események tagadása',
        problem: 'Egy A esemény jelentse azt, hogy esik az eső, B pedig azt, hogy fúj a szél. Mit jelent a \\overline{A \\cup B} esemény?',
        solutionLatex: '\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B} \\quad \\text{(Sem nem esik az eső, sem nem fúj a szél.)}'
      }
    ],
    historicalContext: 'Augustus De Morgan (1806–1871) brit matematikus és logikus, aki a matematikai logika formális alapjait fektette le George Boole-lal párhuzamosan.',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-02',
    number: 2,
    title: 'A kijelentéskalkulus alapjai, logikai műveletek és kvantitátorok',
    category: 'Halmazok és logika',
    tags: ['Logika', 'Kijelentéskalkulus', 'Implikáció', 'Kvantitátorok'],
    difficulty: 'Közepes',
    summary: 'Kijelentés fogalma, igazságértéke. Negáció, konjunkció, diszjunkció, implikáció és ekvivalencia. Az A ⟹ B implikáció tagadása és átírása.',
    statementLatex: '\\neg(A \\implies B) \\iff A \\land \\neg B',
    conditionsLatex: 'A \\text{ és } B \\text{ tetszőleges logikai kijelentések (állítások).}',
    requiredDefinitions: [
      {
        term: 'Kijelentés (állítás) és igazságérték',
        definitionLatex: 'A \\in \\{\\text{Igaz (1)}, \\text{Hamis (0)}\\}',
        explanation: 'Kijelentésnek nevezünk minden olyan kijelentő mondatot, amelyről egyértelműen eldönthető, hogy igaz vagy hamis, de a kettő egyszerre nem lehet.'
      },
      {
        term: 'Implikáció és ekvivalencia',
        definitionLatex: 'A \\implies B \\iff \\neg A \\lor B, \\quad A \\iff B \\iff (A \\implies B) \\land (B \\implies A)',
        explanation: 'Az implikáció csak akkor hamis, ha az előtag (A) igaz, de a következmény (B) hamis.'
      }
    ],
    oralPresentationOutline: [
      'Mondd el a kijelentés és igazságérték definícióját.',
      'Mutasd be a logikai alapműveleteket igazságtáblázattal (negáció, konjunkció, diszjunkció, implikáció, ekvivalencia).',
      'Írd fel az A ⟹ B implikáció igazságtáblázatát és magyarázd el a diszjunkciós alakját (¬A ∨ B).',
      'Bizonyítsd be az implikáció tagadására vonatkozó tételt igazságtáblázattal vagy azonosságokkal!',
      'Mondd el az egyetemes (∀) és létezési (∃) kvantitátorok fogalmát és tagadási szabályaikat.'
    ],
    proofTitle: 'Az implikáció tagadásának igazolása igazságtáblázattal és átalakítással',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Implikáció definíció szerinti átírása',
        latexContent: 'A \\implies B \\iff \\neg A \\lor B',
        explanation: 'Az implikáció logikailag ekvivalens az előtag tagadásának és a következménynek a diszjunkciójával.'
      },
      {
        stepNumber: 2,
        title: 'A tagadás operátor alkalmazása mindkét oldalra',
        latexContent: '\\neg (A \\implies B) \\iff \\neg (\\neg A \\lor B)',
        explanation: 'Az egyenlőség mindkét oldalát tagadjuk.'
      },
      {
        stepNumber: 3,
        title: 'De Morgan-szabály alkalmazása logikai kijelentésekre',
        latexContent: '\\neg (\\neg A \\lor B) \\iff \\neg(\\neg A) \\land \\neg B \\iff A \\land \\neg B',
        explanation: 'Alkalmazzuk a diszjunkció tagadására vonatkozó De Morgan-szabályt és a dupla tagadás törvényét.'
      }
    ],
    examinerTraps: [
      {
        question: 'Ha A hamis, mi lesz az A ⟹ B implikáció igazságértéke?',
        answer: 'Igaz! Hamis előtagból bármi következik (ex falso quodlibet).',
        dangerLevel: 'Magas'
      },
      {
        question: 'Hogyan tagadjuk a "Minden háromszög belső szögeinek összege 180°" állítást?',
        answer: '"Létezik olyan háromszög, amelynek belső szögeinek összege nem 180°." (Az egyetemes kvantitátor tagadása létezési kvantitátor).',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Kijelentések és logikai műveletek szabatos definiálása', points: 4, description: 'Igazságtáblázatok pontos megadása' },
      { criterion: 'Implikáció és ekvivalencia tulajdonságai', points: 3, description: 'Az implikáció szerkezetének megértése' },
      { criterion: 'Az implikáció tagadásának bizonyítása', points: 8, description: 'Igazságtáblázat vagy formális levezetés' },
      { criterion: 'Kvantitátorok és tagadásuk ismertetése', points: 5, description: '∀ és ∃ helyes használata példával' }
    ],
    applications: [
      {
        title: 'Indirekt bizonyítás elve',
        problem: 'Miért működik az indirekt bizonyítás logikailag?',
        solutionLatex: '(A \\implies B) \\iff (\\neg B \\implies \\neg A) \\quad \\text{(Kontrapozíció törvénye)}'
      }
    ],
    historicalContext: 'Gottlob Frege és Bertrand Russell a 19-20. század fordulóján formázták meg a modern matematikai logikát és a kijelentéskalkulust.',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-03',
    number: 3,
    title: 'Kombinatorika: Permutációk, variációk és kombinációk',
    category: 'Kombinatorika és valószínűség',
    tags: ['Kombinatorika', 'Permutáció', 'Variáció', 'Kombináció'],
    difficulty: 'Közepes',
    summary: 'n elem ismétlés nélküli és ismétléses permutációi, variációi és kombinációi. A szorzási és összeadási szabály a kombinatorikában.',
    statementLatex: 'P_n = n!, \\quad V_n^k = \\frac{n!}{(n-k)!}, \\quad C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}',
    conditionsLatex: 'n, k \\in \\mathbb{N}, \\quad 0 \\le k \\le n',
    requiredDefinitions: [
      {
        term: 'Permutáció, Variáció, Kombináció fogalma',
        definitionLatex: 'P_n = n!, \\quad V_n^k = \\frac{n!}{(n-k)!}, \\quad C_n^k = \\binom{n}{k}',
        explanation: 'Permutáció: n elem összes lehetséges sorrendje. Variáció: n elemből k kiválasztása, ha a sorrend számít. Kombináció: n elemből k kiválasztása, ha a sorrend NEM számít.'
      },
      {
        term: 'Faktoriális és binomiális együttható',
        definitionLatex: 'n! = 1 \\cdot 2 \\cdot \\dots \\cdot n, \\quad 0! = 1, \\quad \\binom{n}{k} = \\frac{n!}{k!(n-k)!}',
        explanation: 'A faktoriális az első n pozitív egész szám szorzata. A binomiális együttható kifejezi az ismétlés nélküli kombinációk számát.'
      }
    ],
    oralPresentationOutline: [
      'Mondd el a kombinatorika két alapelvét: az összeadási és szorzási szabályt.',
      'Származtasd és bizonyítsd be az ismétlés nélküli permutációk számát (n!).',
      'Vezesd le az ismétlés nélküli variációk számát a szorzási szabályból.',
      'Vezesd le az ismétlés nélküli kombinációk számát (n felett a k) a variációkból a sorrend kiküszöbölésével!',
      'Mondd el az ismétléses permutáció, variáció és kombináció képleteit is.'
    ],
    proofTitle: 'Az ismétlés nélküli kombinációk számának levezetése',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Variációk számának megadása szorzási szabállyal',
        latexContent: 'V_n^k = n \\cdot (n-1) \\cdot (n-2) \\dots (n-k+1) = \\frac{n!}{(n-k)!}',
        explanation: 'Az első elemet n-féleképpen, a másodikat (n-1)-féleképpen... a k-adikat (n-k+1)-féleképpen választhatjuk ki.'
      },
      {
        stepNumber: 2,
        title: 'A sorrend elhanyagolása (osztás a kiválasztott elemek permutációival)',
        latexContent: 'C_n^k = \\frac{V_n^k}{P_k} = \\frac{\\frac{n!}{(n-k)!}}{k!} = \\frac{n!}{k!(n-k)!} = \\binom{n}{k}',
        explanation: 'Mivel a k elem kiválasztásánál a sorrend nem számít, a variációk számát el kell osztanunk k elem összes lehetséges sorrendjeinek számával, azaz k!-sal.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mennyi 0! értéke és miért?',
        answer: '0! = 1. Ez a definíció teszi konzisztenssé a kombinatorikai képleteket (pl. C_n^0 = n! / (0! n!) = 1).',
        dangerLevel: 'Közepes'
      },
      {
        question: 'Mi a különbség az ismétléses és ismétlés nélküli kombináció között?',
        answer: 'Ismétlés nélküli kombinációnál egy elemet legfeljebb egyszer választhatunk ki, míg ismétlésesnél többször is. Képlete: C_n^{k,\\text{ism}} = \\binom{n+k-1}{k}.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Alapfogalmak és kombinatorikai szabályok', points: 4, description: 'Összeadási és szorzási szabály' },
      { criterion: 'Permutáció, variáció, kombináció definíciói', points: 4, description: 'Pontos képletek kimondása' },
      { criterion: 'Kombináció képletének szigorú levezetése', points: 7, description: 'Logikus bizonyítás a variációból' },
      { criterion: 'Gyakorlati feladat megoldása', points: 5, description: 'Helyes kombinatorikai modell kiválasztása' }
    ],
    applications: [
      {
        title: 'Ötöslottó szelvények száma',
        problem: 'Hányféleképpen tölthetünk ki egy ötöslottó szelvényt (90 számból 5-öt választunk)?',
        solutionLatex: 'C_{90}^5 = \\binom{90}{5} = \\frac{90 \\cdot 89 \\cdot 88 \\cdot 87 \\cdot 86}{5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1} = 43\\,949\\,268'
      }
    ],
    historicalContext: 'A binomiális együtthatókat már a 10. században tanulmányozták indiai és perzsa matematikusok (pl. Al-Karaji), majd Blaise Pascal rendszerezte őket.',
    visualizerType: 'binomial'
  },
  {
    id: 'tétel-04',
    number: 4,
    title: 'A binomiális tétel és a Pascal-háromszög',
    category: 'Kombinatorika és valószínűség',
    tags: ['Binomiális tétel', 'Pascal-háromszög', 'Kombinatorika', 'Teljes indukció'],
    difficulty: 'Nehéz',
    summary: 'A binomiális tétel kimondása és bizonyítása kombinatorikus úton vagy teljes indukcióval. A Pascal-háromszög tulajdonságai és a binomiális együtthatók szimmetriája.',
    statementLatex: '(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\dots + \\binom{n}{n}b^n',
    conditionsLatex: 'a, b \\in \\mathbb{R}, \\quad n \\in \\mathbb{N}^+',
    requiredDefinitions: [
      {
        term: 'Binomiális együttható és tulajdonságai',
        definitionLatex: '\\binom{n}{k} = \\frac{n!}{k!(n-k)!}, \\quad \\binom{n}{k} = \\binom{n}{n-k}, \\quad \\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}',
        explanation: 'A binomiális együtthatók szimmetrikusak és kielégítik a Pascal-háromszög képzési szabályát.'
      }
    ],
    oralPresentationOutline: [
      'Mondd ki a binomiális tételt tetszőleges n pozitív egészre.',
      'Mutasd be a Pascal-háromszöget és írd fel a képzési szabályát.',
      'Bizonyítsd be a binomiális tételt kombinatorikus gondolatmenettel (a zárójelek kiindexelésével)!',
      'Mutasd be a szimmetria azonosságot és az együtthatók összegét (2^n).',
      'Oldj meg egy feladatot, ahol egy adott tag együtthatóját kell meghatározni!'
    ],
    proofTitle: 'A binomiális tétel kombinatorikus bizonyítása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A szorzat tényezőkre bontása',
        latexContent: '(a+b)^n = \\underbrace{(a+b)(a+b)\\dots(a+b)}_{n \\text{ darab tényező}}',
        explanation: 'Ha ezt a szorzatot a disztributivitás szerint kijellezzük, minden tag úgy keletkezik, hogy mind a n darab zárójelből kiválasztunk vagy egy a-t, vagy egy b-t.'
      },
      {
        stepNumber: 2,
        title: 'A kifejlesztett tagok alakja',
        latexContent: 'a^{n-k} b^k \\quad (0 \\le k \\le n)',
        explanation: 'Ha k darab zárójelből a b-t választjuk ki, akkor a fennmaradó (n-k) darab zárójelből az a-t kell választanunk.'
      },
      {
        stepNumber: 3,
        title: 'Az azonos tagok összevonása kombinatorikai úton',
        latexContent: '\\text{Az } a^{n-k} b^k \\text{ tagok száma: } \\binom{n}{k}',
        explanation: 'Pontosan annyiféleképpen választhatunk ki n zárójelből k darabot (melyekből b-t veszünk el), ahányféleképpen n elemből k-at ki lehet választani sorrend nélkül, azaz (n felett k) féleképpen.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mennyi a Pascal-háromszög n-edik sorában lévő számok összege?',
        answer: '2^n. Ez látható a binomiális tételből a=1, b=1 helyettesítéssel: (1+1)^n = ∑ (n felett k).',
        dangerLevel: 'Közepes'
      },
      {
        question: 'Érvényes-e a binomiális tétel negatív vagy tört kitevőkre?',
        answer: 'Nem ebben a formában! Végtelen sorok segítségével (Newton-féle általánosított binomiális tétel) terjeszthető ki.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Binomiális tétel szabatos kimondása', points: 4, description: 'Összegzési alak és együtthatók' },
      { criterion: 'Pascal-háromszög azonosságainak felírása', points: 3, description: 'Képzési szabály és szimmetria' },
      { criterion: 'Kombinatorikus vagy teljes indukciós bizonyítás', points: 8, description: 'Logikailag pontos levezetés' },
      { criterion: 'Alkalmazás (együttható keresése)', points: 5, description: 'Helyes behelyettesítés és számolás' }
    ],
    applications: [
      {
        title: 'Együttható meghatározása hatványkifejtésben',
        problem: 'Mi az x^3 együtthatója a (2x - 3)^5 kifejtésében?',
        solutionLatex: 'T_{k+1} = \\binom{5}{k} (2x)^{5-k} (-3)^k \\implies 5-k=3 \\implies k=2 \\implies \\binom{5}{2} 2^3 (-3)^2 x^3 = 10 \\cdot 8 \\cdot 9 x^3 = 720 x^3'
      }
    ],
    historicalContext: 'Blaise Pascal 1654-ben írta le a háromszög tulajdonságait "Traité du triangle arithmétique" c. művében.',
    visualizerType: 'binomial'
  },
  {
    id: 'tétel-05',
    number: 5,
    title: 'Oszthatóság, prímszámok és az aritmetika alaptétele',
    category: 'Számelmélet és algebra',
    tags: ['Számelmélet', 'Oszthatóság', 'Prímszámok', 'Aritmetika alaptétele'],
    difficulty: 'Közepes',
    summary: 'Oszthatóság fogalma, tulajdonságai. Prímszámok és összetett számok. Az aritmetika alaptétele (prímtényezős felbontás egyértelműsége). A prímszámok végtelenségének bizonyítása (Eukleidész).',
    statementLatex: 'n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_k^{\\alpha_k} \\quad \\text{és a prímszámok száma végtelen.}',
    conditionsLatex: 'n \\in \\mathbb{N}, \\quad n > 1, \\quad p_1 < p_2 < \\dots < p_k \\text{ prímek, } \\alpha_i \\in \\mathbb{N}^+',
    requiredDefinitions: [
      {
        term: 'Oszthatóság és Prímszám definíciója',
        definitionLatex: 'a \\mid b \\iff \\exists k \\in \\mathbb{Z}: b = k \\cdot a',
        explanation: 'Egy p > 1 egész szám prímszám, ha csak két pozitív osztója van: 1 és önmaga.'
      },
      {
        term: 'Az aritmetika alaptétele',
        definitionLatex: 'n = \\prod_{i=1}^k p_i^{\\alpha_i}',
        explanation: 'Minden 1-nél nagyobb összetett egész szám sorrendtől eltekintve egyértelműen felbontható prímszámok szorzatára.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld az oszthatóságot és a prímszám fogalmát.',
      'Mondd ki az aritmetika alaptételét (létezés és egyértelműség).',
      'Mondd ki Eukleidész tételét a prímszámok végtelenségéről.',
      'Bizonyítsd be Eukleidész tételét indirekt módon!',
      'Mutasd be, hogyan határozható meg a pozitív osztók száma a prímtényezős felbontásból.'
    ],
    proofTitle: 'Eukleidész tételének bizonyítása (A prímszámok száma végtelen)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Indirekt feltételezés',
        latexContent: '\\text{Tegyük fel, hogy véges sok prímszám van: } p_1, p_2, \\dots, p_n.',
        explanation: 'Feltételezzük, hogy ez az összes prímszám teljes listája.'
      },
      {
        stepNumber: 2,
        title: 'Segédszám megkonstruálása',
        latexContent: 'N = (p_1 \\cdot p_2 \\cdot \\dots \\cdot p_n) + 1',
        explanation: 'Képezzük az összes prímszám szorzatát és adjunk hozzá 1-et.'
      },
      {
        stepNumber: 3,
        title: 'Oszthatóság vizsgálata',
        latexContent: 'N \\pmod{p_i} = 1 \\quad \\forall i \\in \\{1, 2, \\dots, n\\}',
        explanation: 'N-et bármely p_i prímszámmal elosztva 1 maradékot kapunk, így egyik p_i sem osztja N-et.'
      },
      {
        stepNumber: 4,
        title: 'Ellentmondás levonása',
        latexContent: 'N > 1 \\implies N \\text{-nek van prímfaktora, de ez nem lehet a listában!}',
        explanation: 'Mivel N > 1, az aritmetika alaptétele miatt van prímosztója. De ez a prímosztó egyik p_i sem lehet, ami ellentmond annak, hogy p_1..p_n volt az összes prímszám.'
      }
    ],
    examinerTraps: [
      {
        question: 'Prímszám-e az 1?',
        answer: 'Nem! Az 1 sem nem prím, sem nem összetett. Ha prím lenne, az aritmetika alaptételében a felbontás egyértelműsége sérülne (pl. 6 = 2*3 = 1*2*3 = 1*1*2*3).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Oszthatóság és prímszám szabatos definíciója', points: 4, description: '1 helyzete és pontos oszthatósági fogalom' },
      { criterion: 'Aritmetika alaptételének kimondása', points: 4, description: 'Létezés és egyértelműség kiemelése' },
      { criterion: 'Eukleidész tételének indirekt bizonyítása', points: 7, description: 'Logikailag hiánytalan levezetés' },
      { criterion: 'Osztók száma formula és alkalmazása', points: 5, description: 'd(n) = ∏(α_i + 1) felírása' }
    ],
    applications: [
      {
        title: 'Pozitív osztók száma',
        problem: 'Hány pozitív osztója van a 360-nak?',
        solutionLatex: '360 = 2^3 \\cdot 3^2 \\cdot 5^1 \\implies d(360) = (3+1)(2+1)(1+1) = 4 \\cdot 3 \\cdot 2 = 24'
      }
    ],
    historicalContext: 'Eukleidész "Elemek" c. művének IX. könyvében írta le ezen tétel bizonyítását időszámításunk előtt kb. 300-ban.',
    visualizerType: 'prime'
  },
  {
    id: 'tétel-06',
    number: 6,
    title: 'Legnagyobb közös osztó, Euklideszi algoritmus és Diophantoszi egyenletek',
    category: 'Számelmélet és algebra',
    tags: ['Euklideszi algoritmus', 'Lnko', 'Lkk', 'Diophantoszi egyenlet'],
    difficulty: 'Nehéz',
    summary: 'A legnagyobb közös osztó (lnko) és legkisebb közös többszörös (lkk). Az Euklideszi algoritmus működése és a Bézout-azonosság. Lineáris diophantoszi egyenletek ax + by = c megoldhatósága.',
    statementLatex: '\\text{lnko}(a,b) \\cdot \\text{lkk}(a,b) = a \\cdot b \\quad \\text{és} \\quad ax + by = c \\text{ megoldható } \\iff \\text{lnko}(a,b) \\mid c',
    conditionsLatex: 'a, b, c \\in \\mathbb{Z}, \\quad a, b \\neq 0',
    requiredDefinitions: [
      {
        term: 'Legnagyobb közös osztó és relatív prímek',
        definitionLatex: 'd = \\text{lnko}(a,b) \\iff (d \\mid a \\land d \\mid b) \\land (\\forall k: k \\mid a \\land k \\mid b \\implies k \\mid d)',
        explanation: 'Két szám relatív prím, ha legnagyobb közös osztójuk 1.'
      },
      {
        term: 'Bézout-azonosság',
        definitionLatex: '\\exists x, y \\in \\mathbb{Z}: a x + b y = \\text{lnko}(a,b)',
        explanation: 'Két egész szám legnagyobb közös osztója mindig felírható a két szám lineáris kombinációjaként egész együtthatókkal.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld a legnagyobb közös osztót és a legkisebb közös többszöröst.',
      'Írd fel az lnko(a,b) * lkk(a,b) = a * b összefüggést.',
      'Mutasd be az Euklideszi algoritmus lépéseit bentmaradó maradékos osztásokkal.',
      'Mondd ki a Bézout-azonosságot és a lineáris diophantoszi egyenlet megoldhatóságának feltételét.',
      'Vezesd le egy konkrét diophantoszi egyenlet általános megoldását!'
    ],
    proofTitle: 'Az Euklideszi algoritmus helyességének igazolása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Maradékos osztás felírása',
        latexContent: 'a = b \\cdot q + r \\quad (0 \\le r < |b|)',
        explanation: 'Az a számot osztva b-vel kapunk egy q hányadost és egy r maradékot.'
      },
      {
        stepNumber: 2,
        title: 'Közös osztók megőrzése',
        latexContent: 'd \\mid a \\land d \\mid b \\implies d \\mid (a - bq) = r',
        explanation: 'Bármely szám, ami osztja a-t és b-t, osztja r-et is. Hasonlóan, ami osztja b-t és r-et, az osztja a-t is.'
      },
      {
        stepNumber: 3,
        title: 'Lépések iterációja',
        latexContent: '\\text{lnko}(a, b) = \\text{lnko}(b, r_1) = \\text{lnko}(r_1, r_2) = \\dots = r_k',
        explanation: 'A maradékok szigorúan csökkennek, így véges sok lépésben 0 maradékot kapunk. Az utolsó nemnulla maradék maga a legnagyobb közös osztó.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mikor van végtelen sok megoldása az ax + by = c diophantoszi egyenletnek?',
        answer: 'Ha egyetlen megoldása létezik (azaz lnko(a,b) | c), akkor azonnal végtelen sok egész megoldáspár létezik.',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Lnko és lkk pontos definíciója', points: 4, description: 'Kapcsolatuk formulája' },
      { criterion: 'Euklideszi algoritmus menetének ismertetése', points: 4, description: 'Maradékos osztások elve' },
      { criterion: 'A Bézout-azonosság és diophantoszi egyenlet feltétele', points: 7, description: 'lnko(a,b) | c feltétel' },
      { criterion: 'Konkrét diophantoszi egyenlet megoldása', points: 5, description: 'Helyes parametrizálás' }
    ],
    applications: [
      {
        title: 'Diophantoszi egyenlet megoldása',
        problem: 'Oldjuk meg a 15x + 6y = 9 egyenletet az egész számok halmazán!',
        solutionLatex: '\\text{lnko}(15,6)=3. \\text{ Mivel } 3 \\mid 9, \\text{ van megoldás. } 5x + 2y = 3 \\implies x = 1 + 2t, \\quad y = -1 - 5t \\quad (t \\in \\mathbb{Z})'
      }
    ],
    historicalContext: 'Diophantos az ókori Alexandriában élt a 3. században, ő foglalkozott először szisztematikusan egész megoldású egyenletekkel.',
    visualizerType: 'prime'
  },
  {
    id: 'tétel-07',
    number: 7,
    title: 'Hatvány, gyök és logaritmus fogalma, azonosságai és alkalmazásai',
    category: 'Számelmélet és algebra',
    tags: ['Hatvány', 'Gyökvonás', 'Logaritmus', 'Azonosságok'],
    difficulty: 'Közepes',
    summary: 'A hatvány fogalmának kiterjesztése (egész, tört, valós kitevő). A n-edik gyök fogalma. A logaritmus definíciója, azonosságai és alapátváltási képlete.',
    statementLatex: '\\log_a (x \\cdot y) = \\log_a x + \\log_a y, \\quad \\log_a (x^k) = k \\cdot \\log_a x, \\quad \\log_b x = \\frac{\\log_a x}{\\log_a b}',
    conditionsLatex: 'a, b > 0, \\quad a, b \\neq 1, \\quad x, y > 0, \\quad k \\in \\mathbb{R}',
    requiredDefinitions: [
      {
        term: 'A logaritmus definíciója',
        definitionLatex: 'a^{\\log_a x} = x \\quad (a > 0, a \\neq 1, x > 0)',
        explanation: 'Az x szám a alapú logaritmusa az a kitevő, amelyre az a alapot emelve x-et kapunk.'
      },
      {
        term: 'Törtkitevőjű hatvány',
        definitionLatex: 'a^{\\frac{m}{n}} = \\sqrt[n]{a^m} \\quad (a > 0, m \\in \\mathbb{Z}, n \\in \\mathbb{N}^+)',
        explanation: 'A törtkitevőjű hatvány segítségével a hatványozás és gyökvonás egységes algebrai keretbe foglalható.'
      }
    ],
    oralPresentationOutline: [
      'Ismertesd a hatványozás fogalmának kiterjesztését (pozitív egész -> 0 -> negatív egész -> tört -> valós kitevő).',
      'Definiáld a n-edik gyök fogalmát kiemelve a páros és páratlan gyökkitevők közötti különbséget.',
      'Definiáld a logaritmust az értelmezési tartomány szigorú megadásával.',
      'Mondd ki és bizonyítsd be a szorzat logaritmusára vonatkozó azonosságot!',
      'Vezesd le a logaritmus alapátváltási képletét!'
    ],
    proofTitle: 'A szorzat logaritmusára vonatkozó azonosság igazolása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Jelölések bevezetése',
        latexContent: 'u = \\log_a x \\implies a^u = x, \\quad v = \\log_a y \\implies a^v = y',
        explanation: 'Használjuk a logaritmus definícióját a hatványalakok felírására.'
      },
      {
        stepNumber: 2,
        title: 'A két szám szorzása',
        latexContent: 'x \\cdot y = a^u \\cdot a^v = a^{u+v}',
        explanation: 'Alkalmazzuk az azonos alapú hatványok szorzására vonatkozó hatványazonosságot.'
      },
      {
        stepNumber: 3,
        title: 'Logaritmus vettel mindkét oldalból',
        latexContent: '\\log_a (x \\cdot y) = \\log_a (a^{u+v}) = u + v = \\log_a x + \\log_a y',
        explanation: 'Visszahelyettesítjük u és v eredeti logaritmusos értékét.'
      }
    ],
    examinerTraps: [
      {
        question: 'Értelmezhető-e negatív szám logaritmusa a valós számok halmazán?',
        answer: 'Nem! Mivel a pozitív alap bármely valós hatványa szigorúan pozitív, logaritmust csak pozitív számból vonhatunk.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Hatványozás kiterjesztése és gyökvonás', points: 4, description: 'Értelmezési tartományok pontos leírása' },
      { criterion: 'Logaritmus szabatos definíciója', points: 4, description: 'a > 0, a ≠ 1, x > 0 feltételek' },
      { criterion: 'Logaritmus-azonosság szigorú bizonyítása', points: 7, description: 'Hatványazonosságból való levezetés' },
      { criterion: 'Alapátváltási képlet felírása és alkalmazása', points: 5, description: 'Helyes számolás' }
    ],
    applications: [
      {
        title: 'Logaritmusos egyenlet megoldása',
        problem: 'Oldjuk meg a \\log_2(x) + \\log_2(x-2) = 3 egyenletet!',
        solutionLatex: 'x > 2. \\quad \\log_2(x(x-2)) = 3 \\implies x^2 - 2x = 8 \\implies x^2 - 2x - 8 = 0 \\implies x_1 = 4, x_2 = -2 \\text{ (hamis gyök)}. \\quad \\text{Megoldás: } x = 4.'
      }
    ],
    historicalContext: 'John Napier skót matematikus 1614-ben publikálta az első logaritmustáblázatot, amely forradalmasította a csillagászati számításokat.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-08',
    number: 8,
    title: 'Egyenletek, egyenletrendszerek, egyenlőtlenségek megoldási módszerei; számtani és mértani közép',
    category: 'Számelmélet és algebra',
    tags: ['Egyenletek', 'Egyenletrendszerek', 'Ekvivalens átalakítások', 'Közepek'],
    difficulty: 'Közepes',
    summary: 'Ekvivalens és nem ekvivalens egyenletátalakítások, gyökvesztés és hamis gyökök. A számtani és mértani közép közötti összefüggés kimondása és bizonyítása 2 elemre.',
    statementLatex: '\\frac{a + b}{2} \\ge \\sqrt{a \\cdot b}',
    conditionsLatex: 'a, b \\ge 0, \\quad \\text{egyenlőség } \\iff a = b',
    requiredDefinitions: [
      {
        term: 'Ekvivalens átalakítás fogalma',
        definitionLatex: 'f(x) = g(x) \\iff F(f(x)) = F(g(x))',
        explanation: 'Egy átalakítás ekvivalens, ha az egyenlet alaphalmazán nem változtatja meg a megoldások halmazát (nem hoz be hamis gyököt és nem okoz gyökvesztést).'
      },
      {
        term: 'Számtani és mértani közép',
        definitionLatex: 'A = \\frac{a+b}{2}, \\quad G = \\sqrt{ab} \\quad (a, b \\ge 0)',
        explanation: 'Két nemnegatív szám számtani közepe az átlaguk, mértani közepe pedig a szorzatuk négyzetgyöke.'
      }
    ],
    oralPresentationOutline: [
      'Ismertesd az egyenletmegoldási stratégiákat (alaphalmaz, értelmezési tartomány, ellenőrzés).',
      'Különböztesd meg az ekvivalens és nem ekvivalens átalakításokat (pl. négyzetre emelés).',
      'Definiáld két nemnegatív szám számtani és mértani középértékét.',
      'Mondd ki a két számszerű közép közötti egyenlőtlenséget és az egyenlőség feltételét.',
      'Bizonyítsd be a számtani és mértani közép közötti egyenlőtlenséget algebrai úton!'
    ],
    proofTitle: 'A számtani és mértani közép közötti egyenlőtlenség bizonyítása 2 elemre',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Két nemnegatív szám különbsége és a teljes négyzet',
        latexContent: '(\\sqrt{a} - \\sqrt{b})^2 \\ge 0',
        explanation: 'Bármely valós szám négyzete nemnegatív. Egyenlőség pontosan akkor áll fenn, ha √a = √b, azaz a = b.'
      },
      {
        stepNumber: 2,
        title: 'A zárójel felbontása',
        latexContent: 'a - 2\\sqrt{ab} + b \\ge 0',
        explanation: 'Alkalmazzuk az (x - y)^2 = x^2 - 2xy + y^2 nevezetes azonosságot x = √a és y = √b helyettesítéssel.'
      },
      {
        stepNumber: 3,
        title: 'Rendezés és osztás 2-vel',
        latexContent: 'a + b \\ge 2\\sqrt{ab} \\implies \\frac{a + b}{2} \\ge \\sqrt{ab}',
        explanation: 'Átvisszük a 2√ab kifejezést a jobb oldalra, majd elosztjuk mindkét oldalt 2-vel. Ezzel megkaptuk a kívánt egyenlőtlenséget.'
      }
    ],
    examinerTraps: [
      {
        question: 'Miért okozhat a négyzetre emelés hamis gyököt?',
        answer: 'Mivel az x -> x^2 függvény a valós számok halmazán nem kölcsönösen egyértelmű (pl. (-3)^2 = 3^2), ezért a négyzetre emelés nem ekvivalens átalakítás. Az ellenőrzés ilyenkor kötelező!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Egyenletmegoldási alapfogalmak, ekvivalencia', points: 4, description: 'Gyökvesztés és hamis gyök fogalma' },
      { criterion: 'Közepek pontos definíciója', points: 3, description: 'Nemnegatív feltételek' },
      { criterion: 'Számtani-mértani közép egyenlőtlenség bizonyítása', points: 8, description: 'Teljes négyzetből való levezetés' },
      { criterion: 'Szélsőérték feladat alkalmazása', points: 5, description: 'Helyes modellalkotás' }
    ],
    applications: [
      {
        title: 'Minimumérték meghatározása közepekkel',
        problem: 'Határozzuk meg az f(x) = x + 4/x kifejezés legkisebb értékét, ha x > 0!',
        solutionLatex: '\\frac{x + \\frac{4}{x}}{2} \\ge \\sqrt{x \\cdot \\frac{4}{x}} = \\sqrt{4} = 2 \\implies x + \\frac{4}{x} \\ge 4. \\quad \\text{Minimum: } 4 \\text{ (ha } x = 2\\text{)}'
      }
    ],
    historicalContext: 'Augustin-Louis Cauchy 1821-ben publikálta a számtani és mértani közép közötti általános, n elemre vonatkozó bizonyítását teljes indukcióval.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-09',
    number: 9,
    title: 'Polinomok, Viète-formulák, gyöktényezős alak és algebrai alaptétel',
    category: 'Számelmélet és algebra',
    tags: ['Polinomok', 'Viète-formulák', 'Gyöktényezős alak', 'Algebrai alaptétel'],
    difficulty: 'Nehéz',
    summary: 'Polinom fogalma, foka. Polinomok osztása, Horner-módszer. A gyöktényezős alak és az algebrai alaptétel. Másod- és harmadfokú Viète-formulák.',
    statementLatex: 'a x^2 + b x + c = a(x - x_1)(x - x_2), \\quad x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}',
    conditionsLatex: 'a, b, c \\in \\mathbb{R}, \\quad a \\neq 0, \\quad x_1, x_2 \\in \\mathbb{C}',
    requiredDefinitions: [
      {
        term: 'Polinom és gyök fogalma',
        definitionLatex: 'P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0, \\quad P(r) = 0',
        explanation: 'A r szám a P(x) polinom gyöke, ha behelyettesítve a polinom értéke 0.'
      },
      {
        term: 'Algebrai alaptétel',
        definitionLatex: 'P_n(x) \\text{-nek pontosan } n \\text{ darab komplex gyöke van (multiplicitással).}',
        explanation: 'Minden n-edfokú komplex együtthatós polinomnak a komplex számok körében pontosan n darab gyöke létezik.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld a polinomot, foksit és a polinomgyök fogalmát.',
      'Mondd ki a Bezout-tételt (P(x) osztható (x - r)-rel ⟺ P(r) = 0).',
      'Mondd ki az algebrai alaptételt és a gyöktényezős alakot.',
      'Vezesd le a másodfokú Viète-formulákat a gyöktényezős alakból!',
      'Írd fel a harmadfokú Viète-formulákat is.'
    ],
    proofTitle: 'A másodfokú Viète-formulák szigorú levezetése',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A másodfokú polinom gyöktényezős alakja',
        latexContent: 'P(x) = a x^2 + b x + c = a(x - x_1)(x - x_2)',
        explanation: 'Ha x1 és x2 a polinom gyökei, a polinom felírható a főegyüttható és a gyöktényezők szorzataként.'
      },
      {
        stepNumber: 2,
        title: 'A jobb oldal kijellezése',
        latexContent: 'a(x - x_1)(x - x_2) = a(x^2 - x_1 x - x_2 x + x_1 x_2) = a x^2 - a(x_1 + x_2)x + a(x_1 x_2)',
        explanation: 'Elvégezzük a zárójelek beszorzását és kiemeljük x-et.'
      },
      {
        stepNumber: 3,
        title: 'Együtthatók összehasonlítása (Azonos fokú tagok)',
        latexContent: 'b = -a(x_1 + x_2) \\implies x_1 + x_2 = -\\frac{b}{a}, \\quad c = a x_1 x_2 \\implies x_1 x_2 = \\frac{c}{a}',
        explanation: 'Mivel a két polinom minden x-re egyenlő, az azonos fokszámú kifejezések együtthatóinak meg kell egyezniük.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e egy valós együtthatós polinomnak páratlan sok komplex (nem valós) gyöke?',
        answer: 'Nem! Valós együtthatós polinom nem valós komplex gyökei mindig konjugált párokban lépnek fel, így számuk páros.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Polinom, gyök és gyöktényező definíciója', points: 4, description: 'Bezout-tétel felírása' },
      { criterion: 'Algebrai alaptétel kimondása', points: 3, description: 'Komplex gyökök létezése' },
      { criterion: 'Viète-formulák szigorú levezetése', points: 8, description: 'Együtthatók összehasonlítása' },
      { criterion: 'Alkalmazás (egyenletalkotás gyökökből)', points: 5, description: 'Helyes másodfokú egyenlet megadása' }
    ],
    applications: [
      {
        title: 'Másodfokú egyenlet megadása gyökök összegéből és szorzatából',
        problem: 'Készítsünk másodfokú egyenletet, melynek gyökei x1 = 3 és x2 = -5!',
        solutionLatex: 'x_1 + x_2 = -2, \\quad x_1 x_2 = -15 \\implies x^2 - (x_1+x_2)x + x_1 x_2 = 0 \\implies x^2 + 2x - 15 = 0'
      }
    ],
    historicalContext: 'François Viète (1540–1603) francia matematikus vezette be az első szisztematikus betűjelöléseket az algebrában.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-10',
    number: 10,
    title: 'Sorozatok fogalma, tulajdonságai, számtani és mértani sorozatok, kamatos kamat',
    category: 'Függvények és analízis',
    tags: ['Sorozatok', 'Számtani sorozat', 'Mértani sorozat', 'Kamatos kamat'],
    difficulty: 'Közepes',
    summary: 'Sorozat mint a természetes számokon értelmezett függvény. Korlátosság, monotonitás. Számtani és mértani sorozat n-edik tagja, első n tag összege és kamatos kamat számítás.',
    statementLatex: 'S_n^{\\text{számtani}} = \\frac{a_1 + a_n}{2} \\cdot n, \\quad S_n^{\\text{mértani}} = a_1 \\frac{q^n - 1}{q - 1} \\quad (q \\neq 1)',
    conditionsLatex: 'a_n = a_1 + (n-1)d, \\quad b_n = b_1 \\cdot q^{n-1}',
    requiredDefinitions: [
      {
        term: 'Számtani és mértani sorozat definíciója',
        definitionLatex: 'a_{n+1} - a_n = d \\quad (\\text{állandó}), \\quad \\frac{b_{n+1}}{b_n} = q \\quad (\\text{állandó}, q \\neq 0)',
        explanation: 'Számtani sorozatnál a szomszédos tagok különbsége (d), mértani sorozatnál a szomszédos tagok hányadosa (q) állandó.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld a sorozatot mint a pozitív egészek halmazán értelmezett függvényt.',
      'Beszélj a monotonitásról és korlátosságról.',
      'Definiáld a számtani és mértani sorozatokat.',
      'Bizonyítsd be a számtani sorozat első n tagjának összegképletét!',
      'Bizonyítsd be a mértani sorozat n-edik tagjának és összegének képletét!',
      'Alkalmazd a mértani sorozatot kamatos kamat feladatra.'
    ],
    proofTitle: 'A számtani sorozat első n tagja összegképletének igazolása (Gauss-módszer)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Az összeg felírása növekvő és csökkenő sorrendben',
        latexContent: 'S_n = a_1 + a_2 + \\dots + a_{n-1} + a_n',
        explanation: 'Írjuk fel az összeget úgy is, hogy hátulról előre haladunk:'
      },
      {
        stepNumber: 2,
        title: 'A két egyenlet összeadása',
        latexContent: '2S_n = (a_1 + a_n) + (a_2 + a_{n-1}) + \\dots + (a_n + a_1)',
        explanation: 'Az egymás alatt lévő tagok összege azonos: a_k + a_{n-k+1} = a_1 + a_n.'
      },
      {
        stepNumber: 3,
        title: 'Az összeg rendezése',
        latexContent: '2S_n = n \\cdot (a_1 + a_n) \\implies S_n = \\frac{a_1 + a_n}{2} \\cdot n',
        explanation: 'Mivel n darab egyenlő összegű tagunk van, elosztjuk 2-vel és megkapjuk a jól ismert képletet.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e egy sorozat egyszerre számtani és mértani sorozat is?',
        answer: 'Igen! Az állandó nemnulla sorozat (pl. 5, 5, 5, ...) számtani sorozat d = 0-val és mértani sorozat q = 1-gyel.',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Sorozat, monotonitás és korlátosság definíciója', points: 4, description: 'Függvénytani megközelítés' },
      { criterion: 'Számtani és mértani sorozat képletei', points: 4, description: 'n-edik tag és összeg felírása' },
      { criterion: 'Összegképlet szigorú bizonyítása', points: 7, description: 'Gauss-féle összeadási gondolat' },
      { criterion: 'Kamatos kamat alkalmazás', points: 5, description: 'K_n = K_0 * (1 + p/100)^n használata' }
    ],
    applications: [
      {
        title: 'Kamatos kamat számítás',
        problem: '1 000 000 Ft-ot elhelyezünk 5% évi kamatra. Mennyi pénzünk lesz 10 év múlva?',
        solutionLatex: 'K_{10} = 1\\,000\\,000 \\cdot (1.05)^{10} \\approx 1\\,000\\,000 \\cdot 1.62889 = 1\\,628\\,890 \\text{ Ft}'
      }
    ],
    historicalContext: 'Carl Friedrich Gauss kisgyermekként pár másodperc alatt adta össze az első 100 egész számot az elemi iskolában ezen gondolatmenet alapján.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-11',
    number: 11,
    title: 'Sorozatok határértéke (konvergencia), nevezetes sorozathatárértékek és sorok összege',
    category: 'Függvények és analízis',
    tags: ['Konvergencia', 'Határérték', 'Epszilon küszöbindex', 'Végtelen mértani sor'],
    difficulty: 'Nehéz',
    summary: 'A sorozat határértékének (konvergenciájának) pontos, epszilon-küszöbindexes definíciója. Torlódási pont, divergens sorozatok. Végtelen mértani sor összege.',
    statementLatex: '\\lim_{n \\to \\infty} a_n = L \\iff \\forall \\varepsilon > 0 \\ \\exists N(\\varepsilon) \\in \\mathbb{N}: \\forall n > N(\\varepsilon) \\implies |a_n - L| < \\varepsilon',
    conditionsLatex: 'S = \\sum_{k=1}^{\\infty} a_1 q^{k-1} = \\frac{a_1}{1-q} \\quad (|q| < 1)',
    requiredDefinitions: [
      {
        term: 'Sorozat konvergenciája (Küszöbindex definíció)',
        definitionLatex: '\\lim_{n \\to \\infty} a_n = L',
        explanation: 'Az a_n sorozat határértéke L, ha bármely tetszőlegesen kicsi epszilon pozitív valós számhoz megadható egy olyan N küszöbindex, hogy az N-nél nagyobb indexű tagok az L epszilon-környezetébe esnek.'
      },
      {
        term: 'Végtelen mértani sor összege',
        definitionLatex: 'S = \\lim_{n \\to \\infty} S_n = \\frac{a_1}{1-q} \\quad (|q| < 1)',
        explanation: 'A mértani sorozat első n tagja összegének határértéke n -> ∞ esetén, ha a hányados abszolút értéke 1-nél kisebb.'
      }
    ],
    oralPresentationOutline: [
      'Mondd el a sorozat konvergenciájának pontos epszilon-küszöbindexes definícióját.',
      'Szemléltesd a határértéket a számegyenesen az L körüli epszilon-környezettel.',
      'Hozz példát konvergens és divergens sorozatra.',
      'Bizonyítsd be egy konkrét sorozatról (pl. a_n = (2n+1)/(n+3)) a határértéket a küszöbindex explicit kiszámításával!',
      'Vezesd le a végtelen mértani sor összegképletét!'
    ],
    proofTitle: 'Egy konkrét sorozat határértékének igazolása küszöbindex kereséssel',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A sejtett határérték megadása és az egyenlőtlenség felírása',
        latexContent: 'a_n = \\frac{2n+1}{n+3} \\implies \\lim_{n \\to \\infty} a_n = 2. \\quad \\left|\\frac{2n+1}{n+3} - 2\\right| < \\varepsilon',
        explanation: 'Felírjuk a definíció szerinti |a_n - L| < ε egyenlőtlenséget.'
      },
      {
        stepNumber: 2,
        title: 'Az abszolút érték jelek közötti kifejezés egyszerűsítése',
        latexContent: '\\left|\\frac{2n+1 - 2(n+3)}{n+3}\\right| = \\left|\\frac{-5}{n+3}\\right| = \\frac{5}{n+3} < \\varepsilon',
        explanation: 'Közös nevezőre hozunk és elvégezzük az összevonást. Mivel n > 0, n+3 pozitív.'
      },
      {
        stepNumber: 3,
        title: 'Kifejezzük n-et az egyenlőtlenségből',
        latexContent: 'n + 3 > \\frac{5}{\\varepsilon} \\implies n > \\frac{5}{\\varepsilon} - 3 \\implies N(\\varepsilon) = \\left\\lfloor \\frac{5}{\\varepsilon} - 3 \\right\\rfloor + 1',
        explanation: 'Megkaptuk az explicit küszöbindexet. Mivel minden ε > 0-ra létezik ilyen véges N, a sorozat valóban konvergens és határértéke 2.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e egy sorozatnak két különböző határértéke?',
        answer: 'Nem! Ha egy sorozat konvergens, akkor a határértéke egyértelmű (unicitási tétel).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Konvergencia pontos ε-N definíciója', points: 5, description: 'Precíz logikai kvantitáció' },
      { criterion: 'Szemléltetés és példák', points: 3, description: 'Epszilon-szalag és divergencia' },
      { criterion: 'Explicit küszöbindex kiszámítása bizonyításban', points: 7, description: 'Tökéletes egyenlőtlenség rendezés' },
      { criterion: 'Végtelen mértani sor összege', points: 5, description: '|q| < 1 feltétel és formula' }
    ],
    applications: [
      {
        title: 'Végtelen szakaszos tizedestört átírása törtté',
        problem: 'Írjuk fel a 0.333... = 0.(3) értéket végtelen mértani sorként és törtté!',
        solutionLatex: '0.3 + 0.03 + 0.003 + \\dots = a_1 = 0.3, q = 0.1 \\implies S = \\frac{0.3}{1 - 0.1} = \\frac{0.3}{0.9} = \\frac{1}{3}'
      }
    ],
    historicalContext: 'Augustin-Louis Cauchy és Karl Weierstrass a 19. században fektették le az analízis szigorú alapkutató epsilon-delta/epsilon-N alapjait.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-12',
    number: 12,
    title: 'Függvények határértéke, folytonossága és nevezetes határértékek',
    category: 'Függvények és analízis',
    tags: ['Függvényhatárérték', 'Folytonosság', 'Heine-definíció', 'Cauchy-definíció'],
    difficulty: 'Nehéz',
    summary: 'A függvény pontbeli határértékének Cauchy-féle (ε-δ) és Heine-féle (sorozatos) definíciója. A pontbeli folytonosság fogalma. A lim_{x->0} sin(x)/x = 1 nevezetes határérték.',
    statementLatex: '\\lim_{x \\to x_0} f(x) = L, \\quad \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1',
    conditionsLatex: 'f \\text{ értelmezve van } x_0 \\text{ egy környezetében (esetleg } x_0 \\text{ kivételével).}',
    requiredDefinitions: [
      {
        term: 'Függvény pontbeli folytonossága',
        definitionLatex: '\\lim_{x \\to x_0} f(x) = f(x_0)',
        explanation: 'Az f függvény folytonos az x0 pontban, ha létezik ebben a pontban határértéke, és az megegyezik a helyettesítési értékkel.'
      },
      {
        term: 'Függvényhatárérték Cauchy-féle (ε-δ) definíciója',
        definitionLatex: '\\forall \\varepsilon > 0 \\ \\exists \\delta > 0: \\forall x (0 < |x - x_0| < \\delta \\implies |f(x) - L| < \\varepsilon)',
        explanation: 'Tetszőlegesen kicsi ε kimeneti hibához létezik olyan δ bemeneti sugár, hogy x0 delta-környezetében lévő x-ek képei L ε-környezetébe esnek.'
      }
    ],
    oralPresentationOutline: [
      'Mondd el a függvény pontbeli határértékének Cauchy-féle (ε-δ) definícióját.',
      'Ismertesd a Heine-féle (sorozathatárértékekre visszavezetett) definíciót és említsd meg a kettő ekvivalenciáját.',
      'Definiáld a pontbeli és intervallumbeli folytonosságot.',
      'Bizonyítsd be a lim_{x->0} (sin x / x) = 1 nevezetes határértéket a trigonometrikus egységkör segítségével!',
      'Alkalmazd ezt a nevezetes határértéket egy összetettebb feladatban (pl. lim_{x->0} (1 - cos x)/x^2).'
    ],
    proofTitle: 'A lim_{x->0} (sin x / x) = 1 nevezetes határérték geometrikus bizonyítása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Trigonometrikus egységkör és területek összehasonlítása',
        latexContent: 'x \\in \\left(0, \\frac{\\pi}{2}\\right) \\implies T_{\\Delta OAB} < T_{\\text{körcikk OAB}} < T_{\\Delta OAC}',
        explanation: 'Rajzoljunk fel egy x középponti szögű egységsugarú körcikket és a hozzá tartozó beírt és körülírt háromszögeket.'
      },
      {
        stepNumber: 2,
        title: 'Területek felírása x és trigonometrikus függvények segítségével',
        latexContent: '\\frac{1}{2} \\cdot 1 \\cdot \\sin x < \\frac{1}{2} \\cdot 1^2 \\cdot x < \\frac{1}{2} \\cdot 1 \\cdot \\tan x',
        explanation: 'Behelyettesítjük a háromszögek és a körcikk területképletét.'
      },
      {
        stepNumber: 3,
        title: 'Inverzió és a rendőrelv (Sandwich-tétel) alkalmazása',
        latexContent: '\\sin x < x < \\tan x \\implies 1 < \\frac{x}{\\sin x} < \\frac{1}{\\cos x} \\implies \\cos x < \\frac{\\sin x}{x} < 1',
        explanation: 'Osztunk sin x-szel, elvégezzük a reciprocal átfordítást, majd veszzük a határértéket n -> 0 esetén. Mivel lim_{x->0} cos x = 1, a rendőrelv alapján a középső kifejezés határértéke is 1.'
      }
    ],
    examinerTraps: [
      {
        question: 'Létezhet-e határérték egy olyan pontban, ahol a függvény nincs is értelmezve?',
        answer: 'Igen! A határérték csak az x0 pont környezetében lévő viselkedést vizsgálja, magában az x0 pontban nem kell értelmezve lennie (pl. sin(x)/x x=0-ban).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Határérték Cauchy és Heine definíciói', points: 5, description: 'Epszilon-delta pontos megfogalmazás' },
      { criterion: 'Folytonosság definíciója', points: 3, description: 'Határérték = helyettesítési érték' },
      { criterion: 'lim sin(x)/x = 1 geometrikus bizonyítása', points: 7, description: 'Egységkörös területszámítás és rendőrelv' },
      { criterion: 'Alkalmazás feladatban', points: 5, description: 'Helyes határérték számítás' }
    ],
    applications: [
      {
        title: 'Trigonometrikus határérték kiszámítása',
        problem: 'Számítsuk ki a \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} határértéket!',
        solutionLatex: '\\frac{1-\\cos x}{x^2} = \\frac{2\\sin^2(x/2)}{x^2} = \\frac{1}{2} \\left(\\frac{\\sin(x/2)}{x/2}\\right)^2 \\xrightarrow{x \\to 0} \\frac{1}{2} \\cdot 1^2 = \\frac{1}{2}'
      }
    ],
    historicalContext: 'Eduard Heine és Karl Weierstrass alakították ki a sorozatos és epsilon-deltás függvényhatárérték fogalmát a 19. század közepén.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-13',
    number: 13,
    title: 'A differenciálhányados fogalma, geometriai és fizikai jelentése, deriválási szabályok',
    category: 'Függvények és analízis',
    tags: ['Derivált', 'Differenciálhányados', 'Érintő', 'Deriválási szabályok'],
    difficulty: 'Közepes',
    summary: 'A szelőhányados és differenciálhányados (derivált) fogalma. Geometriai jelentése (érintő meredeksége) és fizikai jelentése (pillanatnyi sebesség). Alapfüggvények deriváltja és deriválási szabályok (összeg, szorzat, hányados).',
    statementLatex: 'f\'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}',
    conditionsLatex: 'f \\text{ differenciálható } x_0 \\text{-ban, ha ez a határérték véges és létezik.}',
    requiredDefinitions: [
      {
        term: 'Differenciálhányados (Derivált) definíciója',
        definitionLatex: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}',
        explanation: 'Az f függvény x0 pontbeli deriváltja a különbségi hányados (szelő meredekségének) határértéke, amint h tart 0-hoz.'
      },
      {
        term: 'Az érintőegyenlet formulája',
        definitionLatex: 'y - f(x_0) = f\'(x_0)(x - x_0)',
        explanation: 'Az (x0, f(x0)) pontban húzott érintőegyenes egyenlete, ahol a meredekséget a m = f\'(x0) derivált adja meg.'
      }
    ],
    oralPresentationOutline: [
      'Rajzold fel a függvény grafikonját, egy szelőt és az érintőt.',
      'Definiáld a szelőhányadost, majd veszd a határértékét: differenciálhányados.',
      'Mondd el a derivált geometriai (érintő meredeksége) és fizikai (pillanatnyi sebesség) jelentését.',
      'Bizonyítsd be az f(x) = x^2 vagy f(x) = sin(x) függvény deriváltját a definíció alapján!',
      'Mondd ki az összeg, szorzat és hányados deriválási szabályait.'
    ],
    proofTitle: 'Az f(x) = x^2 függvény deriváltjának igazolása definíció alapján',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A különbségi hányados felírása',
        latexContent: '\\frac{f(x+h) - f(x)}{h} = \\frac{(x+h)^2 - x^2}{h}',
        explanation: 'Behelyettesítjük az f(x) = x^2 szabályt a definícióba.'
      },
      {
        stepNumber: 2,
        title: 'A számláló kibontása és egyszerűsítése',
        latexContent: '\\frac{x^2 + 2xh + h^2 - x^2}{h} = \\frac{2xh + h^2}{h} = \\frac{h(2x + h)}{h} = 2x + h \\quad (h \\neq 0)',
        explanation: 'Elvégezzük az x^2 kivonását, kiemeljük h-t és leosztunk vele.'
      },
      {
        stepNumber: 3,
        title: 'Határértékvétel h -> 0 esetén',
        latexContent: 'f\'(x) = \\lim_{h \\to 0} (2x + h) = 2x',
        explanation: 'Mivel h tart 0-hoz, a kifejezés határértéke 2x. Ezzel igazoltuk, hogy (x^2)\' = 2x.'
      }
    ],
    examinerTraps: [
      {
        question: 'Minden folytonos függvény differenciálható is egyben?',
        answer: 'Nem! Például az f(x) = |x| függvény folytonos az x = 0 pontban, de ott nincs deriváltja (a bal és jobb oldali határérték nem egyezik meg: -1 vs +1).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Differenciálhányados pontos definíciója', points: 5, description: 'Szelőhányados határértéke' },
      { criterion: 'Geometriai és fizikai jelentés elmagyarázása', points: 4, description: 'Érintő meredeksége és sebesség' },
      { criterion: 'x^2 deriváltjának szigorú bizonyítása definícióból', points: 6, description: 'Különbségi hányados határértéke' },
      { criterion: 'Deriválási szabályok ismertetése', points: 5, description: 'Összeg, szorzat, hányados képletek' }
    ],
    applications: [
      {
        title: 'Érintőegyenlet meghatározása',
        problem: 'Írjuk fel az f(x) = x^2 - 3x + 2 függvény x = 4 pontbeli érintőjének egyenletét!',
        solutionLatex: 'f(4) = 6, \\quad f\'(x) = 2x - 3 \\implies f\'(4) = 5. \\quad \\text{Érintő: } y - 6 = 5(x - 4) \\implies y = 5x - 14'
      }
    ],
    historicalContext: 'Sir Isaac Newton és Gottfried Wilhelm Leibniz egymástól függetlenül fejlesztették ki a differenciálszámítást a 17. század végén.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-14',
    number: 14,
    title: 'Függvényvizsgálat deriválással, szélsőérték-feladatok és érintőegyenlet',
    category: 'Függvények és analízis',
    tags: ['Függvényvizsgálat', 'Monotonitás', 'Lokális szélsőérték', 'Konvexitás'],
    difficulty: 'Nehéz',
    summary: 'A derivált és a monotonitás kapcsolata. Első- és másodrendű feltétel lokális szélsőértékek létezésére. Konvexitás, konkávitás és inflexiós pont vizsgálata deriválással.',
    statementLatex: 'f\'(x) > 0 \\implies f \\text{ szigorúan monoton nő}, \\quad f\'(x_0)=0 \\land f\'\'(x_0) < 0 \\implies x_0 \\text{ lokális maximum}',
    conditionsLatex: 'f \\text{ kétszer folytonosan differenciálható az értelmezési tartomány belső pontjaiban.}',
    requiredDefinitions: [
      {
        term: 'Lokális szélsőérték szükséges feltétele',
        definitionLatex: 'f\'(x_0) = 0 \\quad (\\text{Fermat-tétel})',
        explanation: 'Ha f-nek az x0 belső pontban lokális szélsőértéke van és ott differenciálható, akkor a deriváltja ebben a pontban szükségképpen 0.'
      },
      {
        term: 'Inflexiós pont fogalma',
        definitionLatex: 'f\'\'(x_0) = 0 \\text{ és az másodrendű derivált előjelet vált x0-ban}',
        explanation: 'Az inflexiós pontban a függvény görbülete megváltozik: konvexből konkávba (vagy fordítva) vált át.'
      }
    ],
    oralPresentationOutline: [
      'Ismertesd a teljes függvényvizsgálat lépéseit (É.T., zérushelyek, paritás, periódus, határértékek, monotonitás, szélsőérték, konvexitás, É.K., grafikon).',
      'Mondd ki és magyarázd el a derivált előjele és a monotonitás közötti tételt.',
      'Mondd ki a lokális szélsőérték létezésének első- és másodrendű elégséges feltételét.',
      'Bizonyítsd be a monotonitás és derivált közötti tétel egyik irányát (Lagrange-féle középértéktételre hivatkozva)!',
      'Oldj meg egy szöveges szélsőérték-feladatot (optimizálási probléma)!'
    ],
    proofTitle: 'A derivált előjele és a monotonitás közötti tétel igazolása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Lagrange-féle középértéktétel kimondása',
        latexContent: '\\frac{f(x_2) - f(x_1)}{x_2 - x_1} = f\'(c) \\quad (x_1 < c < x_2)',
        explanation: 'Ha f folytonos [x1, x2]-n és differenciálható (x1, x2)-n, létezik olyan c belső pont, ahol a derivált megegyezik a szelőhányadossal.'
      },
      {
        stepNumber: 2,
        title: 'Pozitív derivált feltételének felhasználása',
        latexContent: 'f\'(x) > 0 \\ \\forall x \\implies f\'(c) > 0 \\implies \\frac{f(x_2) - f(x_1)}{x_2 - x_1} > 0',
        explanation: 'Mivel a derivált a teljes intervallumon szigorúan pozitív, így a c pontbeli f\'(c) derivált is pozitív.'
      },
      {
        stepNumber: 3,
        title: 'Szigorú monoton növekedés levonása',
        latexContent: 'x_2 - x_1 > 0 \\implies f(x_2) - f(x_1) > 0 \\implies f(x_2) > f(x_1)',
        explanation: 'Mivel a nevező pozitív (x2 > x1), a számlálónak is pozitívnak kell lennie. Ez pontosan azt jelenti, hogy a függvény szigorúan monoton növekvő.'
      }
    ],
    examinerTraps: [
      {
        question: 'Ha f\'(x0) = 0, az szigorúan jelenti-e, hogy ott szélsőérték van?',
        answer: 'Nem! Például az f(x) = x^3 függvény deriváltja f\'(0) = 0, de az x = 0 pontban nincs szélsőértéke, hanem inflexiós pontja van (teraszpont).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Függvényvizsgálat lépéseinek szisztematikus leírása', points: 4, description: 'Összes szempont ismertetése' },
      { criterion: 'Szélsőérték és konvexitás feltételei', points: 4, description: 'Első- és másodfokú derivált szerepe' },
      { criterion: 'Monotonitás és derivált tétel szigorú bizonyítása', points: 7, description: 'Lagrange-középértéktétel alkalmazása' },
      { criterion: 'Gyakorlati optimizálási feladat megoldása', points: 5, description: 'Szöveges szélsőérték feladat' }
    ],
    applications: [
      {
        title: 'Maximális térfogatú doboz készítése',
        problem: 'Egy 12x12 cm-es bádoglap sarkaiból x cm-es négyzeteket kivágva mekkora x esetén kapjuk a legnagyobb térfogatú nyitott dobozt?',
        solutionLatex: 'V(x) = x(12-2x)^2 = 4x^3 - 48x^2 + 144x. \\quad V\'(x) = 12x^2 - 96x + 144 = 0 \\implies x_1 = 2, x_2 = 6. \\quad \\text{Max Térfogat x = 2 cm-nél (V = 128 cm}^3\\text{)}'
      }
    ],
    historicalContext: 'Joseph-Louis Lagrange 1797-ben írta le a róla elnevezett középértéktételt, amely a differenciálszámítás egyik legfontosabb sarokköve.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-15',
    number: 15,
    title: 'Határozatlan és határozott integrál, a Newton–Leibniz-tétel és területszámítás',
    category: 'Függvények és analízis',
    tags: ['Integrál', 'Primitív függvény', 'Newton-Leibniz tétel', 'Területszámítás'],
    difficulty: 'Nehéz',
    summary: 'A primitív függvény és határozatlan integrál fogalma. A határozott integrál mint Riemann-összeg határértéke. A Newton–Leibniz-tétel kimondása és bizonyítása, területszámítás görbe alatti tartományra.',
    statementLatex: '\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a) \\quad \\text{ahol } F\'(x) = f(x)',
    conditionsLatex: 'f \\text{ folytonos az } [a, b] \\text{ zárt intervallumon, és } F \\text{ az } f \\text{ egy primitív függvénye.}',
    requiredDefinitions: [
      {
        term: 'Primitív függvény és Határozatlan integrál',
        definitionLatex: 'F\'(x) = f(x) \\implies \\int f(x) \\, dx = F(x) + C',
        explanation: 'Az F függvény az f primitív függvénye, ha deriváltja f. A primitív függvények egy konstans erejéig egyértelműek.'
      },
      {
        term: 'Riemann-féle határozott integrál',
        definitionLatex: '\\int_a^b f(x) \\, dx = \\lim_{\\Delta x_i \\to 0} \\sum_{i=1}^n f(\\xi_i) \\Delta x_i',
        explanation: 'A határozott integrál a téglalapösszegek (Riemann-összegek) határértéke a felosztás minden határon túli finomítása esetén.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld a primitív függvényt és a határozatlan integrált.',
      'Ismertesd a Riemann-féle határozott integrál fogalmát a beírt és körülírt téglalapösszegekkel.',
      'Mondd ki a Newton–Leibniz-tételt.',
      'Bizonyítsd be a Newton–Leibniz-tételt az területfüggvény segítségével!',
      'Számítsd ki két függvény grafikonja által közrefogott tartomány területét!'
    ],
    proofTitle: 'A Newton–Leibniz-tétel igazolása az területfüggvény deriválásával',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A területfüggvény bevezetése',
        latexContent: 'I(x) = \\int_a^x f(t) \\, dt \\quad (x \\in [a, b])',
        explanation: 'Legyen I(x) az a-tól x-ig terjedő görbe alatti terület értéke.'
      },
      {
        stepNumber: 2,
        title: 'A területfüggvény deriváltjának meghatározása',
        latexContent: 'I\'(x) = \\lim_{h \\to 0} \\frac{I(x+h) - I(x)}{h} = \\lim_{h \\to 0} \\frac{\\int_x^{x+h} f(t)\\,dt}{h} = f(x)',
        explanation: 'A középértéktétel alapján az h szélességű sáv területe h * f(c) alakú, így a hányados határértéke f(x). Tehát I(x) az f egy primitív függvénye!'
      },
      {
        stepNumber: 3,
        title: 'Tetszőleges F primitív függvény használata és az a, b behelyettesítés',
        latexContent: 'I(x) = F(x) + C. \\quad I(a) = 0 \\implies F(a) + C = 0 \\implies C = -F(a). \\quad \\text{Így } I(b) = F(b) - F(a)',
        explanation: 'Mivel I(a) a 0 szélességű tartomány területe (0), megkapjuk C-t, majd x = b helyettesítéssel eljutunk a Newton-Leibniz formulához.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e a határozott integrál értéke negatív?',
        answer: 'Igen! Ha a függvény az x-tengely alatt fut (f(x) < 0), a határozott integrál előjeles területet számol, így értéke negatív lesz. Geometriai terület kiszámításakor az abszolút értéket vagy a -1-gyel való szorzást kell alkalmazni.',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Primitív függvény és határozatlan integrál', points: 4, description: 'Konstans szerepének kiemelése' },
      { criterion: 'Riemann-integrál fogalma', points: 4, description: 'Riemann-összeg határértéke' },
      { criterion: 'Newton–Leibniz-tétel szigorú bizonyítása', points: 7, description: 'Területfüggvény deriválása' },
      { criterion: 'Görbe alatti területszámítás alkalmazása', points: 5, description: 'Helyes integrálás és behelyettesítés' }
    ],
    applications: [
      {
        title: 'Parabola alatti terület kiszámítása',
        problem: 'Számítsuk ki az f(x) = x^2 függvény grafikonja és az x-tengely közötti területet a [0, 3] intervallumon!',
        solutionLatex: 'T = \\int_0^3 x^2 \\, dx = \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{3^3}{3} - \\frac{0^3}{3} = 9 \\text{ területegység}'
      }
    ],
    historicalContext: 'Gottfried Wilhelm Leibniz vezette be a mai napig használt integráljelet (nyújtott S betű a summa szóból) 1675-ben.',
    visualizerType: 'function'
  },
  {
    id: 'tétel-16',
    number: 16,
    title: 'Háromszögek nevezetes vonalai, körei, szinusz- és koszinusztétel',
    category: 'Geometria és trigonometria',
    tags: ['Háromszög', 'Szinusztétel', 'Koszinusztétel', 'Körülírt kör', 'Beírt kör'],
    difficulty: 'Közepes',
    summary: 'Háromszög nevezetes vonalai (oldalfelező, szögfelező, magasság, súlyvonal) és pontjai. A beírt és körülírt kör. A szinusz- és koszinusztétel kimondása és bizonyítása.',
    statementLatex: '\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta} = \\frac{c}{\\sin \\gamma} = 2R, \\quad a^2 = b^2 + c^2 - 2bc \\cos \\alpha',
    conditionsLatex: 'a, b, c \\text{ Háromszög oldalai, } \\alpha, \\beta, \\gamma \\text{ a szemközti szögek, } R \\text{ a körülírt kör sugara.}',
    requiredDefinitions: [
      {
        term: 'Súlyvonal és súlypont',
        definitionLatex: 'S \\text{ a súlyvonalakat } 2:1 \\text{ arányban osztja (a csúcstól mérve).}',
        explanation: 'A háromszög csúcsát a szemközti oldal felezőpontjával összekötő szakasz a súlyvonal. A három súlyvonal egy pontban metszik egymást (súlypont).'
      },
      {
        term: 'Beírt és körülírt kör sugara',
        definitionLatex: 'r = \\frac{T}{s} \\quad (s = \\frac{a+b+c}{2}), \\quad R = \\frac{abc}{4T}',
        explanation: 'A belső szögfelezők metszéspontja a beírt kör középpontja, az oldalfelező merőlegesek metszéspontja a körülírt kör középpontja.'
      }
    ],
    oralPresentationOutline: [
      'Ismertesd a háromszög 4 nevezetes vonalát és azok metszéspontjait.',
      'Beszélj a beírt és körülírt körről és sugaraik képleteiről.',
      'Mondd ki a szinusztételt és a koszinusztételt.',
      'Bizonyítsd be a szinusztételt (a magassággal való kétféle felírással) vagy a koszinusztételt (vektorokkal/Pitagorasz-tétellel)!',
      'Oldj meg egy hiányos háromszög adatait kiszámító feladatot!'
    ],
    proofTitle: 'A szinusztétel bizonyítása hegyesszögű háromszögre',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A c oldalhoz tartozó magasság meghúzása',
        latexContent: 'm_c = b \\cdot \\sin \\alpha \\quad \\text{és} \\quad m_c = a \\cdot \\sin \\beta',
        explanation: 'Bontsuk a háromszöget két derékszögű háromszögre az m_c magasságvonallal. A szögfüggvények definíciója alapján a magasság kétféleképpen is felírható.'
      },
      {
        stepNumber: 2,
        title: 'A két kifejezés egyenlővé tétele',
        latexContent: 'b \\cdot \\sin \\alpha = a \\cdot \\sin \\beta',
        explanation: 'Mivel mindkét kifejezés m_c hosszát adja meg, egyenlővé tesszük őket.'
      },
      {
        stepNumber: 3,
        title: 'Rendezés és osztás (sin α * sin β)-val',
        latexContent: '\\frac{a}{\\sin \\alpha} = \\frac{b}{\\sin \\beta}',
        explanation: 'Hasonlóan eljárva az m_a magassággal megkapjuk a harmadik arányt is, amivel igazoltuk a szinusztételt.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mikor adhat a szinusztétel két különböző megoldást egy háromszög kiszámításakor?',
        answer: 'Ha két oldal és a kisebbik oldallal szemközti szög van megadva, mert a sin(x) = k egyenletnek a (0°, 180°) intervallumon két gyöke lehet (egy hegyesszög és annak kiegészítő tompaszöge).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Nevezetes vonalak és pontok ismertetése', points: 4, description: 'Súlypont, magasságpont, körök' },
      { criterion: 'Szinusz- és koszinusztétel pontos kimondása', points: 4, description: 'Képletek és feltételek' },
      { criterion: 'A szinusz- vagy koszinusztétel szigorú bizonyítása', points: 7, description: 'Logikus geometriai levezetés' },
      { criterion: 'Háromszögszámítási feladat megoldása', points: 5, description: 'Helyes szög- és oldalszámítás' }
    ],
    applications: [
      {
        title: 'Háromszög hiányzó oldalának kiszámítása koszinusztétellel',
        problem: 'Egy háromszög két oldala a = 5 cm, b = 8 cm, a bezárt szög γ = 60°. Mennyi a c oldal?',
        solutionLatex: 'c^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 60^\\circ = 25 + 64 - 80 \\cdot 0.5 = 89 - 40 = 49 \\implies c = 7 \\text{ cm}'
      }
    ],
    historicalContext: 'Klaudiosz Ptolemaiosz az 2. században az alhúr-táblázatokkal már használta a szinusztétel elődjét csillagászati számításaihoz.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-17',
    number: 17,
    title: 'Térgeometria: Testek felszíne, térfogata, Euler-féle poliedertétel és szög/távolság a térben',
    category: 'Geometria és trigonometria',
    tags: ['Térgeometria', 'Hasáb', 'Gúla', 'Forgástestek', 'Euler-poliedertétel'],
    difficulty: 'Nehéz',
    summary: 'Szög és távolság a térben (egyenesek, síkok). Hasáb, gúla, henger, kúp, gömb felszíne és térfogata. Konvex poliéderek és az Euler-féle poliedertétel.',
    statementLatex: 'C + L - É = 2 \\quad (\\text{Euler-féle poliedertétel})',
    conditionsLatex: 'C \\text{ a csúcsok, } L \\text{ a lapok, } É \\text{ az élek száma egy tetszőleges konvex poliéderben.}',
    requiredDefinitions: [
      {
        term: 'Konvex poliéder fogalma',
        definitionLatex: 'P \\subset \\mathbb{R}^3 \\text{ konvex poliéder, ha véges sok síklap korlátozza és konvex.}',
        explanation: 'Olyan térbeli test, amelyet véges sok sokszöglap határol, és bármely két pontját összekötő szakasz a testben fut.'
      },
      {
        term: 'Gömb felszíne és térfogata',
        definitionLatex: 'A = 4 \\pi R^2, \\quad V = \\frac{4}{3} \\pi R^3',
        explanation: 'Az R sugárral rendelkező gömb felszínének és térfogatának klasszikus képletei.'
      }
    ],
    oralPresentationOutline: [
      'Ismertesd a térbeli egyenesek és síkok hajlásszögét és távolságát.',
      'Sorold fel a szabályos testeket (Platóni testek: tetraéder, kocka, oktaéder, dodekaéder, ikozaéder).',
      'Mondd ki az Euler-féle poliedertételt (C + L - É = 2).',
      'Bizonyítsd be az Euler-féle poliedertételt vagy számítsd ki egy forgáskúp felszínét/térfogatát!',
      'Oldj meg egy térgeometriai szöveges feladatot (síkmetszet, hajlásszög).'
    ],
    proofTitle: 'Az Euler-féle poliedertétel igazolása síkgráfra visszavezetéssel (Cauchy-féle bizonyítás)',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Egy lap eltávolítása és a poliéder síkba vetítése (Schlegel-diagram)',
        latexContent: 'C\' = C, \\quad É\' = É, \\quad L\' = L - 1',
        explanation: 'Eltávolítjuk a poliéder egy lapját, és a maradék felületet kinyújtjuk a síkba. Egy összefüggő síkgráfot kapunk.'
      },
      {
        stepNumber: 2,
        title: 'Trianguláció (lapok háromszögekre bontása átlókkal)',
        latexContent: '\\text{Minden átló meghúzásával } L\' \\text{ és } É\' \\text{ is 1-gyel nő, így } C\' + L\' - É\' \\text{ változatlan.}',
        explanation: 'A lapokat háromszögekre bontjuk átlók berajzolásával. Mivel mind a lapok, mind az élek száma 1-gyel nő, a C + L - É összeg értéke nem változik.'
      },
      {
        stepNumber: 3,
        title: 'Háromszögek egyenkénti elvétele a külső határól',
        latexContent: 'C\' + L\' - É\' = 1 \\implies C + (L - 1) - É = 1 \\implies C + L - É = 2',
        explanation: 'Lépésenként elvesszük a háromszögeket. Végül egyetlen háromszög marad (C=3, L=1, É=3 -> 3+1-3 = 1). Visszahelyettesítve a hiányzó 1 lapot megkapjuk a C + L - É = 2 formulát.'
      }
    ],
    examinerTraps: [
      {
        question: 'Hány szabályos test létezik a háromdimenziós térben?',
        answer: 'Pontosan 5 Platóni test létezik (Tetraéder, Kocka, Oktaéder, Dodekaéder, Ikozaéder). Ez bizonyítható az Euler-poliedertételből!',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Térgeometriai alapfogalmak, szögek, távolságok', points: 4, description: 'Egyenesek és síkok viszonya' },
      { criterion: 'Felszín és térfogat képletek', points: 4, description: 'Gúla, kúp, gömb képletei' },
      { criterion: 'Euler-poliedertétel bizonyítása', points: 7, description: 'Schlegel-diagramos szerkezeti bizonyítás' },
      { criterion: 'Térgeometriai számítási feladat', points: 5, description: 'Helyes szög- és felszínszámítás' }
    ],
    applications: [
      {
        title: 'Kocka Euler-poliedertételének ellenőrzése',
        problem: 'Igazoljuk az Euler-poliedertételt a kockára!',
        solutionLatex: 'C = 8 \\text{ csúcs}, \\quad L = 6 \\text{ lap}, \\quad É = 12 \\text{ él}. \\quad C + L - É = 8 + 6 - 12 = 2 \\quad \\checkmark'
      }
    ],
    historicalContext: 'Leonhard Euler 1750-ben fogalmazta meg tételét, amelyet Augustin-Louis Cauchy bizonyított be szigorúan 1811-ben.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-18',
    number: 18,
    title: 'Vektorok a síkban és térben: Skaláris szorzat, vektoriális szorzat és alkalmazásaik',
    category: 'Koordinátageometria és vektorok',
    tags: ['Vektorok', 'Skaláris szorzat', 'Vektoriális szorzat', 'Hajlásszög'],
    difficulty: 'Közepes',
    summary: 'Vektor fogalma, műveletek (összeadás, kivonás, számmal szorzás). Skaláris szorzat definíciója, algebrai tulajdonságai és koordinátás alakja. Vektoriális szorzat a térben.',
    statementLatex: '\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}| |\\mathbf{b}| \\cos \\varphi = a_x b_x + a_y b_y + a_z b_z, \\quad |\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}| |\\mathbf{b}| \\sin \\varphi',
    conditionsLatex: '\\mathbf{a}, \\mathbf{b} \\in \\mathbb{R}^3, \\quad \\varphi \\text{ a bezárt szögük (}0^\\circ \\le \\varphi \\le 180^\\circ\\text{)}',
    requiredDefinitions: [
      {
        term: 'Skaláris szorzat definíciója',
        definitionLatex: '\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}| |\\mathbf{b}| \\cos \\varphi',
        explanation: 'Két vektor skaláris szorzata a hosszaik és a bezárt szögük koszinuszának szorzata. Eredménye egy valós szám (skalár).'
      },
      {
        term: 'Vektoriális szorzat definíciója',
        definitionLatex: '\\mathbf{c} = \\mathbf{a} \\times \\mathbf{b} \\implies \\mathbf{c} \\perp \\mathbf{a}, \\mathbf{c} \\perp \\mathbf{b}, \\quad |\\mathbf{c}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\varphi',
        explanation: 'A vektoriális szorzat eredménye egy mindkét tényezőre merőleges vektor, melynek hossza a két vektor által kifeszített paralelogramma területe.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld a vektor fogalmát (irányított szakasz) és az alapvető műveleteket.',
      'Definiáld a skaláris szorzatot koordinátákkal és a bezárt szöggel.',
      'Bizonyítsd be a skaláris szorzat koordinátás alakját 2D-ben (a koszinusztétel segítségével)!',
      'Definiáld a vektoriális szorzatot a 3D térben és mondd el tulajdonságait (jobbsodrású rendszer, terület).',
      'Alkalmazd a skaláris szorzatot két vektor hajlásszögének vagy merőlegességének megállapítására!'
    ],
    proofTitle: 'A skaláris szorzat koordinátás alakjának bizonyítása 2D-ben',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Két vektor különbségvektora és hossza',
        latexContent: '\\mathbf{c} = \\mathbf{a} - \\mathbf{b} = (a_x - b_x, a_y - b_y)',
        explanation: 'Írjuk fel a két vektor által bezárt háromszög harmadik oldalát jelentő különbségvektort.'
      },
      {
        stepNumber: 2,
        title: 'A koszinusztétel felírása a vektorhosszakkal',
        latexContent: '|\\mathbf{c}|^2 = |\\mathbf{a}|^2 + |\\mathbf{b}|^2 - 2|\\mathbf{a}||\\mathbf{b}|\\cos \\varphi',
        explanation: 'Alkalmazzuk a koszinusztételt a háromszög oldalaira.'
      },
      {
        stepNumber: 3,
        title: 'Koordinátás hosszak behelyettesítése és összehasonlítás',
        latexContent: '(a_x - b_x)^2 + (a_y - b_y)^2 = (a_x^2 + a_y^2) + (b_x^2 + b_y^2) - 2(\\mathbf{a} \\cdot \\mathbf{b})',
        explanation: 'A négyzetre emelések elvégzése és az a_x^2 + b_x^2 + a_y^2 + b_y^2 tagok kiesése után eljutunk a az a_x b_x + a_y b_y = a * b kifejezéshez.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mikor 0 két nemnulla vektor skaláris szorzata?',
        answer: 'Pontosan akkor, ha a két vektor merőleges egymásra (cos 90° = 0). Ez a merőlegesség legfontosabb algebrai feltétele!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Vektorok és vektorműveletek definíciói', points: 4, description: 'Összeadás, kivonás, skaláris szorzat' },
      { criterion: 'Vektoriális szorzat tulajdonságai', points: 3, description: 'Merőlegesség és terület jelentés' },
      { criterion: 'Skaláris szorzat koordinátás alakjának bizonyítása', points: 8, description: 'Koszinusztételes levezetés' },
      { criterion: 'Hajlásszög számítási alkalmazás', points: 5, description: 'Helyes szögmeghatározás' }
    ],
    applications: [
      {
        title: 'Vektorok hajlásszögének kiszámítása',
        problem: 'Mennyi az a=(3, 4) és b=(1, 7) vektorok által bezárt szög?',
        solutionLatex: '\\mathbf{a}\\cdot\\mathbf{b} = 3\\cdot 1 + 4\\cdot 7 = 31, \\quad |\\mathbf{a}|=5, |\\mathbf{b}|=\\sqrt{50} \\implies \\cos\\varphi = \\frac{31}{5\\sqrt{50}} \\approx 0.8768 \\implies \\varphi \\approx 28.75^\\circ'
      }
    ],
    historicalContext: 'Josiah Willard Gibbs és Oliver Heaviside fejlesztették ki a modern vektoralgebrát a 19. század végén a fizikában való alkalmazásokhoz.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-19',
    number: 19,
    title: 'Koordinátageometria: Egyenes, kör és paraméteres/egyenleti alakok',
    category: 'Koordinátageometria és vektorok',
    tags: ['Koordinátageometria', 'Egyenes egyenlete', 'Normálvektor', 'Kör egyenlete'],
    difficulty: 'Közepes',
    summary: 'A sík geometriai alakzatainak leírása algebrai egyenletekkel. Az egyenes normálvektoros, irányvektoros és tengelymetszetes egyenlete. A kör egyenlete, kör és egyenes metszéspontja.',
    statementLatex: 'A(x - x_0) + B(y - y_0) = 0 \\quad (Ax + By = C), \\quad (x - u)^2 + (y - v)^2 = r^2',
    conditionsLatex: '\\mathbf{n}=(A,B) \\neq \\mathbf{0} \\text{ a normálvektor, } K(u,v) \\text{ a kör középpontja, } r > 0 \\text{ a sugár.}',
    requiredDefinitions: [
      {
        term: 'Normálvektor és Irányvektor',
        definitionLatex: '\\mathbf{n} = (A, B) \\perp \\text{egyenes}, \\quad \\mathbf{v} = (-B, A) \\parallel \\text{egyenes}',
        explanation: 'Az egyenesre merőleges nemnulla vektor a normálvektor (n), az egyenessel párhuzamos nemnulla vektor az irányvektor (v).'
      },
      {
        term: 'A kör egyenletének definíciója',
        definitionLatex: '(x - u)^2 + (y - v)^2 = r^2',
        explanation: 'A K(u, v) középponttól r távolságra lévő P(x, y) pontok mértani helyének egyenlete a síkban (Pitagorasz-tétel alapján).'
      }
    ],
    oralPresentationOutline: [
      'Definiáld az alakzatok egyenletének fogalmát a koordinátasíkban.',
      'Definiáld az egyenes normálvektorát és irányvektorát.',
      'Bizonyítsd be az egyenes normálvektoros egyenletét skaláris szorzattal!',
      'Vezesd le a K(u,v) középpontú, r sugarú kör egyenletét a Pitagorasz-tétellel!',
      'Mutasd be egy egyenes és egy kör metszéspontjának meghatározását (egyenletrendszer).'
    ],
    proofTitle: 'Az egyenes normálvektoros egyenletének levezetése',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Adott pont és futópont összekötő vektora',
        latexContent: 'P_0(x_0, y_0) \\text{ adott pont, } P(x, y) \\text{ futópont } \\implies \\overrightarrow{P_0P} = (x - x_0, y - y_0)',
        explanation: 'Képezzük az egyenesen lévő fix P0 pontból a tetszőleges P futópontba mutató vektort.'
      },
      {
        stepNumber: 2,
        title: 'Merőlegességi feltétel felírása skaláris szorzattal',
        latexContent: '\\mathbf{n} \\perp \\overrightarrow{P_0P} \\iff \\mathbf{n} \\cdot \\overrightarrow{P_0P} = 0 \\quad (\\mathbf{n} = (A,B))',
        explanation: 'Mivel n merőleges az egyenesre, skaláris szorzatuk a futópontból indított vektorral 0 kell legyen.'
      },
      {
        stepNumber: 3,
        title: 'Koordináták behelyettesítése',
        latexContent: 'A(x - x_0) + B(y - y_0) = 0 \\implies Ax + By = Ax_0 + By_0 = C',
        explanation: 'A skaláris szorzat koordinátás alakját felírva megkaptuk az egyenes Ax + By = C normálvektoros egyenletét.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e a kör egyenletében az x^2 és y^2 együtthatója különböző?',
        answer: 'Nem! Ha az x^2 és y^2 együtthatója különböző (és azonos előjelű), akkor az alakzat nem kör, hanem ellipszis!',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Normálvektor, irányvektor és egyenes definíciói', points: 4, description: 'Vektorok szerepe a geometriában' },
      { criterion: 'Kör egyenletének definíciója', points: 3, description: 'Pitagorasz-tételes háttér' },
      { criterion: 'Normálvektoros egyenlet levezetése', points: 8, description: 'Skaláris szorzatos szigorú bizonyítás' },
      { criterion: 'Metszéspont számítási feladat', points: 5, description: 'Másodfokú egyenletrendszer megoldása' }
    ],
    applications: [
      {
        title: 'Kör és egyenes metszéspontjai',
        problem: 'Határozzuk meg az x^2 + y^2 = 25 kör és az y = x + 1 egyenes metszéspontjait!',
        solutionLatex: 'x^2 + (x+1)^2 = 25 \\implies 2x^2 + 2x - 24 = 0 \\implies x^2 + x - 12 = 0 \\implies x_1 = 3, x_2 = -4. \\quad \\text{Metszéspontok: } (3, 4) \\text{ és } (-4, -3)'
      }
    ],
    historicalContext: 'René Descartes 1637-ben publikálta "La Géométrie" c. művét, megteremtve a geometriát és algebrát összekötő koordinátageometriát.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-20',
    number: 20,
    title: 'Kúpszeletek (Parabola, Ellipszis, Hiperbola) egyenletei és geometriai tulajdonságai',
    category: 'Koordinátageometria és vektorok',
    tags: ['Kúpszeletek', 'Parabola', 'Ellipszis', 'Hiperbola', 'Fókuszpont'],
    difficulty: 'Kiemelt emelt',
    summary: 'A kúpszeletek mint síkmetszetek és mint mértani helyek. Parabola, ellipszis és hiperbola definíciói, fókuszpontjai, tengelyei és egyenletei.',
    statementLatex: '\\text{Parabola: } y^2 = 2px, \\quad \\text{Ellipszis: } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, \\quad \\text{Hiperbola: } \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1',
    conditionsLatex: 'p > 0 \\text{ a parabola paramétere, } a, b > 0 \\text{ a féltegelyek hossza.}',
    requiredDefinitions: [
      {
        term: 'Parabola mint mértani hely',
        definitionLatex: 'd(P, F) = d(P, d_0)',
        explanation: 'A parabola azon P pontok mértani helye a síkban, amelyek egy F ponttól (fókuszpont) és egy d0 egyenestől (vezéregyenes) egyenlő távolságra vannak.'
      },
      {
        term: 'Ellipszis mint mértani hely',
        definitionLatex: 'd(P, F_1) + d(P, F_2) = 2a \\quad (2a > 2c)',
        explanation: 'Az ellipszis azon pontok mértani helye, amelyek két megadott F1, F2 ponttól való távolságaik összege állandó (2a).'
      }
    ],
    oralPresentationOutline: [
      'Magyarázd el a kúpszeletek keletkezését forgáskúp síkmetszeteként.',
      'Definiáld a parabolát mint mértani helyet és származtasd az y^2 = 2px vagy x^2 = 2py tengelyponti egyenletét!',
      'Definiáld az ellipszist és a hiperbolát mint mértani helyeket és mondd ki egyenleteiket.',
      'Mutasd be a fókuszpontok és a tengelyek szerepét mindhárom kúpszeletnél.',
      'Oldj meg egy parabola és egyenes metszéspontját kiszámító feladatot!'
    ],
    proofTitle: 'A parabola y^2 = 2px tengelyponti egyenletének levezetése',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Koordinátarendszer felvétele és fókusz/vezéregyenes megadása',
        latexContent: 'F\\left(\\frac{p}{2}, 0\\right), \\quad d_0: x = -\\frac{p}{2}',
        explanation: 'Helyezzük a tengelypontot az origóba. A fókuszpont az x-tengelyen p/2-nél van, a vezéregyenes x = -p/2.'
      },
      {
        stepNumber: 2,
        title: 'Távolságok felírása a P(x, y) futópontra',
        latexContent: 'd(P, F) = \\sqrt{\\left(x - \\frac{p}{2}\\right)^2 + y^2}, \\quad d(P, d_0) = x + \\frac{p}{2}',
        explanation: 'Felírjuk a pont és fókusz távolságát a kétpont-távolság képlettel, valamint a pont és vezéregyenes távolságát.'
      },
      {
        stepNumber: 3,
        title: 'Egyenlővé tétel és négyzetre emelés',
        latexContent: '\\left(x - \\frac{p}{2}\\right)^2 + y^2 = \\left(x + \\frac{p}{2}\\right)^2 \\implies x^2 - px + \\frac{p^2}{4} + y^2 = x^2 + px + \\frac{p^2}{4}',
        explanation: 'Kifejtjük a négyzeteket mindkét oldalon. Az x^2 és p^2/4 tagok kiesnek.'
      },
      {
        stepNumber: 4,
        title: 'Végső egyenlet rendezése',
        latexContent: 'y^2 - px = px \\implies y^2 = 2px',
        explanation: 'Áthozva a -px-et megkapjuk a parabola kanonikus tengelyponti egyenletét.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mi a különbség az ellipszis és a hiperbola definíciója között?',
        answer: 'Az ellipszisnél a fókuszoktól való távolságok ÖSSZEGE állandó (d1 + d2 = 2a), míg a hiperbolánál a távolságok KÜLÖNBSÉGÉNEK ABSZOLÚT ÉRTÉKE állandó (|d1 - d2| = 2a).',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Kúpszeletek keletkezése és mértani hely definíciók', points: 4, description: 'Síkpályák és fókuszok' },
      { criterion: 'Parabola, ellipszis, hiperbola egyenletei', points: 4, description: 'Kanonikus alakok felírása' },
      { criterion: 'Parabola egyenletének szigorú levezetése', points: 8, description: 'Távolságok egyenlőségéből' },
      { criterion: 'Metszéspont vagy érintő számítási feladat', points: 4, description: 'Helyes algebrai számolás' }
    ],
    applications: [
      {
        title: 'Parabola fókuszpontjának meghatározása',
        problem: 'Hol található az y^2 = 12x parabola fókuszpontja és mi a vezéregyenlete?',
        solutionLatex: '2p = 12 \\implies p = 6. \\quad \\text{Fókuszpont: } F\\left(\\frac{p}{2}, 0\\right) = F(3, 0), \\quad \\text{Vezéregyenes: } x = -3'
      }
    ],
    historicalContext: 'Pergei Apollóniosz az i.e. 3. században írta meg "Kónika" c. nyolc kötetes alapművét, elnevezve az ellipszist, parabolát és hiperbolát.',
    visualizerType: 'vector'
  },
  {
    id: 'tétel-21',
    number: 21,
    title: 'Gráfelmélet alapjai: Fokszámösszeg-tétel, Euler-vonal, fák és színezés',
    category: 'Gráfelmélet és statisztika',
    tags: ['Gráfelmélet', 'Fokszámösszeg', 'Euler-vonal', 'Fák', 'Színezés'],
    difficulty: 'Közepes',
    summary: 'A gráf, csúcs, él, fokszám fogalma. A fokszámok összege és az élek száma közötti összefüggés (Handshaking lemma). Euler-vonal és Hamilton-kör. Fák tulajdonságai és gráfszínezés.',
    statementLatex: '\\sum_{v \\in V} d(v) = 2 |E|, \\quad T \\text{ fa } \\iff |E| = |V| - 1 \\quad (\\text{összefüggő})',
    conditionsLatex: 'G = (V, E) \\text{ véges, egyszerű gráf, ahol } V \\text{ a csúcsok, } E \\text{ az élek halmaza.}',
    requiredDefinitions: [
      {
        term: 'Egyszerű gráf és Fokszám',
        definitionLatex: 'd(v) = |\\{e \\in E \\mid v \\in e\\}|',
        explanation: 'Egy csúcs fokszáma a rá illeszkedő élek száma. Az egyszerű gráf nem tartalmaz hurokélt és párhuzamos éleket.'
      },
      {
        term: 'Euler-vonal létezésének feltétele',
        definitionLatex: 'G \\text{-ben van zárt Euler-vonal } \\iff G \\text{ összefüggő és minden csúcs fokszáma PÁROS.}',
        explanation: 'Zárt Euler-vonal olyan séta, amely a gráf minden élén pontosan egyszer halad át, és az kiinduló csúcsba tér vissza.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld a gráf, csúcs, él, fokszám és egyszerű gráf fogalmát.',
      'Mondd ki és bizonyítsd be a fokszámösszeg-tételt (Kézfogási tétel)!',
      'Definiáld az Euler-vonalat és mondd ki az Euler-tételt.',
      'Definiáld a fát mint körmentes összefüggő gráfot, és mondd ki az |E| = |V| - 1 tulajdonságot.',
      'Mutasd be a gráfszínezés fogalmát és a négyszín-tételt.'
    ],
    proofTitle: 'A fokszámösszeg-tétel (Handshaking Lemma) bizonyítása',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'Élek és csúcsok kapcsolatának vizsgálata',
        latexContent: '\\text{Minden } e = \\{u, v\\} \\in E \\text{ él pontosan két csúcsot köt össze: } u \\text{-t és } v \\text{-t.}',
        explanation: 'Amikor képezzük a csúcsok fokszámainak összegét, minden egyes élt kétszer számolunk meg: egyszer az egyik végpontjánál, egyszer a másiknál.'
      },
      {
        stepNumber: 2,
        title: 'Dupla megszámlálás elve',
        latexContent: '\\sum_{v \\in V} d(v) = 2 \\cdot |E|',
        explanation: 'Mivel |E| darab élünk van és mindegyik pontosan 2-vel járul hozzá a fokszámok összegéhez, a fokszámok összege az élek számának kétszerese.'
      },
      {
        stepNumber: 3,
        title: 'Következmény: Páratlan fokszámú csúcsok száma',
        latexContent: '\\text{A páratlan fokszámú csúcsok száma szükségképpen PÁROS.}',
        explanation: 'Mivel a jobb oldal (2|E|) páros szám, a bal oldali összegben a páratlan tagok száma csak páros lehet.'
      }
    ],
    examinerTraps: [
      {
        question: 'Lehet-e egy 7 csúcsú egyszerű gráfban minden csúcs fokszáma 3?',
        answer: 'Nem! Ekkor a fokszámok összege 7 * 3 = 21 lenne, ami páratlan szám. A fokszámösszeg-tétel szerint a fokszámok összege mindig páros!',
        dangerLevel: 'Magas'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Gráfelméleti alapfogalmak', points: 4, description: 'Gráf, él, csúcs, fokszám' },
      { criterion: 'Euler-vonal és Fák tulajdonságai', points: 4, description: 'Fokszámok paritása és élek száma fában' },
      { criterion: 'Fokszámösszeg-tétel szigorú bizonyítása', points: 7, description: 'Kettős megszámlálás elve' },
      { criterion: 'Gyakorlati gráfelméleti modellezési feladat', points: 5, description: 'Gráf rajzolása és állítás igazolása' }
    ],
    applications: [
      {
        title: 'Ismeretségek száma egy társaságban',
        problem: 'Bizonyítsuk be, hogy egy 9 fős társaságban nem lehetséges, hogy mindenkinek pontosan 5 ismerőse legyen!',
        solutionLatex: '\\sum d(v) = 9 \\cdot 5 = 45. \\text{ Mivel 45 páratlan szám, ez ellentmond a kézfogási tételnek!}'
      }
    ],
    historicalContext: 'Leonhard Euler 1736-ban oldotta meg a königsbergi hidak problémáját, megalapozva a gráfelmélet tudományát.',
    visualizerType: 'graph'
  },
  {
    id: 'tétel-22',
    number: 22,
    title: 'Valószínűségszámítás és statisztika: Bayes-tétel, valószínűségi változó, várható érték, szórás, statisztikai mutatók',
    category: 'Gráfelmélet és statisztika',
    tags: ['Valószínűségszámítás', 'Klasszikus valószínűség', 'Bayes-tétel', 'Várható érték', 'Statisztika'],
    difficulty: 'Kiemelt emelt',
    summary: 'A valószínűség klasszikus és komplementer modellje. Feltételes valószínűség, teljes valószínűség tétele és a Bayes-tétel. Valószínűségi változó, várható érték, szórás és leíró statisztikai mutatók.',
    statementLatex: 'P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}, \\quad E(X) = \\sum x_i p_i, \\quad \\sigma = \\sqrt{E((X - \\mu)^2)}',
    conditionsLatex: 'P(A), P(B) > 0, \\quad \\sum p_i = 1',
    requiredDefinitions: [
      {
        term: 'Feltételes valószínűség definíciója',
        definitionLatex: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)',
        explanation: 'Az A esemény feltételes valószínűsége a B esemény bekövetkezése esetén a metszetük valószínűségének és B valószínűségének hányadosa.'
      },
      {
        term: 'Valószínűségi változó Várható értéke és Szórása',
        definitionLatex: 'E(X) = \\sum_{i=1}^n x_i p_i, \\quad D^2(X) = E(X^2) - [E(X)]^2',
        explanation: 'A várható érték a valószínűségekkel súlyozott átlag, a szórásnégyzet (variancia) a várható értéktől való eltérés négyzetének várható értéke.'
      }
    ],
    oralPresentationOutline: [
      'Definiáld a valószínűségi mezőt, az eseményeket és a klasszikus valószínűségi modellt (kedvező/összes).',
      'Definiáld a feltételes valószínűséget és a független eseményeket.',
      'Mondd ki a teljes valószínűség tételét és vezess le belőle a Bayes-tételt!',
      'Definiáld a diszkrét valószínűségi változót, annak várható értékét és szórását.',
      'Mondd el a leíró statisztika alapvető mutatóit (átlag, medián, módusz, terjedelem, szórás).'
    ],
    proofTitle: 'A Bayes-tétel levezetése a feltételes valószínűség definíciójából',
    proofSteps: [
      {
        stepNumber: 1,
        title: 'A feltételes valószínűség kétféle felírása a metszetre',
        latexContent: 'P(A \\cap B) = P(A \\mid B) \\cdot P(B) \\quad \\text{és} \\quad P(A \\cap B) = P(B \\mid A) \\cdot P(A)',
        explanation: 'Az A és B események metszetének (együttes bekövetkezésének) valószínűsége mindkét irányú feltételes valószínűséggel felírható.'
      },
      {
        stepNumber: 2,
        title: 'A két kifejezés egyenlővé tétele',
        latexContent: 'P(A \\mid B) \\cdot P(B) = P(B \\mid A) \\cdot P(A)',
        explanation: 'Mivel mindkét oldal P(A ∩ B) értékével egyenlő, egyenlővé tesszük őket.'
      },
      {
        stepNumber: 3,
        title: 'Osztás P(B)-vel',
        latexContent: 'P(A \\mid B) = \\frac{P(B \\mid A) \\cdot P(A)}{P(B)}',
        explanation: 'Mivel P(B) > 0, elosztjuk mindkét oldalt P(B)-vel. Ezzel megkaptuk a Bayes-tétel alapformuláját.'
      }
    ],
    examinerTraps: [
      {
        question: 'Mi a különbség a medián és az átlag között?',
        answer: 'Az átlag az elemek összege osztva a darabszámmal (érzékeny a kiugró értékekre), míg a medián a sorbarendezett adatok középső értéke (robusztus mutató).',
        dangerLevel: 'Közepes'
      }
    ],
    scoringBreakdown: [
      { criterion: 'Valószínűségszámítási alapfogalmak, feltételes valószínűség', points: 4, description: 'Események függetlensége' },
      { criterion: 'Bayes-tétel és Teljes valószínűség tételsor', points: 4, description: 'Hypothesis tesztelési háttér' },
      { criterion: 'Bayes-tétel szigorú levezetése', points: 7, description: 'Metszetek egyenlőségéből' },
      { criterion: 'Valószínűségi változó várható érték és szórás számítás', points: 5, description: 'Helyes diszkrét eloszlási számítás' }
    ],
    applications: [
      {
        title: 'Orvosi teszt megbízhatósága (Bayes-tétel)',
        problem: 'Ha egy teszt 99%-os pontosságú, de a betegség ritka (0.1%), mennyi a valószínűsége,hogy egy pozitív tesztű személy valóban beteg?',
        solutionLatex: 'P(\\text{Beteg}\\mid\\text{Pozitív}) = \\frac{0.99 \\cdot 0.001}{0.99 \\cdot 0.001 + 0.01 \\cdot 0.999} = \\frac{0.00099}{0.00099 + 0.00999} \\approx 9%'
      }
    ],
    historicalContext: 'Thomas Bayes (1701–1761) angol lelkész és matematikus tételét posztumusz publikálta Richard Price 1763-ban.',
    visualizerType: 'binomial'
  }
];

const fileContent = `import { Tetel } from '../types/math';

export const TETELEK: Tetel[] = ${JSON.stringify(tetelek, null, 2)};
`;

const outputPath = path.join(process.cwd(), 'src', 'data', 'tetelek.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${tetelek.length} complete tetelek in ${outputPath}`);