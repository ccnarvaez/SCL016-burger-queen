import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBT4zMkjZfic41viFbALSDNLBsiygMEBZw",
    authDomain: "scl016-burguer-queen.firebaseapp.com",
    databaseURL: "https://scl016-burguer-queen-default-rtdb.firebaseio.com",
    projectId: "scl016-burguer-queen",
    storageBucket: "scl016-burguer-queen.appspot.com",
    messagingSenderId: "63205452563",
    appId: "1:63205452563:web:c1ff3a1e0eae8f1b34c8e6",
    measurementId: "G-Q4CBRE3XX2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();