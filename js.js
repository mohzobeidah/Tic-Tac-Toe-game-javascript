const X_CLASS = "x";
const CIRCLR_CLASS = "circle"
let circleTurn;

const winingMessage = document.getElementById("winingMessage");
const board = document.getElementById("board");
const cellElement = document.querySelectorAll("[data-cell]");

winingMessage.style.display = "none";

cellElement.forEach(btn => {
    btn.addEventListener("click", handleClick, { once: true });
});


function handleClick(e) {
    console.log(e);
    console.log(this);
    console.log(e.target);

    const cell = e.target;
    currentTurn = circleTurn ? CIRCLR_CLASS : X_CLASS
    placemark(cell, currentTurn)


    swapTurn()
    setHovorClass()
}

function placemark(cell, currentTurn) {
    cell.classList.add(currentTurn)
}
function swapTurn() {
    circleTurn = !circleTurn;
}

function setHovorClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLR_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLR_CLASS)
    }
    else {
        board.classList.add(X_CLASS)
    }
}