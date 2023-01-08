import { useEffect, useState } from "react";
import {
  hasLowerCase,
  hasNumber,
  hasSpace,
  hasSpecialChar,
  hasUpperCase,
  checkLength,
} from "../utils/commonHelpers";

export const UsePasswordStrength = (pass: string) => {
  const [upper, setUpperrCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [lower, setLowerCase] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [space, setSpace] = useState(false);
  const [valid, setValid] = useState(false);
  const [length, setCheckLength] = useState(false);

  const checkUpperCase = () => {
    if (hasUpperCase(pass)) {
      setUpperrCase(true);
    } else {
      setUpperrCase(false);
    }
  };

  const checkNumber = () => {
    if (hasNumber(pass)) {
      setNumber(true);
    } else {
      setNumber(false);
    }
  };

  const _checkLength = () => {
    if (checkLength(pass)) {
      setCheckLength(true);
    } else {
      setCheckLength(false);
    }
  };

  const checkLowerCase = () => {
    if (hasLowerCase(pass)) {
      setLowerCase(true);
    } else {
      setLowerCase(false);
    }
  };

  const checkSpace = () => {
    if (hasSpace(pass)) {
      setSpace(true);
    } else {
      setSpace(false);
    }
  };

  const checkSpecialChar = () => {
    if (hasSpecialChar(pass)) {
      setSpecialChar(true);
    } else {
      setSpecialChar(false);
    }
  };

  const checkAll = () => {
    if (upper && number && lower && specialChar && !space) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    checkLowerCase();
    checkNumber();
    _checkLength();
    checkUpperCase();
    // checkSpecialChar();
    // checkSpace();
    // checkAll();
  }, [pass]);
  return { number, lower, upper, length };
};
