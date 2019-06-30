import * as ActionTypes from './ActionTypes';
import InternalApi from '../../shared/Helper/InternalApi';


// services operation


export const servicesLoading = () => ({
  type: ActionTypes.SERVICES_LOADING,
});

export const servicesFailed = errmess => ({
  type: ActionTypes.SERVICES_FAILED,
  payload: errmess,
});

export const addServices = payload => ({
  type: ActionTypes.ADD_SERVICES,
  payload,
});


export const fetchServices = () => (dispatch) => {
  dispatch(servicesLoading(true));

  InternalApi.get('/adminservice').then((services) => {
    const payload = {
      services,
    };
    dispatch(addServices(payload));
  });
};

export const postService = data => (dispatch) => {
  dispatch(servicesLoading(true));

  console.log(`Post service data: ${JSON.stringify(data)}`);

  InternalApi.post('/adminservice', data).then(() => {
    dispatch(fetchServices());
  });
};
