/* eslint-disable no-unused-vars */
import React from 'react';
import {render} from 'react-dom';
import 'normalize.css';
import {App} from './app';
import {GlobalStyles} from './GlobalStyles';
import {firebase} from './lib/firebase.prod';
import {FirebaseContext} from './context/Firbase';

render(
    <>
      <FirebaseContext.Provider value ={{firebase}}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </>,
    document.getElementById('root'),
);

