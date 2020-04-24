import React from 'react';
import { arrayOf, func } from 'prop-types';

// * Components
import {
  Form,
  Field
} from 'components';

// * Constants
import { field } from 'assets/constants';

export const SingInForm = ({ fields, submit }) =>
  <Form
    classes={['sign-in-form']}
    submit={submit}
    buttonText="увійти"
  >
    { fields.map(field => <Field key={field.name} {...field} />) }
  </Form>

SingInForm.propTypes = {
  fields: arrayOf(field),
  submit: func.isRequired
};