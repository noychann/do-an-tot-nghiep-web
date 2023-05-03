const RegExpValidator = (regexp, value = "") => {
  return regexp.test(value);
};

export const PATTERN_PHONE = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;
export const PATTERN_TEXT = /[^0-9#?!@$%^&*-+=_]+$/; // Trừ số và các kí tự đặc biệt
export const PATTERN_NUMBER = /^[0-9]+$/;
export const PATTERN_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
export const PATTERN_PASSWORD = /^[a-z0-9A-Z#?!@$%^&*-+=_][^\s]+$/; // Chứa kí tự không dấu, số, kí tự đặc biệt, không chứa khoảng trắng

export const ValidatorPhone = (value = "") => {
  return RegExpValidator(PATTERN_PHONE, value);
};

export const ValidatorEmail = (value = "") => {
  return RegExpValidator(PATTERN_EMAIL, value);
};

export const ValidatorFullName = (value = "") => {
  return RegExpValidator(PATTERN_TEXT, value);
};

export const ValidatorCode = (value = "") => {
  return RegExpValidator(PATTERN_NUMBER, value);
};

export const ValidatorPassword = (value = "") => {
  return RegExpValidator(PATTERN_PASSWORD, value);
};
