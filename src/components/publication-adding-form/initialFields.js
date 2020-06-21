import React from 'react';

// * Components
import { UploadField, Select } from 'components';

export const initialFields = [
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