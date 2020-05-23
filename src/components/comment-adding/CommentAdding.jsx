import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// * Components
import { CommentAddingForm } from './CommentAddingForm';

// * Hooks
import { useForm } from 'utils/hooks';

// * Helpers
import { postRequest } from 'utils/helpers';

// * Actions
import { getComments } from 'store/actions';

// * Selectors
import { selectAuthStatus } from 'utils/selectors';

// * Validators
import {
  required,
  minLength
} from 'utils/validators'

const initialState = {
  value: ''
};

const validation = {
  value: [
    [required, 'напишіть коментар'],
    [minLength(5), 'коментар пивинен містити не менше 5 символів']
  ]
};

export const CommentAdding = () => {
  const { data, errors, change, validate, reset } = useForm(initialState);
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

  const submit = async (e) => {
    e.preventDefault();

    const isValid = validate(validation);

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