// * Utils
import { required, minLength } from 'utils/validators';

export const fieldsValidationSet = {
  value: [
    [required, 'напишіть коментар'],
    [minLength(5), 'коментар пивинен містити не менше 5 символів']
  ]
};