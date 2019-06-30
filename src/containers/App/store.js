import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback, AddService, InitialServiceCategoriesForm } from '../../shared/forms/forms';
import {
  sidebarReducer,
  themeReducer,
  servicesReducer,
  serviceCategoriesReducer,
  departmentsReducer,
  organizationReducer,
  serviceSupportContractsReducer,
  serviceTypesReducer,
  usersByDepartmentIDReducer,
} from '../../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  services: servicesReducer,
  serviceCategories: serviceCategoriesReducer,
  departments: departmentsReducer,
  organization: organizationReducer,
  serviceSupportContracts: serviceSupportContractsReducer,
  serviceTypes: serviceTypesReducer,
  users: usersByDepartmentIDReducer,
  ...createForms({
    feedback: InitialFeedback,
    addService: AddService,
    ServiceCategoriesForm: InitialServiceCategoriesForm,
  }),
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
