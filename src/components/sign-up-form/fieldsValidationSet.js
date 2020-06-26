import { isEmail } from 'validator';

// * Utils
import { required, minLength } from 'utils/validators';

export const fieldsValidationSet = {
  name: [
    [required, 'name is required.'],
    [minLength(3), 'name must contain at least 3 characters.']
  ],
  surname: [
    [required, 'surname is required.'],
    [minLength(3), 'surname must contain at least 3 characters.']
  ],
  email: [
    [required, 'email is required.'],
    [minLength(5), 'email must contain at least 5 characters.'],
    [isEmail, 'incorrect email.']
  ],
  password: [
    [required, 'password is required.'],
    [minLength(5), 'password must contain at least 5 characters.']
  ],
  repeat: [
    [required, 'password repeat is required.']
  ]
};