import { CHECKER_RADIUS } from '../constants';

const getCheckerCoords = (x, offsetX, y, offsetY, left, top, right, bottom, prevX, prevY) => {
  const coords = {};

  const centerX = x + offsetX;
  const centerY = y + offsetY;
  const prevCenterX = prevX + offsetX;
  const prevCenterY = prevY + offsetY;

  const isMoveRight = centerX > prevCenterX;
  const isMoveLeft = centerX < prevCenterX;
  const isMoveDown = centerY > prevCenterY;
  const isMoveUp = centerY < prevCenterY;

  const isLeft = centerX < left - CHECKER_RADIUS;
  const isRight = centerX > right + CHECKER_RADIUS;
  const isAbove = centerY < top - CHECKER_RADIUS;
  const isBelow = centerY > bottom + CHECKER_RADIUS;
  const isNotIntersecting = (isLeft || isAbove || isRight || isBelow);

  if (isNotIntersecting && (isMoveRight || isMoveLeft)) {
    coords.x = centerX;
  }  else {
    if (isLeft) {
      coords.x = left - CHECKER_RADIUS;
    } else if (isRight) {
      coords.x = right + CHECKER_RADIUS;
    } else {
      coords.x = prevCenterX
    }
  }

  if (isNotIntersecting && (isMoveUp || isMoveDown)) {
    coords.y = centerY;
  } else {
    if (isAbove) {
      coords.y = top - CHECKER_RADIUS;
    } else if (isBelow) {
      coords.y = bottom + CHECKER_RADIUS;
    } else {
      coords.y = prevCenterY;
    }
  }

  return coords;
};

export default getCheckerCoords;
