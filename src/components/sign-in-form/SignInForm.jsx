import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { set } from 'js-cookie';

// * Components
import { Form } from 'components';

// * Utils
import { useForm } from 'utils/hooks';
import { postRequest } from 'utils/helpers';
import {
  required,
  minLength
} from 'utils/validators';

// * Actions
import { getPublisher } from 'store/actions';

// * Sass
import './SignInForm.scss';

const initialState = {
  email: '',
  password: ''
};

const initialFields = [
  {
    name: 'email',
    label: 'електронна адреса',
    placeholder: 'Example@email.com',
  },
  {
    name: 'password',
    type: 'password',
    label: 'пароль',
    placeholder: 'Введіть пароль...',
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
  const [spin, setSpin] = useState(false);
  const { data, fields, validate, setErrors } = useForm(initialState, initialFields);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();
    setSpin(true);

    const isValid = validate(validation);

    if (isValid) {
      const response = await postRequest('/auth/sign-in', data);

      if (response.status === 200) {
        set('token', response.data);

        dispatch(await getPublisher());
      }

      else if(response.status === 400) {
        setErrors(errors => ({
          ...errors,
          email: 'не коректний емайл або пароль.',
          password: 'не коректний емайл або пароль.'
        }));
      }
    }

    setSpin(false);
  };

  return <Form
    spin={spin}
    classes={['signInForm']}
    onSubmit={onSubmit}
    buttonText="увійти"
    fields={fields}
  />;
}