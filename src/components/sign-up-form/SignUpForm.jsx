import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from 'js-cookie';

// * Components
import { Form } from 'components';

// * Utils
import { useForm } from 'utils/hooks';
import { postRequest } from 'utils/helpers';
import { equalFields } from 'utils/validators';

// * Actions
import { getPublisher } from 'store/actions';

// * Data
import { initialState } from './initialState';
import { initialFields } from './initialFields';
import { fieldsValidationSet } from './fieldsValidationSet';

// * Sass
import './SignUpForm.scss';

export const SignUpForm = () => {
  const [spin, setSpin] = useState(false);
  const { data, fields, validate, setErrors } = useForm(initialState, initialFields);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();
    setSpin(true);

    const isValid = validate(fieldsValidationSet, [equalFields('password', 'repeat')]);

    if (isValid) {
      const formData = new FormData();
      for (var key in data)
        formData.append(key, data[key]);

      const response = await postRequest('/auth/sign-up', formData);

      if (response.status === 200) {
        set('token', response.data);

        dispatch(await getPublisher());
      }

      else if(response.status === 400) {
        setErrors(errors => ({
          ...errors,
          email: 'емейл не коректний або вже використовується іншим користувачем.',
        }));
      }
    }

    setSpin(false);
  }

  return <Form
    spin={spin}
    classes={['signUpForm']}
    onSubmit={onSubmit}
    buttonText="зареєструватись"
    fields={fields}
  />;
}