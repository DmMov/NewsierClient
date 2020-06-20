import { isEmail } from 'validator';

// * Utils
import {
  required,
  minLength
} from 'utils/validators';

export const fieldsValidationSet = {
  email: [
    [required, 'емейл обов\'язковий.'],
    [minLength(5), 'емейл повинен містити не менше 5 символів.'],
    [isEmail, 'не коректний емейл.']
  ],
  password: [
    [required, 'пароль обов\'язковий.'],
    [minLength(5), 'пароль повинен містити не менше 5 символів.']
  ]
};