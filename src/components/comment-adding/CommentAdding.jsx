import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// * Components
import { CommentAddingForm } from './CommentAddingForm';

// * Hooks
import { useFormValidation } from 'utils/hooks';

// * Helpers
import {
  checkIsValid,
  postRequest
} from 'utils/helpers';

// * Actions
import { getComments } from 'store/actions';

// * Selectors
import { selectAuthStatus } from 'utils/selectors';

const initialState = {
  value: ''
}

export const CommentAdding = () => {
  const { data, errors, change, validate, reset } = useFormValidation(initialState, initialState);
  const { publicationId } = useParams();
  const authenticated = useSelector(selectAuthStatus);
  const dispatch = useDispatch();

  const fields = [
    {
      value: data.value,
      error: errors.value,
      name: 'value',
      placeholder: 'Залиште ваш коментар...',
      change
    }
  ];

  const validationParams = {
    value: {
      condition: data.value.length < 5,
      errorText: 'мінімальна довжина коментаря 5 символів'
    }
  }

  const submit = async (e) => {
    e.preventDefault();

    const isValid = checkIsValid(data, validate, validationParams);

    if (isValid) {
      const requestData = {
        ...data,
        publicationId,
      };
      const response = await postRequest('/comments', requestData);

      if (response.status === 200) {
        reset();
        dispatch(getComments(publicationId));
      }
    }
  };

  return authenticated && <CommentAddingForm
    submit={submit}
    fields={fields}
  />
}