// Step 2: Computer's choice function
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) return "rock";
  if (randomNum === 2) return "paper";
  return "scissors";
}

// Step 3: Human's choice function
function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

// Step 4: Score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Play a single round
function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`Current Scores - You: ${humanScore}, Computer: ${computerScore}`);
}

// Step 6: Play the entire game
function playGame() {
  console.log("Welcome to Rock, Paper, Scissors! Let's play 5 rounds.");

  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("\nGame Over!");
  if (humanScore > computerScore) {
    console.log("You are the overall winner! 🎉");
  } else if (computerScore > humanScore) {
    console.log("Computer wins overall! 🤖");
  } else {
    console.log("It's a tie overall!");
  }
}

// Start the game
playGame();