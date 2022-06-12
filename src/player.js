
class Player {
    constructor(name, token){
     this.name = name;
     this.token = token;
     this.wins = 0;
     this.turn = null;
     this.warriors = [];
      //  this.id = Date.now();
    }

    takeTurn(warrior){
      this.turn = warrior;
    };

   classicGame(classic){
      var classic = [`Alien`, `Human`, `Space Ship`]
      this.warriors.push(classic);
    };

    difficultGame(difficult){
      var difficult = [`Alien`, `Human`, `Space Ship`, `Sphinx`, `Robot`]
      this.warriors.push(difficult);
    }; 

   playGame(){         
    var warriors = this.warriors
    this.turn = warriors[Math.floor(Math.random() * this.warriors.length)];
    };
};



//  token = {
//    var player1: <img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg">,
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