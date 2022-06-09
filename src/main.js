// ~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~//
var game = document.querySelectorAll(".game-container")
var diffGame = document.querySelector("#difficultGame")
var changeGmBtn = document.querySelector(".change-game-btn")






// ~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~//
var classicGame = addEventListener('click', chooseGame)
var changeGmBtn = document.addEventListener('click', changeGame)


// ~~~~~~~~~~~~~~~~~Event Handlers~~~~~~~~~~~~~~//

chooseGame(){

 
};

function hideCharacters() {
 
};

function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

// ~~~~~~~~~~~~~~~~~Randomizer~~~~~~~~~~~~~~//

function genCharacters() {
    var characters = "";
    var combos = {
        if 
    }
    for (var i = 0; i < 6; i++) {
        characters += combos.charAt(Math.floor(Math.random() * combos.length));
    };
    return `${characters} ${characters}`
  };
