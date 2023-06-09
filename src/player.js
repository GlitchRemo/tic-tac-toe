class Player {
  #title;
  #sign;
  #moves;

  constructor({ title, sign }) {
    this.#moves = [];
    this.#title = title;
    this.#sign = sign;
  }

  addMove(move) {
    this.#moves.push(move);
  }

  get moves() {
    return this.#moves;
  }

  get name() {
    return this.#title;
  }

  get sign() {
    return this.#sign;
  }
}

exports.Player = Player;
