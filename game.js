document.addEventListener("DOMContentLoaded", () => {
  let game = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = "X";

  const checkWinner = () => {
    const wins = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    for (let pattern of wins) {
      let p = pattern.map((i) => game[i - 1]);
      if (p.every((i) => i === currentPlayer)) {
        return currentPlayer;
      }
    }
    return null;
  };

  let cells = document.querySelectorAll(".checkbox");
  cells.forEach((c, i) => {
    c.addEventListener("click", () => {
      if (game[i] === "" && !checkWinner()) {
        game[i] = currentPlayer;
        c.innerHTML = currentPlayer;
        if (checkWinner()) {
          document.querySelector(
            "#turn"
          ).innerHTML = `Player ${currentPlayer} wins!`;
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          document.querySelector(
            "#turn"
          ).innerHTML = `Player ${currentPlayer}'s turn`;
        }
      }
    });
  });

  let reset = document.querySelector("#reset");
  reset.addEventListener("click", () => {
    game = ["", "", "", "", "", "", "", "", ""];
    cells.forEach((c) => (c.innerHTML = ""));
    currentPlayer = "X";
    document.querySelector(
      "#turn"
    ).innerHTML = `Player ${currentPlayer}'s turn`;
  });
});
