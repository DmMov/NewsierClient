import React from 'react';

// * Components
import {
  Form,
  Field,
  ReplyAim
} from 'components';

// * Sass
import './CommentAddingForm.scss';

export const CommentAddingForm = ({ fields, submit, replyAim, cancel }) =>
  <Form
    classes={['commentAddingForm']}
    submit={submit}
    buttonText="залишити коментар"
  >
    {
      !!replyAim && <>
        <span className="commentAddingForm__replyMessage">
          доданий вами коментар буде відповіддю на коментар, що ви бачите нижче.
        </span>
        <ReplyAim cancel={cancel} {...replyAim} />
      </>
    }
    {fields.map(field => <Field key={field.name} {...field} />)}
  </Form>