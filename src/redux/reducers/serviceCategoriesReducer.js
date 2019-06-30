import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  isLoading: true,
  errMess: '',
  serviceCategories: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_SERVICE_CATEGORIES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        serviceCategories: action.payload,

      };
    case ActionTypes.SERVICE_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: '',
        serviceCategories: [],
      };
    case ActionTypes.SERVICE_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        serviceCategories: [],
      };
    default:
      return state;
  }
}
