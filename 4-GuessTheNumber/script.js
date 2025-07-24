let randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("button");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame === true) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (!playGame) return;
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
    userInput.value = "";
    return;
  } else if (guess < 1 || guess > 100) {
    alert("Please Enter Number Between 1-100");
    userInput.value = "";
    return;
  } else {
    prevGuess.push(guess);
  }

  if (numGuess === 10) {
    displayGuess(guess);
    displayMessage(`Game Over! , Random Number was ${randomNumber}`);
    endGame();
  } else {
    checkGuess(guess);
    displayGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it Right, Congrats.`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
