export const PLAYER_MOVED = 'PLAYER_MOVED';
export const CHECKER_MOVED = 'CHECKER_MOVED';

export const GAME_BOARD_CREATED = 'GAME_BOARD_CREATED';

export const DOCUMENT_MOUSE_MOVE = 'DOCUMENT_MOUSE_MOVE';
export const DOCUMENT_MOUSE_DOWN = 'DOCUMENT_MOUSE_DOWN';
export const DOCUMENT_MOUSE_UP = 'DOCUMENT_MOUSE_UP';

export const gameBoardCreated = (left, top, right, bottom) => ({
  type: GAME_BOARD_CREATED,
  left,
  top,
  right,
  bottom
});

export const documentMouseMove = (x, y) => ({
  type: DOCUMENT_MOUSE_MOVE,
  x,
  y,
  meta: {
    throttle: 50
  }
});

export const documentMouseDown = () => ({
  type: DOCUMENT_MOUSE_DOWN
});

export const documentMouseUp = () => ({
  type: DOCUMENT_MOUSE_UP
});

export const checkerMoved = (id, x, y) => ({
  type: CHECKER_MOVED,
  id,
  x,
  y
});
