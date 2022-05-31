// keep track of the scores until an overall winner is decided
let playerScore = 0;
let computerScore = 0;

// return a randomly generated choice for the computer
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomInt = Math.floor(Math.random() * 3);
  return choices[randomInt];
}

/*
  play a round of the game using the player's inputted choice
  and a randomly generated choice for the computer
  
  valid choices are 'rock', 'paper', or 'scissors'
  
  return the winner as a string
*/
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "draw";
  }

  // check win conditions for the player
  const rockWin = playerSelection === "rock" && computerSelection == "scissors";
  const paperWin = playerSelection === "paper" && computerSelection == "rock";
  const scissorsWin =
    playerSelection === "scissors" && computerSelection == "paper";

  if (rockWin || paperWin || scissorsWin) {
    playerScore++;
    return "player";
  }

  // if the player didn't win then the computer must have
  computerScore++;
  return "computer";
}

// ui implementation
const outputPara = document.querySelector(".output p");
const startingMessage = outputPara.innerHTML;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => onClick(e))
);

function onClick(e) {
  const playerSelection = e.target.className;
  const computerSelection = computerPlay();
  const roundWinner = playRound(playerSelection, computerSelection);

  updateScores();
  updateOutput(playerSelection, computerSelection, roundWinner);

  if (playerScore == 5 || computerScore == 5) {
    setTimeout(resetGame, 100);
  }
}

function updateOutput(playerSelection, computerSelection, roundWinner) {
  let text;
  switch (roundWinner) {
    case "player":
      text = `You win! ${playerSelection} beats ${computerSelection}`;
      break;
    case "computer":
      text = `You lose! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      text = `Draw! You both chose ${playerSelection}`;
  }
  outputPara.textContent = text;
}

function updateScores() {
  const playerSpan = document.querySelector(".playerScore");
  const computerSpan = document.querySelector(".computerScore");
  playerSpan.textContent = playerScore;
  computerSpan.textContent = computerScore;
}

function resetGame() {
  const overallWinner =
    playerScore > computerScore
      ? "You are the overall winner!"
      : "You lost... the computer is the overall winner :(";
  alert(overallWinner);
  playerScore = 0;
  computerScore = 0;
  updateScores();
  outputPara.innerHTML = startingMessage;
}
