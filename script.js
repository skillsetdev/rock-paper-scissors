//////////////Functions////////////////////
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3); //returns a random integer from 0 to 2
  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
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

function clearButtons() {
  rockButton.style.border = "0px";
  paperButton.style.border = "0px";
  scissorsButton.style.border = "0px";
  rockButton.style.outline = "0px";
  paperButton.style.outline = "0px";
  scissorsButton.style.outline = "0px";
}

function colorButtons(computer, user) {
  clearButtons();
  switch (user) {
    case "rock":
      rockButton.style.border = "4px solid CadetBlue";
      break;
    case "paper":
      paperButton.style.border = "4px solid CadetBlue";
      break;
    case "scissors":
      scissorsButton.style.border = "4px solid CadetBlue";
      break;
  }
  switch (computer) {
    case "rock":
      rockButton.style.outline = "2px solid Red";
      break;
    case "paper":
      paperButton.style.outline = "2px solid Red";
      break;
    case "scissors":
      scissorsButton.style.outline = "2px solid Red";
      break;
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

function runScript() {
  let computerChoice = getComputerChoice();
  let result = getResult(computerChoice, selectedOption);
  let resultText = document.getElementById("result-text");
  resultText.textContent = result;
  resultText.style.color = "white";
  column.appendChild(resultText);

  colorButtons(computerChoice, selectedOption);

  let userPointsDisplay = document.getElementById("user-score");
  let computerPointsDisplay = document.getElementById("computer-score");
  userPointsDisplay.style.color = "Aquamarine";
  computerPointsDisplay.style.color = "LightCoral";
  userPointsDisplay.textContent = `You: ${userScore}`;
  computerPointsDisplay.textContent = `Computer: ${computerScore}`;

  currentRound++;
  let resultDisplay = document.getElementById("round");
  resultDisplay.textContent = `Round: ${currentRound}`;

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
