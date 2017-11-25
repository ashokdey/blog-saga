import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { Grid, Button, Form } from 'semantic-ui-react';

const LoginForm = (props) => (
  <div>
    <Grid centered>
      <Form>
        <Form.Field inline>
          <label>Username</label>
          <input placeholder='Your username' />
        </Form.Field>
        <Form.Field inline>
          <label>Password</label>
          <input placeholder='minimum 5 chars long' type="password"/>
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

export default reduxForm({
  form: 'LoginForm'
})(LoginForm);