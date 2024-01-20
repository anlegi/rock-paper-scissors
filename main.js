function getComputerChoice() {
  const randomElement = array[(Math.floor(Math.random() * array.length))]
  return randomElement;
}

function singleRound(playerSelection_) {
  let playerSelection = playerSelection_;

  let computerSelection = getComputerChoice().toLowerCase();

  player.textContent = ""
  com.textContent = ""

  if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock"
  }
  else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper"
  }
  else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors"
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors"
  }
  else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper"
  }
  else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock"
  }
  else
    return "It's a draw. Try again."
}

function game() {
  let numberRounds = 5;
  for (let i = 0; i < numberRounds; i++) {
    console.log(singleRound());
    console.log(playerScore, computerScore);
  }
}

function counter() {
  pScore.textContent = playerScore
  cScore.textContent = computerScore

  if (playerScore == 5 || computerScore == 5) {
    if (computerScore > playerScore){
      com.textContent = "The computer won"
    }
    else {
      player.textContent = "You won the game!!!"
    }
    playerScore = 0
    computerScore = 0

    pScore.textContent = ""
    cScore.textContent = ""
  }
}

// array of choices
let array = ["Rock", "Paper", "Scissors"];

// player and computer Scores
let playerScore = 0;
let computerScore = 0;

// selects result div
let result = document.querySelector(".result");

// get player selection
let playerSelection = "";

let com = document.querySelector(".computer");
let player = document.querySelector(".player");

let pScore = document.querySelector(".playerscore");
let cScore = document.querySelector(".computerscore");

playerSelection1 = document.querySelector("#rock");
playerSelection1.addEventListener("click", () => {
  playerSelection = "rock";
  result.textContent = singleRound(playerSelection)

  counter()
})

playerSelection2 = document.querySelector("#paper");
playerSelection2.addEventListener("click", () => {
  playerSelection = "paper";
  result.textContent = singleRound(playerSelection)

  counter()
})

playerSelection3 = document.querySelector("#scissors");
playerSelection3.addEventListener("click", () => {
  playerSelection = "scissors";
  result.textContent = singleRound(playerSelection)

  counter()
})
