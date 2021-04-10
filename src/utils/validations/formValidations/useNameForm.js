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

export const useFullName = () => {
    const [values, setValues] = useState('');
    const [fullNameError, setFullNameError] = useState(false);
    const [fullNameMesasge, setFullNameErrorMessage] = useState(null);
    const handleFullNameChange = (value) => {
      if (value.length === 0) {
        setFullNameErrorMessage(sTheNameCannotBeEmpty);
        setFullNameError(true);
      } else if (!nameRegex.test(value)) {
        setFullNameErrorMessage(sOnlyLettersAreAccepted);
        setFullNameError(true);
      } else if (value.length > 0 && value.length <= 2) {
        setFullNameErrorMessage(sNameMustHaveMoreThan2Characters);
        setFullNameError(true);
      } else if (value.length > 24) {
        setFullNameErrorMessage(sCharacterLimit25);
        setFullNameError(true);
      } else {
        setFullNameErrorMessage(null);
        setFullNameError(false);
      }
      setValues(value);
    };
    return [values, handleFullNameChange, fullNameError, setFullNameError, fullNameMesasge, setFullNameErrorMessage];
  };