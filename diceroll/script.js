const buttonEl = document.getElementById("rollBtn");
const dice1El = document.getElementById("dice1");
const dice2El = document.getElementById("dice2");
const rollHistoryEl = document.getElementById("roll-history");
const winnerMsgEl = document.getElementById("winner-msg");
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
// Dice face array
const diceFace = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];

let score1 = 0;
let score2 = 0;

buttonEl.addEventListener("click", () => {
   
    const random1 = Math.floor(Math.random() * 6);
    const random2 = Math.floor(Math.random() * 6);

    const currentFace1 = diceFace[random1];
    const currentFace2 = diceFace[random2];

    //animation reset krna
    dice1El.classList.remove("roll-animation");
    dice2El.classList.remove("roll-animation");
    void dice1El.offsetWidth;
    void dice2El.offsetWidth;
    dice1El.classList.add("roll-animation");
    dice2El.classList.add("roll-animation");

    //Dice faces update
    dice1El.innerHTML = currentFace1;
    dice2El.innerHTML = currentFace2;

    
    if (random1 > random2) {
        winnerMsgEl.textContent = "🏆 Player 1 Wins!";
        score1++;
    } else if (random2 > random1) {
        winnerMsgEl.textContent = "🏆 Player 2 Wins!";
        score2++;
    } else {
        winnerMsgEl.textContent = "👑 It's a Draw!";
    }

    
    score1El.textContent = score1;
    score2El.textContent = score2;

   //history update
    const historyItem = document.createElement("li");
    historyItem.innerHTML = `Player 1: ${random1 + 1} <span>${currentFace1}</span> | Player 2: ${random2 + 1} <span>${currentFace2}</span>`;
    rollHistoryEl.prepend(historyItem);
});