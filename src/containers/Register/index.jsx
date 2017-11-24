import React from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Register = (props) => (
  <div>
    <Grid centered>
      <Form>
        <Form.Field inline>
          <label>Username</label>
          <input placeholder='John Doe' />
        </Form.Field>
        <Form.Field inline>
          <label style={{paddingRight: '1.6em'}}>Email</label>
          <input placeholder='johndoe@email.com' />
        </Form.Field>
        <Form.Field inline>  
          <label>Password</label>
          <input placeholder='minimum 5 chars long' type="password"/>
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
export default Register;