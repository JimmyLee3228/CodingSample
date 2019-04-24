import { createSelector } from 'redux-orm';
import orm from '../models/orm';

import { currentPlayerIdSelector } from './selectors';

const ormSelector = state => state.orm;

const playerSelector = createSelector(
  orm,
  ormSelector,
  currentPlayerIdSelector,
  (session, playerId) => {
    return session.Player.withId(playerId).ref;
  }
);

export const playerColorSelector = createSelector(
  orm,
  ormSelector,
  playerSelector,
  (session, player) => player.color
);

export const checkersSelector = createSelector(
  orm,
  ormSelector,
  session => {
    return session.Checker.all().toRefArray();
  }
);

export const checkerIdsSelector = createSelector(
  orm,
  ormSelector,
  checkersSelector,
  (session, checkers) => {
    return checkers.map(checker => checker.id);
  }
);

export const creaceCheckerSelector = (checkerId) => {
  return createSelector(
    orm,
    ormSelector,
    session => {
      const checker = session.Checker.withId(checkerId);
      const obj = checker.ref;
      return {
        ...obj,
        ...{
          player: checker.player.ref
        }
      };
    }
  );
};
