// * Utils
import { required, minLength } from 'utils/validators';

export const fieldsValidationSet = {
  value: [
    [required, 'enter your comment.'],
    [minLength(5), 'comment must contain at least 5 characters']
  ]
};