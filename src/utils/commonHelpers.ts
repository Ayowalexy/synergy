export const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

export const _passwordRegex = /^(?=.*[A-Z])/;

export const isValidEmail = (value: string) => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value);
};

export const hasLowerCase = (value: string) => {
  return value && /^(?=.*[a-z])/.test(value);
};
export const hasUpperCase = (value: string) => {
  return value && /^(?=.*[A-Z])/.test(value);
};

export const hasNumber = (value: string) => {
  return value && /^(?=.*[0-9])/.test(value);
};

export const checkLength = (value: string) => value && value.length > 8

export const hasSpecialChar = (value: string) => {
  return value && /^(?=.*[~!@#$%^&*)(_+-:[}=])/.test(value);
};

export const hasSpace = (value: string) => {
  if (value.includes(" ")) {
    return true;
  } else return false;
};

export const clearInput = (
  ref: React.MutableRefObject<HTMLInputElement | null>
) => {
  if (ref.current != null) {
    ref.current.value = "";
  }
};
