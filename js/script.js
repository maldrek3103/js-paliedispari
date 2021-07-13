// chiedere all'utente di inserire una parola
// creacre una funzione che determini se la parola è palindroma oppure no
// se è palindroma ritornare true
// altrimenti false

//==================================================== PALINDROME ==========================================================================

// var askUser = prompt('Inserisci una parola');

// function isPalindrome(string) {

//     var stringLenght = string.length;                           // calcola la lunghezza della stringa
//     var stringHalf = Math.floor(stringLenght / 2);              // divide la stringain due

//     for (var i = 0; i < stringHalf; i++) {
//         if (string[i] !== string[stringLenght - 1 - i]) {       // verifica che la prima metà della stringa sia uguale alla seconda
//             return false;
//         }
//     }

//     return true;
// }

// document.write(isPalindrome(askUser));

//============================================================================================================================================


// chiede all'utente pari o dispari e sceglie un numero da 1 a 5
// generare un numero random da 1 a 5 per il computer (tramite funzione)
// sommiamo i due numeri
// stabilire il vincitore in base alla scelta dell'utente (pari / dispar)
// dichiarare chi ha vinto

//==================================================== ODD/EVEN GAME ==========================================================================

var userChoice = prompt('Scegli pari o dispari');                                                                      //chiede all'utente di scegliere pari o dispari

while (userChoice.toLowerCase().trim() !== 'pari' && userChoice.toLowerCase().trim() !== 'dispari') {           // valida l'input dell'utente
    var userChoice = prompt('Scegli pari o dispari');
}

var userNumber = prompt('Scegli un numero tra 1 e 5');                                                                     // chiede all'utente di inserire un numero compreso tra 1 e 5

while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {                                                 // valida il secondo input dell'utente
    var userNumber = prompt('Scegli pari o dispari');
}

var cpuNumber = getRandomNumber(1, 5);                                                                          // genera un numero random        

function getRandomNumber(min, max) {                                                                               // genera un numero random da 1 a 5
    return Math.floor(Math.random() * (max - min + 1) + min);

}
function isEven(num) {                                                                                             // determina se un numero è pari o dispari
    if (sum % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

var sum = parseInt(userNumber) + cpuNumber;                                                                     // somma i due numeri 

if (isEven(sum) && userChoice.toLowerCase() === 'pari' || !isEven(sum) && userChoice.toLowerCase() === 'dispari') { // controlla se la somma è pari o dispari e chi ha vinto
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}

//==============================================================================================================================================