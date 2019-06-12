import { GET_PICTURESDATA, PICTURESDATA_SUCCESS, PICTURESDATA_FAIL } from '../actionTypes';

const pictures = (state = {}, action) => {
  switch (action.type) {
    case GET_PICTURESDATA:
      return { ...state, fetchURL: action.payload };
    case PICTURESDATA_SUCCESS:
      return { ...state, ...action.payload };
    case PICTURESDATA_FAIL:
      return { errorMessage: action.payload };
    default:
      return state;
  }
};

export default pictures;
