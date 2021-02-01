let scores = {
  X: -10,
  O: 10,
  tie: 0
};

export const findNextMove = (board) => {
  let bestScore = -Infinity;
  let bestMove = {};

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        board[i][j] = "O";
        let score = minimax(board, 0, false);
        board[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          bestMove = { i, j };
        }
      }
    }
  }

  return bestMove;
};

const minimax = (board, depth, isMaximizing) => {
  let result = checkWinner(board);
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] === "") {
          board[i][j] = "O";
          let score = minimax(board, depth + 1, false);
          board[i][j] = "";
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] === "") {
          board[i][j] = "X";
          let score = minimax(board, depth + 1, true);
          board[i][j] = "";
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
};

const equals3 = (a, b, c) => {
  return a === b && b === c;
};

export const checkWinner = (board) => {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== "" &&
      board[i][1] !== "" &&
      board[i][2] !== "" &&
      equals3(board[i][0], board[i][1], board[i][2])
    ) {
      winner = board[i][0];
      return winner;
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] !== "" &&
      board[1][i] !== "" &&
      board[2][i] !== "" &&
      equals3(board[0][i], board[1][i], board[2][i])
    ) {
      winner = board[0][i];
      return winner;
    }
  }

  // Diagonal
  if (
    board[0][0] !== "" &&
    board[1][1] !== "" &&
    board[2][2] !== "" &&
    equals3(board[0][0], board[1][1], board[2][2])
  ) {
    winner = board[0][0];
    return winner;
  }
  if (
    board[2][0] !== "" &&
    board[1][1] !== "" &&
    board[0][2] !== "" &&
    equals3(board[2][0], board[1][1], board[0][2])
  ) {
    winner = board[2][0];
    return winner;
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        openSpots++;
      }
    }
  }

  if (winner === null && openSpots === 0) {
    return "tie";
  } else {
    return winner;
  }
};
