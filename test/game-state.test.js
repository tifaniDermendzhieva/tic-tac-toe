import { checkGameState, gameOverState, playerTwo } from "../src/game-state.js";
import { emptyField, playerOne, waitingState } from "../src/game-state.js";

import { expect } from 'chai'

describe('checkGameState tests', () => {

    it('when X wins', () => {

        let gameState = {
            state: waitingState,
            gameField: [emptyField, playerOne, playerOne, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField],
            currentPlayer: playerOne,
            winnerMssg: ''
        }
        let index = 0;

        let expected = {
            state: gameOverState,
            gameField: [playerOne, playerOne, playerOne, emptyField, emptyField, emptyField, emptyField, emptyField, emptyField],
            currentPlayer: playerTwo,
            winnerMssg: playerOne + ' wins'
        };
        let actual = checkGameState(index, gameState);

        expect(actual.gameField).to.eql(expected.gameField);

        expect(actual.state).to.equal(expected.state);
        expect(actual.currentPlayer).to.equal(expected.currentPlayer);
        expect(actual.winnerMssg).to.equal(expected.winnerMssg);

    });

    it('when O wins', () => {

        let gameState = {
            state: waitingState,
            gameField: [emptyField, playerOne, playerOne, playerTwo, playerTwo, emptyField, emptyField, emptyField, emptyField],
            currentPlayer: playerTwo,
            winnerMssg: ''
        }
        let index = 5;

        let expected = {
            state: gameOverState,
            gameField: [emptyField, playerOne, playerOne, playerTwo, playerTwo, playerTwo, emptyField, emptyField, emptyField],
            currentPlayer: playerOne,
            winnerMssg: playerTwo + ' wins'
        };
        let actual = checkGameState(index, gameState);

        expect(actual.gameField).to.eql(expected.gameField);

        expect(actual.state).to.equal(expected.state);
        expect(actual.currentPlayer).to.equal(expected.currentPlayer);
        expect(actual.winnerMssg).to.equal(expected.winnerMssg);

    });

    it('when tie', () => {

        let gameState = {
            state: waitingState,
            gameField: [emptyField, playerOne, playerTwo,
                playerTwo, playerTwo, playerOne,
                playerOne, playerTwo, playerOne],
            currentPlayer: playerTwo,
            winnerMssg: ''
        }
        let index = 0;

        let expected = {
            state: gameOverState,
            gameField: [playerTwo, playerOne, playerTwo,
                playerTwo, playerTwo, playerOne,
                playerOne, playerTwo, playerOne],
            currentPlayer: playerOne,
            winnerMssg: 'tie'
        };
        let actual = checkGameState(index, gameState);

        expect(actual.gameField).to.eql(expected.gameField);

        expect(actual.state).to.equal(expected.state);
        expect(actual.currentPlayer).to.equal(expected.currentPlayer);
        expect(actual.winnerMssg).to.equal(expected.winnerMssg);

    });





});