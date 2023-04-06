/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function area(l1,l2) {
    let area=(l1*l2);
    return area;
};

console.log(area(2,3)) */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function crazySum(num1,num2) {
    let sum = num1+num2;
    if (num1===num2){
        sum = sum*3;
    }
    return sum
};

console.log(crazySum(4,4)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function crazyDiff(num1) {
    let diff = num1 - 19;
    if (diff>19){
        diff = diff* 3;
    }
    return diff
}

console.log(crazyDiff(1)) */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function boundary(num1) {
    if(num1!== parseInt(num1)) return "inserire numero intero"
    if(((num1>=20)&&(num1<=100))||(num1=400)) return true;
}

console.log(boundary(19))
 */
/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function codify(name1) {
    let codeString = "code" + name1;
    if ( name1.startsWith("code")) {
        return name1;
    } else {
        return codeString;
    }
}

console.log(codify("codeale")); */

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /*    function check3and7(num1){
    if ((parseInt(num1) === num1)&&(num1>0)) {
     if((num1%3 === 0)||(num1%7 === 0)) return true
     if((num1%3 !== 0)||(num1%7 !== 0)) return false
    }else{
        return "inserisci numero intero positivo"
    }
}

console.log(check3and7(3)) */

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function reverseString(string) {
    let splitString = string.split("");
    let reverse = splitString.reverse();
    let reverseString = reverse.join("");
    return reverseString;
}

console.log(reverseString("macchina")) */

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function upperFirst (string){
    return string.toLowerCase().replace(/(^|\s)\S/g, (l) => l.toUpperCase());
}

console.log(upperFirst("ciao come va")) */

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function cutString(string){
    let splitString = (string.split(""));
    let partString = (splitString.slice(1,(splitString.length-1)));
    let last = partString.join("")
    return last
}

console.log(cutString("alessio")); */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function giveMeRandom(n){
    let array = [];
    for (let i = 0; i < n; i++) {
        let random = parseInt(Math.random()*10)
        array.push(random);
    }
    return array
}

console.log(giveMeRandom(5)) */