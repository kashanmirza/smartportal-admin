import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  isLoading: true,
  errMess: '',
  organization: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_ORGANIZATION:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        organization: action.payload,

      };
    case ActionTypes.ORGANIZATION_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: '',
        organization: [],
      };
    case ActionTypes.ORGANIZATION_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        organization: [],
      };
    default:
      return state;
  }
}
