import { combineReducers } from 'redux';
import currentPic from './currentPic';
import historyPictures from './historyPictures';

export default combineReducers({
  currentPic,
  historyPictures,
});
