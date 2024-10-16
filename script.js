// Mapping numbers to choices
const choices = { 1: "Rock", 2: "Paper", 3: "Scissors" };

// Function to get a random computer choice between 1 and 3
function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

// Function to get the user's choice via prompt
function getUserChoice() {
  let choice;
  while (true) {
    choice = parseInt(prompt("Enter your choice (1: Rock, 2: Paper, 3: Scissors). Enter any number above 3 to quit:"));
    if (choice > 3) return null; // Exit signal
    if ([1, 2, 3].includes(choice)) return choice;
    console.log("Invalid input. Please enter 1, 2, or 3.");
  }
}

// Function to determine the winner of a single round
function determineWinner(user, computer) {
  if (user === computer) return "tie";
  if (
    (user === 1 && computer === 3) || // Rock beats Scissors
    (user === 3 && computer === 2) || // Scissors beats Paper
    (user === 2 && computer === 1)    // Paper beats Rock
  ) {
    return "user";
  }
  return "computer";
}

// Main function to run the game
function playGame() {
  console.log("Welcome to Rock, Paper, Scissors!");
  console.log("Enter any number above 3 if you want to quit.");

  // Initialize scores
  let userScore = 0;
  let computerScore = 0;

  while (true) {
    const userChoice = getUserChoice();
    if (userChoice === null) {
      // Alert the final scores and determine the overall winner
      let finalMessage = `Final Scores:\nUser: ${userScore}\nComputer: ${computerScore}\n`;
      if (userScore > computerScore) {
        finalMessage += "You are the overall winner! 🎉";
      } else if (computerScore > userScore) {
        finalMessage += "Computer wins overall! 🤖";
      } else {
        finalMessage += "It's a tie overall!";
      }
      alert(finalMessage);
      console.log("Thanks for playing!");
      break;
    }

    const computerChoice = getComputerChoice();
    console.log(`You chose: ${choices[userChoice]}`);
    console.log(`Computer chose: ${choices[computerChoice]}`);

    const result = determineWinner(userChoice, computerChoice);
    if (result === "user") {
      userScore++;
      console.log("You win this round!");
    } else if (result === "computer") {
      computerScore++;
      console.log("Computer wins this round!");
    } else {
      console.log("It's a tie this round!");
    }

    console.log(`Current Scores - User: ${userScore}, Computer: ${computerScore}`);
  }
}

// Start the game
playGame();
