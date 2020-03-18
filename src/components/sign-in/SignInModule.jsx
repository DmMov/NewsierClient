import React from 'react';
import { isEmail } from 'validator';

// * Components
import { SingInForm } from './SingInForm';

// * Hooks
import { useFormValidation } from 'utils/hooks';

// * Helpers
import { checkIsValid } from 'utils/helpers';
import { postRequest } from 'utils/helpers';

const initialState = {
  email: '',
  password: ''
}

export const SignInModule = () => {
  const { data, errors, change, validate, reset } = useFormValidation(initialState, initialState);

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
      console.log("sign-in form is valid");

      const response = await postRequest('/auth', data);

      console.log('sign-in response', response);
    }
  };

  return <SingInForm fields={fields} submit={submit} />
}
