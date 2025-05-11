let humanScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const winnerElement = document.getElementById("winner");

// Function to get the computer's choice
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

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  let result = '';

  if (humanChoice === computerChoice) {
    result = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  // Update score and result in the DOM
  playerScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  winnerElement.textContent = result;

  // Announce the winner if any player reaches 5 points
  if (humanScore === 5) {
    winnerElement.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerElement.textContent = "Game Over! Computer wins!";
    disableButtons();
  }
}

// Disable the buttons once the game is over
function disableButtons() {
  document.querySelectorAll('.button').forEach(button => {
    button.disabled = true;
  });
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
});

document.getElementById("paper").addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
});

document.getElementById("scissors").addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
});
