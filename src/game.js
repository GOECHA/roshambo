
class Game {
    constructor (gameType, winner){
     this.player = new Player(`Human`, `<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg">`);
     this.computer = new Player(`Computer`, `<img class="player-image" id="computer" src="./assets/SVG/computer.svg">`);
     this.gameType = gameType;
     this.winner = winner;
     //  this.gameData = 0; ?? Do I need this
     }
    
     // Game --> player(access) --> change property 
     //in player class
 
     
     gameRules(){
         if (this.player.turn === this.computer.turn){
           this.winner = tie;
         } else if (this.player.turn === 'alien-head' && this.computer.turn === 'space-ship'){
            return this.winner = this.player
         } else if (this.player.turn === 'human' && this.computer.turn === 'alien-head'){
            return this.winner = this.player
         } else if (this.player.turn === 'space-ship' && this.computer.turn === 'human'){
            return this.winner = this.player 
         } else if (this.player.turn === 'alien-head' && this.computer.turn === 'sphinx'){
            return this.winner = this.player
         } else if(this.player.turn === 'human' && this.computer.turn === 'robot'){
            return this.winner = this.player
         } else if (this.player.turn === 'space-ship' && this.computer.turn === 'spinx'){  
            return this.winner = this.player
         } else if (this.player.turn === 'sphinx' && this.computer.turn === 'human'){          
            return this.winner = this.player
         } else {
            return this.winner = this.computer 
        }  
      }

      
      increaseWins(){
          if (this.winner === this.player){
              this.player.wins++  
          } else if(this.winner === this.computer){
              this.computer.wins++  
          } 
           
      }


    
};  


//     winGame(){
//         this.player.token = gameRules();
//         this.winner === true
//     }
    
       // takeTurn() choose warrior 
       // if this.player warrior . this.winner === true
       // then this. winner takes a turn 
       // 
    

//     getPoint(){
//        this.winner.wins ++ //
//      }


   


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