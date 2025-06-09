/*

Descrizione: Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

*/

const listNumbersEl = document.getElementById('listNumbers');
const titleGameEl = document.getElementById('titleNumbers');
const timerEl = document.getElementById('timer');
const form = document.getElementById('formNumbers');
const totNumbers = 5;
const numbers = []; // funzione per generare la lista

//Visualizzare in pagina 5 numeri casuali.

function genRandonNum() {
    for (let i = 0; i < totNumbers; i++) {
        const thisNumber = Math.floor(Math.random() * 1000 + 1);
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
let timeLeft = 30;

function updateTimer() {
    timerEl.innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerEl.innerHTML = 'Tempo per memorizzare scaduto!';
        //Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
        listNumbersEl.classList.add('d-none');
        form.classList.remove('d - none');
        titleGameEl.innerHTML = 'Inserisci i numeri che hai visto in precedenza'
    }
}

timerInterval = setInterval(updateTimer, 1000);

/* Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile. */



/* BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form. */
