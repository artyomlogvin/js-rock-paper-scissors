// Generate a computer choice
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);

  if (number == 0) {
    return 'Rock';
  } else if (number == 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// Play a single round
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')
  ) {
    let text = `You Win! ${playerSelection} beats ${computerSelection}`;
    displayResult(text);
    return 1;
  } else if (
    (computerSelection == 'Rock' && playerSelection == 'Scissors') ||
    (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
    (computerSelection == 'Paper' && playerSelection == 'Rock')
  ) {
    let text = `You Lose! ${computerSelection} beats ${playerSelection}`;
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

function playGame() {
  let playerScore = 0;
  let compScore = 0;

  // Add score and check for win condition
  function findWinner(roundResult) {
    if (roundResult == 1) {
      playerScore++;
    } else if (roundResult == 0) {
      compScore++;
    }

    displayResult('Score: ' + playerScore + ':' + compScore);

    if (playerScore == 5) {
      displayResult(
        "You' won the game with the score " + playerScore + ':' + compScore
      );
      playerScore = 0;
      compScore = 0;
    } else if (compScore == 5) {
      displayResult(
        "You've lost the game with the score " + playerScore + ':' + compScore
      );
      playerScore = 0;
      compScore = 0;
    }
  }

  // Simple buttons for player choices
  const btnRock = document.querySelector('.btn-rock');
  const btnPaper = document.querySelector('.btn-paper');
  const btnScissors = document.querySelector('.btn-scissors');

  btnRock.addEventListener('click', () => {
    let roundResult = playRound('Rock', getComputerChoice());

    findWinner(roundResult);
  });

  btnPaper.addEventListener('click', () => {
    let roundResult = playRound('Paper', getComputerChoice());

    findWinner(roundResult);
  });

  btnScissors.addEventListener('click', () => {
    let roundResult = playRound('Scissors', getComputerChoice());

    findWinner(roundResult);
  });
}

playGame();
