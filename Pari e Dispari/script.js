/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

let userChoice;
let counter = 0;
while (userChoice !== "pari" && userChoice !== "dispari" && counter <= 10) {
  counter++;
  userChoice = prompt("Immetti solo pari o dispari").toLowerCase();
}

let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
while (userNumber !== 0 && userNumber > 5 && counter <= 10) {
  counter++;
  userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

let sum = 0;

let computerNumber = randomNumber(1, 5);

console.log(`L'utente ha scelto ${userChoice}`);
console.log(`L'utente ha scelto il numero ${userNumber}`);
console.log(`Il numero del computer è ${computerNumber}`);

sum = sumNumbers(userNumber, computerNumber);

console.log(`La somma dei due numeri è ${sum}`);
if (isEven(sum)) {
  console.log(`La somma è pari`);
} else {
  console.log(`La somma è dispari`);
}

//function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sumNumbers(num1, num2) {
  return num1 + num2;
}

function isEven(num) {
  return num % 2 === 0;
}
