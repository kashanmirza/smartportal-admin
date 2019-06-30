import * as ActionTypes from './ActionTypes';
import InternalApi from '../../shared/Helper/InternalApi';


export const serviceSupportContractsLoading = () => ({
  type: ActionTypes.SERVICE_SUPPORT_CONTRACTS_LOADING,
});

export const serviceSupportContractsFailed = errmess => ({
  type: ActionTypes.SERVICE_SUPPORT_CONTRACTS_FAILED,
  payload: errmess,
});

export const addServiceSupportContracts = payload => ({
  type: ActionTypes.ADD_SERVICE_SUPPORT_CONTRACTS,
  payload,
});


export const fetchServiceSupportContracts = () => (dispatch) => {
  dispatch(serviceSupportContractsLoading(true));

  InternalApi.get('/GetServiceSupportContracts').then((serviceSupportContracts) => {
    dispatch(addServiceSupportContracts(serviceSupportContracts));
  });
};
