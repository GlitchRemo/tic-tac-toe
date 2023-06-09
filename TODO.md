- Player should not know about board
- Implement `hasWon`
- Refactor model

  - A controller takes input from respective user
  - It should get current player's sign
  - It should tell the board the coordinates and sign
  - If the coordinates already has a sign, then ignore the move, else place sign on that coordinate
  - get boardData from board
  - ask Board if it has winning combination

    - if yes, instruct view to render the player
    - if draw, instruct view to render accordingly

  - View.display(boardData) to display the board
