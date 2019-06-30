import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  isLoading: true,
  errMess: '',
  users: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_USERS_BYDEPARTMENTID:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        users: action.payload,

      };
    case ActionTypes.USERS_BYDEPARTMENTID_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: '',
        users: [],
      };
    case ActionTypes.USERS_BYDEPARTMENTID_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        users: [],
      };
    default:
      return state;
  }
}
