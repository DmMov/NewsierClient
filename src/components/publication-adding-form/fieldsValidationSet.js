// * Utils
import {
  required,
  minLength,
  maxLength
} from 'utils/validators';

export const fieldsValidationSet = {
  file: [
    [required, 'зображення обов\'язкове.']
  ],
  title: [
    [required, 'заголовок обов\'язковий.'],
    [minLength(32), 'заголовок повинен містити не менше 32 символів.'],
    [maxLength(256), 'заголовок повинен містити не більше 256 символів.']
  ],
  value: [
    [required, 'контент обов\'язковий.'],
    [minLength(300), 'контент повинен містити не менше 300 символів.']
  ],
  categoryId: [
    [required, 'категорія обов\'язкова.']
  ],
  tags: [
    [maxLength(256), 'не більше 64 символів.']
  ],
};