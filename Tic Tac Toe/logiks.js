//Check all
function whoIsTheWinner() {
    if (winner != "x" && winner != "y") checkRow();
    if (winner != "x" && winner != "y") checkCol();
    if (winner != "x" && winner != "y") checkDiag();

}
//Sprawdzenie kolumny
function checkCol() {
    for (var i = 0; i < size; i++)
        for (var j = 0; j < size; j++)
            if (mainLogicArray[i][j] == mainLogicArray[i][j + 1] && mainLogicArray[i][j + 1] == mainLogicArray[i][j + 2] && mainLogicArray[i][j] != "z" && winner == "z") {
                console.log(mainLogicArray[i][j]);
                winner = mainLogicArray[i][j];
                break;
            }
}
//Sprawdzanie wiersza, tu zwraca dziwny błąd
function checkRow() {
    for (var i = 0; i < size - 2; i++)
        for (var j = 0; j < size; j++)
            if (mainLogicArray[i][j] == mainLogicArray[i + 1][j] && mainLogicArray[i + 1][j] == mainLogicArray[i + 2][j] && mainLogicArray[i][j] != "z" && mainLogicArray[i + 1][j] != "z" && winner == "z") {
                console.log(mainLogicArray[i][j]);
                winner = mainLogicArray[i][j];
                break;
            }
}
//Sprawdzenie Diagonala
function checkDiag() {
    for (var i = 0; i < size - 2; i++) {
        for (var j = 0; j < size - 2; j++) {
            if (mainLogicArray[i][j] == mainLogicArray[i + 1][j + 1] && mainLogicArray[i + 1][j + 1] == mainLogicArray[i + 2][j + 2] && winner == "z") {
                console.log(mainLogicArray[i][j] + " " + mainLogicArray[i + 1][j + 1] + " " + mainLogicArray[i + 2][j + 2])
                console.log(mainLogicArray[i][j] != "z");
                if (mainLogicArray[i + 1][j + 1] != "z") {
                    winner = mainLogicArray[i + 1][j + 1];
                    console.log("\n obrot petli" + mainLogicArray[i][j]);
                }
            }
        }
    }
    if (winner == "z") {
        for (var i = 0; i < size - 2 ; i++) {
            for (var j = 0; j < size - 2; j++) {
                if (mainLogicArray[i][j + 2] == mainLogicArray[i + 1][j + 1] && mainLogicArray[i + 1][j + 1] == mainLogicArray[i + 2][j] && winner == "z") {
                    if (mainLogicArray[i + 1][j + j] != "z") winner = mainLogicArray[i + 1][j + 1];
                }
            }
        }
    }
    return winner;
}
console.log("Logika załadowana!");