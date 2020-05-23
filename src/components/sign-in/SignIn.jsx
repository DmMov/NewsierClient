import React from 'react';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { set } from 'js-cookie';

// * Components
import { SingInForm } from './SingInForm';

// * Hooks
import { useForm } from 'utils/hooks';

// * Helpers
import {
  checkIsValid,
  postRequest
} from 'utils/helpers';

// * Actions
import { getPublisher } from 'store/actions';

// * Validators
import {
  required,
  minLength
} from 'utils/validators';

const initialState = {
  email: '',
  password: ''
};

const validation = {
  email: [
    [required, 'емейл обов\'язковий.'],
    [minLength(5), 'емейл повинен містити не менше 5 символів.'],
    [isEmail, 'не коректний емейл.']
  ],

  password: [
    [required, 'пароль обов\'язковий.'],
    [minLength(5), 'пароль повинен містити не менше 5 символів.']
  ]
};

export const SignIn = () => {
  const { data, errors, change, validate } = useForm(initialState);
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

  const submit = async e => {
    e.preventDefault();

    const isValid = validate(validation);

    if (isValid) {
      console.log('hello');
      const response = await postRequest('/auth', data);

      if (response.status === 200) {
        set('token', response.data.token);

        dispatch(await getPublisher());
      }
    }
  };

  return <SingInForm fields={fields} submit={submit} />
}