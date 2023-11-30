const resultCont = document.querySelector('.result-container');

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
    if (((playerSelection == "Rock") && 
    (computerSelection == "Scissors")) || 
    ((playerSelection == "Scissors") && 
    (computerSelection == "Paper")) || 
    ((playerSelection == "Paper") && 
    (computerSelection == "Rock"))) {
        const newResult = document.createElement('p');
        newResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        resultCont.appendChild(newResult);
        return 1;
    } else if (((computerSelection == "Rock") && 
    (playerSelection == "Scissors")) || 
    ((computerSelection == "Scissors") && 
    (playerSelection == "Paper")) || 
    ((computerSelection == "Paper") && 
    (playerSelection == "Rock"))) {
        const newResult = document.createElement('p');
        newResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        resultCont.appendChild(newResult);
        return 0;
    } else {
        const newResult = document.createElement('p');
        newResult.textContent = 'Tie!';
        resultCont.appendChild(newResult);
        return -1;
    }
}

// Simple buttons for player choices
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');

btnRock.addEventListener('click', () => playRound('Rock',
getComputerChoice()));

btnPaper.addEventListener('click', () => playRound('Paper',
getComputerChoice()));

btnScissors.addEventListener('click', () => playRound('Scissors',
getComputerChoice()));








