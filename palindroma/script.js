// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//chiedo a user una parola
const word = prompt('scrivi una parola');
console.log(word);

//creare la reverse word

const arrWord = word.split("");
console.log(arrWord);

const arrRevWord = arrWord.reverse();
console.log(arrRevWord);

const revWord = arrRevWord.join('');
console.log(revWord);

//confrontare word e reversew

if (revWord === word){
    console.log('palindromo');
}else{
    console.log('nope');
}