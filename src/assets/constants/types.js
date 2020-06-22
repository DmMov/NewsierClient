import { shape, string, func, oneOfType, bool, object, number, array } from "prop-types";

export const tag = shape({
  id: string.isRequired,
  value: string.isRequired
});

export const field = shape({
  control: string,
  label: string,
  placeholder: string,
  name: string.isRequired,
  value: oneOfType([string, bool, object, number, array]),
  error: string,
  type: string,
  onChange: func.isRequired
});

export const comment = shape({
  id: string.isRequired,
  value: string.isRequired,
  publisherId: string.isRequired,
  publisher: string.isRequired,
  publisherImage: string.isRequired,
  parentId: string,
  createdAtDate: string.isRequired,
  createdAtTime: string.isRequired
});