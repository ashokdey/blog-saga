import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { notLoggedIn, alreadyLoggedIn } from './actions';

export default function RequireAuth (ComposedComponent) {
  class Authenticate extends Component {

    render() {
      // console.log('**Inside HOC: ', this.props);
      const { user, location } = this.props;
      const token = user.token || localStorage.getItem('user');
      
      if (!token) {
        // this.props.notLoggedIn();
        return (
          <Redirect 
            to={{
              pathname: '/login',
              state: {
                sendTo: location.pathname,
                error: {
                  header: 'Failed to recognize you',
                  content : 'Please Login to continue',
                  type : {
                    negative : true
                  }
                }
              }
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
      auth: state.auth,
      user: state.user,
    };
  }

  return connect(mapStateToProps, { notLoggedIn, alreadyLoggedIn })(Authenticate);
}