import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  isLoading: true,
  errMess: '',
  serviceTypes: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_SERVICETYPES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        serviceTypes: action.payload,

      };
    case ActionTypes.SERVICETYPES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: '',
        serviceTypes: [],
      };
    case ActionTypes.SERVICETYPES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        serviceTypes: [],
      };
    default:
      return state;
  }
}
