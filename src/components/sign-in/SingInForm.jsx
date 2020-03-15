import React from 'react';

// * Components
import {
  Form,
  Field
} from 'components';

export const SingInForm = ({ fields, submit }) =>
  <Form
    classes={['sign-in-form']}
    submit={submit}
    buttonText="увійти"
  >
    { fields.map(field => <Field key={field.name} {...field} />) }
  </Form>
