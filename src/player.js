
class Player {
    constructor(name, token){
     this.name = name;
     this.token = token;
     this.wins = 0;
     this.turn = ``;    
    }
    

    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }


   takeTurn(gameType){
       if (newGame.gameType === "classic"){
        var warriors = ['alien-head', 'human', 'space-ship']
        newGame.computer.turn = warriors[Math.floor(Math.random() * warriors.length)];  
     } else if (newGame.gameType === "difficult"){
        var warriors = ['alien-head', 'human', 'space-ship', 'sphynx', 'robot'] 
        newGame.computer.turn = warriors[Math.floor(Math.random() * warriors.length)];
     }   
    
    }

    

};



console.log(`hello`);




// takeTurn(gameType){
//   console.log(warriors, 1)
//    if (gameType === 'classic'){
//     var warriors = ['alien', 'human', 'space-ship']
//     this.turn = warriors[Math.floor(Math.random() * warriors.length)];  
//     console.log(gameType) 
//  } else {
//     var warriors = ['alien', 'human', 'space-ship', 'sphinx', 'robot'] 
//     this.turn = warriors[Math.floor(Math.random() * warriors.length)];
//     console.log(gameType) 
//  }   

// }


// What I need to do: I need to choose a game classic or difficult
// start with classic
// weave in difficult later
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