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

const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');

btnRock.addEventListener('click', () => playRound('Rock',
getComputerChoice()));

btnPaper.addEventListener('click', () => playRound('Paper',
getComputerChoice()));

btnScissors.addEventListener('click', () => playRound('Scissors',
getComputerChoice()));








