# roshambo
A game of rock, paper, scissors

#### 6.14.22

### *Contents*

**Watch Demo**
<img width="400" alt="" src="https://user-images.githubusercontent.com/102189342/197897330-f2a32f85-09c5-4847-890e-48e75ade6e5b.mov" />


<img width="400" alt="Screen Shot 2022-10-25 at 4 59 24 PM" src="https://user-images.githubusercontent.com/102189342/197897774-cc043752-0cc4-4d77-a38f-b44af7d26545.png">




## Objective
Create functioning web page that includes:
- Randomize Game outcome
- Functioning buttons
- subject differentiation
- Win incrementer

##  Code Layout
- SRC
 - developer created image format
- index.html
 - page structure
- styles.CSS
 - aesthetics
- player.js
 - class file
- game.js 
 - class file
- main.js
 - eventListeners
 - eventHandlers
 - Active Fucntions

## **PR Template**
<img width="300" alt="pr-template" src="https://user-images.githubusercontent.com/102189342/172502477-755c5639-1813-4f96-b539-55084066624a.png">


## **Design Layout with Details**
<img width="300" alt="roshambo-design-layout" src="https://user-images.githubusercontent.com/102189342/172502452-e2a6e3be-25e2-49e4-a743-256af8052596.png">



## Home Page -
### *View*
- Choice of Game
  - classic or difficult

 
## Classic
- Characters
 - human, alien, space-ship
 - Alien > Space Ship
 - Human > Alien
 - Space Ship > Human

## Difficult
- Characters
 - Alien > Space Ship & Sphynx
 - Human > Alien & Robot
 - Space Ship > Human & Sphynx
 - Sphynx > Space Ship & Robot
 - Robot > Human & Alien

**Architecture**
Your entire application will consist of one HTML page. You will have three JavaScript files:

- A player.js file that contains a Player class.
- Player methods must include, but are not limited to:
- constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
- takeTurn
- A game.js file that contains a Game class.
- A Game should include:
- Two Player instances
- A way to keep track of the data for the game board
- A way to keep track of the selected game type
- A way to check the Game’s board data for win conditions
- A way to detect when a game is a draw (no one has won)
- A way to reset the Game’s board to begin a new game
- A main.js file that contains all DOM related JavaScript

[Deployment_URL](https://goecha.github.io/roshambo/)

## LinkedIn Creator Profiles

- [Chantal Goethals](https://www.linkedin.com/in/chantalgoethalsgoecha/)

## Set Up
1. fork this boilerplate repository
2. Clone down your new, forked repo
3. cd into the repository
4. Open it in your text editor
5. View the project in the browser by running open index.html in your terminal


[Link to Rubric](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo-v2.html)


```
Update: 6.14.22 [CG](https://github.com/GOECHA/roshambo)
