import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Grid, Button, Form, Message, Icon } from 'semantic-ui-react';
import CustomInput from './CustomInput';

let RegisterForm = (props) => {
  const {handleSubmit, submitting } = props;
  
  return (
    <div>
      <Grid centered>
        <Form onSubmit={handleSubmit} loading={submitting}>
          <Field 
            component={CustomInput} name="username" 
            type="text"  placeholder="a nick name"
            label="Username"
          />
          <Field 
            component={CustomInput} name="email"
            type="text" placeholder="johndoe@email.com"
            label="Email" ls={{marginRight: "3em"}}
          />
          <Field 
            component={CustomInput} name="password" 
            type="password"   placeholder="minimum 5 chars long"
            label="Password"
          />
          <Button style={{marginTop: '1em'}} primary type='submit'>Register</Button>
        </Form>
      </Grid>  
      <Grid centered>
        <div style={{paddingTop: '2em'}}>
          <Message info>
            <Icon name='info' />
            Already have an account?&nbsp;<Link style={{fontWeight: 'bolder'}} to="/login">Login </Link>
          </Message>
        </div>
      </Grid>
    </div>
  );
}

RegisterForm = reduxForm({
  form: 'RegisterForm'
})(RegisterForm);

export default RegisterForm;