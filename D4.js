/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  const areaRettangolo = l1 * l2;

  return areaRettangolo;
};
// esemio con l1 = 5 e l2 = 8
console.log(area(5, 8));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (numInt1, numInt2) {
  const currentSum = numInt1 + numInt2;
  if (numInt1 !== numInt2) {
    return currentSum;
  } else {
    return currentSum * 3;
  }
};

console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (num1) {
  const numDiff = num1 - 19;
  if (num1 > 19) {
    return numDiff * 3;
  } else {
    return numDiff;
  }
};

console.log(crazyDiff(22));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(27));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (String) {
  const newString = "EPICODE" + " " + String;
  if (String.startsWith("EPICODE")) {
    return String;
  } else {
    return newString;
  }
};

console.log(epify("CIAO CIAO"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (numPos) {
  if (numPos < 0) {
    return "Riprova con un numero positivo";
  } else if (numPos % 3 === 0 || numPos % 7 === 0) {
    return "il numero è un multiplo di 3 o di 7";
  } else {
    return "il numero NON è un multiplo di 3 o di 7 ";
  }
};

console.log(check3and7(5));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myString = "EPICODE";

const reverseString = function (String) {
  const newString = myString.split("").reverse().join("");

  return newString;
};

console.log(reverseString());

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (phrase) {
  const arrPhrase = phrase.split(" ");
  let newPhrase = "";
  for (let i = 0; i < arrPhrase.length; i++) {
    newPhrase +=
      arrPhrase[i].charAt(0).toUpperCase() + arrPhrase[i].slice(1) + " ";
  }
  return newPhrase;
};

console.log(upperFirst("ciao sono andrea"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (String) {
  const newString = String.slice(1, -1);
  return newString;
};

console.log(cutString("ciao sono giovannina"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  const randomNums = [];
  for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(Math.random() * 11);
    randomNums.push(randomNum);
  }
  return randomNums;
};
console.log(giveMeRandom(80));
