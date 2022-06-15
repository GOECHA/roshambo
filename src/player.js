class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.turn = ``;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }

  takeTurn(gameType) {
    if (newGame.gameType === "classic") {
      var warriors = ["alien-head", "human", "space-ship"];
      newGame.computer.turn =
        warriors[Math.floor(Math.random() * warriors.length)];
    } else if (newGame.gameType === "difficult") {
      var warriors = ["alien-head", "human", "space-ship", "sphynx", "robot"];
      newGame.computer.turn =
        warriors[Math.floor(Math.random() * warriors.length)];
    }
  }
}

console.log(`ANCIENT ALIEN ROSHAMBO`);
console.log(`BY: GOECHA`);

