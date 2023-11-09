# ESERCIZIO
**Snack 1**
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
**Snack2**
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
**Snack Bonus**
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Snack 1:
**Raccolta dati:**
1. Creare l'array di object per le bici
    le key saranno nome e peso
2. Creare la const container, collegata alla classe container
3. Creare una variabile minPeso a cui associare il primo object dell'array

**Svolgimento**
creare un ciclo forEach dell'array bici e come elemento in ingresso curBici
    - se curBici.peso è minore di minPeso.peso allora la variabile min peso prenderà il valore della variabile minore
    - altrimenti terrà lo stesso valore

**Output**
inserire traminte template literal in html il testo da noi inserito con le chiavi di peso e nome della bici con il peso minore

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## Snack 2:
**Raccolta dati:**
1. Creare l'array di object per le squadre
    le key saranno nome, puntiFatti e falli. puntiFatti e falli devono avere valore = 0

**Svolgimento**
creare un ciclo forEach dell'array squadre e come elemento in ingresso team
    - associare a team.falli la funzione getRndInteger che genera un num random fra 2 num (min e max)
    - associare a team.puntiFatti la funzione getRndInteger che genera un num random fra 2 num (min e max)
utilizzando la funzione .map andiamo a creare un nuovo array in cui andiamo a inserire il nome delle squadre (preso dall'array precedente) e i falli subiti.

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

## Snack Bonus:
**Raccolta dati:**
1. Creare l'array listaArr contenente variabili casuali
2. Creare la const min e max


**Svolgimento**
creare una funzione "creaArr" con parametri in ingresso min, max e l'array
    dichiarare in nuovo array che andremo a creare
    creare un ciclo forEach 
        se l'indice è compreso fra in num min e il max allora pushare nel nuovo array l'elemento associato all'indice
    associare alla variabile newLista la funzione creaArray