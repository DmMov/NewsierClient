export const isEmpty = obj => {
  for (const key in obj) {
    return !key;
  }

  return true;
}