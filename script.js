const gameBoard = (function (){
    'use strict';

    const gameBoard = []


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
