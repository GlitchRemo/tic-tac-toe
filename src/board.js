const BLANK = colors.hidden(" ");
const { table } = require("table");

class Board {
  #length;
  #breadth;
  #config;
  #boardData;

  constructor({ length, breadth }, config) {
    this.#length = length;
    this.#breadth = breadth;
    this.#config = config;
    this.#create();
  }

  #create() {
    this.#boardData = new Array(this.#length)
      .fill()
      .map(() => new Array(this.#breadth).fill(BLANK));
  }

  add(position, sign) {
    const { row, column } = position;
    this.#boardData[row][column] = sign;
  }

  hasWinningPositions(sign) {
    return this.#boardData[0][0] === sign;
  }

  display(displayer) {
    displayer(table(this.#boardData, this.#config));
  }
}
