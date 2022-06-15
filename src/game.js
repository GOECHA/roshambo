class Game {
  constructor(gameType, winner) {
    this.player = new Player(
      `HUMAN`, `<img class="player-image" id="humanPlayer" src="./assets/SVG/human2.svg">`
    );
    this.computer = new Player(
      `COMPUTER`, `<img class="player-image" id="computer" src="./assets/SVG/computer.svg">`
    );
    this.gameType = ``;
    this.winner = ``;
  }


  chooseClass() {
    this.gameType = "classic";
  }

  chooseDiff() {
    this.gameType = "difficult";
  }

  gameRules() {
    if (this.player.turn === "human" && this.computer.turn === "alien-head") {
      return (this.winner = this.player);
    } else if (this.player.turn === "human" && this.computer.turn === "robot") {
      return (this.winner = this.player);
    } else if (
      this.player.turn === "alien-head" &&
      this.computer.turn === "sphynx"
    ) {
      return (this.winner = this.player);
    } else if (
      this.player.turn === "alien-head" &&
      this.computer.turn === "space-ship"
    ) {
      return (this.winner = this.player);
    } else if (
      this.player.turn === "space-ship" &&
      this.computer.turn === "human"
    ) {
      return (this.winner = this.player);
    } else if (
      this.player.turn === "space-ship" &&
      this.computer.turn === "sphynx"
    ) {
      return (this.winner = this.player);
    } else if (
      this.player.turn === "sphynx" &&
      this.computer.turn === "space-ship"
    ) {
      return (this.winner = this.player);
    } else if (
      this.player.turn === "sphynx" &&
      this.computer.turn === "robot"
    ) {
      return (this.winner = this.player);
    } else if (
      this.player.turn === "robot" &&
      this.computer.turn === "alien-head"
    ) {
      return (this.winner = this.player);
    } else if (this.player.turn === "robot" && this.computer.turn === "human") {
      return (this.winner = this.player);
    } else if (this.player.turn === this.computer.turn) {
      console.log(`MATCH`); 
      return (this.winner = `MATCH`);
    } else {
      return (this.winner = this.computer);
    }
  }



  increaseWins() {
    if (this.winner === this.player) {
      this.player.wins++;
    }
    if (this.winner === this.computer) {
      this.computer.wins++;
    }
  }

 

}
