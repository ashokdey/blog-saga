import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { notLoggedIn, alreadyLoggedIn } from './actions';

export default function RequireAuth (ComposedComponent) {
  class Authenticate extends Component {

    render() {
      const { user } = this.props;
      const token = user.token || localStorage.getItem('user');
      if (!token) {
        this.props.notLoggedIn();
        return (<Redirect to="/login"/>);
      }
      else {
        // this.props.alreadyLoggedIn();
        return (
          <ComposedComponent {...this.props} /> 
        );
      }
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth,
      user: state.user,
    };
  }

  return connect(mapStateToProps, { notLoggedIn, alreadyLoggedIn })(Authenticate);
}