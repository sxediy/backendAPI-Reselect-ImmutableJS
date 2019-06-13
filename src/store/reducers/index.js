import { combineReducers } from 'redux';
import currentPic from './currentPic';
import historyPic from './historyPic';

export default combineReducers({
  currentPic,
  historyPic,
});
