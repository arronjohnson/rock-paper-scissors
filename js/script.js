const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3);
    
    return choices[randomInt];
}
