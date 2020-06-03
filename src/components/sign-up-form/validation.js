import { isEmail } from 'validator';

// * Utils
import {
  required,
  minLength
} from 'utils/validators';

export const validation = {
  name: [
    [required, 'ім\'я обов\'язкове.'],
    [minLength(3), 'ім\'я повинене містити не менше 3 символів.']
  ],
  surname: [
    [required, 'прізвище обов\'язкове.'],
    [minLength(3), 'прізвище повинене містити не менше 3 символів.']
  ],
  email: [
    [required, 'емейл обов\'язковий.'],
    [minLength(5), 'емейл повинен містити не менше 5 символів.'],
    [isEmail, 'не коректний емейл.']
  ],
  password: [
    [required, 'пароль обов\'язковий.'],
    [minLength(5), 'пароль повинен містити не менше 5 символів.']
  ],
  repeat: [
    [required, 'підтвердження паролю обов\'язкове.'],
    [minLength(5), 'підтвердження паролю повинене містити не менше 5 символів.']
  ]
};