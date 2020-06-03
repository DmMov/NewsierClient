import React from 'react';
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
import { initialState } from './initialState';
import { initialFields } from './initialFields';
import { validation } from './validation';

// * Sass
import './SignUpForm.scss';

export const SignUpForm = () => {
  const { data, fields, validate } = useForm(initialState, initialFields);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();

    const isValid = validate(validation);

    if (isValid) {
      const formData = new FormData();
      for (var key in data)
        formData.append(key, data[key]);

      const response = await postRequest('/auth/sign-up', formData);

      if (response.status === 200) {
        set('token', response.data);

        dispatch(await getPublisher());
      }
    }
  }

  return <Form
    classes={['signUpForm']}
    onSubmit={onSubmit}
    buttonText="зареєструватись"
    fields={fields}
  />;
}