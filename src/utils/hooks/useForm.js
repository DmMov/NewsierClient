import { useState, useEffect } from 'react';

export const useForm = (initialState, initialFields) =>  {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  useEffect(() => () => {
    reset();
  }, []);

  const onChange = ({ target: { value, name, checked, type, files } }) => {
    const typedValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
    setData(data => ({
      ...data,
      [name]: typedValue
    }));
    setErrors(errors => ({
      ...errors,
      [name]: ''
    }));
  };

  const reset = () => {
    setData(initialState);
    setErrors(initialState);
  }

  const validate = (validationSet) => {
    let validationResults = [];

    for (const key in validationSet) {
      for (const valitationItem of validationSet[key]) {
        const [validator, message] = valitationItem;
        const validationResult = validator(data[key]);

        if (!validationResult)
          setErrors(errors => ({
            ...errors,
            [key]: !!errors[key] ? errors[key] : message
          }));

        validationResults = [
          ...validationResults,
          validationResult
        ];
      }
    }

    return validationResults.find(value => value == false) != false && true;
  };

  const buildFields = () => initialFields.map(
    field => ({
      ...field,
      value: data[field.name],
      error: errors[field.name],
      onChange
    })
  );

  return { data, fields: buildFields(), onChange, reset, validate };
}