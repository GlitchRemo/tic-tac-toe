const colors = require("colors/safe");

const CROSS = colors.red("X");
const CIRCLE = colors.white("O");

const main = () => {
  const config = {
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
  const board = new Board({ length: 3, breadth: 3 }, config);
  const player1 = new Player({ title: "Riya", sign: CROSS }, board);
  const player2 = new Player({ title: "Vidita", sign: CIRCLE }, board);
  game({ player1, player2 }, board);
};

main();
