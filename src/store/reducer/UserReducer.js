import { LOAD_USER_FULFILLED,LOAD_USER_PENDING,LOAD_USER_REJECTED} from "../../constants";
const intialState = {
  isLoading: false,
  user: {},
  error: null,
};
export const UserReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case LOAD_USER_PENDING:
      return {
        isLoading: true,
        user: {},
        error: null,
      };
    case LOAD_USER_FULFILLED :
      return {
        isLoading: false,
        user: action.payload.data.results[0],
        error: null,
      };
    case LOAD_USER_REJECTED:
      return {
        isLoading: false,
        user: {},
        error: action.payload.response.data,
      };
    default:
      return state;
  }
};
