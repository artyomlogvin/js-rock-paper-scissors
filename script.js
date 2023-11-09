// Generate the computer choice
function getComputerChoice(){

    let number = Math.floor(Math.random() * 3);

    if (number == 0) {
        return "Rock";
    } else if (number == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Get user input
function getUserChoice() {

    let input = prompt("Enter your choice:").toLowerCase();
    
    input = input[0].toUpperCase() + input.slice(1);

    return input;
}

// Play a single round
function playRound(playerSelection, computerSelection){
    if (((playerSelection == "Rock") && (computerSelection == "Scissors")) || ((playerSelection == "Scissors") && (computerSelection == "Paper")) || ((playerSelection == "Paper") && (computerSelection == "Rock"))) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (((computerSelection == "Rock") && (playerSelection == "Scissors")) || ((computerSelection == "Scissors") && (playerSelection == "Paper")) || ((computerSelection == "Paper") && (playerSelection == "Rock"))) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "Tie!";
    }
}






