const msg = document.getElementById("msg");
// spread operator
let boxes = [...document.querySelectorAll(".box")];
// buttons
const reset = document.getElementById("reset"); // reset while playing
const newGameBtn = document.getElementById("new-btn"); // start new game after finishing the current game

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

// player turns
let turn0 = true;
let turn1 = false;

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turn0) {
      box.style.backgroundColor = "gray";
      box.textContent = "X";
      turn0 = false;
      box.style.pointerEvents = "none";
      // check winner func goes up her
    } else {
      box.style.backgroundColor = "white";
      box.textContent = "o";
      turn0 = true;
      box.style.pointerEvents = "none";
      box.style.cursor = "not-allowed";
      disableGameAction();
    }
  });
  reset.addEventListener("click", function () {
    box.style.backgroundColor = "";
    box.textContent = "";

    gameActive = true;
  });
});

function checkWin() {
  let winnerFound = false;
  for (condition of winConditions) {
    winnerFound = true;
    msg.style.display = "block";
    const val1 = boxes[a].textContent;
    const val2 = boxes[b].textContent;
    const val3 = boxex[c].textContent;

    if (val1 === "" || val2 === "" || val3 === "") continue;

    if ((val1 === val2) === val3) {
      winnerFound = true;
      msg.textContent = `Player ${val1} Wins!`;
      msg.style.color = val1 = "X" ? "red" : "blue";

      // highlight the winning line
      boxes[a].style.backgroundColor = "#a1bc98";
      boxes[b].style.backgroundColor = "#a1bc98";
      boxes[c].style.backgroundColor = "#a1bc98";

      gameActive = false;
      enableNewGameButton();
      disableGameAction();
      return;
    }
  }
}

function disableGameAction() {
  box.style.pointerEvents = "none";
}
// 1. how to integrate the win conditions with the box elements
// 2. how to check the win conditions after each players actions
// 3. disable the cards after its clicked. For preventing the overlapping on the buttons
// how to select the box as element and then disable it
// boxes array -> box element
