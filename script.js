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
        let text = 
        `You Win! ${playerSelection} beats ${computerSelection}`;
        displayResult(text);
        return 1;
    } else if (((computerSelection == "Rock") && 
    (playerSelection == "Scissors")) || 
    ((computerSelection == "Scissors") && 
    (playerSelection == "Paper")) || 
    ((computerSelection == "Paper") && 
    (playerSelection == "Rock"))) {
        let text = 
        `You Lose! ${computerSelection} beats ${playerSelection}`;
        displayResult(text);
        return 0;
    } else {
        let text = 'Tie!';
        displayResult(text);
        return -1;
    }
}

// Display a text in the result container
function displayResult(resultString) {
    const resultCont = document.querySelector('.result-container');
    const newResult = document.createElement('p');
    newResult.textContent = resultString;
    resultCont.appendChild(newResult);
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








