/* eslint-disable no-unused-vars */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';
// seed the databse
// config

const config = {
  apiKey: 'AIzaSyB0ZPMcE4-zxRLidNg0x6qt49hocgWsoJA',
  authDomain: 'netflix-clone-16e63.firebaseapp.com',
  projectId: 'netflix-clone-16e63',
  storageBucket: 'netflix-clone-16e63.appspot.com',
  messagingSenderId: '1057803051661',
  appId: '1:1057803051661:web:c8515dfc39f40b5b2d78c4',
};

const firebase = Firebase.initializeApp(config);


export {firebase};
