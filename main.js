function getComputerChoice() {
  const randomElement = array[(Math.floor(Math.random() * array.length))]
  return randomElement;
}

function singleRound() {
  // let playerSelection = prompt("Rock, Paper or Sciss"ors?")
  let playerSelection = "";
  playerSelection1 = document.querySelector("#rock");
  playerSelection1.addEventListener("click", () => {
    playerSelection = "rock";
  })

  playerSelection2 = document.querySelector("#paper");
  playerSelection2.addEventListener("click", () => {
    playerSelection = "paper";
  })

  playerSelection3 = document.querySelector("#scissors");
  playerSelection3.addEventListener("click", () => {
    playerSelection = "scissors";
  })

  let computerSelection = getComputerChoice().toLowerCase();

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
  let numberRounds = 3;
  for (let i = 0; i < numberRounds; i++) {
    console.log(singleRound());
    console.log(playerScore, computerScore);
  }
}

// array of choices
let array = ["Rock", "Paper", "Scissors"];

// player and computer Scores
let playerScore = 0;
let computerScore = 0;



console.log(singleRound());
