// * Utils
import { required, minLength, maxLength } from 'utils/validators';

export const fieldsValidationSet = {
  file: [
    [required, 'image is required.']
  ],
  title: [
    [required, 'title is required.'],
    [minLength(32), 'title must contain at least 32 characters.'],
    [maxLength(256), 'title cannot contain more than 256 characters.']
  ],
  value: [
    [required, 'content is required.'],
    [minLength(300), 'content must contain at least 300 characters.']
  ],
  categoryId: [
    [required, 'category is required.']
  ],
  tags: [
    [maxLength(64), 'this field cannot contain more than 64 characters.']
  ],
};