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
    const redirectToURL = this.props.location.state.sendTo || '/';
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
    
    const { user, auth } = this.props;
    if (user.token || localStorage.getItem('user')) {
      return (<Redirect to="/" />);
    }
    let message = null;
    let isError = false;

    if (user.error && auth.error) {
      isError = true
      auth.error = null;
      message = {
        header: 'Error while login',
        content : user.error,
        type : {
          negative : true
        }
      }
    } else if (user.error) {
      isError = true
      auth.error = null;
      message = {
        header: 'Error while login',
        content : user.error,
        type : {
          negative : true
        }
      }
    } else if (auth.error) {
      isError = true;
      message = {
        header: 'Failed to recognize you',
        content : auth.error,
        type : {
          negative : true
        }
      }
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
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { loginUser, startSubmit })(Login);