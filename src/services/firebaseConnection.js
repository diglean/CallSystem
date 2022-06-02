import firebase from "firebase/app";
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyA_vDZ-w_ECmYiw2yrIQDG9zY7cY9J6L5c",
    authDomain: "sistema-48405.firebaseapp.com",
    projectId: "sistema-48405",
    storageBucket: "sistema-48405.appspot.com",
    messagingSenderId: "644422293598",
    appId: "1:644422293598:web:5295c56b5a21cfdb3c7ccf",
    measurementId: "G-EN1WGH7V0Y"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;