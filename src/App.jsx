import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux'
import Header from './components/Header'
import Login from './containers/Main/Login';
import Register from './containers/Main/Register';
import Home from './components/Home';
import RequireAuth from './containers/HOC/RequireAuth';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

class App extends Component {
  render() {
    return (
      <div>
        <ConnectedRouter history={history}>
          <div>
          <Header />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={RequireAuth(Home)} />
            </Switch>
          </div>
        </ConnectedRouter>
      </div>
    );
  }
}

export default App;
