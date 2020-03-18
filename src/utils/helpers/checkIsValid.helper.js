export const checkIsValid = (data, validate, validationParams) => {
  const dataKeys = Object.keys(data);
  const validationResults = dataKeys.map(item => item && validate(item, data[item], !!validationParams[item] && validationParams[item]));
  return validationResults.find(value => value == false) != false && true;
}