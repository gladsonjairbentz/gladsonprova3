import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  
  apiKey: "AIzaSyDRbFqe3qpnK0MydOAO2ib5W_HoiqBgT0A",

  authDomain: "myapp-35e6b.firebaseapp.com",

  databaseURL: "https://myapp-35e6b-default-rtdb.firebaseio.com",

  projectId: "myapp-35e6b",

  storageBucket: "myapp-35e6b.appspot.com",

  messagingSenderId: "977301921276",

  appId: "1:977301921276:web:24f43c1b3b8e4c7f532679",

  measurementId: "G-NFY00W3E5Q"

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

// Obter as instâncias de autenticação e banco de dados
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
