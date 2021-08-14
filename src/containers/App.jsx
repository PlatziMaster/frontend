import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from "../components/Layout"
import Home from "../pages/Home"
import Education from "../pages/Education"
import Hobbies from "../pages/Hobbies"
import Additional from "../pages/Additional"
import NotFound from "../pages/NotFound"

import '../styles/components/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/education" component={Education}/>
          <Route exact path="/hobbies" component={Hobbies}/>
          <Route exact path="/additional-info" component={Additional}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
};

export default App;
