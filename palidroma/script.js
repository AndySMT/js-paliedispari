/* Palindroma
Chiedere all’utente di inserire una Word
Creare una funzione per capire se la Word inserita è palindroma */

let word = prompt("inserisci una Parola");

function palindromeWord() {
  const char = word.split("");

  const charInvert = char.reverse();

  const invertedWord = charInvert.join("");

  return word === invertedWord;
}

console.log(word);

console.log(palindromeWord());
