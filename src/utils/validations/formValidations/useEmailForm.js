import { useState } from 'react';
import {
  emailRegex,
  nameRegex,
  lastNameRegex,
  phoneRegex,
  ciRegex,
  nameMateriaRegex,
  ciComplementoRegex
} from '../regexs';
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
} from '../strings';

export const useEmail = () => {
    const [values, setValues] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    const handleEmailChange = (value) => {
      if (!emailRegex.test(value)) {
        setEmailError(true);
        setEmailMessage(sMustFollowTheFollowingFormat);
      } else if (value.length > 29) {
        setEmailError(true);
        setEmailMessage(sLimitCharacters);
      } else {
        setEmailError(false);
        setEmailMessage('');
      }
      setValues(value);
    };
    return [values, handleEmailChange, emailError, setEmailError, emailMessage, setEmailMessage];
  };