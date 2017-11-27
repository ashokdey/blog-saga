import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notLoggedIn } from './actions';

export default function RequireAuth (ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      // console.log(this.props);
      const { user } = this.props;
      const token = user.token || localStorage.getItem('user');
      if (!token) {
        this.props.notLoggedIn();
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} /> 
      );
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth,
      user: state.user,
    };
  }

  return connect(mapStateToProps, { notLoggedIn })(Authenticate);
}