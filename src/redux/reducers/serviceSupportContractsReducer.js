import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  isLoading: true,
  errMess: '',
  serviceSupportContracts: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_SERVICE_SUPPORT_CONTRACTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        serviceSupportContracts: action.payload,

      };
    case ActionTypes.SERVICE_SUPPORT_CONTRACTS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: '',
        serviceSupportContracts: [],
      };
    case ActionTypes.SERVICE_SUPPORT_CONTRACTS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        serviceSupportContracts: [],
      };
    default:
      return state;
  }
}
