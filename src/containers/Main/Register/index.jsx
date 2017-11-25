import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from '../../../components/RegisterForm';
import { registerUser } from './actions';

class Register extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.registerUser(values);
  }

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit} />
    );
  }
}

export default connect(null, { registerUser })(Register);