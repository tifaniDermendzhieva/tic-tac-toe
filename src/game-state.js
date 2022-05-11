
import { ticTacToe, noOneWins, continuePlaying } from './game.js';

export const playerOne = 'X';
export const playerTwo = 'O';

export const playingState = 'playing';
export const waitingState = 'waiting';
export const gameOverState = 'gameOver';

export function checkGameState(index, gameState) {

    const newGameState = { ...gameState };

    const currentGameField = newGameState.gameField;
    currentGameField[index] = newGameState.currentPlayer;

    newGameState.gameField = currentGameField;

    if (newGameState.currentPlayer === playerOne) {
        newGameState.currentPlayer = playerTwo;
    } else {
        newGameState.currentPlayer = playerOne;
    }

    switch (ticTacToe(newGameState.gameField)) {

        case playerOne:
            newGameState.winnerMssg = playerOne + ' wins';
            newGameState.state = gameOverState;
            break;
        case playerTwo:
            newGameState.winnerMssg = playerTwo + ' wins';
            newGameState.state = gameOverState;
            break;
        case noOneWins:
            newGameState.winnerMssg = 'TIE';
            newGameState.state = gameOverState;
            break;

        case continuePlaying:
            break;

        default:
            newGameState.state = gameOverState;
            break;
    };

    return newGameState;
}