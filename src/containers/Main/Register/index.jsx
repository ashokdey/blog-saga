import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from './actions';
import { SubmissionError, startSubmit } from 'redux-form';
import isEmail from 'validator/lib/isEmail';
import RegisterForm from '../../../components/RegisterForm';
import PopupMessage from '../../../components/PopupMessage';

class Register extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ email = '', username = '', password = '' }) {
    this.props.startSubmit('RegisterForm');    
    let isError = false;
    const error = {};
    const usernamePattern = /^[a-zA-Z]([a-zA-Z0-9]+)*$/

    if (!isEmail(email)) {
      isError = true;
      error.email = 'Invalid email, try again';
    }

    if (!usernamePattern.test(username.trim()) || username.trim().length < 5) {
      isError = true;
      error.username = 'Required and minimum 5 chars [like : b33ny]';
    }

    if (password.trim().length < 5) {
      isError = true;
      error.password = 'Required and minimum 5 chars';
    }

    if (isError) {
      throw new SubmissionError(error);
    } else {
      this.props.registerUser({ email, username, password });
    }
  }

  render() {
    console.log(this.props);
    const { user } = this.props;
    let message = null;

    if (user.error) {
      message = {
        header: 'Error while creating a new account',
        content : user.error,
        type : {
          negative : true
        }
      }
    }

    return (
      <div>
        { (user.error) ? <PopupMessage message={message}/> : '' }
        <br/>
        <br/>
        <RegisterForm onSubmit={this.handleSubmit} />        
      </div>
    );
  }
}


function mapStateToProps(state){
  return { user : state.user };
}

export default connect(mapStateToProps, { registerUser, startSubmit })(Register);