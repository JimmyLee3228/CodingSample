export const GAME_BOARD_ROWS = 6;
export const GAME_BOARD_COLUMNS = 7;

let gameBoardWidth = 500;
while (gameBoardWidth % GAME_BOARD_COLUMNS !== 0) {
  gameBoardWidth -= 1;
}

const cellWidth = (gameBoardWidth / GAME_BOARD_COLUMNS);
export const GAME_BOARD_WIDTH = gameBoardWidth;
export const GAME_BOARD_HEIGHT = cellWidth * GAME_BOARD_ROWS;
export const GAME_CELL_SIDE_LENGTH = cellWidth; // Width and height are always the same.
export const GAME_HOLE_PADDING = 10;
export const CHECKER_DIAMETER = cellWidth - (GAME_HOLE_PADDING * 2);
export const CHECKER_RADIUS = CHECKER_DIAMETER / 2;
