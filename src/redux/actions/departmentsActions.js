import * as ActionTypes from './ActionTypes';
import InternalApi from '../../shared/Helper/InternalApi';


export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING,
});

export const departmentsFailed = errmess => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: errmess,
});

export const departmentsServices = payload => ({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload,
});


export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));

  InternalApi.get('/GetDepartments').then((departments) => {
    dispatch(departmentsServices(departments));
  });
};
