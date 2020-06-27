// * Utils
import { required, minLength, maxLength } from 'utils/validators';

export const fieldsValidationSet = {
  value: [
    [required, 'enter your comment.'],
    [minLength(5), 'comment must contain at least 5 characters'],
    [maxLength(256), 'comment cannot contain more than 256 characters'],
  ]
};