// ~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~//
var game = document.Document.getElementsByClassName()(".game-container")
var classic = document.querySelector("#classicGame")
var difficult = document.querySelector("#difficultGame")
var changeGmBtn = document.Document.getElementsByClassName()(".change-game-btn")





var newGame = []
// ~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~//


// var game = addEventListener('click', chooseGame)
var classic = addEventListener('click', chooseClassic)
var difficult = addEventListener('click', chooseDifficult)
var changeGmBtn = addEventListener('click', backToHome)


// ~~~~~~~~~~~~~~~~~Event Handlers~~~~~~~~~~~~~~//

  function chooseClassic(){
    newGame === classic
    changeGmBt.classList.remove('hidden')
    classic.classList.add('hidden')
    difficult.classList.add('hidden')
        //  hide(classic);
        //  hide(difficult);
        //  show(changeGmBtn);
        return `classic game` 

    }

   function chooseDifficult(){
     newGame === difficult
      changeGmBt.classList.remove('hidden')
      classic.classList.add('hidden')
      difficult.classList.add('hidden')
    //   hide(classic);
    //   hide(difficult);
    //   show(changeGmBtn);
      return `difficult game`
};

    function backToHome(){

    }

    function hideCharacters() {
    
    };



// console.log(show)
// function show(element) {
//   element.classList.remove('hidden')
// };

// function hide(element) {
//   element.classList.add('hidden')
// };

// ~~~~~~~~~~~~~~~~~Randomizer~~~~~~~~~~~~~~//

// function genCharacters() {
//     var characters = "";
//     var combos = 
//     for (var i = 0; i < 6; i++) {
//         characters += combos.charAt(Math.floor(Math.random() * combos.length));
//     };
//     return `${characters} ${characters}`
//   };
