import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import LoginForm from '../../../components/LoginForm';

class Login extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    console.log(fields);    
    // this.props.loginUser(fields)
  }

  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit} />
    );
  }
}

export default connect(null, { loginUser })(Login);