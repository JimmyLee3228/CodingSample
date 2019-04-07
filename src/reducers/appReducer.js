import { createReducer } from 'redux-create-reducer';
import * as actions from '../constants/actions';

const initialState = {};

const appReducer = createReducer(initialState, {
  [actions.DOCUMENT_MOUSE_MOVE](state, action) {
    const { x, y } = action;
    return {
      ...state,
      ...{
        x,
        y
      }
    };
  },
  [actions.DOCUMENT_MOUSE_DOWN](state, action) {
    return {
      ...state,
      mouseDown: true
    };
  },
  [actions.DOCUMENT_MOUSE_UP](state, action) {
    return {
      ...state,
      mouseDown: false
    };
  }
});

export default appReducer;
