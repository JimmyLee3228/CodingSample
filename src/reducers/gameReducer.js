import { createReducer } from 'redux-create-reducer';
import * as actions from '../constants/actions';

const initialState = {
  player: 1
};

const gameReducer = createReducer(initialState, {
  [actions.PLAYER_MOVED](state, action) {
    return state;
  }
});

export default gameReducer;
