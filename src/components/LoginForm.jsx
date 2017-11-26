import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Grid, Button, Form } from 'semantic-ui-react';
import CustomInput from './CustomInput';

const LoginForm = (props) => {
  const {handleSubmit, submitting } = props;
  console.log(submitting)
  return (
    <div>
      <Grid centered>
        <Form onSubmit={handleSubmit} loading={submitting}>
          <Field
            component={CustomInput} name="username"
            type="text" placeholder="Your username"
            label="Username"
          />
          <Field
            component={CustomInput} name="password" 
            type="password" placeholder="minimum 5 chars long"
            label="Password"
          />
          <Button style={{marginTop: '1em'}} primary type='submit'>Login</Button>
        </Form>
      </Grid>
      <Grid centered>
        <div style={{paddingTop: '2em'}}>
          New Here? <Link to="/register"> Register Me </Link>      
        </div>
      </Grid>
    </div>
  );
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm);