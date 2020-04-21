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

// * Selectors
import { selectReplyAim } from 'utils/selectors';

// * Actions
import {
  setReplyAim,
  getComments
} from 'store/actions';

const initialState = {
  value: ''
}

export const CommentAddingModule = () => {
  const { data, errors, change, validate, reset } = useFormValidation(initialState, initialState);
  const { publicationId } = useParams();
  const dispatch = useDispatch();
  const replyAim = useSelector(selectReplyAim);

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

  const cancel = () => dispatch(setReplyAim(null));

  const submit = async (e) => {
    e.preventDefault();

    const isValid = checkIsValid(data, validate, validationParams);

    if (isValid) {
      const requestData = {
        ...data,
        publicationId,
        parentId: !!replyAim ? replyAim.id : null
      };
      const response = await postRequest('/comments', requestData);

      if (response.status === 200) {
        reset();
        cancel();
        dispatch(getComments(publicationId));
      }
    }
  };

  return <CommentAddingForm
    submit={submit}
    fields={fields}
    cancel={cancel}
    replyAim={replyAim}
  />
}