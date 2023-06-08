'[[[[[[[[[[class Player {
  #title;
  #sign;

  constructor({ title, sign }) {
    this.#title = title;
    this.#sign = sign;
  }

  play({ row, column }, board) {
    board.add({ row, column }, this.#sign);
  }

  hasWon(board) {
    return board.hasWinningPositions(this.#sign);
  }

  declareAsWinner(displayer) {
    displayer(this.#title);
  }
}
