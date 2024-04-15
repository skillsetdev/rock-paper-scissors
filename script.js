//////////////Functions////////////////////
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3); //returns a random integer from 0 to 2
  /*switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }*/
  return "rock";
}
function getResult(computer, user) {
  if (computer == user) {
    computerScore++;
    userScore++;
    return "draw";
  } else if (
    (computer == "rock" && user == "paper") ||
    (computer == "paper" && user == "scissors") ||
    (computer == "scissors" && user == "rock")
  ) {
    userScore++;
    return "you won!";
  } else if (
    (user == "rock" && computer == "paper") ||
    (user == "paper" && computer == "scissors") ||
    (user == "scissors" && computer == "rock")
  ) {
    computerScore++;
    return "you lost :(";
  } else {
    return "Error: wrong input";
  }
}
//////////////Gameplay///////////

let selectedOption = "";
let currentRound = 1;
let userScore = 0;
let computerScore = 0;
const column = document.querySelector("#column");
const buttons = document.querySelector("#users-selection");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const score = document.querySelector("#score");
const alert = document.createElement("div");

alert.textContent = "we started!";
alert.style.color = "white";
column.appendChild(alert);

rockButton.addEventListener("click", function () {
  if (selectedOption == "") {
    selectedOption = rockButton.id;
    runScript();
  }
});
paperButton.addEventListener("click", function () {
  if (selectedOption == "") {
    selectedOption = paperButton.id;
    runScript();
  }
});
scissorsButton.addEventListener("click", function () {
  if (selectedOption == "") {
    selectedOption = scissorsButton.id;
    runScript();
  }
});
/*buttons.addEventListener("click", (event) => {
  let target = event.target;
  if (selectedOption === "") {
    switch (target.id) {
      case "rock":
      case "paper":
      case "scissors":
        selectedOption = target.id;
        runScript();
        break;
    }
  }
});*/
let resultText, scorePointsDisplay, userPointsDisplay, computerPointsDisplay;
function runScript() {
  if (currentRound == 1) {
    const computerChoice = getComputerChoice();
    const result = getResult(computerChoice, selectedOption);
    resultText = document.createElement("p");
    resultText.textContent = result;
    resultText.style.color = "white";
    column.appendChild(resultText);
    scorePointsDisplay = document.createElement("div");
    computerPointsDisplay = document.createElement("span");
    userPointsDisplay = document.createElement("span");
    scorePointsDisplay.style.color = "white";
    userPointsDisplay.textContent = `${userScore}:`;
    computerPointsDisplay.textContent = `${computerScore}`;
    scorePointsDisplay.appendChild(userPointsDisplay);
    scorePointsDisplay.appendChild(computerPointsDisplay);
    score.appendChild(scorePointsDisplay);
  } else {
    resultText.textContent = result;
    userPointsDisplay.textContent = `${userScore}:`;
    computerPointsDisplay.textContent = `${computerScore}`;
  }
  currentRound++;
  selectedOption = "";
}
/*alert("GAME BEGAN!");


function getUserInput() {
  let userInput = prompt("Rock, Paper or Scissors?");
  if (
    userInput.trim().toLowerCase() == "rock" ||
    userInput.trim().toLowerCase() == "paper" ||
    userInput.trim().toLowerCase() == "scissors"
  ) {
    return userInput.toLowerCase();
  } else {
    return userInput;
  }
}


const userInput = getUserInput();

//

console.log(
  `${result} (Your choice: ${userInput}, Computers choice: ${computerChoice})`
);

*/
