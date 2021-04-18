import React from 'react';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ProvideAuth from './ProvideAuth';

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}


export default App;
