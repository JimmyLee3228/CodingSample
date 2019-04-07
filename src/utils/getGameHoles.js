import {
  GAME_BOARD_WIDTH,
  GAME_BOARD_ROWS,
  GAME_BOARD_COLUMNS,
  GAME_HOLE_PADDING,
  GAME_CELL_SIDE_LENGTH
} from '../constants';

const getGameHoles2 = () => {
  const gameHoles = [];

  for (let row = 0; row < GAME_BOARD_ROWS; row+=1) {
    const row = [];
    const top = (row + GAME_HOLE_PADDING) + (row * GAME_CELL_SIDE_LENGTH);

    for (let col = 0; col < GAME_BOARD_COLUMNS; col+=1) {
      const left = (col + GAME_HOLE_PADDING) + (col * GAME_CELL_SIDE_LENGTH);

      row.push({
        left,
        top
      });
    }

    gameHoles.push(row);
  }

  return gameHoles;
}

const gameHoles = [];

const getGameHoles = () => {
  if (gameHoles.length > 0) return gameHoles;

  for (let col = 0; col < GAME_BOARD_COLUMNS; col+=1) {
    const column = [];
    const x = col * GAME_CELL_SIDE_LENGTH;

    for (let row = 0; row < GAME_BOARD_ROWS; row+=1) {
      const y = row * GAME_CELL_SIDE_LENGTH;

      column.push({
        x,
        y
      });
    }

    gameHoles.push(column);
  }

  return gameHoles;
}

export default getGameHoles;
