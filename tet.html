const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
<div class="grid">
  <canvas id="board" class="game-board"></canvas>
  <div class="right-column">
    <div>
      <h1>TETRIS</h1>
      <p>Score: <span id="score">0</span></p>
      <p>Lines: <span id="lines">0</span></p>
      <p>Level: <span id="level">0</span></p>
      <canvas id="next" class="next"></canvas>
    </div>
    <button onclick="play()" class="play-button">Play</button>
  </div>
</div>
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// 상수를 사용해 캔버스의 크기를 계산한다.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
<link 
  href="https://fonts.googleapis.com/css?family=Press+Start+2P" 
  rel="stylesheet"
/>
* {
  font-family: 'Press Start 2P', cursive;
}

.grid {
  display: grid;
  grid-template-columns: 320px 200px;
}

.right-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.game-board {
  border: solid 2px;
}

.play-button {
  background-color: #4caf50;
  font-size: 16px;
  padding: 15px 30px;
  cursor: pointer;
}
class Board {
  grid;
  
  // 새 게임이 시작되면 보드를 초기화한다.
  reset() {
    this.grid = this.getEmptyBoard();
  }
  
  // 0으로 채워진 행렬을 얻는다.
  getEmptyBoard() {
    return Array.from(
      {length: ROWS}, () => Array(COLS).fill(0)
    );
  }
}
let board = new Board();

function play() {
  board.reset();
  console.table(board.grid);
}
[2, 0, 0],
[2, 2, 2],
[0, 0, 0];
class Piece {
  x;
  y;
  color;
  shape;
  ctx;
  
  constructor(ctx) {
    this.ctx = ctx;
    this.spawn();
  }
  
  spawn() {
    this.color = 'blue';
    this.shape = [
      [2, 0, 0], 
      [2, 2, 2], 
      [0, 0, 0]
    ];
    
    // Starting position.
    this.x = 3;
    this.y = 0;
  }
}
draw() {
  this.ctx.fillStyle = this.color;
  this.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      // this.x, this.y는 shape의 상단 왼쪽 좌표이다
      // shape 안에 있는 블록 좌표에 x, y를 더한다.
      // 보드에서 블록의 좌표는 this.x + x가 된다.
      if (value > 0) {
        this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
      }
    });
  });
}
function play() {
  board = getEmptyBoard();
  let piece = new Piece(ctx);
  piece.draw();
  
  board.piece = piece;
}
move(p) {
  this.x = p.x;
  this.y = p.y;
}
const KEY = {
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40
}
Object.freeze(KEY);
const X = 'x';
const a = { [X]: 5 };
console.log(a.x); // 5
moves = {
  [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
  [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
  [KEY.UP]:    p => ({ ...p, y: p.y + 1 })
};
const p = this.moves[event.key](this.piece);
document.addEventListener('keydown', event => {
  if (moves[event.keyCode]) {  
    // 이벤트 버블링을 막는다.
    event.preventDefault();
    
    // 조각의 새 상태를 얻는다.
    let p = moves[event.keyCode](board.piece);
    
    if (board.valid(p)) {    
      // 이동이 가능한 상태라면 조각을 이동한다.
      board.piece.move(p);
      
      // 그리기 전에 이전 좌표를 지운다.
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
      
      board.piece.draw();
    }
  }
});
valid(p) {
  return p.shape.every((row, dy) => {
    return row.every((value, dx) => {
      let x = p.x + dx;
      let y = p.y + dy;
      return (
        this.isEmpty(value) ||
       (this.insideWalls(x) &&
        this.aboveFloor(y)
      );
    });
  });
}
if (this.valid(p)) {
  this.piece.move(p);
}
const KEY = {  
  SPACE: 32,
  // ...
}

moves = {  
  [KEY.SPACE]: p => ({ ...p, y: p.y + 1 })
  // ...
};

// 이벤트 리스너 안에서
if (event.keyCode === KEY.SPACE) {
  // 하드 드롭한다.
  while (board.valid(p)) {
    board.piece.move(p);   
    p = moves[KEY.DOWN](board.piece);
  }
}
// 행렬을 변환한다. p는 Piece의 인스턴스이다.
for (let y = 0; y < p.shape.length; ++y) {
  for (let x = 0; x < y; ++x) {
    [p.shape[x][y], p.shape[y][x]] = 
    [p.shape[y][x], p.shape[x][y]];
  }
}

// 열 순서대로 뒤집는다.
p.shape.forEach(row => row.reverse());
rotate(p){
  // 불변성을 위해 JSON으로 복사
  let clone: IPiece = JSON.parse(JSON.stringify(p));
  
  // 알고리즘 처리
  
  return clone;
}
[KEY.UP]: (p) => this.rotate(p)
const COLORS = [  
  'cyan',
  'blue',
  'orange',
  'yellow',
  'green',
  'purple',
  'red'
];

const SHAPES = [  
  [
    [0, 0, 0, 0], 
    [1, 1, 1, 1],
    [0, 0, 0, 0], 
    [0, 0, 0, 0]
  ], 
  [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0]
  ],
  // 등등
];
randomizeTetrominoType(noOfTypes) {
  return Math.floor(Math.random() * noOfTypes);
}
const typeId = this.randomizeTetrominoType(COLORS.length);
this.shape = SHAPES[typeId];
this.color = COLORS[typeId];
animate() {
  this.piece.draw();
  requestAnimationFrame(this.animate.bind(this));
}
time = { start: 0, elapsed: 0, level: 1000 };
function animate(now = 0) {
  // 지난 시간을 업데이트한다.
  time.elapsed = now - time.start;
  
  // 지난 시간이 현재 레벨의 시간을 초과했는지 확인한다.
  if (time.elapsed > time.level) {
  
    // 현재 시간을 다시 측정한다.
    time.start = now;   
    
    this.drop();  
  }
  
  // 새로운 상태로 그리기 전에 보드를 지운다.
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
  
  board.draw();  
  requestId = requestAnimationFrame(animate);
}
freeze() {
  this.piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value > 0) {
        this.grid[y + this.piece.y][x + this.piece.x] = value;
      }
    });
  });
}
drawBoard() {
  this.grid.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value > 0) {
        this.ctx.fillStyle = COLORS[value];
        this.ctx.fillRect(x, y, 1, 1);
      }
    });
  });
}
draw() {
  this.piece.draw();
  this.drawBoard();
}
board[p.y + y][p.x + x] === 0;
this.grid.forEach((row, y) => {

  // 모든 값이 0보다 큰지 비교한다.
  if (row.every(value => value > 0)) {
  
    // 행을 삭제한다.
    this.grid.splice(y, 1);
    
    // 맨 위에 0으로 채워진 행을 추가한다.
    this.grid.unshift(Array(COLS).fill(0));
  } 
});
const POINTS = {
  SINGLE: 100,
  DOUBLE: 300,
  TRIPLE: 500,
  TETRIS: 800,
  SOFT_DROP: 1,
  HARD_DROP: 2
}
Object.freeze(POINTS);
let accountValues = {
  score: 0,
  lines: 0
}

function updateAccount(key, value) {
  let element = document.getElementById(key);
  if (element) {
    element.textContent = value;
  }
}

let account = new Proxy(accountValues, {
  set: (target, key, value) => {
    target[key] = value;
    updateAccount(key, value);
    return true;
  }
}
if (event.keyCode === KEY.SPACE) {
  while (board.valid(p)) {
    account.score += POINTS.HARD_DROP;
    board.piece.move(p);
    p = moves[KEY.DOWN](board.piece);
  }
} else if (board.valid(p)) {
  board.piece.move(p);
  if (event.keyCode === KEY.DOWN) {
    account.score += POINTS.SOFT_DROP;
  }
}
getLineClearPoints(lines) {  
  return lines === 1 ? Points.SINGLE :
         lines === 2 ? Points.DOUBLE :  
         lines === 3 ? Points.TRIPLE :     
         lines === 4 ? Points.TETRIS : 
         0;
}
clearLines() {
  let lines = 0;
  this.board.forEach((row, y) => {    
    if (row.every(value => value !== 0)) {      
      lines++; // 지워진 줄 수를 증가시킨다.
      this.board.splice(y, 1); 
      this.board.unshift(Array(COLS).fill(0));
    }  
  });  
  if (lines > 0) {    
    // 지워진 줄이 있다면 점수를 더한다.
    account.score += this.getLineClearPoints(lines);  
  }
}
const LINES_PER_LEVEL = 10;

const LEVEL = {
  0: 800,
  1: 720,
  2: 630,
  3: 550,
  // ...
}

Object.freeze(LEVEL);
let accountValues = {
  score: 0,
  lines: 0,
  level: 0
}
function resetGame() {
  account.score = 0;
  account.lines = 0;
  account.level = 0;
  board = this.getEmptyBoard();
}
(account.level + 1) * lineClearPoints;
if (lines > 0) {
  // 지워진 줄과 레벨로 점수를 계산한다.
  
  account.score += this.getLinesClearedPoints(lines, this.level);
  account.lines += lines;
  
  // 다음 레벨에 도달할 수 있는 줄 수가 되었다면
  if (account.lines >= LINES_PER_LEVEL) {
    
    // 레벨 값을 증가시킨다.
    account.level++;
    
    // 다음 레벨을 시작하기 위해 줄을 지운다.
    account.lines -= LINES_PER_LEVEL;
    
    // 게임 속도를 올린다.
    time.level = Level[account.level];
  }
}
if (this.piece.y === 0) {
  this.gameOver();
  return;
}
function gameOver() {
  cancelAnimationFrame(requestId);
  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(1, 3, 8, 1.2);
  this.ctx.font = '1px Arial';
  this.ctx.fillStyle = 'red';
  this.ctx.fillText('GAME OVER', 1.8, 4);
}
<canvas id="next" class=”next”></canvas>
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');
// 4개 블록을 위한 캔버스 사이즈를 설정한다.
ctxNext.canvas.width = 4 * BLOCK_SIZE;
ctxNext.canvas.height = 4 * BLOCK_SIZE;
ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
this.piece = this.next;
this.next = new Piece(this.ctx);
this.next.drawNext(this.ctxNext);
