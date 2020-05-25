import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// * Components
import { Form } from 'components';

// * Utils
import { useForm } from 'utils/hooks';
import { postRequest } from 'utils/helpers';
import { selectAuthStatus } from 'utils/selectors';
import {
  required,
  minLength
} from 'utils/validators';

// * Actions
import { getComments } from 'store/actions';

// * Sass
import './CommentAddingForm.scss';

const initialState = {
  value: ''
};

const initialFields = [
  {
    name: 'value',
    placeholder: 'Залиште ваш коментар...',
  }
];

const validation = {
  value: [
    [required, 'напишіть коментар'],
    [minLength(5), 'коментар пивинен містити не менше 5 символів']
  ]
};

export const CommentAddingForm = () => {
  const { data, fields, validate, reset } = useForm(initialState, initialFields);
  const { publicationId } = useParams();
  const authenticated = useSelector(selectAuthStatus);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
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

  return authenticated &&
    <Form
      onSubmit={onSubmit}
      classes={['commentAddingForm']}
      buttonText="залишити коментар"
      fields={fields}
    />;
}