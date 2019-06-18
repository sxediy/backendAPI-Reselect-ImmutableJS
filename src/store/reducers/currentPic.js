import { Map } from 'immutable';
import {
  RECEIVE_CURRENT_PICTURE,
  FAIL_CURRENT_PICTURE
} from '../actionTypes';

const currentPic = (state = Map({}), action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_PICTURE:
      return state.merge(action.payload);
    case FAIL_CURRENT_PICTURE:
      return { errorMessage: action.payload };
    default:
      return state;
  }
};

export default currentPic;
