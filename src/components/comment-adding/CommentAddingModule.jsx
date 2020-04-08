import React from 'react';

// * Components
import { CommentAddingForm } from './CommentAddingForm';

// * Hooks
import { useFormValidation } from 'utils/hooks';

// * Helpers
import {
  checkIsValid,
  postRequest
} from 'utils/helpers';

const initialState = {
  comment: ''
}

export const CommentAddingModule = ({ refreshComments }) => {
  const { data, errors, change, validate, reset } = useFormValidation(initialState, initialState);

  const fields = [
    {
      value: data.comment,
      error: errors.comment,
      name: 'comment',
      placeholder: 'Залиште ваш коментар...',
      change
    }
  ];

  const validationParams = {
    comment: {
      condition: data.comment.lengh < 5,
      errorText: 'мінімальна довжина коментаря 5 символів'
    }
  }

  const submit = async (e) => {
    e.preventDefault();

    const isValid = checkIsValid(data, validate, validationParams);

    if (isValid) {
      const response = await postRequest('/сomments', data);

      if (response.status === 200) {
        reset();
        refreshComments();
      }
    }
  };

  return (
    <CommentAddingForm submit={submit} fields={fields} />
  )
}