let playerScore = 0;
let computerScore = 0;
let roundsToWin = 0;
let gameActive = false;

const resultsDiv = document.getElementById('results');
const buttonsDiv = document.getElementById('buttons');
const startBtn = document.getElementById('start');
const roundsInput = document.getElementById('rounds');
const buttons = document.querySelectorAll('#buttons button');

startBtn.addEventListener('click', startGame);

function startGame() {
  roundsToWin = parseInt(roundsInput.value);
  if (isNaN(roundsToWin) || roundsToWin <= 0) {
    alert('Please enter a valid number of rounds.');
    return;
  }

  playerScore = 0;
  computerScore = 0;
  gameActive = true;
  resultsDiv.textContent = '';
  buttonsDiv.style.display = 'block';
  updateResults('Game started! Make your choice.');
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (gameActive) {
      playRound(button.id, computerPlay());
    }
  });
});

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  let result = '';

  if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    result = `You win this round! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
  }

  updateResults(result);

  if (playerScore === roundsToWin || computerScore === roundsToWin) {
    declareWinner();
  }
}

function updateResults(roundResult) {
  resultsDiv.innerHTML = `
    <p>${roundResult}</p>
    <p>Score — You: ${playerScore} | Computer: ${computerScore}</p>
  `;
}

function declareWinner() {
  gameActive = false;
  let finalMessage =
    playerScore === roundsToWin
      ? '<strong>You won the game! 🎉</strong>'
      : '<strong>Computer wins the game! 🤖</strong>';

  resultsDiv.innerHTML += `<p>${finalMessage}</p>`;
}
