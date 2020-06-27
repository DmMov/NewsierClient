import { isEmail } from 'validator';

// * Utils
import { required, minLength } from 'utils/validators';

export const fieldsValidationSet = {
  email: [
    [required, 'email is required.'],
    [minLength(5), 'email must contain at least 5 characters.'],
    [isEmail, 'incorrect email.']
  ],
  password: [
    [required, 'password is required.'],
    [minLength(5), 'password must contain at least 5 characters.']
  ]
};