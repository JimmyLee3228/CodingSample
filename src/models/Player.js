import { attr, Model } from 'redux-orm';

export default class Player extends Model {
  static modelName = 'Player';

  static fields = {
    id: attr(),
    name: attr(),
    color: attr()
  };
}
