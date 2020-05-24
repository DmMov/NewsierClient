import React from 'react';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { set } from 'js-cookie';

// * Components
import { Form } from 'components';

// * Hooks
import { useForm } from 'utils/hooks';

// * Helpers
import { postRequest } from 'utils/helpers';

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

const initialFields = [
  {
    name: 'email',
    label: 'електронна адреса',
    placeholder: 'example@email.com',
  },
  {
    name: 'password',
    type: 'password',
    label: 'пароль',
    placeholder: 'введіть пароль',
  }
];

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

export const SignInForm = () => {
  const { data, fields, validate } = useForm(initialState, initialFields);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();

    const isValid = validate(validation);

    if (isValid) {
      const response = await postRequest('/auth', data);

      if (response.status === 200) {
        set('token', response.data.token);

        dispatch(await getPublisher());
      }
    }
  };

  return <Form
    classes={['sign-in-form']}
    onSubmit={onSubmit}
    buttonText="увійти"
    fields={fields}
  />
}