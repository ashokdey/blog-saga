import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from './actions';
import { SubmissionError } from 'redux-form';
import isEmail from 'validator/lib/isEmail';
import RegisterForm from '../../../components/RegisterForm';

class Register extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ email = '', username = '', password = '' }) {
    let isError = false;
    const error = {};
    const usernamePattern = /^[a-zA-Z]([a-zA-Z0-9]+)*$/

    if (!isEmail(email)) {
      isError = true;
      error.email = 'Invalid email, try again';
    }

    if (!usernamePattern.test(username.trim()) || username.trim().length < 5) {
      isError = true;
      error.username = 'Required and min 5 chars [like : b33ny]';
    }

    if (password.trim().length < 5) {
      isError = true;
      error.password = 'Required and min 5 chars';
    }

    if (isError) {
      throw new SubmissionError(error);
    } else {
      this.props.registerUser({ email, username, password });
    }
  }

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit} />
    );
  }
}

export default connect(null, { registerUser })(Register);