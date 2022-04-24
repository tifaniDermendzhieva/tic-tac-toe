const rootElement = document.getElementById('root');

let gameState = {
    state: 'waiting',
    gameField: [" - ", " ", " ", " ", "  ", " ", " ", " ", " - "],
}

function renderGameState(gameState) {

    switch (gameState.state) {

        case 'waiting': renderWaitingState(); break;
        case 'playing': renderGameField(gameState.gameField); break;
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

    rootElement.appendChild(playBtn);

}

function renderGameField(gameField) {

    let gameFieldCopy = gameField.slice();


    const tableElement = document.createElement('table');
    for (let i = 0; i < 3; i++) {
        const tableRow = document.createElement('tr');

        for (let j = 0; j < 3; j++) {

            const tableData = document.createElement('td');

            let currentField = gameFieldCopy.shift();
            tableData.textContent = currentField;
            tableRow.appendChild(tableData);
        }

        tableElement.appendChild(tableRow)

    }

    rootElement.replaceChildren(tableElement);

}

renderGameState(gameState);