import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';

import ServicePage from '../Pages/Service/index';
import AddService from '../Pages/Service/Components/addservice';

import ServiceCategoryPage from '../Pages/ServiceCategory/index';
import AddServiceCategory from '../Pages/ServiceCategory/Components/addservice';

import UserManagment from '../Pages/UserManagment/index';


const Pages = () => (
  <Switch>
    <Route path="/pages/services/add" component={AddService} />
    <Route path="/pages/services" component={ServicePage} />
    <Route path="/pages/servicecategory/add" component={AddServiceCategory} />
    <Route path="/pages/servicecategory" component={ServiceCategoryPage} />
    <Route path="/pages/users" component={UserManagment} />
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
