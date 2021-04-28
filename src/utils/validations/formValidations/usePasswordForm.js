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


export const usePassword = () => {
    const [values, setValues] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passMessage, setPassMessage] = useState('');
  
    const handlePassChange = (value) => {
      if (values.length > 25) {
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