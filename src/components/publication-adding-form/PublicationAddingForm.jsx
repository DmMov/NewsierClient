import React from 'react';
import { useDispatch } from 'react-redux';
import { set } from 'js-cookie';

// * Components
import {
  Form,
  UploadField
} from 'components';

// * Utils
import { useForm } from 'utils/hooks';
import { postRequest } from 'utils/helpers';
import {
  required,
  minLength,
  maxLength
} from 'utils/validators';

// * Actions
import { getPublisher } from 'store/actions';

// * Sass
import './PublicationAddingForm.scss';

const initialState = {
  file: null,
  title: '',
  value: ''
};

const initialFields = [
  {
    name: 'file',
    type: 'file',
    label: 'завантажити',
    component: UploadField
  },
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
  file: [
    [required, 'зображення обов\'язкове.']
  ],
  title: [
    [required, 'заголовок обов\'язковий.'],
    [minLength(32), 'заголовок повинен містити не менше 32 символів.'],
    [maxLength(256), 'заголовок повинен містити не більше 256 символів.']
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