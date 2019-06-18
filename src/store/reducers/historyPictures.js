import { List } from 'immutable';
import { ADD_PICTURE_TO_HISTORY, REMOVE_PICTURE_FROM_HISTORY } from '../actionTypes';

const historyPictures = (state = List([]), action) => {
  switch (action.type) {
    case ADD_PICTURE_TO_HISTORY:
      return state.push(action.payload);
    case REMOVE_PICTURE_FROM_HISTORY:
      return state.filter(picture => picture.id !== action.payload);
    default:
      return state;
  }
};

export default historyPictures;
