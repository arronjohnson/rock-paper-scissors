const choices = ['rock', 'paper', 'scissors'];

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
    return `Draw! You both chose ${playerSelection}`;
  }
  
  // check win conditions for the player
  let rockWin = playerSelection === 'rock' && computerSelection == 'scissors';
  let paperWin = playerSelection === 'paper' && computerSelection == 'rock';
  let scissorsWin = playerSelection === 'scissors' && computerSelection == 'paper';
  
  if (rockWin || paperWin || scissorsWin) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  
  // if the player didn't win then the computer must have
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

let playerSelection = prompt("Enter your choice of rock, paper, or scissors:", "") || 'rock';
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
