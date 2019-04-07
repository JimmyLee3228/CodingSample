import React from 'react';
import { connect } from 'react-redux';
import {
  GAME_BOARD_WIDTH,
  GAME_BOARD_HEIGHT
} from '../constants';

import { gameBoardCreated } from '../constants/actions';

const style = {
  width: GAME_BOARD_WIDTH + 'px',
  height: GAME_BOARD_HEIGHT + 'px',
  margin: 'auto',
  backgroundColor: '#CCCC00'
};

const mapDispatch = (dispatch) => {
  return {
    afterCreating: (left, top, right, bottom) => {
      dispatch(gameBoardCreated(left, top, right, bottom));
    }
  };
};

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const domRect = this.ref.current.getBoundingClientRect();
    const { left, top, right, bottom } = domRect;
    this.props.afterCreating(left, top, right, bottom);
  }

  render() {
    return (
      <svg x="200" y="200">
        <rect
          ref={this.ref}
          rx="5"
          width={GAME_BOARD_WIDTH}
          height={GAME_BOARD_HEIGHT}
          fill='#CCCC00'
          mask='url(#cell-mask)'
          />
      </svg>
    );
  }
}

export default connect(null, mapDispatch)(GameBoard);
