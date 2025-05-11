console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomChoice = Math.random();
  if (randomChoice < 0.34) {
    return "rock";
  } else if (randomChoice <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);
    
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    playRound(humanChoice, computerChoice);
  }

  // Declare the final winner
  if (humanScore > computerScore) {
    console.log(`You win the game! Final Score: You - ${humanScore}, Computer - ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose the game! Final Score: You - ${humanScore}, Computer - ${computerScore}`);
  } else {
    console.log(`The game is a tie! Final Score: You - ${humanScore}, Computer - ${computerScore}`);
  }
}

// Start the game
playGame();
