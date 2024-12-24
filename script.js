// Step 1: Verify JavaScript linkage
console.log("Hello World");

// Step 2: Get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Step 3: Get human's choice
function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

// Step 4: Declare score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Play a single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return "tie";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    return "computer";
  }
}

// Step 6: Play the entire game
function playGame() {
  humanScore = 0;
  computerScore = 0;

  console.log("Welcome to Rock Paper Scissors! Best of 5 rounds wins.");

  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log("\nGame Over!");
  console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations, you won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game. Better luck next time!");
  } else {
    console.log("It's a tie game!");
  }
}

// Start the game
playGame();
