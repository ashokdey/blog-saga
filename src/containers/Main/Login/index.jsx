import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import { SubmissionError, startSubmit } from 'redux-form';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../../components/LoginForm';
import PopupMessage from '../../../components/PopupMessage';

class Login extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ username = '', password = '' }) {
    // console.log('****Login.jsx', this.props);

    let redirectToURL = '/';
    if (this.props.location.state) {
      redirectToURL = this.props.location.state.sendTo;
    }

    this.props.startSubmit('LoginForm');
    const error = {};
    let isError = false;

    if (username.trim() === '' || username.trim().length < 5) {
      error.username = 'Required and minimum 5 chars';
      isError = true;
    }

    if (password.trim() === '' || password.trim().length < 5) {
      error.password = 'Required and minimum 5 chars';
      isError = true;
    }

    if (isError) {
      throw new SubmissionError(error);
    } else {
      this.props.loginUser({ username, password }, redirectToURL);
    }
  }

  render() {
    console.log('**Inside Login: ', this.props);
    
    const { user, location } = this.props;
    if (user.token || localStorage.getItem('user')) {
      return (<Redirect to="/" />);
    }
    let message = null;
    let isError = false;

    const locationState = location.state || null;

    if (user.error && locationState) {
      if (locationState.error)  {
        isError = true
        locationState.error = null;
        message = {
          header: 'Error while login',
          content : user.error,
          type : {
            negative : true
          }
        }
      }
    } else if (user.error) {
      isError = true
      message = {
        header: 'Error while login',
        content : user.error,
        type : {
          negative : true
        }
      }
    } else if (locationState && locationState.error) {
      isError = true;
      message = locationState.error;

    }
    
    return (
      <div>
        { isError ? <PopupMessage message={message}/> : '' }
        <br/>
        <br/>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { 
    user : state.user,
  };
}

export default connect(mapStateToProps, { loginUser, startSubmit })(Login);