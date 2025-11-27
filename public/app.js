const msg = document.getElementById("msg");
// buttons
const newGameBtn = document.getElementById("new-game");
const reset = document.getElementById("reset");
// boxes
const boxes = [...document.querySelectorAll(".box")];

const winConditions = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

let turnX = true;
let gameActive = true;

// let playerXMoves = [];
// let playerOMoves = [];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "" || !gameActive) return;

    if (turnX) {
      box.textContent = "X";
      box.style.backgroundColor = "gray";
      box.style.color = "white";
    } else {
      box.textContent = "o";
      box.style.color = "red";
    }
    box.style.pointerEvents = "none";
    turnX != turnX;
    // checkWinner();
  });
  reset.addEventListener("click", () => {
    box.textContent = "";
    turnX = true;
    gameActive = true;
  });
});

// condition
// process
// check winner
// check is draw
// reset
