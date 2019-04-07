import { createReducer } from 'redux-create-reducer';
import * as actions from '../constants/actions';

const initialState = {};

const gameBoardReducer = createReducer(initialState, {
  [actions.GAME_BOARD_CREATED](state, action) {
    return {
      ...state,
      ...{
        gameBoardLeft: action.left,
        gameBoardTop: action.top,
        gameBoardRight: action.right,
        gameBoardBottom: action.bottom
      }
    };
  }
});

export default gameBoardReducer;
