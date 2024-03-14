alert("GAME BEGAN!");
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

const computerChoice = getComputerChoice();
const userInput = getUserInput();
const result = getResult(computerChoice, userInput);
//const result = getResult();

console.log(
  `${result} (Your choice: ${userInput}, Computers choice: ${computerChoice})`
);

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
