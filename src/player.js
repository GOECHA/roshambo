
class Player {
    constructor(name, token){
     this.name = name;
     this.token = token;
     this.wins = 0;
     this.turn = null;
      //  this.id = Date.now();
      
    };
    
    takeTurn(warrior){
      this.turn = warrior;
      
    };

   chooseGame(gameType){
      console.log(warriors.length)
       if (gameType === `classic`){
        var warriors = [`Alien`, `Human`, `Space Ship`]
     } else {
        var warriors = [`Alien`, `Human`, `Space Ship`, `Sphinx`, `Robot`]
     }
        this.turn = warriors[Math.floor(Math.random() * this.warriors.length)];
         
    };

};

console.log(`hello`)

//  token = {
//    var player1: ,
//      computer: <img class="player-image" id="computer" src="./assets/SVG/computer.svg"> ,
//  }





// What I need to do: I need to choose a game classic or difficult
// Then the players appear on the next screen
// each player has a score- "wins:" Default to 0
// Player must choose a 'warrior'
// Human: takes turn first. 

// GAME:
// computer randomly selects 'warrior'
// classic - 3 warriors
// difficult - 5 warriors
// once there's a 'win' there's a pause on screen
// 