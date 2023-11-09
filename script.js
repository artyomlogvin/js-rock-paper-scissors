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








