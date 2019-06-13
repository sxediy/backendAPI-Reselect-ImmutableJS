import { ADD_PICTURE_TO_HISTORY, REMOVE_PICTURE_FROM_HISTORY } from '../actionTypes';

const historyPic = (state = {}, action) => {
  switch (action.type) {
    case ADD_PICTURE_TO_HISTORY:
      return [...state, action.payload];
    case REMOVE_PICTURE_FROM_HISTORY:
      return [...state];
    default:
      return state;
  }
};

export default historyPic;
