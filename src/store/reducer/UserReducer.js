import { FETCH_USER_SUCCESS } from "../../constants";
const intialState = {
  isLoading: false,
  user: {},
  error: null,
};
export const UserReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_USER_LOADING':
      return {
        isLoading: true,
        user: {},
        error: null,
      };
    case FETCH_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.email,
        error: null,
      };
    case 'FETCH_USER_ERROR':
      return {
        isLoading: false,
        user: {},
        error: action.error,
      };
    default:
      return state;
  }
};
