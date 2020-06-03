// * Components
import { UploadField } from 'components';

export const initialFields = [
  {
    name: 'file',
    type: 'file',
    label: 'завантажити фото',
    component: UploadField
  },
  {
    name: 'name',
    label: 'Ім\'я',
    placeholder: 'Введіть ваше ім\'я',
  },
  {
    name: 'surname',
    label: 'Прізвище',
    placeholder: 'Введіть ваше прізвище',
  },
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
  },
  {
    name: 'repeat',
    type: 'password',
    label: 'підтвердження паролю',
    placeholder: 'Повторіть пароль...',
  }
];