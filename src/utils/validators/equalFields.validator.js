export const equalFields = (basePropertyKey, propertyKyToCompare) => (data, setErrors) => {
  if(data[propertyKyToCompare] === data[basePropertyKey])
    return true;

  setErrors(errors => ({
    ...errors,
    [propertyKyToCompare]: 'значення цього поля та поля паролю повинні бути однаковими.'
  }));

  return false;
}