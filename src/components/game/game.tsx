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
      currentPlayer: "O",
    };
  }

  handlePlayerClick = (index: number) => {
    this.setState((prevState) => {
      const newCurrentPlayer = prevState.currentPlayer === "X" ? "O" : "X";
      const newBoard = [...prevState.board];
      if (newBoard[index] === "") {
        newBoard[index] = newCurrentPlayer;
      }
      return {
        currentPlayer: newCurrentPlayer,
        board: newBoard,
      };
    });
  };

  handleRestart = () => {
    this.setState({
      board: Array(9).fill(""),
      currentPlayer: "O",
    });
  };

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
    console.log(boardElements);


    return (
      <div className="game">
        <div className="game-elements">
          <div className="game-board">{boardElements}</div>
          <div className="game-info">
            <p>Next Player: {this.state.currentPlayer === "X" ? "O" : "X"}</p>
          </div>
        </div>
        <button onClick={this.handleRestart}>Restart</button>
      </div>
    );
  }
}