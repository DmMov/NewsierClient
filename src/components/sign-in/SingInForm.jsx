import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';

// * Components
import {
  Form,
  Field
} from 'components';

export const SingInForm = ({ fields, submit }) =>
  <Form
    title="вхід"
    classes={['sign-in-form']}
    submit={submit}
    buttonText="увійти"
  >
    { fields.map(field => <Field key={field.name} {...field} />) }
  </Form>

SingInForm.propTypes = {
  fields: arrayOf(
    shape({
      control: string,
      label: string.isRequired,
      placeholder: string.isRequired,
      name: string.isRequired,
      value: string.isRequired,
      type: string,
      change: func.isRequired,
      error: string
    })
  ),
  submit: func
}