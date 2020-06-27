import React, { useState } from 'react';

// * Components
import { Form } from 'components';

// * Utils
import { useForm } from 'utils/hooks';
import { postRequest } from 'utils/helpers';

// * Data
import { initialState } from './initialState';
import { initialFields } from './initialFields';
import { fieldsValidationSet } from './fieldsValidationSet';

// * Sass
import './PublicationAddingForm.scss';

export const PublicationAddingForm = () => {
  const [spin, setSpin] = useState(false);
  const { data, fields, validate, reset } = useForm(initialState, initialFields);

  const onSubmit = async e => {
    e.preventDefault();
    setSpin(true);

    const isValid = validate(fieldsValidationSet);

    if (isValid) {
      const formData = new FormData();
      for (var key in data)
        formData.append(key, data[key]);

      const response = await postRequest('/publications', formData);

      if (response.status === 200)
        reset();
    }

    setSpin(false);
  };

  return <Form
    spin={spin}
    classes={['publicationAddingForm']}
    onSubmit={onSubmit}
    buttonText="create"
    fields={fields}
  />;
}