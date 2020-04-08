import React from 'react';

// * Components
import {
  Form,
  Field
} from 'components';

// * Sass
import './CommentAddingForm.scss';

export const CommentAddingForm = ({ fields, submit }) =>
  <Form
    classes={['commentAddingForm']}
    submit={submit}
    buttonText="залишити коментар"
  >
    {fields.map(field => <Field key={field.name} {...field} />)}
  </Form>