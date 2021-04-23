import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAy2nkebvE6rQ3S-d5IesBEaTpsMm6efi4",
    authDomain: "myfirebase-acd6a.firebaseapp.com",
    databaseURL: "https://myfirebase-acd6a.firebaseio.com",
    projectId: "myfirebase-acd6a",
    storageBucket: "myfirebase-acd6a.appspot.com",
    messagingSenderId: "910006688322",
    appId: "1:910006688322:web:c255e8fb32ad8c51df2bdb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  export {projectStorage};