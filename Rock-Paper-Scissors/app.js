const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};
console.log(getUserChoice("Paper"));
console.log(getUserChoice("Fork"));

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";

  }
}
console.log(getComputerChoice());

function determineWinner(getUserChoice, getComputerChoice) {
 if (getUserChoice === getComputerChoice) {
   return "The game is a tie!";
 }

 if (getUserChoice === "rock") {
   if (getComputerChoice === "paper") {
     return "The computer won!";
   } else {
     return "You won!";
   }
 }

 if (getUserChoice === "paper") {
   if (getComputerChoice === "scissors") {
     return "The computer won!";
   } else {
     return "You won!";
   }
 }

 if (getUserChoice === "scissors") {
   if (getComputerChoice === "rock") {
     return "The computer won!";
   } else {
     return "You won!";
   }
 }
}

console.log(determineWinner("paper", "scissors"));
console.log(determineWinner("paper", "paper"));
console.log(determineWinner("paper", "rock"));
console.log(determineWinner("rock", "rock"));
console.log(determineWinner("scissors", "rock"));
console.log(determineWinner("paper", "rock"));