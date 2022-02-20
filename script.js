"use strict"


let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

document.getElementById("die1").setAttribute("src", "assets/images/dice" + randomNumber1 + ".png");
document.getElementById("die2").setAttribute("src", "assets/images/dice" + randomNumber2 + ".png");

function displayWinner() {
    if (randomNumber1 > randomNumber2) {
        document.getElementById("hero").innerText = "🚩 Player 1 Wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.getElementById("hero").innerText = "Player 2 Wins! 🚩"
    } else if (randomNumber1 === randomNumber2) {
        document.getElementById("hero").innerText = "Draw!"
    }
}

displayWinner();
