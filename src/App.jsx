import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header'
import Login from './containers/Login';
import Register from './containers/Register';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Header />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
