import { CHECKER_RADIUS } from '../constants';

const getCheckerCoords = (
    checkerX,
    checkerY,
    mouseX,
    mouseY,
    left,
    top,
    right,
    bottom,
    offsetX,
    offsetY
  ) => {
  const coords = {
    x: checkerX,
    y: checkerY
  };

  const newXPosition = mouseX - offsetX;
  const newYPosition = mouseY - offsetY;

  const isMoveRight = newXPosition > checkerX;
  const isMoveLeft = newXPosition < checkerX;
  const isMoveDown = newYPosition > checkerY;
  const isMoveUp = newYPosition < checkerY;

  const isCheckerLeft = checkerX <= left - CHECKER_RADIUS;
  const isCheckerRight = checkerX >= right + CHECKER_RADIUS;
  const isCheckerAbove = checkerY <= top - CHECKER_RADIUS;
  const isCheckerBelow = checkerY >= bottom + CHECKER_RADIUS;
  const isCheckerNotIntersecting = (isCheckerLeft || isCheckerAbove || isCheckerRight || isCheckerBelow);

  const isMouseLeft = newXPosition <= left - CHECKER_RADIUS;
  const isMouseRight = newXPosition >= right + CHECKER_RADIUS;
  const isMouseAbove = newYPosition <= top - CHECKER_RADIUS;
  const isMouseBelow = newYPosition >= bottom + CHECKER_RADIUS;
  const isMouseNotIntersecting = (isMouseLeft || isMouseAbove || isMouseRight || isMouseBelow);

  if (isMouseNotIntersecting && isMoveLeft && !(isCheckerRight && isMouseLeft)) {
    coords.x = newXPosition;
  } else if (isMouseNotIntersecting && isMoveRight && !(isCheckerLeft && isMouseRight)) {
    coords.x = newXPosition;
  } else if (isCheckerAbove || isCheckerBelow) {
    coords.x = newXPosition;
  } else if (newXPosition !== checkerX) {
    if (isCheckerLeft) {
      coords.x = left - CHECKER_RADIUS;
    } else if (isCheckerRight) {
      coords.x = right + CHECKER_RADIUS;
    }
  }

  if (isMouseNotIntersecting && isMoveUp && !(isCheckerBelow && isMouseAbove)) {
    coords.y = newYPosition;
  } else if (isMouseNotIntersecting && isMoveDown && !(isCheckerAbove && isMouseBelow)) {
    coords.y = newYPosition;
  } else if (isCheckerLeft || isCheckerRight) {
    coords.y = newYPosition;
  } else if (newYPosition !== checkerY) {
    if (isCheckerAbove) {
      coords.y = top - CHECKER_RADIUS;
    } else if (isCheckerBelow) {
      coords.y = bottom + CHECKER_RADIUS;
    }
  }

  return coords;
};

export default getCheckerCoords;
