// * Components
import { UploadField } from 'components';

export const initialFields = [
  {
    name: 'file',
    type: 'file',
    label: 'upload profile photo',
    component: UploadField
  },
  {
    name: 'name',
    label: 'name',
    placeholder: 'Enter your name',
  },
  {
    name: 'surname',
    label: 'surname',
    placeholder: 'Enter your surname',
  },
  {
    name: 'email',
    label: 'email',
    placeholder: 'example@email.com',
  },
  {
    name: 'password',
    type: 'password',
    label: 'password',
    placeholder: 'Enter password...',
  },
  {
    name: 'repeat',
    type: 'password',
    label: 'repeat password',
    placeholder: 'Repeat password...',
  }
];