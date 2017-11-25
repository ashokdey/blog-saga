import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import { SubmissionError } from 'redux-form';
import LoginForm from '../../../components/LoginForm';

class Login extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ username = '', password = '' }) {
    const error = {};
    let isError = false;

    if (username.trim() === '' || username.trim().length < 5) {
      error.username = 'Required and min 5 chars';
      isError = true;
    }

    if (password.trim() === '' || password.trim().length < 5) {
      error.password = 'Required and min 5 chars';
      isError = true;
    }

    if (isError) {
      throw new SubmissionError(error);
    } else {
      this.props.loginUser({ username, password });
    }
  }

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit} />
    );
  }
}

export default connect(null, { loginUser })(Login);