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
  if (computer === user) {
    return "draw";
  } else if (
    (computer == "rock" && user == "paper") ||
    (computer == "paper" && user == "scissors") ||
    (computer == "scissors" && user == "rock")
  ) {
    return "you won!";
  } else if (user != "rock" || user != "paper" || user != "scissors") {
    return "Error: wrong input";
  } else {
    return "you lost :(";
  }
}
//////////////Gameplay///////////

let selectedOption = "";
const column = document.querySelector("#column");
const buttons = document.querySelector("#users-selection");

const alert = document.createElement("div");
alert.textContent = "we started";
column.appendChild(alert);

buttons.addEventListener("click", (event) => {
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
});
function runScript() {
  const computerChoice = getComputerChoice();
  const result = getResult(computerChoice, selectedOption);
  const resultText = document.createElement("p");
  resultText.textContent = result;
  column.appendChild(resultText);
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
