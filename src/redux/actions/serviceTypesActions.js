import * as ActionTypes from './ActionTypes';
import InternalApi from '../../shared/Helper/InternalApi';


// services operation


export const serviceTypesLoading = () => ({
  type: ActionTypes.SERVICETYPES_LOADING,
});

export const serviceTypesFailed = errmess => ({
  type: ActionTypes.SERVICETYPES_FAILED,
  payload: errmess,
});

export const addServiceTypes = payload => ({
  type: ActionTypes.ADD_SERVICETYPES,
  payload,
});


export const fetchServiceTypes = () => (dispatch) => {
  dispatch(serviceTypesLoading(true));

  InternalApi.get('/GetServiceTypes').then((serviceTypes) => {
    dispatch(addServiceTypes(serviceTypes));
  });
};
