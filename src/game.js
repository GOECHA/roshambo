
class Game {
    constructor(){
     this.player1 = new Player(`Human`, `<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg">`)
     this.player2 = new Player(`Computer`, `<img class="player-image" id="computer" src="./assets/SVG/computer.svg">`)
     this.gameData = 0;
     this.gameOption = null;
     this.warriors = [];
    }
};     





 





 // newGame(newPlayer, newPlayer2){
    //   var newPlayer = new Player({name: `Human`, token: `<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg"></img>`})
    //   var newPlayer2 = new Player({name: `Human`, token: `<img class="player-image" id="humanPlayer" src="./assets/SVG/computer.svg"></img>`})   



    // {
    //     human: new Player({name:`Human`, token:`<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg">`}),
    //     computer: new Player({name:`Computer`, token:'<img class="player-image" id="humanPlayer" src="./assets/SVG/computer.svg">'})
    // }