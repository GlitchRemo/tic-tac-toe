const game = ({ player1, player2 }, board) => {
  firstPlayer = (data) => {
    const row = +data[0];
    const column = +data[1];

    player1.play({ row, column }, board);
    if (player1.hasWon(board)) {
      player1.declareAsWinner(console.log);
      clearInterval(intervalId);
      return;
    }
    board.display(console.log);
  };

  secondPlayer = (data) => {
    const row = +data[0];
    const column = +data[1];

    player2.play({ row, column }, board);
    if (player2.hasWon(board)) {
      player2.declareAsWinner(console.log);
      clearInterval(intervalId);
      return;
    }

    board.display(console.log);
  };

  process.stdin.setEncoding("utf8");
  let turn = 0;
  const intervalId = setInterval(() => {
    const data = process.stdin.read();
    if (data) {
      turn % 2 === 0 ? firstPlayer(data) : secondPlayer(data);
      turn++;
    }
  }, 100);
};
