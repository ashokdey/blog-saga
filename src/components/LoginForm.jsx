import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Grid, Button, Form } from 'semantic-ui-react';

const LoginForm = (props) => {
  const {handleSubmit } = props;
  return (
    <div>
      <Grid centered>
        <Form onSubmit={handleSubmit}>
          <Form.Field inline>
            <label>Username</label>
            <Field component="input" name="username" type="text" placeholder='Your username' />
          </Form.Field>
          <Form.Field inline>
            <label>Password</label>
            <Field component="input" name="password" type="password" placeholder='minimum 5 chars long'/>
          </Form.Field>
          <Button primary type='submit'>Login</Button>
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