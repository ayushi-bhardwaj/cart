import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCFI--G95IIFwXEfEl3UcdfTQCpRFV8bbw",
  authDomain: "cart-64c1b.firebaseapp.com",
  databaseURL: "https://cart-64c1b.firebaseio.com",
  projectId: "cart-64c1b",
  storageBucket: "cart-64c1b.appspot.com",
  messagingSenderId: "691682186152",
  appId: "1:691682186152:web:ef9bc32c91286a7b0d839d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


