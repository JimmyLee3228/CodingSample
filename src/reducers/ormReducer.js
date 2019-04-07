import { createReducer } from 'redux-create-reducer';
import * as actions from '../constants/actions';
import orm from '../models/orm';

const emptyDBState = orm.getEmptyState();
const session = orm.session(emptyDBState);

session.Player.create({
  id: 1,
  name: 'John Doe',
  color: 'red'
});

session.Player.create({
  id: 2,
  name: 'Jane Doe',
  color: 'blue'
});

session.Checker.create({
  id: 1,
  player: 1,
  x: 50,
  y: 50
});

const initialState = session.state;

const ormReducer = createReducer(initialState, {
  [actions.CHECKER_MOVED](state, action) {
    const session = orm.session(state);
    session.Checker.withId(action.id).update({
      x: action.x,
      y: action.y
    });
    return session.state;
  }
});

export default ormReducer;
