import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  isLoading: true,
  errMess: '',
  services: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_SERVICES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        services: action.payload.services,

      };
    case ActionTypes.SERVICES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: '',
        services: [],
      };
    case ActionTypes.SERVICES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        services: [],
      };
    default:
      return state;
  }
}
