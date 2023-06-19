"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./game.scss");
class Game extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.handlePlayerClick = (index) => {
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
        this.handleRestart = () => {
            this.setState({
                board: Array(9).fill(""),
                currentPlayer: "O",
            });
        };
        this.state = {
            board: Array(9).fill(""),
            currentPlayer: "O",
        };
    }
    render() {
        const boardElements = [];
        for (let i = 0; i < 9; i++) {
            boardElements.push(react_1.default.createElement("div", { onClick: () => this.handlePlayerClick(i), key: i, className: "board-cell" }, this.state.board[i] || null));
        }
        console.log(boardElements);
        return (react_1.default.createElement("div", { className: "game" },
            react_1.default.createElement("div", { className: "game-elements" },
                react_1.default.createElement("div", { className: "game-board" }, boardElements),
                react_1.default.createElement("div", { className: "game-info" },
                    react_1.default.createElement("p", null,
                        "Next Player: ",
                        this.state.currentPlayer === "X" ? "O" : "X"))),
            react_1.default.createElement("button", { onClick: this.handleRestart }, "Restart")));
    }
}
exports.default = Game;
