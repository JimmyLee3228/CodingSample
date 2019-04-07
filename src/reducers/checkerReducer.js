import { createReducer } from 'redux-create-reducer';
import * as actions from '../constants/actions';

const initialState = {
  peices: [{
    player: 1,
    x: 50,
    y: 50
  }]
};

const checkerReducer = createReducer(initialState, {

});

export default checkerReducer;
