import React from 'react';

// * Components
import { UploadField, Select } from 'components';

export const initialFields = [
  {
    name: 'file',
    type: 'file',
    label: 'upload',
    component: props => <UploadField {...props} />
  },
  {
    name: 'title',
    label: 'title',
    placeholder: 'Enter title...',
  },
  {
    name: 'value',
    control: 'textarea',
    label: 'content',
    placeholder: 'Enter content...',
  },
  {
    name: 'categoryId',
    label: 'categories',
    placeholder: 'Select a category...',
    component: props => <Select url="/categories" {...props} />
  },
  {
    name: 'tags',
    label: 'tags',
    placeholder: 'World, Good News, Wi-Fi...',
  }
];