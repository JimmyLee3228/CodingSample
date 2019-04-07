import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import gameBoardReducer from './gameBoardReducer';
import checkerReducer from './checkerReducer';
import appReducer from './appReducer';
import ormReducer from './ormReducer';

export default combineReducers({
  game: gameReducer,
  gameBoard: gameBoardReducer,
  checkers: checkerReducer,
  app: appReducer,
  orm: ormReducer
});
