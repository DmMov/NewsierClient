import { shape, string, func } from "prop-types";

export const tag = shape({
  id: string.isRequired,
  value: string.isRequired
});

export const field = shape({
  control: string,
  label: string,
  placeholder: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
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
  createdAt: string.isRequired,
});