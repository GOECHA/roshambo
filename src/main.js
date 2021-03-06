// ~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~//
newGame;

var resultContainer = document.querySelector(".result-container");
var cenContainer = document.querySelector(".centerContainer");
var gameContainer = document.querySelector(".game-container");
var changeGmBtn = document.querySelector(".change-game-btn");
var classicImg = document.querySelector(".classic-image");
var difficultImg = document.querySelector(".difficult-image-container");
var fightBox = document.querySelector(".fight");
var classic = document.querySelector("#classicGame");
var difficult = document.querySelector("#difficultGame");
var comPoint = document.querySelector("#computerWin");
var humPoint = document.querySelector("#humanWin");
var pageIntro = document.querySelector(".page-intro");


// ~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~//



window.addEventListener("load", newGame);
gameContainer.addEventListener("click", chooseClassic);
difficult.addEventListener("click", chooseDifficult);
resultContainer.addEventListener("click", chooseFighter);
changeGmBtn.addEventListener("click", backToHome);


// ~~~~~~~~~~~~~~~~~Event Handlers~~~~~~~~~~~~~~//

function newGame() {
  newGame = new Game();
};

function newPlayer() {
  newPlayer = new Player();
}

function chooseClassic() {
  hide(gameContainer);
  hide(difficult);
  show(changeGmBtn);
  show(resultContainer);
  newGame.chooseClass();
  pageIntro.innerText = "CHOOSE YOUR WARRIOR!"
};

function chooseDifficult() {
  hide(gameContainer);
  hide(difficult);
  show(changeGmBtn);
  show(resultContainer);
  show(difficultImg);
  newGame.chooseDiff();
  pageIntro.innerText = "CHOOSE YOUR WARRIOR!"
};

function chooseFighter(event) {
  newGame.player.turn = event.target.id;
  startGame();
};

// ~~~~~~~~~~~~~~~~~Game Functions~~~~~~~~~~~~~~//

function roshambo() {
  hide(resultContainer);
  hide(gameContainer);
  show(fightBox);
  hide(changeGmBtn);
  fightBox.innerHTML = `<img id="${newGame.player.turn}" src="./assets/SVG/${newGame.player.turn}.svg">
     <img id="${newGame.computer.turn}" src="./assets/SVG/${newGame.computer.turn}.svg">`;
    if (newGame.winner === newGame.player){
      pageIntro.innerText = `${newGame.player.name} WON!`;
  } else if (newGame.winner === newGame.computer){ 
      pageIntro.innerText = `${newGame.computer.name} WON!`;
  } else {
    pageIntro.innerText = `MATCH DRAW!`;
  }
    humPoint.innerText = `WINS: ${newGame.player.wins}`;
    comPoint.innerText = `WINS: ${newGame.computer.wins}`;
  };


function resetGame() {
  hide(fightBox);
  show(resultContainer);
  show(changeGmBtn);
  fightBox.innerHTML = ``;
  pageIntro.innerText = "CHOOSE YOUR WARRIOR!"
};

function backToHome() {
  pageIntro.innerText = "CHOOSE YOUR CHALLENGE!"
  hide(changeGmBtn);
  hide(resultContainer);
  hide(fightBox);
  hide(classicImg);
  hide(difficultImg);
  show(gameContainer);
  show(difficult);
};

function startGame() {
  newGame.computer.takeTurn();
  newGame.gameRules();
  newGame.increaseWins();
  roshambo();
  setTimeout(resetGame, 2250);
};


// ~~~~~~~~~~~~~~~~~Utility Functions~~~~~~~~~~~~~~//

function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};
