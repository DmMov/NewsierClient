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

// * Sass
import './PublicationAddingForm.scss';

const initialState = {
  title: '',
  value: ''
};

const initialFields = [
  {
    name: 'title',
    label: 'заголовок',
    placeholder: 'Введіть заголовок публікації...',
  },
  {
    name: 'value',
    control: 'textarea',
    label: 'контент',
    placeholder: 'Заповніть контент публікації...',
  }
];

const validation = {
  title: [
    [required, 'заголовок обов\'язковий.'],
    [minLength(32), 'заголовок повинен містити не менше 32 символів.'],
    [minLength(256), 'заголовок повинен містити не більше 256 символів.']
  ],
  value: [
    [required, 'контент обов\'язковий.'],
    [minLength(300), 'контент повинен містити не менше 300 символів.']
  ]
};

export const PublicationAddingForm = () => {
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
    classes={['publicationAddingForm']}
    onSubmit={onSubmit}
    buttonText="створити"
    fields={fields}
  />;
}