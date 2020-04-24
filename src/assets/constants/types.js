import { shape, string, func } from "prop-types";

export const tag = shape({
  id: string.isRequired,
  value: string.isRequired
});

export const field = shape({
  control: string,
  label: string.isRequired,
  placeholder: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  type: string,
  change: func.isRequired,
  error: string
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