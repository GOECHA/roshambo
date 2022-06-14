
class Game {
    constructor (gameType, winner){
     this.player = new Player(`Human`, `<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg">`);
     this.computer = new Player(`Computer`, `<img class="player-image" id="computer" src="./assets/SVG/computer.svg">`);
     this.gameType = gameType;
     this.winner = winner;
     }
    
//     gameChoice(){
//       var classic = document.querySelector("#classicGame")
//       var difficult = document.querySelector("#difficultGame") 
//          if (this.player === classic){
              
//          } else 
//     }
     
     gameRules(){
          if (this.player.turn === 'alien-head' && this.computer.turn === 'space-ship'){
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
    
      tieGame(){
      if (this.player.turn === this.computer.turn){ 
      this.winner = null
      console.log(`MATCH`) } 
      }
      

      increaseWins(){
            if (this.winner === this.player){
              this.player.wins++  
          } if(this.winner === this.computer){
              this.computer.wins++  

          }
           
      }
    
};  

