import { combineReducers } from 'redux-immutable';
import currentPic from './currentPic';
import historyPictures from './historyPictures';

const rootreducer = combineReducers({
  currentPic,
  historyPictures,
});

export default rootreducer;
