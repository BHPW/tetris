document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('tetrisCanvas');
  const context = canvas.getContext('2d');
  const grid = 30;
  const tetrisColumns = canvas.width / grid;
  const tetrisRows = canvas.height / grid;

  // Define the shapes of the tetrominoes
  const tetrominoes = [
    [[1, 1, 1, 1]],         // I
    [[1, 1, 1], [0, 1, 0]], // T
    [[1, 1, 1], [1, 0, 0]], // L
    [[1, 1, 1], [0, 0, 1]], // J
    [[1, 1], [1, 1]],       // O
    [[0, 1, 1], [1, 1, 0]], // S
    [[1, 1, 0], [0, 1, 1]]  // Z
  ];

  // Colors for each tetromino
  const tetrominoColors = [
    '#00FFFF', // Cyan
    '#800080', // Purple
    '#FFA500', // Orange
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#FF0000'  // Red
  ];

  let board = createBoard();
  let currentTetromino = getRandomTetromino();
  let currentTetrominoColor = tetrominoColors[Math.floor(Math.random() * tetrominoColors.length)];
  let currentX = 0;
  let currentY = 0;

  function createBoard() {
    const board = [];
    for (let row = 0; row < tetrisRows; row++) {
      board[row] = [];
      for (let col = 0; col < tetrisColumns; col++) {
        board[row][col] = '#f0f0f0';
      }
    }
    return board;
  }

  function getRandomTetromino() {
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    return tetrominoes[randomIndex];
  }

  function drawTetromino() {
    for (let row = 0; row < currentTetromino.length; row++) {
      for (let col = 0; col < currentTetromino[row].length; col++) {
        if (currentTetromino[row][col]) {
          drawSquare(currentX + col, currentY + row, currentTetrominoColor);
        }
      }
    }
  }

  function drawSquare(x, y, color) {
    context.fillStyle = color;
    context.fillRect(x * grid, y * grid, grid, grid);
    context.strokeStyle = '#000';
    context.strokeRect(x * grid, y * grid, grid, grid);
  }

  function drawBoard() {
    for (let row = 0; row < tetrisRows; row++) {
      for (let col = 0; col < tetrisColumns; col++) {
        drawSquare(col, row, board[row][col]);
      }
    }
  }

  function clearBoard() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function mergeTetromino() {
    for (let row = 0; row < currentTetromino.length; row++) {
      for (let col = 0; col < currentTetromino[row].length; col++) {
        if (currentTetromino[row][col]) {
          board[currentY + row][currentX + col] = currentTetrominoColor;
        }
      }
    }
  }

  function canMoveDown() {
    for (let row = 0; row < currentTetromino.length; row++) {
      for (let col = 0; col < currentTetromino[row].length; col++) {
        if (currentTetromino[row][col]) {
          if (currentY + row >= tetrisRows - 1 || board[currentY + row + 1][currentX + col] !== '#f0f0f0') {
            return false;
          }
        }
      }
    }
    return true;
  }

  function moveDown() {
    if (canMoveDown()) {
      currentY++;
    } else {
      mergeTetromino();
      currentTetromino = getRandomTetromino();
      currentTetrominoColor = tetrominoColors[Math.floor(Math.random() * tetrominoColors.length)];
      currentX = 0;
      currentY = 0;
    }
  }

  function moveRight() {
    if (canMoveRight()) {
      currentX++;
    }
  }

  function moveLeft() {
    if (canMoveLeft()) {
      currentX--;
    }
  }

  function canMoveRight() {
    for (let row = 0; row < currentTetromino.length; row++) {
      for (let col = 0; col < currentTetromino[row].length; col++) {
        if (currentTetromino[row][col]) {
          if (currentX + col >= tetrisColumns - 1 || board[currentY + row][currentX + col + 1] !== '#f0f0f0') {
            return false;
          }
        }
      }
    }
    return true;
  }

  function canMoveLeft() {
    for (let row = 0; row < currentTetromino.length; row++) {
      for (let col = 0; col < currentTetromino[row].length; col++) {
        if (currentTetromino[row][col]) {
          if (currentX + col <= 0 || board[currentY + row][currentX + col - 1] !== '#f0f0f0') {
            return false;
          }
        }
      }
    }
    return true;
  }

  function rotateTetromino() {
    const newTetromino = [];
    for (let col = 0; col < currentTetromino[0].length; col++) {
      newTetromino[col] = [];
      for (let row = 0; row < currentTetromino.length; row++) {
        newTetromino[col][row] = currentTetromino[currentTetromino.length - 1 - row][col];
      }
    }
    return newTetromino;
  }

  function canRotate() {
    const rotatedTetromino = rotateTetromino();
    for (let row = 0; row < rotatedTetromino.length; row++) {
      for (let col = 0; col < rotatedTetromino[row].length; col++) {
        if (rotatedTetromino[row][col]) {
          const newX = currentX + col;
          const newY = currentY + row;
          if (newX < 0 || newX >= tetrisColumns || newY >= tetrisRows || board[newY][newX] !== '#f0f0f0') {
            return false;
          }
        }
      }
    }
    return true;
  }

  function handleKeyPress(event) {
    switch (event.keyCode) {
      case 37: // Left arrow key
        moveLeft();
        break;
      case 39: // Right arrow key
        moveRight();
        break;
      case 40: // Down arrow key
        moveDown();
        break;
      case 38: // Up arrow key
        if (canRotate()) {
          currentTetromino = rotateTetromino();
        }
        break;
    }
  }

  function gameLoop() {
    clearBoard();
    moveDown();
    drawBoard();
    drawTetromino();
  }

  document.addEventListener('keydown', handleKeyPress);

  setInterval(gameLoop, 500); // Adjust the interval to change the speed of the game
});
