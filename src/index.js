
import { tikTakToe } from "./game";
const rootElement = document.getElementById('root');

let gameState = {
    state: 'waiting',
    gameField: [" ", " ", " ", " ", "  ", " ", " ", " ", " "],
    currentPlayer: 'X',
    winnerMssg: ''
}

function renderGameState() {

    switch (gameState.state) {

        case 'waiting': renderWaitingState(); break;
        case 'playing': renderGameField(); break;
        case 'gameOver': renderGameOver(); break;

    }

}

function renderWaitingState() {
    const playBtn = document.createElement('button');
    playBtn.textContent = 'PLAY';

    const onPlay = (e) => {
        gameState.state = 'playing';
        renderGameState(gameState);
        playBtn.removeEventListener('click', onPlay);
    }

    playBtn.addEventListener('click', onPlay);

    rootElement.replaceChildren(playBtn);

}

function renderGameField() {

    let gameFieldCopy = gameState.gameField.slice();

    const tableElement = document.createElement('table');
    tableElement.style.border = '2px solid black';

    let dataCellIndex = 0;
    for (let i = 0; i < 3; i++) {
        const tableRow = document.createElement('tr');

        for (let j = 0; j < 3; j++) {

            const tableData = document.createElement('td');
            tableData.style.border = '1px solid black';

            let currentField = gameFieldCopy.shift();
            tableData.textContent = currentField;

            const onClick = (index) => {
                return (e) => {

                    let currentGameField = gameState.gameField;
                    currentGameField[index] = gameState.currentPlayer;

                    gameState.gameField = currentGameField;

                    if (gameState.currentPlayer === 'X') {
                        gameState.currentPlayer = 'O';
                    } else {
                        gameState.currentPlayer = 'X';
                    }

                    switch (tikTakToe(gameState.gameField)) {

                        case 'X':
                            gameState.winnerMssg = 'X wins';
                            gameState.state = 'gameOver';
                            break;
                        case 'O':
                            gameState.winnerMssg = 'O wins';
                            gameState.state = 'gameOver';
                            break;
                        case 'tie':
                            gameState.winnerMssg = 'tie';
                            gameState.state = 'gameOver';
                            break;

                        default: break;
                    };
                    renderGameState();
                };
            }

            tableData.addEventListener('click', onClick(dataCellIndex));
            tableRow.appendChild(tableData);

            dataCellIndex++;
        }

        tableElement.appendChild(tableRow)

    }

    rootElement.replaceChildren(tableElement);

}

function resetGameState() {
    gameState = {
        state: 'waiting',
        gameField: [" ", " ", " ", " ", "  ", " ", " ", " ", " "],
        currentPlayer: 'X',
        winnerMssg: ''
    }
    renderGameState();
}

function renderGameOver() {
    const gameOverMssg = document.createElement('h3');
    gameOverMssg.textContent = gameState.winnerMssg;
    rootElement.replaceChildren(gameOverMssg);

    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Play again'

    resetBtn.addEventListener('click', resetGameState);
    rootElement.appendChild(resetBtn);
}


renderGameState();