import {
  RECEIVE_CURRENT_PICTURE,
  FAIL_CURRENT_PICTURE
} from '../actionTypes';

const currentPic = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_PICTURE:
      return { ...state, ...action.payload };
    case FAIL_CURRENT_PICTURE:
      return { errorMessage: action.payload };
    default:
      return state;
  }
};

export default currentPic;
