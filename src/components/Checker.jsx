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
import { TaskTimer } from 'tasktimer';

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
  dragging = false;
  offsetX = 0;
  offsetY = 0;
  animationIncrementStart = 5;
  animationIncrementEnd = 100;
  animationIncreasePercent = 15;
  animationIncrement = 0;

  constructor(props) {
    super(props);
    this.state = {
      x: 50,
      y: 50
    };

    this.animationTimer = new TaskTimer(30);
    this.animationIncrement = this.animationIncrementStart;

    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.drop = this.drop.bind(this);

    this.animationTimer.add(this.drop);
    this.animationTimer.on('started', () => {
      this.animationIncrement = this.animationIncrementStart;
    });
    this.animationTimer.on('tick', () => {
      if (this.animationIncrement > this.animationIncrementEnd) {
        this.animationIncrement = this.animationIncrementEnd;
      } else {
        this.animationIncrement = this.animationIncrement + (this.animationIncrement * (this.animationIncreasePercent / 100));
      }
    });
  }

  drop() {
    const animationIncrement = this.animationIncrement;
    const { bottom } = this.props.gameBoardDimensions;

    this.setState(state => {
      const y = state.y;
      const spaceLeft = bottom - CHECKER_RADIUS - y;
      const newState = {};

      if (spaceLeft < animationIncrement) {
        newState.y = y + spaceLeft;
      } else {
        newState.y = y + animationIncrement;
      }

      return newState;
    });
  }

  onMouseUp() {
    this.animationTimer.start();
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;

    document.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(e) {
    const x = e.pageX;
    const y = e.pageY;
    const { left, top, right, bottom } = this.props.gameBoardDimensions;
    const offsetX = this.offsetX;
    const offsetY = this.offsetY;

    this.setState(state => {
      const checkerX = state.x;
      const checkerY = state.y;

      return getCheckerCoords(checkerX, checkerY, x, y, left, top, right, bottom, offsetX, offsetY);
    });
  }

  onMouseDown(e) {
    this.animationTimer.stop();
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    this.dragging = true;
    this.offsetX = mouseX - this.state.x;
    this.offsetY = mouseY - this.state.y;

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentDidMount() {
    this.animationTimer.start();
  }

  render() {
    const { x, y } = this.state;
    const { checker } = this.props;
    const { player } = checker;
    const { color } = player;
    const { onMouseDown } = this;

    return <circle
      cx={x}
      cy={y}
      r={CHECKER_RADIUS}
      fill={color}
      onMouseDown={onMouseDown}
    />;
  }
}

Checker.propTypes = {
  color: PropTypes.oneOf(['red', 'blue'])
};

export default connect(mapState, mapDispatch)(Checker);
