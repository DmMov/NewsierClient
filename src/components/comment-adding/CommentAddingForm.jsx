import React from 'react';
import { arrayOf, func } from 'prop-types';

// * Components
import {
  Form,
  Field
} from 'components';

// * Constants
import { field } from 'assets/constants';

// * Sass
import './CommentAddingForm.scss';

export const CommentAddingForm = ({ onSubmit, fields }) =>
  <Form
    onSubmit={onSubmit}
    classes={['commentAddingForm']}
    buttonText="залишити коментар"
  >
    {fields.map(field => <Field key={field.name} {...field} />)}
  </Form>

CommentAddingForm.propTypes = {
  fields: arrayOf(field),
  onSubmit: func.isRequired
};