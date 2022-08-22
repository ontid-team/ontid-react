export const lowerCase = (name: string): string => {
  if (name) {
    return name.toLowerCase();
  }

  return name;
};

export const capitalize = (s: string): string => {
  if (typeof s !== 'string') {
    return '';
  }

  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const replaceSymbol = (
  str?: string,
  searchValue?: string,
  replaceValue?: string,
) => {
  return str && typeof str === 'string' && searchValue && replaceValue
    ? str.replaceAll(searchValue, replaceValue)
    : '';
};
