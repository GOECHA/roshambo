

// // ~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~//
  newGame;

//   var resultContainer = document.querySelectorAll(".result-container")
//   var cenContainer = document.querySelectorAll(".centerContainer");
//   var gameContainer = document.querySelectorAll(".game-container");
//   // var classic = document.querySelector("#classicGame")
//   // var difficult = document.querySelector("#difficultGame")
//   var changeGmBtn = document.querySelector(".change-game-btn");
//   var classicImg = document.querySelectorAll(".classic-image");
//   var difficultImg = document.querySelectorAll(".difficult-image");
//   var classic = document.querySelector("#classicGame");
//   var difficult = document.querySelector("#difficultGame");
  


// //   var newGame = new Game(); 

// // ~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~//
 
//   gameContainer.addEventListener('click', chooseGame);
//   changeGmBtn.addEventListener('click', backToHome);
  window.addEventListener('load', newGame) 

// // ~~~~~~~~~~~~~~~~~Event Handlers~~~~~~~~~~~~~~//


  function newGame(){
    newGame = new Game();
  }



//   function chooseGame(event){
//     if (event.target.id === "classicGame") {
//       hide(gameContainer);
//       show(changeGmBtn);
//       show(resultContainer);
//    } else if (event.target.id === "difficultGame") {
//        hide(gameContainer);
//        show(changeGmBtn);
//        show(resultContainer);
//     } 
//   };




//     function backToHome(){
//       hide(changeGmBtn);
//       show(gameContainerBtn);
//       hide(classicImg);
//       hide(difficultImg);
//     };

    
//     // var id = id.event.target
// // ~~~~~~~~~~~~~~~~~Utility Functions~~~~~~~~~~~~~~//




// function show(element) {
//   element.classList.remove('hidden')
// };

// function hide(element) {
//   element.classList.add('hidden')
// };

// console.log(`hello`)
// // function genCharacters() {
// //     var characters = "";
// //     var combos = 
// //     for (var i = 0; i < 6; i++) {
// //         characters += combos.charAt(Math.floor(Math.random() * combos.length));
// //     };
// //     return `${characters} ${characters}`
// //   };
