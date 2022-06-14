

// ~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~//
  newGame;

  var resultContainer = document.querySelector(".result-container")
  var cenContainer = document.querySelector(".centerContainer");
  var gameContainer = document.querySelector(".game-container");
  var changeGmBtn = document.querySelector(".change-game-btn");
  var classicImg = document.querySelector(".classic-image");
  var difficultImg = document.querySelector(".difficult-image");
  var fightBox = document.querySelector(".fight")
  var classic = document.querySelector("#classicGame")
  var difficult = document.querySelector("#difficultGame")
  


//   var newGame = new Game(); 

// ~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~//
  difficult.addEventListener('click', chooseDifficult);
  gameContainer.addEventListener('click', chooseClassic);
  changeGmBtn.addEventListener('click', backToHome);
  window.addEventListener('load', newGame); 
  resultContainer.addEventListener('click', chooseFighter);

// ~~~~~~~~~~~~~~~~~Event Handlers~~~~~~~~~~~~~~//


  function newGame(){
    newGame = new Game();
  }

   

  function chooseClassic(){    
      hide(gameContainer);
      hide(difficult);
      show(changeGmBtn);
      show(resultContainer);

  }

    function chooseDifficult(){
       hide(gameContainer);
       show(changeGmBtn);
       show(resultContainer); 
       console.log(`difficultGame`)
       startGame();
    } 
  
    function chooseFighter(event){  
      newGame.player.turn = event.target.id 
      console.log(newGame.player.turn)  
      startGame();
    }
  
  function roshambo(){
    console.log(`hello`)
    hide(resultContainer)
    hide(gameContainer)
    fightBox.innerHTML = `<img id="${newGame.player.turn}" src="./assets/SVG/${newGame.player.turn}.svg">
     <img id="${newGame.computer.turn}" src="./assets/SVG/${newGame.computer.turn}.svg">`
 }

  function resetGame(){
    show(resultContainer)
    fightBox.innerHTML = ``

 }
//  console.log(`hello`)
//      if (classic){
//      hide(resultContainer)
//      show(classicImg)
//     } else if (difficult){
//      hide(resultContainer)
//      show(classicImg)
//      show(difficultImg)
//     }
//   }

    function backToHome(){
      hide(changeGmBtn);
      show(gameContainer);
      hide(classicImg);
      hide(difficultImg);
    };

    
  
  function startGame(){ 
    newGame.computer.takeTurn();
    newGame.tieGame();
    newGame.gameRules();
    newGame.increaseWins();
    roshambo();
    setTimeout(resetGame, 2500);
  }

   

    // var id = id.event.target
// ~~~~~~~~~~~~~~~~~Utility Functions~~~~~~~~~~~~~~//




function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};



