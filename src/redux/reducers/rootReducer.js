import { combineReducers } from 'redux';
import game_shop from './gameShopReducer';

const rootReducer = combineReducers({
  game_shop,
});

export default rootReducer;
