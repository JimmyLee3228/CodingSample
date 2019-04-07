import { fk, attr, Model } from 'redux-orm';

export default class Checker extends Model {
  static modelName = 'Checker';

  static fields = {
    id: attr(),
    x: attr(),
    y: attr(),
    player: fk('Player')
  };
}
