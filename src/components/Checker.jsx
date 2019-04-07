import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  mouseCoordsSelector,
  gameBoardDimensionsSelector,
  mouseDownSelector
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
    mouseCoords: mouseCoordsSelector(state),
    checker: checkerSelector(state),
    gameBoardDimensions: gameBoardDimensionsSelector(state),
    isMouseDown: mouseDownSelector(state)
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

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.dragging === false) return null;
    const x = props.mouseCoords.x;
    const y = props.mouseCoords.y;
    const { left, top, right, bottom } = props.gameBoardDimensions;
    const prevX = state.x;
    const prevY = state.y;
    return getCheckerCoords(x, state.offsetX, y, state.offsetY, left, top, right, bottom, prevX, prevY);
  }

  onMouseDown(e) {
    const x = e.pageX;
    const y = e.pageY;
    this.setState(state => ({
      dragging: true,
      offsetX: x - state.x,
      offsetY: y - state.y
    }));
  }

  onMouseUp() {
    this.setState(state => {
      const x = state.x - state.offsetX;
      const y = state.y - state.offsetY;
      this.props.checkerMoved(this.props.id, x, y);
      return {
        dragging: false,
        x,
        y,
        offsetX: 0,
        offsetY: 0
      };
    });
  }

  render() {
    return <circle
      cx={this.state.x - this.state.offsetX}
      cy={this.state.y - this.state.offsetY}
      r={CHECKER_RADIUS}
      fill={this.props.checker.player.color}
      onMouseDown={this.onMouseDown}
      onMouseUp={this.onMouseUp}
    />;
  }
}

Checker.propTypes = {
  color: PropTypes.oneOf(['red', 'blue'])
};

export default connect(mapState, mapDispatch)(Checker);
