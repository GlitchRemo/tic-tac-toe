const colors = require("colors/safe");
const BLANK = colors.hidden(" ");

class Board {
  #length;
  #breadth;
  #grid;
  #winningPositions;

  constructor({ length, breadth }) {
    this.#length = length;
    this.#breadth = breadth;
    this.#winningPositions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    this.#create();
  }

  #create() {
    this.#grid = new Array(this.#length)
      .fill()
      .map(() => new Array(this.#breadth).fill(BLANK));
  }

  get data() {
    return this.#grid;
  }

  hasPlayed({ x, y }) {
    return this.#grid[x][y] !== BLANK;
  }

  place(sign, { x, y }) {
    if (this.#grid[x][y] === BLANK) this.#grid[x][y] = sign;
  }

  hasWinningPositions(playerMoves) {
    return this.#winningPositions.some((positions) =>
      positions.every((position) => playerMoves.includes(position))
    );
  }

  isFilled() {
    return this.#grid.every((row) => !row.includes(BLANK));
  }
}

exports.Board = Board;
