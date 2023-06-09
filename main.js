const { exec } = require("child_process");
const colors = require("colors/safe");
const { Board } = require("./src/board");
const { Player } = require("./src/player");
const { Controller } = require("./src/controller");
const { Visualizer } = require("./src/visualizer");

const CROSS = colors.red("X");
const CIRCLE = colors.white("O");

const main = () => {
  const firstPlayerName = process.argv[2];
  const secondPlayerName = process.argv[3];

  const board = new Board({ length: 3, breadth: 3 });
  const player1 = new Player({ title: firstPlayerName, sign: CROSS }, board);
  const player2 = new Player({ title: secondPlayerName, sign: CIRCLE }, board);
  const visualizer = new Visualizer(process.stdout.write.bind(process.stdout));
  const controller = new Controller(board, visualizer, player1, player2);
  console.clear();

  controller.setupGame();
  controller.startGame();
  // exec("afplay ./resources/audio/bg-music.mp3");
};

main();
