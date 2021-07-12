// chiedere all'utente di inserire una parola
// creacre una funzione che determini se la parola è palindroma oppure no
// se è palindroma ritornare true
// altrimenti false


var askUser = prompt('Inserisci una parola');

function isPalindrome(string) {

    var stringLenght = string.length;                           // calcola la lunghezza della stringa
    var stringHalf = Math.floor(stringLenght / 2);              // divide la stringain due

    for (var i = 0; i < stringHalf; i++) {
        if (string[i] !== string[stringLenght - 1 - i]) {       // verifica che la prima metà della stringa sia uguale alla seconda
            return false;
        }
    }

    return true;
}

document.write(isPalindrome(askUser));




