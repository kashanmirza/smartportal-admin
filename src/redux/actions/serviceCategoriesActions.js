import * as ActionTypes from './ActionTypes';
import InternalApi from '../../shared/Helper/InternalApi';


export const servicesCategoriesLoading = () => ({
  type: ActionTypes.SERVICE_CATEGORIES_LOADING,
});

export const servicesCategoriesFailed = errmess => ({
  type: ActionTypes.SERVICE_CATEGORIES_FAILED,
  payload: errmess,
});

export const addServicesCategories = payload => ({
  type: ActionTypes.ADD_SERVICE_CATEGORIES,
  payload,
});


export const fetchServiceCategory = () => (dispatch) => {
  dispatch(servicesCategoriesLoading(true));

  InternalApi.get('/GetServiceCategoriesWithParentInfo').then((serviceCategories) => {
    dispatch(addServicesCategories(serviceCategories));
  });
};

export const postService = data => (dispatch) => {
  dispatch(servicesCategoriesLoading(true));

  console.log(`Post service data: ${JSON.stringify(data)}`);

  InternalApi.post('/GetServiceCategoriesWithParentInfo', data).then(() => {
    dispatch(fetchServiceCategory());
  });
};
