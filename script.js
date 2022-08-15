let player = "Player 1"

//Gameboard Module
const gameBoard = (function (){
    'use strict';

    const gameBoard = []
    const displayPlayer = document.querySelector("#display-player")
    const squares = Array.from(document.querySelectorAll(".square"))

    squares.map(square => {
    square.addEventListener('click', (e) => {
        if (player === "Player 1"){
            e.target.innerText = "O"
            player = "Player 2"
            displayPlayer.innerText = "Player 2"
            displayPlayer.style.color = "blue"
            
        }else if (player === "Player 2"){
            e.target.innerText = "X"
            player = "Player 1"
            displayPlayer.innerText = "Player 1"
            displayPlayer.style.color = "red"
        }
        })
    });
    


    return {squares}

})();




const displayController = (function(){
    'use strict';

})();


//Factory Function to Create Players
const playerFactory = playerName => {
    this.name = playerName

    return {name};
}

//Players created by previous Factory Function
const player1 = playerFactory("player1");
const player2 = playerFactory("player2")
