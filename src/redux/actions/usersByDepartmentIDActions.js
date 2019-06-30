import * as ActionTypes from './ActionTypes';
import InternalApi from '../../shared/Helper/InternalApi';


// services operation


export const usersByDepartmentIDLoading = () => ({
  type: ActionTypes.USERS_BYDEPARTMENTID_LOADING,
});

export const usersByDepartmentIDFailed = errmess => ({
  type: ActionTypes.USERS_BYDEPARTMENTID_FAILED,
  payload: errmess,
});

export const addUsersByDepartmentID = payload => ({
  type: ActionTypes.ADD_USERS_BYDEPARTMENTID,
  payload,
});


export const fetchUsersByDepartmentID = () => (dispatch) => {
  dispatch(usersByDepartmentIDLoading(true));

  InternalApi.get('/GetUsersByDepartmentID').then((users) => {
    dispatch(addUsersByDepartmentID(users));
  });
};
