const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const emptyField = " ";
export function tikTakToe(gameField) {
  if (gameField.length !== 9) {
    throw new Error("invalid game field");
  }


  for (let i = 0; i < winningCombos.length; i++) {
    let currentCombo = winningCombos[i];

    let firstElement = gameField[currentCombo[0]];
    let secondElement = gameField[currentCombo[1]];
    let thirdElement = gameField[currentCombo[2]];

    if (
      firstElement === secondElement &&
      secondElement === thirdElement &&
      thirdElement !== emptyField
    ) {
      return firstElement;
    }
  }

  if (!gameField.includes(emptyField)) {
    return "tie";
  }

  return "pending";
}


