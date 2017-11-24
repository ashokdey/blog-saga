import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Grid, Button, Form } from 'semantic-ui-react';

let RegisterForm = (props) => (
  <div>
    <Grid centered>
      <Form onSubmit={props.handleSubmit}>
        <Form.Field inline>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text"  placeholder='John Doe' />
        </Form.Field>
        <Form.Field inline>
          <label htmlFor="email" style={{paddingRight: '1.6em'}}>Email</label>
          <Field name="email" component="input" type="text" placeholder='johndoe@email.com' />
        </Form.Field>
        <Form.Field inline>  
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" placeholder='minimum 5 chars long' />
        </Form.Field>
        <Button primary type='submit'>Register</Button>
      </Form>
    </Grid>  
    <Grid centered>
      <div style={{paddingTop: '2em'}}>
        Already Registered? <Link to="/"> Login Me </Link>
      </div>
    </Grid>
  </div>
);

RegisterForm = reduxForm({
  form: 'RegisterForm'
})(RegisterForm);

export default RegisterForm;