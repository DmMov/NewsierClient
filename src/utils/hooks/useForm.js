import { useState, useEffect } from 'react';

export const useForm = (initialState) =>  {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  useEffect(() => () => {
    reset();
  }, []);

  const change = ({ target: { value, name, checked, type, files } }) => {
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

  return { data, errors, change, reset, validate };
}