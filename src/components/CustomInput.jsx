import React from 'react';
import { Form, Input, Label } from 'semantic-ui-react';

const CustomInput = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div style={{display: 'block', paddingTop: '0.5em', paddingBottom: '0.5em'}}>
    <Form.Field inline>
      <label>Username</label>
      <Input {...input} placeholder={placeholder} type={type} />
    </Form.Field>
    {touched && error && <Label style={{marginTop: '-0.5em'}} basic color='red' pointing>{error}</Label>}
  </div>
);

export default CustomInput;
