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
const numberInput1 = document.getElementById('number1Input');
const numberInput2 = document.getElementById('number2Input');
const numberInput3 = document.getElementById('number3Input');
const numberInput4 = document.getElementById('number4Input');
const numberInput5 = document.getElementById('number5Input');
let messageInput = document.getElementById('message');
const totNumbers = 5;
const numbers = [];
console.log(numbers)
//Variabili input
let numbersInput = [];

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
    if (timeLeft == 0) {
        clearInterval(timerInterval);
        timerEl.innerHTML = 'Tempo per memorizzare scaduto!';
        //Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
        listNumbersEl.classList.add('d-none');
        form.classList.remove('d-none');
        titleGameEl.innerHTML = 'Inserisci i numeri che hai visto in precedenza'
    }
}

timerInterval = setInterval(updateTimer, 1000);


/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile. */

form.addEventListener('submit', function (e) {
    const number1 = parseInt(numberInput1.value);
    const number2 = parseInt(numberInput2.value);
    const number3 = parseInt(numberInput3.value);
    const number4 = parseInt(numberInput4.value);
    const number5 = parseInt(numberInput5.value);
    //inserisco i valori dei numeri inseriti nel form nell'array
    numbersInput.push(number1, number2, number3, number4, number5);
    console.log(numbersInput);
    e.preventDefault();
    let matchedNumbersCount = 0;
    for (let a = 0; a < numbersInput.length; a++) {
        if (numbersInput.includes(numbers[a])) {
            matchedNumbersCount++;
            console.log(matchedNumbersCount)
        }
    }
    if (matchedNumbersCount == numbers.length) {
        messageInput.innerText = `Hai indovinato tutti i numeri`;
    } else {
        messageInput.innerText = `Hai indovinato ${matchedNumbersCount} numeri, riprova a indovinarli tutti.
        I numeri da indovinare erano : ${numbers}, quelli che hai inserito ${numbersInput}`;
    }
}
)

/* BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form. */
