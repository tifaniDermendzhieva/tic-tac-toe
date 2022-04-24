const rootElement = document.getElementById('root');

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

let input = ["X", "X", "X", "O", "O ", "X", "X", "X", "O"];

renderGameField(input);





