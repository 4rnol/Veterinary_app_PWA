import { useState } from 'react';
import {
  emailRegex,
  nameRegex,
  lastNameRegex,
  phoneRegex,
  ciRegex,
  nameMateriaRegex,
  ciComplementoRegex
} from '../../../constants/regex';
import {
  sLimitNumber,
  sLimitCharacters,
  sMustFollowTheFollowingFormat,
  sTheNameCannotBeEmpty,
  sOnlyLettersAreAccepted,
  sNameMustHaveMoreThan2Characters,
  sCharacterLimit,
  sTheLastNameCannotBeEmpty,
  sMustHaveMoreThan2Characters,
  sCharacterLimit25,
  sOnlyNumbersAreAllowed,
  sMustBeGreaterThanNumbers,
  sNumbersMinimum,
  sLimitNumber1, sOnlyLettersAreAllowed
} from '../../../constants/strings';

export const usePhone = () => {
    const [values, setValues] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const handlePhoneChange = (value) => {
      if (!phoneRegex.test(value)) {
        setPhoneErrorMessage(sOnlyNumbersAreAllowed);
        setPhoneError(true);
      } else if (value.length < 6) {
        setPhoneErrorMessage(sNumbersMinimum.replace('{0}', 7));
        setPhoneError(true);
      } else if (value.length >= 7) {
        setPhoneErrorMessage(sLimitNumber);
        setPhoneError(true);
      } else {
        setPhoneErrorMessage('');
        setPhoneError(false);
      }
      setValues(value);
    };
    return [values, handlePhoneChange, phoneError, setPhoneError, phoneErrorMessage, setPhoneErrorMessage];
  };