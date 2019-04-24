import { createSelector } from 'reselect';

const gameSelector = state => state.game;

export const currentPlayerIdSelector = createSelector(
  gameSelector,
  game => game.player
);

const appSelector = state => state.app;

const gameBoardSelector = state => state.gameBoard;

export const gameBoardDimensionsSelector = createSelector(
  gameBoardSelector,
  gameBoard => ({
    left: gameBoard.gameBoardLeft,
    top: gameBoard.gameBoardTop,
    right: gameBoard.gameBoardRight,
    bottom: gameBoard.gameBoardBottom
  })
);
