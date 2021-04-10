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


export const usePassword = () => {
    const [values, setValues] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passMessage, setPassMessage] = useState('');
  
    const handlePassChange = (value) => {
      if (values.length > 29) {
        setPassMessage(sLimitCharacters);
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassMessage('');
      }
      setValues(value);
    };
    return [values, handlePassChange, passwordError, setPasswordError, passMessage, setPassMessage];
  };