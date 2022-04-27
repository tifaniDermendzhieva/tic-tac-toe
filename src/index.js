
import { checkGameState, emptyField, playerOne, playingState, waitingState, gameOverState } from "./game-state.js";
const rootElement = document.getElementById('root');

let gameState = {
    state: waitingState,
    gameField: [emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField],
    currentPlayer: playerOne,
    winnerMssg: ''
}

function renderGameState() {

    switch (gameState.state) {

        case waitingState: renderWaitingState(); break;
        case playingState: renderGameField(); break;
        case gameOverState: renderGameOver(); break;

    }

}

function renderWaitingState() {
    const playBtn = document.createElement('button');
    playBtn.textContent = 'PLAY';

    const onPlay = (e) => {
        gameState = { ...gameState, state: playingState };
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
                const handlerFunction = (e) => {
                    gameState = checkGameState(index, gameState);
                    renderGameState();
                    e.currentTarget.removeEventListener('click', handlerFunction);
                };
                return handlerFunction;
            }

            if (currentField === emptyField) {
                tableData.addEventListener('click', onClick(dataCellIndex));
            }
            tableRow.appendChild(tableData);

            dataCellIndex++;
        }

        tableElement.appendChild(tableRow)

    }

    rootElement.replaceChildren(tableElement);

}

function resetGameState() {
    gameState = {
        state: waitingState,
        gameField: [emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField],
        currentPlayer: playerOne,
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