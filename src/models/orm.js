import { ORM } from 'redux-orm';
import Checker from './Checker';
import Player from './Player';

const orm = new ORM();
orm.register(Checker, Player);

export default orm;
