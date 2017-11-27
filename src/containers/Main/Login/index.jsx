import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import { SubmissionError, startSubmit } from 'redux-form';
import LoginForm from '../../../components/LoginForm';
import PopupMessage from '../../../components/PopupMessage';

class Login extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ username = '', password = '' }) {
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
      this.props.loginUser({ username, password });
    }
  }

  render() {
    // console.log(this.props);
    const { user, auth } = this.props;
    let message = null;

    if (user.error) {
      message = {
        header: 'Error while login',
        content : user.error,
        type : {
          negative : true
        }
      }
    }
    if (auth.error) {
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
        { (user.error) ? <PopupMessage message={message}/> : '' }
        { (auth.error) ? <PopupMessage message={message}/> : '' }
        
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