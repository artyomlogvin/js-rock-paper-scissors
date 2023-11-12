// Generate a computer choice
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
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else if (((computerSelection == "Rock") && (playerSelection == "Scissors")) || ((computerSelection == "Scissors") && (playerSelection == "Paper")) || ((computerSelection == "Paper") && (playerSelection == "Rock"))) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    } else {
        console.log("Tie!");
        return -1;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for(i = 0; i < 5; i++) {
        let roundResult = playRound(getUserChoice(), getComputerChoice());

        if (roundResult == 1) {
            playerScore++;
        } else if (roundResult == 0) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('Player Wins!\n' + "Player : Computer\n" + playerScore + " : " + computerScore);
    } else if (playerScore < computerScore) {
        console.log('Computer Wins!\n' + "Player : Computer\n" + playerScore + " : " + computerScore);
    } else {
        console.log('Tie!\n' + "Player : Computer\n" + playerScore + " : " + computerScore);
    }
}

playGame();







