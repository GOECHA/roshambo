
class Game {
    constructor (gameType, winner){
     this.player = {
       player1: new Player(`Human`, `<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg">`),
       player2: new Player(`Computer`, `<img class="player-image" id="computer" src="./assets/SVG/computer.svg">`) 
     }
    //  this.gameData = 0; ?? Do I need this
     this.gameType = gameType;
     this.winner = winner;
    }
     
    
  

     gameRules(){
         if (this.gameType === 'classic'){
           if ('alien' > 'space-ship'){
               return 'alien';
         } if('human' > 'alien'){
               return 'human';
         } if('space-ship' > 'human'){
               return 'space-ship';
         }      
       } else if (this.gameType === 'difficult') {
           if('alien' > 'space-ship', 'sphinx'){
               return 'alien';
         } if('human' > 'alien', 'robot'){
               return 'human';
         } if('space-ship' > 'human', 'spinx'){  
               return 'space-ship';
         } if('sphinx' > 'alien', 'human'){          
               return 'sphinx';
         } if('robot' > 'human', 'alien'){     
               return 'robot';
         }
       }
    }
    
    winGame(){
        this.player.token = gameRules();
        this.winner === true
    }
    
       // takeTurn() choose warrior 
       // if this.player warrior . this.winner === true
       // then this. winner takes a turn 
       // 
    

    getPoint(){
       this.winner.wins ++ //
     }


};     


// gameRules(){
//     if (this.gameType === 'classic'){
//       if ('alien' > 'space-ship'){
//           return 'alien';
//     } if('human' > 'alien'){
//           return 'human';
//     } if('space-ship' > 'human'){
//           return 'space-ship';
//     }      
//   } else if (this.gameType === 'difficult') {
//       if('alien' > 'space-ship', 'sphinx'){
//           return 'alien';
//     } if('human' > 'alien', 'robot'){
//           return 'human';
//     } if('space-ship' > 'human', 'spinx'){  
//           return 'space-ship';
//     } if('sphinx' > 'alien', 'human'){          
//           return 'sphinx';
//     } if('robot' > 'human', 'alien'){     
//           return 'robot';
//     }
//   }
// }


 





 // newGame(newPlayer, newPlayer2){
    //   var newPlayer = new Player({name: `Human`, token: `<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg"></img>`})
    //   var newPlayer2 = new Player({name: `Human`, token: `<img class="player-image" id="humanPlayer" src="./assets/SVG/computer.svg"></img>`})   



    // {
    //     human: new Player({name:`Human`, token:`<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg">`}),
    //     computer: new Player({name:`Computer`, token:'<img class="player-image" id="humanPlayer" src="./assets/SVG/computer.svg">'})
    // }