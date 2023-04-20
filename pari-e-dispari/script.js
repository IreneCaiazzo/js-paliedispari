// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


/* utente sceglie numero da 1 a 5;
utente prova a indovinare se la somma del suo numero e quello del computer darà come risultato un numero pari o dispari (scommessa);
computer genera numero random da 1 a 5 (funzione);
sommare i due numeri;
confronto il risultato della somma e quello della scommessa, se coincidono l'utente ha vinto, se differiscono ha perso.*/

//utente sceglie un numero da 1 a 5

const numUser = parseInt(prompt('scegli un numero intero da 1 a 5 compresi'));
console.log('il numero che hai scelto è: ' + numUser);

// computer genera un numero da 1 a 5

let compRandom = Math.floor(Math.random() * (5) ) + 1;
console.log('il numero del computer è: ' + compRandom);

// somma dei due numeri
function sommaNumeri (a, b){
    
    const sum = a + b;
    return sum;

}

const somma = sommaNumeri(numUser, compRandom);

console.log('la loro somma è: ' + somma);

//scommessa

const usersBet = document.querySelector('#pod').value;

function parODis(somma){

    if (somma % 2 == 0){
        console.log ('pari');
    } 
    else {
        console.log ('dispari');
    }

}

btn.addEventListener('click',
    function (){
        const usersBet = document.querySelector('#pod').value;
        if (parODis(somma) === usersBet.value){
            console.log('hai vinto');
        }
        else{
            console.log('hai perso');
        }
    }
)

