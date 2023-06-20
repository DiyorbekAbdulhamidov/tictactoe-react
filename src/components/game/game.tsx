import React from "react";
import "./game.scss";

interface GameState {
  board: string[];
  currentPlayer: string;
}

export default class Game extends React.Component<{}, GameState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      board: Array(9).fill(""),
      currentPlayer: "X",
    };
  }

  handlePlayerClick = (idx: number) => {
    const newBoard = [...this.state.board];
    if (newBoard[idx] === "") {
      newBoard[idx] = this.state.currentPlayer;

      const winner = this.checkWin(newBoard);
      if (winner) {
        alert(`Player ${winner} is the winner!`);
        return;
      }

      const newCurrentPlayer = this.state.currentPlayer === "X" ? "O" : "X";
      this.setState({
        currentPlayer: newCurrentPlayer,
        board: newBoard,
      });
    }
  };

  handleRestart = () => {
    this.setState({
      board: Array(9).fill(""),
      currentPlayer: "X",
    });
  };

  checkWin(board: string[]) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  render() {
    const boardElements = [];
    for (let i = 0; i < 9; i++) {
      boardElements.push(
        <div
          onClick={() => this.handlePlayerClick(i)}
          key={i}
          className="board-cell"
        >
          {this.state.board[i] || null}
        </div>
      );
    }

    const winner = this.checkWin(this.state.board);

    return (
      <div className="game">
        <div className="game-elements">
          <div className="game-board">{boardElements}</div>
          <div className="game-info">
            {winner ? (
              <p>Winner: {winner}</p>
            ) : (
              <p>Next Player: {this.state.currentPlayer}</p>
            )}
          </div>
        </div>
        <button onClick={this.handleRestart}>Restart</button>
      </div>
    );
  }
}
