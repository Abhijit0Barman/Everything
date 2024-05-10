// Get all the required elements
const gameCells = document.querySelectorAll('.grid-cell');
const currentPlayer = document.querySelector('.current-player');
const gameOverText = document.querySelector('.game-over-text');
const restartButton = document.querySelector('.restart');

// Initialize game state
let isGameActive = true;
let currentPlayerSymbol = 'x'; // 'x' starts the game

// Add event listeners to game cells
gameCells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (isGameActive && !cell.classList.contains('disabled')) {
      // Mark the cell with the current player's symbol
      cell.classList.add(currentPlayerSymbol);
      cell.classList.add('disabled');
      cell.textContent = currentPlayerSymbol.toUpperCase();

      // Check for win or draw
      if (checkWin()) {
        endGame(`${currentPlayerSymbol.toUpperCase()} wins!`);
      } else if (checkDraw()) {
        endGame('Draw!');
      } else {
        // Switch to the next player's turn
        currentPlayerSymbol = currentPlayerSymbol === 'x' ? 'o' : 'x';
        currentPlayer.textContent = `Its ${currentPlayerSymbol.toUpperCase()}'s turn`;
      }
    }
  });
});

// Add event listener to restart button
restartButton.addEventListener('click', restartGame);

// Function to check for a win
function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameCells[a].classList.contains(currentPlayerSymbol) &&
      gameCells[b].classList.contains(currentPlayerSymbol) &&
      gameCells[c].classList.contains(currentPlayerSymbol)
    ) {
      return true;
    }
  }

  return false;
}

// Function to check for a draw
function checkDraw() {
  return Array.from(gameCells).every(cell => cell.classList.contains('disabled'));
}

// Function to end the game
function endGame(message) {
  isGameActive = false;
  gameOverText.textContent = message;
}

// Function to restart the game
function restartGame() {
  isGameActive = true;
  currentPlayerSymbol = 'x';
  currentPlayer.textContent = "Its X's turn";
  gameOverText.textContent = "";
  gameCells.forEach(cell => {
    cell.classList.remove('x', 'o', 'disabled');
    cell.textContent = "";
  });
}
