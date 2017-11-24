import React, { Component } from 'react';
// import { connect } from 'react-redux';
import RegisterForm from '../../components/RegisterForm';

class Register extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit} />
    );
  }
}

export default Register;