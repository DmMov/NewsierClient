import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from 'js-cookie';

// * Components
import { Form } from 'components';

// * Utils
import { useForm } from 'utils/hooks';
import { postRequest } from 'utils/helpers';

// * Actions
import { getPublisher } from 'store/actions';

// * Data
import { fieldsValidationSet } from './fieldsValidationSet';
import { initialState } from './initialState';
import { initialFields } from './initialFields';

// * Sass
import './SignInForm.scss';

export const SignInForm = () => {
  const [spin, setSpin] = useState(false);
  const { data, fields, validate, setErrors } = useForm(initialState, initialFields);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();
    setSpin(true);

    const isValid = validate(fieldsValidationSet);

    if (isValid) {
      const response = await postRequest('/auth/sign-in', data);

      if (response.status === 200) {
        set('token', response.data);
        dispatch(await getPublisher());
      }

      else if (response.status === 400) {
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
    buttonText="sign in"
    fields={fields}
  />;
}