/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

let userChoice = prompt("Scegli pari o dispari");
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let computerNumber = randomNumber(1, 5);

function sumNumbers(num1, num2) {
  return num1 + num2;
}

function isEven(num) {
  return num % 2 === 0;
}

console.log(`L'utente ha scelto ${userChoice}`);
console.log(`L'utente ha scelto il numero ${userNumber}`);
console.log(`Il numero del computer è ${computerNumber}`);

console.log(
  `La somma dei due numeri è ${sumNumbers(userNumber, computerNumber)}`
);
console.log;
if (true) {
  console.log(
    `La somma è pari ${isEven(sumNumbers(userNumber, computerNumber))}`
  );
} /*  else {
  console.log(
    `La somma è dispari ${isEven(sumNumbers(userNumber, computerNumber))}`
  );
}
 */
