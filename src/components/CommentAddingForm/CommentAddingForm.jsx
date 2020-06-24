import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// * Components
import { Form } from 'components';

// * Utils
import { useForm } from 'utils/hooks';
import { postRequest } from 'utils/helpers';
import { selectAuthStatus } from 'utils/selectors';

// * Actions
import { getComments } from 'store/actions';

// * Data
import { initialState } from './initialState';
import { initialFields } from './initialFields';
import { fieldsValidationSet } from './fieldsValidationSet';

// * Sass
import './CommentAddingForm.scss';

export const CommentAddingForm = () => {
  const [spin, setSpin] = useState(false);
  const { data, fields, validate, reset } = useForm(initialState, initialFields);
  const { publicationId } = useParams();
  const authenticated = useSelector(selectAuthStatus);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    setSpin(true);

    const isValid = validate(fieldsValidationSet);

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

    setSpin(false);
  };

  return authenticated &&
    <Form
      spin={spin}
      onSubmit={onSubmit}
      classes={['commentAddingForm']}
      buttonText="залишити коментар"
      fields={fields}
    />;
}