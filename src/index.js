import React  from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import  Body from './components/Components';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Render app

ReactDOM.render(<Body />, document.getElementById('root'));

// Firebase 

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
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

