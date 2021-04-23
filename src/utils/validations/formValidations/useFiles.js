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

export const useFiles=()=>{
    const [values, setValues] = useState(null);
    const [fileError,setFileError] = useState(false);
  
    const [fileMessage,setFileMessage] = useState("");
    const [previewSource,setPreviewSource]=useState(null);
  
    const preViewFile=(file)=>{
      const reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        setPreviewSource(reader.result);
      }
    }
    const handleFileChange = (value) =>{
        setValues(value);
        setFileError(false);
        preViewFile(value);
    }
   
    return [values,handleFileChange,fileError,
      setFileError,fileMessage,setFileMessage,previewSource];
  
  };