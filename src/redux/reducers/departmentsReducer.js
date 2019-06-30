import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  isLoading: true,
  errMess: '',
  departments: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        departments: action.payload,

      };
    case ActionTypes.DEPARTMENTS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: '',
        departments: [],
      };
    case ActionTypes.DEPARTMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        departments: [],
      };
    default:
      return state;
  }
}
