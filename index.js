const cells = document.querySelectorAll('.cell');
const player1ScoreSpan = document.querySelector('.player1score');
const player2ScoreSpan = document.querySelector('.player2score');
const restartBtn = document.querySelector('.restart');

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let player1 = [];
let player2 = [];

let score = {
    player1: 0,
    player2: 0
}

let flag = true; // to swap the turns

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        let cell = cells[i].innerHTML;
        if(flag) {
            cell.length == 0 ? addCellPlayer1(i) : cell = cell;
        } else {
            if(cells[i].innerHTML.length == 0) {
                cell.length == 0 ? addCellPlayer2(i) : cell = cell;
            }
        }
        // checkWinner();
    })
    
}

const addCellPlayer1 = (i) => {
    cells[i].innerHTML = "X";
    player1.push(i);
    flag = false; 
}

const addCellPlayer2 = (i) => {
    cells[i].innerHTML = "O";
    player2.push(i);
    flag = true; 
}
const checkWinner = () => {
    winCombinations.find((item) => {
        if(item.filter((i) => player1.includes(i).length === 3 )) {
            alert("Player 1 Won");
            ++score.player1;
            drawScore();
            clearField();
        } else if (item.filter((i) => player2.includes(i).length === 3)) {
            alert("Player 2 Won");
            ++score.player2;
            drawScore();
            clearField();
        };
        return;
    })
}


const drawScore = () => {
    player1ScoreSpan.innerHTML = "Player 1: " + score.player1;
    player2ScoreSpan.innerHTML = "Player 2: " + score.player2;
}

drawScore();

function clearField() {
    for(let j = 0; j < cells.length; j++) {
        cells[j].innerHTML = "";
    }
    player1 = [];
    player2 = [];
    flag = true;
}

restartBtn.addEventListener('click', () => {
    clearField();
})
