import { createSelector } from 'reselect';

const gameSelector = state => state.game;

export const currentPlayerIdSelector = createSelector(
  gameSelector,
  game => game.player
);

const appSelector = state => state.app;

export const mouseCoordsSelector = createSelector(
  appSelector,
  app => ({x: app.x, y: app.y})
);

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

export const mouseDownSelector = createSelector(
  appSelector,
  app => app.mouseDown
);
