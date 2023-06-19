import React, { Component } from 'react';
import Game from "./components/game/game";

import './index.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Game></Game>
      </div>
    );
  } 
}