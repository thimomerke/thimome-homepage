import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import Home from './pages/Home';
import Legal from './pages/Legal';

const Main = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Thimo Merke</title>
      </Helmet>
      <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/legal' component={Legal}></Route>
      </Switch>
    </div>
  );
}

export default Main;