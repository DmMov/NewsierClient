import React from 'react';

// * Components
import {
  Form,
  Field,
  CommentToReply
} from 'components';

// * Sass
import './CommentAddingForm.scss';

export const CommentAddingForm = ({ fields, submit, commentToReply, cancel }) =>
  <Form
    classes={['commentAddingForm']}
    submit={submit}
    buttonText="залишити коментар"
  >
    {
      !!commentToReply &&
        <span className="commentAddingForm__replyMessage">
          доданий вами коментар буде відповіддю на коментар, що ви бачите нижче.
        </span>
    }
    {!!commentToReply && <CommentToReply cancel={cancel} {...commentToReply} />}
    {fields.map(field => <Field key={field.name} {...field} />)}
  </Form>