import React from 'react';

// * Components
import {
  Form,
  UploadField,
  Select
} from 'components';

// * Utils
import { useForm } from 'utils/hooks';
import { postRequest } from 'utils/helpers';
import {
  required,
  minLength,
  maxLength
} from 'utils/validators';

// * Sass
import './PublicationAddingForm.scss';

const initialState = {
  file: null,
  title: '',
  value: '',
  categoryId: '',
  tags: ''
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
  },
  {
    name: 'categoryId',
    label: 'категорія',
    placeholder: 'Виберіть категорію...',
    component: props => <Select url="/categories" {...props} />
  },
  {
    name: 'tags',
    label: 'теги',
    placeholder: 'Світ, Хороші Новини, Wi-Fi...',
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
  ],
  categoryId: [
    [required, 'категорія обов\'язкова.']
  ],
  tags: [
    [maxLength(256), 'не більше 64 символів.']
  ],
};

export const PublicationAddingForm = () => {
  const { data, fields, validate, reset } = useForm(initialState, initialFields);

  const onSubmit = async e => {
    e.preventDefault();

    const isValid = validate(validation);

    if (isValid) {
      const formData = new FormData();
      for (var key in data)
        formData.append(key, data[key]);

      const response = await postRequest('/publications', formData);

      if (response.status === 200)
        reset();
    }
  };

  return <Form
    classes={['publicationAddingForm']}
    onSubmit={onSubmit}
    buttonText="створити"
    fields={fields}
  />;
}