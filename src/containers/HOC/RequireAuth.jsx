import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { notLoggedIn, alreadyLoggedIn } from './actions';

export default function RequireAuth (ComposedComponent) {
  class Authenticate extends Component {

    render() {
      // console.log('**Inside HOC: ', this.props);
      const { user, location } = this.props;
      const token = user.token || localStorage.getItem('user');
      // set location state to be used when person is not authenticated
      const locationState = {
        sendTo: location.pathname,
        error: {
          header: 'Failed to recognize you',
          content : 'Please Login to continue',
          type : {
            negative : true
          }
        }
      }
      
      if (!token) {
        return (
          <Redirect 
            to={{
              pathname: '/login',
              state: locationState
            }}
          />
        );
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
      user: state.user
    };
  }

  return connect(mapStateToProps, null)(Authenticate);
}