const POSITIONS = {
  1: { x: 0, y: 0 },
  2: { x: 0, y: 1 },
  3: { x: 0, y: 2 },
  4: { x: 1, y: 0 },
  5: { x: 1, y: 1 },
  6: { x: 1, y: 2 },
  7: { x: 2, y: 0 },
  8: { x: 2, y: 1 },
  9: { x: 2, y: 2 },
};

class Controller {
  #players;
  #board;
  #visualizer;
  #totalPlayers;
  #turn;

  constructor(board, visualizer, ...players) {
    this.#players = players;
    this.#board = board;
    this.#visualizer = visualizer;
    this.#turn = 0;
    this.#totalPlayers = this.#players.length;
  }

  setupGame() {
    this.#visualizer.display(this.#board.data);
    this.#visualizer.requestInput(this.#players[0].name);
  }

  startGame() {
    const { stdin } = process;
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);

    stdin.on("data", (move) => {
      const coordinates = POSITIONS[move];
      if (!coordinates) return;
      if (this.#board.hasPlayed(coordinates)) return;

      const currentPlayerIndex = this.#turn++ % this.#totalPlayers;
      const nextPlayerIndex = (currentPlayerIndex + 1) % this.#totalPlayers;
      const currentPlayer = this.#players[currentPlayerIndex];
      const nextPlayer = this.#players[nextPlayerIndex];

      console.clear();

      currentPlayer.addMove(parseInt(move));
      this.#board.place(currentPlayer.sign, coordinates);
      this.#visualizer.display(this.#board.data);

      if (this.#board.hasWinningPositions(currentPlayer.moves)) {
        this.#visualizer.announceWinner(currentPlayer.name);
        stdin.destroy();
        return;
      }

      this.#visualizer.requestInput(nextPlayer.name);

      if (this.#board.isFilled()) {
        this.#visualizer.announceDraw();
        stdin.destroy();
      }
    });
  }
}

exports.Controller = Controller;
