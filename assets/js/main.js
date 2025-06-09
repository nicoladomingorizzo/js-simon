/*

Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

*/

//Variabili elementi pagina
const listNumbersEl = document.getElementById('listNumbers');
const titleGameEl = document.getElementById('titleNumbers');
const timerEl = document.getElementById('timer');
const form = document.getElementById('formNumbers');
const numberInput1 = document.getElementById('number-1');
const numberInput2 = document.getElementById('number-2');
const numberInput3 = document.getElementById('number-3');
const numberInput4 = document.getElementById('number-4');
const numberInput5 = document.getElementById('number-5');
const errorMessageInput = document.getElementById('errorMessage');
const totNumbers = 5;
const numbers = []; // funzione per generare la lista
//Variabili input
const numbersInput = []; // funzione per generare la lista di numeri dati dagli imput

//Visualizzare in pagina 5 numeri casuali.
function genRandonNum() {
    for (let i = 0; i < totNumbers; i++) {
        const thisNumber = Math.floor(Math.random() * 100 + 1);
        numbers.push(thisNumber);
    }
    return numbers
}
const randonNumber = genRandonNum();

for (let i = 0; i < numbers.length; i++) {
    const liEl = document.createElement('li');
    liEl.innerText = numbers[i];
    listNumbersEl.append(liEl);
}



//Da lì parte un timer di 30 secondi.
let timerInterval;
let timeLeft = 29;

function updateTimer() {
    timerEl.innerHTML = timeLeft;

    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerEl.innerHTML = 'Tempo per memorizzare scaduto!';
        //Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
        listNumbersEl.classList.add('d-none');
        form.classList.remove('d-none');
        titleGameEl.innerHTML = 'Inserisci i numeri che hai visto in precedenza'
    }
}

timerInterval = setInterval(updateTimer, 1000);

const number1 = numberInput1.value;
const number2 = numberInput2.value;
const number3 = numberInput3.value;
const number4 = numberInput4.value;
const number5 = numberInput5.value;
//inserisco i valori dei numeri inseriti nel form nell'array
numbersInput.push(number1, number2, number3, number4, number5);
/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile. */

form.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let a = 0; a < numbersInput.length; a++) {
        const thisNumberInput = numbersInput[a];
        if (thisNumberInput == numbers) {
            errorMessageInput.innerText = `hai indovinato questo numero: ${thisNumberInput}`;
        }
        errorMessageInput.innerText = `mi dispiace, il numero: ${thisNumberInput} non è corretto`;
    }
}
)

/* BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form. */
