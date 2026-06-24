let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
let attempts = 0;

function OnCheckGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (isNaN(guessedNumber) || (guessedNumber < 1) || (guessedNumber > 100)) {
        gameResult.textContent = "Invalid Input! Enter a number between 1 and 100.";
        gameResult.style.color = "#FF6B6B";
        return;
    }
    attempts++;


    if ((guessedNumber > randomNumber) && (guessedNumber > 0 && guessedNumber < 101)) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.color = "#FFD700";
    } else if ((guessedNumber < randomNumber) && (guessedNumber > 0 && guessedNumber < 101)) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.color = "#FFD700";
    } else {
        gameResult.textContent = `Congratulation! You Got It in ${attempts} attempts.`;
        gameResult.style.color = "#7CFC00";

    }
}

function onReset(){
    location.reload();
}