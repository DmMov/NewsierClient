import React from 'react';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { set } from 'js-cookie';

// * Components
import { SingInForm } from './SingInForm';

// * Hooks
import { useFormValidation } from 'utils/hooks';

// * Helpers
import {
  checkIsValid,
  getRequest,
  postRequest
} from 'utils/helpers';

// * Actions
import { setPublisher } from 'store/actions';

const initialState = {
  email: '',
  password: ''
}

export const SignInModule = () => {
  const { data, errors, change, validate, reset } = useFormValidation(initialState, initialState);
  const dispatch = useDispatch();

  const fields = [
    {
      value: data.email,
      error: errors.email,
      name: 'email',
      label: 'електронна адреса',
      placeholder: 'example@email.com',
      change
    },
    {
      value: data.password,
      error: errors.password,
      name: 'password',
      type: 'password',
      label: 'пароль',
      placeholder: 'введіть пароль',
      change
    }
  ];

  const validationParams = {
    email: {
      condition: !isEmail(data.email),
      errorText: 'недопустимий формат електронної адреси'
    },
    password: {
      condition: data.password.length < 5,
      errorText: 'пароль повинен містити не меньше 5 символів'
    }
  }

  const submit = async (e) => {
    e.preventDefault();

    const isValid = checkIsValid(data, validate, validationParams);

    if (isValid) {
      const response = await postRequest('/auth', data);

      if (response.status === 200) {
        set('token', response.data.token);

        const publisherResponse = await getRequest('/auth');

        if (publisherResponse.status == 200) {
          dispatch(setPublisher(publisherResponse.data));
        }

        console.log('publisher ', publisherResponse.data);
      }
    }
  };

  return <SingInForm fields={fields} submit={submit} />
}
