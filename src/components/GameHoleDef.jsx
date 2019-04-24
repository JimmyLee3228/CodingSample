import React from 'react';
import {
  GAME_BOARD_WIDTH,
  GAME_BOARD_HEIGHT,
  CHECKER_RADIUS,
  GAME_CELL_SIDE_LENGTH
} from '../constants';

const GameHoleDef = () => {
  return (
    <defs>
      <pattern id="cell-pattern" patternUnits="userSpaceOnUse" width={GAME_CELL_SIDE_LENGTH} height={GAME_CELL_SIDE_LENGTH}>
        <circle  cx={GAME_CELL_SIDE_LENGTH/2} cy={GAME_CELL_SIDE_LENGTH/2} r={CHECKER_RADIUS} fill="black"></circle>
      </pattern>
      <mask id="cell-mask">
        <rect width={GAME_BOARD_WIDTH} height={GAME_BOARD_HEIGHT} fill="white"></rect>
        <rect width={GAME_BOARD_WIDTH} height={GAME_BOARD_HEIGHT} fill="url(#cell-pattern)"></rect>
      </mask>
    </defs>
  );
};

export default GameHoleDef;
