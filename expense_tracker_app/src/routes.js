import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard/Dashboard';

function Routes() {
      return (
            <Router>
                  <Switch>
                        <Route exact path={'/'} component={SignIn} />
                        <Route exact path={'/app'} component={Dashboard} />
                  </Switch>
            </Router>
      )
}

export default Routes
