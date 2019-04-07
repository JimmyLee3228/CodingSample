import React from 'react';
import { connect } from 'react-redux';
import Checkers from './Checkers';
import GameBoard from './GameBoard';
import {
  GAME_BOARD_WIDTH,
  GAME_BOARD_HEIGHT,
  CHECKER_RADIUS,
  GAME_CELL_SIDE_LENGTH
} from '../constants';

import { documentMouseMove } from '../constants/actions';

const mapDispatch = (dispatch) => {
  return {
    mouseMove: (x, y) => dispatch(documentMouseMove(x, y))
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(e) {
    this.props.mouseMove(e.pageX, e.pageY);
  }

  render() {
    return (
      <svg onMouseMove={this.onMouseMove} width='100vw' height="100vh" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cell-pattern" patternUnits="userSpaceOnUse" width={GAME_CELL_SIDE_LENGTH} height={GAME_CELL_SIDE_LENGTH}>
            <circle  cx={GAME_CELL_SIDE_LENGTH/2} cy={GAME_CELL_SIDE_LENGTH/2} r={CHECKER_RADIUS} fill="black"></circle>
          </pattern>
          <mask id="cell-mask">
            <rect width={GAME_BOARD_WIDTH} height={GAME_BOARD_HEIGHT} fill="white"></rect>
            <rect width={GAME_BOARD_WIDTH} height={GAME_BOARD_HEIGHT} fill="url(#cell-pattern)"></rect>
          </mask>
        </defs>
        <Checkers />
        <GameBoard />
      </svg>
    );
  }
}

export default connect(null, mapDispatch)(App);
