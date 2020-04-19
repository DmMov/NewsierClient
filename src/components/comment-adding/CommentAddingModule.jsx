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
import { setReplyAim } from 'store/actions';

const initialState = {
  comment: ''
}

export const CommentAddingModule = ({ refreshComments }) => {
  const { data, errors, change, validate, reset } = useFormValidation(initialState, initialState);
  const { publicationId } = useParams();
  const dispatch = useDispatch();
  const replyAim = useSelector(selectReplyAim);

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
      condition: data.comment.length < 5,
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
        refreshComments();
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