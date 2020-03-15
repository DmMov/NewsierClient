import React from 'react';
import { isEmail } from 'validator';

// * Components
import { SingInForm } from './SingInForm';

// * Hooks
import { useFormValidation } from 'utils/hooks';

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
      change
    },
    {
      value: data.password,
      error: errors.password,
      name: 'password',
      type: 'password',
      label: 'пароль',
      change
    }
  ];

  const validation_params = {
    email: {
      condition: !isEmail(data.email),
      errorText: ' недопустимий формат електронної адреси '
    },
    password: {
      condition: data.password.length < 5,
      errorText: ' пароль повинен містити не меньше 5 символів '
    }
  }

  const submit = e => {
    e.preventDefault();

    const data_keys = Object.keys(data);
    const validation_results = data_keys.map(item => item && validate(item, data[item], !!validation_params[item] && validation_params[item]));
    const valid = validation_results.find(value => value == false) != false && true;

    if (valid) {
      console.log("sign-in form is valid")
    }
  };

  return <SingInForm fields={fields} submit={submit} />
}
