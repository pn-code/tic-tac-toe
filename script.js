//gameboard module
const gameBoardMod = (function(){

    const boxes = Array.from(document.querySelectorAll(".box"));
    const boxText = boxes.map(box => [box.innerText]);
    const gameBoard = [];
    gameBoard.push(boxText);
    
    //function to update board
    function updateGameBoard(){
        let boxText = boxes.map(box => [box.innerText]);
        gameBoard.splice(0)
        gameBoard.push(boxText);
    }

    //event listener for clicks
    boxes.map(box => {
        box.addEventListener("click", box => {
            switch(currentPlayer){
                case Player1:
                    if (box.target.innerText === "O" || box.target.innerText === "X"){
                        alert("This box is already taken. Try again...")
                        return;
                    };
                    box.target.innerText = "X";
                    updateGameBoard();
                    checkWin()
                    checkTie()
                    endGame()
                    changePlayer()
                    break;
                case Player2:
                    if (box.target.innerText === "O" || box.target.innerText === "X"){
                        alert("This box is already taken. Try again...")
                        return;
                    };
                    box.target.innerText = "O";
                    updateGameBoard();
                    checkWin()
                    checkTie()
                    endGame()
                    changePlayer()
                    break;
            }
        })
    })

    return {gameBoard, boxes};

})();

//player factory function
function player(playerName, playSymbol) {
    return {
        playerName: playerName,
        playSymbol: playSymbol
    };
};

const Player1 = player("Player 1", "X");
const Player2 = player("Player 2", "O");


//loose variables I still need to tuck in
let currentPlayer = Player1;
let winningPlayer = "";

const grid = document.querySelector("#grid")
const display = document.querySelector("#display-text")


//functions for handleClick
function checkWin() {
//Winning Conditions for Player 1
    //horizontal conditions
    if (gameBoardMod.gameBoard[0][0][0] === "X" &&
        gameBoardMod.gameBoard[0][1][0] === "X" &&
        gameBoardMod.gameBoard[0][2][0] === "X")
        winningPlayer = Player1;

    if (gameBoardMod.gameBoard[0][3][0] === "X" &&
        gameBoardMod.gameBoard[0][4][0] === "X" &&
        gameBoardMod.gameBoard[0][5][0] === "X")
        winningPlayer = Player1;

    if (gameBoardMod.gameBoard[0][6][0] === "X" &&
        gameBoardMod.gameBoard[0][7][0] === "X" &&
        gameBoardMod.gameBoard[0][8][0] === "X")
        winningPlayer = Player1;    

    //vertical conditions
    if (gameBoardMod.gameBoard[0][0][0] === "X" &&
        gameBoardMod.gameBoard[0][3][0] === "X" &&
        gameBoardMod.gameBoard[0][6][0] === "X")
        winningPlayer = Player1;
    
    if (gameBoardMod.gameBoard[0][1][0] === "X" &&
        gameBoardMod.gameBoard[0][4][0] === "X" &&
        gameBoardMod.gameBoard[0][7][0] === "X")
        winningPlayer = Player1;
    
    if (gameBoardMod.gameBoard[0][2][0] === "X" &&
        gameBoardMod.gameBoard[0][5][0] === "X" &&
        gameBoardMod.gameBoard[0][8][0] === "X")
        winningPlayer = Player1;

    //diagonal conditions
    if (gameBoardMod.gameBoard[0][0][0] === "X" &&
        gameBoardMod.gameBoard[0][4][0] === "X" &&
        gameBoardMod.gameBoard[0][8][0] === "X")
        winningPlayer = Player1;

    if (gameBoardMod.gameBoard[0][2][0] === "X" &&
        gameBoardMod.gameBoard[0][4][0] === "X" &&
        gameBoardMod.gameBoard[0][6][0] === "X")
        winningPlayer = Player1;

//Winning Conditions for Player 2
    //horizontal conditions
    if (gameBoardMod.gameBoard[0][0][0] === "O" &&
        gameBoardMod.gameBoard[0][1][0] === "O" &&
        gameBoardMod.gameBoard[0][2][0] === "O")
        winningPlayer = Player2;

    if (gameBoardMod.gameBoard[0][3][0] === "O" &&
        gameBoardMod.gameBoard[0][4][0] === "O" &&
        gameBoardMod.gameBoard[0][5][0] === "O")
        winningPlayer = Player2;

    if (gameBoardMod.gameBoard[0][6][0] === "O" &&
        gameBoardMod.gameBoard[0][7][0] === "O" &&
        gameBoardMod.gameBoard[0][8][0] === "O")
        winningPlayer = Player2;    

    //vertical conditions
    if (gameBoardMod.gameBoard[0][0][0] === "O" &&
        gameBoardMod.gameBoard[0][3][0] === "O" &&
        gameBoardMod.gameBoard[0][6][0] === "O")
        winningPlayer = Player2;
    
    if (gameBoardMod.gameBoard[0][1][0] === "O" &&
        gameBoardMod.gameBoard[0][4][0] === "O" &&
        gameBoardMod.gameBoard[0][7][0] === "O")
        winningPlayer = Player2;
    
    if (gameBoardMod.gameBoard[0][2][0] === "O" &&
        gameBoardMod.gameBoard[0][5][0] === "O" &&
        gameBoardMod.gameBoard[0][8][0] === "O")
        winningPlayer = Player2;

    //diagonal conditions
    if (gameBoardMod.gameBoard[0][0][0] === "O" &&
        gameBoardMod.gameBoard[0][4][0] === "O" &&
        gameBoardMod.gameBoard[0][8][0] === "O")
        winningPlayer = Player2;

    if (gameBoardMod.gameBoard[0][2][0] === "O" &&
        gameBoardMod.gameBoard[0][4][0] === "O" &&
        gameBoardMod.gameBoard[0][6][0] === "O")
        winningPlayer = Player2;
}

function checkTie(){
    if (gameBoardMod.gameBoard[0][0][0] !== "" &&
        gameBoardMod.gameBoard[0][1][0] !== "" &&
        gameBoardMod.gameBoard[0][2][0] !== "" &&
        gameBoardMod.gameBoard[0][3][0] !== "" &&
        gameBoardMod.gameBoard[0][4][0] !== "" &&
        gameBoardMod.gameBoard[0][5][0] !== "" &&
        gameBoardMod.gameBoard[0][6][0] !== "" &&
        gameBoardMod.gameBoard[0][7][0] !== "" &&
        gameBoardMod.gameBoard[0][8][0] !== "" &&
        winningPlayer === ""){

        display.innerText = "There has been a tie";
        winningPlayer = "tie"
    };
}

function changePlayer(){
    if (currentPlayer === Player1 && winningPlayer === ""){
        display.innerText = "Player 2's Turn";
        currentPlayer = Player2;
    } else if (currentPlayer === Player2  && winningPlayer === ""){
        display.innerText = "Player 1's Turn";
        currentPlayer = Player1;
    }
}


function endGame(){
    if (winningPlayer !== "" || winningPlayer === "tie"){
        grid.innerText = ""
        if (winningPlayer === Player1 || 
            winningPlayer === Player2) {
            display.innerText = "The game has ended. " + currentPlayer.playerName + " has won!"
        } else if (winningPlayer === "tie"){
            display.innerText = "The game has ended. It is a tie."
        }
        const restart = document.querySelector("#restart")
        const restartButton = document.createElement("button")
        restartButton.innerText = "Play Again!"
        restart.append(restartButton)

        restartButton.addEventListener("click", () => location.reload());
    }

}
