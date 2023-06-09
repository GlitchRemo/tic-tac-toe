const { table } = require("table");

const CONFIG = {
  border: {
    topBody: `─`,
    topJoin: `┬`,
    topLeft: `┌`,
    topRight: `┐`,

    bottomBody: `─`,
    bottomJoin: `┴`,
    bottomLeft: `└`,
    bottomRight: `┘`,

    bodyLeft: `│`,
    bodyRight: `│`,
    bodyJoin: `│`,

    joinBody: `─`,
    joinLeft: `├`,
    joinRight: `┤`,
    joinJoin: `┼`,
  },
};

class Visualizer {
  #writer;
  constructor(writer) {
    this.#writer = writer;
  }

  requestInput(playerName) {
    this.#writer(`${playerName}'s turn: \n`);
  }

  announceWinner(playerName) {
    this.#writer(`${playerName} has won\n`);
  }

  announceDraw() {
    this.#writer("Draw\n");
  }

  display(data) {
    this.#writer(table(data, CONFIG) + "\n");
  }
}

exports.Visualizer = Visualizer;
