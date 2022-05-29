const choices = ["rock", "paper", "scissors"];

// return a randomly generated choice for the computer
function computerPlay() {
  let randomInt = Math.floor(Math.random() * 3);

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
  let rockWin = playerSelection === "rock" && computerSelection == "scissors";
  let paperWin = playerSelection === "paper" && computerSelection == "rock";
  let scissorsWin =
    playerSelection === "scissors" && computerSelection == "paper";

  if (rockWin || paperWin || scissorsWin) {
    return "player";
  }

  // if the player didn't win then the computer must have
  return "computer";
}

/*
  play a game consisting of 5 sequential rounds
  
  scores are updated after each round until the overall
  winner is found and results printed
*/
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // play 5 rounds of the game
  for (let i = 0; i < 5; i++) {
    let playerSelection =
      prompt("Enter your choice of rock, paper, or scissors:", "") || "rock";
    let computerSelection = computerPlay();
    let roundWinner = playRound(playerSelection, computerSelection);

    if (roundWinner === "draw") {
      console.log(`Draw! You both chose ${playerSelection}`);
    } else if (roundWinner === "player") {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
    } else {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
      computerScore++;
    }
  }

  // determine the overall winner using the scores and print the results
  let overallWinner;
  if (playerScore === computerScore) {
    overallWinner = "Draw";
  } else {
    overallWinner = playerScore > computerScore ? "Player" : "Computer";
  }
  console.log(`[Scores] Player: ${playerScore} | Computer: ${computerScore}`);
  console.log(`The overall winner is: ${overallWinner}`);
}
