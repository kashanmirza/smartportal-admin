import * as ActionTypes from './ActionTypes';
import InternalApi from '../../shared/Helper/InternalApi';


export const organizationsLoading = () => ({
  type: ActionTypes.ORGANIZATION_LOADING,
});

export const organizationsFailed = errmess => ({
  type: ActionTypes.ORGANIZATION_FAILED,
  payload: errmess,
});

export const addorganizations = payload => ({
  type: ActionTypes.ADD_ORGANIZATION,
  payload,
});


export const fetchOrganizations = () => (dispatch) => {
  dispatch(organizationsLoading(true));

  InternalApi.get('/GetOrganizationFilter').then((organizations) => {
    dispatch(addorganizations(organizations));
  });
};
