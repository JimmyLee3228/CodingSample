import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  gameBoardDimensionsSelector
} from '../reducers/selectors';
import { creaceCheckerSelector } from '../reducers/ormSelectors';
import { checkerMoved } from '../constants/actions';
import getCheckerCoords from '../utils/getCheckerCoords';
import {
  CHECKER_RADIUS
} from '../constants';

const mapState = (state, props) => {
  const checkerSelector = creaceCheckerSelector(props.id);
  return {
    checker: checkerSelector(state),
    gameBoardDimensions: gameBoardDimensionsSelector(state)
  };
};

const mapDispatch = dispatch => {
  return {
    checkerMoved: (id, x, y) => dispatch(checkerMoved(id, x, y))
  };
};

class Checker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 50,
      y: 50,
      dragging: false,
      offsetX: 0,
      offsetY: 0
    };

    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onMouseUp() {
    this.setState(state => ({
      dragging: false,
      offsetX: 0,
      offsetY: 0
    }));

    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(e) {
    const x = e.pageX;
    const y = e.pageY;
    const { left, top, right, bottom } = this.props.gameBoardDimensions;

    this.setState(state => {
      const checkerX = state.x;
      const checkerY = state.y;
      const offsetX = state.offsetX;
      const offsetY = state.offsetY;

      return getCheckerCoords(checkerX, checkerY, x, y, left, top, right, bottom, offsetX, offsetY);
    });
  }

  onMouseDown(e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    this.setState(state => ({
      dragging: true,
      offsetX: mouseX - state.x,
      offsetY: mouseY - state.y
    }));

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  render() {
    return <circle
      cx={this.state.x}
      cy={this.state.y}
      r={CHECKER_RADIUS}
      fill={this.props.checker.player.color}
      onMouseDown={this.onMouseDown}
    />;
  }
}

Checker.propTypes = {
  color: PropTypes.oneOf(['red', 'blue'])
};

export default connect(mapState, mapDispatch)(Checker);
