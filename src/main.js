

// ~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~//
  newGame;

  var resultContainer = document.querySelector(".result-container")
  var cenContainer = document.querySelector(".centerContainer");
  var gameContainer = document.querySelector(".game-container");
  var classic = document.querySelector("#classicGame")
  var difficult = document.querySelector("#difficultGame")
  var changeGmBtn = document.querySelector(".change-game-btn");
  var classicImg = document.querySelector(".classic-image");
  var difficultImg = document.querySelector(".difficult-image");
  var classic = document.querySelector("#classicGame");
  var difficult = document.querySelector("#difficultGame");
  


//   var newGame = new Game(); 

// ~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~//
 
  gameContainer.addEventListener('click', chooseGame);
  changeGmBtn.addEventListener('click', backToHome);
  window.addEventListener('load', newGame); 
  resultContainer.addEventListener('click', chooseFighter);

// ~~~~~~~~~~~~~~~~~Event Handlers~~~~~~~~~~~~~~//


  function newGame(){
    newGame = new Game();
  }



  function chooseGame(event){
    if ("classicGame" === event.target.id) {
      hide(gameContainer);
      show(changeGmBtn);
      show(resultContainer);
   } else if ("difficultGame" === event.target.id) {
       hide(gameContainer);
       show(changeGmBtn);
       show(resultContainer); 
    } 
  };



    function backToHome(){
      hide(changeGmBtn);
      show(gameContainer);
      hide(classicImg);
      hide(difficultImg);
    };

    
  function chooseFighter(event){  
    newGame.player.turn = event.target.id 
    console.log(newGame.player.turn)  
    startGame();
  }
  
  function startGame(){ 
    newGame.computer.takeTurn()
    newGame.gameRules()
    newGame.increaseWins()
  }

   

    // var id = id.event.target
// ~~~~~~~~~~~~~~~~~Utility Functions~~~~~~~~~~~~~~//




function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

console.log(`hello`)
// function genCharacters() {
//     var characters = "";
//     var combos = 
//     for (var i = 0; i < 6; i++) {
//         characters += combos.charAt(Math.floor(Math.random() * combos.length));
//     };
//     return `${characters} ${characters}`
//   };
